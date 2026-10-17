import Image from 'next/image';
import { ArrowLeftIcon } from '@/components/ui/icons';
import type { Publication } from '@/content';
import { formatHebrewDate } from '@/lib/utils';

/**
 * One press-coverage row on "בתקשורת" (Elementor loop template #814):
 * a bordered card holding the publication logo (14.938%), the headline with
 * byline and date (64.499%), and a pill "read it" button (20.559%). Below
 * 768px the three stack and centre.
 *
 * The whole card lifts on hover, and the button fills in green with it, which
 * is why the button's hover state is driven by `group-hover` rather than its
 * own `hover`.
 */
export function PublicationCard({ item }: { item: Publication }) {
  // Fixed box + object-contain so logos of any size/aspect ratio render at the same footprint, centred
  const logo = item.publicationIcon ? (
    <span className='relative block h-[28px] w-[56px] tablet:h-[70px] tablet:w-full tablet:min-w-[100px]'>
      <Image src={item.publicationIcon} alt={item.publication} fill sizes='140px' className='object-contain' />
    </span>
  ) : (
    <span className='font-sans text-[14px] font-bold text-green-darkest tablet:text-[20px]'>{item.publication}</span>
  );

  return (
    <article className='p-0 tablet:p-0'>
      <div className='group flex flex-col rounded-[20px] border border-[#c3cfc2] p-[6px] transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)] tablet:p-[10px]'>
        {/* Elementor spacer: 11px on desktop, collapsed on mobile */}
        <div className='hidden tablet:mb-5 tablet:block tablet:h-[11px]' />

        <div className='flex flex-col tablet:-mt-[17px] tablet:flex-row'>
          {/* Logo — 14.938% (desktop only; mobile renders it in the byline row) */}
          <div className='hidden items-center justify-center p-[10px] tablet:flex tablet:w-[14.938%]'>
            <a href={item.url} target='_blank' rel='noopener noreferrer'>
              {logo}
            </a>
          </div>

          {/* Headline + byline — 64.499% */}
          <div className='flex flex-col justify-center p-[10px] tablet:w-[64.499%]'>
            <h2 className='-mb-[3px] text-center font-sans text-[23px] font-semibold leading-[1.2em] text-green-darkest tablet:-mb-[10px] tablet:text-right'>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                {item.headline}
              </a>
            </h2>

            <div className='mt-3 flex items-center tablet:mt-5 tablet:flex-wrap tablet:justify-start'>
              {/* Mobile: logo at the start (right) of the byline row */}
              <a href={item.url} target='_blank' rel='noopener noreferrer' className='ml-3 tablet:hidden'>
                {logo}
              </a>
              {item.author && (
                <span className='ml-[13px] font-sans text-[16px] leading-none text-green-darkest'>{item.author},</span>
              )}
              <time dateTime={item.date} className='font-sans text-[15px] leading-[1.15] text-green-darkest'>
                {formatHebrewDate(item.date)}
              </time>
              {/* Mobile: compact arrow-only button inline with the byline */}
              <a
                href={item.url}
                target='_blank'
                rel='nofollow noopener noreferrer'
                aria-label='לקריאת הכתבה'
                className='mr-auto flex size-[28px] items-center justify-center rounded-full bg-[#ebf3ec] text-[#5ca55c] transition-colors group-hover:bg-primary group-hover:text-white tablet:hidden'
              >
                <ArrowLeftIcon />
              </a>
            </div>
          </div>

          {/* CTA — 20.559% (desktop only; mobile uses the inline arrow above) */}
          <div className='hidden items-center p-[10px] tablet:flex tablet:w-[20.559%]'>
            <a
              href={item.url}
              target='_blank'
              rel='nofollow noopener noreferrer'
              className='mt-[5px] flex w-full items-center justify-center rounded-[50px] border-t border-card-border bg-[#ebf3ec] px-[17px] py-[14px] font-sans text-[20px] font-bold leading-none tracking-[0.5px] text-[#5ca55c] transition-colors group-hover:bg-primary group-hover:text-white tablet:p-[17px] tablet:text-[16px]'
            >
              <span>לקריאת הכתבה</span>
              <ArrowLeftIcon className='mr-[5px]' />
            </a>
          </div>
        </div>

        {/* Elementor spacer: 12px */}
        <div className='hidden h-[12px] tablet:block' />
      </div>
    </article>
  );
}
