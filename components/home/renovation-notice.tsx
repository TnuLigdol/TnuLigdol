import Link from 'next/link';
import { renovationBanner } from '@/content';

/**
 * Temporary announcement that the site is being renovated, inviting visitors
 * to send suggestions by mail or contribute code on /contribute. Rendered by
 * Hero directly above the headline, so it's the first thing visitors read.
 * A single compact line with the two CTAs inlined as links, styled in
 * accent-orange tones to stand out against the hero's green backdrop.
 */
export function RenovationNotice() {
  const { emoji, prefix, suggestionsCta, connector, contributeCta } =
    renovationBanner;

  return (
    <div className="mb-5 flex justify-center tablet:justify-start">
      <p className="flex flex-wrap items-center justify-center gap-x-[6px] rounded-full border border-accent-orange bg-[#fff7e8] px-4 py-[8px] text-center font-sans text-[13px] leading-snug text-[#5c4204] tablet:text-[15px]">
        <span aria-hidden="true">{emoji}</span>
        <span>{prefix}</span>
        <a
          href={suggestionsCta.href}
          className="font-bold underline decoration-2 underline-offset-2 transition-colors hover:text-primary-hover"
        >
          {suggestionsCta.label}
        </a>
        <span>{connector}</span>
        <Link
          href={contributeCta.href}
          className="font-bold underline decoration-2 underline-offset-2 transition-colors hover:text-primary-hover"
        >
          {contributeCta.label}
        </Link>
        <span aria-hidden="true">{emoji}</span>
      </p>
    </div>
  );
}
