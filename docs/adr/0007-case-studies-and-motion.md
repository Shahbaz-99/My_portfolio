# ADR 0007: Case-study pages and progressive motion
**Status:** Accepted
**Context:** Project cards must open detailed, impressive pages; hover and animation should be everywhere it fits without hurting performance or accessibility.
**Decision:** Data-driven case-study pages (overview, highlights, flow, decisions, next project). Motion is CSS-first: scroll reveal (tiny IntersectionObserver), hover effects gated by `(hover: hover)`, native cross-document view transitions (card cover morphs into the case-study hero), and a scroll-driven progress bar. Everything sits behind `prefers-reduced-motion: no-preference`; without JS content stays visible.
**Consequences:** No animation library. E2E and axe tests run with reduced motion to avoid transient-opacity false positives; one test covers the reveal behaviour.
