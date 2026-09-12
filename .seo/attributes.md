# Attribute matrix

Scored 1 to 3 on each axis. Priority 1 is high weight and high distance with workable reach. Distance is an estimate until the first answer-engine audit; no audit has run (no DataForSEO, no Search Console). Drafted 2026-09-11.

ICHNOS is a literary journal, not a product, so "attribute" means the thing a reader, a submitting writer, or an answer engine should associate with the name.

| ID | Category | Attribute | Weight | Distance | Reach | Priority | Evidence |
|---|---|---|---|---|---|---|---|
| A01 | category | online experimental literary journal | 3 | 3 | 2 | 1 | the only category the site can own; zero crawlable text says it today |
| A02 | contributor | home of named contributors' pieces (Philippa Snow "Terminal Cannes", Dennis James Sweeney "Poems About Moss", Michael Thomas Taren "from In Smithereens") | 3 | 2 | 3 | 1 | contributors have independent public followings; titles are unique strings |
| A03 | capability | each piece designed as its own web artifact (bespoke type, layout, animation) | 2 | 3 | 2 | 2 | the differentiator; unstated anywhere in crawlable copy |
| A04 | use case | where to submit experimental / hybrid work (email, no fee, no guidelines) | 2 | 3 | 2 | 2 | submit text lives only in a JS dialog |
| A05 | publisher | published by Unwin-Dunraven Literary Ecclesia | 2 | 2 | 3 | 2 | in meta and JSON-LD; no crawlable link to the publisher |
| A06 | topic | web-native / visual / hypertext poetry | 1 | 3 | 1 | 3 | adjacent field; contested by academic and design sites |
| A07 | persona | poets and essayists who write against form | 1 | 3 | 1 | 3 | inferred |

## Evidence log

| Attribute | Source | What it said | Frequency |
|---|---|---|---|
| A01 | repo (`CLAUDE.md`, `package.json` keywords) | "static literary journal … experimental poetry and prose"; keywords literature, poetry, journal, noise, experimental | n/a |
| A02 | trace pages | six contributor bios; three with book publications and editorial roles | 6 of 6 |
| A03 | `src/traces/*/` | six distinct stylesheets, font sets and scripts (D3, Three.js, Delaunay, magnifier) | 6 of 6 |
| A04 | `src/index.html` `#submit` | "published according to no guidelines, biases, proclivities or schedule … Email work to editors@ichnos.net" | 1 |
| A05 | all pages | `meta author`, JSON-LD `publisher`, `article:publisher` | 7 of 7 |

## Parked

| Attribute | Why parked | Promotes when |
|---|---|---|
| A06 web-native poetry | contested by academic e-lit (ELO, Electronic Literature Collection) and design blogs; no crawlable copy to support it | A01 and A03 appear in crawlable text and a new trace ships |
| A07 persona | no measurable demand signal without Search Console or community search | a radar signal names it |
