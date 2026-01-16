import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "שתפו את הסיפור שלכם | תנו לגדול על שקט",
  description: "ספרו לנו על היוזמה בקהילה שלכם",
};

const storyCategories = [
  "איך התנעתם את היוזמה בקהילה שלכם",
  "סיפורי הצלחה של רכישת טלפונים או דיונים בבית הספר",
  "מכשולים שנתקלתם בהם בדרך",
  "מקרים אמיתיים שממחישים את הנזקים של סמארטפונים",
  "חומרים מקוריים שיצרתם",
  "נושאים רלוונטיים לקהילה",
];

export default function ShareYourStoryPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            שתפו את הסיפור שלכם
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            הסיפורים שלכם מעוררים השראה לקהילות נוספות להצטרף ליוזמה
          </p>
        </div>

        {/* Guidelines */}
        <Card className="max-w-3xl mx-auto mb-12">
          <CardHeader>
            <CardTitle>אילו סיפורים אנחנו מחפשים?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {storyCategories.map((category, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{category}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              ניתן לשלוח גם פוסטים ששיתפתם בעבר בקבוצת הפייסבוק שלנו.
            </p>
          </CardContent>
        </Card>

        {/* Google Form Placeholder */}
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">טופס שליחת סיפור</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Replace this with actual Google Form embed */}
            <div className="bg-muted rounded-lg p-12 text-center">
              <p className="text-muted-foreground mb-4">
                טופס Google לשליחת סיפורים יוטמע כאן
              </p>
              <p className="text-sm text-muted-foreground">
                השדות: שם, אימייל, בית ספר, יישוב, תוכן הסיפור, צירוף קבצים
              </p>
            </div>

            {/* Note about photos */}
            <p className="mt-6 text-sm text-muted-foreground text-center">
              אם אתם מצרפים תמונות בהן מצולמים ילדים, אנא ודאו שהוריהם מאשרים
              את פרסום התמונות באתר.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
