# Development Rules

The *how*: conventions and constraints for building the site. Follow these so the
multi-page, no-build-tool site stays consistent and maintainable.

## Hard constraints

- **Plain HTML / CSS / JS only.** No framework, no bundler, no npm dependencies, no build step.
- **Runs by opening a file** or via any static server (`python -m http.server`, `npx serve .`).
- **Vanilla everything.** No jQuery, no CSS frameworks. Hand-rolled, readable code.

## Folder & file layout

> **DECISION (Phase 0, revised):** **flat root + per-pillar detail folders.** Area pages collapsed
> into one tag-filtered gallery; **every item now has its own detail page** — `projects/<id>.html`
> (technological) and `involvement/<id>.html` (organizational), both from one shared template.

```
index.html
technological.html   filterable project gallery (areas = tags, OR filter)
involvement.html     organizational landing — cards link to involvement/<id>.html
ongoing.html         current activities + writing (status: 'ongoing')
timeline.html        fixed lanes + "show all events" toggle (curated by default)
projects/
  <id>.html          detail page per TECHNOLOGICAL project (slug = item id)
involvement/
  <id>.html          detail page per ORGANIZATIONAL item (slug = item id)
style.css
main.js
data.js              single registry: items + tag taxonomy (gallery, involvement, ongoing, timeline, featured)
assets/
  img/        photos, project visuals (optimized)
  icons/      svg (or inline in markup)
  og/         social share image
docs/         these planning docs (not shipped content)
```

- Lowercase, hyphenated file names; **an item's detail page is `<pillar-folder>/<id>.html` where
  `<id>` is exactly its `data.js` item `id`** (slug = id, the whole contract). `tech` → `projects/`,
  `org` → `involvement/`. `id`s are **globally unique**, so a slug never collides across folders.
- **Relative paths + a `data-root` prefix** (D18). Root pages set `<body data-root="">`, detail
  pages in `projects/`/`involvement/` set `<body data-root="../">` and reference assets as
  `../style.css`. `main.js` builds all nav/footer/card links by prefixing `data-root`, so the same
  injected markup works from any depth **and from `file://`** (root-relative `/…` would break when
  opened as a file).

## Shared header & footer (DRY without a build step)

The header/footer markup lives **once** and is injected by `main.js` on `DOMContentLoaded`:

- Each page has `<header data-shell="header"></header>` and `<footer data-shell="footer"></footer>` placeholders.
- `main.js` renders the shared markup into them and sets the **active** nav item from a
  `data-page` attribute on `<body>` (e.g. `data-page="technological"`, `data-page="ongoing"`;
  project detail pages use `data-page="technological"` so the pillar stays highlighted).
- Benefit: nav changes happen in one place. Cost: header/footer require JS — acceptable per
  progressive-enhancement principle (content is still fully readable; provide a `<noscript>`
  minimal nav fallback with home + pillar links).

## CSS conventions

- **Single `style.css`**, ordered: `1) tokens  2) base/reset  3) layout  4) components  5) page-specific  6) utilities  7) media queries`.
- **Design tokens** as CSS custom properties on `:root` — colors, type scale, spacing scale,
  radii, shadows, transitions, max-widths. Components consume tokens, never hard-coded hex/px.
- Keep the current identity: **light theme** — bg `#f4f7fb`, bg-alt `#fff`, card `#fff`, teal
  accent `#0d9488`, text `#0f172a`, Inter, soft shadows, ~12px radii.
- **Component-scoped class names**, BEM-ish: `.card`, `.card__title`, `.card--featured`.
  Reuse shared components (`.section`, `.card`, `.tag-chip`, `.filter-bar`, `.stat`, `.btn`,
  `.breadcrumb`, `.case-study`) across pages — do not re-invent per page.
- **One standardized card.** `.card` is the *same* component on the gallery, involvement page,
  hub featured strip, and timeline-expanded view (variants via `--featured` / `--compact`).
  Tag colors come from `window.TAGS` (set per chip via a CSS custom property, e.g.
  `style="--tag: #a78bfa"`), so a new tag needs no new CSS.
- Page-specific overrides namespaced by the body's `data-page`.
- Mobile-first media queries.

## JS conventions

- One `main.js`, plain ES modules-free script (so it works from `file://`). Wrap in an IIFE or
  guard against re-running.
- Responsibilities: inject header/footer + set active state, mobile-menu toggle, scroll/`fade-up`
  animations (via `IntersectionObserver`), back-to-top, optional quiz, **and the data-driven
  views**: render cards from `window.ITEMS`, build the gallery **filter bar from `window.TAGS`**,
  filter cards by active tags with **URL-hash sync** (`#tag=immersive` → pre-filtered & shareable),
  and render the timeline from dated items.
