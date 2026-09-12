# ICHNOS — Content Ledger

> The memory of the engine. Read first on every `/seo` run: the **Shipped** table is the dedup record (never re-write a covered topic); the **Performance** table is the scoreboard (did the last pieces actually work?); the **Candidate backlog** is the scored shortlist so each run starts warm. Updated in the same edit batch as every piece shipped.

---

## Shipped

| Date | Title | Type | Slug / URL | Target keyword | Vol | Bucket | Original data (source · n · as-of) | Refresh due | Primary internal links | Commit / PR |
|---|---|---|---|---|---|---|---|---|---|---|
| 2016-09-13 | A G G R E G A T E — Meagen Crawford | poem | /traces/meagen-crawford/ | (navigational: title, author) | n/a (no tool) | easy · estimated | none | n/a | / | 62f7c28 |
| 2016-09-14 | A Raft Manifest — Rem + Rom | prose excerpt | /traces/rem-plus-rom/ | (navigational: title) | n/a | easy · estimated | none | n/a | / | 29c0de3 |
| 2016-09-13 | Terminal Cannes — Philippa Snow | essay | /traces/philippa-snow/ | Philippa Snow Terminal Cannes | n/a | easy · estimated | none | n/a | / | 62f7c28 |
| 2016-12-22 | Poems About Moss — Dennis James Sweeney | poem | /traces/dennis-james-sweeney/ | poems about moss; Dennis James Sweeney | n/a | easy · estimated | none | n/a | / | 77e553d |
| 2016-12-06 | room tone + a muse in its own miserable shape — Kristin Peterson | poem | /traces/kristin-peterson/ | (navigational: author) | n/a | easy · estimated | none | n/a | / | d96a7b1 |
| 2016-09-13 | from In Smithereens — Michael Thomas Taren | prose poem | /traces/michael-thomas-taren/ | Michael Thomas Taren In Smithereens | n/a | easy · estimated | none | n/a | / | 62f7c28 |
| 2016-09-13 | ICHNOS (cover / contents) | hub | / | ichnos; ichnos journal | n/a | easy · estimated | none | n/a | all traces | 62f7c28 |
| 2026-09-12 | correct · / · remove dev-only agentation bundle | hub | / | (speed / truth) | n/a | fix | pre-state: `src/index.html:152` loaded 1.43 MB `js/agentation-bundle.js`; local Lighthouse mobile perf 55, LCP 10.4 s, 1.73 MB; live Lighthouse perf 65, LCP 4.7 s, TBT 436 ms | n/a | — | see run 2026-09-12-2205 |
| 2026-09-12 | repair · traces · retarget back-links to `/#contents` | trace | 6 traces | (link health) | n/a | fix | pre-state: six links to `../../index.html#contents`, each a 308 hop | n/a | / | c4134df |
| 2026-09-12 | repair · sitemap · `lastmod` on 7 URLs | sitemap | /sitemap.xml | (freshness) | n/a | fix | pre-state: no lastmod | n/a | — | f58bd7c |
| 2026-09-12 | repair · / · h1, crawlable about/submit, hrefs, `<main>` | hub | / | (relevance / a11y) | n/a | fix | pre-state: h1=0, 48 words, 16 href-less anchors, a11y 95 / seo 92; after: h1=1, 235 words, 0 href-less, a11y 100 / seo 100 (local) | 2027-03 | 6 traces, #about, #submit | 7718874 |
| 2026-09-12 | repair · 404 · add `src/404.html` | system | /404.html | (link health) | n/a | fix | pre-state: unknown paths returned 200 with the homepage | n/a | /#contents | 4fe00a5 |
| 2026-09-12 | repair · / · drop nav, vex dialog, jQuery; about/submit footer only | hub | / | (speed / a11y) | n/a | fix | pre-state: nav + 10 cards opened a dialog duplicating the footer text; `/` loaded jQuery 85.6 KB + vex 7 KB + 2 vex stylesheets 17 KB | n/a | — | see run 2026-09-12-2310 |
| 2026-09-12 | repair · /robots.txt · block AI crawlers (owner policy NY-3a) | tech | /robots.txt | (policy / reachability) | n/a | fix | src/robots.txt was `User-agent: * Allow: /` only; live policy existed solely in Cloudflare's managed block. Now the repo disallows ~40 AI user agents and states Content-Signal search=yes, ai-input=no, ai-train=no. AEO lane closed. | n/a | — | see run 2026-09-12-2330 |

