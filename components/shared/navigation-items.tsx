import Link from "next/link";
import { useLanguage } from "../language-provider";
import { useActiveSection } from "@/hooks/use-active-section";
import { pageSections } from "@/constants";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../animated/animated-button";
import { staggerItem } from "@/lib/animations";
import { AnimatedLink } from "../animated/animated-link";

interface NavigationItemsProps {
  mode?: "desktop" | "mobile";
  onCLick?: () => void;
}

export function NavigationItems({
  onCLick,
  mode = "desktop",
}: NavigationItemsProps) {
  const { language, t } = useLanguage();
  const { activeSection } = useActiveSection();

  return pageSections.map((section, index) => {
    if (mode === "mobile") {
      return (
        <AnimatedLink
          key={index}
          animationVariant={staggerItem}
          href={`#${section}`}
          onClick={onCLick}
          className={cn(
            `px-3 py-2 text-center rounded-md text-base font-medium w-full hover:bg-primary/10 hover:text-primary transition-colors`,
            activeSection === section && "text-primary bg-primary/10"
          )}
        >
          {t(`nav.${section}`)}
        </AnimatedLink>
      );
    }

    return (
      <Link
        key={index}
        href={`#${section}`}
        className={cn(
          "font-medium",
          activeSection === section ? "text-primary" : ""
        )}
      >
        {t(`nav.${section}`)}
      </Link>
    );
  });
}
