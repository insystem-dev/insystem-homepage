"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Footer } from "@/widgets";
import { useScrollReveal } from "@/shared/lib/useScrollReveal";
import Image from "next/image";
import IconTarget from "@/shared/styles/assets/svg/icon-target.svg";
import IconCode from "@/shared/styles/assets/svg/icon-code.svg";
import IconIdea from "@/shared/styles/assets/svg/icon-idea.svg";
import IconSecurity from "@/shared/styles/assets/svg/icon-security.svg";
import bgMotion from "@/shared/styles/assets/image/bg-motion.gif";

/** Figma 842:5953 — StartSteps */
const START_STEPS = [
  {
    no: "01",
    title: "무료 기술상담",
    desc: "현재 서비스와 해결해야 할 문제를 이야기합니다.",
  },
  {
    no: "02",
    title: "현황 · 기술 진단",
    desc: "시스템과 개발 과제를 확인하고 우선순위를 정리합니다.",
  },
  {
    no: "03",
    title: "90일 실행안",
    desc: "먼저 진행할 개발 과제와 실행 순서를 제안합니다.",
  },
];

/**
 * ClosingCopy(871:7197) 테두리.
 * Figma 코드는 solid white 로 내려오지만 실제 렌더는 그라디언트 stroke 다.
 * 노드 렌더를 픽셀 샘플링한 결과 좌 #006496 → 우 #fefefe 의 가로 그라디언트.
 */
const CLOSING_BOX_STROKE = "linear-gradient(90deg, #006596 0%, #FFF 100%)";

/** Figma 842:5875 — PlanCardGroup */
const PLAN_CARDS = [
  {
    title: "A. 운영관리형",
    target: "이미 운영 중인 웹·서비스의 안정적인 관리가 필요한 기업",
    price: "30만원 ~",
    tasks: [
      "서버 상태 · 백업 · SSL 점검",
      "오류 수정 / 문구 및 설정 변경",
      "소규모 기능 개선",
    ],
    badges: ["Lite", "Care"],
    recommended: false,
  },
  {
    title: "B. 외부개발팀형",
    target: "내부 개발팀 없이 지속적으로 기능을 만들어야 하는 기업",
    price: "100만원 ~",
    tasks: [
      "개발 우선순위 관리",
      "신규 기능 개발 및 API 연동",
      "제품 배포 및 지속적 제품 개선",
    ],
    badges: ["Partner", "Growth"],
    recommended: true,
  },
  {
    title: "C. 연속개발 · 기술리드 형",
    target: "여러 개발 과제 병행 혹은 기술적 의사결정까지 필요한 기업",
    price: "250만원 ~",
    tasks: [
      "정기 배포 관리 & 아키텍처 수립",
      "기술 리스크 관리 및 전체 QA 기준",
      "경영진 기술 의사결정 리포트",
    ],
    badges: ["Scale", "FDE Lead"],
    recommended: false,
  },
];

/** Figma 842:5929 — FpTableBody */
const FP_EXAMPLES = [
  { fp: "1 FP", desc: "문구 · 설정 · 간단 오류" },
  { fp: "3 FP", desc: "필터 · 입력항목 · 알림" },
  { fp: "5 FP", desc: "관리자 · 통계 · 업로드" },
  { fp: "8 FP", desc: "API · 권한 · 자동화" },
  { fp: "13 FP+", desc: "복잡한 연동 · AI 기능" },
];

/**
 * 추천 카드(B) 채움.
 * Figma 가 내보낸 PNG 는 블렌드가 빠진 밝은 그라디언트라 실제 렌더와 다르다.
 * 노드 렌더(842:5891)를 픽셀 샘플링해 얻은 수직 그라디언트로 대체한다.
 */
const RECOMMENDED_CARD_FILL =
  "linear-gradient(to bottom,#000000 0%,#00070b 25%,#00121b 50%,#001e2d 72%,#00283d 88%,#003048 100%)";

