import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { create } from 'xmlbuilder2';
import { articles } from '../content/articles';
import { stories } from '../content/stories';
import { getSiteUrl } from '../lib/site-url';

const baseUrl = getSiteUrl();

const staticPages = [
  '',
  '/media',
  '/articles',
  '/stories',
  '/share-your-story',
  '/me-and-my-phone',
  '/the-team',
  '/legal',
];

function generateSitemap(): string {
  const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  });

  for (const route of staticPages) {
    root
      .ele('url')
      .ele('loc')
      .txt(`${baseUrl}${route}`)
      .up()
      .ele('changefreq')
      .txt('weekly')
      .up()
      .ele('priority')
      .txt(route === '' ? '1' : '0.8')
      .up();
  }

  for (const article of articles) {
    root
      .ele('url')
      .ele('loc')
      .txt(`${baseUrl}/articles/${article.category}/${article.slug}`)
      .up()
      .ele('lastmod')
      .txt(article.publishedAt)
      .up()
      .ele('changefreq')
      .txt('monthly')
      .up()
      .ele('priority')
      .txt('0.6')
      .up();
  }

  for (const story of stories) {
    root
      .ele('url')
      .ele('loc')
      .txt(`${baseUrl}/stories/${story.slug}`)
      .up()
      .ele('lastmod')
      .txt(story.publishedAt)
      .up()
      .ele('changefreq')
      .txt('monthly')
      .up()
      .ele('priority')
      .txt('0.6')
      .up();
  }

  return root.end({ prettyPrint: true });
}

const sitemap = generateSitemap();
const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemap);
