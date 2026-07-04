# Bear Group DCM — Website

This folder contains the **complete, ready-to-publish website** for Bear Group (Design + Construction Management). It is a single static web page plus its images. Nothing needs to be "built" or compiled — it can go live exactly as-is.

There are two ways to use this folder:

- **Option A — Publish it as-is** (fastest, recommended). Steps below for GitHub → Vercel → GoDaddy.
- **Option B — Hand it to an AI coding assistant** (e.g. Cursor, v0, Claude Code, Lovable) to rebuild it inside a larger app or framework. The full design spec is included so it can be reproduced *exactly*.

---

## What's in this folder

```
bear-group-website/
├── index.html        ← the entire website (structure, styling, and interactions)
├── robots.txt        ← tells search engines they may index the site
├── sitemap.xml       ← lists the public homepage URL for search engines
├── site.webmanifest  ← browser/app metadata and favicon reference
├── tests/            ← small verification scripts for launch-critical checks
├── docs/             ← saved parked content that is not currently public
├── assets/           ← images & logos used by the page
│   ├── logo-bgdcm.png            (the BGDCM logo — transparent background)
│   ├── favicon.svg               (browser tab icon)
│   ├── hero-rotating-1.jpg       (homepage hero rotation images)
│   ├── hero-rotating-2.jpg
│   ├── hero-rotating-3.jpg
│   ├── hero-rotating-4.jpg
│   ├── hero-rotating-5.jpg
│   ├── client-jbgsmith.png       (client logos…)
│   ├── client-davis.svg
│   ├── client-tower.svg
│   ├── client-redbrick.png
│   ├── client-brighterdays.png
│   ├── client-moleskine.png
│   └── proj-*.png               (parked project images for possible future use)
└── README.md         ← this file
```

> **Keep `index.html` and the `assets/` folder together.** The page points at images using relative paths like `assets/hero-rotating-1.jpg` and `assets/logo-bgdcm.png`. If you move or rename the folder, keep that structure intact.

---

## ⚠️ Launch checks before going fully live

1. **The contact form opens the visitor's email app — it does not send mail to a server.** When someone clicks "Send inquiry," it pre-fills an email to `pbautista@beargroupdcm.com`. That works everywhere with zero setup, but if you want submissions captured automatically (e.g. into a spreadsheet or inbox), connect a free form service like **Formspree** or **Basin**, or add a serverless function. An AI coding assistant can wire this up in a few minutes — see Option B.
2. **Confirm the final primary domain before submitting to Google.** The SEO metadata currently assumes the public site will use `https://beargroupdcm.com/`. If Vercel is configured to prefer `https://www.beargroupdcm.com/`, update `index.html`, `robots.txt`, and `sitemap.xml` before submitting the sitemap to Google Search Console.
3. **Keep project-specific images private until approved.** The images in `assets/proj-*.png` support the parked project-index content in `docs/parked-content/project-work-sections.html`; they are not used on the current public homepage. If the project index is restored later, confirm all project names, details, and image rights before launch.

### SEO verification

After SEO-related edits, run:

```bash
node tests/seo-metadata.test.mjs
```

This checks the page title, meta description, social-share tags, structured business data, favicon, `robots.txt`, and `sitemap.xml`.

After launch-cleanup edits, run:

```bash
node tests/launch-cleanup.test.mjs
```

This checks for common pre-domain cleanup issues, such as leftover generated-bundler files, placeholder links, unescaped font URL ampersands, and retired CSS from removed page sections.

---

## Option A — Publish the site (GitHub → Vercel → GoDaddy)

You do **not** need to know how to code for this. Roughly 20–30 minutes the first time.

### Step 1 — Put the files on GitHub
GitHub stores your website files online so Vercel can read them.

1. Create a free account at **github.com**.
2. Click the **+** (top-right) → **New repository**.
3. Name it something like `bear-group-website`. Leave it Public (or Private — both work). Click **Create repository**.
4. On the new repo page, click **"uploading an existing file"**.
5. Open this `bear-group-website` folder on your computer, select **`index.html`**, **`assets`**, **`robots.txt`**, **`sitemap.xml`**, and **`site.webmanifest`**, and drag them into the browser upload area. Wait for them to finish uploading.
6. Click **Commit changes**.

✅ Your files are now on GitHub.

### Step 2 — Deploy with Vercel
Vercel turns those files into a live website, for free, with automatic HTTPS.

1. Go to **vercel.com** and click **Sign Up** → **Continue with GitHub** (this links the two accounts).
2. Click **Add New… → Project**.
3. Find your `bear-group-website` repository in the list and click **Import**.
4. **Framework Preset:** choose **Other**. There is no build step — leave every other setting at its default. (Build/Output fields can stay empty.)
5. Click **Deploy** and wait ~30 seconds.

✅ Vercel gives you a live URL like `bear-group-website.vercel.app`. Open it — that's your site.

> From now on, any time you upload a change to GitHub, Vercel re-publishes it automatically within a minute.

### Step 3 — Connect the GoDaddy domain
This points the real domain (e.g. `beargroupdcm.com`) at your Vercel site.

