# Gill Organics

A production-ready Next.js 14+ site for **Gill Organics**—lease organic farmland and get fresh seasonal vegetables delivered to your door.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **SCSS Modules** (no Tailwind)
- **next/font** (Playfair Display + Inter)
- **next/image** for all images
- **ESLint** configured
- Path alias: `@/` → project root

## Folder Structure

```
gill-organics/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── testimonials/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── loading.module.scss
│   ├── error.module.scss
│   └── page-inner.module.scss
├── components/
│   ├── Header/
│   │   ├── Header.tsx          ("use client" – scroll + mobile menu)
│   │   └── Header.module.scss
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.scss
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.scss
│   ├── Container/
│   │   ├── Container.tsx
│   │   └── Container.module.scss
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.scss
│   ├── AboutSection/
│   ├── ServicesSection/
│   ├── WhyUsSection/
│   ├── FeaturesSection/
│   ├── TestimonialsSection/
│   ├── FAQSection/
│   └── ContactSection/
├── styles/
│   ├── globals.scss
│   ├── variables.scss
│   └── mixins.scss
├── lib/
│   ├── constants.ts            (NAV_LINKS, SITE_NAME, SITE_DESCRIPTION)
│   └── images.ts               (placeholder image URLs)
├── public/
│   └── images/
│       ├── .gitkeep
│       └── README.md           (how to add your own images)
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Setup

### 1. Create the project (if starting from scratch)

If you’re not already in the project folder:

```bash
npx create-next-app@latest gill-organics --typescript --eslint --app --no-tailwind --no-src-dir --import-alias="@/*"
cd gill-organics
```

Then replace the generated files with this codebase, or clone/copy this repo.

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The landing page matches the design: Hero, About, Services, Why Us, Features, Testimonials, FAQ, and Contact sections.

### 4. Build for production

```bash
npm run build
npm start
```

## Vercel Deployment (3 steps)

1. **Push to GitHub**  
   Create a repo and push this project.

2. **Import in Vercel**  
   Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo. Leave build command as `npm run build` and output as Next.js.

3. **Deploy**  
   Click Deploy. Vercel will build and host the site. Optional: set `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables to your production URL for correct Open Graph URLs.

## Architecture (beginner-friendly)

- **App Router**: Each URL (e.g. `/about`, `/contact`) is driven by a `page.tsx` under `app/`. `layout.tsx` wraps all pages with the same Header and Footer and loads global styles and fonts.
- **Components**: Reusable pieces live in `components/`. The **Header** is a client component (`"use client"`) so it can use `useState` (mobile menu) and `useEffect` (scroll-based background). The rest are server components by default.
- **Styles**: Global tokens (colors, fonts, breakpoints) are in `styles/variables.scss` and `styles/mixins.scss`. Each component has its own `*.module.scss` so class names don’t clash. We use a BEM-like naming inside modules.
- **SEO**: The root `layout.tsx` sets a default title and description. Each `page.tsx` can export a `metadata` object with its own `title`, `description`, and `openGraph` for social sharing.
- **Images**: Placeholder image URLs are in `lib/images.ts` so the app runs without local files. To use your own assets, add them under `public/images/` and point `lib/images.ts` to paths like `/images/hero-bg.jpg`.

## Lint

```bash
npm run lint
```

---

**Gill Organics** – From your soil to your kitchen.
