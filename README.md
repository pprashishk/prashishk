# Portfolio

A single-page, dark-themed portfolio built with plain HTML/CSS/JS — no build step,
no framework, deploys straight to Vercel.

## Files

```
index.html    structure + placeholder content
styles.css    all styling (design tokens at the top of the file)
script.js     the typed hero-terminal effect + small interactions
vercel.json   static-site config for Vercel
```

## 1. Fill in your real content

Open `index.html` and replace the placeholder text in each section:

- **Hero** — tagline under your name
- **Experience** — one `<li class="timeline__item">` per job, newest first.
  Copy the block to add more, delete to remove.
- **Education** — one `<div class="edu-card">` per degree/certification
- **Skills** — edit the three groups (languages, frameworks, tools)
- **Projects** — one `<article class="project">` per project, with links to
  source/demo
- **Contact** — your email, LinkedIn, GitHub

Everything you need is copy-able straight from your LinkedIn profile's
Experience and Education sections.

## 2. Preview locally

No build step needed — just open `index.html` in a browser, or run a quick
local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: choose **Other** (it's a static site — no build command,
   no output directory needed).
3. Click **Deploy**. Vercel will give you a live URL immediately, and will
   redeploy automatically on every push to `main`.

## Customizing

- Colors and fonts are defined as CSS variables at the top of `styles.css`
  under `:root` — change `--accent` for a different highlight color.
- To add a downloadable résumé, drop a `resume.pdf` into the repo root and
  update the `href` on `#resume-link` in `index.html`.
