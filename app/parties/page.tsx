import type { Metadata } from 'next';
import { PartyPositions } from '@/components/parties/party-positions';
import { partyData, sortedParties } from '@/content/party-positions';

const title = 'מה התוכנית לילדים? עמדות המפלגות';
const description =
  'עמדות המפלגות על הגנת ילדים בעולם הדיגיטלי: מה פורסם, מה חסר, ואיפה המקורות. דורשים תוכנית רצינית, מתוקצבת וניתנת לביצוע.';

export const metadata: Metadata = {
  title,
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
        height: 630,
        alt: 'תנו לגדול על שקט - הטלפון הראשון הוא טלפון בטוח',
      },
    ],
  },
};
export default function PartiesPage() {
  return <PartyPositions data={partyData} parties={sortedParties} />;
}
