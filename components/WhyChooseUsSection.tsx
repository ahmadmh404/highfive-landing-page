"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import type { Lang } from "@/data/translations";

interface WhyChooseUsSectionProps {
  t: {
    title: string;
    subtitle: string;
    expertise: {
      title: string;
      description: string;
    };
    global: {
      title: string;
      description: string;
    };
    results: {
      title: string;
      description: string;
    };
  };
}

export default function WhyChooseUsSection({ t }: WhyChooseUsSectionProps) {
  const items = [
    {
      id: 1,
      title: t.expertise.title,
      description: t.expertise.description,
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: t.global.title,
      description: t.global.description,
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech Stack",
      description: "We master the tools that matter",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Bilingual Agency — Arabic & English",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: t.results.title,
      description: t.results.description,
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Ready to start a project?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  return (
    <section id="about" className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading">
          Why Choose <span className="text-purple">HighFive</span>
        </h2>
        <p
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "#C1C2D3" }}
        >
          {t.subtitle}
        </p>
      </motion.div>

      <BentoGrid className="w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
