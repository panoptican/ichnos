# ICHNOS — Brand Context

> The voice contract. Read at the start of every `/seo` run — everything written is governed by this file, in every lane. Drafted 2026-09-11 from repo signals (`src/index.html`, `src/js/scripts.js`, `package.json`, `CLAUDE.md`, the six trace pages). Gaps are marked `[ASK]` and go through `needs-you.md`; never overwrite this file, append to it.

## Positioning

We are an **online experimental literary journal** for **readers and writers of avant-garde poetry and prose** who need **work that does not fit conventional venues, presented on the web as its own designed artifact**. We win because **every piece ("trace") is built as a bespoke web object: its own typefaces, layout, and animation, not a template**. We are not for **workshop realism, genre fiction, or anyone who wants a submission portal, a schedule, or guidelines**.

## Product

- **Name:** ICHNOS (always uppercase in copy; Greek ἴχνος, "trace / footprint")
- **One-liner:** a journal by tooth, by claw, by will and fire (`package.json` description)
- **What we do:** publish experimental poetry, prose and essays online, one designed page per work. Six traces live as of 2026-09-11, all first published 2016–2017.
- **Pricing structure:** n/a. Free to read. No submission fee.
- **Free tier?** n/a (not a product)
- **Publisher:** Unwin-Dunraven Literary Ecclesia (`https://www.unwin-dunraven.com`, facebook.com/unwindunraven)
- **Submissions:** email `editors@ichnos.net`. "Published according to no guidelines, biases, proclivities or schedule." Submissions are **open** (owner, 2026-09-12). Say so plainly on-site; still no portal, fee, schedule or guidelines.

## Audience

- **Primary persona:** readers of experimental / avant-garde literature who arrive by a contributor's name (Philippa Snow, Dennis James Sweeney, Michael Thomas Taren have public followings) or by a piece's title.
- **Secondary personas:** poets and essayists looking for a venue for hybrid or visually driven work; editors and designers who study web-native literary presentation.
- **Industries / company size:** n/a
- **Jobs to be done:**
  1. Read a specific contributor's piece (name-driven navigational search).
  2. Discover a journal that will run experimental or visual work, and find out how to submit.
  3. See how a literary piece can be staged on the web beyond a text column.

## Competitors (peer journals, not rivals)

Peers who rank for the same discovery queries and draw the same submitters. `[ASK]` confirm or replace; these are drafted from the aesthetic, not from data.

| Brand | URL | Tier | Notes |
|---|---|---|---|
| DIAGRAM | thediagram.com | head | Longest-running design-forward experimental journal; the reference point |
| Tarpaulin Sky | tarpaulinsky.com | mid | Cross-genre / hybrid; press + magazine |
| Sleepingfish | sleepingfish.net | niche | Web-native experimental prose |
| Always Crashing | alwayscrashing.com | niche | Experimental online journal, overlapping contributors |

## Brand voice

- **Voice tags (publisher copy):** oracular, dense, knotted, manifesto-register, unapologetic. Sentences run on and fold back. No explainer tone, no marketing tone.
- **Voice tags (metadata and technical copy, e.g. titles, descriptions, alt text):** plain, exact, lowercase-tolerant, minimal. A title or description names the work and the author and stops.
- **Person / perspective:** "we" / "our" only in the about text; otherwise no narrator. ICHNOS never addresses the reader as "you".
- **Forbidden words / phrases:** "seamless", "curated", "community", "content", "platform", "explore", "discover", "immersive", "showcase", "elevate", "unleash", "dive into", "journey", "celebrate", any emoji. No exclamation marks in publisher copy.
- **Forbidden claims:** never state a publication schedule, issue number, reading period, response time or acceptance rate (none exist). Never call ICHNOS a "magazine issue" or "volume". Never imply a print edition. Never invent contributor bio facts; bios are quoted from the contributor and dated. Never self-author review or rating schema.
- **Reference brands for tone:** the existing about text is the only reference. Do not import a tone from elsewhere.
- **Existing content to match:** the about dialog (`src/js/scripts.js` line 7) for publisher voice; trace titles as written on the cards in `src/index.html` for casing and spacing (e.g. "A G G R E G A T E", "from In Smithereens").

