# ADR 0002: Astro (static) + lazy Three.js
**Status:** Accepted
**Context:** Need minimal JS for content pages, heavy JS only for the 3D hero.
**Decision:** Astro + TypeScript, islands architecture; Three.js + cannon-es loaded lazily after first paint; GSAP + Lenis for motion; pnpm.
**Consequences:** Fast static pages; 3D code isolated in one island with 2D fallback.
