import { PodcastList } from "@/components/base/podcast/podcast-list";
import { getAllPodcast } from "../api";
import { Header } from "@/components/base/container/Header";
import { RecentPlayList } from "@/components/base/recent-play/recent-play-list";

export const revalidate = 0;
export default async function HomePage() {
  const data = await getAllPodcast();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden space-y-4 overflow-y-auto">
      <Header>
        <div>
          <h1 className={"text-3xl font-semibold text-white"}>Welcome back</h1>
          <RecentPlayList data={data.data} />
        </div>
      </Header>

      <div className={"mb-7 px-6"}>
        <PodcastList labelTitle="Newest podcasts" data={data.data} />
      </div>
    </div>
  );
}
