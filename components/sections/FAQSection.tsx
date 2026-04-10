"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import type { Lang } from "@/data/translations";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  lang: Lang;
  t: {
    faq?: {
      title?: string;
      subtitle?: string;
      items?: {
        technologies?: { question: string; answer: string };
        timeline?: { question: string; answer: string };
        support?: { question: string; answer: string };
        integration?: { question: string; answer: string };
        pricing?: { question: string; answer: string };
        languages?: { question: string; answer: string };
      };
    };
  };
}

const fallbackFAQs: FAQItem[] = [
  {
    q: "What types of projects does HighFive specialize in?",
    a: "HighFive specializes in custom web applications, mobile apps, AI integrations, and SaaS products. We work with startups, SMEs, and enterprise clients across the MENA region and globally.",
  },
  {
    q: "Do you offer bilingual (Arabic/English) development services?",
    a: "Yes! Our entire team is fluent in both Arabic and English. We can build fully bilingual applications with RTL support and culturally-aware UX design tailored for MENA markets.",
  },
  {
    q: "How are your AI tools different from off-the-shelf solutions?",
    a: "Our Scorpe suite (Search, Rank, Recommend) is purpose-built for Arabic and English content. Unlike generic solutions, they're fine-tuned for regional nuances, offering significantly better accuracy for MENA businesses.",
  },
  {
    q: "What is included in your programming courses?",
    a: "Each course includes video lessons, hands-on projects, code reviews, and a private community. You get lifetime access and we update content regularly. Certificates are provided upon completion.",
  },
  {
    q: "How long does a typical project take from start to finish?",
    a: "A typical web application takes 6–12 weeks. AI integrations range from 2–6 weeks depending on complexity. We provide clear timelines during discovery and keep you updated throughout.",
  },
];

function getFAQItems(t: FAQSectionProps["t"]): FAQItem[] {
  const faqData = t.faq;

  if (!faqData?.items) {
    return fallbackFAQs;
  }

  const items = faqData.items;
  const faqs: FAQItem[] = [];

  if (items.technologies) {
    faqs.push({ q: items.technologies.question, a: items.technologies.answer });
  }
  if (items.timeline) {
    faqs.push({ q: items.timeline.question, a: items.timeline.answer });
  }
  if (items.support) {
    faqs.push({ q: items.support.question, a: items.support.answer });
  }
  if (items.integration) {
    faqs.push({ q: items.integration.question, a: items.integration.answer });
  }
  if (items.pricing) {
    faqs.push({ q: items.pricing.question, a: items.pricing.answer });
  }
  if (items.languages) {
    faqs.push({ q: items.languages.question, a: items.languages.answer });
  }

  return faqs.length > 0 ? faqs : fallbackFAQs;
}

export default function FAQSection({ lang, t }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = getFAQItems(t);

  return (
    <section id="faq" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-muted-foreground">
          {t.faq?.subtitle ||
            "Get answers to common questions about our services"}
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`rounded-2xl overflow-hidden bg-background border transition-colors duration-300 ${
              openIndex === i ? "border-primary/30" : "border-border"
            }`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-base font-semibold text-foreground pr-4">
                {faq.q}
              </span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-primary"
              >
                <FaChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground/80 pt-4 border-t border-white/5">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
