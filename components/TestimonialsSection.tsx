"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import type { Lang } from "@/data/translations";

const testimonialItems = [
  {
    quote:
      "HighFive transformed our outdated web presence into a sleek, AI-powered platform. The Scorpe Search integration alone boosted our user retention by 45%. Exceptional work from a truly talented team.",
    name: "Sarah Al-Mansouri",
    title: "CTO, Horizon Tech Dubai",
  },
  {
    quote:
      "Working with HighFive was a game-changer. They delivered our mobile app on time, within budget, and with features we hadn't even considered. Their bilingual support made communication seamless.",
    name: "James Whitfield",
    title: "Founder, LaunchPad London",
  },
  {
    quote:
      "The AI tools HighFive built for our e-commerce store are incredible. Product recommendations are spot-on and our conversion rate has doubled. Highly recommend their AI packages.",
    name: "Nour Khalid",
    title: "Head of Digital, Retail Arabia",
  },
  {
    quote:
      "I enrolled in HighFive's Next.js course and went from beginner to landing a senior developer role in 6 months. The quality of instruction is world-class.",
    name: "Mohamed Samir",
    title: "Senior Developer, TechCorp Egypt",
  },
  {
    quote:
      "HighFive doesn't just build software — they build partnerships. Their team understood our vision and delivered a product that exceeded every expectation. Five stars without hesitation.",
    name: "Priya Sharma",
    title: "VP Product, FinFlow Singapore",
  },
];

interface TestimonialsSectionProps {
  t: {
    title: string;
    subtitle: string;
  };
}

export default function TestimonialsSection({ t }: TestimonialsSectionProps) {
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

      <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialItems}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
