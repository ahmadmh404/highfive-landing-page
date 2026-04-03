"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "alternate" | "dark";
}

export function SectionWrapper({
  id,
  children,
  className,
  background = "default",
}: SectionWrapperProps) {
  const bgStyles = {
    default: "bg-background",
    alternate: "bg-muted/50",
    dark: "bg-slate-900 dark:bg-slate-950",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", bgStyles[background], className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
