import React from "react";
import Image from "next/image";
import { cookies } from "next/headers";
import { MainPage } from "@/features/home/ui";
import logo from "@/shared/styles/assets/image/logo-white.webp";
import { STAFF_COOKIE, isStaffKey } from "@/shared/lib/maintenance";

// ─────────────────────────────────────────────────────────────
// 홈페이지 점검(준비 중) 페이지
//
// 직원 우회 쿠키(insystem_staff)가 있으면 원래 메인 페이지를 보여준다.
// 사이트를 다시 열 때는 아래를 원래대로 되돌린다.
//   export default function Home() { return <MainPage />; }
// 그리고 src/middleware.ts 삭제, layout.tsx 의 <Gnb /> 주석 해제.
// ─────────────────────────────────────────────────────────────
// 모니터 + 로딩 스피너 + 경고 삼각형 아이콘
function MaintenanceIcon() {
  return (
    <svg
      viewBox="0 0 240 170"
      className="w-48 md:w-60 h-auto"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* 모니터 */}
      <g stroke="white" strokeOpacity="0.9" strokeWidth="6">
        <rect x="40" y="20" width="160" height="112" rx="8" />
        <path d="M40 106H200" />
        <path d="M100 132V158M140 132V158M82 158H158" />
      </g>
      {/* 로딩 스피너 */}
      <g
        className="animate-spin"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          animationDuration: "3s",
        }}
        stroke="#0ea5e9"
        strokeWidth="5"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d="M120 40V48"
            transform={`rotate(${i * 45} 120 63)`}
            opacity={0.15 + (i / 7) * 0.85}
          />
        ))}
      </g>
      {/* 경고 삼각형 (모니터 모서리를 가리도록 배경색으로 채움) */}
      <path
        d="M200 6L234 62H166Z"
        fill="#0a0e27"
        stroke="#0ea5e9"
        strokeWidth="6"
      />
      <path d="M200 26V42" stroke="#0ea5e9" strokeWidth="6" />
      <circle cx="200" cy="52" r="1.5" fill="#0ea5e9" stroke="#0ea5e9" />
    </svg>
  );
}

export default function Home() {
  if (isStaffKey(cookies().get(STAFF_COOKIE)?.value)) {
    return <MainPage />;
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center gap-10 px-6 pb-24 bg-dark-950 text-white">
      <MaintenanceIcon />
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
          <span className="font-normal">현재</span> 홈페이지 준비 중
          <span className="font-normal">입니다.</span>
        </h1>
        <p className="text-sm md:text-base font-normal leading-relaxed text-white/60 break-keep">
          더 나은 모습으로 찾아뵙기 위해
          <br />
          홈페이지를 정비하고 있습니다.
          <br />
          빠른 시일 내에 다시 인사드리겠습니다.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-36 h-8 md:w-40 md:h-10">
        <Image
          src={logo}
          alt="INSYSTEM"
          fill
          className="object-contain"
          priority
        />
      </div>
    </main>
  );
}
