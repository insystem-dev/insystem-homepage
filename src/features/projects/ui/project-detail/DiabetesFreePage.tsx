"use client";

import React from "react";
import Image from "next/image";
import { Footer, Gnb } from "@/widgets";
import diabetesfreeContent from "@/shared/styles/assets/image/diabetesfree-detail.png";

export default function DiabetesFreePage() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-sky-950">
      {/* GNB */}
      <Gnb />

      {/* Hero Section Spacing */}
      <div className="hidden md:block w-full h-32 bg-slate-900"></div>

      {/* Project Introduction Section */}
      <section className="w-full px-4 md:px-8 py-14 md:py-20 bg-slate-900">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-6">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-start items-start gap-8 md:gap-4">
              {/* Project Title */}
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                <p className="text-slate-50 text-base font-semibold font-['Pretendard']">
                  AI기반 개인 맞춤형 당뇨병 예방 ・ 관리 플랫폼
                </p>
                <h1 className="text-slate-50 text-3xl md:text-5xl font-bold font-['Pretendard']">
                  당뇨프리
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
                        청소년척추건강 APP
                      </span>
                      <div className="flex justify-start items-center gap-2">
                        <div className="px-3 py-1.5 bg-indigo-100/60 rounded-lg">
                          <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                            iOS
                          </span>
                        </div>
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
                [당뇨프리]는 일상 혈당 및 개인 식단, 운동, 건강지표 분석을 통해
                개인 맞춤형 당뇨병 예방과 관리가 가능한 당뇨 분야 디지털
                헬스케어 서비스 입니다. 건강보험공단에서 제공되는 건강검진 결과
                연동을 통해 수집된 건강데이터 기반 나의 건강상태에 대한 간편
                리포트를 제공하고, 손쉽고 간편하게 사용자 개인이 보유한
                만성질환(당뇨) 위험요인 및 현재상태 모니터링이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content Section */}
      <section className="w-full px-8 py-24 bg-gradient-to-l from-black to-sky-950">
        <div className="max-w-[1440px] mx-auto">
          <Image
            src={diabetesfreeContent}
            alt="척추 건강 콘텐츠"
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
