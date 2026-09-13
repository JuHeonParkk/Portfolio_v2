"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    let raf = 0;

    const update = () => {
      const viewportCenter = window.innerHeight / 2;

      setVisible(sections[0].getBoundingClientRect().top <= viewportCenter);

      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= viewportCenter) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick =
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <nav
      aria-label="섹션 목차"
      className={`fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col gap-2 items-end md:flex transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleClick(item.id)}
            className="group flex items-center gap-3 py-1.5"
          >
            <span
              className={`hidden text-sm whitespace-nowrap transition-all duration-300 lg:inline-block ${
                isActive
                  ? "translate-x-0 font-medium text-neutral-900 opacity-100"
                  : "-translate-x-1 text-neutral-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full border transition-all duration-300 ${
                isActive
                  ? "scale-125 border-neutral-900 bg-neutral-900"
                  : "border-neutral-400 bg-transparent group-hover:border-neutral-600"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
