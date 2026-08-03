export type ArticleCategory =
  | 'legislation'
  | 'field-stories'
  | 'translated'
  | 'internet-safety'
  | 'misc';

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  author: string;
  /** ISO date. */
  publishedAt: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
}

/** Category badges as the original labelled them on /articles. */
export const categoryLabels: Record<ArticleCategory, string> = {
  legislation: 'חקיקה',
  'field-stories': 'סיפורים מהשטח',
  translated: 'מתורגמים',
  'internet-safety': 'בטיחות ברשת',
  misc: 'שונות',
};

/**
 * EMPTY ON PURPOSE.
 *
 * The archived /articles index linked to three article pages the crawl never
 * captured, so no body text for them exists anywhere:
 *
 *   רובי ריבלין לא עומד מהצד       internet-safety/lo-omdim             16/02/2020
 *   חינוך בעידן הסחות הדעת          translated/חינוך-בעידן-הסחות-הדעת     18/01/2020
 *   כך תפתחו את החוזקות של ילדיכם   more/developing-childrens-strengths  17/12/2019
 *
 * This file previously held three *invented* articles with made-up bodies
 * attributed to real people (משרד החינוך, פרופ' יאיר עמיחי-המבורגר). They were
 * removed rather than published. Add the real ones here — from the live site or
 * the client — and restore the article detail route. See todo.md.
 */
export const articles: Article[] = [];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getRecentArticles(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
