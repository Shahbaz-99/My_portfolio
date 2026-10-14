# ADR 0008: Split Experience/Education, add Research
**Status:** Accepted
**Context:** Owner wants Experience and Education separated, a Research section, and clickable Experience and Research entries.
**Decision:** Data-driven `experience`, `education` and `research` in `src/data/site.ts`; detail routes `/experience/<slug>` and `/research/<slug>`; research visuals (bars, segmented bar, cover) built in CSS/SVG with no chart library. The empty "AI work" placeholder is replaced by Research (extra items still supported via `aiWork`).
**Consequences:** No new client JS. Internal-demo content should only be published with the employer's permission; it lives in one data object and is easy to remove.
