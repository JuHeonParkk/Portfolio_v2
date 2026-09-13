import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Loader from "@/components/Loader";
import "./globals.css";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "박주헌 - 프론트엔드 개발자",
  description:
    "프론트엔드 개발자 박주헌 포트폴리오입니다. Next.js와 JavaScript 기반으로 프로젝트를 진행하며 반응형 웹 구현과 성능 최적화 경험을 쌓아왔습니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        {children}
      </body>
    </html>
  );
}
