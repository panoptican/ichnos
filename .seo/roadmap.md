# ICHNOS — Programmatic SEO Roadmap

> Canonical document for the programmatic lane. Lives at `.seo/roadmap.md`. Written 2026-09-11.

## Verdict

**No programmatic pattern applies.** ICHNOS is a literary journal with six pieces and no product, pricing, integrations, competitors-as-rivals, or use cases. The bundled patterns (`/alternatives/*`, `/for/*`, `/compare/*`, `/playbooks/*`) would all be off-topic under the rule "a page that does not map to a radar seed or a coverage-map cluster is off-topic". The `create-programmatic` action is closed on this site until a pattern with real demand evidence appears.

The one template-shaped thing that could ever qualify is a **contributor page per author** (`/contributors/<name>/`), because contributor names are the likeliest search demand the site has. That is six pages, each with a bio, the trace link, and outbound links to the contributor's own sites. It is recorded here as Phase 1, `pending`, and gated on demand evidence (a Search Console query row or a dated thread), which does not exist yet.

## Phase Status Tracker

| # | Phase | Pattern | Status | PR |
|---|---|---|---|---|
| 0 | Technical foundations | Setup | in_progress | — (first run 2026-09-11 started with the homepage bundle repair) |
| 1 | Contributor pages (6) | `/contributors/<slug>/` | pending (gated on demand evidence) | — |

## Reference Data

- **Domain:** https://ichnos.net
- **GSC property:** not connected
- **Bing site:** not connected
- **Authority / playable bucket:** unknown → easy (estimated; 7-page site, no measured backlinks)
- **Stack:** static HTML in `src/`, served verbatim by Cloudflare Pages; no build
- **Accent:** `#DBB700`; fonts per `brand.md`
- **Marketing pages root:** `src/`

### Existing surface (do not duplicate)

Seven URLs: `/` and six `/traces/<slug>/`. See `link-inventory.md`.

### Critical files

| File | What lives there |
|---|---|
| `src/index.html` | cover, contents cards, all meta and JSON-LD for `/` |
| `src/js/scripts.js` | about and submit dialog text |
| `src/traces/<slug>/index.html` | one trace, self-contained |
| `src/sitemap.xml`, `src/robots.txt` | hand-maintained |

## Phase 0 — Technical foundations (open items, in the order the health diff ranks them)

1. ~~Remove the 1.43 MB dev-only `agentation-bundle.js` from `src/index.html`~~ — done 2026-09-12 (`correct`; local Lighthouse mobile perf 55 → 94, page weight 1.73 MB → 304 KB). Live re-measure after deploy.
2. Retarget the six trace back-links from `../../index.html#contents` to `/#contents`. Cloudflare already 308s `/index.html` → `/` (verified 2026-09-12), so no `_redirects` file is needed; the fix is removing the hop.
2b. Add `src/404.html`. Without it every unknown path (including `/llms.txt`) returns 200 with the homepage — a site-wide soft 404 (found 2026-09-12).
3. Give the homepage an `<h1>` (or accessible wordmark text) and crawlable about / submit copy.
4. Unique meta descriptions per trace (six are boilerplate "<Title> on ICHNOS").
5. `lastmod` in the sitemap from content dates, `datePublished` in JSON-LD.
6. Fix the Taren `article:author` tag; make meta and JSON-LD descriptions identical.
7. Philippa Snow page: stop duplicating the essay text five times in the DOM.
8. `_headers` with sane caching for fonts, images, JS.
9. Drop dead assets (`skeleton.css`, unused fonts) to trim repo weight; not user-facing.

## Phase 1 — Contributor pages

Gated. Opens when a radar signal or a Search Console query shows demand for a contributor's name landing on ICHNOS.
