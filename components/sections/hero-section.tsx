"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  locale: string;
  t: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
}

export function HeroSection({ locale, t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Digital Solutions</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl lg:text-2xl"
          >
            {t.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group gap-2 text-base">
              <Link href={`/${locale}#contact`}>
                {t.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base bg-transparent"
            >
              <Link href={`/${locale}#projects`}>{t.ctaSecondary}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "50+", label: "Global Clients" },
            { value: "15+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-foreground lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
