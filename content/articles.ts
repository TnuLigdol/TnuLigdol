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
  publishedAt: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
}

export const categoryLabels: Record<ArticleCategory, string> = {
  legislation: 'חקיקה',
  'field-stories': 'סיפורים מהשטח',
  translated: 'מתורגמים',
  'internet-safety': 'בטיחות ברשת',
  misc: 'שונות',
};

export const articles: Article[] = [
  {
    slug: 'ministry-guidelines-2019',
    title: 'הנחיות משרד החינוך בנוגע לשימוש בטלפונים ניידים בבתי הספר היסודיים',
    category: 'legislation',
    author: 'משרד החינוך',
    publishedAt: '2019-11-04',
    excerpt:
      'הנחיות רשמיות של משרד החינוך המגבילות שימוש בטלפונים ניידים בבתי ספר יסודיים.',
    content: `
      משרד החינוך פרסם הנחיות מעודכנות בנוגע לשימוש בטלפונים ניידים בבתי הספר היסודיים.

      ## עיקרי ההנחיות
      - איסור שימוש בטלפונים במהלך שעות הלימודים
      - הטלפונים יישארו בתיק במצב כבוי
      - אחריות ההורים על המכשיר

      ## רקע
      ההנחיות הגיעו בעקבות מחקרים רבים שהראו את ההשפעה השלילית של סמארטפונים על ריכוז ולמידה.
    `,
    featuredImage: '/images/articles/ministry.jpg',
  },
  {
    slug: 'screen-time-research',
    title: 'מחקר: השפעת זמן מסך על התפתחות ילדים',
    category: 'translated',
    author: 'תרגום: צוות תנו לגדול',
    publishedAt: '2020-05-15',
    excerpt:
      'סקירת מחקרים עדכניים על הקשר בין זמן מסך לבעיות קשב, שינה והתפתחות חברתית.',
    content: `
      מחקרים רבים בשנים האחרונות בחנו את ההשפעה של זמן מסך על ילדים.

      ## ממצאים עיקריים
      - קשר בין זמן מסך מוגבר לבעיות קשב וריכוז
      - השפעה על איכות השינה ומשך השינה
      - ירידה בכישורים חברתיים פנים אל פנים

      ## המלצות החוקרים
      הגבלת זמן מסך לפי גיל, ודחיית חשיפה לסמארטפון ככל האפשר.
    `,
    featuredImage: '/images/articles/research.jpg',
  },
  {
    slug: 'cyberbullying-prevention',
    title: 'מניעת בריונות ברשת - מדריך להורים',
    category: 'internet-safety',
    author: 'צוות תנו לגדול',
    publishedAt: '2021-03-20',
    excerpt: 'כלים מעשיים להורים להגנה על ילדים מפני בריונות ברשת.',
    content: `
      בריונות ברשת היא אחד האיומים הגדולים על ילדים בעידן הדיגיטלי.

      ## סימני אזהרה
      - שינויים במצב הרוח אחרי שימוש במכשיר
      - הסתרת פעילות ברשת
      - ירידה בביצועים בבית הספר

      ## מה ניתן לעשות
      - שיחה פתוחה עם הילדים
      - הכרת הפלטפורמות שהם משתמשים בהן
      - יצירת סביבה בטוחה לדיווח
    `,
    featuredImage: '/images/articles/cyberbullying.jpg',
  },
];

const articlesBySlug = new Map(
  articles.map((article) => [article.slug, article]),
);

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesBySlug.get(slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getRecentArticles(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
