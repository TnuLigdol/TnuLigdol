import Image from 'next/image';
import { ArrowLeftIcon } from '@/components/ui/icons';
import type { LegalDocument } from '@/content';
import { formatHebrewDate } from '@/lib/utils';

/**
 * One document row on "חקיקה". Structurally the same bordered card as the
 * press rows on /media — spacer, inner row pulled up 17px, spacer — but split
 * two ways: the issuing body's logo (22.361%) and the title, byline and
 * download button (77.639%).
 */
export function LegalCard({ document: doc }: { document: LegalDocument }) {
  return (
    <div className="group flex flex-col justify-center rounded-[20px] border border-card-border pt-[20px] transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)] tablet:p-[10px]">
      {/* Elementor spacer: 11px on desktop, collapsed on mobile */}
      <div className="mb-5 h-0 tablet:h-[11px]" />

      <div className="-mt-[17px] flex flex-col tablet:flex-row">
        {/* Issuing body's logo — 22.361% */}
        <div className="p-[10px] text-right tablet:w-[22.361%]">
          <Image
            src={doc.logo}
            alt={doc.authority}
            width={336}
            height={94}
            className="inline-block h-auto w-auto max-w-[72%] tablet:max-w-full"
          />
        </div>

        {/* Title, byline, download — 77.639% */}
        <div className="mx-[10px] my-[10px] mb-[11px] flex flex-col justify-center tablet:mx-0 tablet:my-0 tablet:w-[77.639%] tablet:p-0">
          <h2 className="-mb-[3px] text-right font-sans text-[23px] font-semibold leading-[1.2em] text-green-darkest tablet:-mb-[20px]">
            {doc.title}
          </h2>

          <div className="mt-5 flex flex-wrap items-center">
            <span className="ml-[13px] font-sans text-[16px] leading-none text-green-darkest">
              {doc.authority}
            </span>
            <time
              dateTime={doc.date}
              className="font-sans text-[16px] leading-[1.15] text-green-darkest"
            >
              {formatHebrewDate(doc.date)}
            </time>
          </div>

          <div className="mt-[5px] flex tablet:mt-[11px]">
            <a
              href={doc.downloadUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center rounded-[50px] border-t border-card-border bg-[#ebf3ec] px-[17px] py-[14px] font-sans text-[20px] font-bold leading-none tracking-[0.5px] text-[#5ca55c] transition-colors group-hover:bg-primary group-hover:text-white tablet:px-[30px] tablet:py-[17px] tablet:text-[17px]"
            >
              <span>להורדת המסמך</span>
              <ArrowLeftIcon className="mr-[14px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Elementor spacer: 12px */}
      <div className="h-[12px]" />
    </div>
  );
}
