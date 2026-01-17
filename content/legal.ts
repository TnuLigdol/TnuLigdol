export interface LegalDocument {
  title: string;
  authority: string;
  date: string;
  description: string;
  downloadUrl: string;
  logo: string;
}

export interface LegalContent {
  title: string;
  subtitle: string;
  documents: LegalDocument[];
}

export const legal: LegalContent = {
  title: "חקיקה",
  subtitle: "הנחיות רשמיות בנוגע לשימוש בטלפונים ניידים",
  documents: [
    {
      title: "הנחיות משרד החינוך בנוגע לשימוש בטלפונים ניידים בבתי-הספר היסודיים",
      authority: "משרד החינוך",
      date: "2019-11-04",
      description:
        "מסמך רשמי המפרט את ההנחיות לשימוש בטלפונים ניידים בבתי ספר יסודיים.",
      downloadUrl: "/downloads/ministry-guidelines.pdf",
      logo: "/images/ministry-logo.png",
    },
  ],
};
