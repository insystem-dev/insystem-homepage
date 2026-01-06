import "./globals.css";
import "./tailwind.css";
import { Gnb } from "@/widgets";
import { Analytics } from "./analytics";

export const metadata = {
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
  return (
    <html lang="en">
      <head />
      <body className="bg-dark-950">
        <Analytics />
        <Gnb />
        {children}
      </body>
    </html>
  );
}
