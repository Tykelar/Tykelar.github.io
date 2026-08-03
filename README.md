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
chat.js               "Ask about me" widget — front end for the USI-RAG service
style.css             Design system (light · teal)
docs/                 Living planning docs (structure, roadmap, principles, dev rules, decisions)
```

## The chatbot

`chat.js` puts an **Ask about me** launcher on every page. It is only the front
end: retrieval and generation happen in [`../USI-RAG`](../USI-RAG), which answers
from a structured corpus about me and returns the sources it used. The site stays
static — no build step, no dependencies, no key in the browser.

Point it at a backend by editing `ENDPOINT` at the top of `chat.js`. It defaults
to `http://localhost:8000`, so:

```bash
cd ../USI-RAG && USI_AUDIENCE=public python -m usi_rag.serve
```

…and the widget works while you develop. **Without a backend it does not break** —
it says it cannot reach the service and offers the email link instead. See
[docs/DECISIONS.md](docs/DECISIONS.md) D21–D26 for why it is a separate file, a
separate repo, and why sources are only linked when they resolve.

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
