import type { ContributeStep } from '@/content';

/**
 * One numbered step on /contribute — a bordered card matching the rest of
 * the site's card language (see LegalCard), with a circular step number
 * standing in for an icon.
 */
export function ContributeStepCard({
  step,
  index,
}: {
  step: ContributeStep;
  index: number;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[20px] border border-card-border p-5 transition-shadow hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)] tablet:p-[25px]">
      <span className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-primary font-sans text-[18px] font-bold leading-none text-white">
        {index}
      </span>

      <div>
        <h3 className="mb-[6px] font-sans text-[19px] font-semibold leading-tight text-green-darkest">
          {step.title}
        </h3>
        <p className="font-sans text-[16px] leading-[1.5em] text-ink">
          {step.description}
        </p>
      </div>
    </div>
  );
}
