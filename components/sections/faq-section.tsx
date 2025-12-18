"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQSectionProps {
  t: {
    title: string
    subtitle: string
  }
}

export function FAQSection({ t }: FAQSectionProps) {
  // Mock FAQs - fetch from Strapi CMS in production
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including Next.js, React, TypeScript for web development, Flutter for mobile apps, and cutting-edge AI/ML frameworks like TensorFlow and OpenAI for intelligent solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A standard website takes 4-6 weeks, mobile apps 8-12 weeks, and AI integrations 6-10 weeks. We provide detailed timelines during the discovery phase.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support packages including bug fixes, security updates, feature enhancements, and technical support. Our team ensures your solution stays current and performs optimally.",
    },
    {
      question: "Can you work with our existing systems?",
      answer:
        "Absolutely. We excel at integrating with existing systems and databases. Our team conducts thorough analysis to ensure seamless integration without disrupting your current operations.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time-and-materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote.",
    },
    {
      question: "Do you support multiple languages?",
      answer:
        "Yes, we have expertise in building bilingual and multilingual applications with proper RTL support for Arabic and other languages. Our team ensures cultural appropriateness and linguistic accuracy.",
    },
  ]

  return (
    <section className="bg-muted/30 py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{t.title}</h2>
          <p className="text-pretty text-lg text-muted-foreground lg:text-xl">{t.subtitle}</p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
