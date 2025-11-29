import Link from "next/link";
import { AnimatedSection } from "../animated/animated-section";
import { HighFiveLogo } from "../highfive-logo";
import { AnimatedText } from "../animated/animated-text";
import { connection } from "next/server";

export function FooterSection() {
  return (
    <AnimatedSection className="w-full container h-16 mx-auto px-4 flex items-center justify-between">
      <Link href={"/#home"}>
        <HighFiveLogo />
      </Link>

      <AnimatedText delay={0.2} className="text-muted-foreground">
        Made with 💜 using{" "}
        <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          NEXT.JS & Framer Motion
        </span>
      </AnimatedText>

      <RenderCopyright />
    </AnimatedSection>
  );
}

async function RenderCopyright() {
  await connection();
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-muted-foreground">&copy; Copyrights {currentYear} </p>
  );
}
