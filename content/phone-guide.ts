export interface GuideDownload {
  label: string;
  href: string;
}

export interface GuideSession {
  /** e.g. "מפגש #1" */
  number: string;
  /** e.g. "ריכוז" */
  topic: string;
  description: string;
  /** Present on the first four sessions only. */
  videoUrl?: string;
  downloads: GuideDownload[];
}

export interface GuideExtra {
  title: string;
  description: string;
  image?: { src: string; alt: string; width: number; height: number };
  downloads: GuideDownload[];
}

export interface GuideFaqItem {
  question: string;
  /** May contain `[label](url)` inline links and blank-line paragraph breaks. */
  answer: string;
}

/**
 * "אני והטלפון" — the ready-to-run classroom programme for children who
 * already have, or are about to get, a smartphone.
 *
 * The presentations and parent-note PDFs were recovered from the archive and
 * now live under `public/downloads/phone-guide/`. A few links the original had
 * could not be recovered; see todo.md.
 */
export const phoneGuide = {
  /** Sticky strip above the banner on the original. */
  banner:
    'הילדים התבגרו, והתחילו לצוץ טלפונים חכמים בכיתה? זה הזמן להכין אותם לשימוש נכון בטלפון החכם!',
  title: 'אני והטלפון',
  subtitle:
    'הרגלים בריאים לשימוש בטלפון חכם\nלמי שכבר יש לו או בקרוב יהיה לו טלפון אישי',
  heroImage: {
    src: '/images/phone-guide/hero.png',
    alt: 'אני והטלפון',
    width: 1024,
    height: 652,
  },
  intro:
    'גם אם הצלחנו לדחות את קבלת הטלפון החכם בכמה שנים, מהר מגיע היום שבו גם הילדים שלנו עמוק בסמארטפון. אז מה עושים עכשיו?\nהורים רבים יתקינו לילדיהם אפליקציית בקרת הורים שתגביל את זמן השימוש ואת הגישה לתכנים מסוימים. זה מעולה אך לא מספיק – הטלפון החכם הוא מכשיר ממכר.',
  audience: {
    title: 'למי זה מתאים?',
    text: "הפרויקט מותאם לילדים בביה\"ס היסודי בין הכיתות ב' עד ו', גם לאלה שכבר יש להם טלפון אישי וגם לאלה שעדיין אין להם. גם לאחרונים יש גישה למכשיר של ההורים או של חברים, או אפילו לטאבלט שיוצר הרגלים דומים. ניתן בקלות להתאים את התכנים גם לילדים בוגרים יותר.",
  },
  approach: {
    title: 'אז מה עושים?',
    text: 'בפרויקט ארבעה מפגשים שמתמקדים כל אחד בנושא מרכזי בתחומים שלרוב פחות מודעים אליהם. לדוגמא: למה הטלפון לא ישן איתנו בחדר, איך צפצופי ההתראות פוגעים בריכוז שלנו, אילו תמונות אסור לשלוח, שיח מכבד בווטסאפ ועוד. המפגש הרביעי עוסק בחברות אמיתית וחברות ברשת ומיועד לתלמידי הכיתות הגבוהות.',
    closing: 'בהצלחה 🙂',
  },

  sessions: [
    {
      number: 'מפגש #1',
      topic: 'ריכוז',
      description:
        'מפגש זה עוסק ביכולת שלנו לשמור על ריכוז כשהטלפון החכם תמיד לצידנו. בתוך הנושא הרחב של ריכוז כללנו הן את היכולת שלנו לשמור על פוקוס בביצוע משימה והן את היכולת שלנו להתמקד במי שנמצא איתנו.',
      videoUrl: 'https://youtu.be/f9zvVJKv8SQ',
      downloads: [
        {
          label: 'מצגת #1 להעברה בכיתה',
          href: '/downloads/phone-guide/meeting-1-focus.pptx',
        },
        {
          label: 'המצגת עם הערות להורים',
          href: '/downloads/phone-guide/meeting-1-focus-parent-notes.pdf',
        },
      ],
    },
    {
      number: 'מפגש #2',
      topic: 'בריאות',
      description:
        'גם במפגש זה בחרנו להתמקד בנושאים הפחות מדוברים: יציבה, שינה וחשיבות השעמום. לשימוש בטלפון השלכות בריאותיות נוספות (קרינה, פגיעה אפשרית בעיניים) אשר מדוברות לא מעט ולכן בחרנו שלא להעמיק בהן.',
      videoUrl: 'https://www.youtube.com/watch?v=hAaQ_0TXAsk&t=5s',
      downloads: [
        {
          label: 'מצגת #2 להעברה בכיתה',
          href: '/downloads/phone-guide/meeting-2-health.pptx',
        },
        {
          label: 'המצגת עם הערות להורים',
          href: '/downloads/phone-guide/meeting-2-health-parent-notes.pdf',
        },
      ],
    },
    {
      number: 'מפגש #3',
      topic: 'ווטסאפ',
      description:
        'ההתכתבות בוטסאפ היא דרך תקשורת משמעותית (ולפעמים עיקרית) בין הילדים מחוץ לבית הספר. דיברנו, בין היתר, על הקלות שבה נוצרות אי הבנות בכתיבה, על מה אומרים ומה לא אומרים בקבוצה, למה לא שולחים תמונות מביכות לאף אחד ומה אף פעם לא נכתוב בווטסאפ.',
      videoUrl: 'https://www.youtube.com/watch?v=fiWb-0RHp-k&t=3s',
      downloads: [
        {
          label: 'מצגת #3 להעברה בכיתה',
          href: '/downloads/phone-guide/meeting-3-whatsapp.pptx',
        },
        {
          label: 'המצגת עם הערות להורים',
          href: '/downloads/phone-guide/meeting-3-whatsapp-parent-notes.pdf',
        },
      ],
    },
    {
      number: 'מפגש #4',
      topic: 'חברות אמת וחברות ברשת',
      description:
        "המפגש הרביעי עוסק בחברות אמיתית לעומת חברות ברשת, בצורך שלנו בקרבה אנושית ובקשר אמיתי, ומדוע חברות ברשת או חברות שטחית בהתכתבות לא מספקת לנו את הצרכים הללו. בסוף השיחה נציג גם דוגמאות לזיופים באינסטגרם. השיחה מתאימה לתלמידי הכיתות הגבוהות יותר (ה'-ו').",
      videoUrl: 'https://www.youtube.com/watch?v=voTJu7Cv1Y8&t=258s',
      // The original's "מצגת #4" button pointed at a WordPress attachment page
      // rather than a file, and the file itself was never archived — see todo.md.
      downloads: [],
    },
    {
      number: "מפגש מותאם לכיתות ב'",
      topic: 'הכנה לשימוש בטלפון',
      description:
        '"מפגש טעימות" יחיד ובו היכרות ראשונה עם המודעות לשימוש נכון ובריא בטלפון. במפגש נציג לילדים רעיונות בסיסיים באופן קליל וחוויתי המותאם לגיל. המפגש מתאים גם כשלרוב הכיתה עדיין אין טלפון חכם – נדגיש בפני הילדים שלכולם יש גישה לטלפון חכם (של הורים, אחים, חברים…).',
      downloads: [
        {
          label: "מצגת כיתות ב' להעברה בכיתה",
          href: '/downloads/phone-guide/meeting-grade2.pptx',
        },
      ],
    },
  ] as GuideSession[],

  presenterNote:
    'שימו לב: בכל שקופית במצגת להעברה בכיתות יש הערות מפורטות למרצים',

  extras: {
    title: 'רעיונות נוספים',
    items: [
      {
        title: 'מפגש מקדים להורים בזום',
        description:
          'לפני המפגשים עם הילדים ערכנו מפגש הורים בו הסברנו בקצרה מה יהיה בפרויקט ובאילו נושאים נעסוק. היה לנו ברור שהפרויקט יכול להצליח רק אם יש המשכיות גם בבית. בנוסף, ידענו שהורים רבים לא מודעים לנושאים עליהם אנו מדברים עם הילדים או לחשיבות שלהם.',
        downloads: [
          {
            label: 'מצגת מפגש ההורים',
            href: '/downloads/phone-guide/parents-meeting.pptx',
          },
          {
            label: 'דוגמת הזמנה',
            href: '/downloads/phone-guide/parents-meeting-invitation.png',
          },
        ],
      },
      {
        title: 'הסכם שימוש כיתתי בווטסאפ',
        description:
          "לאחר המפגשים תוכלו לערוך בכיתות סדנה ליצירת הסכם שימוש כיתתי בווטסאפ, ושם להגדיר את הכללים שהכיתה לוקחת על עצמה בדיונים בקבוצות או אפילו בצ'טים פרטיים. הצעה: הכיתות הגבוהות יוכלו לסייע לכיתות הנמוכות לערוך את ההסכמים הללו כפרויקט שיסייע גם לאלה וגם לאלה.",
        downloads: [
          {
            label: 'רעיונות להסכם שימוש',
            href: 'https://docs.google.com/document/d/1HM8B6t99YtSSlnFWhkS9HnbCaMQK2WJdejs4cWxVi_k/edit',
          },
        ],
      },
      {
        title: 'המלצה לחלוקה לשכבות',
        description:
          'כדי להטמיע באמת הרגלים בריאים, יש צורך בחזרה על הדברים לאורך זמן. אנו מציעים לחלק את התכנית על פני כמה שנים, כדי שבכל שנה הילדים יקבלו הזדמנות להזכר בהרגלים הבריאים.',
        downloads: [],
      },
      {
        title: 'יצירת קופסת מנוחה לטלפון',
        description:
          'כפעילות חוויתית נוספת להטעמת הרעיונות, הילדים יוכלו ליצור קופסת מנוחה לטלפון. הפעילות יצירתית, פשוטה וללא עלות: אפשר לקשט גם קופסאות נעליים. הקופסה שהילדים יביאו הביתה יכולה לעורר דיון בנושא גם בבית בקלות.',
        image: {
          src: '/images/phone-guide/rest-box.png',
          alt: 'קופסת מנוחה לטלפונים',
          width: 300,
          height: 231,
        },
        downloads: [],
      },
    ] as GuideExtra[],
  },

  faq: {
    title: 'שאלות ותשובות',
    items: [
      {
        question: 'כמה זה עולה?',
        answer:
          'לא עולה. חינם.\n\nנבקש רק שאם התחלתם את הפרויקט בבית הספר שלכם – ספרו לנו על כך בטופס למטה כדי שיהיה לנו שמח בלב. 🙂',
      },
      {
        question: 'לאילו גילאים מיועד "אני והטלפון"?',
        answer:
          "הפרויקט יועד לילדים בכיתות ב' עד ו' בהתאמה לגיל (ראו המלצה לחלוקה לשכבות למעלה). עם התאמות קלות ניתן להעביר אותו גם בחטיבה ובתיכון.",
      },
      {
        question: 'אבל אצלנו בשכבה לא לכל הילדים יש עדיין טלפון חכם',
        answer:
          'הפרויקט מיועד בעיקר לילדים שכבר יש להם טלפון אישי אך גם לאלה שעדיין אין להם, הרי גם להם יש גישה למכשיר – דרך זה של ההורים או של חברים, או אפילו לטאבלט, מכשיר חכם שיוצר הרגלים דומים.\n\nאין לנו היום דרך לשלוט באופן מלא בגישה של הילדים שלנו למכשירים חכמים. אם אי אפשר למנוע מהילדים גישה למכשיר, כדאי לתת להם כלים טובים להתמודד עם השימוש בו.\n\nויותר מכך – ילדים צעירים שעדיין אין להם טלפון אישי משלהם עדיין לא אימצו הרגלי שימוש שקשה לשנות והם דווקא אלה שיוכלו להרוויח הכי הרבה מהמפגשים הללו.',
      },
      {
        question: 'האם הפרויקט הוא במקום הטלפונים הטפשים?',
        answer:
          'לא. הפרויקט בא כהשלמה לפרויקט הטלפון הטיפש.\n\nאפשר להעביר אותו גם כשרק לחלק מהילדים יש טלפון חכם (ותהיו בטוחים שבעלי הטלפון הטיפש משחקים איתם בטלפון החכם אחרי הצהריים), או כשאתם מרגישים שמתקרב היום שבו יתחילו לעבור מטלפונים פשוטים לחכמים.\n\nוכמובן, אפשר להריץ אותו ללא קשר לקיומם של טלפונים פשוטים.',
      },
      {
        question: 'האם אתם מעודדים להמנע משימוש בטלפון החכם?',
        answer:
          'לא. אנחנו מקבלים את הטלפון החכם כנתון ואפילו מדברים על התרומה הרבה שלו לחיים שלנו – ממידע נגיש ועד משחקים ברשת. אנו מדגישים שהבעיות נוצרות מאופן השימוש שלנו בטלפון ומסבירים שזו האחריות של כל אחד מאיתנו להשתמש בו נכון.',
      },
      {
        question: 'מה הפרויקט דורש מאיתנו?',
        answer:
          'מקרן + מספר הורים מתנדבים או מורים שיעבירו את החומרים בכיתות וכן שעות שבית הספר מפנה עבורכם (אפשר להגדיר אותן כזמן "הורה מעשיר").\n\nואם אין מקרן, תמיד אפשר לדבר על התכנים בעל פה.',
      },
      {
        question: 'אילו טיפים תוכלו לתת להורים שידריכו?',
        answer:
          'גילינו שכשאנחנו מאפשרים לילדים לאכול תוך כדי המפגשים הם מרוכזים ושקטים הרבה יותר 🙂\n\nאפשר להוסיף אנקדוטות וחוויות אישיות משלכם.\n\nכדי להמנע מלהסתכל בטלפון בשביל לגלות מה השעה, אפשר להביא שעון.\n\nחסכו את הבלגן הפוטנציאלי של תחילת השיעור – כדאי להגיע לכיתה כמה דקות לפני תחילתו כדי לטפל בעניינים הטכניים של הפעלת המצגת. לפעמים גם המקרן צריך מספר דקות כדי להתחיל "להתחמם".',
      },
      {
        question: 'מאיפה לקוח המידע?',
        answer:
          'אנו לא אנשי מדע ושימוש בטלפון החכם הוא לא תחום העיסוק המרכזי שלנו. לכן, החומרים נלקחו ממקורות פופולריים בעלי מהימנות גבוהה ככל שיכלנו למצוא – הרצאות של חוקרי מח ופסיכולוגים, מומחים בתחום הסלולר, הרצאות טד וכיוצ"ב.\n\nמקורות: [תכנים של יעל מן שחר](https://the-blue-pine.com/הרצאות-מוקלטות) (האיצטרובל הכחול) – חוקרת מח שעוסקת רבות בתחום ואף מעבירה סדנאות והרצאות בבתי ספר.\n\n[מסכים והפרעת קשב](https://open.spotify.com/episode/79pnrQ1Ct9QEZhb7CEygYo) (פודקאסט אנשי הקשב)\n\n[How boredom can lead to your most brilliant ideas](https://www.ted.com/talks/manoush_zomorodi_how_boredom_can_lead_to_your_most_brilliant_ideas) (TED)\n\n[תמיר ליאון – השפעת הטכנולוגיה](https://soundcloud.com/eretzfm/pb0incvr6ze0) (רדיו ארץ)\n\n["Text Neck": A True 21st-Century Ailment, or Just Another Pain in the Neck?](https://universityhealthnews.com/daily/pain/text-neck) (UHN University Health News)\n\n[Associations between screen time and lower psychological well-being among children and adolescents](https://www.sciencedirect.com/science/article/pii/S2211335518301827) (Science Direct)',
      },
    ] as GuideFaqItem[],
  },

  contact: {
    title: 'ספרו לנו',
    text: 'העברתם את הפרויקט בבית הספר שלכם? ספרו לנו! זה גם המקום ליצור קשר לשאלות.',
  },

  logo: {
    src: '/images/phone-guide/logo.jpg',
    alt: 'אני והטלפון',
    width: 515,
    height: 803,
  },
};