## Anti-positioning (where we don't compete)

1. Not a submission marketplace: no Submittable, no fees, no reading periods.
2. Not a themed or scheduled magazine: no issues, no calls, no editorial calendar.
3. Not a home for conventional literary realism or genre fiction.
4. Not a print object; the web page is the edition.
5. Not a blog, newsletter or platform; ICHNOS does not publish about itself, and does not run craft essays, interviews or reviews.
6. Not an aggregator of the contributors' other work; each trace is one piece.

## Concrete differentiators

1. Each trace ships its own typefaces, stylesheet and script (Delaunay canvas, Three.js, D3 forced layout, magnifier on scanned pages). The presentation is part of the work.
2. Contributors with independent public reputations (Snow, Sweeney, Taren) whose names carry search demand the journal has never captured.
3. A dozen-year-old domain with stable URLs; nothing has moved or been deleted since 2016.
4. No ads, no tracking beyond a first-party pageview counter, no paywall, no email gate.

## Proprietary data & first-hand experience

- **Product/usage data we can anonymize and cite:** Spidleweb pageview counts per trace (website id `189ef568-…`). Owner decision 2026-09-12: **Spidleweb visit counts never appear in copy.**
- **How to get at it:** `analytics.spidleweb.net` dashboard (owner login). Not connected to this skill.
- **Off-limits, never publish:** submitter names, rejected work, correspondence, anything from `editors@ichnos.net`, per-visitor data.
- **First-hand experience:** ten years of hand-building one-off literary web pages; the codebase itself is the evidence.
- **Original research we can run:** none appropriate. ICHNOS does not publish about itself (anti-positioning 5).
- **Internal experts:** **Garett Strickland, editor** (owner, 2026-09-12; may be named on-site). **Jason Spidle, web designer** (may be credited as designer/builder, not as editor).

## Author / E-E-A-T

- **Default author:** each trace's contributor (already in JSON-LD `author` as `Person`). Publisher-level authorship is `Unwin-Dunraven Literary Ecclesia`.
- **Credentials:** contributor bios on each trace page, written c. 2016 and now dated. Philippa Snow's later books and Dennis James Sweeney's later books are not reflected.
- **Author bio URL / profile:** none on site. `article:author` points at Facebook profiles (one of them, on the Taren page, is the co-translator's profile, not the author's).
- **Editor:** Garett Strickland (owner-confirmed 2026-09-12). May be named on-site for authorship/E-E-A-T.
- **Web designer / maintainer:** Jason Spidle (`package.json`; owner-confirmed 2026-09-12). Credit as web designer.

## Links to existing surfaces

- Domain: https://ichnos.net
- Homepage: https://ichnos.net/
- Pricing: n/a
- Existing content: https://ichnos.net/traces/<slug>/ (six pages; see `link-inventory.md`)
- About / submit: JS dialogs on the homepage only; no crawlable about, submit or contact URL exists.
- Publisher: https://www.unwin-dunraven.com

## Visual brand

- **Accent color (primary):** `#DBB700` (TOC background, hover, focus ring); logo stroke `#DAB827`
- **Accent color (secondary):** `#B7C7BD` (card border)
- **Ink color:** `#000` on cards; `#fff` nav on the cartography background
- **Surface color:** `#EADED0` (cards); `img/bg_cartography.png` (cover)
- **Hero font family:** wordmark is an inline SVG path (no font); nav `noticia_textbold`
- **Body font family:** `klinic_slabbold` (titles), `work_sansextralight` (authors), `work_sansregular` (dialogs). Each trace carries its own fonts.
- **Icon set:** none; one triangle glyph (`img/triangle.png`, SVG on the cover)
