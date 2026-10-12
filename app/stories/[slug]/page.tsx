import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { StoryCard } from '@/components/cards/story-card';
import { FooterCTA } from '@/components/layout';
import { StoryBody } from '@/components/stories/story-body';
import { getStoryBySlug, stories } from '@/content';
import { formatHebrewDate, storyExcerpt } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: 'סיפור לא נמצא' };

  return {
    title: `${story.title} · תנו לגדול על שקט`,
    description: storyExcerpt(story, 160),
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 2);

  return (
    <>
      {/*
        Green banner — Elementor single template #1106. Widget stack with the
        usual 20px spacing, except a 36px gap under the pill button.
      */}
      <section className="relative -mt-[92px] overflow-hidden bg-primary">
        {/* the banner's container was capped at 900px, narrower than the body's 1000px */}
        <div className="mx-auto flex max-w-[900px] flex-col p-[10px]">
          <div className="mb-5 h-[72px]" />

          <div className="mb-9 flex justify-center">
            <Link
              href="/stories"
              className="rounded-[20px] bg-green-dark px-[25px] py-[12px] font-sans text-[18px] leading-none text-white transition-colors hover:bg-white hover:text-green-dark"
            >
              סיפורים מהשטח
            </Link>
          </div>

          <h1 className="mb-5 text-center font-sans text-[28px] font-normal leading-[1.1em] text-white desktop:text-[45px]">
            {story.title}
          </h1>

          <div className="mb-5 flex flex-wrap items-center justify-center gap-x-2 font-sans text-[16px] leading-[1.06] text-white">
            {story.author && <span>{story.author}</span>}
            {story.location && (
              <>
                <span aria-hidden="true">·</span>
                <span>{story.location}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <time dateTime={story.publishedAt}>
              {formatHebrewDate(story.publishedAt)}
            </time>
          </div>

          <div className="mb-5 h-[10px]" />
          <div className="h-[10px] desktop:h-[60px]" />
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[143%] -translate-x-1/2 fill-background"
        >
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
        </svg>
      </section>

      {/* Featured image, pulled up 87px so it straddles the curve */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-[10px]">
        <div className="relative -mt-[40px] h-[235px] overflow-hidden rounded-[12px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] desktop:-mt-[87px] desktop:h-[515px]">
          <Image
            src={story.heroImage}
            alt={story.title}
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 980px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Body + sidebar */}
      <div className="mx-auto max-w-[1000px] px-[10px]">
        <div className="flex flex-col-reverse desktop:flex-row">
          {/* Article — 73.246% (first in DOM = right in RTL) */}
          <div className="w-full pt-[10px] desktop:w-[73.246%]">
            <div className="h-0 desktop:h-[11px]" />
            <StoryBody blocks={story.body} />
            <div className="h-[10px]" />
          </div>

          {/* Sidebar — 26.71% */}
          <aside className="w-full pt-[20px] desktop:w-[26.71%] desktop:pl-[10px]">
            <div className="rounded-[12px] border border-r-0 border-sidebar-border bg-panel-green p-[25px] text-center">
              <h2 className="font-sans text-[35px] font-normal leading-tight text-ink desktop:text-[28px]">
                גם לכם יש סיפור?
              </h2>
              <p className="mt-3 font-sans text-[16px] font-light leading-[1.3em] text-ink">
                התחלתם פרויקט בקהילה? נתקלתם בקשיים? פעלתם בדרך מעניינת, או
                קצרתם הצלחה, אפילו קטנה?
              </p>
              <Link
                href="/share-your-story"
                className="mt-5 inline-block rounded-[30px] bg-primary px-[25px] py-[13px] font-sans text-[18px] leading-none text-white transition-colors hover:bg-green-hover"
              >
                ספרו לנו
              </Link>
            </div>

            {related.length > 0 && (
              <>
                <h2 className="mt-[48px] text-right font-sans text-[35px] font-normal leading-tight text-ink desktop:text-[28px]">
                  עוד באותו נושא:
                </h2>
                <div className="mt-5 flex flex-col gap-[30px]">
                  {related.map((item) => (
                    <StoryCard key={item.slug} story={item} />
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>
      </div>

      <FooterCTA />
    </>
  );
}
