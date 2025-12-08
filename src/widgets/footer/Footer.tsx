"use client";

import React from "react";
import FooterLogo from "@/shared/styles/assets/svg/footer-logo.svg";

export const Footer = () => {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-gradient-to-b from-black to-sky-950 py-16 px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section with Policy Links and Go Top */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-neutral-700 gap-4">
          <div className="flex gap-4 sm:gap-10 text-xs sm:text-base">
            <div className="text-neutral-200 font-medium font-['Pretendard'] cursor-pointer hover:text-neutral-50">
              이용약관
            </div>
            <div className="text-neutral-200 font-medium font-['Pretendard'] cursor-pointer hover:text-neutral-50">
              개인정보 처리방침
            </div>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer hover:opacity-80"
            onClick={handleGoToTop}
          >
            <div className="text-neutral-50 text-lg sm:text-2xl font-bold font-['Pretendard']">
              GO TOP
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex items-center justify-center">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <polyline points="6 9 12 3 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          {/* Left Info */}
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Company Info */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2.5">
                <div className="text-neutral-50 text-sm sm:text-base font-bold font-['Pretendard']">
                  (주)인시스템
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-neutral-400 text-xs sm:text-sm font-normal font-['Pretendard']">
                    대표
                  </div>
                  <div className="text-neutral-50 text-xs sm:text-sm font-normal font-['Pretendard']">
                    이근익
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <div className="text-neutral-400 text-xs sm:text-sm font-normal font-['Pretendard'] whitespace-nowrap">
                  주소
                </div>
                <div className="text-neutral-50 text-xs sm:text-sm font-normal font-['Pretendard']">
                  부산광역시 동구 조방로 22, 8층 803호 (범일동, 파크빌딩)
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 font-normal font-['Pretendard']">
                      E-Mail
                    </div>
                    <div className="text-neutral-50 font-normal font-['Pretendard']">
                      help@insystem.kr
                    </div>
                  </div>

                  <div className="text-neutral-400">|</div>

                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 font-normal font-['Pretendard']">
                      대표전화
                    </div>
                    <div className="text-neutral-50 font-normal font-['Pretendard']">
                      051-714-6120
                    </div>
                  </div>

                  <div className="text-neutral-400">|</div>

                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 font-normal font-['Pretendard']">
                      FAX
                    </div>
                    <div className="text-neutral-50 font-normal font-['Pretendard']">
                      051-714-6121
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 font-normal font-['Pretendard']">
                      법인등록번호
                    </div>
                    <div className="text-neutral-50 font-normal font-['Pretendard']">
                      194211-0253914
                    </div>
                  </div>

                  <div className="text-neutral-400">|</div>

                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 font-normal font-['Pretendard']">
                      사업자등록번호
                    </div>
                    <div className="text-neutral-50 font-normal font-['Pretendard']">
                      536-86-00366
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-neutral-500 text-xs sm:text-sm font-normal font-['Pretendard'] pt-2 sm:pt-4">
                Copyright ⓒ INSYSTEM. All Rights Reserved.
              </div>
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 hidden md:flex items-end">
            <div style={{ width: "100%", height: "auto" }}>
              <FooterLogo style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
