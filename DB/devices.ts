export interface DeviceFeatures {
  /** GPS location tracking. */
  gps: boolean;
  /** Regular text messages (SMS). "partial" for receive-only/limited support. */
  sms?: boolean | "partial";
  /** Touchscreen vs. physical keypad. */
  touchscreen?: boolean;
  bluetooth?: boolean;
  /** IP52 dust/splash resistance. */
  waterResistant?: boolean;
}

export interface DeviceSpecs {
  screenSize?: string;
  camera?: string;
  battery?: string;
  weight?: string;
  memory?: string;
}

/** A single confirmed price, or a range when it depends on quantity/color/etc. */
export type DevicePrice = number | { min: number; max: number };

export type ExtraDetailType = "link" | "video" | "image";

export interface ExtraDetail {
  type: ExtraDetailType;
  /** Label shown for the item — explains what it is even before opening it. */
  description: string;
  /** External URL, or an internal path starting with "/". */
  url: string;
}

export interface Device {
  slug: string;
  name: string;
  brand: string;
  /** Product photo. Omitted where we only have a manufacturer sheet — see `extraDetails`. */
  image?: string;
  /** ILS. Omitted where we don't yet have a confirmed retail price. */
  price?: DevicePrice;
  colors: string[];
  specs: DeviceSpecs;
  features: DeviceFeatures;
  /** Freeform clarification for a specific feature value, e.g. a partial "SMS" support caveat. */
  featureNotes?: Partial<Record<keyof DeviceFeatures, string>>;
  description: string;
  /** Supplementary links/media — group-purchase pages, demo videos, manufacturer sheets. */
  extraDetails?: ExtraDetail[];
}

/**
 * Devices recommended as safe alternatives to a smartphone for children.
 *
 * Source data recovered from `public/devices`: the May 2026 comparison PDF
 * (prices/specs/GPS+SMS for the Nokia 4G lineup and the MeWatch First Phone)
 * and the individual manufacturer spec sheets for the Nokia 215 4G, which
 * isn't in the comparison PDF and doesn't have a confirmed supplier yet.
 *
 * Which supplier(s) carry a device, and the per-device product URL, live in
 * `DB/suppliers.ts` — see `getSuppliersForDevice` in `content/suppliers.ts`.
 */
