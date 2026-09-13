// components/sections/SkillSection.tsx
"use client";
import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkillList, SkillCategory } from "@/lib/skills";
import { SkillBadge } from "../SkillBadge";
import Title from "../Title";

// gsap.registerPlugin(ScrollTrigger);

const categories: SkillCategory[] = [
  "Frontend",
  "Styling",
  "Libraries",
  "Design",
  "Tools",
];

export default function Skill() {
  const containerRef = useRef<HTMLDivElement>(null);

  //   useGSAP(
  //     () => {
  //       gsap.from(".skill-icon", {
  //         opacity: 0,
  //         scale: 0.8,
  //         duration: 0.3,
  //         stagger: 0.02,
  //         scrollTrigger: { trigger: containerRef.current, start: "top 85%" },
  //       });
  //     },
  //     { scope: containerRef },
  //   );

  return (
    <section>
      <Title title="Skills" />
      <div ref={containerRef} className="space-y-5">
        {categories.map((category) => {
          const items = SkillList.filter((s) => s.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="skill-badge"
                    title={item.description}
                  >
                    <SkillBadge {...item} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
