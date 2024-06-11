"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface Props {
  title: string;
  src: string;
  onClick: () => void;
}

export const RecentPlayItem: React.FC<Props> = ({ src, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group flex hover:-translate-y-1 items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={src} alt={title} />
      </div>
      <p className={"font-medium truncate py-5"}>{title}</p>

      <div className="absolute transition-all duration-300 opacity-100 rounded-full flex items-center justify-center bg-green-500 p-3.5 drop-shadow-md right-3 hover:scale-110">
        <FaPlay className={"text-black"} />
      </div>
    </button>
  );
};