export const devices: Device[] = [
  {
    slug: "nokia-105-4g",
    name: "Nokia 105 4G",
    image: "/devices/nokia_105_4G-DTC-CONNECTIVITY-device_front-animated.webp",
    brand: "Nokia",
    price: 200,
    colors: ["שחור"],
    specs: {
      screenSize: "1.8 אינץ׳",
      camera: "אין מצלמה",
      battery: "1450mAh",
      weight: "93 גרם",
      memory: "128MB RAM / 48MB ROM",
    },
    features: {
      gps: false,
      sms: true,
      touchscreen: false,
      bluetooth: true,
      waterResistant: true,
    },
    description: "הדגם הבסיסי והקל ביותר בסדרה: טלפון כפתורים פשוט לשיחות והודעות טקסט בלבד, ללא GPS.",
    extraDetails: [
      {
        type: "image",
        description: "תמונת המכשיר וגיליון מפרט היבואן",
        url: "/devices/nokia-105-4g.jpg",
      },
    ],
  },
  {
    slug: "nokia-110-4g",
    name: "Nokia 110 4G",
    image: "/devices/nokia-110-4g-main.png",
    brand: "Nokia",
    price: { min: 200, max: 220 },
    colors: ["כחול כהה"],
    specs: {
      screenSize: "1.8 אינץ׳",
      camera: "QVGA",
      battery: "1450mAh",
      weight: "94.5 גרם",
      memory: "128MB RAM / 48MB ROM",
    },
    features: {
      gps: false,
      sms: true,
      touchscreen: false,
      bluetooth: true,
      waterResistant: true,
    },
    description: "כמו ה-105, עם מצלמה בסיסית נוספת. טלפון כפתורים פשוט לשיחות והודעות טקסט, ללא GPS.",
    extraDetails: [
      {
        type: "image",
        description: "תמונת המכשיר וגיליון מפרט היבואן",
        url: "/devices/nokia-110-4g.jpg",
      },
    ],
  },
  {
    slug: "nokia-8210-4g",
    name: "Nokia 8210 4G",
    image: "/devices/nokia-8210_4G-sand-front_back-int.avif",
    brand: "Nokia",
    price: 330,
    colors: ["מגוון רחב"],
    specs: {
      screenSize: "2.8 אינץ׳",
      camera: "0.3MP + פלאש",
      battery: "1450mAh",
      memory: "128MB RAM / 48MB ROM",
    },
    features: {
      gps: false,
      sms: true,
      touchscreen: false,
      bluetooth: true,
      waterResistant: true,
    },
    description: "עיצוב רטרו עם מסך גדול יותר ומצלמה עם פלאש. טלפון כפתורים לשיחות והודעות טקסט, ללא GPS.",
    extraDetails: [
      {
        type: "image",
        description: "תמונת המכשיר וגיליון מפרט היבואן",
        url: "/devices/nokia-8210-4g.jpg",
      },
    ],
  },
  {
    slug: "nokia-3210-4g",
    name: "Nokia 3210 4G",
    image: "/devices/Nokia_3210-JOMO-GenericSection-Device-Animated.png",
    brand: "Nokia",
    price: { min: 310, max: 370 },
    colors: ["שחור"],
    specs: {
      screenSize: "2.8 אינץ׳",
      camera: "2MP",
      battery: "1450mAh",
      weight: "61.7 גרם",
      memory: "128MB RAM / 64MB ROM",
    },
    features: {
      gps: false,
      sms: true,
      touchscreen: false,
    },
    description: "הדגם המשודרג בסדרה, עם המצלמה הטובה ביותר מבין הכפתורים. שיחות והודעות טקסט בלבד, ללא GPS.",
  },
  {
    slug: "nokia-215-4g",
    name: "Nokia 215 4G",
    image: "/devices/Nokia-215_4G-2024-Peach-Front_Back-Int.png",
    brand: "Nokia",
    price: 370,
    colors: ["כחול", "שחור", "אפרסק"],
    specs: {
      screenSize: "2.8 אינץ׳",
      camera: "2MP אחורית",
      battery: "1450mAh",
      weight: "70.9 גרם",
      memory: "64MB RAM / 128MB Storage",
    },
    features: {
      gps: false,
      sms: true,
      touchscreen: false,
      bluetooth: true,
      waterResistant: true,
    },
    description:
      "דגם 2024 עם מסך 2.8 אינץ׳ ומצלמה אחורית, כולל יומן שיחות מופרד ואפשרות לשליטת הורים. מחיר ורכישה מול הספק — עדיין לא נכלל בטבלת ההשוואה הרשמית.",
    extraDetails: [
      {
        type: "image",
        description: "תמונת המכשיר וגיליון מפרט היבואן",
        url: "/devices/nokia-215-4g.avif",
      },
    ],
  },
  {
    slug: "mewatch-first-phone",
    name: "MeWatch First Phone",
    image: "/devices/mewatch-first-phone.jpg",
    brand: "MeWatch",
    price: { min: 220, max: 300 },
    colors: ["שחור", "כחול", "ורוד"],
    specs: {
      screenSize: "2.8 אינץ׳",
      camera: "קדמית ואחורית",
      battery: "700mAh",
      memory: "128MB RAM / 196MB Storage",
    },
    features: {
      gps: true,
      sms: "partial",
      touchscreen: true,
    },
    featureNotes: {
      sms: "מאפשר קבלת סמס, אבל לא שליחה. ניתן לשלוח הודעה למשפחה וחברים מוגדרים מראש",
    },
    description:
      "טלפון המנוהל כולו דרך אפליקציה: איתור GPS, שיחות רגילות, חסימת שיחות מזרים, גדר וירטואלית, ורשת פנימית לשיחות וידאו והודעות קוליות בין מכשירי MeWatch. מחיר סופי תלוי בכמות ברכישה מרוכזת.",
    extraDetails: [
      {
        type: "link",
        description: "מערכת לניהול רכישה קבוצתית",
        url: "https://il.mewatch.co.il/first-phone-groups",
      },
      {
        type: "video",
        description: "סרטון הסבר על הרכישה הקבוצתית",
        url: "/devices/mewatch-demo.mp4",
      },
      {
        type: "link",
        description: "קבוצת הוואטסאפ לרכישות מרוכזות",
        url: "https://chat.whatsapp.com/EkVscuvXuRzJkfcBNx1wHJ?s=cl&p=a&ilr=1",
      },
      {
        type: "link",
        description: "אפליקציית הניהול — Android",
        url: "https://play.google.com/store/apps/details?id=com.tgelec.yqtsmart",
      },
      {
        type: "link",
        description: "אפליקציית הניהול — iOS",
        url: "https://apps.apple.com/il/app/yqt-smart/id6503492229?l=he",
      },
    ],
  },
];
