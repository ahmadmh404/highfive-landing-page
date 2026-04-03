import type { AITool } from "@/lib/types";

export const aiTools: AITool[] = [
  {
    id: "code-assist",
    name: "AI Code Assistant",
    description: "aiTools.tools.codeAssist.desc",
    category: "code",
    icon: "Code2",
    inputFields: [
      { name: "language", label: "aiTools.fields.language", type: "select", required: true, options: ["Python", "JavaScript", "TypeScript", "Go", "Rust"] },
      { name: "prompt", label: "aiTools.fields.prompt", type: "textarea", required: true, placeholder: "aiTools.fields.promptPlaceholder" },
    ],
    outputFormat: "code",
  },
  {
    id: "design-generator",
    name: "UI Design Generator",
    description: "aiTools.tools.designGenerator.desc",
    category: "design",
    icon: "Palette",
    inputFields: [
      { name: "style", label: "aiTools.fields.style", type: "select", required: true, options: ["Modern", "Classic", "Minimalist", "Bold"] },
      { name: "description", label: "aiTools.fields.description", type: "textarea", required: true, placeholder: "aiTools.fields.descPlaceholder" },
    ],
    outputFormat: "design",
  },
  {
    id: "content-writer",
    name: "Content Writer",
    description: "aiTools.tools.contentWriter.desc",
    category: "content",
    icon: "FileText",
    inputFields: [
      { name: "topic", label: "aiTools.fields.topic", type: "text", required: true, placeholder: "aiTools.fields.topicPlaceholder" },
      { name: "wordCount", label: "aiTools.fields.wordCount", type: "number", required: true },
    ],
    outputFormat: "text",
  },
];