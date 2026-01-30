import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | תנו לגדול על שקט',
  description: 'מדיניות הפרטיות של אתר תנו לגדול על שקט',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          מדיניות פרטיות
        </h1>

        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">כללי</h2>
            <p>
              אתר &quot;תנו לגדול על שקט&quot; מכבד את פרטיות המבקרים. מדיניות זו מתארת
              אילו מידע נאסף, כיצד הוא משמש ואפשרויות הבחירה שלכם.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">איסוף מידע</h2>
            <p>
              אנו עשויים לאסוף מידע שהמשתמש מספק בהרשמה או בפניה (דוא&quot;ל, שם),
              וכן נתוני גלישה וטכנולוגיות כגון Cookies למטרות סטטיסטיקה ושיפור
              החוויה באתר.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">שימוש במידע</h2>
            <p>
              המידע משמש להפעלת השירות, לתקשורת עמכם, לניתוח שימוש באתר ולשיפור
              התוכן. לא נמכור את פרטיכם לצדדים שלישיים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">יצירת קשר</h2>
            <p>
              לשאלות בנושא פרטיות ניתן לפנות אלינו באמצעות פרטי ההתקשרות המופיעים
              באתר.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
