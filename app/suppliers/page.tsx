import type { Metadata } from 'next';
import { PageHero } from '@/components/layout';
import { SuppliersGrid } from '@/components/suppliers/suppliers-grid';
import { suppliers } from '@/content';

export const metadata: Metadata = {
  title: 'ספקים · תנו לגדול על שקט',
  description: 'ספקים למכשירים בטוחים לילדים',
};

export default function SuppliersPage() {
  return (
    <>
      <PageHero title="ספקים" />

      <div className="mx-auto max-w-[1140px] p-[10px]">
        <SuppliersGrid suppliers={suppliers} />
      </div>

      <div className="h-[60px]" />
    </>
  );
}
