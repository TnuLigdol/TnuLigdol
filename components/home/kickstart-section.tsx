import Image from 'next/image';
import { StartupKitForm } from '@/components/forms/startup-kit-form';
import { BoldText } from '@/components/ui/bold-text';
import { homepage } from '@/content';

const { kickstart } = homepage;

/**
 * Elementor sections `b4cfc34` (copy + signup form on a tinted green band) and
 * `8591ae8` (the two cheering kids, pulled up over the band with a -654px
 * margin and hidden below 1025px).
 */
export function KickstartSection() {
  return (
    <>
      <section className="bg-primary/10 px-[10px] pt-[30px] pb-[49px] tablet:px-0 tablet:py-10">
        <div className="mx-auto flex max-w-[1000px] flex-col tablet:flex-row tablet:items-center">
          {/* Copy — 66.5% */}
          <div className="z-[1000] flex w-full flex-col tablet:w-[66.5%]">
            <h2 className="text-center font-sans text-[34px] font-normal leading-none text-primary tablet:text-end tablet:text-[44px]">
              {kickstart.title}
            </h2>
            <div className="text-center font-sans text-[19px] leading-[1.5em] text-primary tablet:text-end">
              <p className="my-[1em]">
                <BoldText>{kickstart.description}</BoldText>
              </p>
            </div>
          </div>

          {/* Form — 33.5% */}
          <div className="z-[1000] mx-[10px] mt-[10px] rounded-t-[20px] px-5 pt-[31px] pb-5 tablet:mx-0 tablet:mt-0 tablet:w-[33.5%] tablet:rounded-[20px] tablet:py-[30px] tablet:pr-[30px] tablet:pl-0">
            <StartupKitForm variant="kickstart" />
          </div>
        </div>
      </section>

      <section
        aria-hidden="true"
        className="pointer-events-none relative z-10 -mt-[654px] hidden desktop:block"
      >
        {/* RTL flex row: the first child sits on the right */}
        <div className="flex items-end py-[10px]">
          <div className="w-1/2 px-[10px] text-right">
            <Image
              src="/images/hero/happy-kid-1.png"
              alt=""
              width={500}
              height={642}
              className="inline-block h-auto w-[500px] max-w-full"
            />
          </div>
          <div className="w-1/2 px-[10px] text-left">
            <Image
              src="/images/hero/happy-kid-2.png"
              alt=""
              width={320}
              height={587}
              className="ml-[49px] inline-block h-auto w-[320px] max-w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
