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
            <div className="text-zinc-200 text-xs md:text-sm font-normal font-['Pretendard']">
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
            <div className="text-zinc-200 text-xs md:text-sm font-normal font-['Pretendard']">
              회사소개
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-4 lg:gap-4 pt-2">
            {/* Top section: Left title + Right text */}
            <div className="grid grid-cols-1 lg:grid-cols-11 items-start gap-6 md:gap-0">
              {/* Left - Title only (30%) */}
              <div className="flex flex-col gap-4 md:gap-8 lg:col-span-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-50 font-['Pretendard'] leading-tight">
                  회사소개
                </h1>
              </div>

              {/* Right - Main Description and Subtitle (70%) */}
              <div className="flex flex-col gap-2 md:gap-2 lg:col-span-7">
                <div className="flex flex-col">
                  <p className="text-xl md:text-3xl lg:text-5xl font-bold font-['Pretendard'] leading-tight tracking-wide">
                    <span className="text-sky-400">사람</span>
                    <span className="text-slate-50 ">
                      을 위한 기술로
                      <br />
                    </span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl md:text-3xl lg:text-5xl font-bold font-['Pretendard'] leading-tight tracking-wide">
                    <span className="text-sky-400">산업과 일상의 문제</span>
                    <span className="text-slate-50">를 해결합니다.</span>
                  </p>
                </div>

                {/* Description Text */}
                <div className="text-xs md:text-base lg:text-lg text-zinc-200 font-normal font-['Pretendard'] leading-relaxed md:leading-8 py-6 md:py-10">
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
                      <h3
                        className="text-4xl font-extrabold font-['Pretendard'] leading-tight"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #2FA7FF, #A9C7DD)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-center text-sm font-medium text-slate-50 font-['Pretendard'] leading-tight">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Circles - overlapping layout */}
              <div className="lg:hidden relative w-full h-48 md:h-64 mt-8 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {[
                    {
                      title: "Value",
                      subtitle: "사람 중심의 가치 추구",
                      position:
                        "absolute top-0 -translate-x-[140px] md:-translate-x-[200px]",
                      size: "w-40 h-40 md:w-52 md:h-52",
                    },
                    {
                      title: "Design",
                      subtitle: "목적에 맞는 맞춤형 서비스 설계",
                      position: "absolute top-0 translate-x-0",
                      size: "w-40 h-40 md:w-52 md:h-52",
                    },
                    {
                      title: "Technique",
                      subtitle: "기술 혁신과 실용적 솔루션",
                      position:
                        "absolute top-0 translate-x-[140px] md:translate-x-[200px]",
                      size: "w-40 h-40 md:w-52 md:h-52",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`${item.position} ${item.size} rounded-full border-2 border-blue-900 flex flex-col items-center justify-center gap-1 md:gap-2 p-2 md:p-4`}
                    >
                      <h3
                        className="text-xs md:text-base font-bold font-['Pretendard'] text-center"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #2FA7FF, #A9C7DD)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-center text-[10px] md:text-xs font-medium text-slate-50 font-['Pretendard'] leading-tight line-clamp-2">
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
            <div className="text-center text-orange-500 text-xs md:text-xl font-bold font-['Pretendard']">
              Business
            </div>
            <p className="max-w-[911px] text-lg md:text-5xl font-boldtext-center text-dark-950 font-['Pretendard'] leading-tight md:leading-[62.4px] font-bold">
              인시스템은 세 가지 핵심 영역을 중심으로,
              <br />
              다양한 현장의 문제를 해결하고 있습니다.
            </p>
          </div>

          {/* Business Cards */}
          <div className="flex flex-col gap-0">
            {/* Digital Healthcare */}
            <div
              className="relative flex flex-col items-start justify-center gap-4 md:gap-9 px-4 md:px-8 lg:px-[120px] py-8 md:py-12 bg-gradient-to-b from-black/40 to-black/40 border-b border-blue-900/30 overflow-hidden min-h-64 md:min-h-auto"
              style={{
                backgroundImage: `url(${sectionHealth.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2 w-full">
                <div className="text-xs md:text-2xl font-normal text-slate-400 font-['Pretendard'] leading-[32.4px]">
                  디지털 헬스케어
                </div>
                <div className="text-sm md:text-4xl font-extrabold text-white font-['Pretendard'] leading-[41.4px]">
                  Digital Healthcare
                </div>
                <p className="text-xs md:text-xl font-medium text-slate-400 font-['Pretendard'] leading-normal">
                  병원 · 사용자 데이터를 분석하여 개인 맞춤형 건강관리 서비스
                  제공
                </p>
              </div>
              <button
                onClick={() => router.push("/projects/diabetes-free")}
                className="relative z-10 px-3 md:px-6 py-2 md:py-3 bg-slate-100 text-slate-900 rounded-lg font-bold text-xs md:text-base font-['Pretendard'] hover:bg-slate-200 transition-colors"
              >
                View Projects
              </button>
            </div>

            {/* Port Logistics */}
            <div
              className="relative flex flex-col items-start justify-center gap-4 md:gap-9 px-4 md:px-8 lg:px-[120px] py-8 md:py-12 bg-gradient-to-b from-black/40 to-black/40 border-b border-blue-900/30 overflow-hidden w-full min-h-64 md:min-h-auto"
              style={{
                backgroundImage: `url(${sectionPort.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2 w-full">
                <div className="text-xs md:text-2xl font-normal text-slate-400 font-['Pretendard'] leading-[32.4px]">
                  항만 물류
                </div>
                <div className="text-sm md:text-4xl font-extrabold text-white font-['Pretendard'] leading-[41.4px]">
                  Port Logistics
                </div>
                <p className="text-xs md:text-xl font-medium text-slate-400 font-['Pretendard'] leading-normal">
                  항만 · 물류 · 검역을 통합 관리하는 물류 디지털 플랫폼
                </p>
              </div>
              <button
                onClick={() => router.push("/projects/portqm")}
                className="relative z-10 px-3 md:px-6 py-2 md:py-3 bg-slate-100 text-slate-900 rounded-lg font-bold text-xs md:text-base font-['Pretendard'] hover:bg-slate-200 transition-colors"
              >
                View Projects
              </button>
            </div>

            {/* Smart Factory */}
            <div
              className="relative flex flex-col items-start justify-center gap-4 md:gap-9 px-4 md:px-8 lg:px-[120px] py-8 md:py-12 bg-gradient-to-b from-black/40 to-black/40 overflow-hidden w-full min-h-64 md:min-h-auto"
              style={{
                backgroundImage: `url(${sectionSmart.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-2 w-full">
                <div className="text-xs md:text-2xl font-normal text-slate-400 font-['Pretendard'] leading-[32.4px]">
                  스마트팩토리
                </div>
                <div className="text-sm md:text-4xl font-extrabold text-white font-['Pretendard'] leading-[41.4px]">
                  Smart Factory
                </div>
                <p className="text-xs md:text-xl font-medium text-slate-400 font-['Pretendard'] leading-normal">
                  항만 · 물류 · 검역을 통합 관리하는 물류 디지털 플랫폼
                </p>
              </div>
              <button
                onClick={() => router.push("/projects/dn-mes")}
                className="relative z-10 px-3 md:px-6 py-2 md:py-3 bg-slate-100 text-slate-900 rounded-lg font-bold text-xs md:text-base font-['Pretendard'] hover:bg-slate-200 transition-colors"
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
            <div className="text-center text-orange-500 text-xs md:text-xl font-bold font-['Pretendard']">
              History
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-slate-100 text-center font-['Pretendard']">
              회사 연혁
            </h2>
          </div>

          {/* Mobile History Timeline */}
          <div className="md:hidden max-w-full mx-auto px-4 py-8">
            <div className="space-y-6">
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2025
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  루틴케어 개발, 청소년척추건강 플랫폼 개발, GGP 학습 플랫폼
                  개발
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2024
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  AI 기반 식단관리 서비스, DN솔루션즈 MES 2차 프로젝트, 해군
                  함정 정비지원 체계 개발
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2023
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  DN솔루션즈 MES 모바일 반응형 개발, 스마트 리테일 운영관리 SaaS
                  개발
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2022
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  부산상공회의소 S-Space 본사 이전
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2021
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  한국연구재단 주민공감현장문제 해결사업, 비대면 감염병 관리
                  시스템 개발
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2020
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  부산대병원 AI기반 당뇨병 예방·관리 시스템 개발 사업 참여
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2019
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  부산테크노파크 홈페이지 개발
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2018
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  시니어 피트니스 운동처방 APP 개발
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2017
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  부산 테크노파크(지사단지) 본사 이전
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-6 py-4">
                <div className="text-sky-400 text-lg font-bold font-['Pretendard'] mb-2">
                  2016
                </div>
                <p className="text-white text-sm font-medium font-['Pretendard']">
                  (주)인시스템 창립
                </p>
              </div>
            </div>
          </div>

          {/* Desktop History Timeline */}
          <div className="hidden md:block max-w-[1200px] mx-auto py-12">
            {/* 2025 - Right Image + Left Content */}
            <div className="mb-20 grid grid-cols-2 gap-12 items-end">
              <div className="flex items-start justify-center">
                <div
                  className="rounded-lg overflow-hidden flex-shrink-0"
                  style={{ width: "492px", height: "316px" }}
                >
                  <img
                    src={history2025.src}
                    alt="2025"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start pr-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2025
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-l-2 border-sky-400 pl-6 text-left">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      11
                    </div>
                    <p className="text-white font-medium font-['Pretendard'] mb-1">
                      김해의생명산업진흥원 퍼스널랩 기반 디지털 헬스케어 플랫폼
                      구축사업 참여
                    </p>
                    <p className="text-slate-400 font-['Pretendard']">
                      AI를 활용한 건강 루틴 기반 리워드 플랫폼 [루틴케어] 개발
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-6 text-left">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      06
                    </div>
                    <p className="text-white font-medium font-['Pretendard'] mb-1">
                      취약계층청소년 근골격계질환 예방 및 맞춤형 건강관리 사업
                      참여
                    </p>
                    <p className="text-slate-400 font-['Pretendard']">
                      청소년 대상 척추 질환 조기 진단 및 건강 관리 플랫폼
                      [청소년척추건강] 개발
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-6 text-left">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      03
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      아동발달맞춤형 하이브리드 디지털 학습 플랫폼 [GGP] 개발
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2024 - Left */}
            <div className="mb-20 grid grid-cols-2 gap-0">
              <div className="flex flex-col items-end pr-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2024
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-r-2 border-sky-400 pr-6 text-right">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      06
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      AI 기반 식단관리 서비스 제공을 위한 객체 인식 모델 연구
                      참여
                    </p>
                  </div>
                  <div className="border-r-2 border-sky-400 pr-6 text-right">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      03
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      DN솔루션즈 MES 2차 프로젝트 개발 및 안정화
                    </p>
                  </div>
                  <div className="border-r-2 border-sky-400 pr-6 text-right">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      03
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      해군 함정 상태기반 정비지원 체계 서비스 S/W 개발
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>

            {/* 2023 - Right */}
            <div className="mb-20 grid grid-cols-2 gap-0">
              <div></div>
              <div className="flex flex-col items-start pl-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2023
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-l-2 border-sky-400 pl-6">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      09
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      DN솔루션즈 MES 모바일 반응형 및 안드로이드 어플리케이션
                      개발
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-6">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      05
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      중소형 유통매장의 디지털 전환을 위한 스마트 리테일
                      운영관리 시스템 SaaS 개발
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-6">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      03
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      AI 기반 건강관리 서비스 구축사업 참여
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2022 - Left Image + Right Content */}
            <div className="mb-20 grid grid-cols-2 gap-0">
              <div className="flex flex-col items-end pr-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2022
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-r-2 border-sky-400 pr-6 text-right">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      06
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      부산상공회의소 S-Space 본사 이전
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: "492px", height: "316px" }}
              >
                <img
                  src={history2022.src}
                  alt="2022"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2021 - Right Image + Left Content */}
            <div className="mb-20 grid grid-cols-2 gap-12 items-start">
              <div className="flex items-start justify-center">
                <div
                  className="rounded-lg overflow-hidden flex-shrink-0"
                  style={{ width: "492px", height: "316px" }}
                >
                  <img
                    src={history2021.src}
                    alt="2021"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start pr-12">
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="text-4xl font-bold text-white font-['Pretendard']">
                    2021
                  </h3>
                </div>
                <div className="space-y-6 w-full">
                  <div className="border-l-2 border-sky-400 pl-6 text-left">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      01
                    </div>
                    <p className="text-white font-medium font-['Pretendard'] mb-1">
                      한국연구재단 주민공감현장문제 해결사업 참여
                    </p>
                    <p className="text-slate-400 font-['Pretendard']">
                      비대면 감염병 관리 시스템 개발
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2020 - Right Image + Left Content */}
            <div className="mb-20 grid grid-cols-2 gap-12 items-start">
              <div className="flex flex-col items-end pr-12">
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="text-4xl font-bold text-white font-['Pretendard']">
                    2020
                  </h3>
                </div>
                <div className="space-y-6 w-full">
                  <div className="border-r-2 border-sky-400 pr-6 text-right">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      01
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      부산대병원 AI기반 당뇨병 예방 · 관리 시스템 개발 사업 참여
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: "492px", height: "316px" }}
              >
                <img
                  src={history2020.src}
                  alt="2020"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2019 - Right */}
            <div className="mb-20 grid grid-cols-2 gap-0">
              <div></div>
              <div className="flex flex-col items-start pl-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2019
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-l-2 border-sky-400 pl-6">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      09
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      부산테크노파크 홈페이지 개발
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2018 - Left */}
            <div className="mb-20 grid grid-cols-2 gap-0">
              <div className="flex flex-col items-end pr-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2018
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-r-2 border-sky-400 pr-6 text-right">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      11
                    </div>
                    <p className="text-white font-medium font-['Pretendard'] mb-1">
                      부산시 건강데이터 임상 유효성 검증사업 참여
                    </p>
                    <p className="text-slate-400 font-['Pretendard']">
                      시니어 피트니스 운동처방 APP(Android/iOS) 개발
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>

            {/* 2017 - Right */}
            <div className="mb-20 grid grid-cols-2 gap-0">
              <div></div>
              <div className="flex flex-col items-start pl-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2017
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-l-2 border-sky-400 pl-6">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      12
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      부산 테크노파크(지사단지) 본사 이전
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2016 - Right Image + Left Content */}
            <div className="grid grid-cols-2 gap-12 items-start">
              <div className="flex flex-col items-end pr-12">
                <h3 className="text-4xl font-bold text-white font-['Pretendard'] mb-8">
                  2016
                </h3>
                <div className="space-y-6 w-full">
                  <div className="border-r-2 border-sky-400 pr-6 text-right">
                    <div className="text-sky-400 font-bold font-['Pretendard'] mb-2">
                      03
                    </div>
                    <p className="text-white font-medium font-['Pretendard']">
                      (주)인시스템 창립
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg overflow-hidden flex-shrink-0"
                style={{ width: "492px", height: "316px" }}
              >
                <img
                  src={history2016.src}
                  alt="2016"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
