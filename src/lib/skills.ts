// lib/skills.ts
import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactquery,
  SiReacthookform,
  SiZod,
  SiAxios,
  SiGreensock,
  SiFigma,
  SiGit,
  SiGithub,
  SiNotion,
  SiLinear,
  SiVercel,
} from "react-icons/si";

import { DiPhotoshop, DiIllustrator } from "react-icons/di";

export type SkillCategory =
  | "Frontend"
  | "Styling"
  | "Libraries"
  | "Design"
  | "Tools";

export interface SkillItem {
  name: string;
  description: string;
  category: SkillCategory;
  icon: IconType;
  color: string; // 배경 브랜드 컬러 (# 포함)
  logoColor?: "white" | "black"; // 기본값 white
}

export const SkillList: SkillItem[] = [
  {
    name: "HTML5",
    description: "웹 표준 및 시멘틱 마크업 준수",
    category: "Frontend",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    description: "반응형 UI 및 레이아웃 구현",
    category: "Frontend",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    description: "ES6+ 문법 및 DOM 제어",
    category: "Frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
    logoColor: "black",
  },
  {
    name: "TypeScript",
    description: "타입 정의 및 props 타입 관리",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "React",
    description: "컴포넌트 설계 및 상태 관리",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    logoColor: "black",
  },
  {
    name: "Next.js",
    description: "App Router 기반의 SSR 구조 이해 및 최적화 구현",
    category: "Frontend",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "TailwindCSS",
    description: "유틸리티 클래스 기반 스타일링",
    category: "Styling",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Styled Components",
    description: "컴포넌트 단위 스타일링 경험",
    category: "Styling",
    icon: SiStyledcomponents,
    color: "#DB7093",
  },
  {
    name: "TanStack Query",
    description: "서버 상태 캐싱 및 동기화",
    category: "Libraries",
    icon: SiReactquery,
    color: "#FF4154",
  },
  {
    name: "React Hook Form",
    description: "폼 상태 및 유효성 검증 관리 적용",
    category: "Libraries",
    icon: SiReacthookform,
    color: "#EC5990",
  },
  {
    name: "Zod",
    description: "런타임 스키마 검증 및 타입 추론",
    category: "Libraries",
    icon: SiZod,
    color: "#3E67B1",
  },
  {
    name: "Axios",
    description: "API 요청 및 인터셉터 구성",
    category: "Libraries",
    icon: SiAxios,
    color: "#5A29E4",
  },
  {
    name: "GSAP",
    description: "Timeline 기반 애니메이션 구현",
    category: "Libraries",
    icon: SiGreensock,
    color: "#88CE02",
    logoColor: "black",
  },
  {
    name: "Figma",
    description: "UI 시안 분석 및 디자인 작업",
    category: "Design",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Photoshop",
    description: "이미지 편집 및 리소스 제작",
    category: "Design",
    icon: DiPhotoshop,
    color: "#31A8FF",
  },
  {
    name: "Illustrator",
    description: "웹 벡터 아이콘 및 로고 제작",
    category: "Design",
    icon: DiIllustrator,
    color: "#FF9A00",
  },
  {
    name: "Git",
    description: "브랜치 관리 및 버전 관리",
    category: "Tools",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    description: "PR 기반 협업 및 코드 리뷰",
    category: "Tools",
    icon: SiGithub,
    color: "#181717",
  },
  {
    name: "Notion",
    description: "문서화 및 프로젝트 기록 관리",
    category: "Tools",
    icon: SiNotion,
    color: "#000000",
  },
  {
    name: "Linear",
    description: "이슈 관리 및 스프린트 태스크 관리",
    category: "Tools",
    icon: SiLinear,
    color: "#5E6AD2",
  },
  {
    name: "Vercel",
    description: "프로젝트 배포 및 환경 설정",
    category: "Tools",
    icon: SiVercel,
    color: "#000000",
  },
];
