import { ArrowLeftIcon } from '@/components/ui/icons';

/** First four fields sit two-per-row (50%); the story and upload are full width. */
const FIELDS = [
  { name: 'name', label: 'שם מלא', type: 'text' },
  { name: 'email', label: 'אימייל', type: 'email' },
  { name: 'school', label: 'בית ספר', type: 'text' },
  { name: 'town', label: 'ישוב', type: 'text' },
] as const;

const INPUT =
  'block min-h-[47px] w-full rounded-[5px] border border-primary/[0.27] bg-white px-4 py-[6px] font-sans text-[18px] leading-[1.4] text-green-text opacity-100 placeholder:text-green-text';

/*
 * TODO(forms): inert, exactly like `startup-kit-form.tsx` — every control is
 * disabled, nothing validates and nothing is submitted.
 *
 * On the original this was Elementor Form `b56c626` on /share-your-story. It
 * POSTed to `wp-admin/admin-ajax.php` and, unlike the kit signup, also carried
 * a **file upload** field ("הוסיפו תמונות וקבצים רלוונטיים") for photos and
 * material to go with the story. Submissions arrived as WordPress form entries
 * for an editor to turn into a post under /stories.
 *
 * Re-enabling needs the same backend decision as the kit form (see its TODO),
 * plus somewhere to put uploaded files — a plain form endpoint won't accept
 * attachments, so this one likely needs object storage (S3/R2/UploadThing) or
 * a service that handles multipart.
 *
 * Until then the fields stay disabled so nobody writes up a long story and
 * loses it on submit.
 */
export function ShareStoryForm() {
  return (
    <form aria-disabled className="w-full">
      <div className="-mx-[5.5px] -mb-[9px] flex flex-wrap">
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className="mb-[9px] w-full px-[5.5px] tablet:w-1/2"
          >
            <label className="sr-only" htmlFor={`story-${field.name}`}>
              {field.label}
            </label>
            <input
              id={`story-${field.name}`}
              name={field.name}
              type={field.type}
              placeholder={field.label}
              disabled
              className={INPUT}
            />
          </div>
        ))}

        <div className="mb-[9px] w-full px-[5.5px]">
          <label className="sr-only" htmlFor="story-body">
            הסיפור שלכם
          </label>
          <textarea
            id="story-body"
            name="story"
            rows={6}
            placeholder="הסיפור שלכם"
            disabled
            className="block w-full rounded-[5px] border border-primary/[0.27] bg-white px-4 py-[10px] font-sans text-[18px] leading-[1.4] text-green-text opacity-100 placeholder:text-green-text"
          />
        </div>

        <div className="mb-[9px] w-full px-[5.5px]">
          <span className="block font-sans text-[16px] leading-[1.4] text-white">
            הוסיפו תמונות וקבצים רלוונטיים
          </span>
          <input
            type="file"
            name="attachments"
            multiple
            disabled
            aria-label="הוסיפו תמונות וקבצים רלוונטיים"
            className="mt-2 block w-full font-sans text-[16px] text-white/80"
          />
        </div>

        <div className="w-full px-[5.5px]">
          <button
            type="submit"
            disabled
            className="mt-[15px] flex min-h-[47px] w-full items-center justify-center rounded-[4px] bg-[#2D622E] px-6 py-[10px] font-sans text-[18px] font-bold leading-none tracking-[0.6px] text-white desktop:text-[20px]"
          >
            <span>שלחו את הסיפור</span>
            <ArrowLeftIcon className="mr-[11px]" />
          </button>
        </div>
      </div>
    </form>
  );
}
