export interface Cta {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Homepage {
  hero: {
    title: string;
    subtitle: string;
    cta: Cta;
  };
  about: {
    title: string;
    content: string;
  };
  community: {
    title: string;
    description: string;
  };
  faq: FaqItem[];
  storiesSection: {
    title: string;
    subtitle: string;
    cta: Cta;
  };
  phoneGuideSection: {
    title: string;
    description: string;
    cta: Cta;
  };
}

export const homepage: Homepage = {
  hero: {
    title: 'הטלפון הראשון הוא טלפון בטוח',
    subtitle: 'יוזמה קהילתית להשהיית גיל קבלת הסמארטפון',
    cta: {
      label: 'הורידו את ערכת ההתנעה',
      href: '#startup-kit',
    },
  },
  about: {
    title: 'על היוזמה',
    content: `
      אנחנו מאמינים שדחיית גיל קבלת הסמארטפון מאפשרת לילדים יותר זמן לשחק בחוץ,
      לפעילות גופנית, לאינטראקציה חברתית פנים אל פנים, ולזמן משפחתי איכותי.

      במקום סמארטפון, אנחנו מציעים לרכוש "טלפון פשוט-בטוח" שמאפשר שיחות והודעות
      אבל לא גישה לאינטרנט או לרשתות חברתיות.

      דחייה של אפילו 2-3 שנים היא מתנה יקרת ערך להתפתחות הילדים.
    `,
  },
  community: {
    title: 'הביאו את היוזמה לקהילה שלכם',
    description: 'קבלו חומרים להפצה בקהילה - מצגות, פליירים ומכתבים להורים',
  },
  faq: [
    {
      question: 'מה בעצם אתם מציעים?',
      answer:
        'אנחנו מציעים לדחות את גיל קבלת הסמארטפון ובמקום זאת לרכוש לילדים טלפון פשוט-בטוח שמאפשר שיחות והודעות בלבד.',
    },
    {
      question: 'למה טלפון פשוט עדיף?',
      answer:
        'טלפון פשוט מאפשר תקשורת עם הילד מבלי לחשוף אותו לסכנות האינטרנט, רשתות חברתיות, ותכנים לא מתאימים לגילו.',
    },
    {
      question: 'מאיזה גיל מומלץ לתת סמארטפון?',
      answer:
        'המומחים ממליצים להמתין לפחות עד גיל 14. ככל שמחכים יותר, כך הילד מפתח יותר כלים להתמודדות עם האתגרים הדיגיטליים.',
    },
    {
      question: 'מה עם ההתקדמות הטכנולוגית?',
      answer:
        "ילדים לומדים להשתמש בטכנולוגיה מהר מאוד. אין צורך לחשוש שהם 'יפספסו' - הם ישלימו את הפער תוך זמן קצר כשיגיע הזמן.",
    },
    {
      question: 'האם זה באמת בר-קיימא?',
      answer:
        'בהחלט! גם אם מצליחים לדחות רק שנתיים - זו הצלחה. שנתיים נוספות של התפתחות שקטה ובריאה הן מתנה אדירה לילד.',
    },
  ],
  storiesSection: {
    title: 'סיפורים מהשטח',
    subtitle: 'איך קהילות אחרות הצליחו',
    cta: {
      label: 'שתפו את הסיפור שלכם',
      href: '/share-your-story',
    },
  },
  phoneGuideSection: {
    title: 'אני והטלפון שלי',
    description:
      'תוכנית חינוכית לבתי ספר שרוב התלמידים בהם כבר מחזיקים סמארטפון. התוכנית מלמדת שימוש אחראי ובריא במכשיר.',
    cta: {
      label: 'למידע נוסף',
      href: '/me-and-my-phone',
    },
  },
};
