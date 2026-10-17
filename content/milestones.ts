import authorsData from '@/DB/authors.json';
import milestonesData from '@/DB/milestones.json';
import newsArticlesData from '@/DB/news-articles.json';
import publishersData from '@/DB/publishers.json';

export const milestoneCategoryLabels = {
  'global-trends': 'מגמות בעולם',
  'negative-effects': 'השפעות שליליות',
  'severe-cases': 'דוגמאות למקרים קשים',
  'company-activity': 'פעילות החברות בתחום',
  'success-stories': 'סיפורי הצלחה',
  'knowledge-base': 'מאגר מידע מרכזי גדול',
  'local-trends': 'המגמה בארץ',
} as const;

export type MilestoneCategory = keyof typeof milestoneCategoryLabels;

export interface RelatedArticle {
  publication: string;
  /** Outlet icon under /public, when we have one. */
  publicationIcon?: string;
  headline: string;
  author?: string;
  /** One line on what the piece covers. */
  description?: string;
  /** ISO date. */
  date: string;
  url: string;
}

export interface Milestone {
  /** URL segment of the dedicated page: /milestones/[slug]. */
  slug: string;
  title: string;
  /** Who issued the document (name, resolved from `DB/authors.json`). */
  author: string;
  /** Icon of the author, when we have one. */
  authorIcon?: string;
  /** A few words describing the entry. */
  description: string;
  /** ISO date of the document, when known. */
  date: string;
  /** A record may belong to more than one category. */
  categories: MilestoneCategory[];
  url: string;
  /** Local copy under /public, in case the original link breaks. */
  copyUrl?: string;
  /** News coverage of this milestone. */
  articles?: RelatedArticle[];
  /** Warning shown at the top of the dedicated page, below the date. */
  notice?: string;
  /** Short summary written from reading the document itself. */
  summary?: string[];
}

export const milestonesPage = {
  title: 'אבני דרך בהגנה על ילדינו',
  intro:
    'מקבץ של מסמכים, החלטות ומהלכים שמסמנים את הדרך שעשינו - בישראל ובעולם - בהגנה על ילדים מפני הנזקים של שימוש מוקדם וחסר פיקוח בסמארטפונים.',
};

function isMilestoneCategory(value: string): value is MilestoneCategory {
  return value in milestoneCategoryLabels;
}

function isKeyOf<T extends object>(obj: T, key: string): key is Extract<keyof T, string> {
  return key in obj;
}

/** Looks up a news article by slug and joins its publisher and author names; an unknown slug fails loudly. */
function toRelatedArticle(milestoneSlug: string, articleSlug: string): RelatedArticle {
  if (!isKeyOf(newsArticlesData, articleSlug)) {
    throw new Error(`Unknown article "${articleSlug}" in milestone "${milestoneSlug}"`);
  }
  const { publisher: publisherSlug, ...article } = newsArticlesData[articleSlug];
  if (!isKeyOf(publishersData, publisherSlug)) {
    throw new Error(`Unknown publisher "${publisherSlug}" in article "${articleSlug}"`);
  }
  const publisher = publishersData[publisherSlug];
  const publication = publisher.name;
  const publicationIcon = 'icon' in publisher ? publisher.icon : undefined;
  if (!('author' in article)) {
    return { ...article, publication, publicationIcon };
  }
  const { author, ...rest } = article;
  if (!isKeyOf(authorsData, author)) {
    throw new Error(`Unknown author "${author}" in article "${articleSlug}"`);
  }
  return { ...rest, publication, publicationIcon, author: authorsData[author].name };
}

/** Validates a raw JSON record, so a typo in a category or article slug fails loudly. */
function toMilestone([slug, raw]: [string, (typeof milestonesData)[keyof typeof milestonesData]]): Milestone {
  const categories = raw.categories.filter(isMilestoneCategory);
  if (categories.length !== raw.categories.length) {
    throw new Error(`Unknown category in milestone "${slug}"`);
  }
  if (!isKeyOf(authorsData, raw.author)) {
    throw new Error(`Unknown author "${raw.author}" in milestone "${slug}"`);
  }
  const articles = 'articles' in raw ? raw.articles.map((articleSlug) => toRelatedArticle(slug, articleSlug)) : undefined;
  const author = authorsData[raw.author];
  const authorIcon = 'icon' in author ? author.icon : undefined;
  return { ...raw, author: author.name, authorIcon, slug, categories, articles };
}

/** Records live in `DB/milestones.json`, keyed by slug; add an entry there and it shows up. Newest first. */
export const milestones = Object.entries(milestonesData)
  .map(toMilestone)
  .toSorted((a, b) => b.date.localeCompare(a.date));

export function getMilestoneBySlug(slug: string) {
  return milestones.find((m) => m.slug === slug);
}
