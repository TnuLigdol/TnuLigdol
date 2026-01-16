import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const siteUrl = "https://tnuligdol.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "תנו לגדול על שקט",
    template: "%s | תנו לגדול על שקט",
  },
  description:
    "הטלפון הראשון הוא טלפון בטוח - יוזמה קהילתית להשהיית גיל קבלת הסמארטפון לילדים",
  keywords: [
    "סמארטפון לילדים",
    "טלפון בטוח",
    "גיל קבלת טלפון",
    "ילדים וטכנולוגיה",
    "הורות דיגיטלית",
  ],
  authors: [{ name: "תנו לגדול על שקט" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: "תנו לגדול על שקט",
    title: "תנו לגדול על שקט",
    description: "הטלפון הראשון הוא טלפון בטוח - יוזמה להשהיית גיל קבלת הסמארטפון",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "תנו לגדול על שקט - הטלפון הראשון הוא טלפון בטוח",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "תנו לגדול על שקט",
    description: "הטלפון הראשון הוא טלפון בטוח",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
