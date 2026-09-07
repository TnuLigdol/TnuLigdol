import type { Metadata } from 'next';
import Link from 'next/link';
import { ContributeStepCard } from '@/components/cards/contribute-step-card';
import { FooterCTA, PageHero } from '@/components/layout';
import { GithubIcon, MailIcon, WarningIcon } from '@/components/ui/icons';
import { contributePage } from '@/content';

export const metadata: Metadata = {
  title: 'רוצים לתרום קוד? · תנו לגדול על שקט',
  description:
    'האתר של תנו לגדול על שקט הוא פרויקט קוד פתוח - כך אפשר לתרום לו קוד דרך GitHub',
};

export default function ContributePage() {
  const {
    intro,
    warningNote,
    warningAlt,
    warningAltLinkLabel,
    steps,
    githubUrl,
    suggestionsCta,
    suggestionsEmail,
  } = contributePage;

  return (
    <>
      <PageHero title="רוצים לתרום קוד?" />

      <div className="mx-auto max-w-[760px] p-[10px] text-center">
        <p className="font-sans text-[18px] leading-[1.5em] text-ink">
          {intro}
        </p>
      </div>

      <div className="mx-auto max-w-[760px] px-[10px]">
        <div className="flex items-start gap-3 rounded-[15px] border-2 border-accent-orange bg-[#fff7e8] p-5 text-right">
          <WarningIcon className="mt-[3px] shrink-0 text-[20px] text-[#8a5a00]" />
          <p className="font-sans text-[15px] leading-[1.5em] text-[#5c4204]">
            {warningNote}
            <br />
            {warningAlt}
            <a
              href={`mailto:${suggestionsEmail}`}
              className="font-bold underline underline-offset-2 hover:text-[#8a5a00]"
            >
              {warningAltLinkLabel}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="h-[34px]" />

      <div className="mx-auto flex max-w-[760px] flex-col gap-4 p-[10px]">
        {steps.map((step, i) => (
          <ContributeStepCard key={step.title} step={step} index={i + 1} />
        ))}
      </div>

      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 p-[10px] pt-[30px] pb-[10px] tablet:flex-row tablet:justify-center">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[10px] rounded-[30px] bg-slate px-6 py-[15px] font-sans text-[17px] leading-none text-white transition-colors hover:bg-green-hover"
        >
          <GithubIcon />
          <span>למאגר הקוד ב-GitHub</span>
        </a>

        <a
          href={suggestionsCta.href}
          className="flex items-center gap-[10px] rounded-[30px] border-2 border-slate px-6 py-[15px] font-sans text-[17px] leading-none text-slate transition-colors hover:bg-slate hover:text-white"
        >
          <MailIcon />
          <span>{suggestionsCta.label}</span>
        </a>
      </div>

      <div className="mx-auto max-w-[760px] p-[10px] pb-[10px] text-center">
        <Link
          href="/"
          className="font-sans text-[15px] text-muted-foreground underline underline-offset-2 hover:text-primary"
        >
          חזרה לעמוד הבית
        </Link>
      </div>

      <FooterCTA />
    </>
  );
}
