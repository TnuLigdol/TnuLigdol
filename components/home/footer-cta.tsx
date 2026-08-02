import Image from 'next/image';
import { StartupKitForm } from '@/components/forms/startup-kit-form';
import { homepage } from '@/content';

const { footerCta } = homepage;

/**
 * Elementor footer sections `71343f8` (the green card carrying the second
 * signup form, anchored at #kickstart) and `197c6e9` (the winking boy, pulled
 * up over it and hidden below 1025px).
 *
 * On the original these lived in the site-wide footer template. They are
 * scoped to the homepage here until the remaining pages are migrated.
 */
export function FooterCTA() {
  return (
    <>
      <div className="h-[30px] tablet:h-[143px]" />

      <section className="mx-auto max-w-[1000px]">
        <div
          id="kickstart"
          className="flex scroll-mt-[88px] flex-col tablet:scroll-mt-0 tablet:flex-row tablet:items-center"
        >
          {/* Empty green half the boy overlaps — 56.9% */}
          <div className="mx-[10px] rounded-t-[20px] bg-primary p-[31px] tablet:mx-0 tablet:w-[56.9%] tablet:self-stretch tablet:rounded-t-none tablet:rounded-r-[20px] tablet:px-[30px] tablet:py-0">
            <div className="h-0 tablet:h-[50px]" />
          </div>

          {/* Heading + form — 43.1% */}
          <div className="mx-[10px] mb-[10px] rounded-b-[20px] bg-primary px-[30px] pb-[30px] tablet:mx-0 tablet:mb-0 tablet:w-[43.1%] tablet:self-stretch tablet:rounded-b-none tablet:rounded-l-[20px] tablet:py-[55px] tablet:pr-[30px] tablet:pl-[50px]">
            <h2 className="text-center font-sans text-[34px] font-normal leading-none text-white tablet:text-end tablet:text-[44px]">
              {footerCta.title}
            </h2>
            <div className="mt-5 tablet:z-[3000]">
              <StartupKitForm variant="footer" />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-hidden="true"
        className="pointer-events-none relative -mt-[640px] hidden pr-[57px] desktop:block"
      >
        <div className="mx-auto flex max-w-[1140px]">
          <div className="w-[58.07%] p-[10px]">
            <Image
              src={footerCta.image}
              alt="kid playing"
              width={464}
              height={562}
              className="mx-auto block h-auto w-[81%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
