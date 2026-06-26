# Roadmap

Phased build plan. Work top-to-bottom; each phase leaves the site in a shippable
state. Tick items as they land and keep statuses honest.

**Legend:** ✅ done · 🔄 in progress · ⬜ todo · 💤 deferred

---

## Phase 0 — Foundations & planning
*Goal: agreed direction and conventions written down.*

- ✅ Lock architecture, tech areas, and depth (2026-06-16)
- ✅ Create `docs/` planning set (STRUCTURE, ROADMAP, PRINCIPLES, DEVELOPMENT)
- ✅ Resolve all open questions in `STRUCTURE.md` (tags, detail pages, ongoing, timeline, quiz, …)
- ✅ Confirm folder layout (flat root + `projects/` & `involvement/`)

## Phase 1 — Design system & shared shell
*Goal: the visual language and the chrome every page reuses.*

- ✅ Refine design tokens in `style.css` (light · teal identity — D16)
- ✅ Build shared **header** (nav: Technological · Organizational · Ongoing · Timeline) and **footer**, injected by `main.js`
- ✅ Stand up `data.js` — **items registry + tag taxonomy** (single source for every view)
- ✅ Build the **standardized `.card`** (one render fn, `--featured` variant) + **filter bar / tag chips** generated from `window.TAGS`
- ✅ Create the shared **detail page** renderer (identical stub → `main.js` renders from registry — D19)
- ✅ Reusable components: section, stat, button, breadcrumb, pillar card, **timeline lane/bar**
- ✅ Responsive grid + mobile nav
- ✅ Accessibility + motion baseline (`:focus-visible`, `prefers-reduced-motion`)

## Phase 2 — Hub (`index.html`)  ✅
*Goal: the 30-second story that routes visitors into both pillars.*

- ✅ Hero + positioning
- ✅ Intro + key stats
- ✅ Two-pillar split cards
- ✅ Tag chips that deep-link into the pre-filtered gallery (`technological.html#tag=…`)
- ✅ Featured work strip (data-driven from `featured: true`)
- ✅ Ongoing teaser + quiz ("Think You Know Me?" stays on the hub)
- ✅ Contact section

## Phase 3 — Technological gallery + project pages  ✅
*Goal: one filterable, tag-driven gallery, each card opening a dedicated detail page.*

- ✅ Populate `window.ITEMS` with the 10 technological projects, each tagged + given an `id`
- ✅ Finalize the **tag taxonomy** (`window.TAGS`) — 11 tags, finer split per STRUCTURE Q1
- ✅ Build `technological.html`: intro + **filter bar (OR)** + card grid rendered from the registry
- ✅ Tag filtering with **URL-hash sync** (shareable pre-filtered views); "no matches" state
- ✅ Build `projects/<id>.html` detail pages (one per project)
- ✅ Card "See in detail →" → its `projects/<id>.html`; multi-tag items appear under each tag

## Phase 4 — Organizational, Ongoing, Timeline & deep dives  ✅
*Goal: depth where it counts, plus the cross-cutting lenses.*

- ✅ `involvement.html` landing (cards) + `involvement/<id>.html` detail pages for each org item
- ✅ **`ongoing.html`** — current activities + the two writing blogs (cards from `status: 'ongoing'`)
- ✅ **`timeline.html`** — **fixed category lanes**, expandable bars, "See in detail →" deep links
  - ✅ Greedy lane-packing so concurrent items never collide; "Now" marker
  - ✅ **"Show all events" toggle** (default off = `curated` only; on = every dated item)
  - ✅ Pillar color + icon encoding + legend
  - ✅ Mobile: horizontal-scroll fallback (vertical collapse — see Phase 5 polish)
  - ✅ `<noscript>` fallback linking to pillar pages
- ✅ The 3 deep dives have full problem → approach → result write-ups in the registry (Glartek, Big-Data VR, Florescer); may expand/compress later

## Phase 5 — Polish, performance, ship
*Goal: production quality.*

- 🔄 SEO: per-page `<title>`/description/OG done; **todo:** JSON-LD, `sitemap.xml`, `robots.txt`
- ⬜ Real OG/share image
- ⬜ Accessibility pass (keyboard, contrast, alt text, landmarks) — WCAG AA
- ⬜ Performance pass (image sizing, lazy-load, font strategy, Lighthouse)
- ⬜ Cross-browser + mobile QA (incl. proper vertical timeline on small screens)
- ✅ 404 page (`404.html`, self-contained, root-absolute links)
- ⬜ Deploy (host TBD) + custom domain (TBD)

## Backlog / ideas (unscheduled)

- 💤 Light/dark toggle
- 💤 Per-project image galleries / short clips
- 💤 PT/EN language toggle
- 💤 Downloadable CV link (bridge back to the résumé)

## Status snapshot

> Updated 2026-06-16 — **Phases 0–4 complete; site is functional.** Built: `data.js` registry
> (18 items, 11 tags), `style.css` design system, `main.js` engine, and all pages — hub, gallery
> (OR filter + hash sync), involvement, ongoing, timeline (fixed lanes + "show all" toggle), and
> 14 detail pages. Validated: all tags/hrefs/slugs resolve; `node --check` clean.
> **Next: Phase 5** — visual QA in a browser, accessibility/perf passes, SEO extras, 404, deploy.
