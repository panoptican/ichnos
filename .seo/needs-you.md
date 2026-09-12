# Needs you

Decisions, logins, reviews, and keys only a human can provide. The skill writes the `question` column. You write the `answer` column. The next run acts on any row with an answer and no `closed` date, then stamps it.

Keep answers to one line where you can. If the answer is "never" or "not now," say that; the row closes and the blocked candidate is dropped or deferred.

| id | opened | blocks | question | answer | closed |
|---|---|---|---|---|---|
| NY-1 | 2026-09-11 | measure (GSC panel, census, outcomes, priors) | Connect Google Search Console for ichnos.net: verify a domain property (sc-domain:ichnos.net) and give this host a Search Console client (an MCP server with Full-user access). Without it no page state, CTR gap, index status or outcome can be measured. Answer: 'done <property string>' or 'never'. | | |
| NY-2 | 2026-09-11 | brand.md gaps | (a) Are submissions to editors@ichnos.net currently open? (b) May aggregate Spidleweb pageview counts ever appear in copy (default no)? (c) Should any editor be named on-site for authorship? One line each. | | |
| NY-3 | 2026-09-12 | aeo lane (reachability by Claude, Alexa/Amazon, ChatGPT search, Common Crawl) | The live robots.txt is rewritten by Cloudflare's managed "AI bot" setting, not by the repo, and Disallows ClaudeBot, Amazonbot, GPTBot, CCBot, Google-Extended, Applebot-Extended, Bytespider, meta-externalagent. ClaudeBot and Amazonbot are retrieval agents, so ICHNOS cannot be cited in Claude or Alexa answers while they are blocked. Options: (a) keep the block as is; (b) in Cloudflare → ichnos.net → Security → Bots, turn off "Block AI bots" / managed robots.txt and rely on the repo's robots.txt (Content-Signal ai-train=no can be kept in the repo file); (c) allow only ClaudeBot, GPTBot, Amazonbot via a custom rule. Answer with a letter. | | |
| NY-4 | 2026-09-12 | live re-measure of the homepage fix | Commit "seo: correct / remove dev-only agentation bundle (2026-09-12-2205)" removed the 1.43 MB dev bundle from the homepage; Cloudflare Pages deploys from main only after a push/merge, which the skill never does. Push main when you are ready; the next run re-runs Lighthouse against the live page. Answer: 'pushed' (or nothing; the run detects it from the live HTML). | | |
