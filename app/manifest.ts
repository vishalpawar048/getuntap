import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Untap — Screen Time Control App",
    short_name: "Untap",
    description:
      "Untap is a screen time control app for iPhone and Android that helps you stop doomscrolling, break phone addiction, and reclaim hours of your day with intentional friction.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0eb",
    theme_color: "#f8711b",
    orientation: "portrait",
    categories: ["productivity", "lifestyle", "health", "utilities"],
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
