type STATUS = "OK" | "ERROR" | "NON EXIST";

interface Response<T> {
  success: boolean;
  status: STATUS;
  message: string;
  data: T;
}

export interface Podcast {
  id: string;
  title: string;
  artist: string;
  description: string;
  genre: string;
  duration: string;
  thumbnail: string;
  sound: string;
}

export type PodcastResponses = Response<Array<Podcast>>;
