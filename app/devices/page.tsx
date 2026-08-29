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
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-sans text-[16px] leading-[1.5em] text-ink">
            רשימת המכשירים שקבוצות הורים רכשו במסגרת רכישות מרוכזות: טלפוני
            כפתורים פשוטים לשיחות והודעות טקסט, וכן שעון-טלפון עם GPS לילדים
            צעירים יותר. לחצו על מכשיר לפרטים המלאים ולקישור לספק.
          </p>
          <p className="mt-3 font-sans text-[14px] leading-[1.5em] text-ink/60">
            שימו לב: במכשירים ללא GPS מובנה ניתן לרכוש ולחבר AirTag בנפרד לצורך
            איתור המיקום.
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
