import type { Metadata } from 'next';
import { StoryCard } from '@/components/cards/story-card';
import { FooterCTA, PageHero } from '@/components/layout';
import { articles, stories } from '@/content';

export const metadata: Metadata = {
  title: 'מאמרים · תנו לגדול על שקט',
  description: 'מאמרים, סיפורים מהשטח ותכנים מתורגמים בנושא ילדים ומסכים',
};

/**
 * The original "כל המאמרים" was an all-posts index — it mixed field stories
 * with articles from the חקיקה / מתורגמים / בטיחות ברשת / שונות categories.
 *
 * Only the field stories survive in the archive: the three article bodies the
 * index linked to (and its second page of results) were never captured, so
 * `content/articles.ts` is deliberately empty. Once real article content lands
 * there it will appear here alongside the stories with no further changes.
 */
export default function ArticlesPage() {
  const posts = [...stories.map((story) => ({ key: story.slug, story }))].sort(
    (a, b) => b.story.publishedAt.localeCompare(a.story.publishedAt),
  );

  return (
    <>
      <PageHero title="כל המאמרים" />

      <div className="h-[30px]" />

      <div className="mx-auto max-w-[1140px] p-[10px]">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[35px] tablet:grid-cols-2 desktop:grid-cols-3">
          {posts.map(({ key, story }) => (
            <StoryCard key={key} story={story} />
          ))}
        </div>

        {articles.length === 0 && (
          <p className="mt-[35px] text-center font-sans text-[16px] text-ink/60">
            תכנים נוספים יתווספו בקרוב.
          </p>
        )}
      </div>

      <FooterCTA />
    </>
  );
}
