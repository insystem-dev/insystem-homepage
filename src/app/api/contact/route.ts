import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Resend 클라이언트는 요청 시점에 만든다.
 * 모듈 스코프에서 생성하면 RESEND_API_KEY 가 없을 때 라우트 로드 자체가
 * 예외로 죽어서(빌드 단계 포함) 검증 로직에도 도달하지 못한다.
 */
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

/**
 * 발신 주소.
 * insystem.kr 도메인을 Resend 에 등록/검증한 뒤 CONTACT_FROM_EMAIL 을 설정하면
 * 그때부터 자사 도메인으로 발송되고 사용자 자동 응답도 함께 활성화된다.
 * 미설정 시에는 기존 동작(Resend 테스트 도메인)을 유지한다.
 */
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "contact@resend.dev";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "help@insystem.kr";
/** 검증된 자사 도메인이 설정된 경우에만 자동 응답을 보낸다 */
const AUTO_REPLY_ENABLED = Boolean(process.env.CONTACT_FROM_EMAIL);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** 필드별 최대 길이 — 과도한 길이의 페이로드를 막는다 */
const MAX_LEN = {
  name: 100,
  email: 254,
  phone: 40,
  company: 100,
  subject: 200,
  message: 5000,
} as const;

/** 사용자 입력을 메일 HTML 에 넣기 전 이스케이프 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** 이스케이프 후 줄바꿈만 <br> 로 변환 */
function toHtmlBlock(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br>");
}

/**
 * 단순 IP 기반 rate limit.
 * 서버리스에서는 인스턴스마다 상태가 분리되어 완벽하지 않지만,
 * 단일 인스턴스로 쏟아지는 반복 제출은 막아준다.
 */
const RATE_LIMIT = { windowMs: 60_000, max: 3 };
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t: number) => now - t < RATE_LIMIT.windowMs
  );
  recent.push(now);
  hits.set(ip, recent);

  // 오래된 항목 정리 (메모리 누수 방지)
  if (hits.size > 1000) {
    hits.forEach((times: number[], key: string) => {
      if (times.every((t: number) => now - t >= RATE_LIMIT.windowMs)) {
        hits.delete(key);
      }
    });
  }
  return recent.length > RATE_LIMIT.max;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "요청이 너무 잦습니다. 잠시 후 다시 시도해주세요." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, company, subject, message, website } = body;

    // 허니팟 — 사람에게는 보이지 않는 필드이므로 값이 있으면 봇으로 간주한다.
    // 봇에게 성공처럼 보이도록 200 을 돌려주되 메일은 보내지 않는다.
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 필수 항목
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    // 이메일 형식
    if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { error: "이메일 형식이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    // 길이 제한
    const fields = { name, email, phone, company, subject, message };
    for (const [key, value] of Object.entries(fields)) {
      if (typeof value === "string" && value.length > MAX_LEN[key as keyof typeof MAX_LEN]) {
        return NextResponse.json(
          { error: "입력값이 너무 깁니다." },
          { status: 400 }
        );
      }
    }

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY 가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "메일 발송이 구성되지 않았습니다. 관리자에게 문의해주세요." },
        { status: 503 }
      );
    }

    // 관리자에게 보낼 이메일
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      // 받은 메일에서 바로 회신하면 문의자에게 가도록 한다
      replyTo: email,
      subject: `[홈페이지 문의] ${subject} - ${name}`,
      html: `
        <h2>새로운 연락 요청</h2>
        <p><strong>이름:</strong> ${escapeHtml(name)}</p>
        <p><strong>이메일:</strong> ${escapeHtml(email)}</p>
        <p><strong>전화:</strong> ${phone ? escapeHtml(phone) : "미입력"}</p>
        <p><strong>회사:</strong> ${company ? escapeHtml(company) : "미입력"}</p>
        <p><strong>제목:</strong> ${escapeHtml(subject)}</p>
        <p><strong>메시지:</strong></p>
        <p>${toHtmlBlock(message)}</p>
      `,
    });

    // 사용자에게 보낼 자동 응답 — 자사 도메인 검증이 끝난 경우에만.
    // 실패해도 문의 접수 자체는 성공으로 처리한다.
    if (AUTO_REPLY_ENABLED) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          subject: "인시스템 - 문의해 주셔서 감사합니다",
          html: `
            <h2>안녕하세요, ${escapeHtml(name)}님!</h2>
            <p>보내주신 문의를 잘 받았습니다.</p>
            <p>담당자 확인 후 빠른 시간 내에 연락드리겠습니다.</p>
            <hr>
            <p><strong>문의 내용:</strong></p>
            <p>${toHtmlBlock(message)}</p>
          `,
        });
      } catch (autoReplyError) {
        console.error("Auto-reply error:", autoReplyError);
      }
    }

    return NextResponse.json(
      { success: true, message: "메시지가 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "이메일 전송 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
