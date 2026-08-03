/* ============================================================
   chat.js — "Ask about me" widget

   Front end for USI-RAG (../USI-RAG), which answers questions about
   me from the USI corpus. Retrieval and generation happen server-side;
   this file is transport plus interface, and deliberately holds no
   knowledge about the corpus, the model, or the prompt.

   Same house style as main.js: ES5-ish, no build step, no dependencies,
   runs from file://. See docs/DEVELOPMENT.md.

   ---- Configuration -------------------------------------------------
   ENDPOINT is the only thing you must set to go live. Until a backend
   is deployed it points at a local `python -m usi_rag.serve`, so the
   widget works while developing and degrades to an honest "offline"
   message everywhere else. It never fails silently and it never
   pretends to answer.

   Set window.CHAT_ENDPOINT before this script to override per-page.
   Set ENABLED to false to remove the widget entirely.
   ============================================================ */
(function () {
  'use strict';

  var ENABLED  = true;
  var ENDPOINT = window.CHAT_ENDPOINT || 'http://localhost:8000';

  /* Asked on first open. Chosen to demonstrate range — one identity
     question, one depth question, one that needs the frontmatter half
     (skill levels), one organizational — rather than to flatter the
     retriever. If these read as cherry-picked, they are the wrong set. */
  var SUGGESTIONS = [
    'What does he do at Glartek?',
    'What was his MSc thesis about?',
    'How strong is he with AI and machine learning?',
    'What has he built outside of work?'
  ];

  var GREETING =
    'Ask me anything about José Pedro — his work, studies, projects, ' +
    'or the things he does outside of engineering.';

  /* Answers are generated. Saying so once, plainly, is the honest
     version of a chatbot that speaks for a real person. */
  var DISCLAIMER =
    'Answers are generated from my CV corpus and can be wrong or incomplete. ' +
    'Sources are shown under each answer.';

  var MAX_CHARS = 500;          /* matches config.SERVE_MAX_QUESTION */

  if (!ENABLED) return;

  var BODY = document.body;
  var ROOT = BODY.dataset.root || '';
  var ITEMS = window.ITEMS || [];

  var open = false;
  var busy = false;
  var greeted = false;
  var els = {};

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var IC_CHAT = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/></svg>';
  var IC_CLOSE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var IC_SEND = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';

  /* ============================================================ SOURCES

     A source is a USI block id. Some of them correspond to a page on
     this site, most do not: USI has blocks for skills, traits and
     identity that the portfolio has no page for. So the link is
     attempted and then verified against window.ITEMS — an <a> to a
     404 is worse than plain text, and guessing the URL from the id
     without checking is how you get one. */
  var ID_PREFIXES = ['project-', 'involvement-', 'experience-', 'education-', 'writing-'];

  function itemFor(blockId) {
    var i, candidate, k;
    var tries = [blockId];
    for (i = 0; i < ID_PREFIXES.length; i++) {
      if (blockId.indexOf(ID_PREFIXES[i]) === 0) {
        tries.push(blockId.slice(ID_PREFIXES[i].length));
      }
    }
    for (k = 0; k < tries.length; k++) {
      for (i = 0; i < ITEMS.length; i++) {
        if (ITEMS[i].id === tries[k]) return ITEMS[i];
      }
    }
    return null;
  }

  function hrefFor(item) {
    return ROOT + (item.pillar === 'org' ? 'involvement/' : 'projects/') + item.id + '.html';
  }

  function sourcesHTML(sources) {
    if (!sources || !sources.length) return '';
    /* De-duplicated: the top-k often contains two chunks of one block,
       and the reader cares which blocks answered, not how many pieces
       of each were retrieved. */
    var seen = {};
    var chips = [];
    for (var i = 0; i < sources.length; i++) {
      var s = sources[i];
      if (seen[s.block_id]) continue;
      seen[s.block_id] = true;
      var label = esc(s.title || s.block_id);
      var item = itemFor(s.block_id);
      chips.push(item
        ? '<a class="chat-src" href="' + hrefFor(item) + '">' + label + '</a>'
        : '<span class="chat-src chat-src--plain">' + label + '</span>');
    }
    return '<div class="chat-sources"><span class="chat-sources__label">Sources</span>' +
           chips.join('') + '</div>';
  }

  /* ============================================================ ANSWER

     The prompt instructs the model to cite block ids in brackets after
     each claim, so the raw answer contains "[profile]" inline. Those
     are rendered as chips when they match a block that was actually
     retrieved, and left as literal text when they do not — a model
     citing something that was never in its context is exactly the
     failure worth being able to see rather than styling away. */
  function answerHTML(text, sources) {
    var valid = {};
    for (var i = 0; i < (sources || []).length; i++) valid[sources[i].block_id] = true;

    var html = esc(text);
    html = html.replace(/\[([a-z0-9][a-z0-9-]*)\]/gi, function (whole, id) {
      return valid[id] ? '<span class="chat-cite" title="' + esc(id) + '">' + esc(id) + '</span>' : whole;
    });
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return html.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>');
  }

  /* ============================================================ RENDER */
  function bubble(role, inner, extra) {
    var div = document.createElement('div');
    div.className = 'chat-msg chat-msg--' + role;
    div.innerHTML = '<div class="chat-bubble"><p>' + inner + '</p></div>' + (extra || '');
    return div;
  }

  function push(node) {
    els.log.appendChild(node);
    els.log.scrollTop = els.log.scrollHeight;
    return node;
  }

  function say(text) {
    return push(bubble('bot', esc(text).replace(/\n/g, '<br>')));
  }

  function suggestionsHTML() {
    var out = '<div class="chat-suggests" role="group" aria-label="Suggested questions">';
    for (var i = 0; i < SUGGESTIONS.length; i++) {
      out += '<button type="button" class="chat-suggest">' + esc(SUGGESTIONS[i]) + '</button>';
    }
    return out + '</div>';
  }

  function greet() {
    if (greeted) return;
    greeted = true;
    say(GREETING);
    var wrap = document.createElement('div');
    wrap.innerHTML = suggestionsHTML();
    push(wrap);
    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.chat-suggest');
      if (!btn || busy) return;
      wrap.remove();
      ask(btn.textContent);
    });
  }

  /* ============================================================ NETWORK */
  function ask(question) {
    if (busy) return;
    question = String(question || '').trim();
    if (!question) return;
    if (question.length > MAX_CHARS) question = question.slice(0, MAX_CHARS);

    busy = true;
    els.input.value = '';
    els.send.disabled = true;
    push(bubble('me', esc(question)));

    var thinking = push(bubble('bot',
      '<span class="chat-dots" aria-label="Thinking"><i></i><i></i><i></i></span>'));
    els.status.textContent = 'Thinking…';

    var done = function () {
      busy = false;
      els.send.disabled = false;
      autosize();
      els.input.focus();
    };

    fetch(ENDPOINT.replace(/\/+$/, '') + '/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: question })
    }).then(function (res) {
      return res.json().then(function (data) { return { ok: res.ok, status: res.status, data: data }; });
    }).then(function (r) {
      thinking.remove();
      if (!r.ok) {
        var msg = (r.data && r.data.error) ? r.data.error : 'something went wrong';
        /* The server's own message is shown for 4xx — those are about
           what the visitor did (too long, too many) and are actionable.
           A 5xx is about the backend and gets a neutral line instead. */
        push(bubble('bot', r.status >= 500
          ? esc('The answering service is having trouble right now. Please try again in a moment.')
          : esc(msg.charAt(0).toUpperCase() + msg.slice(1) + '.')));
        els.status.textContent = '';
        return done();
      }
      push(bubble('bot',
        answerHTML(r.data.answer, r.data.sources),
        sourcesHTML(r.data.sources)));
      els.status.textContent = 'Answered.';
      done();
    }).catch(function () {
      thinking.remove();
      offline();
      els.status.textContent = '';
      done();
    });
  }

  /* Unreachable backend. This is the state the widget is in whenever the
     site is deployed without one, so it is written as a real answer to
     the visitor rather than as an error code. */
  function offline() {
    push(bubble('bot',
      'I cannot reach the answering service at the moment — it runs separately from this site. ' +
      'Everything it knows is on these pages, and you are very welcome to ' +
      '<a href="mailto:josepedronolasco@gmail.com">email me</a> directly.'));
  }

  /* ============================================================ SHELL */
  function build() {
    var host = document.createElement('div');
    host.className = 'chat-host';
    host.innerHTML =
      '<button type="button" class="chat-launcher" aria-expanded="false" ' +
        'aria-controls="chat-panel" aria-label="Ask about me">' + IC_CHAT +
        '<span>Ask about me</span></button>' +
      '<section class="chat-panel" id="chat-panel" role="dialog" aria-modal="false" ' +
        'aria-label="Ask about José Pedro" hidden>' +
        '<header class="chat-head">' +
          '<div><h2>Ask about me</h2><p>Answered from my own CV corpus</p></div>' +
          '<button type="button" class="chat-close" aria-label="Close">' + IC_CLOSE + '</button>' +
        '</header>' +
        '<div class="chat-log" role="log" aria-live="polite" aria-relevant="additions"></div>' +
        '<p class="chat-note">' + esc(DISCLAIMER) + '</p>' +
        '<form class="chat-form">' +
          '<label class="sr-only" for="chat-input">Your question</label>' +
          '<textarea id="chat-input" class="chat-input" rows="1" maxlength="' + MAX_CHARS + '" ' +
            'placeholder="Ask a question…" autocomplete="off"></textarea>' +
          '<button type="submit" class="chat-send" aria-label="Send">' + IC_SEND + '</button>' +
        '</form>' +
        '<span class="sr-only" role="status" aria-live="polite"></span>' +
      '</section>';
    document.body.appendChild(host);

    els.host     = host;
    els.launcher = host.querySelector('.chat-launcher');
    els.panel    = host.querySelector('.chat-panel');
    els.log      = host.querySelector('.chat-log');
    els.form     = host.querySelector('.chat-form');
    els.input    = host.querySelector('.chat-input');
    els.send     = host.querySelector('.chat-send');
    els.status   = host.querySelector('[role="status"]');

    els.launcher.addEventListener('click', function () { toggle(!open); });
    host.querySelector('.chat-close').addEventListener('click', function () { toggle(false); });

    els.form.addEventListener('submit', function (e) {
      e.preventDefault();
      ask(els.input.value);
    });

    /* Enter sends, Shift+Enter breaks the line — the convention every
       chat interface uses, and the reason this is a textarea. */
    els.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        ask(els.input.value);
      }
    });
    els.input.addEventListener('input', autosize);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) { toggle(false); els.launcher.focus(); }
    });
  }

  function autosize() {
    els.input.style.height = 'auto';
    els.input.style.height = Math.min(els.input.scrollHeight, 110) + 'px';
  }

  function toggle(next) {
    open = next;
    els.panel.hidden = !open;
    els.host.classList.toggle('is-open', open);
    els.launcher.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      greet();
      els.input.focus();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
