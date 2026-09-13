import Image from "next/image";
import { projects } from "@/lib/projects";
import { SkillList } from "@/lib/skills";

import ProjectLink from "@/components/project/ProjectLink";
import DocumentSection from "@/components/project/DocumentSection";
import BulletList from "@/components/project/BulletList";
import BackButton from "@/components/BackButton";
import TroubleShutting from "@/components/project/TroubleShutting";
import { SkillBadge } from "@/components/SkillBadge";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const selectedProject = projects.find((project) => project.slug === slug);

  if (!selectedProject) {
    return <div>프로젝트가 없습니다.</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="relative h-52 w-full overflow-hidden bg-gray-100 sm:h-72 lg:h-80">
          <Image
            src={selectedProject.thumbnail}
            alt={`${selectedProject.title} 프로젝트`}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <main className="mx-auto w-full max-w-[820px] px-5 pb-32 sm:px-8">
          <header className="-mt-7 mb-16 sm:-mt-10">
            <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-2xl bg-white">
              <Image
                src={selectedProject.favicon}
                alt={`${selectedProject.title} 아이콘`}
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-md bg-gray-900 text-white px-2.5 py-1 font-mono text-xs font-medium">
                {selectedProject.period}
              </span>

              <ProjectLink
                title={selectedProject.title}
                github={selectedProject.github}
                deploy={selectedProject.deploy}
              />
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              {selectedProject.title}
            </h1>

            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              {selectedProject.description}
            </p>

            <dl className="mt-8 grid gap-3 border-y border-gray-200 py-5 text-sm sm:grid-cols-2">
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 text-gray-400">개발 인원</dt>
                <dd className="font-medium text-gray-700">
                  {selectedProject.memberCount}
                </dd>
              </div>

              <div className="flex gap-4">
                <dt className="w-20 shrink-0 text-gray-400">담당 역할</dt>
                <dd className="font-medium text-gray-700">
                  {selectedProject.role.join(" / ")}
                </dd>
              </div>
            </dl>
          </header>

          {selectedProject.overview && (
            <DocumentSection title="📝 개요">
              {selectedProject.overview.map((item) => (
                <p
                  key={item}
                  className="text-base leading-8 text-gray-600 mb-5"
                >
                  {item}
                </p>
              ))}
            </DocumentSection>
          )}

          <DocumentSection title="🛠️ 사용 기술">
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech) => {
                const skillInfo = SkillList.find(
                  (skill) => skill.name === tech,
                );

                if (!skillInfo) return null;

                return (
                  <div
                    key={tech}
                    className="skill-badge"
                    title={skillInfo.description}
                  >
                    <SkillBadge {...skillInfo} />
                  </div>
                );
              })}
            </div>
          </DocumentSection>

          {!!selectedProject.detailRole?.length && (
            <DocumentSection title="👩‍💻 수행한 상세 역할">
              <div className="space-y-18">
                {selectedProject.detailRole.map((detail, index) => (
                  <article key={`${detail.role}-${index}`}>
                    <h3 className="flex items-center gap-3 text-xl font-semibold ">
                      {detail.role}
                    </h3>

                    {detail.img && (
                      <figure className="relative my-6 h-[360px] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                        <Image
                          src={detail.img}
                          alt={detail.role}
                          fill
                          className="object-contain"
                        />
                      </figure>
                    )}

                    <BulletList items={detail.description} />
                  </article>
                ))}
              </div>
            </DocumentSection>
          )}

          <TroubleShutting selectedProject={selectedProject} />

          {!!selectedProject.learn.length && (
            <DocumentSection title="프로젝트를 통해 배운 점">
              <BulletList items={selectedProject.learn} />
            </DocumentSection>
          )}

          {!!selectedProject.try.length && (
            <DocumentSection title="아쉬웠던 점 및 개선 방향">
              <BulletList items={selectedProject.try} />
            </DocumentSection>
          )}
        </main>
      </div>

      <BackButton />
    </>
  );
}
