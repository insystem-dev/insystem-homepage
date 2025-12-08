"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Footer, ProjectSection } from "@/widgets";
import bgCard1 from "@/shared/styles/assets/image/bg-card1.png";
import bgCard2 from "@/shared/styles/assets/image/bg-card2.png";
import bgCard3 from "@/shared/styles/assets/image/bg-card3.png";
import bgCard1Hover from "@/shared/styles/assets/image/bg-card1-hover.png";
import bgCard2Hover from "@/shared/styles/assets/image/bg-card2-hover.png";
import bgCard3Hover from "@/shared/styles/assets/image/bg-card3-hover.png";
import process1 from "@/shared/styles/assets/image/process1.png";
import process2 from "@/shared/styles/assets/image/process2.png";
import process3 from "@/shared/styles/assets/image/process3.png";
import { useEffect, useState } from "react";

export default function MainPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const processItems = document.querySelectorAll("[data-process-item]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-process-item");
            if (index) {
              setActiveProcessIndex(parseInt(index));
              entry.target.classList.add("animate-in");
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    processItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // 스크롤 애니메이션 Intersection Observer
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".section-title, .section-description, .business-card, .project-item, .project-button"
    );

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 화면에 보이면 클래스 추가
            entry.target.classList.add("scroll-animate");
          } else {
            // 화면에서 사라지면 클래스 제거 (다시 스크롤해서 들어올 때 애니메이션 재작동)
            entry.target.classList.remove("scroll-animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedElements.forEach((el) => scrollObserver.observe(el));
    return () => scrollObserver.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 px-2 sm:px-4 md:px-8">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8">
          {/* Main Title */}
          <h1 className="max-w-full md:w-[694px] text-center text-slate-50 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-['Pretendard'] leading-tight">
            인간 중심의 기술,
            <br />
            현장을 이해하는 개발
          </h1>
          {/* Subtitle */}
          <p className="max-w-full md:w-[694px] text-center text-zinc-200 text-sm sm:text-base md:text-lg lg:text-xl font-medium font-['Pretendard']">
            항만 · 물류부터 디지털 헬스케어까지, 데이터 기반 플랫폼으로 세상을
            연결합니다.
          </p>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-4 md:bottom-8 z-10">
          <button className="px-3 py-1.5 rounded-full border border-white flex justify-center items-center gap-2.5 hover:bg-white/10 transition-colors">
            <span className="text-white text-xs sm:text-base font-bold font-['Pretendard'] leading-6">
              Scroll Down
            </span>
          </button>
        </div>
      </div>

      {/* Business Section */}
      <section className="w-full py-12 md:py-20 px-0 sm:px-2 md:px-8 bg-gradient-to-b from-black to-sky-950 pt-12 md:pt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-4 md:px-0">
          {/* Section Header */}
          <div className="mb-8 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 font-['Pretendard'] mb-3 md:mb-4 section-title">
              Business
            </h2>
            <p className="text-base md:text-lg font-medium text-neutral-50 font-['Pretendard'] leading-6 md:leading-7 max-w-3xl section-description">
              인시스템은 산업과 일상을 연결하는 데이터 기반 플랫폼
              전문기업입니다.
              <br />세 가지 핵심 영역을 중심으로, 다양한 현장의 문제를 해결하고
              있습니다.
            </p>
          </div>

          {/* Business Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Card 1: Digital Healthcare */}
            <div
              className="rounded-3xl overflow-hidden h-[500px] md:h-[608px] relative group cursor-pointer business-card"
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={bgCard1}
                  alt="Digital Healthcare background"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Back Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  transition:
                    "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
                  transform:
                    hoveredCard === 0 ? "translateY(0)" : "translateY(-50%)",
                  opacity: hoveredCard === 0 ? 1 : 0,
                }}
              >
                <Image
                  src={bgCard1Hover}
                  alt="Digital Healthcare hover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2: Port Logistics */}
            <div
              className="rounded-3xl overflow-hidden h-[500px] md:h-[608px] relative group cursor-pointer business-card"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={bgCard2}
                  alt="Port Logistics background"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Back Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  transition:
                    "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
                  transform:
                    hoveredCard === 1 ? "translateY(0)" : "translateY(-50%)",
                  opacity: hoveredCard === 1 ? 1 : 0,
                }}
              >
                <Image
                  src={bgCard2Hover}
                  alt="Port Logistics hover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 3: Smart Factory */}
            <div
              className="rounded-3xl overflow-hidden h-[500px] md:h-[608px] relative group cursor-pointer business-card"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={bgCard3}
                  alt="Smart Factory background"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                {/* Back Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    transition:
                      "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
                    transform:
                      hoveredCard === 2 ? "translateY(0)" : "translateY(-50%)",
                    opacity: hoveredCard === 2 ? 1 : 0,
                  }}
                >
                  <Image
                    src={bgCard3Hover}
                    alt="Smart Factory hover"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <ProjectSection />

      {/* Process Section */}
      <section className="w-full py-12 md:py-32 px-4 sm:px-6 md:px-8 bg-black">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <div className="mb-8 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 font-['Pretendard'] section-title">
              Process
            </h2>
          </div>

          {/* Sticky Scroll Container */}
          <div className="flex flex-col lg:flex-row justify-start items-start gap-6 md:gap-12 lg:gap-[4%]">
            {/* Visual Container - Sticky on Desktop only */}
            <div className="hidden lg:block w-full lg:w-[55%] h-80 sm:h-96 md:h-[600px] lg:h-[700px] bg-black rounded-2xl overflow-hidden relative lg:sticky lg:top-40 flex-shrink-0">
              <Image
                src={
                  activeProcessIndex === 0
                    ? process1
                    : activeProcessIndex === 1
                    ? process2
                    : process3
                }
                alt="Process visualization"
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Text Content - Scrolling Items */}
            <div
              className="w-full lg:w-[41%] flex flex-col"
              style={{ scrollSnapType: "y mandatory" }}
            >
              {/* Process Item 1 */}
              <div
                className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-12 text-center w-full py-20 lg:min-h-screen items-center"
                data-process-item="0"
                style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
              >
                {/* Mobile Image */}
                <div className="lg:hidden w-full h-64 sm:h-80 bg-black rounded-2xl overflow-hidden relative mb-4">
                  <Image
                    src={process1}
                    alt="UXUI Design visualization"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 animate-in">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-100 font-['Pretendard'] leading-tight">
                    UXUI Design & Data Architecture
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-['Pretendard'] leading-relaxed">
                    UXUI 디자인 · 데이터 분석
                  </p>
                </div>
                <div className="flex justify-center items-center w-full animate-in">
                  <div className="w-0.5 h-96 bg-neutral-200"></div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-neutral-50 font-['Pretendard'] leading-tight animate-in">
                  데이터와 경험을 설계하고
                </p>
              </div>

              {/* Process Item 2 */}
              <div
                className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-12 text-center w-full lg:min-h-screen items-center"
                data-process-item="1"
                style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
              >
                {/* Mobile Image */}
                <div className="lg:hidden w-full h-64 sm:h-80 bg-black rounded-2xl overflow-hidden relative mb-4">
                  <Image
                    src={process2}
                    alt="Development visualization"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 animate-in">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-100 font-['Pretendard'] leading-tight">
                    Development & Integration
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-['Pretendard'] leading-relaxed">
                    Front-end · Back-end 개발
                  </p>
                </div>
                <div className="flex justify-center items-center w-full animate-in">
                  <div className="w-0.5 h-96 bg-neutral-200"></div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-neutral-50 font-['Pretendard'] leading-tight animate-in">
                  시스템을 통합하며
                </p>
              </div>

              {/* Process Item 3 */}
              <div
                className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-12 text-center w-full lg:min-h-screen items-center py-10"
                data-process-item="2"
                style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
              >
                {/* Mobile Image */}
                <div className="lg:hidden w-full h-64 sm:h-80 bg-black rounded-2xl overflow-hidden relative mb-4">
                  <Image
                    src={process3}
                    alt="Deployment visualization"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 animate-in">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-100 font-['Pretendard'] leading-tight">
                    Deployment & Operation
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-['Pretendard'] leading-relaxed">
                    배포 후 운영 · 유지 · 개선 프로세스
                  </p>
                </div>
                <div className="flex justify-center items-center w-full animate-in">
                  <div className="w-0.5 h-96 bg-neutral-200"></div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-neutral-50 font-['Pretendard'] leading-tight animate-in">
                  지속적으로 개선합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-full py-52 px-8 bg-black relative overflow-hidden">
        {/* Background Gradient Circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[661px] h-[661px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#0039A4_0%,#000F2C_50%,rgba(0,0,0,0)_100%)]"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col justify-center items-center gap-8">
            {/* Top Section */}
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-center text-base sm:text-lg md:text-2xl font-semibold text-neutral-50 font-['Pretendard'] leading-9">
                디지털 헬스케어부터 산업·물류 플랫폼까지
              </p>
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-50 font-['Pretendard'] leading-[54px]">
                새로운 프로젝트 제안을 기다립니다.
              </h2>
            </div>
            {/* Contact Button */}
            <button
              onClick={() => router.push("/contact")}
              className="h-12 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg shadow-[0px_0px_20px_0px_rgba(255,255,255,0.08)] inline-flex justify-center items-center gap-2.5 transition-colors"
            >
              <span className="text-neutral-800 text-xl font-bold font-['Pretendard']">
                Contact us
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7H17M17 7V17M17 7L7 17"
                  stroke="#262626"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <p className="text-center sm:text-left text-base sm:text-lg md:text-2xl font-medium text-neutral-100 font-['Pretendard']">
                데이터로 세상을 연결하는 기술 파트너, INSYSTEM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
