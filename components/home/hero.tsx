import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/ui/animate-in';
import { ArrowLeftIcon } from '@/components/ui/icons';
import { homepage } from '@/content';

const { hero } = homepage;

/**
 * Elementor section `2d4fbf2`. The negative top margin pulls the green block
 * up under the transparent header, which is why the nav appears to float on
 * the hero.
 *
 * The page is RTL, so in a plain `flex-row` the first child lands on the
 * right — matching the source order of the original's columns.
 */
export function Hero() {
  return (
    <section className="-mt-20 -mb-20 bg-primary tablet:-mt-[91px] tablet:mb-0">
      <div className="mx-auto flex max-w-[1140px] flex-col tablet:min-h-[665px] tablet:flex-row">
        {/* Copy — 52.281% */}
        <div className="relative flex w-full flex-col justify-center tablet:w-[52.281%] tablet:pr-[76px]">
          <DecorativeCircles />

          <div className="mb-5 h-[98px] tablet:h-0" />

          <AnimateIn animation="slideInRight" className="mb-5">
            <h1 className="text-center font-sans text-[42px] font-normal leading-none text-white tablet:text-start tablet:text-[70px]">
              {hero.titleLine1}
            </h1>
          </AnimateIn>

          <AnimateIn animation="slideInRight" delay={200} className="mb-5">
            <h1 className="text-center font-sans text-[58px] font-normal leading-none text-white tablet:text-start tablet:text-[96px]">
              {hero.titleLine2}
            </h1>
          </AnimateIn>

          <div className="mb-5 h-0 tablet:h-[10px]" />

          <AnimateIn
            animation="fadeInUp"
            delay={300}
            className="z-[1000] flex justify-center tablet:justify-start"
          >
            <Link
              href={hero.cta.href}
              className="flex items-center justify-center rounded-[50px] border-2 border-primary bg-green-dark px-[30px] py-[15px] font-sans text-[18px] font-medium leading-none tracking-[0.2px] text-white transition-colors hover:border-white hover:bg-white hover:text-green-dark tablet:text-[24px]"
            >
              <span>{hero.cta.label}</span>
              <ArrowLeftIcon className="mr-[14px]" />
            </Link>
          </AnimateIn>

          <div className="h-0 tablet:h-[73px]" />
        </div>

        {/* Image — 47.719% */}
        <div className="w-full tablet:w-[47.719%]">
          <div className="h-[15px] tablet:h-[62px]" />
          <AnimateIn
            animation="slideInUp"
            className="tablet:ml-[13px] tablet:-mr-[98px]"
          >
            <Image
              src={hero.image}
              alt=""
              width={620}
              height={603}
              priority
              className="mx-auto block h-auto w-full max-w-[620px]"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/**
 * The floating circles behind the hero copy — desktop only, and positioned
 * against the copy column exactly as Elementor's absolute widgets were, so
 * they track the 1140px container rather than the viewport.
 */
function DecorativeCircles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden desktop:block"
    >
      <span className="absolute top-[290px] right-[-138px] size-20 rounded-full bg-circle-orange" />
      <span className="absolute top-[60px] right-[1162px] size-20 rounded-full bg-circle-orange" />
      <span className="absolute top-[448px] right-[1037px] h-[120px] w-[121px] rounded-full border-[10px] border-circle-orange" />
      <span className="absolute top-[-20px] right-[-221px] h-[120px] w-[121px] rounded-full border-[10px] border-circle-orange" />
      <span className="absolute top-[583px] right-[-170px] size-[120px] rounded-full bg-circle-green" />
    </div>
  );
}
