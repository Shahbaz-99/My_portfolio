# HANDOFF

Newest entry on top.

## Phase 1+3 – Design and content skeleton
**Done:** positioning (backend + AI), design system, home page (API-response hero, projects, experience, skills, AI, education, contact), /architecture page, case-study route, cache headers, ADR 0003–0004. All copy comes from the resume; content lives in `src/data/site.ts`.
**Decisions:** no 3D in v1 (ADR 0003); demo APIs hosted separately (ADR 0004); self-hosted fonts; zero client JS on home.
**Open:** display name (currently "Sahbaj Ali"); LinkedIn URL; resume PDF in `/public`; repo/demo links and case-study text per project; first AI project.
**Next:** Phase 2 finish (Cloudflare Pages connected, CI green), then Phase 5 (Playwright + axe tests), Phase 6 (launch, publish Lighthouse scores).

## Phase 0/2 – Kickoff (repo scaffold)
**Done:** requirements draft, ADR 0001–0002, CI workflow, Lighthouse config, Astro scaffold.
**Decisions:** Cloudflare Pages, Astro + TS, pnpm, Node 22, trunk-based Git + PR previews.
