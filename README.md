# Givi — Developer Portfolio

A responsive portfolio showcasing real web projects, React dashboards, and practical Python automation. Built with **React, Vite, and CSS**.

**Live website:** https://givi588.github.io/givi-portfolio/

## Featured work

- [Mira Flowers — Storefront](https://givi588.github.io/mira-flowers/) · [Case study](https://givi588.github.io/givi-portfolio/#case-study) · [Technical breakdown](https://github.com/givi588/mira-flowers/blob/main/docs/CASE_STUDY.md)
- [Category Dashboard](https://givi588.github.io/category-dashboard/)
- [Sales & Inventory Manager](https://givi588.github.io/sales-inventory-manager-clean/)
- [React Training Dashboard](https://givi588.github.io/react-training-dashboard/)
- [Invoice & Quote Studio](https://givi588.github.io/invoice-quote-studio/) · [Source code](https://github.com/givi588/invoice-quote-studio)

The site includes interactive project filters, a detailed real-business Mira Flowers case study, responsive navigation, custom CSS illustrations, a services section, and links to GitHub and Fiverr. The illustrations are **not actual application screenshots or verified customer metrics**; use the live-demo links for the real products.

## Run locally

Requirements: Node.js 22.12+ and npm.

```bash
npm install
npm run dev
```

Use the address shown by Vite to see the development site.

## Tests and build

```bash
npm test
npm run build
npm run preview
```

The tests validate project and link data. They do not replace browser, accessibility, performance, or external-link testing. The production build creates `dist/`.

For reproducible installs, generate and commit `package-lock.json` using `npm install` when dependencies are available; the initial workflow currently uses `npm install` rather than `npm ci`.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` (and tests pull requests). The Vite base path is set to `/givi-portfolio/`.

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions → Test and deploy portfolio** to confirm the build and deployment succeed.
4. Visit https://givi588.github.io/givi-portfolio/ and test it on desktop and mobile.

If the website shows a 404, check that Pages is enabled and the workflow's **deploy** job completed.

## Change content

- `src/siteData.js` — project descriptions, live/code URLs, services, and external links
- `src/App.jsx` — React components and project filtering
- `src/styles.css` — layout, colors, responsive design, and illustrations
- `index.html` — page metadata
- `tests/siteData.test.js` — project-data tests

## Scope and privacy

This is a static public portfolio, not a contact form or a customer database. The site itself does not collect information or accept payments. Project inquiries go to a **public GitHub issue template**, so never submit credentials, private customer data, or confidential materials there.

A GitHub Actions green check confirms that the configured automated checks passed; it is not a guarantee of production readiness.