<!-- Append one row per piece at Step 5. Type ∈ guide | how-to | listicle | definition | comparison | data-study | resource | opinion | case-study | tool -->
<!-- Tools: add a maintenance note to the row for anything with decaying data (fee schedules, rates, limits) — what expires and roughly when. -->
<!-- Original data: name the first-party element the piece carries (or "none — <ladder rung used>"). Refresh due: quarterly for volatile metrics, annual for structural ones, n/a if the piece carries no original data. The saved query lives in .seo/briefs/<slug>.md — re-running it is the cheapest high-value content run this engine has. -->

---

## Performance

> The closed loop. Filled by **Step 0.5** of a later run from GSC (`references/gsc.md` §2), seeded as `unmeasured` when a piece ships. Runs are stateless, so an unwritten measurement never happened. State ∈ winning | close | wrong-query | invisible | unmeasured | too-new | no-data (pre-window).
>
> **Backfilled:** never (no Search Console connection as of 2026-09-11) — set on the first GSC-aware run over an existing library (`gsc.md` §2b). Until it's set, assume no piece has ever been measured and backfill all of them in one pass before selecting anything.
>
> Adding this section to an older ledger? **Append it and match that file's own column style.** Don't renumber, reorder, or normalize the sections already there.

| Slug / URL | Published | Indexed? (state · checked) | Read @28d (clicks · impr · pos) | Read @56d (clicks · impr · pos) | Site-wide same window (clicks · impr) | Best lever (recover/CTR/rank · est. clicks) | State | Note / next action |
|---|---|---|---|---|---|---|---|---|
| / | 2016-09-13 | unknown (no GSC · 2026-09-11) | — | — | — | — | unmeasured | 2026-09-12: dev bundle removed (live Lighthouse perf 65 → 90), h1 + crawlable about/submit added, every anchor has an href; live re-measure pending deploy of 7718874 |
| /traces/meagen-crawford/ | 2016-09-13 | unknown (no GSC · 2026-09-11) | — | — | — | — | unmeasured | boilerplate meta description |
| /traces/rem-plus-rom/ | 2016-09-14 | unknown (no GSC · 2026-09-11) | — | — | — | — | unmeasured | 4 MB of JPEG; boilerplate description |
| /traces/philippa-snow/ | 2016-09-13 | unknown (no GSC · 2026-09-11) | — | — | — | — | unmeasured | essay text duplicated 5x in DOM; boilerplate description |
| /traces/dennis-james-sweeney/ | 2016-12-22 | unknown (no GSC · 2026-09-11) | — | — | — | — | unmeasured | only page with an h1; boilerplate description |
| /traces/kristin-peterson/ | 2016-12-06 | unknown (no GSC · 2026-09-11) | — | — | — | — | unmeasured | fixed-position columns; boilerplate description |
| /traces/michael-thomas-taren/ | 2016-09-13 | unknown (no GSC · 2026-09-11) | — | — | — | — | unmeasured | article:author points at wrong person; boilerplate description |