/** 추천 카드(B) 테두리. 단색이 아니라 그라디언트 stroke 다. */
const RECOMMENDED_CARD_STROKE =
  "linear-gradient(180deg, #FFF -51.38%, #006596 43.5%)";

/** Figma 842:5826 — ServiceGrid */
const SERVICE_CARDS: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}[] = [
  {
    Icon: IconTarget,
    title: "PRODUCT",
    desc: "서비스 기획 · UX/UI · 기능 정의",
  },
  {
    Icon: IconCode,
    title: "DEVELOPMENT",
    desc: "Web/App · Backend · 관리자 · API 연동",
  },
  {
    Icon: IconIdea,
    title: "AI & AUTOMATION",
    desc: "AI 검색 · 데이터 분석 · 업무 자동화",
  },
  {
    Icon: IconSecurity,
    title: "OPERATIONS",
    desc: "서버 · 배포 · 모니터링 · 오류 대응 · 운영 개선",
  },
];

/** Figma 842:5846 — StepsContainer */
const PROCESS_PHASES = [
  {
    no: "01",
    label: "DEFINE",
    title: "문제와 목표 정의",
    desc: "사용자와 현장을 이해하고 성공 기준을 정합니다.",
  },
  {
    no: "02",
    label: "PRIORITIZE",
    title: "90일 실행계획",
    desc: "먼저 만들 기능과 우선순위를 현실적인 범위로 정합니다.",
  },
  {
    no: "03",
    label: "BUILD",
    title: "개발·테스트·배포",
    desc: "기획, UX/UI, 개발, QA를 한 흐름으로 실행합니다.",
  },
  {
    no: "04",
    label: "IMPROVE",
    title: "운영·다음 개선",
    desc: "운영 결과를 보고 다음 개발 우선순위를 정합니다.",
  },
];

/** Figma 842:5773 — Need 체크리스트 */
const NEED_ITEMS = [
  "내부 개발팀 없이 기능을 계속 만들어야 합니다.",
  "개발 외주가 끝난 뒤 수정과 운영을 맡길 곳이 없습니다.",
  "개발할 것은 많지만 무엇부터 해야 할지 판단하기 어렵습니다.",
  "서버, 배포, 오류 대응까지 지속적으로 관리할 팀이 필요합니다.",
  "CTO 없이 기술적인 의사결정을 하고 있습니다.",
];

/** Figma 842:5791 — [일반 개발 외주, INSYSTEM FDE] */
const COMPARISON_ROWS: [string, string][] = [
  ["정해진 요구사항 전달", "사업 문제부터 함께 정리"],
  ["프로젝트 단위", "지속적인 기술팀"],
  ["계약 범위 중심", "우선순위를 계속 조정"],
  ["개발 후 납품", "개발 후 운영·개선 지속"],
  ["기술 판단은 고객이 담당", "기술적인 의사결정 지원"],
];

/** Figma 842:5810 — ProcessFlow */
const PROCESS_STEPS = ["사업 목표", "실행계획", "동작하는 제품", "다음 개선"];

/**
 * FDE(Forward Deployed Engineer) 서비스 상세 페이지.
 * Hero 외 섹션은 시안 확정 후 채운다.
 */
