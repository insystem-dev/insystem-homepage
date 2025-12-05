"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../shared/styles/assets/image/logo.png";

export const Gnb = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      {/* Desktop Gnb */}
      <div className="hidden md:flex justify-center">
        <div className="w-[1440px] max-w-full p-4 bg-gray-500/30 rounded-2xl flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-52 h-12 relative">
              <Image
                src={logo}
                alt="INSYSTEM"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="flex justify-start items-center gap-28">
            <Link
              href="/about"
              className={`p-2 text-center text-lg font-medium font-['Pretendard'] transition-colors ${
                pathname === "/about"
                  ? "text-sky-400 font-bold"
                  : "text-neutral-50 hover:text-blue-400"
              }`}
            >
              회사소개
            </Link>
            <Link
              href="/projects"
              className={`p-2 text-center text-lg font-medium font-['Pretendard'] transition-colors ${
                pathname === "/projects"
                  ? "text-sky-400 font-bold"
                  : "text-neutral-50 hover:text-blue-400"
              }`}
            >
              프로젝트
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => router.push("/inquiry")}
            className="w-36 h-12 px-6 py-2 bg-neutral-100 hover:bg-white rounded-lg shadow-[0px_0px_20px_0px_rgba(255,255,255,0.20)] flex justify-center items-center transition-all duration-300"
          >
            <span className="text-center text-neutral-800 text-xl font-bold font-['Pretendard']">
              문의하기
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Gnb */}
      <div className="md:hidden flex justify-center">
        <div className="w-full p-4 bg-gray-500/30 rounded-2xl flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-24 h-6 relative">
              <Image
                src={logo}
                alt="INSYSTEM"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 items-end relative z-50"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 flex flex-col gap-4 z-40">
          <Link
            href="/about"
            className="p-3 text-center text-neutral-50 text-base font-medium font-['Pretendard'] hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            회사소개
          </Link>
          <Link
            href="/projects"
            className="p-3 text-center text-neutral-50 text-base font-medium font-['Pretendard'] hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            프로젝트
          </Link>
          <button
            onClick={() => {
              router.push("/inquiry");
              setIsMenuOpen(false);
            }}
            className="p-3 w-full bg-neutral-100 hover:bg-white rounded-lg text-neutral-800 text-base font-bold font-['Pretendard'] transition-all duration-300"
          >
            문의하기
          </button>
        </div>
      )}
    </nav>
  );
};

export default Gnb;
