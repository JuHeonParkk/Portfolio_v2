import DocumentSection from "./DocumentSection";
import BulletList from "./BulletList";
import { FiLink } from "react-icons/fi";
import { ProjectProps } from "@/lib/projects";

interface TroubleShuttingProps {
  selectedProject: ProjectProps;
}

export default function TroubleShutting({
  selectedProject,
}: TroubleShuttingProps) {
  return (
    <div>
      {!!selectedProject.troubleShooting?.length && (
        <DocumentSection title="🚀 트러블 슈팅">
          <div className="space-y-18">
            {selectedProject.troubleShooting.map((trouble, index) => (
              <article key={`${trouble.title}-${index}`}>
                <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-white bg-gray-900 w-38 pl-2.5">
                  Troubleshooting {index + 1}
                </p>

                <div className="w-full flex items-start justify-between">
                  <h3 className="mb-7 text-2xl font-bold tracking-tight text-gray-950">
                    {trouble.title}
                  </h3>

                  {trouble.prLink && (
                    <a
                      href={trouble.prLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${trouble.title} PR 바로가기`}
                      className="flex items-center gap-1 border border-gray-300 rounded-md px-2.5 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                      <FiLink className="h-4 w-4" />
                      Pull Requests
                    </a>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-1.5 text-base md:text-lg font-semibold text-gray-900">
                      문제
                    </h4>
                    <p className="text-base leading-7 text-gray-800">
                      {trouble.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-1.5 text-base md:text-lg font-semibold text-gray-900">
                      해결
                    </h4>
                    <p className="text-base leading-7 text-gray-800">
                      {trouble.solution}
                    </p>
                    {!!trouble.solutionMore?.length && (
                      <BulletList items={trouble.solutionMore} />
                    )}
                  </div>

                  <div>
                    <h4 className="mb-1.5 text-base md:text-lg font-semibold text-gray-900">
                      결과
                    </h4>
                    <p className="text-base leading-7 text-gray-800">
                      {trouble.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </DocumentSection>
      )}
    </div>
  );
}
