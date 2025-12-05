"use client";

import React from "react";
import Image from "next/image";
import { Footer, Gnb } from "@/widgets";
import routinecareMain from "@/shared/styles/assets/image/routinecare-main.png";
import routinecareContent from "@/shared/styles/assets/image/routinecare-detail.png";

export default function RoutineCareProjectPage() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-sky-950">
      {/* GNB */}
      <Gnb />

      {/* Hero Section Spacing */}
      <div
        className="hidden md:block w-full h-32"
        style={{ backgroundColor: "#E1E4E6" }}
      ></div>

      {/* Hero Section */}
      <div
        className="hidden md:block w-full h-[700px] relative overflow-hidden"
        style={{ backgroundColor: "#E1E4E6" }}
      >
        <Image
          src={routinecareMain}
          alt="루틴케어 메인 이미지"
          fill
          className="object-cover md:object-left"
        />
      </div>

      {/* Project Introduction Section */}
      <section className="w-full px-4 md:px-8 py-14 md:py-20 bg-slate-900">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-6">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-start items-start gap-8 md:gap-4">
              {/* Project Title */}
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                <p className="text-slate-50 text-base font-semibold font-['Pretendard']">
                  AI 활용 건강 루틴 기반 리워드 플랫폼
                </p>
                <h1 className="text-slate-50 text-3xl md:text-5xl font-bold font-['Pretendard']">
                  루틴케어 ROUTINE CARE
                </h1>
              </div>

              {/* Work Scope and Service Platform */}
              <div className="flex flex-col justify-start items-start gap-4 w-full">
                {/* Work Scope */}
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <span className="text-gray-500 text-base font-medium font-['Pretendard']">
                    작업 범위
                  </span>
                  <div className="flex flex-wrap justify-start items-center gap-2">
                    <div className="px-3 py-1.5 bg-indigo-100/60 rounded-lg">
                      <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                        기획
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-indigo-100/60 rounded-lg">
                      <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                        디자인
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-indigo-100/60 rounded-lg">
                      <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                        개발
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Platform */}
                <div className="flex flex-col justify-start items-start gap-2.5 w-full">
                  <span className="text-gray-500 text-base font-medium font-['Pretendard']">
                    서비스 플랫폼
                  </span>
                  <div className="flex flex-col justify-center items-start gap-2.5 w-full">
                    {/* App Platform */}
                    <div className="flex flex-col md:flex-row md:justify-start md:items-center md:gap-4 w-full">
                      <span className="text-zinc-200 text-base font-medium font-['Pretendard']">
                        루틴케어 APP
                      </span>
                      <div className="flex justify-start items-center gap-2">
                        <div className="px-3 py-1.5 bg-indigo-100/60 rounded-lg">
                          <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                            Android
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Admin Platform */}
                    <div className="flex flex-col md:flex-row md:justify-start md:items-center md:gap-4 w-full">
                      <span className="text-zinc-200 text-base font-medium font-['Pretendard']">
                        관리자 페이지
                      </span>
                      <div className="flex-1 md:flex-none px-3 py-1.5 bg-indigo-100/60 rounded-lg">
                        <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                          Responsive Web
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Description - 모바일에서는 맨 아래로 */}
            <div className="flex-1 w-full md:w-auto">
              <p className="text-slate-50 text-base md:text-lg font-medium font-['Pretendard'] leading-6 md:leading-7">
                루틴케어는 AI 기반 분석을 통해 식단·걷기·복약 등 일상 건강
                루틴을 자동으로 수집·정량화하고, 이를 개인 맞춤 건강 점수와
                피드백으로 제공하는 디지털 헬스케어 서비스입니다. 수집된 루틴은
                일일 달성도와 연계되어 포인트 형태의 보상으로 교환되며, 사용자가
                지속적인 건강 행동을 실천할 수 있도록 설계된 데이터 기반
                건강관리 플랫폼입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content Section */}
      <section className="w-full px-8 py-24 bg-gradient-to-l from-black to-sky-950">
        <div className="max-w-[1440px] mx-auto">
          <Image
            src={routinecareContent}
            alt="루틴케어 콘텐츠"
            width={1440}
            height={800}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="fixed left-[85px] top-[100px] z-40 w-12 h-12 bg-slate-800 rounded-full shadow-lg hover:bg-slate-700 transition-colors flex items-center justify-center"
        aria-label="Go back"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="text-indigo-100"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}
