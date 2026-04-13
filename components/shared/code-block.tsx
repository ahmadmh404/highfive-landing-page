import { motion } from "framer-motion";
import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { HERO_CODE_BLOCK } from "@/lib/constants";

export function HeroCodeBlock() {
  return (
    <motion.div
      dir="ltr"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-2xl mt-4 rounded-2xl overflow-hidden bg-card/95 border border-primary/25"
      style={{
        boxShadow:
          "0 0 40px rgba(203, 172, 249, 0.12), 0 0 80px rgba(203, 172, 249, 0.05), inset 0 0 40px rgba(203, 172, 249, 0.03)",
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs font-mono text-muted-foreground/70">
          search-enhanced.ts
        </span>
      </div>
      {/* Code */}
      <CodeBlock
        data={HERO_CODE_BLOCK}
        defaultValue={HERO_CODE_BLOCK[0].language}
      >
        <CodeBlockBody className="bg-">
          {(item) => (
            <CodeBlockItem key={item.language} value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
      {/* Glow bar at bottom */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </motion.div>
  );
}
