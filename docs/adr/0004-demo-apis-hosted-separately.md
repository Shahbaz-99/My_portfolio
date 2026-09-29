# ADR 0004: Demo APIs hosted separately from the site
**Status:** Accepted
**Context:** The site is static on Cloudflare Pages. Django APIs need a server; free tiers may cold-start.
**Decision:** Host demo APIs (Docker, free tier or own VPS) and link to them. The site never fetches them at load.
**Consequences:** No latency impact on the site. Demos may take seconds to wake; the case study says so.
