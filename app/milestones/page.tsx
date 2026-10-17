import type { Metadata } from 'next';
import { PageHero } from '@/components/layout';
import { Timeline } from '@/components/milestones/timeline';
import { milestones, milestonesPage } from '@/content';

export const metadata: Metadata = {
  title: milestonesPage.title,
};

export default function MilestonesPage() {
  return (
    <>
      <PageHero eyebrow={milestonesPage.eyebrow} title={milestonesPage.title} />

      <div className='mx-auto max-w-[1140px] p-[10px]'>
        <p className='mx-auto max-w-[760px] text-center font-sans text-[18px] leading-[1.6em] text-ink'>{milestonesPage.intro}</p>

        <div className='h-[40px]' />

        <Timeline items={milestones} />
      </div>

      <div className='h-[60px]' />
    </>
  );
}
