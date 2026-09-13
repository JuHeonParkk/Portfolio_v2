import Image from "next/image";
import { SiGithub } from "react-icons/si";

interface ProjectLinksProps {
  title: string;
  github?: string;
  deploy?: string;
}

export default function ProjectLinks({
  title,
  github,
  deploy,
}: ProjectLinksProps) {
  return (
    <div className="flex items-center gap-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} GitHub 바로가기`}
          className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <SiGithub />
          GitHub
        </a>
      )}

      {deploy && (
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} 서비스 바로가기`}
          className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <Image src="/globe.svg" alt="" width={10} height={10} />
          Live
        </a>
      )}
    </div>
  );
}
