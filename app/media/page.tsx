import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mediaCoverage } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

export const metadata: Metadata = {
  title: "מדיה | תנו לגדול על שקט",
  description: "סיקור תקשורתי של היוזמה בכלי התקשורת המובילים",
};

export default function MediaPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          מדיה
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16">
          כתבו עלינו בכלי התקשורת המובילים
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mediaCoverage.map((item) => (
            <Link
              key={item.id}
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-primary font-bold text-lg mb-2">
                    {item.publication}
                  </div>
                  <CardTitle className="text-base leading-tight">
                    {item.headline}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {item.author && <span>{item.author} • </span>}
                    {new Date(item.date).toLocaleDateString("he-IL")}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <StartupKitForm />
    </div>
  );
}
