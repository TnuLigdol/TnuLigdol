import milestonesData from '@/DB/milestones.json';

export type MilestoneCategory =
  'global-trends' | 'negative-effects' | 'severe-cases' | 'company-activity' | 'success-stories' | 'knowledge-base';

export const milestoneCategoryLabels: Record<MilestoneCategory, string> = {
  'global-trends': 'מגמות בעולם ובארץ',
  'negative-effects': 'השפעות שליליות',
  'severe-cases': 'דוגמאות למקרים קשים',
  'company-activity': 'פעילות החברות בתחום',
  'success-stories': 'סיפורי הצלחה',
  'knowledge-base': 'מאגר מידע מרכזי גדול',
};

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
function toMilestone(raw: (typeof milestonesData)[number]): Milestone {
  const categories = raw.categories.filter(isMilestoneCategory);
  if (categories.length !== raw.categories.length) {
    throw new Error(`Unknown category in milestone "${raw.slug}"`);
  }
  return { ...raw, categories };
}

/** Records live in `DB/milestones.json`; add an entry there and it shows up. Newest first. */
export const milestones = milestonesData.map(toMilestone).toSorted((a, b) => b.date.localeCompare(a.date));

export function getMilestoneBySlug(slug: string) {
  return milestones.find((m) => m.slug === slug);
}
