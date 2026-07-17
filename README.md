# Ensight Creatives

Static marketing site for Ensight Creatives — aerial imaging in Dallas/Fort Worth and North Central Texas.

**Stack:** [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) · deployed to GitHub Pages at [ensightcreatives.com](https://www.ensightcreatives.com).

## Commands

```bash
npm install
npm run dev      # local preview
npm run build    # output to dist/
npm run preview  # preview production build
```

Requires Node 22+.

## Content

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Name, tagline, region, SEO description |
| `src/data/services.ts` | Landing page services |
| `src/data/projects.ts` | Portfolio entries — set `youtubeId` to an unlisted/public YouTube ID |

Example project entry:

```ts
{
  title: 'Site progress — Midtown',
  slug: 'midtown-progress',
  youtubeId: 'YOUR_YOUTUBE_ID',
  blurb: 'Weekly aerial documentation for the GC and ownership.',
  tags: ['Construction'],
  featured: true,
}
```

## Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io) that delivers to your inbox.
2. Copy the form ID from the endpoint (`https://formspree.io/f/XXXX`).
3. Add to `.env` locally (and as a GitHub Actions secret / Pages env if you inject at build time):

```bash
PUBLIC_FORMSPREE_FORM_ID=XXXX
```

`PUBLIC_` vars are inlined at build time by Astro. For GitHub Pages, set the variable in the workflow or repository variables so `npm run build` can read it:

```yaml
# in .github/workflows/pages.yml build step, optional:
env:
  PUBLIC_FORMSPREE_FORM_ID: ${{ secrets.PUBLIC_FORMSPREE_FORM_ID }}
```

Until the ID is set, the contact page shows a “not configured” notice instead of a live form.

## SMS alerts (Make.com → Twilio)

Keep phone numbers out of the repo and off the public site.

1. In Formspree, enable a webhook (or use Make’s Formspree / email trigger) on new submissions.
2. In [Make.com](https://www.make.com), create a scenario:
   - **Trigger:** Formspree new submission (or inbound email parsed from Formspree).
   - **Action:** Twilio → Send SMS to your private mobile number with name, project type, and a short message preview.
3. Store Twilio Account SID, Auth Token, and from/to numbers only in Make/Twilio — never in this repository.

Email from Formspree is the primary notification path; SMS is an optional second channel.

## Deploy

Pushes to `main` run `.github/workflows/pages.yml`: `npm ci` → `npm run build` → upload `dist/` (with `CNAME` + `.nojekyll`) to GitHub Pages.

Custom domain: `CNAME` file contains `ensightcreatives.com`.

## Brand

- Palette: horizon teal, skyline blue-green, sun flare gold, mist/cloud neutrals (see `src/styles/global.css`)
- Type: Space Grotesk (display) + Source Sans 3 (body)
- Mark: viewfinder/sight icon + EN/SIGHT wordmark (`src/components/LogoMark.astro`, `public/favicon.svg`)
- Hero: images in `public/stills/` crossfade in filename order (`01-`, `02-`, …). Set `videoPath` in `src/data/hero.ts` when a silent MP4 loop is ready.
