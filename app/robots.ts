import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const BLOCKED_PATHS = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Everyone else, including Googlebot and Bingbot
        userAgent: "*",
        allow: "/",
        disallow: BLOCKED_PATHS,
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
        ],
        allow: "/",
        disallow: BLOCKED_PATHS,
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
        ],
        allow: "/",
        disallow: BLOCKED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}