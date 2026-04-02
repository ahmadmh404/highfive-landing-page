---
name: design-md-synthesizer
description: |
  Generate a high-impact DESIGN.md from a product constitution, spec, or description. Produces a structured design document with taste profile, visual system, component contracts, interaction model, and AI enforcement rules. Use this skill whenever the user mentions creating a DESIGN.md, design system documentation, UI/UX rules, design guidelines, or wants to formalize their product's design language. Also use when asked to generate design rules from a product spec, constitution, or PRD. Triggers on phrases like "design doc", "DESIGN.md", "design system", "design rules", "UI guidelines", "style guide", "design constitution", or "how should this look".
---

# DESIGN.md Synthesizer

## Purpose

Generate a DESIGN.md that serves as the single source of truth for a product's visual and interaction design. The document must be opinionated, concrete, and directly usable by AI coding tools to produce consistent, high-quality UI.

Do NOT produce generic design documents. Every rule must be traceable to the product's constitution, niche, or audience.

---

## Step 1 — Extract Product Intent

Read the provided constitution, spec, PRD, or product description. Extract:

- **Product values**: What does this product stand for? (e.g., speed, simplicity, power, warmth)
- **Target audience**: Who is this for? (e.g., developers, consumers, enterprise users)
- **Tone**: What emotional register? (e.g., serious, playful, premium, approachable)
- **Product promises**: What does the product guarantee? (e.g., instant results, privacy, ease of use)
- **Tech stack**: What framework/library is the product built with? (e.g., React, Vue, Next.js, plain HTML). This determines which component libraries to recommend.

If a constitution file exists (look for `constitution.md`, `.specify/memory/constitution.md`, or similar), treat it as the highest authority. Explicitly reflect its values in the DESIGN.md.

If no formal document exists, infer product intent from the user's description. State your inferences clearly and ask the user to confirm before generating the full document.

When conflicts arise between sources, prioritize the constitution over assumptions.

**RTL detection**: Check whether the product targets RTL languages (Arabic, Hebrew, Persian, Urdu, etc.). Look for mentions of "RTL", "right-to-left", specific language names, "localization", "i18n", "multilingual", or `[dir="rtl"]`. If RTL is relevant, the DESIGN.md must include explicit RTL rules in the UI Rules, Component Contracts, AI Enforcement, and Anti-Patterns sections. RTL support is not optional when the product serves RTL-speaking users — it must be designed in from the start, not bolted on.

---

## Step 2 — Synthesize Taste Profile

Based on the product type and niche, infer a design archetype. Match to the closest reference product:

| Product Type     | Archetype         | Visual Feel                     |
| ---------------- | ----------------- | ------------------------------- |
| Developer tools  | Stripe / Linear   | Sharp, minimal, fast            |
| Creative tools   | Figma / Framer    | Expressive, visual, playful     |
| Consumer apps    | Apple / Airbnb    | Emotional, spacious, premium    |
| Productivity     | Notion            | Calm, structured, efficient     |
| E-commerce       | Shopify           | Clean, conversion-focused       |
| Social/community | Discord / Twitter | Bold, energetic, conversational |
| Health/fintech   | Plaid / Oscar     | Trustworthy, clean, reassuring  |
| AI/ML products   | v0 / Cursor       | Technical, progressive, dense   |

Then define these five axes explicitly:

- **Visual density**: Compact (information-dense) vs Spacious (breathing room)
- **Motion level**: None (zero animation) / Subtle (micro-interactions only, < 200ms) / Moderate (page transitions, staggered reveals) / Expressive (parallax, spring physics, choreographed sequences)
- **Interaction speed**: Instant (no perceived delay) vs Animated (transitions are part of the experience)
- **Emotional tone**: Playful (rounded, colorful) vs Serious (sharp, restrained)
- **Visual hierarchy**: Bold (large type, strong contrast) vs Subtle (nuanced, tonal)

Motion level is critical — it determines which animation library to use (if any), how entrance animations work, and what the AI agent is allowed to animate. A "None" product gets zero transitions. An "Expressive" product gets Framer Motion with spring physics.

These choices must appear as an explicit section in the DESIGN.md. They guide every downstream decision.

---

## Step 3 — Translate to Concrete Rules

Convert the taste profile into rules that produce the desired UX quality. Cover these areas:

### Visual Attraction

Define how the design draws the eye:

