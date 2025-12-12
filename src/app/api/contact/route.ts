import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // 유효성 검사
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    // 관리자에게 보낼 이메일
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "help@insystem.kr",
      subject: `[홈페이지 문의] ${subject} - ${name}`,
      html: `
        <h2>새로운 연락 요청</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>전화:</strong> ${phone || "미입력"}</p>
        <p><strong>회사:</strong> ${company || "미입력"}</p>
        <p><strong>제목:</strong> ${subject}</p>
        <p><strong>메시지:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 사용자에게 보낼 이메일 (자동 응답)
    // TODO: insystem.kr 도메인 검증 완료 후 활성화
    // await resend.emails.send({
    //   from: "noreply@insystem.kr",
    //   to: email,
    //   subject: "인시스템 - 연락 감사합니다",
    //   html: `
    //     <h2>안녕하세요, ${name}님!</h2>
    //     <p>귀하의 메시지를 잘 받았습니다.</p>
    //     <p>인시스템은 빠른 시간 내에 연락을 드리겠습니다.</p>
    //     <p>감사합니다.</p>
    //     <hr>
    //     <p><strong>조회 내용:</strong></p>
    //     <p>${message.replace(/\n/g, "<br>")}</p>
    //   `,
    // });

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
