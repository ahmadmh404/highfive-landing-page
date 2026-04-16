"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AnimatedSectionHeader } from "../animated/animated-section-header";

interface FAQSectionProps {
  t: {
    title: string;
    subtitle: string;
    items?: {
      technologies?: { question: string; answer: string };
      timeline?: { question: string; answer: string };
      support?: { question: string; answer: string };
      integration?: { question: string; answer: string };
      pricing?: { question: string; answer: string };
      languages?: { question: string; answer: string };
    };
  };
  fallbackItems?: Array<{ question: string; answer: string }>;
}

export function FAQSection({ t, fallbackItems }: FAQSectionProps) {
  const faqItems = t.items
    ? [
        t.items.technologies,
        t.items.timeline,
        t.items.support,
        t.items.integration,
        t.items.pricing,
        t.items.languages,
      ].filter((item): item is { question: string; answer: string } => !!item)
    : fallbackItems || [];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
