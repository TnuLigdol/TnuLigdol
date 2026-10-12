import Image from 'next/image';
import Link from 'next/link';
import { homepage } from '@/content';

const { storiesSection } = homepage;

/**
 * Elementor section `350523d` — the "posts / cards" widget: a 3-up grid
 * (2-up on tablet, 1-up on mobile) of 3:2 thumbnails under a bottom gradient.
 *
 * Note: in the archived copy of the original these thumbnails render broken —
 * Elementor adds the `elementor-has-item-ratio` class from JavaScript, and
 * without it the image is not absolutely positioned, so it sits above a tall
 * empty strip of the hover gradient. This rebuild renders the layout as it was
 * designed: the image fills the 3:2 box.
 */
export function StoriesSection() {
  return (
    <section className="mx-auto flex max-w-[1000px] flex-col p-[10px]">
      <div className="mb-5 h-[31px]" />

      <h2 className="mb-5 text-center font-sans text-[35px] font-normal leading-none text-green-dark tablet:text-[41px]">
        {storiesSection.title}
      </h2>

      <div className="mb-5 h-[5px]" />

      <div className="mb-5 grid grid-cols-1 gap-x-[30px] gap-y-[35px] tablet:grid-cols-2 desktop:grid-cols-3">
        {storiesSection.cards.map((card) => (
          <article key={card.href}>
            <div className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-card-border bg-white transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)]">
              <Link
                href={card.href}
                tabIndex={-1}
                aria-hidden="true"
                className="relative mb-5 block w-full"
              >
                <div className="relative w-full pb-[50%] tablet:pb-[66%]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover"
                  />
                </div>
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.35),transparent_75%)] transition-opacity duration-300 group-hover:opacity-50" />
              </Link>

              <div className="mt-[7px] px-[30px] pb-[30px]">
                <h3 className="text-center font-sans text-[17px] font-bold leading-[20px] text-green-darkest">
                  <Link href={card.href} className="hover:text-primary">
                    {card.title}
                  </Link>
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="h-[21px]" />
    </section>
  );
}
