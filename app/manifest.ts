import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HighFive - Digital Transformation & AI Solutions",
    short_name: "HighFive",
    description:
      "Leading tech company providing web development, mobile apps, AI solutions, and social media content.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5b5bd6",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
