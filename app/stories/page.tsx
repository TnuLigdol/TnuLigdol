import type { Metadata } from 'next';
import { StoryCard } from '@/components/cards/story-card';
import { FooterCTA, PageHero } from '@/components/layout';
import { stories } from '@/content';

export const metadata: Metadata = {
  title: 'סיפורים מהשטח · תנו לגדול על שקט',
  description:
    'הורים וקהילות מספרים איך הריצו את היוזמה אצלם — מה עבד, מה היה קשה, ומה הם למדו',
};

export default function StoriesPage() {
  return (
    <>
      <PageHero title="סיפורים מהשטח" />

      {/* Elementor spacer between the banner and the grid */}
      <div className="h-[25px]" />

      <div className="mx-auto max-w-[1140px] p-[10px]">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[35px] tablet:grid-cols-2 desktop:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </div>

      <FooterCTA />
    </>
  );
}
