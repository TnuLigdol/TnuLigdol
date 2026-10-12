import type { Metadata } from 'next';
import { MilestoneCard } from '@/components/cards/milestone-card';
import { PageHero } from '@/components/layout';
import { milestones, milestonesPage } from '@/content';

export const metadata: Metadata = {
  title: milestonesPage.title,
};

export default function MilestonesPage() {
  return (
    <>
      <PageHero title={milestonesPage.title} />

      <div className='mx-auto max-w-[1140px] p-[10px]'>
        <p className='mx-auto max-w-[760px] text-center font-sans text-[18px] leading-[1.6em] text-ink'>{milestonesPage.intro}</p>

        <div className='h-[30px]' />

        <div className='grid grid-cols-1 gap-y-[27px]'>
          {milestones.map((item) => (
            <MilestoneCard key={item.url} item={item} />
          ))}
        </div>
      </div>

      <div className='h-[60px]' />
    </>
  );
}
