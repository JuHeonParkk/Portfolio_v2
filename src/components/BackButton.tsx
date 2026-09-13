"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="프로젝트 목록으로 돌아가기"
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-xl text-gray-600 shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <span aria-hidden="true">←</span>
    </button>
  );
}
