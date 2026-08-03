import type { Metadata } from 'next';
import { LegalCard } from '@/components/cards/legal-card';
import { FooterCTA, PageHero } from '@/components/layout';
import { legalDocuments } from '@/content';

export const metadata: Metadata = {
  title: 'חקיקה · תנו לגדול על שקט',
  description: 'הנחיות רשמיות בנוגע לשימוש בטלפונים ניידים בבתי הספר היסודיים',
};

export default function LegalPage() {
  return (
    <>
      <PageHero title="חקיקה" titleClassName="desktop:text-[65px]" />

      {/* Elementor spacer section between the banner and the first card */}
      <div className="h-[34px]" />

      <div className="mx-auto flex max-w-[1000px] flex-col gap-[27px] p-[10px] tablet:p-0">
        {legalDocuments.map((doc) => (
          <LegalCard key={doc.downloadUrl} document={doc} />
        ))}
      </div>

      <FooterCTA />
    </>
  );
}
