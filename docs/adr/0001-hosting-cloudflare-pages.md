# ADR 0001: Host on Cloudflare Pages
**Status:** Accepted
**Context:** Free, static, global CDN needed; low latency is a goal.
**Decision:** Cloudflare Pages, auto-deploy from `main`, PR preview URLs.
**Consequences:** No server runtime; contact form via Worker/form service. Free-tier limits should be re-checked periodically.
