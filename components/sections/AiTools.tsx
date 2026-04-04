"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { AITool } from "@/lib/types";
import { aiTools } from "@/lib/data/ai-tools";
import { DemoModal } from "@/components/features/ai-demos/DemoModal";
import {
  Code2,
  Palette,
  FileText,
  Play,
  Search,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface AiToolsSectionProps {
  t: {
    title: string;
    subtitle: string;
    tryDemo: string;
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Palette,
  FileText,
  Search,
  TrendingUp,
  Sparkles,
};

export function AiToolsSection({ t }: AiToolsSectionProps) {
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToolClick = (tool: AITool) => {
    setSelectedTool(tool);
    setModalOpen(true);
  };

  return (
    <section id="ai-tools" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground lg:text-xl">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool, index) => {
            const Icon = iconMap[tool.icon] || Code2;

            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full cursor-pointer border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                    <CardDescription className="text-base">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => handleToolClick(tool)}
                      className="w-full gap-2"
                    >
                      <Play className="h-4 w-4" />
                      {t.tryDemo}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <DemoModal
          tool={selectedTool}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
}
