import Image from 'next/image';
import Link from 'next/link';
import { homepage } from '@/content';

const { shareStory } = homepage;

/**
 * Elementor section `b7a0b83`: a grey panel with the copy on the right and a
 * flush image on the left, stacking into a single rounded card on mobile.
 */
export function ShareStorySection() {
  return (
    <section className="mx-auto max-w-[1000px]">
      <div className="flex flex-col tablet:flex-row">
        {/* Copy — 50% */}
        <div className="mx-[10px] flex flex-col justify-center rounded-t-[15px] bg-panel-gray px-5 pt-[30px] pb-[10px] tablet:mx-0 tablet:w-1/2 tablet:rounded-t-none tablet:rounded-r-[20px] tablet:py-0 tablet:pr-[30px] tablet:pl-5">
          <h3 className="mb-5 text-center font-sans text-[29px] font-normal leading-none text-slate tablet:text-end tablet:text-[37px]">
            {shareStory.title}
          </h3>

          <div className="mb-5 text-center font-sans text-[18px] leading-[26px] text-slate tablet:text-end">
            <div className="-mt-4 -mb-[7px] tablet:my-0">
              <p className="my-[1em]">{shareStory.description}</p>
            </div>
          </div>

          <div className="flex justify-center tablet:justify-start">
            <Link
              href={shareStory.cta.href}
              className="rounded-[30px] bg-slate px-5 py-[13px] font-sans text-[18px] leading-[1] text-white transition-colors hover:bg-green-hover"
            >
              {shareStory.cta.label}
            </Link>
          </div>

          <div className="h-[10px] tablet:hidden" />
        </div>

        {/* Image — 50% */}
        <div className="mx-[10px] flex flex-col justify-center rounded-b-[15px] bg-panel-gray px-5 pt-[5px] tablet:mx-0 tablet:w-1/2 tablet:rounded-b-none tablet:rounded-l-[20px] tablet:pt-0 tablet:pr-[30px] tablet:pl-5">
          <div className="mb-5 h-[10px]" />
          <Image
            src={shareStory.image}
            alt=""
            width={853}
            height={510}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
