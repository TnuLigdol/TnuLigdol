import type { Metadata } from 'next';
import Image from 'next/image';
import { ShareStoryForm } from '@/components/forms/share-story-form';
import { FooterCTA } from '@/components/layout';
import { ArrowLeftIcon } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'שתפו את הסיפור שלכם · תנו לגדול על שקט',
  description:
    'הכח של הקהילה שלנו הוא בשיתוף ידע. תנו רעיונות, המלצות והשראה להורים הבאים שירימו את היוזמה בקהילה שלכם.',
};

/** The "what we're looking for" list, verbatim from the original. */
const WANTED = [
  'איך התנעתם את היוזמה בקהילה שלכם',
  'סיפורי הצלחה: רכישה מרוכזת שהצליחה, יצירת שיח בבית הספר, הצלחה לשכנע הורים שהתנגדו…',
  'קשיים שנתקלתם בהם בהתנעת היוזמה',
  'נזקי הסמארטפונים – מקרים אמיתיים שנתקלתם בהם',
  'חומרים שיצרתם ותרצו לשתף עם הקהילה',
  'כל נושא אחר שיכול לעניין את הקהילה',
  'מותר לשלוח גם סיפורים שכתבת בעבר בקבוצת הפייסבוק כפוסט. זה אפילו יהיה נפלא!',
];

/** Notes beside the form, on the green panel's left half. */
const UPLOAD_NOTES = [
  'תוכלו להוסיף כקובץ גם חומרים שיצרתם בתהליך כמו מכתב להורים, פלאייר שחולק, תמונות שצולמו ביריד טלפונים ועוד.',
  'תוכלו גם להעלות מסמך word עם הכתבה שלכם.',
  'אם אתם מצרפים תמונות בהן מצולמים גם ילדים, אנא ודאו שהוריהם מאשרים את פרסום התמונות באתר. אנו יוצאים מנקודת הנחה שתמונות שנשלחו מאושרות לפרסום.',
];

/**
 * Unlike the other inner pages, this one has no green curved banner — the
 * original opened straight into a right-aligned heading on white.
 */
export default function ShareYourStoryPage() {
  return (
    <>
      <div className="mx-auto flex max-w-[1140px] flex-col p-[10px]">
        <div className="mb-5 h-[20px]" />

        <h1 className="mb-5 text-right font-sans text-[35px] font-normal leading-tight text-primary desktop:text-[45px]">
          שתפו את הסיפור שלכם
        </h1>

        <div className="text-right font-sans text-[19px] font-light leading-[1.6em] text-ink">
          <p className="my-[1em]">
            הכח של הקהילה שלנו הוא בשיתוף ידע. תנו רעיונות, המלצות והשראה להורים
            הבאים שירימו את היוזמה בקהילה שלכם – הם מחכים לסיפורים שלכם, לעצות
            שלכם. הניסיון המצטבר של כולנו יביא אותנו להצלחה.
          </p>
        </div>
      </div>

      {/* What we're looking for — list on the right (44.2%), photo on the left */}
      <div className="mx-auto max-w-[1000px] px-[15px] pt-[15px] desktop:px-[10px] desktop:pt-0">
        <div className="flex flex-col desktop:flex-row">
          <div className="w-full p-[10px] desktop:w-[44.2%]">
            <div className="h-[10px]" />

            <h3 className="mt-5 mb-5 text-right font-sans text-[35px] font-normal leading-tight text-primary desktop:text-[25px]">
              הסיפורים שאנחנו מחפשים:
            </h3>

            <ul className="flex flex-col gap-[12px]">
              {WANTED.map((item) => (
                <li key={item} className="flex items-start">
                  <ArrowLeftIcon className="mt-[7px] ml-[9px] shrink-0 text-primary" />
                  <span className="font-sans text-[18px] leading-[1.4em] text-green-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full items-center p-[10px] desktop:w-[55.8%]">
            <Image
              src="/images/stories/share-your-story.jpg"
              alt=""
              width={800}
              height={510}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Green submission panel: form on the right (69.5%), notes on the left */}
      <div className="mx-auto max-w-[1000px] px-[10px]">
        <div className="h-[21px]" />

        <div className="flex flex-col desktop:flex-row">
          <div className="w-full bg-primary p-[40px] desktop:w-[69.5%] desktop:rounded-l-none desktop:rounded-r-[15px]">
            <h3 className="mt-[10px] mb-5 text-right font-sans text-[35px] font-normal leading-tight text-white desktop:text-[28px]">
              ספרו לנו מה קרה בקהילה שלכם
            </h3>
            <ShareStoryForm />
          </div>

          <div className="w-full bg-primary p-[40px] desktop:w-[30.456%] desktop:rounded-l-[15px] desktop:rounded-r-none">
            <ul className="flex flex-col gap-[12px]">
              {UPLOAD_NOTES.map((note) => (
                <li key={note.slice(0, 24)} className="flex items-start">
                  <ArrowLeftIcon className="mt-[6px] ml-[9px] shrink-0 text-white" />
                  <span className="font-sans text-[16px] leading-[1.4em] text-white">
                    {note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-[50px]" />
      </div>

      <FooterCTA />
    </>
  );
}
