import { getTranslations } from "@/lib/i18n/get-translations";
import type { Locale } from "@/lib/i18n/config";
import { FAQSection } from "@/components/sections/faq-section";
import { FloatingNav } from "@/components/layout";
import AIToolsSection from "@/components/sections/ai-tools-section";
import FooterSection from "@/components/sections/footer-section";
import { navItems } from "@/data";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section";
import ProcessSection from "@/components/sections/process-section";
import TeamSection from "@/components/sections/team-section";
import ProjectsSection from "@/components/sections/projects-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CoursesSection from "@/components/sections/courses-section";
import ContactSection from "@/components/sections/contact-section";

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
        <CoursesSection t={t.courses} />
        <AIToolsSection t={t.aiTools} />
        <FAQSection t={t.faq} />
        <ContactSection t={t.contact} />
        <FooterSection t={t.footer} />
      </div>
    </main>
  );
}
