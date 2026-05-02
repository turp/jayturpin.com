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

Deployments happen automatically when you push to `main` via GitHub Actions.

**To deploy:**

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will build the site and deploy it to jayturpin.com.
