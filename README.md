# Tejasvi Javagal — Portfolio

A responsive, data-driven Next.js portfolio for a software engineer building intelligent systems, AI products and full-stack applications.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npx tsc --noEmit
```

## Deploy to Render.com

This project includes a native `render.yaml` blueprint for 1-click deployment on Render:

1. Push your changes to your GitHub repository (ensure images in `public/projects/` and `public/resume/` are included).
2. Log in to [render.com](https://render.com) and click **New +** → **Blueprint**.
3. Connect your GitHub repository (`javagaltejasvi46/my_portfolio`).
4. Render will automatically detect `render.yaml` and configure:
   - **Environment**: Node.js (v22)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Click **Apply** to deploy!

*Alternatively*, you can create a **Web Service** manually on Render:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment Variable**: `NODE_VERSION` = `22`

## Deploy to Vercel

Push this folder to a Git repository, import it in Vercel, and use the default Next.js settings. Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL (see `.env.example`) for canonical metadata and sitemap URLs.

## Edit content

- `data/site.ts` — name, professional positioning, social links, email, production URL and skills.
- `data/projects.ts` — every project card and case study. Update NETRA.ai only with verified repository/README information.
- `data/site.ts` → `journey` — timeline content.
- `public/resume/tejasvi-javagal-resume.pdf` — add your resume PDF; the `/resume` route will serve it.
- `public/projects/` — add verified project screenshots when they become available. The current visual panels are CSS product representations, avoiding fabricated screenshots.

## Structure

- `app/` contains the App Router pages, SEO routes, styles, work case-study route, and resume route.
- `components/` contains navigation, project visuals, and footer.
- `data/` is the single source of truth for portfolio content.

## Quality notes

The site is responsive down to 360px, uses semantic landmarks, keyboard-friendly navigation, visible focusable controls, and honors `prefers-reduced-motion`. `Ctrl/Cmd + K` opens a small command palette.
