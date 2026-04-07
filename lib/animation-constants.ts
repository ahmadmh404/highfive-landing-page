// Animation Constants for HighFive Design System
// Standardize all animation durations and easings across the codebase

export const ANIMATION = {
  // Duration tokens (matching Shadcn/Tailwind)
  durations: {
    FAST: 0.2, // 200ms - micro interactions (hover states, toggles)
    MEDIUM: 0.3, // 300ms - standard transitions
    SLOW: 0.5, // 500ms - page transitions, complex animations
    STAGGER: 0.1, // 100ms - stagger delay between items
  },

  // Stagger delays for lists/grids
  stagger: {
    FAST: 0.05, // 50ms - tight list animations
    DEFAULT: 0.1, // 100ms - standard stagger
    SLOW: 0.2, // 200ms - relaxed stagger
  },

  // Easing curves (standardized)
  easings: {
    // Default Framer Motion
    DEFAULT: undefined,
    // Smooth ease-out for exits
    SMOOTH_OUT: [0.25, 0.1, 0.25, 1],
    // Smooth ease-in for entries
    SMOOTH_IN: [0.4, 0, 0.2, 1],
    // Spring-like for interactive elements
    SPRING: [0.34, 1.56, 0.64, 1],
    // Linear for continuous animations
    LINEAR: "linear",
  },
} as const;

// Common animation configurations
export const MOTION_CONFIGS = {
  // Fade in from below (standard card entrance)
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: ANIMATION.durations.MEDIUM },
  },

  // Fade in from above (navbar, modals)
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: ANIMATION.durations.MEDIUM },
  },

  // Scale in (buttons, cards)
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: ANIMATION.durations.FAST },
  },

  // Staggered children container
  staggerContainer: {
    transition: {
      staggerChildren: ANIMATION.stagger.DEFAULT,
    },
  },

  // Hover scale (cards, buttons)
  hoverScale: {
    whileHover: { scale: 1.02 },
    transition: { duration: ANIMATION.durations.FAST },
  },
} as const;

// Typography animation durations (for text reveals)
export const TEXT_REVEAL = {
  CHARACTER: 0.03, // 30ms per character
  WORD: 0.1, // 100ms per word
  LINE: 0.5, // 500ms per line
} as const;
