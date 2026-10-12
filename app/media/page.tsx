import type { Metadata } from 'next';
import { MediaCard } from '@/components/cards/media-card';
import { FooterCTA, PageHero } from '@/components/layout';
import { mediaCoverage } from '@/content';

export const metadata: Metadata = {
  title: 'אנחנו בתקשורת · תנו לגדול על שקט',
  description: 'סיקור תקשורתי של יוזמת "תנו לגדול על שקט" בכלי התקשורת בישראל',
};

export default function MediaPage() {
  return (
    <>
      <PageHero title="אנחנו בתקשורת" />

      <div className="mx-auto max-w-[1140px] p-[10px]">
        <div className="grid grid-cols-1 gap-x-[22px] gap-y-[27px] tablet:grid-cols-2 desktop:grid-cols-1">
          {mediaCoverage.map((item) => (
            <MediaCard key={item.url + item.headline} item={item} />
          ))}
        </div>
      </div>

      <FooterCTA />
    </>
  );
}
