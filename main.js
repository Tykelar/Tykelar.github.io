/* ============================================================
   main.js — shared shell + data-driven views
   Reads window.TAGS / window.ITEMS (data.js). Plain ES5-ish so
   it runs from file:// without a server. See docs/DEVELOPMENT.md.
   ============================================================ */
(function () {
  'use strict';

  var BODY = document.body;
  var ROOT = BODY.dataset.root || '';          // '' on root pages, '../' on detail pages
  var VIEW = BODY.dataset.view || 'home';
  var PATH = location.pathname;
  var TAGS = window.TAGS || {};
  var ITEMS = window.ITEMS || [];
  var TRACKS = window.TRACKS || {};

  /* resolve an internal path against the page depth; leave urls/anchors alone */
  function r(p) {
    if (!p) return p;
    if (/^https?:/i.test(p) || p.charAt(0) === '#') return p;
    return ROOT + p;
  }
  function isExternal(p) { return /^https?:/i.test(p || ''); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---- contact / config ---- */
  var CONTACT = {
    email: 'josepedronolasco@gmail.com',
    github: 'https://github.com/Tykelar', githubUser: 'Tykelar',
    linkedin: 'https://linkedin.com/in/josepedroh', linkedinUser: 'josepedroh',
    location: 'Leiria, Portugal'
  };
  var NAV = [
    { id: 'technological', label: 'Technological', href: 'technological.html' },
    { id: 'involvement',   label: 'Organizational', href: 'involvement.html' },
    { id: 'ongoing',       label: 'Ongoing',        href: 'ongoing.html' },
    { id: 'timeline',      label: 'Timeline',       href: 'timeline.html' }
  ];
  var PILLAR_COLOR = { tech: '#0d9488', org: '#ea580c', education: '#2563eb', personal: '#7c3aed' };
  var PILLAR_LABEL = { tech: 'Technological', org: 'Organizational', education: 'Education', personal: 'Personal' };

  var IC = {
    mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>',
    linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    up: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>'
  };

  /* ============================================================ DATES */
  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function fmtDate(s) {
    if (!s) return '';
    var p = String(s).split('-');
    return p[1] ? MONTHS[parseInt(p[1], 10) - 1] + ' ' + p[0] : p[0];
  }
  function fmtRange(it) {
    var start = fmtDate(it.start);
    if (!start) return '';
    var end = it.end ? fmtDate(it.end) : (it.status === 'ongoing' ? 'Present' : '');
    if (!end || end === start) return start;
    return start + ' – ' + end;
  }
  function dnum(s) {
    if (!s) return null;
    var p = String(s).split('-');
    return parseInt(p[0], 10) + (p[1] ? (parseInt(p[1], 10) - 1) / 12 : 0);
  }
  function nowNum() { var d = new Date(); return d.getFullYear() + d.getMonth() / 12; }

  /* ============================================================ SHELL */
  function injectShell() {
    var ap = activePage();
    var header = document.querySelector('[data-shell="header"]');
    if (header) {
      header.id = 'navbar';
      var links = NAV.map(function (n) {
        return '<li><a href="' + r(n.href) + '"' + (n.id === ap ? ' class="active"' : '') + '>' + n.label + '</a></li>';
      }).join('');
      header.innerHTML =
        '<div class="nav-container">' +
          '<a href="' + r('index.html') + '" class="nav-logo">JPH</a>' +
          '<ul class="nav-links" id="nav-links">' + links +
            '<li><a href="' + r('index.html') + '#contact">Contact</a></li>' +
          '</ul>' +
          '<button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div>';
    }
    var footer = document.querySelector('[data-shell="footer"]');
    if (footer) {
      var fnav = NAV.map(function (n) { return '<a href="' + r(n.href) + '">' + n.label + '</a>'; }).join('');
      footer.innerHTML =
        '<div class="container footer-inner">' +
          '<nav class="footer-nav">' + fnav + '</nav>' +
          '<p>© ' + new Date().getFullYear() + ' José Pedro Henriques · Built with HTML, CSS &amp; JS</p>' +
        '</div>';
    }
    // back-to-top (create if absent)
    if (!document.getElementById('back-to-top')) {
      var b = document.createElement('button');
      b.id = 'back-to-top'; b.setAttribute('aria-label', 'Back to top'); b.innerHTML = IC.up;
      document.body.appendChild(b);
    }
    wireChrome();
  }

  function activePage() {
    if (VIEW === 'gallery') return 'technological';
    if (VIEW === 'involvement') return 'involvement';
    if (VIEW === 'ongoing') return 'ongoing';
    if (VIEW === 'timeline') return 'timeline';
    if (VIEW === 'detail') return PATH.indexOf('/involvement/') > -1 ? 'involvement' : 'technological';
    return '';
  }

  function wireChrome() {
    var navbar = document.getElementById('navbar');
    var toggle = document.getElementById('nav-toggle');
    var links = document.getElementById('nav-links');
    var top = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
      if (top) top.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          links.classList.remove('open'); toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
    if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ============================================================ CARD */
  function tagChip(key, asLink) {
    var t = TAGS[key]; if (!t) return '';
    var inner = '<span aria-hidden="true">' + t.icon + '</span>' + esc(t.label);
    if (asLink) return '<a class="tag-chip" style="--tag:' + t.color + '" href="' + r('technological.html') + '#tag=' + key + '">' + inner + '</a>';
    return '<span class="tag-chip" style="--tag:' + t.color + '">' + inner + '</span>';
  }
  function cardHTML(it) {
    var ext = isExternal(it.href);
    var tagHtml = (it.tags || []).map(function (k) { return tagChip(k, false); }).join('');
    var stackHtml = (it.stack || []).map(function (s) { return '<span class="stack-badge">' + esc(s) + '</span>'; }).join('');
    var cls = 'card' + (it.featured ? ' card--featured card--ribbon' : '');
    var open = it.href ? '<a class="' + cls + '" href="' + r(it.href) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' : '<div class="' + cls + '">';
    var close = it.href ? '</a>' : '</div>';
    var cta = it.href ? '<span class="card__cta">' + (ext ? 'Visit ' : 'See in detail ') + '→</span>' : '';
    return open +
      '<div class="card__top"><span class="card__icon" aria-hidden="true">' + (it.icon || '•') + '</span>' +
        (fmtRange(it) ? '<span class="card__date">' + fmtRange(it) + '</span>' : '') + '</div>' +
      '<h3 class="card__title">' + esc(it.title) + '</h3>' +
      (it.org ? '<p class="card__context">' + esc(it.org) + '</p>' : '') +
      '<p class="card__summary">' + esc(it.summary) + '</p>' +
      (tagHtml ? '<div class="card__tags">' + tagHtml + '</div>' : '') +
      (stackHtml ? '<div class="card__stack">' + stackHtml + '</div>' : '') +
      cta + close;
  }
  function grid(items) { return items.map(cardHTML).join(''); }

  /* ============================================================ HOME */
  function renderHome() {
    var feat = document.getElementById('featured-grid');
    if (feat) feat.innerHTML = grid(ITEMS.filter(function (i) { return i.featured; }));
    var chips = document.getElementById('tag-chips');
    if (chips) chips.innerHTML = Object.keys(TAGS).map(function (k) { return tagChip(k, true); }).join('');
    var teaser = document.getElementById('ongoing-teaser');
    if (teaser) {
      var n = ITEMS.filter(function (i) { return i.status === 'ongoing'; }).length;
      teaser.innerHTML =
        '<div><h3>Currently in motion</h3><p>' + n + ' ongoing threads — current work, research, and writing.</p></div>' +
        '<a class="btn btn-outline" href="' + r('ongoing.html') + '">See what I\'m doing now →</a>';
    }
    // hero load-in
    var heroEls = document.querySelectorAll('.hero .fade-up');
    heroEls.forEach(function (el, i) { setTimeout(function () { el.classList.add('visible'); }, 120 + i * 110); });
    initQuiz();
  }

  /* ============================================================ GALLERY */
  function parseHashTags() {
    var m = location.hash.match(/tag=([^&]+)/);
    if (!m) return [];
    return decodeURIComponent(m[1]).split(',').filter(function (k) { return TAGS[k]; });
  }
  function renderGallery() {
    var bar = document.getElementById('filter-bar');
    var gridEl = document.getElementById('gallery-grid');
    var metaEl = document.getElementById('filter-meta');
    if (!gridEl) return;
    var pool = ITEMS.filter(function (i) { return i.pillar === 'tech'; });
    var selected = parseHashTags();

    function count(key) { return pool.filter(function (i) { return (i.tags || []).indexOf(key) > -1; }).length; }

    if (bar) {
      var allOn = selected.length === 0;
      var chips = ['<button class="filter-chip filter-chip--all" data-tag="" aria-pressed="' + allOn + '">All <span class="fc-count">' + pool.length + '</span></button>'];
      Object.keys(TAGS).forEach(function (k) {
        chips.push('<button class="filter-chip" style="--tag:' + TAGS[k].color + '" data-tag="' + k + '" aria-pressed="' + (selected.indexOf(k) > -1) + '">' +
          '<span aria-hidden="true">' + TAGS[k].icon + '</span>' + esc(TAGS[k].label) + ' <span class="fc-count">' + count(k) + '</span></button>');
      });
      bar.innerHTML = chips.join('');
      bar.querySelectorAll('.filter-chip').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var key = btn.dataset.tag;
          var sel = parseHashTags();
          if (!key) { sel = []; }
          else { var i = sel.indexOf(key); if (i > -1) sel.splice(i, 1); else sel.push(key); }
          location.hash = sel.length ? 'tag=' + sel.join(',') : '';
          if (!sel.length && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
        });
      });
    }
    var shown = selected.length === 0 ? pool : pool.filter(function (i) {
      return (i.tags || []).some(function (t) { return selected.indexOf(t) > -1; });
    });
    gridEl.innerHTML = shown.length ? grid(shown) : '<div class="empty-state">No projects match those tags yet.</div>';
    if (metaEl) {
      metaEl.textContent = selected.length
        ? 'Showing ' + shown.length + ' of ' + pool.length + ' · filtering by ' + selected.map(function (k) { return TAGS[k].label; }).join(', ') + ' (any)'
        : 'Showing all ' + pool.length + ' projects';
    }
  }

  /* ============================================================ INVOLVEMENT / ONGOING */
  function renderInvolvement() {
    var el = document.getElementById('involvement-grid');
    if (el) el.innerHTML = grid(ITEMS.filter(function (i) { return i.pillar === 'org'; }));
  }
  function renderOngoing() {
    var el = document.getElementById('ongoing-grid');
    if (el) el.innerHTML = grid(ITEMS.filter(function (i) { return i.status === 'ongoing'; }));
  }

  /* ============================================================ TIMELINE */
  function renderTimeline() {
    var root = document.getElementById('tl-root');
    if (!root) return;
    var showAll = false;

    var legend = Object.keys(PILLAR_LABEL).map(function (p) {
      return '<span><span class="tl-swatch" style="background:' + PILLAR_COLOR[p] + '"></span>' + PILLAR_LABEL[p] + '</span>';
    }).join('');

    root.innerHTML =
      '<div class="tl-controls">' +
        '<div class="tl-legend">' + legend + '</div>' +
        '<label class="tl-toggle"><input type="checkbox" id="tl-all"><span class="tl-switch"></span>Show all events</label>' +
      '</div>' +
      '<div class="tl-scroll"><div class="tl-chart" id="tl-chart"></div></div>' +
      '<div class="tl-detail" id="tl-detail"></div>' +
      '<p class="tl-hint">Tip: click any bar to see a summary and open its full page. Toggle “Show all events” for the complete record.</p>';

    function draw() {
      var pool = ITEMS.filter(function (i) { return i.start && (showAll || i.curated); });
      var min = Math.floor(pool.reduce(function (m, i) { return Math.min(m, dnum(i.start)); }, Infinity));
      var max = Math.ceil(Math.max(nowNum(), pool.reduce(function (m, i) { return Math.max(m, dnum(i.end) || nowNum()); }, -Infinity)));
      var span = (max - min) || 1;
      var xPct = function (n) { return ((n - min) / span) * 100; };

      // axis ticks (every year, thinned if many)
      var step = span > 10 ? 2 : 1, ticks = '';
      for (var y = min; y <= max; y += step) ticks += '<span class="tl-tick" style="left:' + xPct(y) + '%">' + y + '</span>';
      var nowL = xPct(nowNum());

      var lanesHtml = Object.keys(TRACKS).map(function (tk) {
        var laneItems = pool.filter(function (i) { return i.track === tk; })
          .sort(function (a, b) { return dnum(a.start) - dnum(b.start); });
        if (!laneItems.length) return '';
        // greedy row packing
        var rows = [];
        laneItems.forEach(function (it) {
          var s = dnum(it.start), e = Math.max(dnum(it.end) || nowNum(), s + 0.35);
          var placed = false;
          for (var ri = 0; ri < rows.length; ri++) {
            if (rows[ri].lastEnd <= s) { rows[ri].items.push({ it: it, s: s, e: e }); rows[ri].lastEnd = e; placed = true; break; }
          }
          if (!placed) rows.push({ lastEnd: e, items: [{ it: it, s: s, e: e }] });
        });
        var rowsHtml = rows.map(function (row) {
          var bars = row.items.map(function (o) {
            var left = xPct(o.s), width = Math.max(xPct(o.e) - left, 1.5);
            var c = PILLAR_COLOR[o.it.pillar] || '#0d9488';
            return '<button class="tl-bar' + (o.it.status === 'ongoing' ? ' ongoing' : '') + '" data-id="' + o.it.id + '"' +
              ' style="--c:' + c + ';left:' + left + '%;width:' + width + '%" aria-expanded="false" title="' + esc(o.it.title) + '">' +
              '<span class="tl-bar__emoji" aria-hidden="true">' + (o.it.icon || '•') + '</span>' +
              '<span class="tl-bar__txt">' + esc(o.it.title) + '</span></button>';
          }).join('');
          return '<div class="tl-row">' + bars + '</div>';
        }).join('');
        return '<div class="tl-lane"><div class="tl-lane__label">' + esc(TRACKS[tk]) + '</div><div class="tl-lane__track">' + rowsHtml + '</div></div>';
      }).join('');

      document.getElementById('tl-chart').innerHTML =
        '<div class="tl-axis">' + ticks + '<span class="tl-tick" style="left:' + nowL + '%;color:var(--accent)">Now</span></div>' + lanesHtml;

      var detail = document.getElementById('tl-detail');
      document.querySelectorAll('.tl-bar').forEach(function (bar) {
        bar.addEventListener('click', function () {
          var was = bar.getAttribute('aria-expanded') === 'true';
          document.querySelectorAll('.tl-bar[aria-expanded="true"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
          if (was) { detail.classList.remove('open'); detail.innerHTML = ''; return; }
          bar.setAttribute('aria-expanded', 'true');
          var it = ITEMS.filter(function (i) { return i.id === bar.dataset.id; })[0];
          detail.innerHTML = cardHTML(it);
          detail.classList.add('open');
        });
      });
    }
    document.getElementById('tl-all').addEventListener('change', function (e) { showAll = e.target.checked; draw(); });
    draw();
  }

  /* ============================================================ DETAIL */
  function renderDetail() {
    var host = document.getElementById('app');
    if (!host) return;
    var slug = PATH.split('/').pop().replace(/\.html$/, '');
    var it = ITEMS.filter(function (i) { return i.id === slug; })[0];
    if (!it) {
      document.title = 'Not found — José Pedro Henriques';
      host.innerHTML = '<div class="detail-wrap"><h1 class="detail-title">Not found</h1><p class="detail-lead">This item doesn\'t exist (yet). <a href="' + r('index.html') + '" style="color:var(--accent);font-weight:700">Back home →</a></p></div>';
      return;
    }
    document.title = it.title + ' — José Pedro Henriques';
    var pillarPage = it.pillar === 'org' ? r('involvement.html') : r('technological.html');
    var pillarName = it.pillar === 'org' ? 'Organizational' : 'Technological';
    var d = it.detail || {};
    var tagHtml = (it.tags || []).map(function (k) { return tagChip(k, false); }).join('');
    var stackHtml = (it.stack || []).map(function (s) { return '<span class="stack-badge">' + esc(s) + '</span>'; }).join('');
    var sections = (d.sections || []).map(function (s) {
      var body = s.list ? '<ul>' + s.list.map(function (li) { return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>' : '<p>' + esc(s.p) + '</p>';
      return '<section class="detail-section"><h2>' + esc(s.h) + '</h2>' + body + '</section>';
    }).join('');
    var links = (d.links || []).map(function (l) {
      return '<a class="btn btn-outline" href="' + esc(l.href) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + ' →</a>';
    }).join('');

    host.innerHTML =
      '<div class="detail-wrap">' +
        '<nav class="breadcrumb"><a href="' + r('index.html') + '">Home</a><span class="sep">/</span>' +
          '<a href="' + pillarPage + '">' + pillarName + '</a><span class="sep">/</span>' +
          '<span class="current">' + esc(it.title) + '</span></nav>' +
        '<div class="detail-icon" aria-hidden="true">' + (it.icon || '•') + '</div>' +
        '<h1 class="detail-title">' + esc(it.title) + '</h1>' +
        '<p class="detail-context">' + esc((d.context || it.org || '')) + (fmtRange(it) ? ' · ' + fmtRange(it) : '') + '</p>' +
        (tagHtml ? '<div class="detail-meta">' + tagHtml + '</div>' : '') +
        (stackHtml ? '<div class="detail-stack">' + stackHtml + '</div>' : '') +
        (d.intro ? '<p class="detail-lead">' + esc(d.intro) + '</p>' : (it.summary ? '<p class="detail-lead">' + esc(it.summary) + '</p>' : '')) +
        sections +
        (links ? '<div class="detail-links">' + links + '</div>' : '') +
        '<div class="detail-footer-nav"><a class="btn btn-outline" href="' + pillarPage + '">← Back to ' + pillarName + '</a>' +
          '<a class="btn btn-outline" href="' + r('timeline.html') + '">View on timeline →</a></div>' +
      '</div>';
  }

  /* ============================================================ QUIZ */
  var QUESTIONS = [
    { q: "How much did José reduce total pipeline job time at Glartek?", opts: ["Around 25%", "Around 30%", "More than 50%", "Around 75%"], a: 2 },
    { q: "What is José's GitHub username?", opts: ["josepedroh", "PedroHQ", "Tykelar", "JosePH_dev"], a: 2 },
    { q: "Which university did José complete his Bachelor's at?", opts: ["University of Lisbon", "University of Aveiro", "University of Porto", "Polytechnic of Leiria"], a: 1 },
    { q: "How many years of Scout experience does José have?", opts: ["5+", "10+", "15+", "18+"], a: 3 },
    { q: "What is José's master's thesis topic?", opts: ["AR in Industrial Operations", "VR Data Visualization", "Scalable, AI-Ready Infrastructure Design", "Mobile Computing Security"], a: 2 },
    { q: "Which country did José live in for 6 months abroad?", opts: ["Finland", "Spain", "Malta", "Poland"], a: 3 },
    { q: "What rendering library powered José's VR Big Data project?", opts: ["Three.js", "Babylon.js", "VTK", "OpenGL"], a: 2 },
    { q: "What was the name of the co-operative José founded?", opts: ["Momentum", "Florescer", "Airking", "IMPACT"], a: 1 },
    { q: "Which languages does José speak at C2 level?", opts: ["Portuguese only", "Portuguese & Spanish", "Portuguese & English", "English only"], a: 2 },
    { q: "Which framework built the Digital Twin & Animal Tracking app?", opts: ["Flutter", "Swift", "React Native", "Xamarin"], a: 2 },
    { q: "What did José do during his time in Malta?", opts: ["Tech internship", "Erasmus exchange", "Scout event", "Hospitality consulting"], a: 3 },
    { q: "Where is José currently based?", opts: ["Lisbon", "Aveiro", "Porto", "Leiria"], a: 3 }
  ];
  var QUIZ_TOTAL = 5;
  function shuffled(a) { return a.slice().sort(function () { return Math.random() - 0.5; }); }
  function resultMessage(s) { return s <= 1 ? "Seems like we haven't met yet 😄 Have another look around!" : s <= 3 ? "Not bad — you've been paying attention 👀" : s === 4 ? "Impressive! You really read through everything 🎉" : "Perfect score! You know me better than my CV does 🏆"; }
  function resultEmoji(s) { return s <= 1 ? "🤔" : s <= 3 ? "👏" : s === 4 ? "🎉" : "🏆"; }
  function initQuiz() { var card = document.getElementById('quiz-card'); if (card) renderIntro(card); }
  function renderIntro(card) {
    card.innerHTML = '<div class="quiz-intro"><span class="quiz-big-emoji">🧠</span><h3>Think you know me?</h3>' +
      '<p>' + QUIZ_TOTAL + ' questions, picked at random. Let\'s see how closely you were reading.</p>' +
      '<button class="btn btn-primary btn-lg" id="quiz-start-btn">Start Quiz</button></div>';
    card.querySelector('#quiz-start-btn').addEventListener('click', function () { renderQuestion(card, shuffled(QUESTIONS).slice(0, QUIZ_TOTAL), 0, 0); });
  }
  function renderQuestion(card, qs, idx, score) {
    var q = qs[idx], pct = Math.round((idx / QUIZ_TOTAL) * 100);
    card.innerHTML =
      '<div class="quiz-progress-row"><span class="quiz-progress-label">Question ' + (idx + 1) + ' <span class="quiz-of">of ' + QUIZ_TOTAL + '</span></span><span class="quiz-score-live">' + score + ' correct</span></div>' +
      '<div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>' +
      '<p class="quiz-q-text">' + q.q + '</p>' +
      '<div class="quiz-options">' + q.opts.map(function (o, i) { return '<button class="quiz-option" data-i="' + i + '">' + o + '</button>'; }).join('') + '</div>' +
      '<button class="btn btn-primary quiz-next-btn" style="opacity:0;pointer-events:none">' + (idx + 1 < QUIZ_TOTAL ? 'Next →' : 'See Results →') + '</button>';
    var answered = false, newScore = score;
    var nextBtn = card.querySelector('.quiz-next-btn'), opts = card.querySelectorAll('.quiz-option');
    opts.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (answered) return; answered = true;
        var chosen = parseInt(btn.dataset.i, 10);
        if (chosen === q.a) { btn.classList.add('correct'); newScore = score + 1; }
        else { btn.classList.add('wrong'); opts[q.a].classList.add('correct'); }
        opts.forEach(function (b) { b.disabled = true; });
        nextBtn.style.opacity = '1'; nextBtn.style.pointerEvents = 'auto';
      });
    });
    nextBtn.addEventListener('click', function () {
      if (idx + 1 < QUIZ_TOTAL) renderQuestion(card, qs, idx + 1, newScore); else renderResult(card, newScore);
    });
  }
  function renderResult(card, score) {
    card.innerHTML = '<div class="quiz-result"><span class="quiz-big-emoji">' + resultEmoji(score) + '</span>' +
      '<p class="quiz-final-score">' + score + ' <span>/ ' + QUIZ_TOTAL + '</span></p><p>' + resultMessage(score) + '</p>' +
      '<button class="btn btn-outline btn-lg" id="quiz-replay-btn">Play Again</button></div>';
    card.querySelector('#quiz-replay-btn').addEventListener('click', function () { renderIntro(card); });
  }

  /* ============================================================ FADE-UP */
  function initFade() {
    var els = document.querySelectorAll('.fade-up');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('visible'); }); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    els.forEach(function (e) { if (!e.closest('.hero')) obs.observe(e); });
  }

  /* ============================================================ BOOT */
  injectShell();
  if (VIEW === 'home') renderHome();
  else if (VIEW === 'gallery') { renderGallery(); window.addEventListener('hashchange', renderGallery); }
  else if (VIEW === 'involvement') renderInvolvement();
  else if (VIEW === 'ongoing') renderOngoing();
  else if (VIEW === 'timeline') renderTimeline();
  else if (VIEW === 'detail') renderDetail();
  initFade();
})();
