import { ArrowLeftIcon } from '@/components/ui/icons';

const FIELDS = [
  { name: 'name', label: 'שם', type: 'text' },
  { name: 'email', label: 'אימייל', type: 'email' },
] as const;

/*
 * TODO(forms): inert, like the other two forms on the site — every control is
 * disabled, nothing validates and nothing is submitted.
 *
 * On the original this was Elementor Form `2baf5b7` at the bottom of
 * /me-and-my-phone ("ספרו לנו"), the page's contact + "we ran the project"
 * report box. It POSTed to `wp-admin/admin-ajax.php` and emailed the team.
 *
 * Re-enabling needs the same backend decision as the kit form — see the TODO
 * in `startup-kit-form.tsx`.
 */
export function ContactForm() {
  return (
    <form aria-disabled className="w-full">
      <div className="-mx-[5.5px] -mb-[9px] flex flex-wrap">
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className="mb-[9px] w-full px-[5.5px] tablet:w-1/2"
          >
            <label className="sr-only" htmlFor={`contact-${field.name}`}>
              {field.label}
            </label>
            <input
              id={`contact-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.label}
              disabled
              className="block min-h-[47px] w-full rounded-[5px] border border-primary/[0.27] bg-white px-4 py-[6px] font-sans text-[18px] leading-[1.4] text-green-text opacity-100 placeholder:text-green-text"
            />
          </div>
        ))}

        <div className="mb-[9px] w-full px-[5.5px]">
          <label className="sr-only" htmlFor="contact-message">
            הודעה
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="הודעה"
            disabled
            className="block w-full rounded-[5px] border border-primary/[0.27] bg-white px-4 py-[10px] font-sans text-[18px] leading-[1.4] text-green-text opacity-100 placeholder:text-green-text"
          />
        </div>

        <div className="w-full px-[5.5px]">
          <button
            type="submit"
            disabled
            className="mt-[15px] flex min-h-[47px] items-center justify-center rounded-[4px] bg-primary px-8 py-[10px] font-sans text-[18px] font-bold leading-none tracking-[0.6px] text-white"
          >
            <span>שליחה</span>
            <ArrowLeftIcon className="mr-[11px]" />
          </button>
        </div>
      </div>
    </form>
  );
}
