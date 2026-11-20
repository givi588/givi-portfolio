# Givi's developer portfolio

A React and Vite portfolio for my freelance work in frontend development and Python automation. The site features Mira Flowers, Invoice & Quote Studio, and Category Dashboard, with links to four other projects.

[Live portfolio](https://givi588.github.io/givi-portfolio/)

## Run locally

Use Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

## Tests and build

```sh
npm test
npm run build
npm run preview
```

The test script checks project data and renders the React page with Vite. The production build goes to `dist/`. The preview URL includes the GitHub Pages base path, `/givi-portfolio/`.

## Update the portfolio

- Edit project links, case studies, and services in `src/siteData.js`.
- Put optimized screenshots from real builds in `public/projects/`. The current images were captured from the live storefront, invoice editor, and Category Dashboard 2.1. The invoice preview uses the app's sample document.
- Update metadata in `index.html`.

The contact section links to the published Fiverr service, GitHub profile, and public GitHub inquiry template. The portfolio has no contact backend.

## GitHub Pages

Set the Pages source to GitHub Actions. The workflow in `.github/workflows/deploy.yml` tests and builds pull requests. Pushes to `main` can publish the build to GitHub Pages.
