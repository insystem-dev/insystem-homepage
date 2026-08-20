"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Footer, ProjectSection } from "@/widgets";
import bgCard1 from "@/shared/styles/assets/image/bg-card1.webp";
import bgCard2 from "@/shared/styles/assets/image/bg-card2.webp";
import bgCard3 from "@/shared/styles/assets/image/bg-card3.webp";
import bgCard1Hover from "@/shared/styles/assets/image/bg-card1-hover.webp";
import bgCard2Hover from "@/shared/styles/assets/image/bg-card2-hover.webp";
import bgCard3Hover from "@/shared/styles/assets/image/bg-card3-hover.webp";
import process1 from "@/shared/styles/assets/image/process1.webp";
import process2 from "@/shared/styles/assets/image/process2.webp";
import process3 from "@/shared/styles/assets/image/process3.webp";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Figma(463:489) 기준 카드 계단 배치.
// 최상단 카드(Port Logistics)를 0 으로 두고 나머지를 아래로 내린다.
// offset  : 디자인 y좌표차(px). 카드 높이 608px 기준 원본 값을 그대로 쓴다.
// revealOrder : 스크롤 시 올라오는 순번 — 중앙(항만물류) → 첫번째(헬스케어) → 세번째(스마트팩토리)
const BUSINESS_CARDS = [
  {
    front: bgCard1,
    hover: bgCard1Hover,
    alt: "Digital Healthcare",
    offset: 145,
    revealOrder: 1,
  },
  {
    front: bgCard2,
    hover: bgCard2Hover,
    alt: "Port Logistics",
    offset: 0,
    revealOrder: 0,
  },
  {
    front: bgCard3,
    hover: bgCard3Hover,
    alt: "Smart Factory",
    offset: 204,
    revealOrder: 2,
  },
] as const;

// 순번 사이 간격(타임라인 단위). 값이 커질수록 순차 등장이 뚜렷해진다.
const REVEAL_STEP = 0.08;

const PROCESS_ITEMS = [
  {
    image: process1,
    title: "UXUI Design & Data Architecture",
    subtitle: "UXUI 디자인 · 데이터 분석",
    caption: "데이터와 경험을 설계하고",
  },
  {
    image: process2,
    title: "Development & Integration",
    subtitle: "Front-end · Back-end 개발",
    caption: "시스템을 통합하며",
  },
  {
    image: process3,
    title: "Deployment & Operation",
    subtitle: "배포 후 운영 · 유지 · 개선 프로세스",
    caption: "지속적으로 개선합니다.",
  },
] as const;

// active index 경계에서 값이 튀지 않도록 하는 안정 구간
const PROCESS_BAND = 0.04;

// 이 지점을 넘어야 첫 아이템이 등장한다
const PROCESS_ENTER_AT = 0.08;


