import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { phoneGuide } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

export const metadata: Metadata = {
  title: "אני והטלפון שלי | תנו לגדול על שקט",
  description: "תוכנית חינוכית לשימוש מושכל בסמארטפון לכיתות ב׳-ו׳",
};

export default function PhoneGuidePage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {phoneGuide.title}
          </h1>
          <p className="text-xl text-primary font-medium mb-4">
            {phoneGuide.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {phoneGuide.intro.trim()}
          </p>
          <p className="mt-4 text-muted-foreground">
            קהל יעד: {phoneGuide.targetAudience}
          </p>
        </div>

        {/* Sessions */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            ארבעת המפגשים
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {phoneGuide.sessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">{session.icon}</span>
                    {session.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {session.description}
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {session.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Grade 2 Adaptation */}
        <section className="mb-16">
          <Card className="max-w-3xl mx-auto bg-muted/50">
            <CardHeader>
              <CardTitle>{phoneGuide.grade2Adaptation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {phoneGuide.grade2Adaptation.description}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Materials */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            חומרים להורדה
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {phoneGuide.materials.map((material) => (
              <Card key={material.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{material.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {material.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={material.downloadUrl}>הורדה</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Implementation */}
        <section className="mb-16">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>{phoneGuide.implementation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {phoneGuide.implementation.description}
              </p>
              <ul className="space-y-2">
                {phoneGuide.implementation.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

      <StartupKitForm />
    </div>
  );
}
