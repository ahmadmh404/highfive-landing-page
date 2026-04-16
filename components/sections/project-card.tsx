"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import { PROJECTS, PROJECTS_FALLBACKS } from "@/lib/constants";
import { glowHover, scaleIn } from "@/lib/animation-constants";
import { cn } from "@/lib/utils";

import { CustomImage } from "../shared/custom-image";

interface ProjectsSectionProps {
  t: {
    title: string;
    subtitle: string;
    viewCase: string;
    filter?: {
      all: string;
      webApps: string;
      aiFeatures: string;
      tools: string;
    };
  };
}

interface ProjectCardProps {
  item: (typeof PROJECTS)[0];
  index: number;
  t: ProjectsSectionProps["t"];
}

export function ProjectCard({ index, item, t }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const fallback =
    PROJECTS_FALLBACKS[item.category] || PROJECTS_FALLBACKS.webApps;

  return (
    <motion.a
      href={item.link}
      className="group relative cursor-pointer"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={glowHover.whileHover}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* 1. Main Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-muted-foreground/10 bg-bg-primary">
        {/* Image Area with Gradient Fallback */}
        <div className="relative overflow-hidden h-[20vh] lg:h-[30vh]">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-background/50">
            <img
              src="/bg.png"
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project image - crossfades in when loaded */}
          <CustomImage
            fallback={(imageLoaded, imgError) => (
              <div
                className={`absolute inset-0 bg-linear-to-br ${fallback.gradient} flex items-center justify-center transition-opacity duration-500 ${
                  imageLoaded || imgError ? "opacity-0" : "opacity-100"
                }`}
              >
                <fallback.icon className="h-10 w-10 text-muted-foreground" />
              </div>
            )}
            url={item.img}
            alt={item.title}
            className={(loaded, error) =>
              cn(
                `z-10 absolute bottom-0 w-full transition-all duration-700 ease-in-out ${
                  isHovered ? "scale-110" : "scale-100"
                } ${loaded || error ? "opacity-100" : "opacity-0"}`,
              )
            }
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-foreground transition-all duration-200 group-hover:translate-x-2">
            {item.title}
          </h1>

          <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2 transition-all duration-200 group-hover:translate-x-2 text-muted-foreground">
            {item.des}
          </p>

          {/* Tech Icons - Overflow row */}
          <div className="flex items-center mt-7 mb-4 overflow-visible">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-muted-foreground/10 rounded-full bg-card lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center shrink-0"
                style={{ transform: `translateX(-${5 * index + 4}px)` }}
              >
                <img src={icon} alt="tech" className="p-2" />
              </div>
            ))}
          </div>

          {/* CTA Button - Contained, no overflow */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-medium text-primary">
              {t.viewCase}
            </span>
            <FaLocationArrow className="text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Top Shimmer Highlight (HighFive Signature) */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-primary/30 transition-colors duration-300" />
      </div>

      {/* Soft Glow behind card (HighFive Signature) */}
      <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.a>
  );
}
