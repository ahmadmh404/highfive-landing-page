"use client";

import { motion, Variants } from "framer-motion";
import { buttonVariants } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import type { ComponentProps, ComponentType, ReactNode } from "react";

interface AnimatedButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  animationVariant?: Variants;
  loading?: boolean;
  className?: string;
}

export function AnimatedButton({
  children,
  animationVariant = buttonVariants,
  loading = false,
  className = "",
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      variants={animationVariant}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate={loading ? "loading" : "rest"}
    >
      <Button
        variant={props.variant}
        onClick={props.onClick}
        className={className}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
