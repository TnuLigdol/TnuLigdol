export interface LegalDocument {
  title: string;
  /** Issuing body — rendered under the title, beside the date. */
  authority: string;
  /** Logo of the issuing body. */
  logo: string;
  /** ISO date; rendered as e.g. "4 בנובמבר 2019" via Intl. */
  date: string;
  downloadUrl: string;
}

/**
 * "חקיקה" — official guidance on mobile phone use in schools. The archived
 * page listed exactly one document; kept as a list so more can be added
 * without touching the page. (The original had no intro copy under the
 * banner — just the card.)
 */
export const legalDocuments: LegalDocument[] = [
  {
    title: 'הנחיות בנוגע לשימוש בטלפונים ניידים בבתי הספר היסודיים',
    authority: 'משרד החינוך',
    logo: '/images/legal/ministry-of-education.png',
    date: '2019-11-04',
    downloadUrl:
      '/downloads/ministry-of-education-mobile-phone-guidelines-2019.pdf',
  },
];