export default function FdePage() {
  const router = useRouter();
  useScrollReveal();

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-sky-950 overflow-hidden">
      {/* Hero Section — Figma 842:5744 */}
      <section className="w-full h-screen relative flex items-center overflow-hidden bg-gradient-to-b from-black to-[#073556]">
        {/* Background Video
            원본은 1920x1080 가로 영상이라 90도 회전 후에도 화면을 덮으려면 확대가 필요하다.
            회전하면 CSS 의 width/height 가 화면상에서 뒤바뀌므로
              화면 가로 = CSS height, 화면 세로 = CSS width
            가 되고, max() 로 양쪽 모두 뷰포트 이상을 보장하면서 16:9 비율은 그대로 유지한다.
            playsInline 이 없으면 iOS Safari 가 네이티브 전체화면 플레이어로 전환한다. */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            preload="auto"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 h-[max(100vw,56.25vh)] w-[max(100vh,177.78vw)] max-w-none object-cover"
          >
            <source src="/fde-main-vid.mp4" type="video/mp4" />
          </video>
          {/* 영상 채도를 낮추기 위한 블랙 오버레이 */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5 items-center">
              {/* Breadcrumb */}
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-x02-gray-dark text-sm font-normal font-pretendard tracking-[-0.28px] hover:text-sky-400 transition-colors"
                >
                  홈
                </Link>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-x02-gray-dark"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-x02-gray-dark text-sm font-semibold font-pretendard tracking-[-0.28px]">
                  FDE 서비스 소개
                </span>
              </div>

              {/* Headline — h1 은 페이지당 하나로 유지 */}
              <h1 className="text-center font-pretendard text-[2rem]/[1.25] sm:text-4xl/[1.25] md:text-5xl/[1.25] lg:text-6xl/[1.25]">
                <span className="block font-medium text-neutral-300">
                  개발팀이 필요할 때,
                </span>
                <span className="block text-x02-gray-light">
                  <span className="font-extrabold tracking-[1.8px]">
                    채용보다 빠르게
                  </span>{" "}
                  <span className="font-medium">시작하세요.</span>
                </span>
              </h1>
            </div>

            {/* Sub Copy */}
            <p className="text-center text-x02-gray-dark font-pretendard font-medium text-base/[1.5] md:text-xl/[1.5] lg:text-2xl/[1.5] tracking-[-0.48px]">
              인시스템 FDE는 서비스 기획부터 디자인, 개발, 배포, 운영까지
              <br />
              필요한 기술 업무를 하나의 외부 기술팀으로 제공합니다.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10">
            <button
              onClick={() => router.push("/contact")}
              className="h-12 px-4 py-2 bg-basic-100 hover:bg-white rounded-lg drop-shadow-[0px_0px_10px_rgba(255,255,255,0.08)] flex justify-center items-center transition-all duration-300"
            >
              <span className="text-basic-800 text-lg md:text-xl font-bold font-pretendard tracking-[-1.4px] whitespace-nowrap">
                FDE 상담하기
              </span>
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="h-12 px-4 py-2 border border-basic-100 hover:bg-white/10 rounded-lg shadow-[0px_0px_20px_0px_rgba(255,255,255,0.08)] flex justify-center items-center transition-all duration-300"
            >
              <span className="text-basic-100 text-lg md:text-xl font-bold font-pretendard tracking-[-1.4px] whitespace-nowrap">
                서비스 플랜 보기
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Why FDE Section — Figma 842:5764 */}
      <section className="w-full bg-gradient-to-b from-black to-[#073556]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-20 md:py-[120px] flex flex-col gap-12 md:gap-20">
          {/* Section Header */}
          <div className="w-full flex flex-col gap-4">
            <p className="section-title text-[#ff6b3a] text-lg md:text-xl font-bold font-pretendard tracking-[-0.4px]">
              Why FDE
            </p>
            <div className="w-full flex flex-col gap-4">
              <h2 className="section-title max-w-[700px] text-x02-gray-light font-pretendard font-bold text-[1.75rem]/[1.3] md:text-4xl/[1.3] lg:text-5xl/[1.3]">
                외주가 아닌,
                <br />
                우리 회사의{" "}
                <span className="text-x02-light-blue">외부 기술팀</span>
              </h2>
              <p className="section-description text-x02-gray-dark font-pretendard font-medium text-base/[1.6] md:text-xl/[1.6]">
                개발자가 없거나, 일회성 외주로는 해결하기 어려운 기술 업무를
                지속적으로 함께 실행합니다.
              </p>
            </div>
          </div>

          {/* Content Columns */}
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Need Checklist */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              <h3 className="section-title text-x02-gray-dark text-xl md:text-2xl font-extrabold font-pretendard">
                Need
              </h3>
              <ul className="w-full flex flex-col gap-4">
                {NEED_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="project-item w-full flex gap-4 items-center p-4 md:p-5 bg-white/[0.03] border border-white/10 rounded-xl"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-2 h-2 rounded bg-[#ff6b3a]"
                    />
                    <p className="flex-1 min-w-0 text-x02-gray-light text-base md:text-lg font-semibold font-pretendard">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison Table */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              <h3 className="section-title text-xl md:text-2xl font-pretendard">
                <span className="font-medium text-neutral-300">
                  일반 개발 외주 vs{" "}
                </span>
                <span className="font-extrabold text-x02-light-blue">
                  INSYSTEM FDE
                </span>
              </h3>
              {/* 시안은 테이블에 고정 높이(369px)를 줘서 Need 컬럼과 끝선을 맞춘다.
                  하드코딩 대신 컬럼을 늘려 채우고 행이 남은 높이를 균등 분배하게 한다. */}
              <div className="project-item w-full lg:flex-1 flex flex-col border border-white/10 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="w-full shrink-0 flex bg-white/[0.07] text-base md:text-lg text-center font-pretendard">
                  <p className="flex-1 min-w-0 p-4 md:p-5 font-bold text-x02-gray-dark">
                    일반 개발 외주
                  </p>
                  <p className="flex-1 min-w-0 p-4 md:p-5 font-extrabold text-x02-light-blue">
                    INSYSTEM FDE
                  </p>
                </div>
                {/* Rows */}
                {COMPARISON_ROWS.map(([outsourcing, fde]) => (
                  <div key={fde} className="w-full flex lg:flex-1 lg:min-h-0">
                    <p className="flex-1 min-w-0 p-4 md:p-5 bg-black/20 border-b border-white/[0.07] text-x02-gray-dark text-sm text-center font-medium font-pretendard">
                      {outsourcing}
                    </p>
                    <p className="flex-1 min-w-0 p-4 md:p-5 bg-black/30 border-b border-white/[0.07] text-x02-gray-light text-sm md:text-base text-center font-bold font-pretendard">
                      {fde}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="project-item w-full flex flex-wrap gap-4 md:gap-20 items-center justify-center p-6 md:p-8 bg-[rgba(47,167,255,0.06)] border border-x02-light-blue rounded-2xl">
            {PROCESS_STEPS.map((step, index) => (
              <React.Fragment key={step}>
                {index > 0 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="w-6 h-6 shrink-0 text-x02-light-blue"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <p className="text-x02-gray-light text-base md:text-xl font-extrabold font-pretendard whitespace-nowrap">
                  {step}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section — Figma 842:5822 */}
      <section className="w-full bg-gradient-to-b from-[#073556] to-black">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-24 md:py-[200px] flex flex-col gap-16 md:gap-[120px] items-center">
          {/* Section Header */}
          <div className="w-full flex flex-col gap-4">
            <p className="section-title text-[#ff6b3a] text-lg md:text-xl font-bold font-pretendard tracking-[-0.4px]">
              What We Do
            </p>
            <h2 className="section-title text-x02-gray-light font-pretendard font-bold text-[1.75rem]/[1.3] md:text-4xl/[1.3] lg:text-5xl/[1.3]">
              기획부터 운영까지,
              <br />
              END-TO-END 한 팀으로
            </h2>
          </div>

          {/* Service Grid — 배경 궤도 그래픽을 그리드 뒤에 깐다.
              시안(851:6201) 기준: 874(그리드) 대비 좌 +26.84px, 폭 877.688px.
              bg-motion.gif 는 같은 구성의 세로 크롭본(1100x681)이라 가로 폭은 그대로 두고
              자기 비율을 따르되, 콘텐츠 중심이 시안과 같은 위치에 오도록 -12.93% 올린다. */}
          <div className="relative w-full max-w-[874px]">
            <div
              aria-hidden="true"
              className="hidden md:block pointer-events-none select-none absolute top-0 left-[3.07%] w-[100.42%] aspect-[1100/681] -translate-y-[12.93%]"
            >
              <Image
                src={bgMotion}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 768px) 0px, 878px"
                className="object-contain"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICE_CARDS.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="project-item flex flex-col gap-4 p-6 md:p-8 bg-[#090e1a] border border-[rgba(217,223,233,0.3)] rounded-2xl"
                >
                  <div className="self-start shrink-0 flex items-center p-2 rounded-full bg-[rgba(47,167,255,0.2)] overflow-hidden">
                    <Icon className="w-8 h-8 shrink-0" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="text-x02-gray-light text-xl font-extrabold font-pretendard">
                      {title}
                    </h3>
                    <p className="text-x02-gray-dark text-base/[1.5] font-medium font-pretendard">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="w-full flex flex-col gap-8 md:gap-10 p-0 md:p-12 rounded-[20px]">
            <h3 className="section-title w-full text-center text-x02-gray-dark text-xl md:text-[28px] font-bold font-pretendard">
              아이디어를 실행 가능한 계획으로
            </h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {PROCESS_PHASES.map(({ no, label, title, desc }) => (
                <div
                  key={no}
                  className="project-item flex flex-col gap-3 p-6 bg-white/[0.04] border border-white/[0.08] rounded-xl"
                >
                  <div className="w-full flex items-center justify-between">
                    <p className="text-x02-lavender text-[32px] font-black font-pretendard">
                      {no}
                    </p>
                    <p className="text-[#ff6b3a] text-sm font-bold font-pretendard tracking-[1.4px]">
                      {label}
                    </p>
                  </div>
                  <p className="text-x02-gray-light text-lg font-bold font-pretendard">
                    {title}
                  </p>
                  <p className="text-x02-gray-light text-sm/[1.4] font-medium font-pretendard">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Plans & FP Section — Figma 842:5871 */}
      <section className="relative w-full bg-black overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 py-20 md:py-[120px] flex flex-col gap-12 md:gap-20">
          {/* Section Header */}
          <div className="w-full flex flex-col gap-4">
            <p className="section-title text-[#ff6b3a] text-lg md:text-xl font-bold font-pretendard tracking-[-0.4px]">
              Plans &amp; FP
            </p>
            <div className="section-title flex flex-col sm:flex-row sm:items-center gap-4">
              <h2 className="text-x02-gray-light font-pretendard font-bold text-[1.75rem]/[1.3] md:text-4xl/[1.3] lg:text-5xl/[1.3]">
                우리 회사에 맞는 FDE 맞춤 플랜
              </h2>
              {/* 세로 스택되는 모바일에서만 좌측 정렬, sm 부터는 타이틀과 세로 중앙 정렬 */}
              <span className="self-start sm:self-center shrink-0 px-6 py-2 rounded-[20px] bg-[rgba(47,167,255,0.2)] text-x02-light-blue text-base md:text-xl/[1.6] font-bold font-pretendard">
                연간 계약 할인
              </span>
            </div>
            <p className="section-description text-x02-gray-dark text-base/[1.6] md:text-xl/[1.6] font-medium font-pretendard">
              현재 사업 단계에 맞는 서비스 유형과 플랜을 선택하세요. 모든 플랜은
              12개월 계약·월별 선납입니다.
            </p>
          </div>

          {/* Plan Cards */}
          <div className="w-full flex flex-col gap-4 items-end">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PLAN_CARDS.map((plan) => (
                <div
                  key={plan.title}
                  className={`project-item relative flex flex-col justify-between gap-8 lg:gap-0 lg:h-[520px] p-6 md:p-10 rounded-2xl ${
                    plan.recommended
                      ? "border-2 border-transparent"
                      : "border border-white/[0.08] bg-white/10"
                  }`}
                  /* 그라디언트 테두리: 채움은 padding-box, stroke 는 border-box 로
                     클립해 투명 테두리 자리에만 그라디언트가 보이게 한다. */
                  style={
                    plan.recommended
                      ? {
                          background: `${RECOMMENDED_CARD_FILL} padding-box, ${RECOMMENDED_CARD_STROKE} border-box`,
                        }
                      : undefined
                  }
                >
                  {plan.recommended && (
                    <span className="absolute top-[22px] right-[22px] px-4 py-1.5 rounded-[20px] bg-[rgba(47,167,255,0.2)] text-x02-light-blue text-sm font-extrabold font-pretendard">
                      추천
                    </span>
                  )}

                  {/* Card Top */}
                  <div className="w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-4">
                      <h3 className="text-x02-gray-light text-2xl md:text-[28px] font-bold font-pretendard tracking-[0.56px] pr-16">
                        {plan.title}
                      </h3>
                      <p className="text-x02-gray-dark text-base/[1.4] font-medium font-pretendard tracking-[0.32px]">
                        {plan.target}
                      </p>
                    </div>
                    <p className="flex gap-2 items-center text-x02-gray-dark whitespace-nowrap">
                      <span className="text-xl font-normal font-pretendard">
                        월
                      </span>
                      <span className="text-[2rem] md:text-[40px] font-semibold font-pretendard">
                        {plan.price}
                      </span>
                    </p>
                  </div>

                  {/* Divider (842:5881) */}
                  <div aria-hidden="true" className="w-full h-px bg-white/10" />

                  {/* Task List */}
                  <ul className="w-full flex flex-col gap-2">
                    {plan.tasks.map((task) => (
                      <li
                        key={task}
                        className="text-x02-gray-light text-base font-medium font-pretendard"
                      >
                        • {task}
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="w-full flex gap-2 pt-3">
                    {plan.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-3 py-1.5 rounded-md text-sm font-bold font-pretendard ${
                          plan.recommended
                            ? "bg-[rgba(47,167,255,0.13)] text-x02-light-blue"
                            : "bg-white/10 text-x02-gray-light"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="section-description text-x02-gray-dark text-sm/[1.6] font-medium font-pretendard text-right">
              ※ 각 서비스 유형에 따른 자세한 플랜과 금액은 문의를 통해 상담
              가능합니다.
            </p>
          </div>

          {/* FP Explanation */}
          <div className="w-full flex flex-col gap-8 md:gap-10 px-0 md:px-12 pb-0 md:pb-12 rounded-[20px]">
            <div className="w-full flex flex-col gap-3 items-center text-center">
              <h3 className="section-title text-x02-gray-light text-xl md:text-2xl font-extrabold font-pretendard">
                플랜별 월 개발 작업량(FP)
              </h3>
              <p className="section-description text-x02-gray-dark text-base/[1.5] font-medium font-pretendard">
                작업을 시작하기 전에 필요한 범위와 FP를 확인해 비용과 일정의
                예측 가능성을 높입니다.
              </p>
            </div>

            <div className="w-full flex flex-col gap-2">
              <p className="text-x02-gray-dark text-base md:text-lg font-medium font-pretendard">
                FP 예시 테이블 (예상 소요 FP 기준)
              </p>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {FP_EXAMPLES.map(({ fp, desc }) => (
                  <div
                    key={fp}
                    className="project-item flex flex-col gap-3 p-5 bg-white/[0.04] border border-white/[0.08] rounded-xl"
                  >
                    <p className="text-[#ff6b3a] text-2xl font-black font-pretendard">
                      {fp}
                    </p>
                    <p className="text-x02-gray-light text-[15px] font-semibold font-pretendard">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TODO: 이동할 대상 확정되면 Link 로 교체 */}
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="project-button text-x02-light-blue text-base font-bold font-pretendard underline decoration-solid underline-offset-2"
              >
                FP 이용 기준 자세히 보기
              </button>
            </div>
          </div>

          {/* Closing Copy — Figma 871:7197. 테두리가 그라디언트라 채움/stroke 를
              클립 영역으로 분리한다. 채움 레이어는 반드시 불투명해야 stroke 가
              안쪽까지 비치지 않는다. */}
          <div
            className="project-item w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-6 md:p-12 rounded-[20px] border border-transparent"
            style={{
              background: `linear-gradient(#050505,#050505) padding-box, ${CLOSING_BOX_STROKE} border-box`,
            }}
          >
            <p className="lg:max-w-[750px] text-x02-gray-light text-lg md:text-2xl/[1.5] font-semibold font-pretendard">
              우리 회사에 맞는 FDE가 궁금하다면,
              <br />
              서비스 단계와 필요한 개발 범위를 함께 상담해드립니다.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="shrink-0 h-14 px-4 py-2 bg-basic-100 hover:bg-white rounded-lg drop-shadow-[0px_0px_10px_rgba(255,255,255,0.08)] flex justify-center items-center transition-all duration-300"
            >
              <span className="text-basic-800 text-lg md:text-xl font-bold font-pretendard tracking-[-1.4px] whitespace-nowrap">
                맞춤 플랜 상담 신청
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* Final CTA Section — Figma 842:5947 */}
      <section className="w-full bg-black">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-24 md:py-[280px] flex flex-col gap-10 md:gap-16">
          {/* Header */}
          <div className="w-full flex flex-col gap-4">
            <p className="section-title text-[#ff6b3a] text-lg md:text-xl font-bold font-pretendard tracking-[-0.4px]">
              Ready to Start
            </p>
            <h2 className="section-title text-x02-gray-light font-pretendard font-bold text-[1.75rem]/[1.3] md:text-4xl/[1.3] lg:text-5xl/[1.3]">
              문제 정의부터 솔루션까지
            </h2>
          </div>

          {/* Start Steps */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {START_STEPS.map(({ no, title, desc }) => (
              <div
                key={no}
                className="project-item flex flex-col gap-4 p-6 md:p-8 bg-white/[0.04] border border-white/[0.08] rounded-2xl"
              >
                <p className="text-x02-light-blue text-3xl md:text-[36px] font-black font-pretendard">
                  {no}
                </p>
                <p className="text-x02-gray-light text-xl md:text-2xl font-extrabold font-pretendard">
                  {title}
                </p>
                <p className="text-x02-gray-dark text-base/[1.5] font-medium font-pretendard">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner — Figma 871:7203.
              StartSteps 카드와 간격을 벌리기 위해 상단 여백을 100px 추가한다. */}
          <div className="relative w-full flex flex-col gap-6 items-center py-8 md:py-12 md:mt-[100px]">
            {/* Background_Glow_Secondary (871:7208) — 배너 기준으로 중앙 배치해
                섹션 밖으로 넘쳐 잘리지 않게 한다. 크기·투명도는 시안값(800px/30%)
                대신 협의된 값(500px/20%)을 유지한다. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,100%)] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,107,58,0.2)_0%,rgba(255,107,58,0)_80%)]"
            />
            <p className="project-item relative w-full text-center text-x02-gray-light text-xl md:text-[32px]/[1.5] font-semibold font-pretendard">
              개발팀이 필요한 순간,
              <br />
              채용부터 시작할 필요는 없습니다.
            </p>
            <p className="project-item relative text-center text-x02-gray-dark text-base md:text-lg font-medium font-pretendard">
              현재 서비스와 고민을 알려주세요. 필요한 기술팀의 범위부터 함께
              정리합니다.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="project-item relative w-[200px] h-14 px-4 py-2 bg-basic-100 hover:bg-white rounded-lg drop-shadow-[0px_0px_10px_rgba(255,255,255,0.08)] flex justify-center items-center transition-all duration-300"
            >
              <span className="text-basic-800 text-lg md:text-xl font-bold font-pretendard tracking-[-1.4px] whitespace-nowrap">
                무료 기술상담 신청
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* TODO: 이후 섹션은 시안 확정 후 채운다 */}

      <Footer />
    </div>
  );
}
