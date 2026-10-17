import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout';
import { CategoryTags } from '@/components/milestones/category-tags';
import { ArrowLeftIcon } from '@/components/ui/icons';
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

  return (
    <>
      <PageHero title={item.title} titleClassName='text-[28px] desktop:text-[40px] leading-[1.15em]' />

      <article className='mx-auto max-w-[760px] p-[10px]'>
        <div className='flex flex-wrap items-center gap-3'>
          <time dateTime={item.date} className='font-sans text-[16px] font-bold text-primary'>
            {formatHebrewDate(item.date)}
          </time>
          <CategoryTags categories={item.categories} />
        </div>

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

        <div className='mt-8 flex flex-wrap items-center gap-4'>
          <a
            href={item.url}
            target='_blank'
            rel='nofollow noopener noreferrer'
            className='inline-flex items-center rounded-[50px] bg-primary px-[24px] py-[13px] font-sans text-[16px] font-bold text-white transition-colors hover:bg-primary-hover'
          >
            <span>למסמך המקורי</span>
            <ArrowLeftIcon className='mr-[5px]' />
          </a>
          <Link href='/milestones' className='font-sans text-[16px] font-bold text-green-dark hover:text-primary-hover'>
            חזרה לציר הזמן
          </Link>
        </div>
      </article>

      <div className='h-[60px]' />
    </>
  );
}
