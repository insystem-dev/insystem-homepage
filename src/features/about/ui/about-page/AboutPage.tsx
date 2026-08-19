"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Gnb } from "@/widgets";
import sectionHealth from "@/shared/styles/assets/image/section-health.png";
import sectionPort from "@/shared/styles/assets/image/section-port.jpg";
import sectionSmart from "@/shared/styles/assets/image/section-smart.png";
import history2025 from "@/shared/styles/assets/image/history-2025.png";
import history2022 from "@/shared/styles/assets/image/history-2022.jpg";
import history2021 from "@/shared/styles/assets/image/history-2021.png";
import history2020 from "@/shared/styles/assets/image/history-2020.png";
import history2016 from "@/shared/styles/assets/image/history-2016.png";
import { Footer } from "@/widgets";

type HistoryEntry = {
  month: string;
  title: string;
  details?: string[];
};

type HistoryYear = {
  year: string;
  /** 콘텐츠가 놓이는 쪽. 좌측이면 우측 정렬(월이 오른쪽), 우측이면 좌측 정렬(월이 왼쪽) */
  align: "left" | "right";
  image?: { src: string; alt: string };
  entries: HistoryEntry[];
};

// Figma 시안(536:271) 기준. 좌/우 교차 배치와 항목 구성이 시안과 1:1 대응한다.
const HISTORY: HistoryYear[] = [
  {
    year: "2025",
    align: "right",
    image: { src: history2025.src, alt: "루틴케어" },
    entries: [
      {
        month: "11",
        title:
          "김해의생명산업진흥원 퍼스널랩 기반 디지털 헬스케어 플랫폼 구축사업 참여",
        details: ["AI를 활용한 건강 루틴 기반 리워드 플랫폼 [루틴케어] 개발"],
      },
      {
        month: "06",
        title: "취약계층청소년 근골격계질환 예방 및 맞춤형 건강관리 사업 참여",
        details: [
          "청소년 대상 척추 질환 조기 진단 및 건강 관리 플랫폼 [청소년척추건강] 개발",
        ],
      },
      {
        month: "03",
        title: "아동발달맞춤형 하이브리드 디지털 학습 플랫폼 [GGP] 개발",
      },
    ],
  },
  {
    year: "2024",
    align: "left",
    entries: [
      {
        month: "06",
        title: "AI 기반 식단관리 서비스 제공을 위한 객체 인식 모델 연구 참여",
      },
      { month: "03", title: "DN솔루션즈 MES 2차 프로젝트 개발 및 안정화" },
      { month: "03", title: "해군 함정 상태기반 정비지원 체계 서비스 S/W 개발" },
    ],
  },
  {
    year: "2023",
    align: "right",
    entries: [
      {
        month: "09",
        title: "DN솔루션즈 MES 모바일 반응형 및 안드로이드 어플리케이션 개발",
      },
      {
        month: "05",
        title:
          "중소형 유통매장의 디지털 전환을 위한 스마트 리테일 운영관리 시스템 SaaS 개발",
      },
      { month: "03", title: "AI 기반 건강관리 서비스 구축사업 참여" },
      {
        month: "01",
        title: "스마트슈즈 디지털 헬스케어 건강토큰 서비스 플랫폼 실증사업 참여",
      },
      {
        month: "01",
        title: "해군 육상용 함정상태기반 정비지원체계 구축사업 참여",
      },
    ],
  },
  {
    year: "2022",
    align: "left",
    image: { src: history2022.src, alt: "S-Space 업무협약(MOU) 체결" },
    entries: [
      { month: "06", title: "부산상공회의소 S-Space 본사 이전" },
      {
        month: "04",
        title: "S-Space 업무협약(MOU) 체결",
        details: ["부산시, 부산상공회의소, (사)글로벌핀테크산업진흥센터"],
      },
      { month: "02", title: "디지털 물류운송관리 플랫폼 개발" },
    ],
  },
  {
    year: "2021",
    align: "right",
    image: { src: history2021.src, alt: "건강토큰 서비스" },
    entries: [
      {
        month: "01",
        title: "한국연구재단 주민공감현장문제 해결사업 참여",
        details: ["비대면 감염병 관리 시스템 개발"],
      },
      {
        month: "01",
        title: "스마트시티 규제샌드박스 활성화 사업 참여",
        details: ["건강토큰 시스템 개발"],
      },
    ],
  },
  {
    year: "2020",
    align: "left",
    image: { src: history2020.src, alt: "AI기반 맞춤형 당뇨병 예방관리 플랫폼" },
    entries: [
      {
        month: "01",
        title: "부산대병원 AI기반 당뇨병 예방 · 관리 시스템 개발 사업 참여",
      },
    ],
  },
  {
    year: "2019",
    align: "right",
    entries: [
      { month: "09", title: "부산테크노파크 홈페이지 개발" },
      { month: "09", title: "부산국립과학관 전시운영 통합시스템 개발" },
    ],
  },
  {
    year: "2018",
    align: "left",
    entries: [
      {
        month: "11",
        title: "부산시 건강데이터 임상 유효성 검증사업 참여",
        details: ["시니어 피트니스 운동처방 APP(Android/iOS) 개발"],
      },
      {
        month: "08",
        title:
          "문체부 스포츠평가 기반 맞춤형 시니어 피트니스 서비스 기술 개발 사업 참여",
        details: ["Motion Core App(Android/iOS) 개발"],
      },
      {
        month: "01",
        title: "대중교통 관제 프로그램 SMART42 개발",
        details: [
          "베트남 운송회사 [AUTO42]와 함께 판매 및 공동 운영",
          "베트남 현지 개발 솔루션(관제 Web/고객 App/기사 App)",
        ],
      },
    ],
  },
  {
    year: "2017",
    align: "right",
    entries: [
      { month: "12", title: "부산 테크노파크(지사단지) 본사 이전" },
      {
        month: "03",
        title: "몽골 원격진료시스템 개발",
        details: [
          "몽골 울란바토르시 국립병원 및 대학병원 등의 원격진료 시스템 구축사업 참여",
          "몽골 현지 IT 기업 [IT-ZONE]과 MOU 체결",
          "울란바토르시 국립병원 GREEN HOSPITAL과 MOU 체결",
        ],
      },
    ],
  },
  {
    year: "2016",
    align: "left",
    image: { src: history2016.src, alt: "(주)인시스템" },
    entries: [{ month: "03", title: "(주)인시스템 창립" }],
  },
];

