import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from '@/components/forms/contact-form';
import { FooterCTA } from '@/components/layout';
import { Accordion } from '@/components/ui/accordion';
import { ArrowLeftIcon } from '@/components/ui/icons';
import { phoneGuide } from '@/content';

export const metadata: Metadata = {
  title: 'אני והטלפון · תנו לגדול על שקט',
  description:
    'הרגלים בריאים לשימוש בטלפון חכם — מערך מפגשים מוכן להעברה בכיתה, להורדה חופשית',
};

/** Turns any YouTube URL into its embeddable form. */
function embedUrl(url: string) {
  const short = url.match(/youtu\.be\/([\w-]+)/);
  const long = url.match(/[?&]v=([\w-]+)/);
  const id = short?.[1] ?? long?.[1];
  const start = url.match(/[?&]t=(\d+)/)?.[1];
  if (!id) return url;
  return `https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${start}` : ''}`;
}

function DownloadButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="flex items-center justify-center rounded-[50px] border-t border-card-border bg-[#ebf3ec] px-[20px] py-[13px] text-center font-sans text-[16px] font-bold leading-none tracking-[0.5px] text-[#5ca55c] transition-colors hover:bg-primary hover:text-white"
    >
      <span>{label}</span>
      <ArrowLeftIcon className="mr-[9px]" />
    </a>
  );
}

export default function MeAndMyPhonePage() {
  const { sessions, extras, faq, contact } = phoneGuide;

  return (
    <>
      {/* Sticky strip the original showed above the banner */}
      <div className="bg-primary px-[10px] py-[10px] text-center font-sans text-[16px] leading-[1.4em] text-white desktop:text-[18px]">
        {phoneGuide.banner}
      </div>

      <div className="mx-auto flex max-w-[1140px] flex-col p-[10px]">
        <div className="mb-5 h-[10px]" />

        <h1 className="mb-5 text-center font-sans text-[40px] font-normal leading-tight text-primary desktop:text-[55px]">
          {phoneGuide.title}
        </h1>

        <h2 className="mb-5 whitespace-pre-line text-center font-sans text-[20px] font-normal leading-[1.4em] text-ink desktop:text-[24px]">
          {phoneGuide.subtitle}
        </h2>
      </div>

      <div className="mx-auto max-w-[1000px] px-[10px]">
        <Image
          src={phoneGuide.heroImage.src}
          alt={phoneGuide.heroImage.alt}
          width={phoneGuide.heroImage.width}
          height={phoneGuide.heroImage.height}
          priority
          className="h-auto w-full"
        />

        <div className="mt-[30px] whitespace-pre-line text-right font-sans text-[18px] font-light leading-[1.6em] text-ink">
          {phoneGuide.intro}
        </div>

        <h3 className="mt-[30px] text-right font-sans text-[25px] font-normal leading-tight text-primary">
          {phoneGuide.audience.title}
        </h3>
        <p className="mt-3 text-right font-sans text-[18px] font-light leading-[1.6em] text-ink">
          {phoneGuide.audience.text}
        </p>

        <h3 className="mt-[30px] text-right font-sans text-[25px] font-normal leading-tight text-primary">
          {phoneGuide.approach.title}
        </h3>
        <p className="mt-3 text-right font-sans text-[18px] font-light leading-[1.6em] text-ink">
          {phoneGuide.approach.text}
        </p>
        <p className="mt-3 text-right font-sans text-[18px] font-light leading-[1.6em] text-ink">
          {phoneGuide.approach.closing}
        </p>
      </div>

      {/* The sessions */}
      <div className="mx-auto flex max-w-[1000px] flex-col gap-[40px] px-[10px] pt-[40px]">
        {sessions.map((session) => (
          <section
            key={session.number}
            className="flex flex-col gap-[20px] rounded-[20px] border border-card-border p-[25px] desktop:flex-row"
          >
            <div className="flex flex-col desktop:w-1/2">
              <h3 className="text-right font-sans text-[22px] font-normal leading-tight text-primary">
                {session.number}
              </h3>
              <h3 className="mt-1 text-right font-sans text-[28px] font-normal leading-tight text-green-darkest">
                {session.topic}
              </h3>
              <p className="mt-3 text-right font-sans text-[17px] font-light leading-[1.6em] text-ink">
                {session.description}
              </p>

              {session.downloads.length > 0 && (
                <>
                  <div className="mt-5 flex flex-col gap-3">
                    {session.downloads.map((d) => (
                      <DownloadButton key={d.href} {...d} />
                    ))}
                  </div>
                  <p className="mt-3 text-right font-sans text-[14px] font-light leading-[1.4em] text-ink/70">
                    {phoneGuide.presenterNote}
                  </p>
                </>
              )}
            </div>

            {session.videoUrl && (
              <div className="desktop:w-1/2">
                <div className="relative w-full overflow-hidden rounded-[12px] pb-[56.25%]">
                  <iframe
                    src={embedUrl(session.videoUrl)}
                    title={`${session.number} – ${session.topic}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Extra ideas */}
      <div className="mx-auto max-w-[1000px] px-[10px] pt-[50px]">
        <h3 className="text-center font-sans text-[30px] font-normal leading-tight text-primary">
          {extras.title}
        </h3>

        <div className="mt-[30px] flex flex-col gap-[35px]">
          {extras.items.map((item) => (
            <section key={item.title}>
              <h3 className="text-right font-sans text-[24px] font-normal leading-tight text-green-darkest">
                {item.title}
              </h3>
              <p className="mt-2 text-right font-sans text-[17px] font-light leading-[1.6em] text-ink">
                {item.description}
              </p>

              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="mt-4 h-auto w-full max-w-[300px] rounded-[12px]"
                />
              )}

              {item.downloads.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.downloads.map((d) => (
                    <DownloadButton key={d.href} {...d} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-[1000px] px-[10px] pt-[50px]">
        <h2 className="mb-[25px] text-center font-sans text-[35px] font-normal leading-none text-green-dark desktop:text-[41px]">
          {faq.title}
        </h2>
        <Accordion items={faq.items} />
      </div>

      {/* Contact */}
      <div className="mx-auto max-w-[1000px] px-[10px] pt-[50px]">
        <h2 className="text-center font-sans text-[30px] font-normal leading-tight text-primary">
          {contact.title}
        </h2>
        <p className="mt-3 text-center font-sans text-[18px] font-light leading-[1.6em] text-ink">
          {contact.text}
        </p>
        <div className="mt-5">
          <ContactForm />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1000px] justify-center px-[10px] pt-[50px]">
        <Image
          src={phoneGuide.logo.src}
          alt={phoneGuide.logo.alt}
          width={phoneGuide.logo.width}
          height={phoneGuide.logo.height}
          className="h-auto w-full max-w-[260px]"
        />
      </div>

      <FooterCTA />
    </>
  );
}
