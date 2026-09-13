"use client";
import { useState, useRef } from "react";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import { projects } from "@/lib/projects";

const INITIAL_COUNT = 6;

export default function Project() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const gridRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + INITIAL_COUNT);
  };

  return (
    <section
      id="project"
      className="w-full min-h-screen mx-auto py-16 md:py-20 px-8 md:px-30"
    >
      <Title title="Project" />

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
      >
        {projects
          .slice(0, visibleCount)
          .reverse()
          .map((project) => (
            <div key={project.slug} className="project-card">
              <ProjectCard project={project} />
            </div>
          ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-10">
          <button
            onClick={handleShowMore}
            className="rounded-full border px-8 py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            더보기 ({projects.length - visibleCount})
          </button>
        </div>
      )}
    </section>
  );
}
