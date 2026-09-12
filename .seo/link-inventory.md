# ICHNOS — Internal Link Inventory

> Every URL `/seo` can link to, and every URL it has shipped. Each new page picks in-body links from here, takes ≥2 inbound links from existing pages (≥1 a crawl hub), and registers itself here on ship. Reuse and append; never overwrite. Built 2026-09-11 from `src/sitemap.xml` and `git ls-files`.

## Existing pages (link targets)

### Homepage + core

| Slug | URL | Title (anchor-text candidate) | Linked by |
|---|---|---|---|
| `/` | https://ichnos.net/ | ICHNOS | every trace (as `/#contents`, since 2026-09-12) |
| `/#about` | https://ichnos.net/#about | about ICHNOS | nav on `/` (crawlable section since 2026-09-12) |
| `/#submit` | https://ichnos.net/#submit | submit to ICHNOS | nav + 10 empty TOC cards on `/` |
| `/404.html` | served for any unknown path | Not found /// ICHNOS | — (noindex; links `/#contents`) |

### Content (traces)

| Slug | URL | Title | Author | Linked by |
|---|---|---|---|---|
| `/traces/meagen-crawford/` | https://ichnos.net/traces/meagen-crawford/ | A G G R E G A T E | Meagen Crawford | `/` only |
| `/traces/rem-plus-rom/` | https://ichnos.net/traces/rem-plus-rom/ | A Raft Manifest | Rem + Rom | `/` only |
| `/traces/philippa-snow/` | https://ichnos.net/traces/philippa-snow/ | Terminal Cannes | Philippa Snow | `/` only |
| `/traces/dennis-james-sweeney/` | https://ichnos.net/traces/dennis-james-sweeney/ | Poems About Moss | Dennis James Sweeney | `/` only |
| `/traces/kristin-peterson/` | https://ichnos.net/traces/kristin-peterson/ | room tone + a muse in its own miserable shape | Kristin Peterson | `/` only |
| `/traces/michael-thomas-taren/` | https://ichnos.net/traces/michael-thomas-taren/ | from In Smithereens | Michael Thomas Taren | `/` only |

**Link graph as found:** `/` → 6 traces; each trace → `/` only. No trace links to another trace. Every trace has exactly one inbound internal link, from the homepage. Since 2026-09-12 every anchor on the homepage has an `href` (the 10 empty cards link `#submit`) and every trace back-link is `/#contents`, so there is no redirect hop anywhere in the graph. External links added to `/`: `https://www.unwin-dunraven.com` (publisher, twice) and `mailto:editors@ichnos.net`.

### Tools / free utilities

none

### Features / pricing

n/a

---

## Crawl hubs

No Search Console connection, so `last_crawled` is unknown. The homepage is the only candidate hub: it is the only page with more than one outbound internal link.

| URL | Last crawled | Read on |
|---|---|---|
| https://ichnos.net/ | unknown (no GSC) | 2026-09-11 |

---

## External links present on the site

| From | To | Anchor | Note |
|---|---|---|---|
| `/traces/meagen-crawford/` | https://pidermag.com/ | pidermag.com | bio |
| `/traces/meagen-crawford/` | https://b-l-u-h-z.tumblr.com/ | bluhz.com | anchor text and href differ |
| `/` (JS dialog) | https://www.unwin-dunraven.com | Unwin-Dunraven Literary Ecclesia | not crawlable |

---

## Programmatic pages

None. The programmatic lane has no applicable pattern on a literary journal (see `roadmap.md`).

---

## Editorial pieces shipped

| Slug | URL | Title | Type | Inbound links from | Anchor-text variations |
|---|---|---|---|---|---|

---

## Anchor-text variations

For a trace, rotate between the title alone, the title with the author, and the author with the form. Example for `/traces/dennis-james-sweeney/`:

- "Poems About Moss"
- "Dennis James Sweeney's Poems About Moss"
- "Sweeney's moss poems"
- "eleven poems named for moss species"
