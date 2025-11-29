"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Transform Your Digital Vision",
    "hero.subtitle": "Into Reality",
    "hero.description":
      "Specialized in Mobile & Web Solutions, IT Research Papers, AI-Powered Student Projects, and Professional Document Services",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Learn More",

    // Services
    "services.title": "Our Expertise",
    "services.subtitle": "Comprehensive IT Solutions",
    "services.mobile.title": "Mobile & Web Development",
    "services.mobile.description":
      "Cutting-edge mobile and web applications built with the latest technologies",
    "services.research.title": "IT Research Papers",
    "services.research.description":
      "Professional research papers and technical documentation for academic excellence",
    "services.projects.title": "Student Projects",
    "services.projects.description":
      "AI-powered student projects with innovative solutions and modern implementations",
    "services.documents.title": "Professional Documents",
    "services.documents.description":
      "Expert CV design and professional office document creation",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Our Work Portfolio",
    "projects.viewProject": "View Project",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's Build Something Amazing Together",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.projects": "المشاريع",
    "nav.contact": "اتصل بنا",

    // Hero
    "hero.title": "حول رؤيتك الرقمية",
    "hero.subtitle": "إلى واقع",
    "hero.description":
      "متخصصون في حلول الهاتف المحمول والويب، أوراق البحث التقني، مشاريع الطلاب بتقنيات الذكاء الاصطناعي، وخدمات المستندات الاحترافية",
    "hero.cta.primary": "ابدأ الآن",
    "hero.cta.secondary": "اعرف المزيد",

    // Services
    "services.title": "خبراتنا",
    "services.subtitle": "حلول تقنية شاملة",
    "services.mobile.title": "تطوير الهاتف والويب",
    "services.mobile.description":
      "تطبيقات هاتف محمول وويب متطورة مبنية بأحدث التقنيات",
    "services.research.title": "أوراق البحث التقني",
    "services.research.description":
      "أوراق بحثية احترافية ووثائق تقنية للتميز الأكاديمي",
    "services.projects.title": "مشاريع الطلاب",
    "services.projects.description":
      "مشاريع طلابية مدعومة بالذكاء الاصطناعي مع حلول مبتكرة وتطبيقات حديثة",
    "services.documents.title": "المستندات الاحترافية",
    "services.documents.description":
      "تصميم السيرة الذاتية وإنشاء مستندات المكتب الاحترافية",

    // Projects
    "projects.title": "مشاريعنا المميزة",
    "projects.subtitle": "معرض أعمالنا",
    "projects.viewProject": "عرض المشروع",

    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "لنبني شيئًا رائعًا معًا",
    "contact.name": "اسمك",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "رسالتك",
    "contact.send": "إرسال الرسالة",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.phone": "الهاتف",
    "contact.info.address": "العنوان",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem(
      "highfive_pref_lang"
    ) as Language | null;
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("highfive_pref_lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
