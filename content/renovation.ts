import type { Cta } from './homepage';

/** Single source of truth for the suggestions mailbox — change it here only. */
const OUR_EMAIL = 'info@tnuligdol.co.il';

export interface RenovationBanner {
  emoji: string;
  prefix: string;
  suggestionsEmail: string;
  suggestionsCta: Cta;
  connector: string;
  contributeCta: Cta;
}

/**
 * Temporary homepage-only announcement: the site is mid-renovation, and
 * visitors are invited to send suggestions or contribute code. Rendered as a
 * single line with the two CTAs inlined as links. Not shown on any other
 * page.
 */
export const renovationBanner: RenovationBanner = {
  emoji: '🚧',
  prefix: 'האתר בתהליך שיפוץ - רוצים לעזור? יש לכם הצעה?',
  suggestionsEmail: OUR_EMAIL,
  suggestionsCta: {
    label: 'שלחו לנו הצעה במייל',
    href: `mailto:${OUR_EMAIL}`,
  },
  connector: 'או',
  contributeCta: {
    label: 'תרמו קוד',
    href: '/contribute',
  },
};

export interface ContributeStep {
  title: string;
  description: string;
}

export interface ContributePage {
  title: string;
  intro: string;
  warningNote: string;
  /** Text before the inline mailto link. */
  warningAlt: string;
  /** Linked words at the end of `warningAlt`, leading to the mailto address. */
  warningAltLinkLabel: string;
  steps: ContributeStep[];
  githubUrl: string;
  suggestionsEmail: string;
  suggestionsCta: Cta;
}

/**
 * "/contribute" — explains how developers can contribute code to the site
 * while the renovation is underway, and offers the non-technical route
 * (emailing suggestions) as an alternative.
 */
export const contributePage: ContributePage = {
  title: 'רוצים לתרום קוד?',
  intro:
    'האתר של “תנו לגדול על שקט” הוא פרויקט קוד פתוח, וכל אחד ואחת מוזמנים לעזור לנו לשפר אותו.',
  warningNote: 'שימו לב: תרומת קוד דורשת ידע וניסיון בפיתוח תוכנה.',
  warningAlt: 'אם אתם לא מפתחים אך יש לכם רעיון או הערה, נשמח לשמוע מכם ',
  warningAltLinkLabel: 'במייל',
  steps: [
    {
      title: 'התחברו לחשבון GitHub שלכם',
      description:
        'אם עדיין אין לכם חשבון, אפשר להירשם בחינם באתר GitHub תוך דקה.',
    },
    {
      title: 'עשו Fork למאגר הפרויקט',
      description: 'צרו העתק אישי (Fork) של המאגר תחת חשבון ה-GitHub שלכם.',
    },
    {
      title: 'בצעו את השינוי שלכם',
      description:
        'עדכנו את הקוד בהעתק שלכם, ובדקו שהאתר ממשיך לרוץ כמו שצריך.',
    },
    {
      title: 'פתחו Pull Request לענף main',
      description:
        'שלחו לנו את השינוי כ-Pull Request אל ענף ה-main במאגר המקורי, ונעבור עליו בהקדם.',
    },
  ],
  githubUrl: 'https://github.com/TnuLigdol/TnuLigdol',
  suggestionsEmail: OUR_EMAIL,
  suggestionsCta: {
    label: 'שליחת הצעה במייל',
    href: `mailto:${OUR_EMAIL}`,
  },
};
