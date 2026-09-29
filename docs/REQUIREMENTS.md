# Requirements (Phase 0)

## 1. Goal
Portfolio that shows engineering proof (case studies, ADRs, perf scores) plus one signature interactive 3D hero.

## 2. Audience & target  — CONFIRM
- Target: [ ] product companies  [ ] creative agencies  [ ] freelance
- Three.js skill: [ ] none  [ ] some  [ ] strong
- Blender skill: [ ] none  [ ] some  [ ] strong

## 3. Success metrics
| Metric | Target |
|---|---|
| LCP (mid-range phone, 4G) | < 2.5 s |
| Lighthouse (perf/a11y/best-practices/SEO) | ≥ 90 each |
| Contact clicks / recruiter visits | tracked via Cloudflare Web Analytics |

## 4. Scope (v1)
- Hero: single 3D scene (Three.js + cannon-es physics, Blender assets), lazy-loaded
- 3–4 case studies (problem, decisions, result, live + source links)
- Architecture page (ADRs, Lighthouse scores)
- Contact (Cloudflare Worker or form service)
- 2D fallback + `prefers-reduced-motion`

## 5. Out of scope (v1)
Backend/DB, CMS, blog, multi-language.

## 6. Constraints
Free hosting, no server, JS < ~150 KB before 3D loads.
