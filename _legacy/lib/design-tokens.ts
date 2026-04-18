/**
 * HighFive Design Tokens (TypeScript)
 *
 * Standardized palette for use in components and Three.js scenes.
 * CSS variables are defined in styles/tokens.css and globals.css.
 * These TS tokens provide type-safe access in React/Framer Motion code.
 */

// ============================================
// 3D/WebGL Colors (for Three.js scenes)
// ============================================
export const THREE_COLORS = {
  globe: {
    primary: "#062056",
    accent: "#38bdf8",
    emissive: "#062056",
    atmosphere: "#FFFFFF",
  },
  arcs: ["#06b6d4", "#3b82f6", "#6366f1"] as const,
  lights: {
    ambient: "#38bdf8",
    directional: "#ffffff",
    point: "#ffffff",
  },
} as const;

// ============================================
// UI Color Tokens
// ============================================
export const UI_COLORS = {
  // Backgrounds
  bgPrimary: "rgb(4, 7, 29)",
  bgSecondary: "rgb(12, 14, 35)",
  bgCard: "rgba(17, 25, 40, 0.75)",
  bgCardHover: "rgba(255, 255, 255, 0.04)",

  // Accents
  accentPurple: "#cbacf9",
  accentBlue: "#e4ecff",
  accentPurpleDim: "rgba(203, 172, 249, 0.15)",
  accentPurpleBorder: "rgba(203, 172, 249, 0.3)",
  accentBlueDim: "rgba(228, 236, 255, 0.15)",
  accentBlueBorder: "rgba(228, 236, 255, 0.3)",

  // Text
  textPrimary: "#ffffff",
  textMuted: "#bec1dd",
  textLabel: "#5c6370",

  // Borders
  borderDefault: "rgba(255, 255, 255, 0.08)",
  borderHover: "rgba(203, 172, 249, 0.5)",
  borderActive: "rgba(203, 172, 249, 0.5)",
  borderInactive: "rgba(255, 255, 255, 0.1)",

  // Glows
  glowOuter: "0 0 25px 4px rgba(203, 172, 249, 0.35)",
  glowInner: "inset 0 0 25px 4px rgba(203, 172, 249, 0.08)",
} as const;

// Legacy references (deprecated — use tokens above)
export const LEGACY_COLORS = {
  purple: "#CBACF9",
  muted: "#C1C2D3", // → use UI_COLORS.textMuted (#bec1dd)
  accent: "#E4ECFF",
  cardDark: "#10132E", // → use UI_COLORS.bgCard
  cardDarker: "#161A31",
} as const;

// ============================================
// Shadow Tokens
// ============================================
export const SHADOWS = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
  md: "0 4px 6px rgba(0, 0, 0, 0.4)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.5)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.6)",
  card: "0 0 20px rgba(0, 0, 0, 0.3)",
  cardHover: "0 0 30px rgba(203, 172, 249, 0.15)",
} as const;

// ============================================
// Border Radius Tokens
// ============================================
export const RADIUS = {
  sm: "0.375rem", // 6px
  md: "0.5rem", // 8px
  lg: "0.625rem", // 10px
  xl: "0.875rem", // 14px
  "2xl": "1rem", // 16px
  full: "9999px",
} as const;

// ============================================
// Spacing Tokens (px)
// ============================================
export const SPACING = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
} as const;

// =========================================
// Gradient Tokens
// =========================================
export const GRADIENTS = {
  CARD: "",
};
