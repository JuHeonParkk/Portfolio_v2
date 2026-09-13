import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Link
        href="https://drive.google.com/file/d/1gR1vA5s5Dv8o4yvWEQ0kP1VIdlfKpZPF/view"
        target="_blank"
        className="group flex flex-col items-center"
      >
        <div className="relative h-12 w-12 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/icons/docs_icon.svg"
            alt="문서 아이콘"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>

        <span className="mt-2.5 flex items-center gap-1 bg-gray-100 shadow-sm rounded-md px-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-base">
          PDF로 보기
        </span>
      </Link>
    </div>
  );
}
