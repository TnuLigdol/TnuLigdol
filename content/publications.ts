import authorsData from '@/DB/authors.json';
import publicationsData from '@/DB/publications.json';
import publishersData from '@/DB/publishers.json';

export interface Publication {
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

function isKeyOf<T extends object>(obj: T, key: string): key is Extract<keyof T, string> {
  return key in obj;
}

/** Joins a raw `DB/publications.json` record with its publisher and author names; an unknown slug fails loudly. */
function toArticle(articleSlug: string): Publication {
  if (!isKeyOf(publicationsData, articleSlug)) {
    throw new Error(`Unknown article "${articleSlug}"`);
  }
  const { publisher: publisherSlug, ...article } = publicationsData[articleSlug];
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

/** Looks up an article by slug (e.g. for a milestone's `articles` list). */
export function getArticle(slug: string, context: string): Publication {
  try {
    return toArticle(slug);
  } catch (error) {
    throw new Error(`${(error as Error).message} (${context})`);
  }
}

/** Every record in `DB/publications.json`, newest first: the list shown on "בתקשורת". */
export const publications = Object.keys(publicationsData)
  .map(toArticle)
  .toSorted((a, b) => b.date.localeCompare(a.date));
