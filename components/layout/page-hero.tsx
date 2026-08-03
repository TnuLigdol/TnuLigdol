import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  /**
   * Desktop title size. The original set this per page rather than globally
   * (55px on most, 56px on /the-team, 65px on /legal); mobile is always 35px.
   */
  titleClassName?: string;
}

/**
 * The green curved banner Elementor's theme opens most non-home pages with —
 * the same section on /media, /legal, /articles, /stories and /the-team, with
 * only the title and its size changing. The negative top margin pulls it up
 * under the transparent header, exactly like the homepage hero does.
 *
 * /share-your-story and /me-and-my-phone have no such banner at all.
 *
 * The curve is Elementor's "curve" shape divider at 143% width, which
 * overflows the viewport on both sides — hence `overflow-hidden`, matching
 * the `.elementor-shape` wrapper that clipped it originally.
 */
export function PageHero({ title, titleClassName }: PageHeroProps) {
  return (
    <section className="relative -mt-[92px] overflow-hidden bg-primary">
      <div className="mx-auto flex max-w-[1140px] flex-col p-[10px]">
        <div className="mb-5 h-[100px]" />

        <h1
          className={cn(
            'mb-5 text-center font-sans text-[35px] font-normal leading-none text-white',
            titleClassName ?? 'desktop:text-[55px]',
          )}
        >
          {title}
        </h1>

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
  );
}
