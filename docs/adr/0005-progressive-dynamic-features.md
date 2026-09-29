# ADR 0005: Small client-side features, progressively enhanced
**Status:** Accepted
**Context:** Site should feel dynamic and offer light/dark themes while staying static and fast.
**Decision:** Theme toggle (system default, saved choice, no-flash inline script), scroll-spy nav, live local time, and recent repos fetched from the GitHub API after the section nears the viewport (10-min sessionStorage cache, DOM text APIs only). All features degrade to working static content.
**Consequences:** About 2 KB of bundled JS; no framework. GitHub API is rate-limited (60 req/h per IP), so failure shows a fallback link.
