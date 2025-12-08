"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Gnb } from "@/widgets";
import { Footer } from "@/widgets";
import project1 from "@/shared/styles/assets/image/project1.png";
import project2 from "@/shared/styles/assets/image/project2.png";
import project3 from "@/shared/styles/assets/image/project3.png";
import project4 from "@/shared/styles/assets/image/project4.png";
import project5 from "@/shared/styles/assets/image/project5.png";
import project6 from "@/shared/styles/assets/image/project6.png";
import project7 from "@/shared/styles/assets/image/project7.png";
import project8 from "@/shared/styles/assets/image/project8.png";
import project9 from "@/shared/styles/assets/image/project9.png";

type Category =
  | "전체"
  | "디지털 헬스케어"
  | "항만 물류 · 국방"
  | "스마트 팩토리"
  | "그 외";

const allProjects = [
  {
    id: 1,
    title: "해군/해경 원격 함정운용지원체계",
    category: "항만 물류 · 국방",
    image: project1,
  },
  {
    id: 2,
    title: "DN솔루션즈 MES 개발 프로젝트",
    category: "스마트 팩토리",
    image: project2,
  },
  {
    id: 3,
    title: "물류운송관리시스템 (타이거페이스)",
    category: "항만 물류 · 국방",
    image: project3,
  },
  {
    id: 4,
    title: "물류운송관리시스템 (TMS)",
    category: "항만 물류 · 국방",
    image: project4,
  },
  {
    id: 5,
    title: "항만 검역관리 시스템",
    category: "항만 물류 · 국방",
    image: project5,
  },
  {
    id: 6,
    title: "AI 활용 건강 루틴 기반 리워드 플랫폼 [루틴케어]",
    category: "디지털 헬스케어",
    image: project6,
  },
  {
    id: 7,
    title: "AI기반 개인맞춤형 당뇨병 예방관리 시스템 [당뇨프리]",
    category: "디지털 헬스케어",
    image: project7,
  },
  {
    id: 8,
    title: "AI기반 청소년 척추 질환 조기 진단 및 건강관리 플랫폼",
    category: "디지털 헬스케어",
    image: project8,
  },
  {
    id: 9,
    title: "스마트 슈즈를 활용한 건강토큰 APP",
    category: "디지털 헬스케어",
    image: project9,
  },
];

const categories: Category[] = [
  "전체",
  "디지털 헬스케어",
  "항만 물류 · 국방",
  "스마트 팩토리",
  "그 외",
];

export default function ProjectsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>("전체");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    if (activeCategory === "전체") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((p) => p.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-sky-950 overflow-hidden">
      {/* GNB */}
      <div className="w-full pt-5 px-8 fixed top-0 z-50 flex justify-center">
        <div className="w-full max-w-[1440px]">
          <Gnb />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-32">
        {/* Page Title Section */}
        <div className="max-w-[1440px] mx-auto px-8 mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-zinc-200 text-sm font-normal font-['Pretendard']">
              홈
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-zinc-200"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-zinc-200 text-sm font-semibold font-['Pretendard']">
              프로젝트
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-black text-slate-50 font-['Pretendard'] leading-tight">
            프로젝트
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-[1440px] mx-auto px-8 mb-16">
          <div className="flex gap-4 border-b border-neutral-700 pb-4 overflow-x-auto md:overflow-x-visible scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-3 text-base md:text-2xl font-['Pretendard'] transition-all whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat
                    ? "border-b-4 border-sky-400 text-neutral-50 font-bold"
                    : "text-neutral-50 font-medium hover:text-sky-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-[1440px] mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col gap-4 cursor-pointer group"
                onClick={() => {
                  if (project.id === 6) {
                    router.push("/projects/routine-care");
                  } else if (project.id === 1) {
                    router.push("/projects/ship-operation");
                  } else if (project.id === 2) {
                    router.push("/projects/dn-mes");
                  } else if (project.id === 3) {
                    router.push("/projects/spine-health");
                  } else if (project.id === 4) {
                    router.push("/projects/tms");
                  } else if (project.id === 5) {
                    router.push("/projects/portqm");
                  } else if (project.id === 7) {
                    router.push("/projects/diabetes-free");
                  } else if (project.id === 8) {
                    router.push("/projects/spine-health");
                  } else if (project.id === 9) {
                    router.push("/projects/smart-shoes");
                  }
                }}
              >
                {/* Image */}
                <div className="w-full aspect-square bg-gray-700 rounded-lg overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="px-4 py-2 flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-semibold text-neutral-50 font-['Pretendard'] line-clamp-2 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    >
                      <path
                        d="M7 7H17M17 7V17M17 7L7 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-neutral-50"
                      />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-neutral-400 font-['Pretendard']">
                    개발 · 디자인
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 9 && (
          <div className="flex justify-center mb-32">
            <button className="px-3 py-1.5 rounded-full border border-white flex justify-center items-center gap-2.5 hover:bg-white/10 transition-colors group">
              <span className="text-white text-lg font-semibold font-['Pretendard'] leading-7 group-hover:text-sky-400">
                More
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="text-white group-hover:text-sky-400"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
