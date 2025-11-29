"use client";

import { motion, Variants } from "framer-motion";
import { buttonVariants } from "@/lib/animations";
import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps extends ComponentProps<typeof Link> {
  children: ReactNode;
  animationVariant?: Variants;
  className?: string;
}

export function AnimatedLink({
  children,
  animationVariant = buttonVariants,
  className = "",
  ...props
}: AnimatedLinkProps) {
  return (
    <motion.div
      variants={animationVariant}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <Link className={cn("block", className)} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}