- Contrast strategy (where high contrast lives, where it doesn't)
- Whitespace philosophy (generous vs compact, and why)
- Typography hierarchy (how font size/weight creates scanning patterns)

### Interaction Delight

Define how the design feels responsive:

- Micro-interactions philosophy (subtle vs expressive)
- Feedback timing (instant vs staged, and acceptable delays)
- Hover, active, focus behaviors (consistent rules for all interactive elements)

### Cognitive Load Control

Define how the design reduces mental effort:

- Maximum choices visible per screen
- Progressive disclosure rules (what shows by default, what hides)
- Default vs advanced action separation

---

## Step 4 — Generate DESIGN.md

Produce a DESIGN.md file with ALL of the following sections. Use the exact section headers shown here.

### 1. Product Intent

Restate the product values, audience, tone, and promises extracted in Step 1. This section anchors everything that follows.

### 2. Design Principles

Write 3-5 opinionated principles. Each principle should:

- Have a bold name (e.g., "Clarity Over Decoration")
- Include a 1-2 sentence explanation
- Reference why it matters for this specific product

Do NOT write generic principles like "make it accessible" (that's a baseline, not a principle). Principles should reflect real tradeoffs and taste.

### 3. Taste Profile

Include the archetype, and the five axes from Step 2 with explicit choices:

```
Archetype: [reference product]
Density: [compact/spacious]
Motion: [none/subtle/moderate/expressive]
Speed: [instant/animated]
Tone: [playful/serious]
Hierarchy: [bold/subtle]
```

### 4. Visual System

#### Color Roles

Define colors by their functional role, not just hex values:

- **Primary**: The brand color, used for primary actions and key UI
- **Secondary**: Supporting color for less prominent elements
- **Accent**: High-attention color for CTAs, notifications, badges
- **Surface**: Background colors for cards, modals, sections
- **Text**: Primary, secondary, and muted text colors
- **Border**: Subtle dividers and card borders
- **Success/Error/Warning**: Semantic feedback colors

#### Typography Scale

Define a type scale with explicit sizes and use cases:

- Display (hero headlines)
- Heading (section titles)
- Subheading (card titles, form labels)
- Body (paragraphs, descriptions)
- Caption (metadata, timestamps)
- Code (if applicable)

Include font weight recommendations and line height ratios.

#### Spacing System

Define a spacing scale (e.g., 4px base unit):

- Micro (4px, 8px) — inline gaps
- Small (12px, 16px) — component padding
- Medium (24px, 32px) — section gaps
- Large (48px, 64px) — major section breaks
- XL (96px+) — hero/viewport spacing

### 5. UI Rules

#### Layout System

- Grid/column strategy
- Container max-widths
- Responsive breakpoint behavior
- Content width constraints for readability

#### Navigation Behavior

- Desktop nav pattern (fixed, sticky, hidden)
- Mobile nav pattern
- Active/selected states
- Transition behavior between pages/sections

#### Suggested Component Library

Based on the tech stack and product archetype, recommend a specific component library. This is a high-leverage decision — the AI agent needs to know what to import, not just what to build.

| Framework     | Developer/Technical    | Consumer/Premium          | Enterprise/Dense        | Creative/Playful    |
| ------------- | ---------------------- | ------------------------- | ----------------------- | ------------------- |
| React/Next.js | shadcn/ui + Radix      | Radix Primitives + custom | Ant Design / MUI        | Chakra UI / Mantine |
| Vue           | Radix Vue / Shadcn Vue | Headless UI Vue           | Element Plus / Naive UI | Vuetify             |
| Svelte        | Skeleton / Bits UI     | Melt UI                   | —                       | —                   |
| Plain HTML    | Open Props + Pico.css  | —                         | —                       | —                   |

Also recommend an icon library:

- **Lucide** — clean, consistent, works everywhere (default choice)
- **Phosphor** — more personality, good for consumer products
- **Heroicons** — Tailwind ecosystem, minimal
- **Radix Icons** — pairs with Radix Primitives

State the recommendation with a one-line rationale. If the project already uses a library (check `package.json`, existing component files), use that instead of suggesting a switch.

#### Directional Rules (RTL/LTR)

If the product supports RTL languages, define:

- **Logical properties**: Use CSS logical properties (`margin-inline-start` instead of `margin-left`, `padding-inline-end` instead of `padding-right`, `text-align: start` instead of `text-align: left`). This is mandatory for any layout that must work in both directions.
- **Mirroring rules**: Navigation, icons with directional meaning (arrows, progress bars), and layout grids must mirror in RTL. Decorative icons and brand marks do not mirror.
- **Text alignment**: Body text aligns to `start` (right in RTL, left in LTR). Numbers, codes, and URLs may remain LTR even in RTL contexts — use `direction: ltr` or `unicode-bidi: isolate` for these.
- **Bidirectional handling**: Mixed-language content (e.g., English brand names in Arabic UI) must use `unicode-bidi: isolate` to prevent text reordering corruption.
- **Spacing direction**: Gaps, padding, and margins that have directional meaning (e.g., nav indent, card padding) must use logical properties. Non-directional spacing (vertical gaps) remains the same.

If the product is LTR-only, state that explicitly and skip this section.

#### Component Usage Rules

When to use which component pattern. E.g.:

- Use cards for browsable collections
- Use modals for focused tasks that block background
- Use drawers for supplementary content
- Use toasts for non-blocking notifications

### 6. Component Contracts

For each core component, define:

**RTL note**: If the product supports RTL, each component contract must include a "RTL behavior" subsection specifying how the component mirrors or adapts. Directional icons (arrows, carets) flip. Label alignment follows `start`. Input icons (search, clear) move to the opposite side. Tab order follows reading direction.

#### Buttons

- Variants (primary, secondary, ghost, destructive)
- Sizes (sm, md, lg)
- States (default, hover, active, disabled, loading)
- Anti-patterns (e.g., "never use two primary buttons side by side")

#### Inputs

- Variants (text, textarea, select, checkbox, toggle)
- States (default, focus, error, disabled)
- Label placement and helper text rules
- Validation feedback timing

#### Cards

- Variants (content card, action card, stat card)
- Hover behavior
- Image/media rules
- Content hierarchy within cards

#### Forms

- Layout patterns (single column vs multi)
- Required field indication
- Error message placement
- Submit button behavior and loading states

### 7. Interaction Model

#### Motion & Animation System

Define animation based on the Motion level from the Taste Profile:

**Motion: None** — Zero animation. No transitions, no fades, no reveals. All state changes are instant. CSS: `transition: none`. No animation library needed.

**Motion: Subtle** — Micro-interactions only. Hover states, focus rings, toggle switches get transitions under 200ms. No entrance animations, no page transitions. CSS transitions only — no JS animation library.

**Motion: Moderate** — Page-level transitions are part of the experience. Staggered entrance animations on scroll. Skeleton screens with shimmer. Define:

- **Library**: CSS transitions + a lightweight observer (Intersection Observer for scroll reveals, or Framer Motion `useInView`)
- **Entrance pattern**: Fade-up with stagger (e.g., `opacity: 0 → 1`, `translateY(20px) → 0`, 500ms, 100ms stagger between siblings)
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Duration range**: 200ms (micro) to 700ms (large reveals)
- **Reduced motion**: Respect `prefers-reduced-motion` — disable all non-essential animation

**Motion: Expressive** — Animation is a core design element. Spring physics, choreographed sequences, parallax, gesture-driven animations. Define:

- **Library**: Framer Motion (React) / Auto Animate / GSAP for complex sequences
- **Spring config**: Stiffness, damping, mass values for bouncy vs smooth
- **Page transitions**: Shared layout animations, route transitions
- **Scroll-driven**: Parallax, scroll-linked progress, reveal choreography
- **Gesture support**: Drag, swipe, pinch with momentum
- **Reduced motion**: Fall back to Motion: Subtle behavior

For every motion level above "None", define specific animation patterns the AI agent should reuse:

```
# Animation: fade-up
CSS/JS: opacity 0→1, translateY(20px)→0
Duration: 500ms
Easing: ease-out
Use: Section reveals, card entrances

# Animation: scale-in
CSS/JS: scale(0.95)→scale(1), opacity 0→1
Duration: 200ms
Easing: ease-out
Use: Modal open, dropdown open

# Animation: shimmer
CSS: background-position sweep
Duration: 1.5s, infinite
Use: Skeleton loading states
```

#### Loading States

- Skeleton screens for initial page load
- Spinners for quick actions (< 2s)
- Progress bars for long operations (> 5s)
- Optimistic update rules

#### Error States

- Inline validation errors (position, style, timing)
- Page-level errors (404, 500)
- Toast notifications for transient errors
- Recovery actions (retry, undo)

#### Empty States

- First-use empty states (onboarding hints)
- No-results states (filter/suggestion guidance)
- Cleared/deleted states (confirmation + next action)

#### Feedback Timing

Timing rules depend on the Motion level:

- **Motion: None** — all feedback is instant (no animation)
- **Motion: Subtle** — micro-interactions at 100-200ms, no larger transitions
- **Motion: Moderate** — staged feedback (300ms-2s) uses simple fades, no spring physics
- **Motion: Expressive** — feedback timing can include choreographed sequences, spring physics

Beyond animation, define feedback mechanisms:

- Instant (< 100ms): hover states, focus rings
- Quick (100-300ms): button press, toggle
- Staged (300ms-2s): form submission, navigation (what happens while waiting)
- Long (2s+): processing, uploads — requires progress indicator

### 8. AI Enforcement Rules

This section is critical. Write explicit instructions for AI coding agents:

- **Always use defined components**: Never create ad-hoc button styles, input styles, or card layouts. Import and use the component library specified in the UI Rules. Do not reinvent common patterns.
- **Use the suggested component library**: Import from the recommended library (shadcn/ui, Ant Design, etc.). Do not create custom implementations unless the design requires visual differentiation that the library cannot achieve.
- **Use the suggested icon library**: Use Lucide, Phosphor, or the specified icon set. Do not mix icon libraries.
- **Never introduce new colors**: Only use colors from the defined color roles. If a color seems missing, use the closest existing role.
- **Respect spacing scale**: Only use values from the spacing system. No arbitrary pixel values.
- **Match typography scale**: Use defined type sizes and weights. No custom font sizes.
- **Follow motion level**: Only animate if the Taste Profile's Motion axis permits it. If Motion is "None", no transitions. If "Subtle", only micro-interactions under 200ms. If "Moderate", simple fades with stagger. If "Expressive", you may use spring physics and choreographed sequences. Import the animation library specified in the Motion & Animation System.
- **Use defined animations**: Only use the animation patterns listed in the Motion & Animation System section. Do not invent new animation effects.
- **Follow interaction patterns**: Loading states, error handling, and feedback must follow the defined interaction model.
- **Consistency over creativity**: When in doubt, match existing patterns rather than inventing new ones.
- **Accessibility is non-negotiable**: Focus states, color contrast (WCAG AA minimum), and semantic HTML are required regardless of what the visual design suggests.
- **RTL requires logical properties**: If the product supports RTL, never use `left`/`right` in CSS — always use `inline-start`/`inline-end`. Never hardcode directional margins, paddings, or text alignment. This prevents the need to maintain separate LTR and RTL stylesheets.

### 9. Anti-Patterns to Avoid

List specific things that break the design. Be concrete, E.g:

- "Do not center-align body text"
- "Do not use more than 2 font weights per component"
- "Do not add borders to cards if the system uses shadows"
- "Do not use modals for simple confirmations — use inline prompts"
- "Do not animate page transitions if the taste profile says 'instant'"
- "Do not add gradients unless the taste profile explicitly supports them"
- "Do not stack more than 3 levels of visual hierarchy on a single card"

If the product supports RTL, also include:

- "Do not use `margin-left` or `padding-right` — use `margin-inline-start` and `padding-inline-end`"
- "Do not hardcode text-align: left — use text-align: start"
- "Do not assume arrow icons point right — they must mirror in RTL"
- "Do not use fixed `left`/`right` positioning for overlays or dropdowns — use logical positioning"
- "Do not forget to test mixed-language content (English brand names in Arabic UI) for text reordering"

---

## Output

Save the generated DESIGN.md to the project root or to the path the user specifies. If no path is given, default to `DESIGN.md` in the current working directory.

---

## Edge Cases

- **No constitution provided**: Infer product intent from the user's description. State your inferences and ask the user to confirm.
- **Existing DESIGN.md**: If a DESIGN.md already exists, read it first. Ask the user whether to replace or refine it.
- **Multiple product types**: If the product spans categories (e.g., developer tool + productivity), choose the dominant archetype and note the secondary influence.
- **Framework-specific requests**: If the user specifies a framework (e.g., "for my React app"), note the framework in the UI Rules section but keep the DESIGN.md framework-agnostic where possible. Component contracts should describe behavior, not implementation.
- **RTL products**: If the product targets RTL languages, the DESIGN.md must include: logical property rules in UI Rules, RTL behavior in each Component Contract, an RTL-specific AI enforcement rule, and RTL anti-patterns. Do not treat RTL as an afterthought — design it into the system from the start.
