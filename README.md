# HighFive — Enterprise Landing Page ✅

A production-ready, bilingual (English/Arabic) landing page built with **Next.js 16**, TypeScript and a Strapi headless CMS. Mobile-first, accessibility-minded, and optimized for performance and SEO.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Strapi CMS Setup](#strapi-cms-setup)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Demo

> Live demo: _(deployed on Vercel)_

Add screenshots or a GIF here to showcase the landing page.

---

## Features ✨

- Fully bilingual: English (LTR) and Arabic (RTL)
- Next.js 16 App Router with Server Components
- Framer Motion animations and scroll effects
- Dark / Light theme with system detection and toggle
- Strapi-powered CMS for dynamic content
- SEO-friendly: dynamic metadata, sitemap, robots, JSON-LD
- Performance optimizations: ISR, image optimization, minimal JS
- Accessibility-first: WCAG AA+ practices
- TypeScript throughout for type-safety

---

## Tech Stack 🔧

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4
- Animations: Framer Motion
- UI primitives: shadcn/ui
- CMS: Strapi (headless)
- Fonts: Geist (English), Cairo (Arabic)
- Deployment: Vercel (recommended)

---

## Quick Start 🚀

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- (Optional) Local Strapi instance when developing CMS-driven content

### Install

```bash
# clone
git clone https://github.com/<your-org>/highfive-landing-page.git
cd highfive-landing-page/frontend

# install dependencies (choose one)
pnpm install
# or
npm install
```

### Environment Variables

Create a `.env.local` file in `frontend/` with the following (example):

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_token
```

### Available scripts

```bash
# development
pnpm dev
# build for production
pnpm build
# start production server
pnpm start
# lint
pnpm lint
```

(Replace `pnpm` with `npm run` if you use npm.)

Open http://localhost:3000/en or http://localhost:3000/ar to view the site locally.

---

## Strapi CMS Setup 🗂️

The frontend expects the following content types and fields (i18n enabled where noted):

- Services (collection): title, description, icon, slug, featured
- Projects (collection): title, description, image, category, technologies, slug, featured
- Testimonials (collection): name, role, company, content, avatar, rating
- FAQs (collection): question, answer, category, order
- Global Settings (single): siteName, siteDescription, socialLinks, contactEmail
- Newsletter Subscriptions (collection): email

Tip: Enable i18n for the collections that require translations (Services, Projects, Testimonials, FAQs, Global Settings).

---

## Project Structure 📁

Key folders in `frontend/`:

- `app/` — Next.js app router, locales, metadata and pages
- `components/` — Page sections and UI primitives
- `components/ui/` — shadcn-based UI components
- `lib/` — i18n config, Strapi client, theme and utilities
- `public/` — static assets
- `styles/` — global styles

---

## Deployment 🧩

Vercel is recommended for simple deployment and serverless features. Configure environment variables in the Vercel project settings and connect the repository.

Recommended production settings:

- Enable image optimization
- Configure ISR revalidation if using incremental cache strategies

---

## Contributing 🤝

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit changes and push
4. Open a pull request describing your change

Please open issues for bugs or feature requests.

---

## License

© 2025 HighFive. All rights reserved.

---

## Contact

For questions or help, reach out to the maintainers or open an issue in the repository.
