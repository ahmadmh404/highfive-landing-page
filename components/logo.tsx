"use client";

import { useTheme } from "@/lib/theme/theme-provider";

export function HighfiveLogo() {
  const { theme } = useTheme();

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-12 h-12 transition-colors duration-300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Right Hand / Side */}
      <path
        d="M12 4L19 15H15L12 10V4Z"
        className={theme === "dark" ? "fill-white" : "fill-slate-900"}
      />
      {/* Left Hand / Side */}
      <path
        d="M12 4L5 15H9L12 10V4Z"
        className={theme === "dark" ? "fill-white/80" : "fill-slate-700"}
      />
    </svg>
  );
}
