import { InfiniteMovingCards } from "@/components/effects";

import { AnimatedSectionHeader } from "../animated/animated-section-header";

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

  return (
    <section id="testimonials" className="w-full py-20">
      <AnimatedSectionHeader title={t.title} subtitle={t.subtitle} />

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
