# Balaji Bentota — Official Real Estate Marketing Website

Production-ready marketing and brochure website for **Shri Balaji Builders & Developers** for their premier residential apartment project **"Balaji Bentota"** located on **Indrali Railway Station Road, Kunjibettu, Udupi – 576102** (Architectural Consultant: **A.G. Associates**).

---

## 🏗️ Architecture & Technology Stack

This project is built as a modular monorepo:

- **`/studio`**: [Sanity Studio v3](https://www.sanity.io/) (TypeScript CMS) for full content management of unit inventories, floor plans, technical specifications, amenities, photo gallery, and customer enquiry tracking.
- **`/web`**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/) frontend:
  - **Motion System**: [GSAP](https://greensock.com/gsap/) + ScrollTrigger for scroll-based section reveals, clip-path image unveils, and micro-interactions.
  - **Smooth Inertial Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis) integrated directly with GSAP's `ScrollTrigger.update`.
  - **Data Layer**: Powered by `@sanity/client` with GROQ queries, with comprehensive built-in brochure seed data for instant offline/standalone operation.
  - **Serverless API**: `/api/enquiry.ts` (Vercel serverless function) with [Zod](https://zod.dev/) validation to securely store leads into Sanity and dispatch pre-filled WhatsApp deep-links without exposing private write tokens to the client.

---

## 🎨 Design System & Visual Identity

- **Color Tokens**:
  - Primary Background: `#FFFFFF`
  - Alternating Section Fill: `#FAF9F6`
  - Deep Heritage Navy: `#12233F`
  - Brochure Burgundy/Maroon: `#6E1E2A` (matching brochure "BOOK NOW" buttons)
  - Architectural Gold: `#C9A35C` (monogram & accent badges)
- **Typography**:
  - Headings: *Playfair Display* (luxury serif)
  - Body: *Inter* (high-clarity modern sans)
- **Motion Patterns**:
  - **Preloader**: Session-persisted monogram reveal (`sessionStorage`).
  - **Navbar**: Transparent over hero; switches to solid white and navy with shadow past hero height.
  - **Ken-Burns Hero**: Cinematic subtle zoom on the authentic elevation render.
  - **Interactive Floor Plan Viewer**: Instant toggle between Typical Floor and First Floor schematics with 2 & 3 BHK filter chips and blueprint zoom.
  - **Infinite Marquee Watermark**: Decorative running text behind the photo gallery.
  - **Floating WhatsApp**: Pulsing quick-connect button directly linked to the booking desk.

---

## 📂 Project Structure

```
balaji-bentota-website/
├── studio/                           # Sanity Studio CMS
│   ├── schemaTypes/                  # Schema types (siteSettings, unit, floorPlan, etc.)
│   ├── deskStructure.ts              # Custom desk navigation grouping
│   ├── sanity.config.ts              # Sanity Studio config
│   ├── sanity.cli.ts
│   └── package.json
├── web/                              # React + Vite Frontend
│   ├── api/
│   │   └── enquiry.ts                # Serverless Vercel function with Zod validation
│   ├── public/
│   │   ├── assets/                   # Authentic brochure elevation render, floor plans & flyers
│   │   ├── favicon.svg
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/               # Layout, Home, About, Project, Gallery, Contact
│   │   ├── hooks/                    # useLenis & useScrollReveal
│   │   ├── lib/                      # sanityClient, animationConfig, submitEnquiry, seo
│   │   ├── pages/                    # 5 core pages (Home, About, Project, Gallery, Contact)
│   │   └── styles/                   # tokens.css & index.css
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Web Frontend (`/web`)

```bash
cd web
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

> **Note**: The frontend works 100% out of the box with the authentic brochure data and floor plans. When you are ready to link a live Sanity project, create `web/.env` with your project credentials (see `web/.env.example`).

### 2. Sanity Studio (`/studio`)

```bash
cd studio
npm install
npm run dev
```

Visit [http://localhost:3333](http://localhost:3333) to manage site settings, apartment units, and enquiries.

---

## 🔐 Environment Variables

### In `web/.env`:
```env
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
SANITY_WRITE_TOKEN=your_server_write_token_here
```

### In `studio/.env`:
```env
SANITY_STUDIO_PROJECT_ID=your_sanity_project_id
SANITY_STUDIO_DATASET=production
```

---

## 🚢 Deployment

1. **Frontend + Serverless API (`/web`)**:
   Deploy effortlessly on [Vercel](https://vercel.com/):
   - Root directory: `web`
   - Framework preset: `Vite`
   - Add environment variables (`VITE_SANITY_PROJECT_ID`, `SANITY_WRITE_TOKEN`, etc.).
2. **CMS (`/studio`)**:
   Deploy using `npm run deploy` inside the `studio` folder to host directly on Sanity's global edge network (`*.sanity.studio`), or deploy to Vercel/Netlify.

---

## 📞 Booking & Project Contacts

- **Booking Hotlines**:
  - `+91 9740763625`
  - `+91 8660576288`
  - `+91 7795716581`
- **Project Site**: Balaji Bentota, Indrali Railway Station Road, Kunjibettu, Udupi – 576102
- **Developer**: Shri Balaji Builders & Developers, “Shri Balaji”, Udyavara, Udupi Dist.
- **Architectural Consultant**: A.G. Associates (ISO 9001:2015 certified) — [agaudupi.com](http://agaudupi.com)
