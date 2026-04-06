import { getTranslations } from "@/lib/i18n/get-translations";
import type { Locale } from "@/lib/i18n/config";
import { FAQSection } from "@/components/sections/faq-section";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AIToolsSection from "@/components/AIToolsSection";
import FooterSection from "@/components/FooterSection";
import { navItems } from "@/data";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[rgb(4,7,29)] bg-linear-[(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)]">
      <div className="max-w-7xl w-full">
        <FloatingNav locale={locale} navItems={navItems} />
        <HeroSection locale={locale} t={t.hero} />
        <ServicesSection t={t.services} />
        <WhyChooseUsSection t={t.whyChooseUs} />
        <ProcessSection t={t.process} />
        <TeamSection t={t.team} />
        <ProjectsSection t={t.projects} />
        <TechStackSection t={t.techStack} />
        <TestimonialsSection t={t.testimonials} />
        <AIToolsSection t={t.aiTools} />
        {/* <FAQSection t={t.faq} /> */}
        <ContactSection t={t.contact} />
        <FooterSection t={t.footer} />
      </div>
    </main>
  );
}
