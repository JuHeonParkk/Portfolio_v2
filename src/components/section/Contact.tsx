"use client";

import { useRef } from "react";
import { SiGithub, SiVelog } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "GitHub", href: "https://github.com/JuHeonParkk", icon: SiGithub },
  {
    label: "Velog",
    href: "https://velog.io/@pjh01913/posts",
    icon: SiVelog,
  },
  { label: "Email", href: "mailto:pjh01913@gmail.com", icon: MdEmail },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });

      tl.from(".contact-heading .small-details", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".contact-heading .big-impact",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".contact-link",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="mx-auto w-full px-0 py-32 md:px-30 md:py-40"
    >
      <div
        className="relative mb-10 w-full"
        style={{
          height: "2px",
          backgroundImage:
            "repeating-linear-gradient(to right, #000 0 20px, transparent 20px 40px)",
        }}
      />

      <div className="flex flex-col items-center">
        <h2 className="contact-heading flex items-center gap-3 font-serif text-4xl leading-tight text-neutral-900 lg:text-5xl">
          <span className="small-details">Small details,</span>
          <em className="big-impact inline text-5xl italic">big impact</em>
        </h2>

        <div className="mt-14 flex flex-wrap">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="contact-link group flex flex-col items-center justify-center text-neutral-600 transition-colors hover:text-gray-900"
              >
                <div className="relative">
                  <Icon size={32} />
                </div>

                <span className="mt-2.5 flex items-center gap-1 rounded-md bg-gray-100 px-3 text-base opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        <p className="text-sm text-gray-400">
          © 2026 ParkJuHeon. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
