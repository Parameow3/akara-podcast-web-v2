"use client";

import Image from "next/image";
import { IoIosPerson as IconArtist } from "react-icons/io";
import { FaRegClock as IconDuration } from "react-icons/fa";
import { IoMdPricetag as IconCategory } from "react-icons/io";
import { Podcast } from "@/app/api/interface";
import { PlayButton } from "@/components/ui/PlayButton";

interface Props {
  data: Podcast;
  onClick: (id: string) => void;
}

export const PodcastCard: React.FC<Props> = ({ data, onClick }) => {
  const { id, title, artist, duration, genre, thumbnail } = data;

  return (
    <div className="relative group hover:-translate-y-0.5 flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 p-3 duration-300 transition-all">
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          fill
          className="object-cover"
          alt={title}
          src={thumbnail || "https://picsum.photos/200"}
        />
        <div className="absolute top-2 left-2 text-xs bg-green-700 px-1.5 py-1 rounded-lg drop-shadow-md">
          1 day ago
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 size-full bg-gradient-to-t from-black from-15% to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={() => onClick(id)}
        >
          <PlayButton />
        </div>
      </div>

      <div className="flex flex-col items-start w-full space-y-1 px-1 py-2.5">
        <h4 className="font-semibold line-clamp-1 w-full pb-1">{title}</h4>

        <div className="flex space-x-1 text-gray-400 items-center">
          <span className="flex-shrink-0">
            <IconArtist />
          </span>
          <span className="line-clamp-1 text-sm">{artist}</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-400">
          <span>
            <IconCategory />
          </span>
          <span className="line-clamp-1">{genre}</span>
        </div>

        <div className="flex !mt-4 text-gray-300 space-x-2 items-center text-sm">
          <span>
            <IconDuration />
          </span>
          <span> {duration}</span>
        </div>
      </div>
    </div>
  );
};
