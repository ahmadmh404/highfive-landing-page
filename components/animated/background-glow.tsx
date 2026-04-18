"use client";

import { TABLET_BREAKPOINT, useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function BackgroundGlow() {
  const isMobile = useIsMobile(TABLET_BREAKPOINT);

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(203,172,249,0.1),transparent_70%)] opacity-0 transition-opacity",
        isMobile ? "opacity-100" : " group-hover:opacity-100",
      )}
    />
  );
}
