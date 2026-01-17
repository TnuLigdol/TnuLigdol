export interface Session {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics: string[];
}

export interface Material {
  title: string;
  description: string;
  downloadUrl: string;
}

export interface PhoneGuide {
  title: string;
  subtitle: string;
  intro: string;
  targetAudience: string;
  sessions: Session[];
  grade2Adaptation: {
    title: string;
    description: string;
  };
  materials: Material[];
  implementation: {
    title: string;
    description: string;
    features: string[];
  };
  parentSession: {
    title: string;
    description: string;
    videoUrl: string;
  };
}

export const phoneGuide: PhoneGuide = {
  title: "אני והטלפון שלי",
  subtitle: "תוכנית חינוכית לשימוש מושכל בסמארטפון",
  intro: `
    תוכנית "אני והטלפון שלי" מיועדת לבתי ספר שרוב התלמידים בהם כבר מחזיקים סמארטפון.
    התוכנית מלמדת באופן חווייתי על הסיכונים האפשריים ומקנה כלים לשימוש אחראי ובריא במכשיר.
  `,
  targetAudience: "כיתות ב׳-ו׳",
  sessions: [
    {
      id: "focus",
      title: "ריכוז",
      icon: "🎯",
      description:
        "עוסק בהשפעת התראות על הקשב והריכוז ומלמד טכניקות לשמירה על מיקוד.",
      topics: [
        "מה קורה למוח שלנו כשמגיעה התראה",
        "כמה זמן לוקח לחזור לריכוז",
        "טכניקות להפחתת הסחות דעת",
      ],
    },
    {
      id: "health",
      title: "בריאות",
      icon: "💪",
      description: "עוסק בהשפעות על הגוף - יציבה, שינה, והחשיבות של שעמום.",
      topics: [
        "יציבה נכונה מול מסך",
        "השפעת אור כחול על השינה",
        "למה שעמום חשוב להתפתחות",
      ],
    },
    {
      id: "whatsapp",
      title: "תקשורת בווטסאפ",
      icon: "💬",
      description:
        "עוסק בנימוס דיגיטלי ואי-הבנות שנובעות מתקשורת טקסטואלית.",
      topics: [
        "מה קורה כשאין טון דיבור",
        "איך להימנע מאי-הבנות",
        "כללי נימוס בקבוצות",
      ],
    },
    {
      id: "friendship",
      title: "חברות אמיתית מול מקוונת",
      icon: "👥",
      description:
        "עוסק בהבדלים בין קשרים פנים אל פנים לקשרים דיגיטליים (כיתות ה׳-ו׳).",
      topics: [
        "מה הופך חברות לאמיתית",
        "ההבדל בין עוקבים לחברים",
        "איך לטפח קשרים משמעותיים",
      ],
    },
  ],
  grade2Adaptation: {
    title: "התאמה לכיתה ב׳",
    description:
      'מפגש "טעימה" לתלמידים צעירים שמתכוננים לקבלת מכשיר בעתיד. מתמקד בהבנה בסיסית של השפעות המסכים.',
  },
  materials: [
    {
      title: "מצגת למנחים",
      description: "מצגת מפורטת עם הערות למנחה",
      downloadUrl: "/downloads/presentation.pdf",
    },
    {
      title: "מדריך להורים",
      description: "חומר רקע להורים על התוכנית",
      downloadUrl: "/downloads/parent-guide.pdf",
    },
    {
      title: "דף פעילות - קופסת מנוחה",
      description: 'יצירת "קופסת מנוחה" מעוצבת לטלפון',
      downloadUrl: "/downloads/rest-box.pdf",
    },
  ],
  implementation: {
    title: "מודל יישום",
    description:
      "התוכנית מיועדת להעברה בכיתה על ידי הורים מאומנים או מורים. ללא עלות נוספת.",
    features: [
      "הכשרת הורים מתנדבים",
      "חומרים מוכנים להורדה",
      "תמיכה מקבוצת הפייסבוק",
      "אפשרות לחונכות - תלמידים גדולים מלמדים קטנים",
    ],
  },
  parentSession: {
    title: "מפגש הכנה להורים",
    description: "סרטון הסבר להורים על התוכנית ואיך להשתלב",
    videoUrl: "https://www.youtube.com/embed/example",
  },
};