function HistoryMonth({ month }: { month: string }) {
  return (
    <span className="shrink-0 text-xl font-bold text-[#2FA7FF] font-pretendard tracking-[-1px]">
      {month}
    </span>
  );
}

function HistoryYearBlock({ item }: { item: HistoryYear }) {
  const isLeft = item.align === "left";

  const content = (
    <div
      className={`flex flex-col gap-10 ${
        isLeft ? "items-end px-4" : "items-start px-6"
      }`}
    >
      <h3
        className={`w-full text-[32px] font-bold text-white font-pretendard leading-[1.5] tracking-[-0.64px] ${
          isLeft ? "text-right" : "text-left"
        }`}
      >
        {item.year}
      </h3>

      <div className="flex flex-col gap-10 w-full">
        {item.entries.map((entry, index) => (
          <div
            key={`${entry.month}-${index}`}
            className={`flex gap-4 items-start ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            {!isLeft && <HistoryMonth month={entry.month} />}

            <div
              className={`flex flex-col gap-2 ${
                isLeft ? "items-end text-right" : "items-start text-left"
              }`}
            >
              <p className="text-xl font-medium text-white font-pretendard leading-[1.5] tracking-[-0.4px]">
                {entry.title}
              </p>
              {entry.details?.map((detail) => (
                <p
                  key={detail}
                  className="text-xl font-normal text-[#CCCCCC] font-pretendard leading-[1.5] tracking-[-0.4px]"
                >
                  {detail}
                </p>
              ))}
            </div>

            {isLeft && <HistoryMonth month={entry.month} />}
          </div>
        ))}
      </div>
    </div>
  );

  const visual = item.image ? (
    <div className="flex items-start justify-center">
      <div
        className="rounded-lg overflow-hidden flex-shrink-0"
        style={{ width: "492px", height: "316px" }}
      >
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  ) : (
    <div />
  );

  return (
    <div className="grid grid-cols-2 gap-12 items-start">
      {isLeft ? (
        <>
          {content}
          {visual}
        </>
      ) : (
        <>
          {visual}
          {content}
        </>
      )}
    </div>
  );
}

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <Gnb />

      {/* Hero Section */}
      <section className="w-full relative bg-gradient-to-b from-black to-sky-950 overflow-hidden px-4 md:px-8 min-h-auto md:min-h-screen lg:h-[1125px] flex flex-col justify-center pt-20 md:pt-20 py-12 md:py-0">
        <div className="max-w-[1440px] mx-auto w-full relative">
          {/* Breadcrumb */}
          <div className="flex justify-start items-center mb-8 md:mb-0">
            <div className="text-zinc-200 text-xs md:text-sm font-normal font-pretendard">
              홈
            </div>
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-zinc-200 mx-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="text-zinc-200 text-xs md:text-sm font-normal font-pretendard">
              회사소개
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-4 lg:gap-4 pt-2">
            {/* Top section: Left title + Right text */}
            <div className="grid grid-cols-1 lg:grid-cols-11 items-start gap-6 md:gap-0">
              {/* Left - Title only (30%) */}
              <div className="flex flex-col gap-4 md:gap-8 lg:col-span-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-50 font-pretendard leading-tight">
                  회사소개
                </h1>
              </div>

              {/* Right - Main Description and Subtitle (70%) */}
              <div className="flex flex-col gap-2 md:gap-2 lg:col-span-7">
                <div className="flex flex-col">
                  <p className="text-xl md:text-3xl lg:text-5xl font-bold font-pretendard leading-tight tracking-wide">
                    <span className="text-sky-400">사람</span>
                    <span className="text-slate-50 ">
                      을 위한 기술로
                      <br />
                    </span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl md:text-3xl lg:text-5xl font-bold font-pretendard leading-tight tracking-wide">
                    <span className="text-sky-400">산업과 일상의 문제</span>
                    <span className="text-slate-50">를 해결합니다.</span>
                  </p>
                </div>

                {/* Description Text */}
                <div className="text-xs md:text-base lg:text-lg text-zinc-200 font-normal font-pretendard leading-relaxed md:leading-8 py-6 md:py-10">
                  우리는 현장의 문제를 데이터로 해석하고, 사람을 위한 경험과
                  가치를 중심으로 플랫폼을 설계합니다.{" "}
                  <br className="hidden md:block" />
                  기술·디자인·연구개발이 하나의 흐름으로 연결된 구조를 기반으로
                  더 나은 운영과 일상의 변화를 만들어가는 개발 기업입니다.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-11 items-start">
              <div className="flex flex-col gap-6 md:gap-8 lg:col-span-4"></div>
              {/* Bottom section: Three Value Circles */}
              <div className="flex justify-center items-center w-full lg:col-span-7">
                {/* Desktop overlapping circles */}
                <div className="hidden lg:block relative w-full h-[450px]">
                  {[
                    {
                      title: "Value",
                      subtitle: "사람 중심의 가치 추구",
                      position: "absolute top-0 left-0",
                      size: "w-80 h-80",
                    },
                    {
                      title: "Design",
                      subtitle: "목적에 맞는 맞춤형 서비스 설계",
                      position: "absolute top-0 left-10 translate-x-60",
                      size: "w-80 h-80",
                    },
                    {
                      title: "Technique",
                      subtitle: "기술 혁신과 실용적 솔루션",
                      position: "absolute top-0 left-80 translate-x-60",
                      size: "w-80 h-80",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`${item.position} ${item.size} rounded-full border-2 border-blue-900 flex flex-col items-center justify-center gap-3 p-6`}
                    >
                      <h2
                        className="text-4xl font-extrabold font-pretendard leading-tight"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #2FA7FF, #A9C7DD)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.title}
                      </h2>
                      <p className="text-center text-sm font-medium text-slate-50 font-pretendard leading-tight">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            {/* Mobile Circles - overlapping layout */}
              <div className="lg:hidden w-full mt-8">
                {/* 지름 36.36% + 겹침 4.545% => 3개 합이 항상 컨테이너 폭에 정확히 들어간다.
                    겹침 비율(0.875D 간격)은 데스크톱과 동일하다. */}
                <div className="flex items-center justify-center w-full">
                  {[
                    {
                      title: "Value",
                      subtitle: "사람 중심의 가치 추구",
                    },
                    {
                      title: "Design",
                      subtitle: "목적에 맞는 맞춤형 서비스 설계",
                    },
                    {
                      title: "Technique",
                      subtitle: "기술 혁신과 실용적 솔루션",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[36.36%] aspect-square shrink-0 rounded-full border-2 border-blue-900 flex flex-col items-center justify-center gap-1 px-2 ${
                        index > 0 ? "-ml-[4.545%]" : ""
                      }`}
                    >
                      <h2
                        className="text-base font-bold font-pretendard text-center"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #2FA7FF, #A9C7DD)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.title}
                      </h2>
                      <p className="w-[100px] text-center text-xs font-medium text-slate-50 font-pretendard leading-tight break-keep">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="w-full bg-x02-gray-dark">
        <div className="w-full">
          {/* Header */}
          <div className="flex flex-col items-center gap-8 mb-16 pt-12 md:pt-20 pb-0 md:pb-5 ">
            <div className="text-center text-orange-500 text-xs md:text-xl font-bold font-pretendard">
              Business
            </div>
            <h2 className="max-w-[911px] text-lg md:text-5xl text-center text-dark-950 font-pretendard leading-tight md:leading-[62.4px] font-bold">
              인시스템은 세 가지 핵심 영역을 중심으로,
              <br />
              다양한 현장의 문제를 해결하고 있습니다.
            </h2>
          </div>

          {/* Business Cards */}
          <div className="flex flex-col gap-0">
            {/* Digital Healthcare */}
            <div
              className="relative flex flex-col items-start justify-center gap-4 md:gap-9 px-4 md:px-8 lg:px-[120px] py-8 md:py-12 bg-gradient-to-b from-black/40 to-black/40 border-b border-blue-900/30 overflow-hidden min-h-[200px] md:min-h-auto"
              style={{
                backgroundImage: `url(${sectionHealth.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2 w-full">
                <div className="text-xs md:text-2xl font-normal text-slate-400 font-pretendard leading-[1.35]">
                  디지털 헬스케어
                </div>
                <h3 className="text-base md:text-4xl font-extrabold text-white font-pretendard leading-[1.15]">
                  Digital Healthcare
                </h3>
                <p className="text-xs md:text-xl font-medium text-slate-400 font-pretendard leading-normal">
                  병원 · 사용자 데이터를 분석하여 개인 맞춤형 건강관리 서비스
                  제공
                </p>
              </div>
              <button
                onClick={() => router.push("/projects/diabetes-free")}
                className="relative z-10 px-3 md:px-6 py-2 md:py-3 bg-slate-100 text-slate-900 rounded-lg font-bold text-xs md:text-base font-pretendard hover:bg-slate-200 transition-colors"
              >
                View Projects
              </button>
            </div>

            {/* Port Logistics */}
            <div
              className="relative flex flex-col items-start justify-center gap-4 md:gap-9 px-4 md:px-8 lg:px-[120px] py-8 md:py-12 bg-gradient-to-b from-black/40 to-black/40 border-b border-blue-900/30 overflow-hidden w-full min-h-[200px] md:min-h-auto"
              style={{
                backgroundImage: `url(${sectionPort.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2 w-full">
                <div className="text-xs md:text-2xl font-normal text-slate-400 font-pretendard leading-[1.35]">
                  항만 물류
                </div>
                <h3 className="text-base md:text-4xl font-extrabold text-white font-pretendard leading-[1.15]">
                  Port Logistics
                </h3>
                <p className="text-xs md:text-xl font-medium text-slate-400 font-pretendard leading-normal">
                  항만 · 물류 · 검역을 통합 관리하는 물류 디지털 플랫폼
                </p>
              </div>
              <button
                onClick={() => router.push("/projects/portqm")}
                className="relative z-10 px-3 md:px-6 py-2 md:py-3 bg-slate-100 text-slate-900 rounded-lg font-bold text-xs md:text-base font-pretendard hover:bg-slate-200 transition-colors"
              >
                View Projects
              </button>
            </div>

            {/* Smart Factory */}
            <div
              className="relative flex flex-col items-start justify-center gap-4 md:gap-9 px-4 md:px-8 lg:px-[120px] py-8 md:py-12 bg-gradient-to-b from-black/40 to-black/40 overflow-hidden w-full min-h-[200px] md:min-h-auto"
              style={{
                backgroundImage: `url(${sectionSmart.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2 w-full">
                <div className="text-xs md:text-2xl font-normal text-slate-400 font-pretendard leading-[1.35]">
                  스마트팩토리
                </div>
                <h3 className="text-base md:text-4xl font-extrabold text-white font-pretendard leading-[1.15]">
                  Smart Factory
                </h3>
                <p className="text-xs md:text-xl font-medium text-slate-400 font-pretendard leading-normal">
                  항만 · 물류 · 검역을 통합 관리하는 물류 디지털 플랫폼
                </p>
              </div>
              <button
                onClick={() => router.push("/projects/dn-mes")}
                className="relative z-10 px-3 md:px-6 py-2 md:py-3 bg-slate-100 text-slate-900 rounded-lg font-bold text-xs md:text-base font-pretendard hover:bg-slate-200 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="w-full bg-gradient-to-b from-black to-sky-950 py-20">
        <div className="w-full">
          {/* Header */}
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="text-center text-orange-500 text-xs md:text-xl font-bold font-pretendard">
              History
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-slate-100 text-center font-pretendard">
              회사 연혁
            </h2>
          </div>

        {/* Mobile History Timeline */}
          <div className="md:hidden max-w-full mx-auto px-4 py-8">
            <div className="flex flex-col gap-12">
              {HISTORY.map((item) => (
                <div key={item.year} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-white font-pretendard leading-[1.5] tracking-[-0.64px]">
                    {item.year}
                  </h3>
          
                  {item.image && (
                    <div className="w-full aspect-[492/316] rounded-lg overflow-hidden">
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
          
                  <div className="flex flex-col gap-6">
                    {item.entries.map((entry, index) => (
                      <div
                        key={`${entry.month}-${index}`}
                        className="flex gap-3 items-start"
                      >
                        <span className="shrink-0 text-base font-bold text-[#2FA7FF] font-pretendard tracking-[-1px]">
                          {entry.month}
                        </span>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-sm font-medium text-white font-pretendard leading-[1.5] tracking-[-0.4px]">
                            {entry.title}
                          </p>
                          {entry.details?.map((detail) => (
                            <p
                              key={detail}
                              className="text-sm font-normal text-[#CCCCCC] font-pretendard leading-[1.5] tracking-[-0.4px]"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Desktop History Timeline */}
          <div className="hidden md:block max-w-[1200px] mx-auto py-12">
            {HISTORY.map((item, index) => (
              <div
                key={item.year}
                className={index === HISTORY.length - 1 ? "" : "mb-20"}
              >
                <HistoryYearBlock item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
