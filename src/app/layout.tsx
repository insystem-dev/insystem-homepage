import "./globals.css";
import "./tailwind.css";
import { Gnb } from "@/widgets";

export const metadata = {
  title: "INSYSTEM",
  description: "인시스템 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-950">
        <Gnb />
        {children}
      </body>
    </html>
  );
}
