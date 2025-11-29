import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo, Noto_Sans_Arabic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

import "./globals.css";

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const _notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "highfive - IT Solutions & Digital Services",
  description:
    "Specialized in Mobile & Web Solutions, IT Research Papers, AI-Powered Student Projects, and Professional Document Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${_geist.variable} ${_geistMono.variable} ${_notoSansArabic.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
            {/* <Analytics /> */}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
