// 3D/Design System Tokens
// These tokens are used for Three.js/WebGL rendering where CSS variables cannot be used
// For all other UI, use CSS variables from globals.css (e.g., var(--primary), var(--accent))

export const THREE_COLORS = {
  // Globe/3D Scene Colors
  globe: {
    primary: "#062056", // Dark blue globe base
    accent: "#38bdf8", // Sky blue ambient light
    emissive: "#062056", // Emissive glow
    atmosphere: "#FFFFFF", // White atmosphere
  },
  // Arc/Connection Colors (cyan, blue, indigo)
  arcs: ["#06b6d4", "#3b82f6", "#6366f1"],
  // Lighting
  lights: {
    ambient: "#38bdf8",
    directional: "#ffffff",
    point: "#ffffff",
  },
} as const;

export const UI_COLORS = {
  // Legacy hardcoded colors - migrated to CSS variables in globals.css
  // Keeping here for reference during migration
  legacy: {
    purple: "#CBACF9",
    muted: "#C1C2D3",
    accent: "#E4ECFF",
    cardDark: "#10132E",
    cardDarker: "#161A31",
  },
} as const;
