export interface MediaCoverage {
  /** Publication logo shown on the right of the card. */
  logo: string;
  /** Alt text — the publication name, as the original wrote it. */
  publication: string;
  headline: string;
  author: string;
  /** ISO date; rendered as e.g. "23 בספטמבר 2019" via Intl. */
  date: string;
  url: string;
}

/**
 * The press coverage listed on "אנחנו בתקשורת", newest first — the order the
 * original's post loop produced.
 */
export const mediaCoverage: MediaCoverage[] = [
  {
    logo: '/images/media/ynet.png',
    publication: 'YNET',
    headline: 'סיבת הפזילה של בת ה-13: שימוש מופרז בסלולרי בחופש',
    author: 'ענבר טויזר',
    date: '2019-09-23',
    url: 'https://www.ynet.co.il/articles/0,7340,L-5594718,00.html',
  },
  {
    logo: '/images/media/news12.jpg',
    publication: 'חדשות 12',
    headline: 'מדריך: טלפונים טיפשים לילדים חכמים',
    author: 'סיגל רובין שהם',
    date: '2019-08-18',
    url: 'https://www.mako.co.il/news-israel/education-q3_2018/Article-f9ebae5042d4561004.htm',
  },
  {
    logo: '/images/media/yediot.png',
    publication: 'ידיעות אחרונות',
    headline: 'קנו להם טלפון טיפש',
    author: 'סיגל רובין שהם',
    date: '2019-07-21',
    url: 'https://www.yediot.co.il/articles/0,7340,L-5554369,00.html',
  },
  {
    logo: '/images/media/news12.jpg',
    publication: 'חדשות 12',
    headline: 'כך תפרידו את הילדים ממסכים',
    author: 'חדשות 2',
    date: '2019-01-17',
    url: 'https://www.mako.co.il/news-israel/education-q1_2019/Article-873c8c1458a5861004.htm',
  },
  {
    logo: '/images/media/israel-hayom.png',
    publication: 'ישראל היום',
    headline: 'תופעה: חוזרים לטלפון "טיפש"',
    author: 'נועם (דבול) דביר',
    date: '2019-01-17',
    url: 'https://www.israelhayom.co.il/article/625279',
  },
  {
    logo: '/images/media/news13.png',
    publication: 'החדשות 13',
    headline: 'תנו לגדול על שקט: ההורים שהחליטו לא לתת סמארטפונים לילדים',
    author: 'בוקר אור',
    date: '2019-01-14',
    url: 'https://13news.co.il/10news/online/180291',
  },
  {
    logo: '/images/media/xnet.png',
    publication: 'XNET',
    headline: 'שובו של הטלפון הטיפש: יוזמה חדשה של הורים תופסת תאוצה',
    author: 'גלי לויטה ליבוביץ',
    date: '2018-09-17',
    url: 'https://xnet.ynet.co.il/articles/0,7340,L-5351658,00.html',
  },
  {
    logo: '/images/media/mako.png',
    publication: 'MAKO',
    headline: 'מחתרת הטיפשים',
    author: 'דרור גלוברמן',
    date: '2018-08-30',
    url: 'https://www.mako.co.il/nexter-dror-globerman/Article-baaa56d6a998561006.htm',
  },
  {
    logo: '/images/media/themarker.png',
    publication: 'דה מרקר',
    headline: 'רק בישראל, סמארטפון בגיל שמונה נחשב לדבר מקובל',
    author: 'נעמה גלעדי',
    date: '2018-08-15',
    url: 'https://www.themarker.com/news/education/.premium-1.6384744',
  },
  {
    logo: '/images/media/news12.jpg',
    publication: 'חדשות 12',
    headline: 'יוזמת ההורים: טלפון "טיפש" לילד',
    author: 'יעל אודם',
    date: '2018-07-29',
    url: 'https://www.mako.co.il/news-israel/education-q3_2018/Article-cfd9f7b33b7e461004.htm',
  },
];
