# Information Architecture

How the site is organized: pillars → pages → cards → tags. This is the map everything
else follows.

## The two pillars (+ cross-cutting views)

```
                        JOSÉ PEDRO HENRIQUES
                                │
          ┌─────────────────────┴─────────────────────┐
          │                                            │
  TECHNOLOGICAL ACHIEVEMENTS                  ORGANIZATIONAL INVOLVEMENT
  one filterable project gallery              communities I build & lead
  areas = TAGS, projects multi-tag            (single deep page)
  each project → its own detail page          Florescer · Scouts · Erasmus+

         cross-cutting pages (lenses over everything):
         • Ongoing Projects — what I'm currently doing (writing + active work)
         • Timeline — every dated item on parallel tracks
```

- **Technological Achievements is one gallery page** filtered by **tags**, not split into pages.
  A project is **multi-tag** and surfaces under each tag (thesis = *AI + QA + Process*).
  Filtering is **OR** — selecting tags shows items matching *any* of them.
- **Each technological project has a dedicated detail page** (`projects/<id>.html`); the gallery
  card is a teaser that links to it. Same for flagship organizational deep dives.
- **Tags are split as finely as the fields differ** (QA ≠ Process; VR ≠ AR ≠ Digital Twins). The
  taxonomy is **extensible** — a new field = one new tag.
- **Organizational Involvement** is one rich page using the **same standardized cards**.
- **Ongoing Projects** (`ongoing.html`) collects *current* activities — the writing/blogs and
  other active work — as standardized cards. Status-based, cross-cutting.
- **Timeline** (`timeline.html`) shows every dated item on **parallel tracks**.

## The model: tags + status, not pages

Everything is **data-driven from one registry** (`data.js`). Write an item once; it surfaces in
every view it qualifies for — *add once, surface everywhere*:

```
                    data.js  (items registry + tag taxonomy)
                                     │
   ┌───────────────┬─────────────────┼──────────────┬───────────────┐
   ▼               ▼                 ▼              ▼               ▼
technological   involvement       ongoing       timeline        index (hub)
pillar=tech     pillar=org        status=        items WITH      featured=true
filter by TAGS  (same card)       'ongoing'      dates (both)    (hub strip)
   │
   └─► each card links to its dedicated page  projects/<id>.html
```

What drives what:
- **`pillar`** (`tech` / `org` / `personal`) → which home page an item belongs to.
- **`tags[]`** → which gallery filters it appears under (OR logic).
- **`status: 'ongoing'`** → appears on **Ongoing Projects** (and extends to "Now" on the timeline).
- **`start`/`end`** → placement on the **timeline**.
- **`featured: true`** → hub featured strip.
- **`id`** → its dedicated detail page slug + timeline/card deep-link target.

This is what makes the site **progressively expandable**: a new project is identified by the
fields it touches, registered once with those tags, and auto-placed under the matching filters,
the timeline, featured, and (if current) Ongoing — then given its detail page.

## Site map

```
index.html              Hub — intro, both pillars, featured work, contact
technological.html      TECHNOLOGICAL ACHIEVEMENTS — filterable project gallery (tags, OR)
involvement.html        ORGANIZATIONAL INVOLVEMENT — leadership / community / international
ongoing.html            ONGOING PROJECTS — current activities + writing (standardized cards)
timeline.html           TIMELINE — cross-cutting parallel-track view of everything
projects/
  <id>.html             dedicated detail page per TECHNOLOGICAL project
involvement/
  <id>.html             dedicated detail page per ORGANIZATIONAL item

style.css               design system + page styles
main.js                 shared shell injection + interactions (render, filter, timeline)
data.js                 single registry: items + tag taxonomy
chat.js                 "Ask about me" widget — separate file, own backend (../USI-RAG, DECISIONS D21-D29)
assets/                 img/, icons/, og/
docs/                   these planning docs (not shipped content)
```

> Flat root + two detail-page folders: `projects/` (technological) and `involvement/`
> (organizational). `id`s are globally unique, so a slug never collides; always link with the
> explicit `.html` path. The old `tech/` area-page folder is gone (areas became tags).

## Page-by-page

