"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import project1 from "@/shared/styles/assets/image/project1.png";
import project2 from "@/shared/styles/assets/image/project2.png";
import project3 from "@/shared/styles/assets/image/project3.png";
import project4 from "@/shared/styles/assets/image/project4.png";
import project5 from "@/shared/styles/assets/image/project5.png";
import project6 from "@/shared/styles/assets/image/project6.png";
import project7 from "@/shared/styles/assets/image/project7.png";
import project8 from "@/shared/styles/assets/image/project8.png";
import project9 from "@/shared/styles/assets/image/project9.png";

export const ProjectSection = () => {
  const router = useRouter();

  return (
    <section className="w-full py-16 md:py-32 px-2 sm:px-4 md:px-8 bg-gradient-to-b from-sky-950 to-black">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 font-['Pretendard'] section-title">
            Project
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {/* Portfolio Items */}
          {[
            {
              title: "해군/해경 원격 함정운용지원체계",
              category: "개발",
              image: project1,
              slug: "ship-operation",
            },
            {
              title: "DN솔루션즈 MES 개발 프로젝트",
              category: "개발 · 디자인",
              image: project2,
              slug: "dn-mes",
            },
            {
              title: "물류운송관리시스템 (타이거페이스)",
              category: "개발 · 디자인",
              image: project3,
              slug: "tiger-face",
            },
            {
              title: "물류운송관리시스템 (TMS)",
              category: "개발 · 디자인 · 기획",
              image: project4,
              slug: "tms",
            },
            {
              title: "항만 검역관리 시스템",
              category: "개발 · 디자인 · 기획",
              image: project5,
              slug: "portqm",
            },
            {
              title: "AI 활용 건강 루틴 기반 리워드 플랫폼 [루틴케어]",
              category: "개발 · 디자인 · 기획",
              image: project6,
              slug: "routine-care",
            },
            {
              title: "AI기반 개인맞춤형 당뇨병 예방관리 시스템 [당뇨프리]",
              category: "개발 · 디자인",
              image: project7,
              slug: "diabetes-free",
            },
            {
              title: "AI기반 청소년 척추 질환 조기 진단 및 건강관리 플랫폼",
              category: "개발 · 디자인",
              image: project8,
              slug: "spine-health",
            },
            {
              title: "스마트 슈즈를 활용한 건강토큰 APP",
              category: "개발 · 디자인",
              image: project9,
              slug: "smart-shoes",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 project-item cursor-pointer"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              {/* Portfolio Image */}
              <div className="w-full aspect-square bg-gray-700 rounded-lg overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Portfolio Info */}
              <div className="px-2 md:px-4 py-2 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2 md:gap-4">
                  <h3 className="text-base md:text-xl font-semibold text-neutral-50 font-['Pretendard'] line-clamp-2">
                    {project.title}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 md:w-6 md:h-6"
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
                <p className="text-xs md:text-base font-semibold text-neutral-400 font-['Pretendard']">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Button */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/projects")}
            className="px-4 py-2 h-10 md:h-14 bg-gray-500 rounded-lg shadow-[0px_0px_20px_0px_rgba(255,255,255,0.20)] inline-flex justify-center items-center gap-2.5 hover:bg-gray-600 transition-colors project-button"
          >
            <span className="text-neutral-50 text-base md:text-xl font-bold font-['Pretendard']">
              All Projects
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 md:h-6"
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
          </button>
        </div>
      </div>
    </section>
  );
};
