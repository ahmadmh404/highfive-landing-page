"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/effects";
import type { Lang } from "@/data/translations";

interface TestimonialsSectionProps {
  t: {
    title: string;
    subtitle: string;
    items?: {
      sarah: { name: string; role: string; company: string; content: string };
      ahmed: { name: string; role: string; company: string; content: string };
      maria: { name: string; role: string; company: string; content: string };
      priya?: { name: string; role: string; company: string; content: string };
      mohamed?: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
      nour?: { name: string; role: string; company: string; content: string };
    };
  };
}

export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
  const testimonialItems = t.items
    ? [
        {
          quote: t.items.sarah.content,
          name: t.items.sarah.name,
          title: `${t.items.sarah.role}, ${t.items.sarah.company}`,
        },
        {
          quote: t.items.ahmed.content,
          name: t.items.ahmed.name,
          title: `${t.items.ahmed.role}, ${t.items.ahmed.company}`,
        },
        {
          quote: t.items.maria.content,
          name: t.items.maria.name,
          title: `${t.items.maria.role}, ${t.items.maria.company}`,
        },
        ...(t.items.priya
          ? [
              {
                quote: t.items.priya.content,
                name: t.items.priya.name,
                title: `${t.items.priya.role}, ${t.items.priya.company}`,
              },
            ]
          : []),
        ...(t.items.mohamed
          ? [
              {
                quote: t.items.mohamed.content,
                name: t.items.mohamed.name,
                title: `${t.items.mohamed.role}, ${t.items.mohamed.company}`,
              },
            ]
          : []),
        ...(t.items.nour
          ? [
              {
                quote: t.items.nour.content,
                name: t.items.nour.name,
                title: `${t.items.nour.role}, ${t.items.nour.company}`,
              },
            ]
          : []),
      ]
    : [
        {
          quote: t.title,
          name: t.subtitle,
          title: "",
        },
      ];

  const hasContent = t.items && testimonialItems.length > 0;

  return (
    <section id="testimonials" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          {t.title}
        </h2>
        <p className="mt-4 text-base text-foreground/50 md:text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      <div className="h-[50vh] md:h-120 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialItems}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
