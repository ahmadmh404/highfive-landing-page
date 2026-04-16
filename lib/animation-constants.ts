/**
 * HighFive Animation Constants
 *
 * Standardized animation durations, easings, and reusable Framer Motion configs.
 * All components should reference these tokens instead of hardcoded values.
 *
 * Spec:
 *   - Entrance: duration 0.5s, y: 20→0, opacity: 0→1
 *   - Stagger: index * 0.1s delay
 *   - Hover: duration 0.35s, ease: "easeOut"
 *   - Viewport: once: true
 */

export const ANIMATION = {
  // Duration tokens (seconds for Framer Motion)
  durations: {
    FAST: 0.2, // 200ms — micro interactions (hover states, toggles)
    MEDIUM: 0.3, // 300ms — standard transitions
    SLOW: 0.5, // 500ms — page transitions, entrance animations
    STAGGER: 0.1, // 100ms — stagger delay between items
    HOVER: 0.35, // 350ms — hover transitions (card lift, glow)
    BORDER: 0.4, // 400ms — border-color / box-shadow transitions
    MARQUEE: 80, // 80s — testimonials scroll
  },

  // Stagger delays for lists/grids
  stagger: {
    FAST: 0.05, // 50ms — tight list
    DEFAULT: 0.1, // 100ms — standard stagger (use this)
    SLOW: 0.2, // 200ms — relaxed stagger
  },

  // Easing curves
  easings: {
    DEFAULT: undefined, // Framer Motion default
    EASE_OUT: [0.25, 0.1, 0.25, 1], // Smooth exit
    EASE_IN: [0.4, 0, 0.2, 1], // Smooth entry
    SPRING: [0.34, 1.56, 0.64, 1], // Spring-like
    LINEAR: "linear" as const, // Continuous animations
  },
} as const;

// ============================================
// REUSABLE FRAMER-MOTION VARIANTS
// ============================================

/** Entrance: fade in from below (section headers, cards) */
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.durations.SLOW },
  },
} as const;

/** Entrance: fade in from above (navbars, dropdowns) */
export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.durations.MEDIUM },
  },
} as const;

/** Entrance: scale in (stats, badges) */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    y: -3,
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION.durations.MEDIUM },
  },
} as const;

/** Entrance: slide from left */
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION.durations.SLOW },
  },
} as const;

/** Entrance: slide from right */
export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION.durations.SLOW },
  },
} as const;

/** Staggered children container */
export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: ANIMATION.stagger.DEFAULT,
    },
  },
} as const;

// (NEEDS UPDATE TO REAL STAGGER)
export const sectionItemsVariant = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: { opacity: 1, y: 0 },
} as const;

// ============================================
// HOVER TRANSITIONS (for Framer Motion whileHover)
// ============================================

/** Standard card hover: lift + glow */
export const cardHover = {
  whileHover: { y: -4 },
  transition: {
    duration: ANIMATION.durations.HOVER,
    ease: ANIMATION.easings.EASE_OUT,
  },
} as const;

/** Scale hover: subtle zoom (images, icons) */
export const scaleHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: ANIMATION.durations.FAST },
} as const;

/** Team card hover: spring scale */
export const teamCardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring" as const, stiffness: 260, damping: 20 },
} as const;

/** Stat card hover: lift with border color change */
export const statCardHover = {
  whileHover: {
    y: -5,
    backgroundColor: "var(--hf-bg-card-hover)",
    borderColor: "var(--hf-accent-purple-border)",
  },
  transition: {
    duration: ANIMATION.durations.HOVER,
    ease: ANIMATION.easings.EASE_OUT,
  },
} as const;

// ============================================
// GLOW EFFECTS (for CSS box-shadow transitions)
// ============================================

export const GLOW = {
  outer: "0 0 25px 4px rgba(203, 172, 249, 0.35)",
  inner: "inset 0 0 25px 4px rgba(203, 172, 249, 0.08)",
  subtle: "0 0 15px 2px rgba(203, 172, 249, 0.2)",
  subtleInner: "inset 0 0 15px 2px rgba(203, 172, 249, 0.05)",
} as const;

/** Full glow on hover */
export const glowHover = {
  whileHover: {
    boxShadow: `${GLOW.outer}, ${GLOW.inner}`,
    borderColor: "rgba(203, 172, 249, 0.5)",
  },
  transition: { duration: ANIMATION.durations.BORDER },
} as const;

// ============================================
// LAYOUT / STATE TRANSITIONS
// ============================================

/** Project filter swap */
export const layoutSwap = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: ANIMATION.durations.MEDIUM },
} as const;

/** Accordion / expand */
export const expand = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: ANIMATION.durations.FAST },
  },
} as const;

// ============================================
// TEXT REVEAL DURATIONS
// ============================================

export const TEXT_REVEAL = {
  CHARACTER: 0.03, // 30ms per character
  WORD: 0.1, // 100ms per word
  LINE: 0.5, // 500ms per line
} as const;

// ============================================
// VIEWPORT CONFIG (default for all sections)
// ============================================

export const VIEWPORT_ONCE = { once: true } as const;
export const VIEWPORT_REPEAT = { once: false } as const;
