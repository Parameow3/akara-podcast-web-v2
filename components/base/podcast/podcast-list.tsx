"use client";

import { Podcast } from "@/app/api/interface";
import { PodcastCard } from "./podcast-card";

interface Props {
  labelTitle?: string;
  data: Podcast[];
}

export const PodcastList: React.FC<Props> = ({ labelTitle, data }) => {
  if (!data?.length) {
    return <div className={"mt-4 text-neutral-400"}>No podcasts available</div>;
  }

  return (
    <div>
      <div className={"flex justify-between items-center"}>
        <h1 className={"text-white text-2xl font-semibold"}>{labelTitle}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
        {data.map((podcast) => (
          <PodcastCard key={podcast.id} data={podcast} onClick={() => null} />
        ))}
      </div>
    </div>
  );
};
