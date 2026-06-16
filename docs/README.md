# Project Documentation

Living planning docs for the **José Pedro Henriques** personal website overhaul.
These are the source of truth for structure, sequencing, and conventions — **update them as the project evolves**, before or alongside the code they describe.

| Doc | Purpose |
|-----|---------|
| [STRUCTURE.md](STRUCTURE.md) | Information architecture — pillars, pages, navigation, content map |
| [ROADMAP.md](ROADMAP.md) | Phased build plan and current status |
| [PRINCIPLES.md](PRINCIPLES.md) | Design, content & experience principles (the *why*) |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Technical rules, conventions & constraints (the *how*) |
| [DECISIONS.md](DECISIONS.md) | Chronological decision register, with rationale |

## North star

> Not a CV in HTML. A **portfolio that tells the story** of what I've built and the
> communities I've shaped — organized around two pillars:
> **Technological Achievements** and **Organizational Involvement**.

The CV answers *"what is on his résumé?"*. This site answers *"what has he actually
done, why did it matter, and what was his role?"*

## Decisions locked — 2026-06-16

- **Architecture:** multi-page, flat root + `projects/` & `involvement/` detail folders. Hub + **`technological.html`** (filterable gallery) + `involvement.html` (org landing) + **`ongoing.html`** + cross-cutting `timeline.html`. Plain HTML, no build step.
- **Every item gets its own detail page** — `projects/<id>.html` (tech) / `involvement/<id>.html` (org), one shared template; cards are teasers that link to them. **`id` = detail-page slug.**
- **Technological areas = TAGS, not pages.** One gallery filtered by tag with **OR** logic; projects are multi-tag (thesis = AI + QA + Process) and surface under each. Tags **split by field**, extensible.
- **Tags (initial 11):** qa · ci-cd · process · ai · data-viz · vr · ar · digital-twins · 3d · mobile · security.
- **Data-driven (`add once, surface everywhere`):** a single `data.js` registry (items + tag taxonomy) feeds gallery, involvement, ongoing, timeline, and hub featured. Adding an item = one tagged entry + its detail page.
- **One standardized card** component used in every view.
- **Ongoing Projects:** `status: 'ongoing'` items (the two writing blogs + current work) on their own page.
- **Timeline:** **fixed lanes by category** + a **"Show all events" toggle** (default off = `curated` only). Events expand to a summary + deep-link to the detail page.
- **Deep dives:** all 3 flagships (Glartek, Big-Data VR, Florescer) get full write-ups; may compress into smaller components later.
- **Stack:** plain HTML / CSS / JS — no framework, no bundler, no dependencies.

## How to use these docs

1. Before building a page, read its entry in `STRUCTURE.md`.
2. Follow the conventions in `DEVELOPMENT.md` and the spirit of `PRINCIPLES.md`.
3. When a decision changes, update the relevant doc **in the same commit** as the code.
4. Tick items in `ROADMAP.md` as they ship; log open questions where they live.
