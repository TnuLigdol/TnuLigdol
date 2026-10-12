import { ArrowLeftIcon } from '@/components/ui/icons';
import { type Milestone, milestoneCategoryLabels } from '@/content';
import { formatHebrewDate } from '@/lib/utils';

export function MilestoneCard({ item }: { item: Milestone }) {
  return (
    <article className='group rounded-[20px] border border-card-border p-[20px] transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)] tablet:p-[30px]'>
      <div className='flex flex-wrap items-center gap-2'>
        {item.categories.map((category) => (
          <span key={category} className='rounded-[30px] bg-[#ebf3ec] px-3 py-1 font-sans text-[13px] font-bold text-green-dark'>
            {milestoneCategoryLabels[category]}
          </span>
        ))}
        <time dateTime={item.date} className='font-sans text-[14px] text-green-darkest'>
          {formatHebrewDate(item.date)}
        </time>
      </div>

      <h2 className='mt-4 text-right font-sans text-[23px] font-semibold leading-[1.25em] text-green-darkest'>
        <a href={item.url} target='_blank' rel='noopener noreferrer'>
          {item.title}
        </a>
      </h2>

      <p className='mt-3 text-right font-sans text-[16px] leading-[1.6em] text-ink'>{item.description}</p>

      {item.summary && (
        <div className='mt-5 rounded-[15px] bg-panel-green p-[18px]'>
          <h3 className='font-sans text-[18px] font-bold text-green-darkest'>סיכום</h3>
          <ul className='mt-2 list-disc space-y-2 pr-5 text-right font-sans text-[15px] leading-[1.6em] text-ink'>
            {item.summary.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={item.url}
        target='_blank'
        rel='nofollow noopener noreferrer'
        className='mt-5 inline-flex items-center rounded-[50px] border-t border-card-border bg-[#ebf3ec] px-[22px] py-[12px] font-sans text-[16px] font-bold text-[#5ca55c] transition-colors group-hover:bg-primary group-hover:text-white'
      >
        <span>למסמך המלא</span>
        <ArrowLeftIcon className='mr-[5px]' />
      </a>
    </article>
  );
}
