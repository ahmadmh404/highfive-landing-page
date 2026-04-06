# HighFive Landing Page - v0 AI Generator Prompt

Reference inspiration: https://github.com/adrianhajdin/portfolio (JSM Mastery portfolio - 3.6k stars)

---

## WHAT TO KEEP FROM JSM PORTFOLIO (Adrian Hajdin)

| Element                                 | Keep?  | Notes                                      |
| --------------------------------------- | ------ | ------------------------------------------ |
| Bento Grid                              | ✅ YES | Exact JSM style with varying card sizes    |
| 3D Earth/Globe                          | ✅ YES | Rotating animation                         |
| Button Styles                           | ✅ YES | Hover effects, glow                        |
| Projects Card Style                     | ✅ YES | Image + hover overlay + tech icons         |
| Testimonials Animation                  | ✅ YES | Horizontal carousel with auto-scroll       |
| Work Experience Cards Animation         | ✅ YES | Hover lift effect                          |
| **My Approach Section** (Canvas Effect) | ✅ YES | Animated dots/shapes - AMAZING for process |
| **Footer grid background**              | ✅ YES | Use content from my fototer                |

---

## WHAT TO KEEP FROM YOUR CURRENT SITE

| Element            | Keep?  | Notes                                       |
| ------------------ | ------ | ------------------------------------------- |
| **Header**         | ✅ YES | Keep your current header design and content |
| **Hero Content**   | ✅ YES | Keep your content                           |
| **Footer Content** | ✅ YES | Keep your footer links/content              |

## INSPIRE FROM THE IMAGE PROVIDED:

| Element          | Keep?  | Notes                                                                                                                |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| **Hero Content** | ✅ YES | Inspire the design and instead of the image use a big animated-bordered highlighted block of code calling an AI tool |

---

## Project Overview

Build a modern landing page combining:

- Your existing header design + hero content + footer content
- JSM-style bento grid, 3D elements, canvas animations
- Your AI tools as the "projects" showcase

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Three.js with @react-three/fiber and @react-three/drei
- Framer Motion for UI animations
- Lucide React icons
- this component code https://v0.app/chat/technologies-section-design-dL7zyZq14bI

## Design System

### Color Palette (JSM Style)

- Background dark: `rgb(4,7,29)` to `rgb(12,14,35)` gradient
- White text: `#FFF` / `#C1C2D3` / `#BEC1DD`
- Purple accent: `#CBACF9`
- Blue: `#E4ECFF`

---

## SECTION-BY-SECTION GUIDE

### 1. KEEP: Your Header

- Use your existing header component
- Keep your current navigation

### 2. Hero Section Content

- use the existing content title, subtitle and CTA.
- inspire from the her section image provided by adding the background NOT the gradient.
- instead of the product image in the hero add a big highlighted block of code is using google-search like AI package to enhance the user search experience with glow effect.
- Add stats card with simple animation.

### 3. Services Section

3-column grid with service cards with the same button border animation style.

### 4. Why Choose HighFive

- use the bento grid JSM style tailored for our startup.

### 5. Our Process (Canvas Effect - JSM Signature)

**USE THIS FOR YOUR PROCESS SECTION:**

- HTML5 canvas with animated dots/shapes
- Dots move in patterns using requestAnimationFrame
- Creates visual depth - user said "AMAZING for process"
- Perfect for showing your workflow/steps

### 6. Meet Our Team:

- grid of 5 canvas effect cards with the Person image in the front and it's details on the other side when hover

### 7. Projects Section.

- animated filtering of project categories.
- project's card must have the exact style of adrian's project card

### 8. Courses Section.

- list of courses scrolls horizontally when scrolling vertically and start scrolling when the first course is in the middle of the screen.
- use the JSM project card style without the hover effect.
- inspire the animation from this snippet of code

```ts
export default function CoursesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Adjust the percentage based on number of cards (6 cards → move ~400-500%)
  // Test and tweak this value until the last card is fully visible
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-420%"]);

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight">
            Featured Courses
          </h2>
          <p className="text-zinc-400 mt-3 text-xl">
            Master the technologies the industry demands
          </p>
        </motion.div>

        {/* Scroll container - tall enough to drive the animation */}
        <div ref={containerRef} className="relative h-[280vh]">
          {/* Sticky viewport */}
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-8 will-change-transform"
            >
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  className="min-w-[380px] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 hover:border-cyan-500 transition-colors"
                  whileHover={{ scale: 1.04, y: -12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Image */}
                  <div className="relative h-60">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                      {course.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-semibold leading-tight">
                        {course.title}
                      </h3>
                      <span className="text-cyan-400 font-mono text-lg">
                        {course.price}
                      </span>
                    </div>

                    <p className="text-zinc-400 line-clamp-2 mb-6">
                      {course.subtitle}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm uppercase tracking-widest text-zinc-500">
                        {course.level}
                      </span>
                      <button className="px-8 py-3 bg-white text-black rounded-2xl font-medium hover:bg-cyan-400 hover:text-white transition-all">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Optional subtle hint */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Scroll down to explore all courses →
        </p>
      </div>
    </section>
  );
}
```

### 9. Tech Stack

use the code from this component with existing data:
https://v0.app/chat/technologies-section-design-dL7zyZq14bI

### 10. Testimonials (JSM Style)

Horizontal carousel:

- 5 testimonials
- Quote + client name + title + stars
- Auto-scroll or scroll snap
- Framer Motion for smooth animation

## 11. AI Tools & Packages

- this is a section to try out ai tools.
- for now make it as normal cards with name, description, category of AI, Problem that solves, who needs this, and a try button.
- use the jSM cards style with a special touch on this (your creativity, trust you!).

### 11. FAQ

Accordion with 5 questions (expand/collapse)

### 12. Get is touch

- tow sections contact info, form.
  with 3D Globe in the background like the one in adrian's.

### 13. Footer

Use your existing footer content with adrian's footer background

---

## V0 PROMPT

```
Update this portfolio to a modern landing page for HighFive (digital agency focused on custom apps, AI tools and tech courses) using Next.js 16, Tailwind CSS 4, and Three.js containing sections defined above.

## COLOR SCHEME (JSM Dark)
- Background: linear-gradient(90deg, rgb(4,7,29) 0%, rgb(12,14,35) 100%)
- Text: white, #C1C2D3, #BEC1DD
- Accent: #CBACF9 (purple), #E4ECFF (blue)
- Cards: rgba(17, 25, 40, 0.75) with borders

## ANIMATIONS (JSM Style)
- CSS keyframes: spotlight, moveVertical, moveInCircle, moveHorizontal
- Framer Motion for UI animations
- Bento cards: hover scale + glow
- Testimonials: horizontal scroll carousel
- Canvas: animated dots pattern

## GRID BACKGROUND
Use SVG data URI for grid pattern overlay:
background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='rgba(255,255,255,0.05)'><path d='M0 .5H31.5V32'/></svg>")

Build as Next.js 16 App Router project with proper component organization.
```

---

## KEY JSM ANIMATIONS TO IMPLEMENT

```css
/* Add to globals.css or tailwind.config */
@keyframes spotlight {
  0% {
    opacity: 0;
    transform: translate(-72%, -62%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -40%) scale(1);
  }
}

@keyframes moveVertical {
  0%,
  100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
}

@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveHorizontal {
  0%,
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
}
```

---

## NOTES FOR v0

1. Keep header/hero content/footer contnet from existing site
2. Add JSM-style bento grid, 3D Earth, canvas effect
3. Use canvas animation for "Our Approach/Process" section
4. the translations file can guide you to the contents of each section, only the AI tools section i have tolled you each card content above in the sections details.