<!-- Two clocks. Index status: check ~3 days after deploy, on anything published in the last 30 days not yet confirmed indexed. Performance: measure any piece live 21+ days and not measured in the last 30. -->
<!-- Indexed? holds the coverage state verbatim (e.g. "Submitted and indexed", "Crawled - currently not indexed", "URL is unknown to Google", "noindex") plus the date checked. Each state has a different fix — see references/gsc.md §3a. -->
<!-- Read at ~28 and ~56 days after publish (or after a boost lands), not "whenever the skill next runs" — fixed checkpoints make rows comparable across pieces. -->
<!-- Site-wide same window is the CONTROL. Without it a Google-wide lift reads as your edit working. One get_performance_overview call. -->
<!-- Best lever: the largest of recover / CTR / rank in estimated clicks (references/gsc.md §2c). It decides both whether to boost and what kind of fix to write. -->
<!-- LOOP GATE: three published pieces in a row not indexed = the next run fixes that, not writes a fourth. -->
<!-- close (pos 5-15) → offer the boost at the next checkpoint, it often beats a new piece. -->
<!-- wrong-query → the queries it DID attract are a free candidate list for selection. -->
<!-- invisible after 21+ days → run inspect_url_enhanced BEFORE writing anything adjacent; not-indexed, noindex, wrong canonical, and thin each need a different fix. -->
<!-- Three invisible pieces in a row on one vein = the vein is dead. That verdict outranks any keyword-tool score. -->

---

## Candidate backlog

> Scored shortlist from the last selection run. Re-score when this is >30 days old or the user says "re-research." The next run reads this before regenerating the pool — it starts from here, validates the top pick is still open and winnable, and only does fresh research if needed.

| Rank | Candidate | Proposed type | Target keyword | Vol | Bucket (E/M/H · src) | Intent | Data angle | Score | Notes / angle |
|---|---|---|---|---|---|---|---|---|---|
| — | (none scored yet; first run 2026-09-11 selected a repair) | | | | | | | | |

<!-- Score = sum of winnability + traffic-potential + conversion-intent + strategic-value + data-angle + (6 - effort), each 1-5. See references/opportunity-research.md Step C. -->
<!-- Data angle: the specific first-party number or public-data combine this piece would carry, per references/proprietary-data.md. "None found" is a legitimate entry — an angle nobody can name isn't one. -->

---

## Coverage map (optional)

> A running view of which clusters/themes have content and which are thin or empty. Helps spot topical-depth gaps the keyword tools miss. Fill in as the library grows.

| Cluster / theme | Pieces shipped | Gaps still open |
|---|---|---|
| Contributor pieces (traces) | 6 | no new trace since 2017; not an SEO gap, an editorial one |
| About / submit / masthead | 0 crawlable | about and submit text exist only as JS dialogs |
| Contributor / author pages | 0 | contributor names are the likeliest search demand; no page owns them beyond the trace |

---

## Notes

- **Difficulty buckets, not a KD cap:** Easy / Medium / Hard (`references/research-recipes.md`). Your playable bucket is the hardest one where GSC shows 2+ page-1 positions. Target it; allow one stretch pick in four one bucket up. Record the bucket AND which vendor's KD produced it — KD scales are vendor-specific and must never be compared across vendors.
- **No duplication:** before adding a candidate, check it isn't already a programmatic page in `.seo/roadmap.md` or a shipped row above.
- **One piece per run.** This ledger grows by one `Shipped` row per invocation.
- **Measure before you write.** Step 0.5 reads GSC for every piece live 21+ days and updates `Performance`. A `close` piece (position 5-15) is a boost candidate that regularly beats writing anything new, and an `invisible` piece is a question to answer before shipping its siblings.
- **Refresh beats rewrite.** Scan the `Refresh due` column at the start of every run. A piece whose original data is stale re-cuts in a fraction of a new run's cost — same URL, new numbers, renewed freshness, no new research — and answer engines reward the update. Do the refresh before starting a new piece when one is due.
- **Tool cadence:** if no `tool` row appears in the last 6 shipped pieces and a viable tool candidate exists, it takes the explore slot at the next checkpoint; none in the last 10 and it becomes the recommended pick. A library with no tool in it has no link magnet.
