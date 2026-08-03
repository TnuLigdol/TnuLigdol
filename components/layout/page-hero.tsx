/**
 * The green curved banner Elementor's theme opens every non-home page with —
 * same section on /media, /legal, /articles, /stories, /the-team etc., only
 * the title changes. The negative top margin pulls it up under the
 * transparent header, exactly like the homepage hero does.
 */
export function PageHero({ title }: { title: string }) {
  return (
    <section className="relative -mt-[92px] overflow-hidden bg-primary pt-[100px] pb-[60px] tablet:pb-[10px]">
      <h1 className="relative z-10 text-center font-sans text-[35px] font-normal leading-tight text-white desktop:text-[56px]">
        {title}
      </h1>

      <svg
        aria-hidden="true"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-[-21.5%] bottom-[-1px] h-[70px] w-[143%] fill-background desktop:h-[100px]"
      >
        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
      </svg>
    </section>
  );
}
