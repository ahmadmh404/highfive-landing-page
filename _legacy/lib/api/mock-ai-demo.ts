import type { AIDemoResult } from "@/lib/types";
import { DEMO_MIN_DELAY_MS, DEMO_MAX_DELAY_MS } from "@/lib/constants";

export async function runAIDemo(
  toolId: string,
  inputs: Record<string, string | number>,
): Promise<AIDemoResult> {
  const startTime = performance.now();

  const minDelay = DEMO_MIN_DELAY_MS;
  const maxDelay = DEMO_MAX_DELAY_MS;
  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  await new Promise((resolve) => setTimeout(resolve, delay));

  const result = generateMockOutput(toolId, inputs);
  const processingTime = performance.now() - startTime;

  return {
    success: true,
    output: result,
    processingTime,
  };
}

function generateMockOutput(
  toolId: string,
  inputs: Record<string, string | number>,
): string {
  switch (toolId) {
    case "code-assist":
      return generateCodeOutput(inputs);
    case "design-generator":
      return generateDesignOutput(inputs);
    case "content-writer":
      return generateContentOutput(inputs);
    default:
      return "Demo completed successfully.";
  }
}

function generateCodeOutput(inputs: Record<string, string | number>): string {
  const language = inputs.language as string;
  const prompt = inputs.prompt as string;

  return `// Generated ${language} code based on: "${prompt}"

function solution() {
  // Implementation placeholder
  // This is a mock demonstration
  
  const data = processInput();
  const result = transformData(data);
  return result;
}

function processInput() {
  // Mock data processing
  return {
    status: "success",
    timestamp: new Date().toISOString()
  };
}

function transformData(data: any) {
  return {
    ...data,
    processed: true
  };
}

export default solution;
`;
}

function generateDesignOutput(inputs: Record<string, string | number>): string {
  const style = inputs.style as string;
  const description = inputs.description as string;

  return `UI Design Mockup (${style})

Primary Color: #6366F1 (Indigo-500)
Secondary Color: #8B5CF6 (Violet-500)
Background: #FFFFFF / #0F172A (Dark)

Layout:
- Header: Fixed, 64px height
- Hero: Full viewport height with centered content
- Features: 3-column grid
- CTA: Full-width with gradient background

Style: ${style}
Description: ${description}

Components:
1. Navigation Bar
2. Hero Section with CTA buttons
3. Feature Cards (3)
4. Testimonials carousel
5. Footer with links
`;
}

function generateContentOutput(
  inputs: Record<string, string | number>,
): string {
  const topic = inputs.topic as string;
  const wordCount = inputs.wordCount as number;

  const paragraphs = Math.max(1, Math.floor(wordCount / 150));
  let content = "";

  for (let i = 0; i < paragraphs; i++) {
    content += `<p>When it comes to ${topic}, there are several key aspects to consider. Our approach focuses on delivering value through practical solutions that address real-world challenges. Whether you're looking to optimize existing processes or explore new opportunities, understanding the fundamentals is crucial.</p>\n\n`;
  }

  return content.trim();
}
