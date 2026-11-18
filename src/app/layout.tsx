import "./globals.css";
import "./tailwind.css";
import { cookies } from "next/headers";
import { Gnb } from "@/widgets";
import { STAFF_COOKIE, isStaffKey } from "@/shared/lib/maintenance";
import { Analytics } from "./analytics";

export const metadata = {
  colorScheme: "dark",
  title: "INSYSTEM",
  description: "인시스템 홈페이지입니다.",
  openGraph: {
    title: "INSYSTEM",
    description: "사람을 위한 기술로 산업과 일상의 문제를 해결합니다.",
    url: "https://insystem.kr",
    siteName: "INSYSTEM",
    images: [
      {
        url: "/footer-logo.svg",
        width: 1200,
        height: 630,
        alt: "INSYSTEM",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INSYSTEM",
    description: "사람을 위한 기술로 산업과 일상의 문제를 해결합니다.",
    images: ["/footer-logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 점검 기간: 직원 우회 쿠키가 있을 때만 GNB 표시 (재오픈 시 조건 제거)
  const isStaff = isStaffKey(cookies().get(STAFF_COOKIE)?.value);

  return (
    <html lang="ko">
      <head>
        <link
          rel="preload"
          href="/fonts/PretendardVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-dark-950 font-pretendard">
        <Analytics />
        {isStaff && <Gnb />}
        {children}
      </body>
    </html>
  );
}