- One card-render function feeds every view (gallery / involvement / featured / timeline) so the
  card stays standardized; pass a variant flag rather than duplicating markup.
- Feature-detect and fail soft. No console errors on any page.
- Respect `prefers-reduced-motion` — skip/relax animations when set.

## Chat widget (`chat.js`)

Deliberately a **separate file** from `main.js` (D21) — its own `<script>` tag on every
page, its own `CHAT` section in `style.css`. It is the front end for a backend that lives
outside this repo (`../USI-RAG`, D22) and that is not always running (D27); the widget's
whole job is to degrade honestly when it isn't.

- `ENDPOINT` resolves at load time, in order: `window.CHAT_ENDPOINT` (hardcode, for a
  permanent host) → `?chat_endpoint=<url>` on the current page (saved to `localStorage`,
  then stripped from the URL) → the stored value → `http://localhost:8000` (D28). Never
  edit this as a hardcoded constant for a one-off demo — use the query param.
- To point the live site at a running backend: run `USI-RAG/scripts/tunnel-up.sh`, then
  open the site once with the printed `?chat_endpoint=` URL. That browser remembers it
  until it's replaced or `localStorage` is cleared.
- Citation matching accepts both `[block-id]` and `[[block-id]]` (D29) — don't narrow it
  back to one form without checking what the current `CHAT_MODEL` actually emits.

## Data model (single registry — source of truth)

The technological gallery, the involvement page, the timeline, and the hub "Featured work" are
**all rendered from one registry** in `data.js`. Write an item once; it surfaces in every view it
qualifies for. This is the mechanism behind *add once, surface everywhere*.

`data.js` exposes two things: the **tag taxonomy** and the **items array**.

```js
// data.js — loaded with a plain <script src="/data.js"> before main.js (no modules, works from file://)

// 1) Tag taxonomy — the filter set. Adding/splitting a tag happens HERE, nowhere else.
//    Split as finely as the fields differ. The filter bar + tag colors/icons read from this.
window.TAGS = {
  qa:            { label: 'QA',                 group: 'Quality & Delivery', color: '#2dd4bf', icon: '✅' },
  'ci-cd':       { label: 'CI/CD',              group: 'Quality & Delivery', color: '#34d399', icon: '🔁' },
  process:       { label: 'Process Engineering',group: 'Quality & Delivery', color: '#38bdf8', icon: '⚙️' },
  ai:            { label: 'Applied AI',         group: 'AI & Data',          color: '#a78bfa', icon: '🧠' },
  'data-viz':    { label: 'Data Visualization', group: 'AI & Data',          color: '#c084fc', icon: '📊' },
  vr:            { label: 'Virtual Reality',    group: 'Immersive & 3D',     color: '#fb7185', icon: '🥽' },
  ar:            { label: 'Augmented Reality',  group: 'Immersive & 3D',     color: '#f472b6', icon: '📱' },
  'digital-twins':{label: 'Digital Twins',      group: 'Immersive & 3D',     color: '#fda4af', icon: '🪞' },
  '3d':          { label: '3D & Making',        group: 'Immersive & 3D',     color: '#fbbf24', icon: '🖨️' },
  mobile:        { label: 'Mobile Dev',         group: 'Software',           color: '#60a5fa', icon: '📲' },
  security:      { label: 'Cybersecurity',      group: 'Security',           color: '#f59e0b', icon: '🔐' },
  // new field → add one line. `group` is only for filter-bar readability; filtering is flat OR.
};

// 2) Items — projects, involvements, ongoing. One object per thing you've done.
window.ITEMS = [
  {
    id: 'glartek-sqe',          // stable, kebab-case — IS the detail-page slug: projects/glartek-sqe.html
    title: 'QA & CI/CD Transformation',
    org: 'Glartek',
    pillar: 'tech',             // 'tech' → gallery | 'org' → involvement | 'personal' → ongoing-only
    tags: ['qa', 'ci-cd', 'process', 'ai'],   // MULTI-tag; must be keys of window.TAGS
    stack: ['Cypress', 'Playwright', 'GitLab CI'],  // descriptive badges, NOT filters
    status: 'ongoing',          // 'ongoing' → Ongoing page + extends to "Now" on timeline | 'completed'
    start: '2025-09',           // 'YYYY' | 'YYYY-MM' | omit if undated (then not on timeline)
    end: null,                  // set when completed; null/omit while ongoing
    track: 'work',              // timeline lane: 'work' | 'education' | 'leadership' | 'projects'
    curated: true,              // shown on the timeline by default (toggle off → only curated)
    featured: true,             // surfaces on the hub featured strip
    summary: 'One–two sentence teaser for the card / timeline expansion.',
    href: '/projects/glartek-sqe.html'   // canonical detail page (or external URL, e.g. a blog)
  },
  // …
];
```

