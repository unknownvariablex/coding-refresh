# Sideline Suitcase

A static website of travel tips for cheer & sports moms, with a Marriott Bonvoy® card referral page from Chase.

Plain HTML/CSS, no build step. Open `index.html` in a browser to preview.

## Structure

- `index.html` – home
- `articles/` – blog posts (each has a "short version" box, FAQ, and schema for search/AI)
- `marriott-bonvoy-referral.html` – the referral page to share
- `go/marriott/index.html` – **the only place the referral URL lives**; every button points here. Change the link once in this file.
- `about.html`, `disclosure.html`
- `robots.txt`, `sitemap.xml`, `llms.txt` – search engine + AI crawler setup
- `pins/` – Pinterest images (`node pins/make-pins.js` regenerates `pins/png/`)
- `MARKETING-PLAN.md` – the Pinterest + AI-search plan

## Launch checklist

1. Buy your domain and find/replace `https://sidelinesuitcase.com` everywhere.
2. Deploy for free on Cloudflare Pages or Netlify (point it at this repo, no build command, output dir `/`).
3. Add your real story/photo to `about.html`.
4. Read the Chase referral program terms about where you're allowed to share the link (see MARKETING-PLAN.md).

## Adding an article

Copy an existing file in `articles/`, change the title, meta description, canonical URL, JSON-LD, and content. Add it to the home page grid, `sitemap.xml`, and `llms.txt`.
