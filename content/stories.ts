export interface Story {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
}

export const stories: Story[] = [
  {
    slug: 'lehavim',
    title: 'תנו לגדול בלהבים',
    author: 'יפעת גולדמן',
    publishedAt: '2020-03-10',
    excerpt:
      'אחרי 18 חודשים של עבודה קהילתית, הצלחנו להקים יוזמה משמעותית בלהבים שכללה קמפיין פרסומי, הרצאות ורכישה קולקטיבית של טלפונים בטוחים.',
    content: `
      אחרי 18 חודשים של פעילות אינטנסיבית, אנחנו גאות לשתף את ההצלחה שלנו בלהבים.

      התחלנו עם קבוצה קטנה של 5 נשים שהאמינו ברעיון, והיום אנחנו רואים את הפירות.

      ## מה עשינו?
      - קמפיין שילוט חוצות ברחבי היישוב
      - הרצאה של יעל מן-שר להורים ולצוות החינוכי
      - פעילויות לילדים בבתי הספר
      - רכישה קולקטיבית של טלפונים בטוחים

      ## התוצאות
      עשרות משפחות הצטרפו ליוזמה, והילדים מדווחים על יותר זמן משחק בחוץ ופחות לחץ חברתי.
    `,
    featuredImage: '/images/stories/lehavim.jpg',
  },
  {
    slug: 'when-children-grow',
    title: 'כשהילדים גדלים',
    author: 'צוות תנו לגדול',
    publishedAt: '2023-07-15',
    excerpt:
      'סיפור על הקמת הרגלים בריאים מגיל צעיר והשפעתם על התפתחות הילדים בטווח הארוך.',
    content: `
      כשמתחילים מוקדם, התוצאות מדהימות.

      משפחות שהצטרפו ליוזמה לפני שנים מדווחות על ילדים עם כישורים חברתיים מפותחים יותר,
      יכולת ריכוז טובה יותר, ופחות חרדה.

      ## עדויות מההורים
      "הבן שלי בן 12 ועדיין עם טלפון פשוט. הוא הכי פופולרי בכיתה כי כולם באים לשחק אצלנו בחוץ."

      "הבת שלי למדה לנגן על גיטרה במקום לבזבז שעות ברשתות החברתיות."
    `,
    featuredImage: '/images/stories/children-grow.jpg',
  },
  {
    slug: 'emek-hefer',
    title: 'התקדמות בעמק חפר',
    author: 'צוות עמק חפר',
    publishedAt: '2020-02-20',
    excerpt:
      'היוזמה מתרחבת לאזור עמק חפר עם שיתוף פעולה של בתי ספר ורשויות מקומיות.',
    content: `
      עמק חפר הצטרף ליוזמה עם אנרגיה מדהימה.

      ## פעילויות שהתקיימו
      - ערבי הורים בכל בתי הספר היסודיים
      - סדנאות להורים על שימוש בטוח באינטרנט
      - תוכנית "אני והטלפון שלי" בכיתות ה'-ו'

      ## מה הלאה
      אנחנו מתכננים להרחיב לחטיבות הביניים ולערב את המועצה האזורית.
    `,
    featuredImage: '/images/stories/emek-hefer.jpg',
  },
];

const storiesBySlug = new Map(stories.map((story) => [story.slug, story]));

export function getStoryBySlug(slug: string): Story | undefined {
  return storiesBySlug.get(slug);
}

export function getRecentStories(limit = 3): Story[] {
  return [...stories]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
