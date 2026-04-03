# Quickstart: HighFive Landing Page MVP

## Prerequisites

- Node.js 18+
- pnpm (preferred) or npm
- Git

## Setup

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Run development server**:

   ```bash
   pnpm dev
   ```

3. **Open browser**: http://localhost:3000

## Project Structure

```
highfive-landing-page/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles + Tailwind
├── components/             # Reusable components
│   ├── ui/                # Base UI (Button, Card, Modal, etc.)
│   ├── sections/          # Page sections (Hero, Services, Team, etc.)
│   └── features/          # Feature-specific components
├── lib/                   # Utilities and data
│   ├── data/              # Static JSON data (team, projects, courses, AI tools)
│   └── utils.ts           # Helper functions
├── hooks/                 # Custom React hooks
├── public/                # Static assets
│   ├── images/            # Team photos, project screenshots
│   └── icons/             # Static icons
├── specs/                 # Feature specification
│   └── 001-landing-page-mvp/
│       ├── spec.md        # Feature spec
│       ├── plan.md        # Implementation plan
│       ├── research.md    # Research findings
│       └── data-model.md  # Data model
└── package.json
```

## Key Commands

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build for production     |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |

## Features to Implement

Per the spec, implement in priority order:

1. **Hero Section** (P1): Headline, subheadline, value prop, two CTAs with smooth-scroll
2. **Services Section** (P1): Three service cards with placeholder content
3. **Contact Form** (P1): Name, email, phone, project type, details + client-side validation + success message
4. **AI Tools Section** (P1): 3+ tools with "Try Live" button → modal with form + mock API delay
5. **Team Section** (P2): 3 member cards with photo, name, role, bio, social links
6. **Projects Section** (P2): Filterable grid with 3+ projects
7. **Courses Section** (P2): Preview grid with 3+ courses
8. **Theme & Language** (P3): Dark/light mode toggle + language switcher

## Data Files

Create mock data files in `lib/data/`:

- `team.ts` - Team member data
- `ai-tools.ts` - AI tool definitions with form fields and mock responses
- `projects.ts` - Portfolio projects
- `courses.ts` - Course listings

## Implementation Notes

- Use existing `components/ui/` for base components
- Dark/light mode is already implemented—enhance visually per Constitution
- Localization is already implemented—add new content keys
- AI tool demos use dummy API with 2-5 second simulated delay
- No backend required—contact form is client-side only
- Remove all placeholder/fake content per FR-016

## Reference

- Spec: `specs/001-landing-page-mvp/spec.md`
- Constitution: `.specify/memory/constitution.md`
