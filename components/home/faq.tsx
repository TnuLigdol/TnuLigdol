import { homepage } from '@/content';

const { faq } = homepage;

/**
 * Elementor sections `f109db4` + `0e23742`…`42d0438`: the heading followed by
 * one two-column row per question. Never an accordion — just plain rows, with
 * the question on the right and the answer on the left.
 */
export function FAQ() {
  return (
    <>
      <div className="h-[50px] tablet:h-[58px]" />

      <section className="mx-auto flex max-w-[1140px] flex-col p-[10px]">
        <h2 className="mb-5 text-center font-sans text-[35px] font-normal leading-none text-green-dark tablet:text-[41px]">
          {faq.title}
        </h2>
        <div className="h-0 tablet:h-[10px]" />
      </section>

      {faq.items.map((item, index) => (
        <section
          key={item.question}
          className="mx-auto max-w-[1000px] px-5 tablet:px-0"
        >
          <div className="flex flex-col tablet:flex-row">
            {/* Question — 33% */}
            <div
              className={`w-full p-[10px] tablet:w-[33%] ${
                index < 4 ? 'tablet:mt-[22px]' : 'tablet:mt-[3px]'
              }`}
            >
              <h3 className="text-start font-sans text-[24px] font-normal leading-none text-green-darkest tablet:text-[22px]">
                {item.question}
              </h3>
            </div>

            {/* Answer — 67% */}
            <div className="w-full p-[10px] tablet:w-[67%]">
              <div className="-mt-[15px] text-justify font-sans text-[17px] leading-[1.5em] text-green-darkest tablet:mt-0">
                <p className="my-[1em]">{item.answer}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
