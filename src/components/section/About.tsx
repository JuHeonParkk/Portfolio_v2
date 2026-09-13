import Image from "next/image";
import Title from "../Title";
import Skill from "./Skill";
import Education from "./Education";
import Certificate from "./Certificate";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen mx-auto py-20 md:py-40 px-8 md:px-30"
    >
      <Title title="About Me" />

      <div className="w-full flex flex-col justify-around lg:flex-row gap-4">
        <div className="w-full h-auto mx-auto lg:mx-0 md:w-3/5 max-w-98">
          <Image
            src="/img/character-about.png"
            alt="메인 캐릭터"
            width={380}
            height={380}
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 w-full min-w-0 max-w-230 md:flex-1">
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
              박주헌
            </span>
            <span className="text-base text-gray-600">Frontend Developer</span>
          </div>

          <div className="text-base lg:text-xl flex flex-col gap-8 lg:gap-12 leading-7 lg:leading-8">
            <div>
              <p className="mb-2">
                안녕하세요!{" "}
                <strong>
                  사용자 경험과 유지보수성을 함께 고민하며 더 나은 구조를
                  만들어가는 프론트엔드 개발자 박주헌입니다.
                </strong>
              </p>
              Next.js와 TypeScript 기반의 실무형 프로젝트를 수행하며 Lighthouse
              접근성 점수 82점 → 98점 개선, LCP 3.38초 → 1.37초 단축 등 웹
              성능과 사용자 경험을 직접 최적화했습니다. 또한 반복되는 UI와
              로직을 공통 컴포넌트로 추상화하여 서비스의 안정성과 재사용성을
              향상시켰습니다.
            </div>
            <div>
              <p className="mb-2">
                <strong>
                  새로운 기술을 실무에 빠르게 적용하며 팀의 성장을 도모합니다.
                </strong>
              </p>
              설계 의도와 문제 해결 과정을 투명하게 공유할 때 더 좋은 제품이
              만들어진다고 생각합니다. PR을 활용해 의도와 해결 과정을 명확히
              기록하며 협업하고, 최근에는 AI 및 GSAP 등 신기술을 빠르게 학습해
              개인 프로젝트와{" "}
              <a
                href="https://velog.io/@pjh01913/posts"
                target="_blank"
                className=" group"
              >
                <span className="underline">Velog</span>
                <span className="inline-block transform duration-200 group-hover:-translate-y-1">
                  ↗
                </span>{" "}
              </a>
              에 적극적으로 기록·공유하고 있습니다. 프로젝트 중 발생하는 예외
              상황과 제약 조건을 극복하며 팀과 서비스의 성장을 지속적으로
              도모합니다.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 md:py-30 px-0 lg:px-20 flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-6">
        <div className="w-full md:mx-0 md:min-w-105">
          <Skill />
        </div>

        <div className="flex flex-col justify-between items-start gap-12 lg:gap-16 w-full mt-12 lg:mt-0">
          <Education />
          <Certificate />
        </div>
      </div>
    </section>
  );
}
