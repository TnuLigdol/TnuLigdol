import Image from 'next/image';
import Link from 'next/link';
import { homepage } from '@/content';

const { phoneGuide } = homepage;

/**
 * Elementor section `126dae0`: the "אני והטלפון" panel — copy on the right,
 * the teen photo sitting flush on the bottom-left corner.
 */
export function PhoneGuideSection() {
  return (
    <section className="mx-auto mt-[30px] max-w-[1000px]">
      <div className="flex flex-col tablet:flex-row">
        {/* Copy — 58% */}
        <div className="mx-[10px] flex flex-col justify-center rounded-t-[15px] bg-panel-green px-5 pt-[30px] pb-[10px] tablet:mx-0 tablet:w-[58%] tablet:rounded-t-none tablet:rounded-r-[20px] tablet:py-[30px] tablet:pr-[30px] tablet:pl-5">
          <h3 className="mb-5 text-center font-sans text-[29px] font-normal leading-[42px] text-slate tablet:text-end tablet:text-[33px]">
            {phoneGuide.title}
          </h3>

          <div className="mb-5 text-center font-sans text-[18px] leading-[26px] text-slate tablet:text-end">
            <div className="-mt-4 -mb-[7px] tablet:my-0">
              {phoneGuide.paragraphs.map((paragraph) => (
                <p key={paragraph.text} className="my-[1em]">
                  {paragraph.bold ? <b>{paragraph.text}</b> : paragraph.text}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center tablet:justify-start">
            <Link
              href={phoneGuide.cta.href}
              className="rounded-[30px] bg-slate px-5 py-[13px] font-sans text-[18px] leading-[1] text-white transition-colors hover:bg-green-hover"
            >
              {phoneGuide.cta.label}
            </Link>
          </div>

          <div className="h-[10px] tablet:hidden" />
        </div>

        {/* Image — 42%, flush to the bottom */}
        <div className="mx-[10px] flex items-end justify-center rounded-b-[15px] bg-panel-green px-5 pt-[5px] tablet:mx-0 tablet:w-[42%] tablet:rounded-b-none tablet:rounded-l-[20px] tablet:px-0 tablet:pt-5 tablet:pl-[37px]">
          <Image
            src={phoneGuide.image}
            alt=""
            width={305}
            height={491}
            className="h-auto w-full max-w-[305px]"
          />
        </div>
      </div>
    </section>
  );
}
