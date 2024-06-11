"use client";

import { Podcast } from "@/app/api/interface";
import { RecentPlayItem } from "./recent-play-item";

interface Props {
  data: Podcast[];
}

export const RecentPlayList: React.FC<Props> = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
    {data.map((p) => (
      <RecentPlayItem
        key={p.id}
        title={p.title}
        src={p.thumbnail}
        onClick={() => null}
      />
    ))}
  </div>
);
