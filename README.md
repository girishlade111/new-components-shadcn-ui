# New Components — shadcn/ui Showcase

A live component gallery demonstrating the **new shadcn/ui components** (field, button-group, input-group, item, empty, spinner) in action — a responsive grid page where each card renders an interactive demo you can inspect and copy into your own projects.

Originally generated with [v0.app](https://v0.app); hardened and documented here for open use.

## What it does

- Renders a responsive gallery (`app/page.tsx`) of interactive demos for shadcn/ui's newer component set.
- Every demo is a self-contained React component under `components/`, wired with real state — sliders slide, popovers open, checkboxes check.
- `components/ui/` holds the shadcn/ui primitives themselves (button, field, input-group, item, empty, spinner, dialog, dropdown-menu, etc.) — copy-pasteable into any shadcn project.
- Includes themed variants (appearance settings with light/dark toggle) and composite demos like the Notion-style prompt form.

## Demoed components

- **Field** — field, field-label, field-separator, choice cards, sliders
- **Button group** — demos, nested groups, popovers, input-group combos
- **Input group** — button addons, textarea variants
- **Item** — avatar items with actions
- **Empty** — empty-state patterns (avatar group, plain)
- **Spinner** — badges and empty-state spinners
- **Appearance settings** — theme controls demo
- Plus the full standard shadcn/ui set in `components/ui/` (accordion, dialog, dropdown-menu, tabs, toast, tooltip, …)

## Features

- Interactive, copy-paste-ready component demos
- Responsive multi-column gallery layout
- Light/dark theme support (next-themes)
- Static export ready (`output: 'export'`) — deployable to any static host
- TypeScript + Tailwind CSS 3 throughout

## Tech stack

- Next.js 15 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS 3 + tailwindcss-animate
- shadcn/ui (Radix UI primitives, class-variance-authority, tailwind-merge)
- lucide-react + @tabler/icons-react icons
- next-themes (dark mode)

## Quick start

```bash
# install dependencies (pnpm or npm)
pnpm install
# or: npm install --legacy-peer-deps

# run the dev server
pnpm dev
# open http://localhost:3000

# production build (static export → ./out)
pnpm build

# serve the exported site locally
npx serve out
```

To use any single component in your own project: copy the file from `components/ui/` (and its demo from `components/`) — the `lib/utils.ts` `cn()` helper and the Tailwind theme tokens in `app/globals.css` are the only shared requirements. See `components.json` for the shadcn CLI configuration.

## Project structure

```
├── app/
│   ├── page.tsx            # gallery page assembling all demos
│   ├── layout.tsx          # root layout
│   └── globals.css         # Tailwind theme tokens
├── components/
│   ├── ui/                 # shadcn/ui primitives (button, field, input-group, item, empty, spinner, …)
│   ├── *-demo.tsx          # interactive demo for each component
│   ├── appearance-settings.tsx
│   ├── notion-prompt-form.tsx
│   └── theme-provider.tsx
├── lib/utils.ts            # cn() class-merging helper
├── components.json         # shadcn CLI config
└── next.config.mjs         # static export + basePath configuration
```

## Configuration

`next.config.mjs` sets:

- `output: 'export'` — builds a fully static site into `out/`
- `basePath: '/new-components-shadcn-ui'` — required when served from the `girishlade111.github.io/new-components-shadcn-ui` GitHub Pages subpath. **Remove `basePath` (or point it at `/`) if deploying to a domain root or Vercel.**
- `images.unoptimized: true` — required for static export

## Environment variables

None required. The app is 100% client-side and calls no APIs.

## Deployment

- **GitHub Pages:** `pnpm build` → publish `out/` to the `gh-pages` branch. Live at `https://girishlade111.github.io/new-components-shadcn-ui/`
- **Vercel / Netlify / Cloudflare Pages:** push the repo and deploy as a Next.js/static site (set output directory to `out`). If deploying to a root domain, remove the `basePath` setting from `next.config.mjs` first.

## Credits

Built by Girish Lade — https://ladestack.in
