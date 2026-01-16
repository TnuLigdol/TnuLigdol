export interface MediaCoverage {
  id: string;
  publication: string;
  publicationLogo?: string;
  headline: string;
  author?: string;
  date: string;
  externalUrl: string;
}

export const mediaCoverage: MediaCoverage[] = [
  {
    id: "ynet-2019",
    publication: "Ynet",
    publicationLogo: "/images/media/ynet.png",
    headline: "ההורים שמסרבים לתת לילדים סמארטפון",
    author: "כתב חינוך",
    date: "2019-06-15",
    externalUrl: "https://www.ynet.co.il/",
  },
  {
    id: "mako-2019",
    publication: "מאקו (ערוץ 12)",
    publicationLogo: "/images/media/mako.png",
    headline: "המהפכה השקטה: הורים נגד הסמארטפון",
    author: "כתב טכנולוגיה",
    date: "2019-08-20",
    externalUrl: "https://www.mako.co.il/",
  },
  {
    id: "yediot-2018",
    publication: "ידיעות אחרונות",
    publicationLogo: "/images/media/yediot.png",
    headline: "עד גיל 14 בלי סמארטפון: היוזמה שמשנה את חיי המשפחות",
    date: "2018-12-10",
    externalUrl: "https://www.yediot.co.il/",
  },
  {
    id: "israel-today-2019",
    publication: "ישראל היום",
    publicationLogo: "/images/media/israel-today.png",
    headline: "הורים מתארגנים: לא לסמארטפון בגיל צעיר",
    date: "2019-03-05",
    externalUrl: "https://www.israelhayom.co.il/",
  },
  {
    id: "news13-2019",
    publication: "חדשות 13",
    publicationLogo: "/images/media/news13.png",
    headline: "הקהילות שאומרות לא לטלפונים חכמים",
    date: "2019-09-12",
    externalUrl: "https://13tv.co.il/",
  },
  {
    id: "themarker-2019",
    publication: "TheMarker",
    publicationLogo: "/images/media/themarker.png",
    headline: "הכלכלה של הילדות: למה הורים משלמים יותר על פחות טכנולוגיה",
    author: "כתב כלכלה",
    date: "2019-07-25",
    externalUrl: "https://www.themarker.com/",
  },
];
