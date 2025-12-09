"use client";

import React from "react";
import Image from "next/image";
import { Footer, Gnb } from "@/widgets";
import { ProjectDetailProps } from "@/features/projects/types/project-detail";

export default function ProjectDetailTemplate({
  contentImage,
  thumbImage,
  thumbImageMobile,
  category,
  title,
  subtitle,
  description,
  workScopes,
  servicePlatforms,
}: ProjectDetailProps) {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-sky-950">
      {/* Thumbnail Section - Desktop */}
      {thumbImage && (
        <div className="hidden md:block w-full h-[700px] bg-slate-900 overflow-hidden">
          <Image
            src={thumbImage}
            alt="프로젝트 썸네일"
            width={1920}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}

      {/* Thumbnail Section - Mobile */}
      {thumbImageMobile && (
        <div className="md:hidden w-full h-64 bg-slate-900 overflow-hidden">
          <Image
            src={thumbImageMobile}
            alt="프로젝트 썸네일"
            width={1080}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}

      {/* Project Introduction Section */}
      <section className="w-full px-4 md:px-8 py-14 md:py-20 bg-slate-900">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-start md:items-start md:gap-6">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-start items-start gap-8 md:gap-4">
              {/* Project Title */}
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                <p className="text-slate-50 text-base font-semibold font-['Pretendard']">
                  {category}
                </p>
                <h1 className="text-slate-50 text-3xl md:text-5xl font-bold font-['Pretendard']">
                  {title}
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
                    {workScopes.map((scope, index) => (
                      <div
                        key={index}
                        className="px-3 py-1.5 bg-indigo-100/60 rounded-lg"
                      >
                        <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                          {scope.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Platform */}
                <div className="flex flex-col justify-start items-start gap-2.5 w-full">
                  <span className="text-gray-500 text-base font-medium font-['Pretendard']">
                    서비스 플랫폼
                  </span>
                  <div className="flex flex-col justify-center items-start gap-2.5 w-full">
                    {servicePlatforms.map((platform, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:justify-start md:items-center md:gap-4 w-auto md:w-full"
                      >
                        <span className="text-zinc-200 text-base font-medium font-['Pretendard']">
                          {platform.name}
                        </span>
                        <div className="flex gap-3 md:gap-2">
                          {platform.platforms.map((plat, platIndex) => (
                            <div
                              key={platIndex}
                              className="px-3 py-1.5 bg-indigo-100/60 rounded-lg"
                            >
                              <span className="text-gray-900 text-sm font-medium font-['Pretendard']">
                                {plat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Description */}
            <div className="flex-1 w-full md:w-auto pt-4">
              <p className="text-slate-50 text-base md:text-lg font-medium font-['Pretendard'] leading-6 md:leading-7">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content Section */}
      <section className="w-full px-8 py-24 bg-gradient-to-l from-black to-sky-950">
        <div className="max-w-[1440px] mx-auto">
          <Image
            src={contentImage}
            alt="프로젝트 콘텐츠"
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
