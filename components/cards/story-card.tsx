import Image from 'next/image';
import Link from 'next/link';
import type { Story } from '@/content';
import { formatHebrewDate, storyExcerpt } from '@/lib/utils';

/**
 * Story card used on /stories and as the "related" card in a story's sidebar.
 * Elementor's "cards" post skin: 3:2 thumbnail, title, excerpt, then a meta
 * line with the byline and date.
 *
 * As on the homepage, the archived original renders these thumbnails broken
 * (Elementor adds `elementor-has-item-ratio` from JavaScript, and without it
 * the image sits above a tall empty strip). This renders the intended layout.
 */
export function StoryCard({ story }: { story: Story }) {
  return (
    <article>
      <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-card-border bg-white transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)]">
        <Link
          href={`/stories/${story.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="relative block w-full"
        >
          <div className="relative w-full pb-[66%]">
            <Image
              src={story.cardImage}
              alt={story.title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 320px"
              className="object-cover"
            />
          </div>
        </Link>

        <div className="flex flex-1 flex-col px-[30px] pt-5 pb-[30px]">
          <h3 className="text-right font-sans text-[17px] font-bold leading-[20px] text-green-darkest">
            <Link
              href={`/stories/${story.slug}`}
              className="hover:text-primary"
            >
              {story.title}
            </Link>
          </h3>

          <p className="mt-3 flex-1 text-right font-sans text-[15px] font-light leading-[1.4em] text-ink">
            {storyExcerpt(story)}
          </p>

          <div className="mt-4 text-right font-sans text-[13px] text-ink/70">
            {story.author && <span>{story.author} · </span>}
            <time dateTime={story.publishedAt}>
              {formatHebrewDate(story.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}
