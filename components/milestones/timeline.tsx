import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/ui/icons';
import type { Milestone } from '@/content';
import { cn, formatHebrewDate } from '@/lib/utils';
import { CategoryTags } from './category-tags';
import { Reveal } from './reveal';

/**
 * Vertical timeline, newest first. The line runs down the right edge on mobile
 * and down the centre on desktop, where entries alternate sides (RTL: the first
 * sits on the right).
 */
export function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className='relative'>
      <div
        aria-hidden='true'
        className='absolute top-0 bottom-0 right-[15px] w-[3px] rounded-full bg-gradient-to-b from-primary to-card-border desktop:right-1/2 desktop:translate-x-1/2'
      />

      {items.map((item, i) => {
        const onRight = i % 2 === 0;
        return (
          <li
            key={item.slug}
            className={cn(
              'relative pb-[40px] pr-[50px] desktop:w-1/2 desktop:pr-0',
              onRight ? 'desktop:pl-[45px]' : 'desktop:mr-[50%] desktop:pr-[45px]'
            )}
          >
            <span
              aria-hidden='true'
              className={cn(
                'absolute top-[28px] right-[6px] h-[21px] w-[21px] rounded-full border-4 border-background bg-primary shadow-[0_0_0_3px_#66b768]',
                onRight ? 'desktop:right-auto desktop:left-0 desktop:-translate-x-1/2' : 'desktop:right-0 desktop:translate-x-1/2'
              )}
            />

            <Reveal>
              <Link
                href={`/milestones/${item.slug}`}
                className='group block rounded-[20px] border border-card-border bg-background p-[20px] transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)] tablet:p-[25px]'
              >
                <time dateTime={item.date} className='font-sans text-[15px] font-bold text-primary'>
                  {formatHebrewDate(item.date)}
                </time>

                <h2 className='mt-1 mb-3 font-sans text-[21px] font-semibold leading-[1.25em] text-green-darkest'>
                  {item.title}
                </h2>

                <CategoryTags categories={item.categories} />

                <p className='mt-3 font-sans text-[15px] leading-[1.6em] text-ink'>{item.description}</p>

                <span className='mt-4 inline-flex items-center font-sans text-[15px] font-bold text-[#5ca55c] transition-colors group-hover:text-primary-hover'>
                  להרחבה
                  <ArrowLeftIcon className='mr-[5px]' />
                </span>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
