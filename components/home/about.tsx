import { BoldText } from '@/components/ui/bold-text';
import { homepage } from '@/content';

const { about } = homepage;

/**
 * Elementor section `2845cec`: a half-green / half-tinted background with a
 * white rounded card floating over the seam.
 *
 * The card is a flex column so that, as in Elementor, the 20px widget spacing
 * and the paragraphs' own `1em` margins add up instead of collapsing.
 */
export function About() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#66B768_50%,rgba(102,183,104,0.1)_50%)]">
      <div className="mx-auto flex max-w-[1000px] flex-col">
        <div className="flex flex-col bg-white p-5 tablet:-mt-[72px] tablet:rounded-[30px] tablet:p-[70px] tablet:shadow-[0px_-4px_33px_-13px_rgba(0,0,0,0.13)]">
          <div className="mb-5 h-5 tablet:h-[10px]" />

          <h2 className="mb-5 text-center font-sans text-[35px] font-normal leading-none text-green-dark tablet:text-[50px]">
            {about.title}
          </h2>

          <h3 className="mb-5 text-center font-sans text-[24px] font-normal leading-none text-green-dark tablet:text-[30px]">
            {about.subtitle}
          </h3>

          <div className="mb-5 h-0 tablet:h-[10px]" />

          <div className="mb-5 text-justify font-sans text-[19px] leading-[1.5em] text-green-text">
            {about.intro.map((paragraph) => (
              <p key={paragraph} className="my-[1em]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-5 text-justify font-sans text-[22px] leading-[1.5em] text-green-text">
            <div className="-my-[25px]">
              <p className="my-[1em]">
                <BoldText>{about.highlight}</BoldText>
              </p>
            </div>
          </div>

          <div className="mb-5 text-justify font-sans text-[19px] leading-[1.5em] text-green-text">
            {about.body.map((paragraph) => (
              <p key={paragraph} className="my-[1em]">
                <BoldText>{paragraph}</BoldText>
              </p>
            ))}
          </div>

          <div className="mb-5 text-center font-sans text-[22px] leading-[1.5em] text-green-text">
            <div className="tablet:-my-[25px]">
              <p className="my-[1em]">
                <BoldText>{about.closing}</BoldText>
              </p>
            </div>
          </div>

          <div className="h-0 tablet:h-[76px]" />
        </div>
      </div>
    </section>
  );
}
