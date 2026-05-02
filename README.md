# jayturpin.com

Personal blog built with [Astro](https://astro.build) and the [Astro Paper](https://github.com/satnaing/astro-paper) theme.

## Running locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The site will be available at http://localhost:4321.

## Writing a new post

Add a markdown file to `src/data/blog/`. Use this frontmatter template:

```markdown
---
author: Jay Turpin
pubDatetime: 2026-01-15T00:00:00Z
title: My Post Title
slug: my-post-title
featured: false
draft: false
tags:
  - tag-name
description: One or two sentences summarizing the post.
---

Post body goes here...
```

Set `draft: true` to write without publishing. Run `npm run dev` to preview.

## Building

```bash
npm run build
```

Output goes to `dist/`. This also runs TypeScript checks and generates the search index.

To preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

Deployments happen automatically when you push to the `astro` branch via GitHub Actions.

**To deploy:**

```bash
git add .
git commit -m "Your commit message"
git push origin astro
```

GitHub Actions will build the site and push the output to `gh-pages`, which serves `jayturpin.com`.

### First-time GitHub Pages setup

If the Actions workflow isn't configured yet:

1. Go to **Settings → Pages** in the [GitHub repo](https://github.com/turp/jayturpin.com)
2. Set **Source** to `GitHub Actions`
3. Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [astro]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
