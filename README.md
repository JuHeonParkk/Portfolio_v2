# 박주헌 포트폴리오

Next.js(App Router) 기반의 개인 포트폴리오 웹사이트입니다. Hero, About, Project, Contact 섹션으로 구성된 원페이지 구조이며, 각 프로젝트는 `/project/[slug]` 상세 페이지에서 진행 배경·역할·트러블슈팅을 확인할 수 있습니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS v4 (`@theme inline` 기반 디자인 토큰)
- **Animation**: GSAP + `@gsap/react` (ScrollTrigger)
- **Font**: Pretendard (`next/font/local`), Geist Mono (`next/font/google`)
- **Icons**: react-icons

## 주요 기능

- **Hero**: GSAP ScrollTrigger로 소개 문구가 스크롤에 따라 전환되는 pin 애니메이션
- **About**: 자기소개, Skills, Education, Certificate — 반응형 레이아웃
- **Project**: `src/lib/projects.ts`의 데이터를 그리드로 렌더링, 카드 높이 통일(`auto-rows-fr`), 더보기 페이지네이션
- **Project 상세 페이지**: 프로젝트별 역할, 트러블슈팅, 배운 점을 `/project/[slug]`에서 확인
- **Contact**: GitHub / Velog / Email 아이콘 링크
- **SectionNav**: About/Project/Contact를 가리키는 노션 스타일 dot 목차 (스크롤에 따라 활성 섹션 표시, 태블릿 이상에서 노출)
- **Loader**: 최초 로딩 시 전체 화면 로딩 스피너

## 폴더 구조

```
src/
├─ app/
│  ├─ layout.tsx          # 루트 레이아웃, 폰트/로더 설정
│  ├─ page.tsx             # 메인 페이지 (Hero/About/Project/Contact)
│  ├─ globals.css          # Tailwind 테마 및 디자인 토큰
│  └─ project/[slug]/      # 프로젝트 상세 페이지
├─ components/
│  ├─ section/             # 페이지를 구성하는 섹션 컴포넌트
│  ├─ project/              # 프로젝트 상세 페이지 전용 컴포넌트
│  └─ ...                  # Header, SectionNav, Loader 등 공용 컴포넌트
└─ lib/
   ├─ projects.ts           # 프로젝트 데이터
   └─ skills.ts              # 기술 스택 데이터
```

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드된 앱 실행 |
| `npm run lint` | ESLint 검사 |
