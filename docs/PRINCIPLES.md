# Principles

The *why* behind the build. When a decision is unclear, these break the tie.

## Product principles

1. **Story over inventory.** Every item answers *what, why it mattered, and my role* —
   not just a label. If something can't earn a sentence of meaning, it's a tag, not a card.
2. **The two pillars are equals.** Technological Achievements and Organizational
   Involvement get equal visual weight. The engineer and the community-builder are one person.
3. **Earn the click.** The hub orients in 30 seconds and routes confidently; area pages reward
   the visitor who goes deeper. No dead ends.
4. **Show outcomes, quantify when honest.** Prefer "cut pipeline time 50%+" over "worked on
   pipelines." Never invent numbers; if there's no metric, describe the change concretely.
5. **Depth where it counts.** Most work is a rich card; a chosen few become full case studies.
   Don't flatten everything to the same depth.
6. **Add once, surface everywhere.** Work lives in one registry (`data.js`) and is navigated by
   **tags, not pages**. A project carries every area it touches (the thesis is AI *and* QA *and*
   Process) and appears under each filter. Adding a project = one tagged entry; the site stays
   easy to grow without restructuring.

## Design principles

7. **Keep the identity.** Light theme (`--bg #f4f7fb`, `--bg-alt #fff`), **teal accent `#0d9488`**,
   Inter, soft shadows + rounded cards. Evolve the system; don't restyle from scratch.
8. **Calm, confident, spacious.** Generous whitespace, clear hierarchy, restrained motion.
   Animation serves comprehension, never decoration for its own sake.
9. **One standardized card, everywhere.** A single card component renders the same on the gallery,
   the involvement page, the hub, and the timeline. Variants — not bespoke markup — handle
   featured/compact. Consistency is the glue that lets the data drive the views.
10. **Content-first responsiveness.** Designed mobile-up; layouts reflow, never overflow.

## Experience principles

11. **Accessible by default.** Semantic HTML, keyboard-navigable, visible focus, AA contrast,
    real alt text, `prefers-reduced-motion` respected. Not a Phase 5 afterthought.
12. **Fast and light.** No framework tax. Right-sized images, system/Google-font discipline,
    no blocking scripts. Target strong Lighthouse scores.
13. **Progressive enhancement.** Core content and navigation work even if JS fails; JS adds
    polish (injection, animations, filtering, the quiz), it isn't a hard dependency for reading.

## Content & voice

14. **First person, plain, specific.** "I redesigned the test infrastructure" beats
    "Responsible for test infrastructure." Concrete > buzzword.
15. **Truthful and current.** Facts trace to reality (role dates, metrics, links). Mark
    in-progress work as in-progress.
16. **Human, not corporate.** The blogs, scouting, travel and maker practice are part of the
    story — they make the engineer legible.

## Tie-breakers

- Clarity beats cleverness.
- Consistency beats local optimization.
- Shipping a focused page beats stalling on a perfect one.
- When unsure, re-read the north star in `README.md`.
