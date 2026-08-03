import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const hebrewDate = new Intl.DateTimeFormat('he-IL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/**
 * Formats an ISO date the way the WordPress original did — "23 בספטמבר 2019".
 * Pinned to UTC so the output can't shift by a day with the viewer's timezone.
 */
export function formatHebrewDate(iso: string) {
  return hebrewDate.format(new Date(`${iso}T12:00:00Z`));
}

/**
 * WordPress-style auto excerpt: the opening prose of a story, trimmed at a word
 * boundary. Inline `[label](url)` markers are stripped so the card shows plain
 * text.
 */
export function storyExcerpt(
  story: { body: { type: string; text?: string }[] },
  maxLength = 130,
) {
  const prose = story.body
    .filter((b) => b.type === 'paragraph' && b.text)
    .map((b) => b.text as string)
    .join(' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  if (prose.length <= maxLength) return prose;
  const cut = prose.slice(0, maxLength);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}
