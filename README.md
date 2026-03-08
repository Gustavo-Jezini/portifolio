# Portfolio — Gustavo Jezini

Personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It showcases my work and makes it easy to get in touch.

> Current repo branch: `contact`

## ✨ Highlights

- **Home page** with portfolio sections.
- **Resume** on a dedicated route.
- **Contact** page with a form + an API endpoint built with a Route Handler.
- **i18n (PT/EN)** using a provider + JSON message files.
- Reusable UI components (Button, Card, Badge, Navbar, Footer, etc.).

## 🧱 Tech stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS** (+ PostCSS)
- **Prettier**

## 🗂️ Structure (quick overview)

- `src/app/(home)/page.tsx` — Home
- `src/app/resume/page.tsx` — Resume
- `src/app/contact/page.tsx` — Contact
- `src/app/api/contact/route.ts` — Contact API
- `src/app/i18n/` — provider, hook and messages
- `src/app/components/` — UI components

## 🧭 Routes

- `/` — Home
- `/resume` — Resume
- `/contact` — Contact
- `/api/contact` — Contact form endpoint

## 🚀 Run locally

### Requirements

- Node.js (recommended: LTS)
- A package manager: **npm**, **pnpm**, **yarn**, or **bun**

### Install & start

```bash
npm install
npm run dev
```

Then open: http://localhost:3000

## 📦 Scripts

Defined in `package.json`:

- `dev` — run the dev server (`next dev`)
- `build` — production build (`next build`)
- `start` — run the production server (`next start`)
- `lint` — lint (`next lint`)

## 🌍 Internationalization (i18n)

Message files:

- `src/app/i18n/messages/pt.json`
- `src/app/i18n/messages/en.json`

Provider/hook live under `src/app/i18n/`.

## 📨 Contact

The contact form is in `src/app/contact/ui/ContactForm.tsx` and calls:

- `src/app/api/contact/route.ts`

This project includes **Resend** as a dependency, so the API route can be wired to send emails.

Keep secrets in environment variables and **never** commit `.env`.

## 🧩 Components

Main components are in `src/app/components/`:

- `Navbar`, `Footer`, `Section`
- `Button`, `Card`, `Badge`
- `cn.ts` utility (className helper)

## ☁️ Deploy

Recommended: **Vercel** (best fit for Next.js).

Typical steps:

1. Import the repository into Vercel
2. Add environment variables (if any)
3. Deploy

## 📄 License

Personal use. Feel free to reuse the structure/components, but please don’t copy the text/branding without permission.
