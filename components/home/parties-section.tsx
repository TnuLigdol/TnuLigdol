import Link from 'next/link';
import { homepage } from '@/content';

const { parties } = homepage;

/**
 * Compact pointer to the party positions page: a single green panel in the
 * style of the neighbouring sections, without an image.
 */
export function PartiesSection() {
  return (
    <section className="mx-auto mt-[30px] max-w-[1000px]">
      <div className="mx-[10px] flex flex-col items-center rounded-[15px] bg-panel-green px-5 py-[30px] text-center tablet:mx-0 tablet:rounded-[20px] tablet:px-[30px]">
        <h3 className="mb-5 font-sans text-[29px] font-normal leading-[42px] text-slate tablet:text-[33px]">
          {parties.title}
        </h3>
        <p className="mb-5 max-w-[720px] font-sans text-[18px] leading-[26px] text-slate">
          {parties.description}
        </p>
        <Link
          href={parties.cta.href}
          className="rounded-[30px] bg-slate px-5 py-[13px] font-sans text-[18px] leading-[1.3] text-white transition-colors hover:bg-green-hover"
        >
          {parties.cta.label}
        </Link>
      </div>
    </section>
  );
}
