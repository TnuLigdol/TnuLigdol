import { ArrowLeftIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

const FIELDS = [
  { name: 'name', label: 'שם', placeholder: 'שם מלא', type: 'text' },
  { name: 'city', label: 'עיר', placeholder: 'עיר', type: 'text' },
  { name: 'school', label: 'בית ספר', placeholder: 'בית ספר', type: 'text' },
  {
    name: 'email',
    label: 'דואר אלקטרוני',
    placeholder: 'דואר אלקטרוני',
    type: 'email',
  },
] as const;

interface StartupKitFormProps {
  /** Field gutter, row spacing and button colour differ between placements. */
  variant: 'kickstart' | 'footer';
  className?: string;
}

/*
 * TODO(forms): this form is intentionally inert — every control is disabled,
 * nothing is validated and nothing is submitted.
 *
 * On the WordPress original the same form appeared twice (Elementor Forms
 * `9f5d1a5` in the page body and `366bfc1` in the footer). Both POSTed to
 * `wp-admin/admin-ajax.php` behind an invisible Google reCAPTCHA v3 widget
 * (site key 6Ld3l8YUAAAAAHaHUlsBPRtzTDCPkvCEXwJIAhRY), and on success the
 * backend
 *   1. stored the lead in the WordPress database,
 *   2. emailed the submitter a download link for the "ערכת ההתנעה" archive,
 *   3. opened Elementor popup #935, whose copy was:
 *      "ערכת ההתנעה תרד למחשב שלך בעוד מספר שניות.
 *       הכי קל לפתוח את הקובץ עם תוכנת כיווץ כמו Winzip דרך המחשב, ולכן שלחנו
 *       לך גם אימייל עם קישור להורדה ופרטים נוספים.
 *       אם בכל זאת משהו לא מסתדר – אפשר לדבר איתנו בפייסבוק."
 *
 * None of that survives the migration: next.config.ts sets `output: 'export'`,
 * so the site is fully static and there is no endpoint to POST to. Re-enabling
 * this needs a backend decision first:
 *   a) a third-party form endpoint (Formspree / Google Forms / Netlify Forms)
 *      — keeps the static export; needs an endpoint URL and a spam guard; or
 *   b) a Next.js route handler or server action plus an email provider —
 *      requires dropping `output: 'export'` and changing how we deploy.
 *
 * Once that is settled this component still needs: controlled inputs, the
 * required-field validation the original had, a bot challenge, the success
 * popup above, and the actual kit download link.
 *
 * Until then the fields stay disabled so nobody types their details into a
 * form that silently drops them. The classes below deliberately neutralise the
 * browser's default disabled styling so the section still looks like the
 * original.
 */
export function StartupKitForm({ variant, className }: StartupKitFormProps) {
  const isFooter = variant === 'footer';

  return (
    <form aria-disabled className={cn('w-full', className)}>
      <div
        className={cn(
          'flex flex-wrap',
          isFooter ? '-mx-[11.5px] -mb-3' : '-mx-[5.5px] -mb-[9px]',
        )}
      >
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className={cn(
              'w-full',
              isFooter ? 'mb-3 px-[11.5px]' : 'mb-[9px] px-[5.5px]',
            )}
          >
            <label className="sr-only" htmlFor={`kit-${variant}-${field.name}`}>
              {field.label}
            </label>
            <input
              id={`kit-${variant}-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              disabled
              className="block min-h-[47px] w-full rounded-[5px] border border-primary/[0.27] bg-white px-4 py-[6px] font-sans text-[18px] leading-[1.4] text-green-text opacity-100 placeholder:text-green-text"
            />
          </div>
        ))}

        <div
          className={cn(
            'flex w-full justify-center',
            isFooter ? 'px-[11.5px] tablet:justify-stretch' : 'px-[5.5px]',
          )}
        >
          <button
            type="submit"
            disabled
            className={cn(
              'mt-[15px] flex min-h-[47px] items-center justify-center rounded-[4px] font-sans text-[18px] font-bold leading-none tracking-[0.6px] text-white tablet:text-[20px]',
              isFooter
                ? 'bg-green-dark px-[30px] py-[15px] tablet:w-full'
                : 'bg-primary px-6 py-[10px]',
            )}
          >
            <span>הורידו את ערכת ההתנעה</span>
            <ArrowLeftIcon className="mr-[11px]" />
          </button>
        </div>
      </div>
    </form>
  );
}
