# ICHNOS

Static literary journal website for ICHNOS.

## Local development

- Open `src/index.html` directly in a browser, or run a static file server from `src/`.
- This project is static; there is no required build step for deployment.

## Deployment

Production is deployed to Cloudflare Pages from the `main` branch.

- Project name: `ichnos`
- Build output directory: `src`
- Custom domain: `ichnos.net`

GitHub Actions deploys on pushes to `main` using repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Site structure

- `src/index.html` - landing page and table of contents
- `src/traces/*/index.html` - individual trace pages
- `src/robots.txt` - crawler directives
- `src/sitemap.xml` - XML sitemap
