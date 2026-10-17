import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout';
import { CategoryTags } from '@/components/milestones/category-tags';
import { SourceBadge } from '@/components/milestones/source-badge';
import { ArrowLeftIcon, WarningIcon } from '@/components/ui/icons';
import { getMilestoneBySlug, milestones } from '@/content';
import { formatHebrewDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return milestones.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getMilestoneBySlug(slug);
  if (!item) return { title: 'אבן דרך לא נמצאה' };

  return { title: item.title, description: item.description };
}

export default async function MilestonePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getMilestoneBySlug(slug);
  if (!item) notFound();
  const replacement = item.replacedBy ? getMilestoneBySlug(item.replacedBy) : undefined;

  return (
    <>
      <PageHero title={item.title} titleClassName='text-[28px] desktop:text-[40px] leading-[1.15em]' />

      <article className='mx-auto max-w-[760px] p-[10px]'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <Link
            href='/milestones'
            className='inline-flex items-center rounded-[30px] border border-card-border px-4 py-[8px] font-sans text-[14px] font-bold text-green-darkest transition-colors hover:border-primary hover:text-primary'
          >
            <ArrowLeftIcon className='ml-2 rotate-180' />
            <span>חזרה לציר הזמן</span>
          </Link>

          <div className='flex flex-col items-end gap-2'>
            <time dateTime={item.date} className='font-sans text-[16px] font-bold text-primary'>
              {formatHebrewDate(item.date)}
            </time>
            <CategoryTags categories={item.categories} />
          </div>
        </div>

        <div className='mt-4 flex items-center gap-4 font-sans text-[20px] text-green-darkest'>
          <SourceBadge name={item.author} icon={item.authorIcon} className='h-[64px] w-[64px] text-[28px]' />
          <span className='text-[22px] font-bold'>{item.author}</span>
        </div>

        {item.notice && (
          <div
            role='note'
            className='mt-5 flex items-start gap-3 rounded-[12px] border border-accent-orange bg-[#fff6e0] p-[14px] font-sans text-[16px] font-bold leading-[1.5em] text-green-darkest'
          >
            <WarningIcon className='mt-[3px] text-[20px] text-primary-hover' />
            <span>{item.notice}</span>
          </div>
        )}

        {replacement && (
          <div
            role='note'
            className='mt-5 flex items-start gap-3 rounded-[12px] border border-accent-orange bg-[#fff6e0] p-[14px] font-sans text-[16px] font-bold leading-[1.5em] text-green-darkest'
          >
            <WarningIcon className='mt-[3px] text-[20px] text-primary-hover' />
            <span>
              שימו לב: הוראה זו הוחלפה ב
              <Link href={`/milestones/${replacement.slug}`} className='underline hover:text-primary'>
                {replacement.title} ({formatHebrewDate(replacement.date)})
              </Link>
              .
            </span>
          </div>
        )}

        <p className='mt-5 font-sans text-[18px] leading-[1.6em] text-ink'>{item.description}</p>

        {item.summary && (
          <section className='mt-6 rounded-[15px] bg-panel-green p-[20px]'>
            <h2 className='font-sans text-[20px] font-bold text-green-darkest'>סיכום המסמך</h2>
            <ul className='mt-3 list-disc space-y-3 pr-5 font-sans text-[16px] leading-[1.6em] text-ink'>
              {item.summary.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        )}

        <div className='mt-8 grid grid-cols-[auto_auto] justify-start gap-x-6 gap-y-2'>
          <a
            href={item.url}
            target='_blank'
            rel='nofollow noopener noreferrer'
            className='inline-flex items-center self-center justify-self-center rounded-[50px] bg-primary px-[24px] py-[13px] font-sans text-[16px] font-bold text-white transition-colors hover:bg-primary-hover'
          >
            <span>למסמך המקורי</span>
            <ArrowLeftIcon className='mr-[5px]' />
          </a>
          <Link
            href='/milestones'
            className='self-center font-sans text-[16px] font-bold text-green-dark hover:text-primary-hover'
          >
            חזרה לציר הזמן
          </Link>
          {item.copyUrl && (
            <a
              href={item.copyUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='justify-self-center font-sans text-[14px] text-green-dark underline underline-offset-2 hover:text-primary-hover'
            >
              עותק נוסף לגיבוי
            </a>
          )}
        </div>

        {item.articles && item.articles.length > 0 && (
          <section className='mt-10 border-t-2 border-card-border pt-8'>
            <h2 className='font-sans text-[22px] font-bold text-green-darkest'>כתבות קשורות</h2>
            <ul className='mt-4 space-y-3'>
              {item.articles.map((article) => (
                <li key={article.url}>
                  <a
                    href={article.url}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                    className='flex items-start gap-4 rounded-[15px] border border-card-border p-[16px] transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)]'
                  >
                    {article.publicationIcon && (
                      <Image
                        src={article.publicationIcon}
                        alt={article.publication}
                        width={64}
                        height={64}
                        className='h-[64px] w-[64px] shrink-0 rounded-[10px] object-contain'
                      />
                    )}
                    <div className='min-w-0 flex-1'>
                      <div className='font-sans text-[14px] text-green-darkest'>
                        <span className='font-bold text-primary'>{article.publication}</span>
                        {' · '}
                        {article.author && <>{article.author}, </>}
                        <time dateTime={article.date}>{formatHebrewDate(article.date)}</time>
                      </div>
                      <h3 className='mt-1 font-sans text-[18px] font-semibold leading-[1.3em] text-green-darkest'>
                        {article.headline}
                      </h3>
                      {article.description && (
                        <p className='mt-1 font-sans text-[15px] leading-[1.5em] text-ink'>{article.description}</p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <div className='h-[60px]' />
    </>
  );
}
