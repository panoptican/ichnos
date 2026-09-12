# Source of truth

Derived from the repo (worktree `main`, HEAD b79bf4c) and the live site on 2026-09-11. Fact-check prompts and `scripts/truth_check.py` are scored against this file. Re-derive whenever a trace is added, a bio changes, or the publisher's contact changes.

## Site and publisher

| Claim | Value | Source | Read |
|---|---|---|---|
| Site name | ICHNOS | `src/index.html` `<title>`, JSON-LD `name` | 2026-09-11 |
| Canonical origin | `https://ichnos.net/` (apex, https, trailing slash; no `www`) | `src/index.html` canonical, `src/robots.txt`, `src/sitemap.xml` | 2026-09-11 |
| Language | `en` (`og:locale` `en_US`) | all seven pages | 2026-09-11 |
| Publisher | Unwin-Dunraven Literary Ecclesia | `meta name=author`, JSON-LD `publisher` | 2026-09-11 |
| Publisher site | `https://www.unwin-dunraven.com` | `src/js/scripts.js` line 11 (JS dialog only, not crawlable) | 2026-09-11 |
| Publisher social | `https://www.facebook.com/unwindunraven` | `article:publisher` on every page | 2026-09-11 |
| Submissions | email `editors@ichnos.net`; "no guidelines, biases, proclivities or schedule" | `src/js/scripts.js` line 11 | 2026-09-11 |
| Submission fee | none stated (negative claim: never say there is one) | absence in repo | 2026-09-11 |
| Schedule / issues | none. ICHNOS has no issues, volumes, reading periods or calendar | `src/js/scripts.js` line 11 | 2026-09-11 |
| Description | "A body of work and its impetus, the invention of goad, both beast & attendant mobility." (meta uses `&`, JSON-LD uses `and`) | `src/index.html` lines 6, 41 | 2026-09-11 |
| Tagline | "a journal by tooth, by claw, by will and fire" | `package.json` description (not on site) | 2026-09-11 |
| Trace count | 6 | `src/sitemap.xml`, `src/index.html` cards, `CLAUDE.md` | 2026-09-11 |
| Hosting | Cloudflare Pages, project `ichnos`, output dir `src`, branch `main`, no build step | `wrangler.toml`, `README.md` | 2026-09-11 |
| Analytics | Spidleweb (Umami-style) `analytics.spidleweb.net`, website-id `189ef568-f9bc-4a04-ab30-f10e57cefcdd`, on all 7 pages. No Plausible, GA, GTM, pixel | all pages; `CLAUDE.md` lines 47–49 | 2026-09-11 |
| Facebook App ID | `896526060445261` | `fb:app_id` on every page | 2026-09-11 |
| Web designer | Jason Spidle; repo `github.com/panoptican/ichnos` | `package.json` author; git remote; owner statement 2026-09-12 | 2026-09-12 |
| Editor | Garett Strickland | owner statement 2026-09-12 (not yet on any page) | 2026-09-12 |
| Submissions status | open | owner statement 2026-09-12 | 2026-09-12 |
| Pageview counts in copy | never (negative claim) | owner statement 2026-09-12 | 2026-09-12 |
| License | MIT | `package.json` | 2026-09-11 |
| Founded / first published | 2016-09-13 (initial commit "ICHNOS through Traces 1-4") | git log | 2026-09-11 |

## Traces

Publication dates are git dates; no date appears anywhere on the live site.

| URL | Title | Author | First published (git) | Source |
|---|---|---|---|---|
| `/traces/meagen-crawford/` | A G G R E G A T E | Meagen Crawford | 2016-09-13 | `src/traces/meagen-crawford/index.html` |
| `/traces/rem-plus-rom/` | A Raft Manifest (excerpt, pp. 6–8 + synopsis) | Rem + Rom (pseudonym) | 2016-09-14 | `src/traces/rem-plus-rom/index.html` |
| `/traces/philippa-snow/` | Terminal Cannes | Philippa Snow | 2016-09-13 | `src/traces/philippa-snow/index.html` |
| `/traces/dennis-james-sweeney/` | Poems About Moss | Dennis James Sweeney | 2016-12-22 | `src/traces/dennis-james-sweeney/index.html` |
| `/traces/kristin-peterson/` | room tone + a muse in its own miserable shape | Kristin Peterson | 2016-12-06 | `src/traces/kristin-peterson/index.html` |
| `/traces/michael-thomas-taren/` | from In Smithereens | Michael Thomas Taren | 2016-09-13 | `src/traces/michael-thomas-taren/index.html` |

