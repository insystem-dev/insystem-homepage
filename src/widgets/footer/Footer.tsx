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
        <div className="flex justify-between items-center mb-12 pb-12 border-b border-neutral-700">
          <div className="flex justify-start items-center gap-10">
            <div className="text-neutral-200 text-base font-medium font-['Pretendard'] cursor-pointer hover:text-neutral-50">
              이용약관
            </div>
            <div className="text-neutral-200 text-base font-medium font-['Pretendard'] cursor-pointer hover:text-neutral-50">
              개인정보 처리방침
            </div>
          </div>

          <div
            className="flex justify-start items-center gap-2 cursor-pointer hover:opacity-80"
            onClick={handleGoToTop}
          >
            <div className="text-neutral-50 text-2xl font-bold font-['Pretendard']">
              GO TOP
            </div>
            <div className="w-6 h-6 relative">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex justify-between items-start gap-8">
          {/* Left Info */}
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              {/* Company Info */}
              <div className="flex items-end gap-2.5">
                <div className="text-neutral-50 text-base font-bold font-['Pretendard']">
                  (주)인시스템
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                    대표
                  </div>
                  <div className="text-neutral-50 text-sm font-normal font-['Pretendard']">
                    이근익
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-2">
                <div className="text-neutral-400 text-sm font-normal font-['Pretendard'] whitespace-nowrap">
                  주소
                </div>
                <div className="text-neutral-50 text-sm font-normal font-['Pretendard']">
                  부산광역시 동구 조방로 22, 8층 803호 (범일동, 파크빌딩)
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                      E-Mail
                    </div>
                    <div className="text-neutral-50 text-sm font-normal font-['Pretendard']">
                      help@insystem.kr
                    </div>
                  </div>

                  <div className="text-neutral-400">|</div>

                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                      대표전화
                    </div>
                    <div className="text-neutral-50 text-sm font-normal font-['Pretendard']">
                      051-714-6120
                    </div>
                  </div>

                  <div className="text-neutral-400">|</div>

                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                      FAX
                    </div>
                    <div className="text-neutral-50 text-sm font-normal font-['Pretendard']">
                      051-714-6121
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                      법인등록번호
                    </div>
                    <div className="text-neutral-50 text-sm font-normal font-['Pretendard']">
                      194211-0253914
                    </div>
                  </div>

                  <div className="text-neutral-400">|</div>

                  <div className="flex items-center gap-1">
                    <div className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                      사업자등록번호
                    </div>
                    <div className="text-neutral-50 text-sm font-normal font-['Pretendard']">
                      536-86-00366
                    </div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-neutral-500 text-sm font-normal font-['Pretendard'] pt-4">
                Copyright ⓒ INSYSTEM. All Rights Reserved.
              </div>
            </div>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 hidden md:block">
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
