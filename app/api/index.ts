"use server";

import { PodcastResponses } from "./interface";

export async function getAllPodcast(): Promise<PodcastResponses> {
  return new Promise<PodcastResponses>((resolve) => {
    resolve({
      success: true,
      status: "OK",
      message: "Request fulfilled",
      data: [
        {
          id: "1",
          title: "The History Rewind",
          artist: "Toma Viton",
          description: "Join us as we take a deep dive into pivotal moments",
          genre: "History",
          duration: "45 minutes",
          thumbnail:
            "https://res.cloudinary.com/dy6agtxbi/image/upload/v1718033853/p3_kqjsvt.jpg",
          sound: "",
        },
        {
          id: "2",
          title: "The Mindful Minute",
          artist: "Seylina",
          description: " In the midst of our fast-paced lives",
          genre: "Self-Improvement",
          duration: "15 minutes",
          thumbnail:
            "https://res.cloudinary.com/dy6agtxbi/image/upload/v1718033852/p2_senmfj.webp",
          sound: "",
        },
        {
          id: "3",
          title: "Wanderlust Wonders",
          artist: "Luniko sivla",
          description: "Immerse yourself in the sights, sounds",
          genre: "Travel",
          duration: "30 minutes",
          thumbnail:
            "https://res.cloudinary.com/dy6agtxbi/image/upload/v1718033852/p1_ssnkui.webp",
          sound: "",
        },
      ],
    });
  });
}
