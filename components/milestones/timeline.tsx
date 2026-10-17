import Link from 'next/link';
import { ArrowLeftIcon, WarningIcon } from '@/components/ui/icons';
import type { Milestone } from '@/content';
import { cn, formatHebrewDate } from '@/lib/utils';
import { CategoryTags } from './category-tags';
import { PublisherBadges, SourceBadge } from './source-badge';
import { Reveal } from './reveal';

const ICON_SIZE = 'h-[48px] w-[48px] text-[20px]';

/**
 * Vertical timeline, newest first. The line runs down the right edge on mobile
 * and down the centre on desktop, where entries alternate sides (RTL: the first
 * sits on the right). Each side stacks independently (floats) and the left column
 * is offset lower, so consecutive dots sit close together.
 */
export function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className='relative desktop:flow-root'>
      <div
        aria-hidden='true'
        className='absolute top-0 bottom-0 right-[15px] w-[3px] rounded-full bg-gradient-to-b from-primary to-card-border desktop:right-1/2 desktop:translate-x-1/2'
      />

      {items.map((item, i) => {
        const onRight = i % 2 === 0;
        const year = item.date.slice(0, 4);
        const replacement = item.replacedBy ? items.find((m) => m.slug === item.replacedBy) : undefined;
        const newYear = i === 0 || items[i - 1].date.slice(0, 4) !== year;
        return (
          <li
            key={item.slug}
            className={cn(
              'relative pb-[40px] pr-[50px] desktop:w-1/2 desktop:pr-0',
              newYear && 'pt-[30px]',
              newYear && i > 0 && 'mt-[20px]',
              onRight
                ? 'desktop:float-right desktop:clear-right desktop:pl-[45px]'
                : 'desktop:float-left desktop:clear-left desktop:pr-[45px]',
              !onRight && (newYear && i > 0 ? 'desktop:mt-[110px]' : 'desktop:mt-[90px]')
            )}
          >
            <span
              aria-hidden='true'
              className={cn(
                'absolute right-[6px] h-[21px] w-[21px] rounded-full border-4 border-background bg-primary shadow-[0_0_0_3px_#66b768]',
                newYear ? 'top-[58px]' : 'top-[28px]',
                onRight ? 'desktop:right-auto desktop:left-0 desktop:-translate-x-1/2' : 'desktop:right-0 desktop:translate-x-1/2'
              )}
            />

            {newYear && (
              <span
                className={cn(
                  'absolute -top-[8px] right-[-5px] flex h-[28px] w-[44px] items-center justify-center rounded-full bg-primary font-sans text-[13px] font-bold text-white desktop:h-[32px] desktop:w-[72px] desktop:text-[16px]',
                  onRight
                    ? 'desktop:right-auto desktop:left-0 desktop:-translate-x-1/2'
                    : 'desktop:right-0 desktop:translate-x-1/2'
                )}
              >
                {year}
              </span>
            )}

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

                {replacement && (
                  <p className='mt-3 flex items-start gap-2 font-sans text-[14px] font-bold leading-[1.5em] text-green-darkest'>
                    <WarningIcon className='mt-[2px] shrink-0 text-[16px] text-primary-hover' />
                    <span>הוראה זו הוחלפה בהוראה חדשה מ-{formatHebrewDate(replacement.date)}</span>
                  </p>
                )}

                <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
                  <span className='inline-flex items-center font-sans text-[15px] font-bold text-[#5ca55c] transition-colors group-hover:text-primary-hover'>
                    להרחבה
                    <ArrowLeftIcon className='mr-[5px]' />
                  </span>

                  <span className='mr-auto inline-flex items-center gap-[10px]'>
                    {item.articles && item.articles.length > 0 && (
                      <>
                        <PublisherBadges articles={item.articles} className={ICON_SIZE} />
                        <span aria-hidden='true' className='h-[32px] w-px bg-card-border' />
                      </>
                    )}
                    <SourceBadge name={item.author} icon={item.authorIcon} className={ICON_SIZE} />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