## Contributor bios (as published, c. 2016; time-sensitive)

These are the contributor's own words at publication. They are **not** verified current facts. Any rewrite must keep them as dated quotations or re-verify with the contributor.

| Contributor | Claim on page | Risk |
|---|---|---|
| Meagen Crawford | lives in Nashville; co-edits 'Pider (pidermag.com); paints (link text "bluhz.com", href `b-l-u-h-z.tumblr.com`) | link text / href mismatch |
| Rem + Rom | pseudonymous; "The Becoming (book 1 of the West of Kingdom Come quadrilogy)" | none |
| Philippa Snow | London; Features Editor, Modern Matter and Kilimanjaro; Co-Editor, Hexus; "first essay collection … set for publication next year" | relative date "next year" on a 2016 page; roles almost certainly changed |
| Dennis James Sweeney | Small Press Editor of Entropy; MFA Oregon State; "recent Fulbright fellow in Malta"; "now a student in the PhD program … University of Denver" | Entropy closed 2021; "now a student" is stale |
| Kristin Peterson | poet and filmmaker, Milwaukee, WI; publication list | none known |
| Michael Thomas Taren | chapbook *eunuchs* (Ugly Duckling Presse); translator of Šalamun (Dalkey 2014, Black Ocean 2015); co-translator with Purdey Lord Kreiden | `article:author` points at Kreiden's Facebook, not Taren's |
| Epigraph (Sweeney page) | Robin Wall Kimmerer, *Gathering Moss* | none |

## Integrations

n/a for a static journal. Negative claims worth holding:

| Integration | Status | Source |
|---|---|---|
| Submittable or any submission portal | no | absent from repo; email-only |
| Newsletter / RSS | no | absent from repo |
| Comments | no | absent from repo |
| Print edition | no | absent from repo |

## Contradictions found

| Claim | Code says | Site says | Which is right |
|---|---|---|---|
| Repository URL | `package.json` `repository.url` = `gitlab.com/udle/ichnos` | git remote = `github.com/panoptican/ichnos` | GitHub (package.json stale; not public-facing) |
| Taren author link | `article:author` → facebook.com/purdeylordkreiden | JSON-LD author = Michael Thomas Taren | JSON-LD; the meta tag points at the wrong person |
| Crawford paint link | anchor text "bluhz.com" | href `https://b-l-u-h-z.tumblr.com/` | unknown; verify which resolves |

### Resolved

| Claim | Was | Fixed | Run |
|---|---|---|---|
| Dev tooling in production | `src/index.html:152` loaded the 1.43 MB `js/agentation-bundle.js` (dev React, `localhost:4747`) on `/` | script tag removed, `src/js/agentation-bundle.js` deleted from the served tree; `dev/` copies kept for local use. Rule "No dev-only tooling ships in production HTML" in `truth-checks.json` guards it | 2026-09-12 |
| Homepage description | JSON-LD "beast and attendant mobility" vs meta "beast & attendant mobility" | JSON-LD now uses "&", identical to the meta and og descriptions | 2026-09-12 |
| Back-to-contents target | six traces linked `../../index.html#contents` (a 308 hop to `/`) | all six link `/#contents` | 2026-09-12 |
| About / submit copy not crawlable | about text, publisher link, submissions email and editor lived only in a JS dialog; homepage had no `<h1>` and 48 words | `#about` and `#submit` sections in `src/index.html`; wordmark wrapped in `<h1>`; body 235 words; dialog now reads from those sections | 2026-09-12 |
| Soft 404 site-wide | every unknown path returned 200 with the homepage | `src/404.html` (noindex, links `/#contents`); verify live after deploy | 2026-09-12 |
