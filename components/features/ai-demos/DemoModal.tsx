"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { AITool, AIDemoResult } from "@/lib/types";
import { runAIDemo } from "@/lib/api/mock-ai-demo";
import { DEMO_TIMEOUT_MS } from "@/lib/constants";
import { Loader2, Play, AlertTriangle, CheckCircle2 } from "lucide-react";

interface DemoModalProps {
  tool: AITool | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ tool, open, onOpenChange }: DemoModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AIDemoResult | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "timeout"
  >("idle");
  const [timeoutWarning, setTimeoutWarning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (!open) {
      setFormData({});
      setResult(null);
      setStatus("idle");
      setTimeoutWarning(false);
      setStartTime(null);
    }
  }, [open]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (status === "loading" && startTime) {
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= DEMO_TIMEOUT_MS - 2000 && !timeoutWarning) {
          setTimeoutWarning(true);
        }
        if (elapsed >= DEMO_TIMEOUT_MS) {
          setStatus("timeout");
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status, startTime, timeoutWarning]);

  const handleRunDemo = useCallback(async () => {
    if (!tool) return;

    setStatus("loading");
    setResult(null);
    setTimeoutWarning(false);
    setStartTime(Date.now());

    try {
      const demoResult = await runAIDemo(tool.id, formData);
      setResult(demoResult);
      setStatus("success");
    } catch {
      setStatus("idle");
    }
  }, [tool, formData]);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const renderInputField = (field: AITool["inputFields"][0]) => {
    const value = formData[field.name] || "";

    switch (field.type) {
      case "select":
        return (
          <Select
            value={value}
            onValueChange={(val) => handleInputChange(field.name, val)}
          >
            <SelectTrigger>
              <SelectValue placeholder={field.label} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "textarea":
        return (
          <Textarea
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            rows={4}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        );
      default:
        return (
          <Input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
          />
        );
    }
  };

  const isFormValid = tool?.inputFields.every((field) => {
    const value = formData[field.name];
    return field.required ? value && value.trim() : true;
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{tool?.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {status === "idle" || status === "loading" ? (
            <>
              <div className="space-y-4">
                {tool?.inputFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name}>
                      {field.label}
                      {field.required && (
                        <span className="text-destructive"> *</span>
                      )}
                    </Label>
                    {renderInputField(field)}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={handleRunDemo}
                  disabled={!isFormValid || status === "loading"}
                  className="w-full"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Run Demo
                    </>
                  )}
                </Button>

                {timeoutWarning && status === "loading" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-md bg-amber-100 px-4 py-2 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200"
                  >
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm">
                      This is taking longer than usual...
                    </span>
                  </motion.div>
                )}
              </div>
            </>
          ) : status === "success" && result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 rounded-md bg-green-100 px-4 py-2 text-green-800 dark:bg-green-900/30 dark:text-green-200">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm">
                  Demo completed in {result.processingTime.toFixed(0)}ms
                </span>
              </div>

              <div className="rounded-md border bg-muted p-4">
                <pre className="whitespace-pre-wrap text-sm font-mono">
                  {result.output}
                </pre>
              </div>

              <Button
                onClick={() => setStatus("idle")}
                variant="outline"
                className="w-full"
              >
                Try Again
              </Button>
            </motion.div>
          ) : status === "timeout" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 rounded-md bg-red-100 px-4 py-2 text-red-800 dark:bg-red-900/30 dark:text-red-200">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm">
                  Demo timed out. Please try again.
                </span>
              </div>

              <Button onClick={() => setStatus("idle")} className="w-full">
                Try Again
              </Button>
            </motion.div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
