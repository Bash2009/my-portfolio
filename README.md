# Portfolio — Athekame Bashir

Personal portfolio site for Athekame Bashir, a full-stack developer. Built with React, TypeScript, and Vite.

## Tech Stack

- **Framework:** React 19, TypeScript
- **Build Tool:** Vite 7
- **Styling:** Plain CSS with design tokens (dark/light theme)
- **Icons:** Lucide React
- **Contact Form:** EmailJS (serverless)

## Sections

- **Hero** — Name, role, tagline, CTA buttons, profile photo with status indicator
- **Background** — Bio and stats (projects, technologies, stack layers)
- **Stack** — Skills grouped by Frontend, Backend, Database, Tools
- **Projects** — Project cards with tech tags and live demo links
- **Contact** — Email form with EmailJS integration + social links (GitHub, LinkedIn, email)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR     |
| `npm run build`   | Type-check then production build   |
| `npm run lint`    | Run ESLint                         |
| `npm run preview` | Preview production build locally   |

## Environment Variables

The contact form requires EmailJS credentials in a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```
