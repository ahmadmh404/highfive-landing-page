"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  locale: string;
  t: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export function CTASection({ locale, t }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mb-10 text-pretty text-lg text-muted-foreground lg:text-xl">
            {t.subtitle}
          </p>

          <Button
            asChild
            size="lg"
            className="group h-14 gap-2 px-8 text-lg shadow-lg"
          >
            <Link href={`/${locale}#contact`}>
              {t.button}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
