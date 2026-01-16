import type { MetadataRoute } from "next";
import { articles, stories } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tnuligdol.co.il";

  const staticPages = [
    "",
    "/media",
    "/articles",
    "/stories",
    "/share-your-story",
    "/me-and-my-phone",
    "/the-team",
    "/legal",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.category}/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const storyPages = stories.map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: new Date(story.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...storyPages];
}
