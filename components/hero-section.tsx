"use client";

import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "./animated/animated-button";
import { AnimatedSection } from "./animated/animated-section";
import Link from "next/link";
import { AnimatedText } from "./animated/animated-text";
import { AnimatedBeam, Background } from "./animata/background/animated-beam";

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <AnimatedSection
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <Background />
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {language === "ar"
                ? "مدعوم بالذكاء الاصطناعي"
                : "AI-Powered Solutions"}
            </span>
          </div>

          <h1
            className={cn(
              "text-5xl md:text-7xl text-muted-foreground font-bold mb-6 text-balance animate-in"
            )}
          >
            {t("hero.title")}
            <br />
            <AnimatedText
              delay={0.15}
              className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
            >
              {t("hero.subtitle")}
            </AnimatedText>
          </h1>

          <AnimatedText
            delay={0.25}
            className={cn(
              "text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty center animate-fade-in-up animation-delay-200"
            )}
          >
            {t("hero.description")}
          </AnimatedText>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <AnimatedButton size="lg" asChild>
              <Link href={"#contact"}>
                {t("hero.cta.primary")}
                {language === "en" ? (
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                ) : (
                  <ArrowLeft className="mr-2 mah-5 w-5 transition-transform group-hover:translate-x-1" />
                )}
              </Link>
            </AnimatedButton>

            <AnimatedButton size="lg" variant="outline" asChild>
              <Link href={"#services"}>{t("hero.cta.secondary")}</Link>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
