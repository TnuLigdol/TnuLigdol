import type { Metadata } from 'next';
import { PublicationCard } from '@/components/cards/publication-card';
import { FooterCTA, PageHero } from '@/components/layout';
import { publications } from '@/content';

export const metadata: Metadata = {
  title: 'בתקשורת · תנו לגדול על שקט',
  description: 'סיקור תקשורתי של יוזמת "תנו לגדול על שקט" בכלי התקשורת בישראל',
};

export default function MediaPage() {
  return (
    <>
      <PageHero title='בתקשורת' />

      <div className='mx-auto max-w-[1140px] p-[10px]'>
        <div className='grid grid-cols-1 gap-x-[22px] gap-y-[10px] tablet:gap-y-[27px] tablet:grid-cols-2 desktop:grid-cols-1'>
          {publications.map((item) => (
            <PublicationCard key={item.url + item.headline} item={item} />
          ))}
        </div>
      </div>

      <FooterCTA />
    </>
  );
}
