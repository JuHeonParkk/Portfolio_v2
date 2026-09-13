interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export default function TimelineItem({
  date,
  title,
  description,
}: TimelineItem) {
  return (
    <p className="text-base md:text-lg text-gray-700 pb-2.5">
      <span>{date}</span>
      {"  "}
      <span>{title}</span>
      {"  "}
      <span>{description}</span>
    </p>
  );
}