export default function MainPage() {
  const router = useRouter();
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const [processDisplayIndex, setProcessDisplayIndex] = useState(0);
  const [processTextPhase, setProcessTextPhase] = useState<"in" | "out">("in");
  const [processEntered, setProcessEntered] = useState(false);
  const processWrapRef = useRef<HTMLDivElement | null>(null);
  const processStageRef = useRef<HTMLDivElement | null>(null);
  const businessSectionRef = useRef<HTMLElement | null>(null);
  const businessStageRef = useRef<HTMLDivElement | null>(null);

  // Process active index — 섹션 전체의 scroll progress 로 계산한다.
  // 경계(1/3, 2/3) 양쪽에 안정 구간을 둬서 index 가 반복해서 뒤집히지 않게 하고,
  // one-shot 이 아니라 역스크롤에도 계속 반응한다.
  useEffect(() => {
    const wrap = processWrapRef.current;
    const stage = processStageRef.current;
    if (!wrap || !stage) return;

    const bounds = [1 / 3, 2 / 3];

    const resolve = (progress: number, current: number) => {
      let next = current;
      while (next < bounds.length && progress > bounds[next] + PROCESS_BAND) {
        next += 1;
      }
      while (next > 0 && progress < bounds[next - 1] - PROCESS_BAND) {
        next -= 1;
      }
      return next;
    };

    const onScroll = () => {
      // 모바일에서는 wrap 이 display:none 이라 높이가 0 -> 계산하지 않는다
      const distance = wrap.offsetHeight - stage.offsetHeight;
      if (distance <= 0) return;

      const progress = Math.min(
        Math.max(-wrap.getBoundingClientRect().top / distance, 0),
        1
      );
      // 첫 아이템도 고정 노출이 아니라 스크롤에 따라 등장한다 (역스크롤 시 다시 숨김)
      setProcessEntered(progress > PROCESS_ENTER_AT);
      setActiveProcessIndex((prev) => resolve(progress, prev));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 텍스트는 out -> 교체 -> in 2단계로 전환한다 (좌표는 그대로, blur/opacity 만)
  useEffect(() => {
    if (processDisplayIndex === activeProcessIndex) return;

    setProcessTextPhase("out");
    const timer = window.setTimeout(() => {
      setProcessDisplayIndex(activeProcessIndex);
      setProcessTextPhase("in");
    }, 180);

    return () => window.clearTimeout(timer);
  }, [activeProcessIndex, processDisplayIndex]);

  // 스크롤 애니메이션 Intersection Observer
  //
  // 관찰 대상에 직접 transform 이 걸리면 threshold 경계에서 intersection 상태가
  // 계속 뒤집히고, exit 시 class 를 제거하면 그대로 re-trigger loop 가 된다.
  // 그래서 (1) 진입 시 1회만 실행하고 바로 unobserve, class 는 제거하지 않으며
  //        (2) 타이틀류는 움직이지 않는 부모 wrapper 를 관찰하고
  //            transform 은 그 안의 title 에만 적용한다.
  useEffect(() => {
    // 관찰 대상(key) -> class 를 붙일 실제 애니메이션 대상(value)
    const targets = new Map<Element, Element[]>();

    const register = (observed: Element, animated: Element) => {
      const list = targets.get(observed);
      if (list) list.push(animated);
      else targets.set(observed, [animated]);
    };

    // 타이틀 / 설명: 고정 wrapper 를 관찰해 observer 와 animated element 를 분리
    document
      .querySelectorAll(".section-title, .section-description")
      .forEach((el) => register(el.parentElement ?? el, el));

    // 개별 순차 등장이 필요한 요소는 자기 자신을 관찰 (one-shot 이라 loop 없음)
    document
      .querySelectorAll(".project-item, .project-button")
      .forEach((el) => register(el, el));

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          targets
            .get(entry.target)
            ?.forEach((el) => el.classList.add("scroll-animate"));

          // one-shot: 한 번 등장하면 해제. 화면에서 벗어나도 되돌리지 않는다.
          scrollObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
      }
    );

    targets.forEach((_animated, observed) => scrollObserver.observe(observed));
    return () => scrollObserver.disconnect();
  }, []);

  // Business 카드: 시간 기반 reveal 이 아니라 스크롤 진행량이 곧 progress 인
  // pinned scene. 섹션이 화면에 고정된 채, 스크롤한 만큼만 카드가 올라온다.
  useEffect(() => {
    const section = businessSectionRef.current;
    const stage = businessStageRef.current;
    if (!section || !stage) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 모바일(1열)은 카드가 세로로 3장 쌓여 한 화면에 담기지 않으므로 pin 하지 않는다.
      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".business-card", stage);
        if (!cards.length) return;

        // transform 의 영향을 받지 않는 레이아웃 기준 top (offsetTop 누적)
        const topWithinStage = (el: HTMLElement) => {
          let y = 0;
          let node: HTMLElement | null = el;
          while (node && node !== stage) {
            y += node.offsetTop;
            node = node.offsetParent as HTMLElement | null;
          }
          return y;
        };

        // 세 카드 모두 동일한 초기 오프셋. 시차는 위치가 아니라 순번으로만 준다.
        // 화면(뷰포트) 아래로 내려 완전히 가린다 — 클리핑 기준이 뷰포트이기 때문.
        const startY = () => {
          const minTop = Math.min(...cards.map(topWithinStage));
          return window.innerHeight - minTop + 48;
        };

        // DOM 순서 -> 등장 순번
        const order = BUSINESS_CARDS.map((c) => c.revealOrder);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // 뷰포트 높이 기준 1.8 화면만큼을 카드 이동 progress 로 소비한다
            end: () => "+=" + Math.round(window.innerHeight * 1.8),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 0 ~ 10% : 화면만 고정. line 과 title 이 먼저 보이는 구간
        tl.to({}, { duration: 0.1 });
        // 10 ~ 75% : 스크롤 진행량에 비례해 카드가 아래 -> 위로.
        // 중앙 -> 첫번째 -> 세번째 순으로 약간씩 늦게 출발한다.
        tl.fromTo(
          cards,
          { y: startY },
          {
            y: 0,
            // 마지막 지점에서 완만히 감속하며 정착. 스크롤 위치와 카드 위치의
            // 대응은 그대로 유지되고(되감으면 그대로 되돌아감) 도착감만 부드러워진다.
            ease: "power2.out",
            duration: 0.6,
            stagger: (i: number) => order[i] * REVEAL_STEP,
          },
          0.1
        );
        // 75 ~ 100% : 완성된 화면을 잠시 유지한 뒤 pin 해제
        tl.to({}, { duration: 0.25 });
      });

      return () => mm.revert();
    }, section);

    // Next/Image 는 lazy 로 뒤늦게 들어와 레이아웃이 바뀐다.
    // 측정이 어긋나면 pin 거리와 카드 시작 위치가 틀어지므로 로드 후 다시 잰다.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    const images = Array.from(stage.querySelectorAll("img"));
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", refresh, { once: true });
    });

    return () => {
      window.removeEventListener("load", refresh);
      images.forEach((img) => img.removeEventListener("load", refresh));
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 px-4 sm:px-4 md:px-8">
        {/* Background Video */}
        {/* playsInline 이 없으면 iOS Safari 가 인라인 재생을 막고
            네이티브 전체화면 플레이어(재생 바)로 전환한다. */}
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8">
          {/* Main Title — h1 은 페이지당 하나로 유지 */}
          <h1 className="max-w-full md:w-[694px] text-center text-slate-50 text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold font-pretendard leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
            인간 중심의 기술,
            <br />
            현장을 이해하는 개발
          </h1>
          {/* Subtitle */}
          <p className="max-w-full md:w-[694px] text-center text-zinc-200 text-base leading-6 sm:text-base md:text-lg lg:text-xl font-medium font-pretendard">
            항만 · 물류부터 디지털 헬스케어까지,
            <span className="hidden sm:inline"> </span>
            <br className="sm:hidden" />
            데이터 기반 플랫폼으로 세상을 연결합니다.
          </p>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-16 z-10">
          <button className="px-3 py-1.5 rounded-full border border-white flex justify-center items-center gap-2.5 hover:bg-white/10 transition-colors">
            <span className="text-white text-xs sm:text-base font-bold font-pretendard leading-6">
              Scroll Down
            </span>
          </button>
        </div>
      </div>

      {/* Business Section */}
      <section
        ref={businessSectionRef}
        className="business-section w-full px-0 sm:px-2 md:px-8 bg-gradient-to-b from-black to-sky-950"
      >
        {/* pinned stage — 이 안의 title/line 은 고정, 카드만 스크롤 progress 로 움직인다 */}
        <div ref={businessStageRef} className="business-stage">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-4 md:px-0">
            {/* Section Header */}
            <div className="mb-8 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 font-pretendard mb-3 md:mb-4 section-title">
                Business
              </h2>
              <p className="text-base md:text-lg font-medium text-neutral-50 font-pretendard leading-6 md:leading-7 max-w-3xl section-description">
                인시스템은 산업과 일상을 연결하는 데이터 기반 플랫폼
                전문기업입니다.
                <br />세 가지 핵심 영역을 중심으로, 다양한 현장의 문제를
                해결하고 있습니다.
              </p>
            </div>

            {/* Business Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
              {BUSINESS_CARDS.map((card) => (
                <div
                  key={card.alt}
                  className="business-col"
                  style={
                    {
                      "--card-offset": `${card.offset}px`,
                    } as React.CSSProperties
                  }
                >
                  <div className="business-card">
                    <div className="business-card-media rounded-3xl overflow-hidden">
                      <div className="business-card-front">
                        <Image
                          src={card.front}
                          alt={`${card.alt} background`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                          className="object-cover object-top"
                        />
                      </div>

                      <div className="business-card-hover">
                        <Image
                          src={card.hover}
                          alt={`${card.alt} hover`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                          className="object-cover object-top"
                        />
                      </div>

                      <div className="business-card-outline" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <ProjectSection />

      {/* Process Section */}
      <section className="w-full py-12 md:py-32 lg:py-0 px-4 sm:px-6 md:px-8 bg-black">
        <div className="max-w-[1440px] mx-auto">
          {/* ---------- Desktop(lg+): sticky stage + invisible scroll track ---------- */}
          <div ref={processWrapRef} className="hidden lg:block lg:pb-32">
            <div ref={processStageRef} className="process-stage">
              {/* Section Title — 전환 모션 대상 아님 */}
              <div className="mb-8 md:mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 font-pretendard section-title">
                  Process
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-12 lg:gap-[4%]">
                {/* Visual — 위치/크기/crop 유지. 3장을 겹쳐두고 내부에서만 crossfade */}
                <div className="lg:w-[55%] h-80 sm:h-96 md:h-[538px] lg:h-[538px] bg-black rounded-2xl overflow-hidden relative flex-shrink-0">
                  {PROCESS_ITEMS.map((item, index) => (
                    <Image
                      key={item.title}
                      src={item.image}
                      alt="Process visualization"
                      fill
                      sizes="55vw"
                      className={`object-cover process-visual-layer${
                        processEntered && index === activeProcessIndex
                          ? " is-active"
                          : ""
                      }`}
                    />
                  ))}
                </div>

                {/* Text — 기존 아이템 클래스에서 lg:min-h-screen 만 제거 */}
                <div className="w-full lg:w-[41%] flex flex-col">
                  <div className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-12 text-center w-full items-center lg:h-[538px]">
                    <div
                      className="flex flex-col gap-2 process-text"
                      data-phase={processEntered ? processTextPhase : "idle"}
                    >
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#D9DFE9] font-pretendard leading-tight">
                        {PROCESS_ITEMS[processDisplayIndex].title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 font-pretendard leading-relaxed">
                        {PROCESS_ITEMS[processDisplayIndex].subtitle}
                      </p>
                    </div>

                    {/* 세로선 — 텍스트와 동일한 전환 모션에 포함.
                        높이는 세 아이템 모두 326px 로 같아 페이드만 일어난다.
                        남는 세로 공간을 채워 텍스트 박스 총높이를 비주얼(538px)에 맞춘다 */}
                    <div
                      className="flex justify-center items-center w-full flex-1 min-h-0 process-text"
                      data-phase={processEntered ? processTextPhase : "idle"}
                    >
                      <div className="w-0.5 h-full bg-[#D9DFE9]/70"></div>
                    </div>

                    <p
                      className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#D9DFE9] font-pretendard leading-tight process-text"
                      data-phase={processEntered ? processTextPhase : "idle"}
                    >
                      {PROCESS_ITEMS[processDisplayIndex].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 스크롤 진행량 확보 전용. 사용자에게 보이지 않는다. */}
            <div className="process-scroll-track" aria-hidden="true">
              {PROCESS_ITEMS.map((item) => (
                <div key={item.title} className="process-step" />
              ))}
            </div>
          </div>

          {/* ---------- Mobile(<lg): 기존 세로 나열 구조 유지 ---------- */}
          <div className="lg:hidden">
            <div className="mb-8 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 font-pretendard section-title">
                Process
              </h2>
            </div>

            {PROCESS_ITEMS.map((item, index) => (
              <div
                key={item.title}
                // 첫 아이템의 상단 패딩을 없애 타이틀-콘텐츠 간격을
                // 다른 섹션(Business / Project)과 동일하게 맞춘다
                className={`flex flex-col justify-center gap-6 md:gap-8 text-center w-full items-center pb-20 ${
                  index === 0 ? "pt-0" : "pt-20"
                }`}
              >
                <div className="w-full h-64 sm:h-80 bg-black rounded-2xl overflow-hidden relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D9DFE9] font-pretendard leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-pretendard leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <div className="flex justify-center items-center w-full">
                  <div className="w-0.5 h-[120px] bg-[#D9DFE9]/70"></div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#D9DFE9] font-pretendard leading-tight">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      {/* 모바일 수치는 Figma 463:640(360px 프레임) 기준, md 이상은 기존 데스크톱 값 유지 */}
      <section className="w-full min-h-[640px] md:min-h-0 flex md:block items-center py-0 md:py-52 px-4 md:px-8 bg-black relative overflow-hidden">
        {/* Background Gradient Circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[331px] h-[331px] md:w-[661px] md:h-[661px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#0039A4_0%,#000F2C_50%,rgba(0,0,0,0)_100%)]"></div>

        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col justify-center items-center gap-[15px] md:gap-8">
            {/* Top Section */}
            <div className="flex flex-col justify-center items-center gap-0 md:gap-4">
              <p className="text-center text-[14px] md:text-2xl font-semibold text-neutral-50 font-pretendard leading-[1.5] md:leading-9 tracking-normal">
                디지털 헬스케어부터 산업·물류 플랫폼까지
              </p>
              <h2 className="text-center text-[18px] md:text-4xl font-bold text-neutral-50 font-pretendard leading-[1.5] md:leading-[54px] tracking-normal">
                새로운 프로젝트 제안을 기다립니다.
              </h2>
            </div>
            {/* Contact Button */}
            <button
              onClick={() => router.push("/contact")}
              className="h-6 md:h-12 px-2 md:px-4 py-1 md:py-2 bg-neutral-100 hover:bg-neutral-200 rounded-[2px] md:rounded-lg shadow-[0px_0px_20px_0px_rgba(255,255,255,0.08)] inline-flex justify-center items-center gap-[5px] md:gap-2.5 transition-colors"
            >
              <span className="text-neutral-800 text-[10px] md:text-xl font-bold font-pretendard tracking-normal">
                Contact us
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 md:w-6 md:h-6"
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
            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 md:gap-2">
              <p className="text-center sm:text-left text-[12px] md:text-2xl font-medium text-neutral-100 font-pretendard tracking-normal">
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
