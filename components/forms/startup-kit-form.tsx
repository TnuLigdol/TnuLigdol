import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StartupKitFormProps {
  title?: string;
  id?: string;
}

export function StartupKitForm({
  title = 'קבלו את ערכת ההתנעה',
  id = 'startup-kit',
}: StartupKitFormProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Google Form will be embedded here */}
            <div className="bg-muted rounded-lg p-8 text-center text-muted-foreground">
              <p className="mb-4">טופס Google יוטמע כאן</p>
              <p className="text-sm">השאירו פרטים וקבלו את ערכת ההתנעה למייל</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
