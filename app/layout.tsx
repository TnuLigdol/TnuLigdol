import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "תנו לגדול על שקט",
  description: "הטלפון הראשון הוא טלפון בטוח - יוזמה להשהיית גיל קבלת הסמארטפון",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
