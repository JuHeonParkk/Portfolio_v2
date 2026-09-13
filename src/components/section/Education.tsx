import Title from "@/components/Title";
import TimelineItem from "@/components/TimelineItem";

export default function Education() {
  return (
    <section>
      <Title title="Education" />

      <div className="-mt-6">
        <TimelineItem
          date="2020.03.02 - 2025.08.26"
          title="전남대학교 전자상거래전공 | 소프트웨어공학과 복수전공"
          description="졸업"
        />
        <TimelineItem
          date="2025.12.30 - 2026.06.26"
          title="프론트엔드 엔지니어 부트캠프 - 코드잇"
          description="수료"
        />
      </div>
    </section>
  );
}
