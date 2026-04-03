import { getTranslations } from "@/lib/i18n/get-translations";
import type { Locale } from "@/lib/i18n/config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TeamSection } from "@/components/sections/team-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CoursesSection } from "@/components/sections/courses-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { AICapabilitiesSection } from "@/components/sections/ai-capabilities-section";
import { AiToolsSection } from "@/components/sections/AiTools";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <Header />
      <main>
        <HeroSection locale={locale} t={t.hero} />
        <TrustedBySection t={t.trustedBy} />
        <ServicesSection t={t.services} />
        <WhyChooseUsSection t={t.whyChooseUs} />
        <ProcessSection t={t.process} />
        <TeamSection t={t.team} />
        <ProjectsSection t={t.projects} />
        <CoursesSection t={t.courses} />
        <TechStackSection t={t.techStack} />
        <AICapabilitiesSection t={t.aiCapabilities} />
        <AiToolsSection t={t.aiTools} />
        <TestimonialsSection t={t.testimonials} />
        <NewsletterSection t={t.newsletter} />
        <FAQSection t={t.faq} />
        <CTASection locale={locale} t={t.cta} />
        <ContactSection t={t.contact} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
