import type React from "react";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cairo,
  Space_Grotesk,
  Inter,
} from "next/font/google";
import { ThemeProvider } from "@/lib/theme/theme-provider";
import { isRTL, type Locale } from "@/lib/i18n/config";
import { MotionProvider } from "@/components/providers";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: "en" | "ar" };

  const titles = {
    en: "HighFive - Digital Transformation & AI Solutions",
    ar: "هاي فايف - التحول الرقمي وحلول الذكاء الاصطناعي",
  };

  const descriptions = {
    en: "Leading tech company providing web development, mobile apps, AI solutions, and social media content for global businesses. Transform your digital vision with HighFive.",
    ar: "شركة تقنية رائدة توفر تطوير الويب، تطبيقات الموبايل، حلول الذكاء الاصطناعي، ومحتوى السوشيال ميديا للشركات العالمية. حول رؤيتك الرقمية مع هاي فايف.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    generator: "Next.js",
    applicationName: "HighFive",
    keywords: [
      "web development",
      "mobile apps",
      "AI solutions",
      "social media",
      "digital transformation",
      "Flutter",
      "React",
      "Next.js",
    ],
    authors: [{ name: "HighFive" }],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
    },
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
    metadataBase: new URL(process.env.SITE_URL!),
    alternates: {
      canonical: `/${locale === "en" ? "" : locale}`,
      languages: {
        en: "/",
        ar: "/ar",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const dir = isRTL(locale) ? "rtl" : "ltr";
  const fontClass = locale === "ar" ? cairo.variable : inter.variable;

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${fontClass} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
