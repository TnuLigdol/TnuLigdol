import Image from 'next/image';
import { ArrowLeftIcon } from '@/components/ui/icons';
import type { MediaCoverage } from '@/content';
import { formatHebrewDate } from '@/lib/utils';

/**
 * One press-coverage row on "אנחנו בתקשורת" (Elementor loop template #814):
 * a bordered card holding the publication logo (14.938%), the headline with
 * byline and date (64.499%), and a pill "read it" button (20.559%). Below
 * 768px the three stack and centre.
 *
 * The whole card lifts on hover, and the button fills in green with it, which
 * is why the button's hover state is driven by `group-hover` rather than its
 * own `hover`.
 */
export function MediaCard({ item }: { item: MediaCoverage }) {
  return (
    <article className="p-0 tablet:p-0">
      <div className="group flex flex-col rounded-[20px] border border-card-border p-[10px] pt-[30px] transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)] tablet:pt-[10px]">
        {/* Elementor spacer: 11px on desktop, collapsed on mobile */}
        <div className="mb-5 h-0 tablet:h-[11px]" />

        <div className="-mt-[17px] flex flex-col tablet:flex-row">
          {/* Logo — 14.938% */}
          <div className="flex items-center justify-center p-[10px] tablet:w-[14.938%]">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.logo}
                alt={item.publication}
                width={141}
                height={69}
                className="h-auto w-auto max-w-[48%] tablet:max-w-full"
              />
            </a>
          </div>

          {/* Headline + byline — 64.499% */}
          <div className="flex flex-col justify-center p-[10px] tablet:w-[64.499%]">
            <h2 className="-mb-[3px] text-center font-sans text-[23px] font-semibold leading-[1.2em] text-green-darkest tablet:-mb-[10px] tablet:text-right">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.headline}
              </a>
            </h2>

            <div className="mt-5 flex flex-wrap items-center justify-center tablet:justify-start">
              <span className="ml-[13px] font-sans text-[16px] leading-none text-green-darkest">
                {item.author},
              </span>
              <time
                dateTime={item.date}
                className="font-sans text-[15px] leading-[1.15] text-green-darkest"
              >
                {formatHebrewDate(item.date)}
              </time>
            </div>
          </div>

          {/* CTA — 20.559% */}
          <div className="flex items-center p-[10px] tablet:w-[20.559%]">
            <a
              href={item.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-[5px] flex w-full items-center justify-center rounded-[50px] border-t border-card-border bg-[#ebf3ec] px-[17px] py-[14px] font-sans text-[20px] font-bold leading-none tracking-[0.5px] text-[#5ca55c] transition-colors group-hover:bg-primary group-hover:text-white tablet:p-[17px] tablet:text-[16px]"
            >
              <span>לקריאת הכתבה</span>
              <ArrowLeftIcon className="mr-[5px]" />
            </a>
          </div>
        </div>

        {/* Elementor spacer: 12px */}
        <div className="h-[12px]" />
      </div>
    </article>
  );
}
