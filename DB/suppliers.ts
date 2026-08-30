export interface SupplierRecord {
  name: string;
  url: string;
  description?: string;
  /** Device slug → this supplier's product page URL for that device. */
  devices: Record<string, string>;
}

/** Suppliers keyed by supplier code, with a secondary key per device slug. */
export type SuppliersData = Record<string, SupplierRecord>;

export const suppliersData: SuppliersData = {
  'sogrim-pina': {
    name: "סוגרים פינה",
    url: "https://heilpern1.wixsite.com/vaad-shop",
    description: "אתר לוועדי הורים וגנים שסוגר פינה",
    devices: {
      "nokia-105-4g": "https://heilpern1.wixsite.com/vaad-shop",
      "nokia-110-4g": "https://heilpern1.wixsite.com/vaad-shop",
      "nokia-3210-4g": "https://heilpern1.wixsite.com/vaad-shop",
      "nokia-215-4g": "https://heilpern1.wixsite.com/vaad-shop",
    },
  },
  zap: {
    name: "Zap.co.il",
    url: "https://zap.co.il",
    description: "מוכר מגוון רחב של טלפונים ניידים, כולל דגמי נוקיה.",
    devices: {
      "nokia-105-4g": "https://www.zap.co.il/model.aspx?modelid=1212052",
      "nokia-110-4g": "https://www.zap.co.il/model.aspx?modelid=1161439",
      "nokia-8210-4g": "https://www.zap.co.il/model.aspx?modelid=796019",
      "nokia-3210-4g": "https://www.zap.co.il/model.aspx?modelid=1242606",
      "nokia-215-4g": "https://www.zap.co.il/model.aspx?modelid=1234418",
    },
  },
  ksp: {
    name: "KSP",
    url: "https://ksp.co.il",
    description: "מוכר מגוון רחב של טלפונים ניידים, כולל דגמי נוקיה.",
    devices: {
      "nokia-105-4g": "https://ksp.co.il/web/item/298111",
      "nokia-110-4g": "https://ksp.co.il/web/item/291143",
      "nokia-215-4g": "https://ksp.co.il/web/item/311652",
    },
  },
  MeWatch: {
    name: "MeWatch",
    url: "https://www.mewatch.co.il/",
    description: "מטרתנו היא להעניק להורים ביטחון ולילדים כניסה בטוחה לחיים הדיגיטליים תוך איזון בין זמן מסך לפעילות גופנית.",
    devices: {
      "mewatch-first-phone": "https://www.mewatch.co.il/mewatch-firstphone%D7%98%D7%9C%D7%A4%D7%95%D7%9F-%D7%91%D7%98%D7%95%D7%97-%D7%9C%D7%99%D7%9C%D7%93%D7%99%D7%9D",
    },
  },
  KidiWatch: {
    name: "KidiWatch",
    url: "https://kidiwatch.co.il",
    description: "חברת קידי ווטש היא חברה ישראלית שהביאה לישראל את המוצר האהוב והשימושי לילדים והורים - שעון חכם לילדים. המותג הישראלי שנותן לכם שירות כחול לבן - משלב הפיתוח של המוצר, הייצור של השעונים ועד לאחריות, תמיכה ושירות - בשפה העברית!",
    devices: {
      "kidiphone-plus": "https://kidiwatch.co.il/product/kidiphon/",
    },
  },
  Kravitz: {
    name: "Kravitz",
    url: "https://www.kravitz.co.il",
    description: "קרביץ - רשת בפריסה ארצית, עם אתר אינטרנט חדשני, המתמחה במכירת מגוון גדול של ציוד משרדי, מדפסות, מחשבים, מוצרי גיימינג, תיקי גב לנסיעות ועבודה, מוצרי לימודים מהגן ועד האוניברסיטה.",
    devices: {
      "kidiphone-plus": "https://www.kravitz.co.il/products/%d7%98%d7%9c%d7%a4%d7%95%d7%9f-%d7%97%d7%9b%d7%9d-%d7%95%d7%91%d7%98%d7%95%d7%97-%d7%9c%d7%99%d7%9c%d7%93%d7%99%d7%9d-mewatch-first-phone-4g-gps-copy",
    },
  },
};