### `index.html` — Hub
The 30-second story. Sends visitors into the right pillar / view.
- **Hero** — name, one-line positioning, primary CTAs.
- **Intro / "Who I am"** — 2–3 sentences + key stats (50%+ pipeline cut, 20% more features/sprint, 6+ client projects, 16+ countries).
- **Pillar split** — entry cards: *Technological* → `technological.html`; *Organizational* → `involvement.html`.
- **Tag chips** — area tags as quick entries that deep-link into the pre-filtered gallery (`technological.html#tag=vr`).
- **Featured work** — items flagged `featured` (data-driven).
- **Ongoing teaser** — small strip pointing to `ongoing.html` (what I'm doing now).
- **Quiz** — "Think You Know Me?" stays here as a hub delight.
- **Contact** — email, GitHub (Tykelar), LinkedIn (josepedroh), location.

### `technological.html` — Technological Achievements (filterable gallery)
One page, all technological work, navigated by tags.
- **Intro** — what this pillar is + a line of philosophy.
- **Filter bar** — generated from the tag taxonomy; **multi-select, OR logic**; each chip shows a
  count. Active filter reflected in the **URL hash** (`#tag=vr`) so a view is shareable.
- **Card grid** — standardized teaser cards (see *Card model*). A multi-tag project appears
  whenever any of its tags is active.
- **Card → dedicated page.** "See in detail →" links to `projects/<id>.html` (full write-up).
- States: default sort (recent first), graceful "no matches" message.

#### Card model (standardized & reusable)
**One card component, used everywhere** (gallery, involvement, ongoing, hub featured, timeline-
expanded). Same structure, theme-consistent. Fields per card:
- media / icon · **title** · org or context · date range
- **summary** (teaser sentence)
- **area tags** — from the taxonomy; colored; clickable to filter
- **stack badges** — descriptive tech (Cypress, Unity…); *not* filters
- link — "See in detail →" (`projects/<id>.html`) or external (e.g. a blog)
- variants: `--featured` (larger), `--compact` (timeline / dense rows)

#### Tag taxonomy (split by field — single source, extensible)
Defined once in `data.js`; the filter bar is generated from it. Split as finely as the fields
genuinely differ (per the "separate distinct fields" rule). Grouped below only for filter-bar
readability — filtering is flat OR across all.

| group | key | label | covers |
|-------|-----|-------|--------|
| Quality & Delivery | `qa` | QA | testing, test architecture, flakiness |
| | `ci-cd` | CI/CD | pipelines, automation, quality gates |
| | `process` | Process Engineering | re-engineering, lean / PDCA / Kaizen, KPIs |
| AI & Data | `ai` | Applied AI | LLMs, ML (CNN/YOLO/RNN), AI-ready infra, agents |
| | `data-viz` | Data Visualization | large-scale / interactive data rendering |
| Immersive & 3D | `vr` | Virtual Reality | VR experiences & walkthroughs |
| | `ar` | Augmented Reality | AR overlays & spatial mapping |
| | `digital-twins` | Digital Twins | real-time twin/state modelling |
| | `3d` | 3D & Making | 3D modelling, printing, prototyping |
| Software | `mobile` | Mobile Dev | React Native / Kotlin apps |
| Security | `security` | Cybersecurity | assessment, footprinting, offensive |

Adding/splitting a tag = one entry here + tag the items. *(Granularity is easy to trim if the
bar gets noisy — see open questions.)*

### Detail pages — `projects/<id>.html` & `involvement/<id>.html`
The canonical full write-up for **one item** (technological → `projects/`, organizational →
`involvement/`). **Both pillars use the same shared template.**
- Header: title, org/context, date range, **tags** + **stack badges**, external links (repo/demo/site).
- Body: overview → **problem → approach → my role → result** (full depth for flagships; lighter
  for the rest), with metrics where honest, and media.
- Uses the shared shell + components; `id` (= file slug) is the deep-link target from its index
  page (gallery / involvement) and the timeline.
- Content stays in sync with the item's `data.js` entry (page = detail; registry = index).

### `involvement.html` — Organizational Involvement (landing)
The organizational counterpart to the gallery: an index of standardized cards, **each linking to
its own detail page** (`involvement/<id>.html`).
- Intro: leadership, community, and international threads.
- Cards: *Florescer* (Founder & President, Jan 2023–Feb 2025 — **deep dive**); 18+ years of Scouting; Erasmus+ training courses (Finland, Poland, Portugal) + 6 months in Poland; community workshops & public-space renovation; IMPACT Consulting (Malta).
- May later gain its own tag filters (Leadership · Community · International) via the same mechanism — *future*.
- Each card → `involvement/<id>.html`; that page's `id` is the timeline deep-link target.

### `ongoing.html` — Ongoing Projects
What I'm doing **right now** — continuous work rather than finished deliverables. Same cards.
- Sourced from items with **`status: 'ongoing'`** (data-driven).
- **Writing** — the two blogs: *Budgeting Emotions and Keeping Momentum* (self-development / sociology) and *The Mad Man-Maid Machine* (creative writing). Cards link **out** to the blogs.
- Other current activities: Master's thesis (in progress), Glartek internship, maker / 3D-printing practice, current learning — and whatever's added later.
- Cards link to a dedicated page (if a project), an external URL (blogs), or just present the summary.
- Note: an ongoing item can *also* appear in its pillar view (e.g. the thesis shows in the gallery **and** here).

### `timeline.html` — Timeline (cross-cutting)
A chronological view of **everything** that shows how many threads ran **in parallel** (e.g. MSc +
Glartek + Florescer + Scouts overlapping).
- **Layout — fixed parallel lanes by category** (Work · Education · Leadership/Community ·
  Projects). Time on one axis; concurrent items sit in their lane, side by side, never colliding.
  `status: 'ongoing'` items extend to a "Now" marker.
- **"Show all events" toggle** (top of page): **off by default → only `curated` items**; switching
  it **on reveals every dated item**. Lets the timeline stay clean but offer the full record on demand.
- **Encoding:** color + icon by **pillar**, with **tag** as a secondary cue; legend.
- **Interaction:** events render **collapsed**; **expanding** shows a summary + **"See in detail →"**
  deep-linking to the full page (`/projects/<id>.html` or `/involvement/<id>.html`).
- **Filters** *(nice-to-have)*: by pillar / tag (reuses the taxonomy).
- **Responsive:** parallel lanes on desktop; single stacked vertical timeline on mobile.
- **Data-driven** from the same registry (dated items). `<noscript>` fallback links to the pillar pages.

## Content inventory — old → new (page · tags)

| Existing content | New home · tags |
|---|---|
| Glartek — Software Quality Engineer | technological + `projects/glartek-sqe.html` · `qa` `ci-cd` `process` `ai` · featured / deep-dive · **ongoing** |
| Master's thesis — AI-Ready Infrastructure | technological · `ai` `qa` `process` · **ongoing** |
| AI-agent integration into workflows | technological · `ai` `ci-cd` |
| Academic ML — CNNs / YOLO / RNNs, LLMs | technological · `ai` |
| 3D Big Data Visualization in VR | technological + `projects/big-data-vr.html` · `vr` `data-viz` · deep-dive |
| AR Digital Twin & animal tracking app | technological · `ar` `digital-twins` `mobile` |
| 1:1 Architectural VR Walkthrough (Unity) | technological · `vr` `3d` |
| Cybersecurity assessment & footprinting | technological · `security` |
| Mobile client-management app (cooperative) | technological · `mobile` |
| Florescer — Founder & President | involvement · deep-dive |
| Scouts (18+ yrs) | involvement |
| Erasmus+ / lived in Poland | involvement |
| IMPACT Consulting (Malta) | involvement |
| Two blogs (Writing) | **ongoing** · `pillar: personal` · external links |
| Maker / 3D printing | technological · `3d` · likely **ongoing** |
| "Think You Know Me?" quiz | hub |
| Languages, stats | hub intro |
| *All dated items above* | also **aggregated into `timeline.html`** via `data.js` |

## Navigation model

- **Global header** (every page): logo → home; *Technological*, *Organizational*, *Ongoing*, *Timeline*, *Contact*.
- **Active state** reflects the current page.
- **Breadcrumbs**: `Home / Technological / <Project>` on detail pages; gallery filters live in-page + URL hash.
- **Tag deep-links**: `technological.html#tag=vr` opens the gallery pre-filtered.
- **Cross-links**: gallery cards + timeline deep-link *into* `projects/<id>.html` / `involvement.html#<id>`; detail pages link back to the gallery (and can link to the timeline).
- Header & footer are **defined once** and injected (see `DEVELOPMENT.md`).

## Decisions — all resolved

- **Filter logic** → **OR** (match any selected tag).
- **Detail pages** → **every item gets its own page** — `projects/<id>.html` (tech) and
  `involvement/<id>.html` (org); same shared template; cards are teasers that link to them.
- **Tags** → **split as finely as fields differ** (keep going finer where relevant): qa · ci-cd ·
  process · ai · data-viz · vr · ar · digital-twins · 3d · mobile · security.
- **Deep dives** → **all three** flagships get full write-ups now (Glartek, Big-Data VR, Florescer);
  more can follow.
- **Timeline** → **fixed lanes by category**; **"Show all events" toggle** (default off = curated
  only, on = every dated item).
- **Writing** → Ongoing Projects page. **Quiz** → stays on hub. **Mobile app** → tagged project (`mobile`).
- **Folder** → flat root + `projects/` & `involvement/` detail folders.

## Future / revisit (not blocking)

- **Tag compression** — if a tag ends up with only one item long-term, merge it; the deep-dive
  pages may also be **refactored into smaller reusable components** later (per "compress if needed").
- **Organizational tag filters** — give `involvement.html` its own filter bar (Leadership ·
  Community · International) using the same mechanism, if the list grows.
- **Curate-by-default tuning** — revisit which items are `curated: true` once the timeline is populated.
