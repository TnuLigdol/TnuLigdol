import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { Footer, Header } from '@/components/layout';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tnuligdol.co.il';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'תנו לגדול על שקט',
    template: '%s | תנו לגדול על שקט',
  },
  description:
    'הטלפון הראשון הוא טלפון בטוח - יוזמה קהילתית להשהיית גיל קבלת הסמארטפון לילדים',
  authors: [{ name: 'תנו לגדול על שקט' }],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: siteUrl,
    siteName: 'תנו לגדול על שקט',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'תנו לגדול על שקט - הטלפון הראשון הוא טלפון בטוח',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        {/* TODO: Restore this asap: <Header /> */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
