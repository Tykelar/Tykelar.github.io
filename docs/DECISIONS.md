# Decision Register

Chronological log of every decision shaping the site, with rationale. Newest at the bottom of
each day. This is the authoritative record — when a decision changes, **add a new entry** that
supersedes the old one (don't silently rewrite history); update the other docs to match.

Status: ✅ active · ↩️ superseded · 🔭 future/deferred

---

## 2026-06-16 — Direction & architecture

| # | Decision | Rationale | Status |
|---|----------|-----------|--------|
| D1 | Overhaul from single-page CV into a **portfolio** organized around two pillars: **Technological Achievements** & **Organizational Involvement** | "Full website about me and my projects, not a copy-paste CV" | ✅ |
| D2 | Keep stack **plain HTML/CSS/JS** — no framework, no build tools, no deps | User's explicit standing preference | ✅ |
| D3 | Create a living `docs/` planning set (README, STRUCTURE, ROADMAP, PRINCIPLES, DEVELOPMENT) updated as we go | Source of truth; avoid drift | ✅ |
| D4 | **Technological areas = tag filters**, not separate pages; projects are **multi-tag** | A project (e.g. thesis) belongs to several areas; tags avoid duplication | ✅ (supersedes "4 area pages") |
| D5 | **Data-driven** from one registry (`data.js`): *add once, surface everywhere* | One project entry feeds gallery, timeline, featured, ongoing | ✅ |
| D6 | **One standardized `.card`** component reused across every view | Consistency = the glue for a multi-page, data-driven site | ✅ |
| D7 | Add a **Timeline** page — parallel tracks for concurrent threads | Show overlapping roles (MSc + Glartek + Florescer + Scouts) | ✅ |
| D8 | Add an **Ongoing Projects** page — current activities + the writing/blogs | Continuous work doesn't fit the "finished deliverable" framing | ✅ |
| D9 | **Filter logic = OR** (match any selected tag) | More forgiving navigation | ✅ |
| D10 | **Every item gets its own detail page** — `projects/<id>.html` (tech) & `involvement/<id>.html` (org), one shared template; `id` = slug | Clean deep-link targets, SEO, scalable | ✅ |
| D11 | **Split tags as finely as fields differ** → 11 tags: qa, ci-cd, process, ai, data-viz, vr, ar, digital-twins, 3d, mobile, security | User: "separate as much as possible if not the same field" | ✅ |
| D12 | **All 3 flagship deep dives** now (Glartek, Big-Data VR, Florescer); may compress into smaller components later | Depth where it counts; refine afterwards | ✅ |
| D13 | **Timeline: fixed lanes by category** (Work · Education · Leadership · Projects) + **"Show all events" toggle** (default = `curated` only) | Clear story by default, full record on demand | ✅ |
| D14 | Quiz **stays on the hub**; writing → **Ongoing**; mobile app → tagged project (`mobile`) | — | ✅ |
| D15 | Folder layout: **flat root + `projects/` & `involvement/`** detail folders | Area pages became tags; details need a home | ✅ |

## 2026-06-16 — Implementation decisions (Phase 1+)

| # | Decision | Rationale | Status |
|---|----------|-----------|--------|
| D16 | **Theme correction: the site is LIGHT** — `--bg #f4f7fb`, `--bg-alt #fff`, **teal accent `#0d9488`**, Inter. (Earlier docs/memory wrongly said dark `#080b0f`/`#2dd4bf`.) Evolve the *actual* CSS | Ground truth is the existing `style.css`; verified against the file | ✅ (supersedes the "dark theme" notes) |
| D17 | Shared header/footer injected by `main.js` from **inline template strings** (not `fetch`) | Works from `file://` with no server | ✅ |
| D18 | Use **relative asset/link paths** + a `data-root` prefix on `<body>` (root pages `""`, detail pages `"../"`); main.js builds nav/footer/card links from it | Root-relative `/…` breaks on `file://`; user opens files directly | ✅ (supersedes "root-relative paths" in DEVELOPMENT) |
| D19 | Detail pages are an **identical static stub** (same bytes per folder); `main.js` reads the slug from the URL and renders the body from the item's `detail` in `data.js` | Infinitely scalable: new project = ITEM entry + copy a stub. Trade-off: detail body is JS-rendered (acceptable for a personal portfolio; revisit with prerender if SEO demands) | ✅ |
| D20 | `data.js` exposes `window.TAGS` (taxonomy) + `window.ITEMS` (registry). Item fields: `id, title, org, pillar, tags[], stack[], status, start, end, track, curated, featured, summary, detail, href` | Single contract behind every view | ✅ |

## 2026-08-03 — Chatbot ("Ask about me")

| # | Decision | Rationale | Status |
|---|----------|-----------|--------|
| D21 | The chatbot is its **own file** (`chat.js` + a `CHAT` section in `style.css`), loaded by a third `<script>` on every page — not folded into `main.js` | `main.js` is the portfolio; this is a separate product with its own backend and failure modes. One file to delete if it goes away. The trade-off is 35 script tags instead of zero, accepted because the alternative is a 30 KB file with two jobs | ✅ |
| D22 | Retrieval and generation live in a **separate repo** (`../USI-RAG`), reached over HTTP. The site stays static, with no build step and no key | GitHub Pages cannot hold a secret or run a model. Keeping the corpus, the index and the prompt out of the browser is also what lets the audience/redaction gates be enforced at all — a client-side index would ship the corpus to every visitor | ✅ |
| D23 | `ENDPOINT` is a constant at the top of `chat.js`, defaulting to `http://localhost:8000`. **Offline is a designed state**: when `fetch` fails the widget says so plainly and offers the email link | The site will be deployed before, or without, a backend. A portfolio chatbot that spins forever is worse than one that admits it is not running | ✅ |
| D24 | Each answer shows its **sources**. A source is linked only when its USI block id resolves to a real item in `window.ITEMS`; otherwise it renders as plain text | USI has blocks (skills, traits, identity) that this site has no page for. Guessing a URL from an id without checking is how you ship an `<a>` to a 404 | ✅ |
| D25 | Inline `[block-id]` citations the model emits are styled as chips **only when retrieval actually returned that block**; unmatched ones stay literal text | A model citing something that was never in its context is the failure worth being able to see, not the one worth styling away | ✅ |
| D26 | A visible disclaimer: answers are generated and can be wrong | The bot speaks for a real person about their real career | ✅ |

## Future / revisit 🔭

- Tag compression if a tag holds a single item long-term; refactor deep-dive pages into smaller reusable components.
- Organizational tag filters on `involvement.html` (Leadership · Community · International) if the list grows.
- Prerender/SSG step **only if** SEO of detail pages becomes a priority (would reconcile D19).
- Light/dark toggle, PT/EN, downloadable CV (backlog in ROADMAP).