1. In your Vercel project, go to **Settings → Domains**.
2. Type the domain (e.g. `beargroupdcm.com`) and click **Add**.
3. Vercel will show you **the exact DNS records to create** — usually:
   - an **A record** for the root domain (`@`), and
   - a **CNAME record** for `www`.
   ⚠️ **Use the exact values Vercel displays on your screen** — don't copy values from articles online, because Vercel's recommended addresses change over time.
4. In a separate tab, log in to **GoDaddy** → **My Products** → next to the domain click **DNS** (or "Manage DNS").
5. Add (or edit) the records to **match exactly** what Vercel showed you. Save.
6. Go back to Vercel — it will verify automatically. DNS usually updates within minutes, but can take up to 24–48 hours. Vercel issues the SSL certificate (the padlock 🔒) for free once verified.

✅ When the domain shows a green "Valid Configuration" in Vercel, the site is live on the real address.

### Updating the site later
- **Small text edits:** on GitHub, open `index.html`, click the pencil ✏️ icon, edit, and **Commit**. Vercel re-publishes automatically.
- **New images:** upload them into the `assets` folder on GitHub (same filename to replace an existing one).
- Or let an AI assistant make changes for you (Option B), then re-upload `index.html`.

---

## Option B — Hand off to an AI coding assistant

If you'd rather an AI rebuild this inside a framework (React/Next.js, etc.), add a backend for the contact form, or extend it into a multi-page site, give the assistant **this entire folder** and the prompt below.

> **Prompt to paste:**
> "This folder contains a finished marketing website built as a single `index.html` file with an `assets/` image folder. Treat `index.html` as the **exact design reference** — match its layout, typography, colors, spacing, and interactions precisely. Recreate it in [your chosen framework, e.g. Next.js] using clean components, keep all live images from `assets/`, and make it fully responsive (it already is — preserve the breakpoints). Then wire the contact form to actually send submissions to pbautista@beargroupdcm.com using a form service or serverless function. The design spec and tokens are documented in README.md — follow them."

Everything the assistant needs to reproduce the look is in the **Design Reference** section below.

---

## Design Reference (for exact reproduction)

The entire design lives in `index.html` — all CSS is in one `<style>` block in the `<head>`, and the small amount of JavaScript (mobile menu toggle + contact-form mailto handler) is in a `<script>` at the bottom. No frameworks, no dependencies.

### Fonts
Loaded free from Google Fonts (already linked in the `<head>`):
- **Libre Franklin** — headings & body. Weights used: 300, 400, 500, 600, 700.
- **IBM Plex Mono** — labels, captions, codes, UI accents. Weights: 400, 500, 600, 700.

### Color tokens (CSS variables in `:root`)
| Token | Value | Used for |
|---|---|---|
| `--bg` | `#F5F6F8` | Page background (light warm gray) |
| `--panel` | `#FFFFFF` | Cards, tables, panels |
| `--ink` | `#15181C` | Primary text; dark contact section background |
| `--ink-2` | `#586068` | Secondary / muted text |
| `--line` | `#D6DAE0` | Hairline borders |
| `--line-strong` | `#A9B0B8` | Stronger borders / section dividers |
| `--grid` | `rgba(21,24,28,.045)` | The faint 44px background grid |
| `--accent` | `oklch(0.52 0.05 245)` | Muted slate-blue accent (index numbers, links) |
| Logo blue | `#186CF2` | The BGDCM logo's vivid blue |

### Layout system
- Centered content column: **max-width `1340px`**, side padding scales `20px → 32px → 44px` at larger screens.
- A faint **44px × 44px grid** is painted across the page background (and a lighter version on the dark contact section).
- **Breakpoints:** `680px` (tablet) and `960px` (desktop). Below 680px everything is single-column; the nav collapses into a hamburger menu.
- Recurring motif: bordered "panel" blocks (services list, client grid, ledger, notable past-project groups) with mono labels like `[01]`, `SVC-01`, and `P-01`.

### Page sections (top to bottom)
1. **Sticky header** — small BGDCM logo + "BEAR GROUP / Design + Construction Mgmt" lockup, nav links, "Inquire" button; hamburger menu on mobile.
2. **Hero** — rotating full-bleed project imagery, large headline ("Trusted leadership, built into every project."), sub-paragraph, and a 4-cell spec bar.
3. **Services `[01]`** — 8-item services list (SVC-01…08).
4. **About `[02]`** — principal bio (PJ Bautista) + a "ledger" of facts (Founded 2026, Experience, etc.).
5. **Clients `[03]`** — 6 client logos in a responsive grid, plus grouped notable past-project content.
6. **Contact `[04]`** — dark section: heading, direct contact details, and the inquiry form.
7. **Brand band** — large centered BGDCM logo with mono captions.

### Interactions
- Mobile hamburger toggles the menu (animated to an X).
- Smooth-scroll anchor navigation.
- Hover states on nav links, buttons, service rows, and client logos.
- Contact form builds a `mailto:` link and opens the visitor's email client (no backend — see fix #2 above).

### Content/contact details currently in the site
- Email: `pbautista@beargroupdcm.com`
- Phone in structured data: `202.445.9764`
- Address: `6800 Wisconsin Ave #1110, Chevy Chase, MD 20815`

---

*Built for Bear Group DCM. The two client wordmarks `client-davis.svg` and `client-tower.svg` are the companies' official logos; `logo-bgdcm.png` is Bear Group's own mark with its background removed for flexible placement.*
