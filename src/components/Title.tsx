interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="text-3xl md:text-4xl font-bold text-gray-900 pb-12">
      {title}
    </div>
  );
}
