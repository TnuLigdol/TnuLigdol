import type { Metadata } from 'next';
import Link from 'next/link';
import { DevicesSection } from '@/components/devices/devices-section';
import { PageHero } from '@/components/layout';
import { ArrowLeftIcon } from '@/components/ui/icons';
import { devices } from '@/content';

export const metadata: Metadata = {
  title: 'מכשירים · תנו לגדול על שקט',
  description: 'טלפונים בטוחים לילדים: השוואת מכשירים, מחירים ותכונות עיקריות',
};

export default function DevicesPage() {
  return (
    <>
      <PageHero title="טלפונים בטוחים לילדים" />

      <div className="mx-auto max-w-[1140px] p-[10px]">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-center font-sans text-[30px] font-normal leading-tight text-primary">
            למה טלפון בטוח?
          </h2>

          <p className="mt-5 text-right font-sans text-[16px] leading-[1.6em] text-ink">
            חברות הטכנולוגיה הגדולות משקיעות מיליארדים בהפיכת הטלפונים החכמים
            למושכים, נגישים וקשים להנחה מהיד. הפיתוי גדול, ולא תמיד ילדים
            צעירים בשלים להתמודד איתו. מחקרים מראים שכאשר שוקלים את היתרונות
            מול החסרונות, עדיף להתחיל בטלפון בטוח ולדחות את המעבר לטלפון חכם
            עד לגיל שבו הילדים בשלים יותר להשתמש בו.
          </p>

          <p className="mt-3 text-right font-sans text-[16px] leading-[1.6em] text-ink">
            המטרה שלנו אינה למנוע תקשורת או עצמאות – להפך. טלפון בטוח מאפשר
            להתקשר להורים, לתאם איסוף מהחוג ולקבוע מפגש עם חבר או חברה. את כל
            זה אפשר לעשות גם בלי טלפון חכם.
          </p>

          <p className="mt-3 text-right font-sans text-[16px] leading-[1.6em] text-ink">
            אם אפשר, כדאי לקבל את ההחלטה יחד, ברמה הכיתתית. כך אף ילד לא נשאר
            ״היחיד בלי טלפון״, ואף ילדה אינה צריכה להיות ״הראשונה עם טלפון
            חכם״.
          </p>

          <p className="mt-5 text-right font-sans text-[14px] leading-[1.5em] text-ink/60">
            שימו לב: במכשירים שאין בהם GPS מובנה, אפשר לרכוש AirTag בנפרד
            ולחבר אותו למכשיר לצורך איתור מיקומו.
          </p>
        </div>

        <div className="h-[30px]" />

        <div className="mb-[15px] flex justify-end">
          <Link
            href="/suppliers"
            className="inline-flex items-center rounded-[30px] border border-card-border px-5 py-[10px] font-sans text-[14px] font-bold text-green-darkest transition-colors hover:border-primary hover:text-primary"
          >
            <span>לרשימת הספקים</span>
            <ArrowLeftIcon className="mr-2" />
          </Link>
        </div>

        <DevicesSection devices={devices} />
      </div>

      <div className="h-[60px]" />

      {/* <FooterCTA /> */}
    </>
  );
}
