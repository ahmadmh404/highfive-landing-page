# HighFive Website Constitution

## Core Principles

### I. Honesty & Transparency

We are a small team of 3 friends, not a big agency. All communication MUST reflect this reality. Fake stats, client logos, and placeholder testimonials MUST be removed. Team representation MUST use real photos, names, and bios.

### II. Usefulness Over Polish

Visitors MUST be able to try AI tools live and understand their value instantly. Every AI tool MUST have a working interactive demo with realistic loading states and mock data. Functionality MUST prioritize user value over visual decoration.

### III. Human Touch

The site MUST feature real team faces and maintain a friendly yet technical tone. Corporate buzzwords ("cutting-edge", "digital transformation", "excellence") are FORBIDDEN. Voice MUST sound like skilled developers who love solving real problems.

### IV. Technical Excellence

The site MUST achieve Lighthouse score >90 on mobile and desktop. Code MUST be clean, use provided components where suitable, and follow Next.js 16 App Router patterns. Performance, accessibility (WCAG AA+), and SEO are non-negotiable.

### V. Design Modernity with Human Feel

The UI MUST support both dark and light modes with modern gradients, subtle animations, and glassmorphism/neubrutalism accents where suitable. Typography MUST be clean with generous spacing and micro-interactions. Mobile-first responsive design is mandatory.

## Technical Constraints

- **Framework**: Next.js 16 (App Router) — MUST use existing setup
- **Styling**: Tailwind CSS v4 — MUST use existing configuration
- **UI Components**: shadcn/ui components in `components/ui/` — MUST reuse where applicable
- **Animations**: Framer Motion — MUST use for scroll effects and micro-interactions
- **Localization**: i18n (English/Arabic) — MUST maintain and support existing implementation
- **Dark/Light Mode**: next-themes — MUST enhance existing with modern visual treatment
- **AI Tool Demos**: Fully functional UI with dummy API calls (mock data + realistic loading states) for launch
- **CMS**: Strapi headless CMS — MUST maintain existing integration for dynamic content

## Development Phases

### Phase 1 – MVP (Launch Ready)

1. Update project structure and integrate modern components
2. Hero + Navigation overhaul with team teaser
3. Meet the Team section with real photos and bios
4. AI Tools & Packages section with 3+ interactive demos (dummy API)
5. Projects section with real project showcases
6. Courses preview section
7. Contact form + footer
8. Polish dark/light mode with modern techy styling

**Success Criteria**: Site feels modern and human, AI Tools are interactive and impressive, all fake content removed, fast performance, good mobile experience.

### Phase 2 – Post-Launch

- Full dedicated `/ai-tools` page with more tools
- Full `/projects` and `/courses` pages
- Real backend integration for AI tools (replace dummy API)
- Add more courses and real testimonials
- Blog / case studies section (optional)

### Phase 3 – Future

- User accounts / course enrollment
- Real payment integration for courses/packages
- Advanced analytics on tool usage

## Governance

- Amendments to this constitution require approval from all 3 team members
- Version follows semantic versioning: MAJOR for principle removals/redefinitions, MINOR for new principles/sections, PATCH for clarifications
- Constitution MUST be reviewed before each phase transition
- All code changes MUST align with the principles defined herein
- Compliance review expected at each milestone completion

**Version**: 1.0.0 | **Ratified**: 2026-04-02 | **Last Amended**: 2026-04-02
