import Link from "next/link";
import Image from "next/image";
import { ProjectProps } from "@/lib/projects";
import { SkillList } from "@/lib/skills";

export default function ProjectCard({ project }: { project: ProjectProps }) {
  // techStack 이름으로 skills.ts에서 아이콘 정보 매칭
  const techIcons = project.techStack
    .map((name) => SkillList.find((s) => s.name === name))
    .filter(Boolean);

  return (
    <Link
      href={`/project/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-3 transition-shadow hover:shadow-md"
    >
      {/* 썸네일 */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-1 flex-col px-1 pt-4 pb-2">
        <div className="mb-1.5 flex items-baseline justify-between gap-2">
          <h3 className="min-w-0 truncate text-xl font-bold text-neutral-900">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-neutral-400">
            {project.period}
          </span>
        </div>

        <p className="mb-3 line-clamp-2 min-h-10 text-base text-neutral-600">
          {project.description}
        </p>

        {/* 기술스택 아이콘 */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {techIcons.map((skill) => {
            if (!skill) return null;
            const Icon = skill.icon;
            return (
              <span
                key={skill.name}
                title={skill.name}
                className="flex h-6 w-6 items-center justify-center rounded-md"
                style={{ backgroundColor: skill.color }}
              >
                <Icon
                  size={14}
                  color={skill.logoColor === "black" ? "#000" : "#fff"}
                />
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
