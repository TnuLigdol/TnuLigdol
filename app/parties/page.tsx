import type { Metadata } from 'next';
import { PartyPositions } from '@/components/parties/party-positions';
import { partyData, sortedParties } from '@/content/party-positions';

// The title leads with the brand itself, so it opts out of the root
// "%s | תנו לגדול על שקט" template rather than naming the brand twice.
const title = 'תנו לגדול - עמדות המפלגות על ילדים, מסכים ורשתות חברתיות';
// Every record's budget, timeline and owner is unknown, so the description
// says the page checks for them rather than implying they are listed.
const description =
  'מה התוכנית לילדים? השוואת עמדות המפלגות על הגנת ילדים ברשתות החברתיות ובעולם הדיגיטלי, עם מקורות, ובדיקה אם פורסמו תקציב, לוח זמנים ואחריות לביצוע.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/parties' },
  // A page-level openGraph replaces the root one wholesale, so restate the
  // shared fields; without its own url, shares resolve to the homepage.
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'תנו לגדול על שקט',
    url: '/parties',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 628,
        alt: 'תנו לגדול על שקט - הטלפון הראשון הוא טלפון בטוח',
      },
    ],
  },
};
export default function PartiesPage() {
  return <PartyPositions data={partyData} parties={sortedParties} />;
}
