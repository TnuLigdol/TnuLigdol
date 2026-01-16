import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { legal } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

export const metadata: Metadata = {
  title: "חקיקה | תנו לגדול על שקט",
  description: "הנחיות רשמיות בנוגע לשימוש בטלפונים ניידים בבתי ספר",
};

export default function LegalPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {legal.title}
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16">
          {legal.subtitle}
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {legal.documents.map((doc) => (
            <Card key={doc.title}>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {doc.authority} •{" "}
                  {new Date(doc.date).toLocaleDateString("he-IL")}
                </div>
                <CardTitle className="text-xl">{doc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{doc.description}</p>
                <Button asChild>
                  <Link href={doc.downloadUrl} target="_blank">
                    הורדת המסמך (PDF)
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <StartupKitForm />
    </div>
  );
}
