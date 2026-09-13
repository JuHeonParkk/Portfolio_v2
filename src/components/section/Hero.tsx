"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const introductions = [
  "안녕하세요",
  "사용자 경험을 고민하는",
  "협업을 즐기는",
  "성능과 접근성을 고려하는",
  "함께 성장을 도모하는",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[];

      const steps = words.length - 1;

      // 초기 상태
      gsap.set(words, {
        opacity: 0,
        y: 12,
      });

      gsap.set(words[0], {
        opacity: 1,
        y: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${steps * 500}`,
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,

          snap: {
            snapTo: 1 / steps,
            duration: {
              min: 0.2,
              max: 0.4,
            },
            delay: 0.05,
            ease: "power2.out",
          },
        },
      });

      words.forEach((word, i) => {
        if (i === 0) return;

        const previous = words[i - 1];
        const position = i - 1;

        // 이전 문장
        tl.to(
          previous,
          {
            y: -12,
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
          },
          position,
        );

        // 다음 문장
        tl.fromTo(
          word,
          {
            y: 12,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.inOut",
          },
          position + 0.1,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#f5f4f2] px-6 text-[#14142b]"
    >
      <h1 className="flex flex-col items-center gap-1 text-center font-extrabold -translate-y-30">
        {/* 변경되는 문장 */}
        <div className="relative h-[1.4em] w-[min(90vw,600px)] overflow-hidden text-[clamp(20px,3.6vw,34px)] text-blue-500">
          {introductions.map((introduction, index) => (
            <span
              key={introduction}
              ref={(el) => {
                wordRefs.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center whitespace-nowrap will-change-transform"
            >
              {introduction}
            </span>
          ))}
        </div>

        {/* 고정 문장 */}
        <span className="whitespace-nowrap text-[clamp(34px,6.5vw,56px)] leading-[1.3]">
          프론트엔드 개발자
        </span>

        <span className="whitespace-nowrap text-[clamp(34px,6.5vw,56px)] leading-[1.3]">
          박주헌입니다.
        </span>
      </h1>
      {/* 하단 캐릭터 */}{" "}
      <div className="group absolute bottom-0 left-1/2 w-[45vw] min-w-[550px] -translate-x-1/2">
        {" "}
        <Image
          src="/img/character.gif"
          alt="메인 캐릭터"
          width={1000}
          height={900}
          className="w-full transition-opacity duration-150 group-hover:opacity-0"
        />{" "}
        <Image
          src="/img/character-2.gif"
          alt="메인 캐릭터"
          width={1000}
          height={900}
          className="absolute inset-0 w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        />{" "}
      </div>
    </section>
  );
}
