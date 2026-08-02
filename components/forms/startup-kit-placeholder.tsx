import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/*
 * TODO(migration): placeholder kept only so the not-yet-migrated pages
 * (/articles, /legal, /me-and-my-phone, /media, /stories) keep rendering
 * exactly what they rendered before the homepage rebuild. Delete this file
 * once those pages are ported and can use `StartupKitForm` — see the TODO in
 * ./startup-kit-form.tsx for what the real form still needs.
 */
interface StartupKitPlaceholderProps {
  title?: string;
  id?: string;
  variant?: 'light' | 'dark';
  hideTitle?: boolean;
}

export function StartupKitPlaceholder({
  title = 'קבלו את ערכת ההתנעה',
  id = 'startup-kit',
  variant = 'light',
  hideTitle = false,
}: StartupKitPlaceholderProps) {
  if (variant === 'dark') {
    return (
      <Card className="bg-white/95 backdrop-blur">
        {!hideTitle && (
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center text-primary">
              {title}
            </CardTitle>
          </CardHeader>
        )}
        <CardContent className={hideTitle ? 'pt-6' : ''}>
          <div className="bg-muted rounded-lg p-8 text-center text-muted-foreground">
            <p className="mb-4">טופס Google יוטמע כאן</p>
            <p className="text-sm">השאירו פרטים וקבלו את ערכת ההתנעה למייל</p>
          </div>
        </CardContent>
      </Card>
    );
  }

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
