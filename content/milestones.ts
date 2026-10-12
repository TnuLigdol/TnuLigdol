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

/** Records live in `DB/milestones.json`; add an entry there and it shows up. */
export const milestones = milestonesData as Milestone[];
