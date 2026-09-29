# HANDOFF

Newest entry on top.

## Phase 4 – Dynamic features and theming
**Done:** light/dark toggle (system default, remembered, no flash), scroll-spy nav, live Bhopal time, live "Latest on GitHub" section, responsive header and ultra-wide/tiny-screen tweaks, ADR 0005.
**Decisions:** display name stays "Sahbaj Ali" (matches official ID); goes by Shahbaz.
**Open:** LinkedIn, resume PDF, project links and case studies, first AI project.

## Phase 1+3 – Design and content skeleton
**Done:** positioning (backend + AI), design system, home page (API-response hero, projects, experience, skills, AI, education, contact), /architecture page, case-study route, cache headers, ADR 0003–0004. All copy comes from the resume; content lives in `src/data/site.ts`.
**Decisions:** no 3D in v1 (ADR 0003); demo APIs hosted separately (ADR 0004); self-hosted fonts; zero client JS on home.
**Open:** display name (currently "Sahbaj Ali"); LinkedIn URL; resume PDF in `/public`; repo/demo links and case-study text per project; first AI project.
**Next:** Phase 2 finish (Cloudflare Pages connected, CI green), then Phase 5 (Playwright + axe tests), Phase 6 (launch, publish Lighthouse scores).

## Phase 0/2 – Kickoff (repo scaffold)
**Done:** requirements draft, ADR 0001–0002, CI workflow, Lighthouse config, Astro scaffold.
**Decisions:** Cloudflare Pages, Astro + TS, pnpm, Node 22, trunk-based Git + PR previews.
