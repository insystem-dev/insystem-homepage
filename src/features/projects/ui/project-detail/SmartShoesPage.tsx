"use client";

import React from "react";
import Image from "next/image";
import { Footer, Gnb } from "@/widgets";
import smartshoesContent from "@/shared/styles/assets/image/smartshoes-detail.png";

export default function SmartShoesProjectPage() {
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
                  스마트 슈즈를 활용한 건강토큰 서비스
                </p>
                <h1 className="text-slate-50 text-3xl md:text-5xl font-bold font-['Pretendard']">
                  건강토큰
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
                        건강토큰 APP
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
                스마트 인솔 · 스마트 슈즈 디바이스에서 측정된 걸음수 · 활동량 ·
                보행패턴 등의 건강데이터를Bluetooth(BLE)로 모바일 앱에 실시간
                연동하여 수집된 활동량을 건강토큰으로 자동 변환해 제공하는
                블록체인 기반 리워드 서비스입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content Section */}
      <section className="w-full px-8 py-24 bg-gradient-to-l from-black to-sky-950">
        <div className="max-w-[1440px] mx-auto">
          <Image
            src={smartshoesContent}
            alt="스마트 슈즈 콘텐츠"
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
