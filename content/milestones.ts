import milestonesData from '@/DB/milestones.json';

export const milestoneCategoryLabels = {
  'global-trends': 'מגמות בעולם',
  'negative-effects': 'השפעות שליליות',
  'severe-cases': 'דוגמאות למקרים קשים',
  'company-activity': 'פעילות החברות בתחום',
  'success-stories': 'סיפורי הצלחה',
  'knowledge-base': 'מאגר מידע מרכזי גדול',
  'local-trends': 'מגמה בארץ',
} as const;

export type MilestoneCategory = keyof typeof milestoneCategoryLabels;

export interface RelatedArticle {
  publication: string;
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

/** Validates a raw JSON record, so a typo in a category fails loudly. */
function toMilestone([slug, raw]: [string, (typeof milestonesData)[keyof typeof milestonesData]]): Milestone {
  const categories = raw.categories.filter(isMilestoneCategory);
  if (categories.length !== raw.categories.length) {
    throw new Error(`Unknown category in milestone "${slug}"`);
  }
  return { ...raw, slug, categories };
}

/** Records live in `DB/milestones.json`, keyed by slug; add an entry there and it shows up. Newest first. */
export const milestones = Object.entries(milestonesData)
  .map(toMilestone)
  .toSorted((a, b) => b.date.localeCompare(a.date));

export function getMilestoneBySlug(slug: string) {
  return milestones.find((m) => m.slug === slug);
}
