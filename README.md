# José Pedro Henriques — Personal Website

A portfolio (not a CV in HTML) organized around two pillars — **Technological Achievements** and
**Organizational Involvement** — plus cross-cutting **Ongoing** and **Timeline** views. Built with
plain HTML, CSS, and JavaScript. No build tools, no dependencies.

## Structure

```
index.html            Hub
technological.html    Tag-filterable project gallery (areas = tags, OR filter)
involvement.html      Organizational landing
ongoing.html          Current activities + writing
timeline.html         Parallel-track timeline (fixed lanes + "show all" toggle)
projects/<id>.html    One detail page per technological project
involvement/<id>.html One detail page per organizational item

data.js               Single registry — window.TAGS (taxonomy) + window.ITEMS (everything)
main.js               Shared header/footer injection + all data-driven rendering
style.css             Design system (light · teal)
docs/                 Living planning docs (structure, roadmap, principles, dev rules, decisions)
```

Everything is rendered from `data.js` — *add once, surface everywhere*. To add a project:
add one entry to `window.ITEMS`, then copy any stub to `projects/<id>.html` (slug = id).
See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Running locally

Open `index.html` directly in a browser — the shared shell and all views are injected with inline
templates (no `fetch`), so it works from `file://`. Or use any static server:

```bash
npx serve .
# or
python -m http.server
```
