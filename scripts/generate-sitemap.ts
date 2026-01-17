import { articles } from "../content/articles";
import { stories } from "../content/stories";
import { writeFileSync } from "fs";
import { join } from "path";

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
];

function generateSitemap(): string {
  const staticEntries = staticPages
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1" : "0.8"}</priority>
  </url>`
    )
    .join("\n");

  const articleEntries = articles
    .map(
      (article) => `  <url>
    <loc>${baseUrl}/articles/${article.category}/${article.slug}</loc>
    <lastmod>${article.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("\n");

  const storyEntries = stories
    .map(
      (story) => `  <url>
    <loc>${baseUrl}/stories/${story.slug}</loc>
    <lastmod>${story.publishedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${articleEntries}
${storyEntries}
</urlset>`;
}

const sitemap = generateSitemap();
const outputPath = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(outputPath, sitemap);
console.log("Sitemap generated at public/sitemap.xml");