Rules:
- **`id` is the contract → it is the detail-page slug.** Every item's full write-up lives at
  `<folder>/<id>.html` (`tech` → `projects/`, `org` → `involvement/`); `href` points there.
  External things (blogs) put the outside URL in `href`.
- **`tags` keys must exist in `window.TAGS`.** This is the only coupling; the filter bar, colors,
  and timeline encoding all read from the taxonomy.
- **`pillar`** routes the item: `tech` → gallery · `org` → involvement · `personal` → ongoing-only.
- **`status: 'ongoing'`** → shows on `ongoing.html` and extends to the timeline "Now" marker.
- **Dated items** (have `start`) appear on the **timeline**, placed in their **`track`** lane;
  **`curated: true`** shows by default, the rest only when "Show all events" is toggled on.
- **`featured: true`** surfaces on the hub — no hand-maintained list.
- Sort, filter, and timeline lane-pack in JS from this data; don't hand-maintain ordering.
- **To add an item:** identify its fields → pick/add `tags` → add one `ITEMS` entry → create its
  `projects/<id>.html` *or* `involvement/<id>.html` from the template. It then auto-appears under
  each tag filter (OR), and on timeline / featured / ongoing as its flags dictate — no filter-bar edits.

## Detail pages (`projects/<id>.html` & `involvement/<id>.html`)

**Every item** has a dedicated page, built from **one shared template** (both pillars) so they
stay consistent (the index card links here; this page holds the canonical content).

- **Slug = item `id`.** `projects/big-data-vr.html` ⇄ `ITEMS[].id === 'big-data-vr'`;
  organizational items live at `involvement/<id>.html`.
- Uses the shared shell — `data-page="technological"` for `projects/`, `data-page="involvement"`
  for `involvement/` — so the right pillar nav stays highlighted; + standardized components.
- Structure: **header** (title · org/context · date range · tags · stack · external links) →
  **body** (overview → problem → approach → my role → result, with metrics + media) →
  prev/next or "back to index".
- Depth scales: flagships get the full narrative; lighter items keep it short — but the
  template/section order stays the same.
- Each page sets its own `<title>` / description / OG (see SEO below).
- Keep the title, summary, tags and dates **in sync with the `data.js` entry** (page = detail;
  registry = index).

## Accessibility checklist (every page)

- One `<h1>`; logical heading order; landmarks (`header`/`nav`/`main`/`footer`).
- All interactive elements keyboard-reachable with visible `:focus-visible`.
- Color contrast ≥ WCAG AA. Don't encode meaning in color alone.
- Meaningful `alt` for images; `aria-label` for icon-only controls.
- `<noscript>` fallback nav present.

## SEO / metadata (every page)

- Unique `<title>` and `<meta name="description">`.
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
- Canonical link. Root `sitemap.xml` + `robots.txt` in Phase 5.
- Consider `Person` JSON-LD on the hub.

## Performance

- Optimize images (correct dimensions, modern format, `loading="lazy"` below the fold).
- Inline critical SVG icons; avoid icon-font/libraries.
- Keep fonts to the Inter weights actually used; `display=swap`.
- No render-blocking JS; load `main.js` with `defer`.

## Browser support

- Latest 2 versions of evergreen browsers (Chrome, Edge, Firefox, Safari) + mobile equivalents.
- Progressive enhancement for older engines; no transpilation pipeline.

## Git & workflow

- Small, focused commits scoped to a phase/page.
- **Update the relevant `docs/` file in the same commit** as the change it describes.
- Keep `ROADMAP.md` statuses current; move resolved open questions out of `STRUCTURE.md`.
- Branch off `master` for larger reworks; keep `master` shippable.

## Definition of done (per page)

- [ ] Matches its `STRUCTURE.md` spec
- [ ] Uses shared shell + the **standardized `.card`** (no bespoke nav/footer/card)
- [ ] Index surfaces (gallery/ongoing/timeline/featured) render from `data.js`; no hand-duplicated cards
- [ ] Every item's `href` resolves — `projects/<id>.html` (tech) / `involvement/<id>.html` (org) exists
- [ ] (gallery) Filter bar generated from `window.TAGS`; **OR** filtering correct; hash-sync works
- [ ] (detail page) Title/summary/tags/dates match the `data.js` entry
- [ ] Responsive at 360 / 768 / 1280 px
- [ ] Accessibility checklist passes
- [ ] Metadata complete
- [ ] No console errors; works with JS disabled (content readable)
- [ ] Roadmap ticked, docs updated
