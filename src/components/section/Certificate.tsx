import Title from "@/components/Title";
import TimelineItem from "../TimelineItem";

export default function Certificate() {
  return (
    <section>
      <Title title="Certificate" />

      <div className="-mt-6">
        <TimelineItem
          date="2025.11.25"
          title="컴퓨터활용능력 1급"
          description="대한상공회의소"
        />
        <TimelineItem
          date="2024.09.10"
          title="정보처리기사"
          description="한국산업인력공단"
        />
        <TimelineItem
          date="2023.12.13"
          title="웹디자인기능사"
          description="한국산업인력공단"
        />
        <TimelineItem
          date="2023.09.15"
          title="GTQ 1급"
          description="한국생산성본부"
        />
      </div>
    </section>
  );
}
