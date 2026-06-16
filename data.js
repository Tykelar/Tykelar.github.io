/* ============================================================
   data.js — SINGLE SOURCE OF TRUTH
   ------------------------------------------------------------
   window.TAGS   tag taxonomy (the gallery filter set)
   window.ITEMS  every project / involvement / activity

   "Add once, surface everywhere": one entry feeds the gallery,
   the involvement page, the ongoing page, the timeline, the hub
   featured strip, and its own detail page.

   To add an item:
     1. pick/add its tags (keys must exist in TAGS)
     2. add one object to ITEMS
     3. copy a stub into projects/<id>.html (tech) or
        involvement/<id>.html (org) — slug === id
   See docs/DEVELOPMENT.md for the full schema.
   ============================================================ */

window.TAGS = {
  qa:              { label: 'QA',                  group: 'Quality & Delivery', color: '#0d9488', icon: '✅' },
  'ci-cd':         { label: 'CI/CD',               group: 'Quality & Delivery', color: '#059669', icon: '🔁' },
  process:         { label: 'Process Engineering', group: 'Quality & Delivery', color: '#0284c7', icon: '⚙️' },
  ai:              { label: 'Applied AI',          group: 'AI & Data',          color: '#7c3aed', icon: '🧠' },
  'data-viz':      { label: 'Data Visualization',  group: 'AI & Data',          color: '#c026d3', icon: '📊' },
  vr:              { label: 'Virtual Reality',     group: 'Immersive & 3D',     color: '#e11d48', icon: '🥽' },
  ar:              { label: 'Augmented Reality',   group: 'Immersive & 3D',     color: '#db2777', icon: '📱' },
  'digital-twins': { label: 'Digital Twins',       group: 'Immersive & 3D',     color: '#ea580c', icon: '🪞' },
  '3d':            { label: '3D & Making',         group: 'Immersive & 3D',     color: '#d97706', icon: '🖨️' },
  mobile:          { label: 'Mobile Dev',          group: 'Software',           color: '#2563eb', icon: '📲' },
  security:        { label: 'Cybersecurity',       group: 'Security',           color: '#dc2626', icon: '🔐' }
};

/* Timeline lanes (fixed, in display order). */
window.TRACKS = {
  work:       'Work',
  education:  'Education',
  leadership: 'Leadership & Community',
  projects:   'Projects'
};

window.ITEMS = [
  /* ---------------------------------------------------------- TECHNOLOGICAL */
  {
    id: 'glartek-sqe',
    title: 'QA & CI/CD Transformation',
    org: 'Glartek',
    icon: '🧪',
    pillar: 'tech',
    tags: ['qa', 'ci-cd', 'process', 'ai'],
    stack: ['Cypress', 'Playwright', 'GitLab CI', 'Test Architecture'],
    status: 'ongoing',
    start: '2025-09', end: null,
    track: 'work', curated: true, featured: true,
    summary: 'Redesigned QA infrastructure and CI workflows on an AR-powered Digital Twin platform — cutting pipeline time by more than 50% and lifting features shipped per sprint.',
    detail: {
      context: 'Software Quality Engineer · Internship',
      intro: 'Glartek builds an AR-powered Digital Twin and asset-management platform for industrial operations. I joined to rethink how quality is built into the engineering process — measured concretely in pipeline time and features delivered per sprint.',
      sections: [
        { h: 'Problem', p: 'Slow, flaky test cycles and duplicated handover work were throttling release throughput inside agile sprints.' },
        { h: 'Approach', list: [
          'Redesigned the test infrastructure and processes, cutting total pipeline job time by more than 50% across automated testing cycles.',
          'Re-engineered QA/CI workflows, contributing to up to 20% more features deployed per sprint.',
          'Restructured task distribution and handovers, reducing time consumption ~30% and eliminating duplicated work.',
          'Standardized test naming conventions and introduced seed-driven data setup to cut coupling and instability.',
          'Built and maintained an automated test battery; created GitLab CI pipeline jobs; drove AI-agent integration into engineering workflows.',
          'Assessed Cypress vs Playwright trade-offs for long-term scalability.'
        ]},
        { h: 'Result', p: 'A faster, more trustworthy pipeline and a measurably higher delivery rate — quality shifted left into everyday engineering rather than bolted on at the end.' }
      ]
    },
    href: 'projects/glartek-sqe.html'
  },
  {
    id: 'ai-ready-infra',
    title: 'Scalable, AI-Ready Infrastructure Design',
    org: "Master's Thesis",
    icon: '🧠',
    pillar: 'tech',
    tags: ['ai', 'qa', 'process'],
    stack: ['CI/CD', 'QA Architecture', 'Research'],
    status: 'ongoing',
    start: '2024-09', end: null,
    track: 'education', curated: true, featured: false,
    summary: 'Research on scalable, understandable, AI-ready engineering infrastructures — CI/CD architecture, shift-left quality, flakiness dynamics, and toolchain migration criteria.',
    detail: {
      context: "MSc Computer Engineering — Mobile Computing · Polytechnic University of Leiria",
      intro: 'My thesis investigates how to design engineering infrastructures that stay scalable, understandable, and ready for AI integration.',
      sections: [
        { h: 'Focus areas', list: [
          'CI/CD architecture and QA integration',
          'Shift-left quality and test-suite optimization',
          'Flakiness dynamics and mitigation',
          'Process re-engineering and toolchain migration criteria'
        ]},
        { h: 'Status', p: 'In progress — graduating June 2026. Directly informs (and is informed by) my work at Glartek.' }
      ]
    },
    href: 'projects/ai-ready-infra.html'
  },
  {
    id: 'ai-agent-workflows',
    title: 'AI Agents in Engineering Workflows',
    org: 'Glartek',
    icon: '🤖',
    pillar: 'tech',
    tags: ['ai', 'ci-cd'],
    stack: ['LLMs', 'AI Agents', 'Automation'],
    status: 'ongoing',
    start: '2025-10', end: null,
    track: 'work', curated: false, featured: false,
    summary: 'Integrating AI agents into day-to-day engineering and QA workflows to accelerate repetitive tasks and augment the pipeline.',
    detail: {
      context: 'Glartek · QA / Engineering',
      intro: 'Exploring where LLM-based agents add real leverage in the engineering loop — from test scaffolding to triage — without compromising trust in the pipeline.',
      sections: [
        { h: 'Direction', list: [
          'Identify high-friction, repetitive tasks suitable for agent assistance',
          'Wire agents into CI and review workflows pragmatically',
          'Keep humans in the loop on anything that gates a release'
        ]}
      ]
    },
    href: 'projects/ai-agent-workflows.html'
  },
  {
    id: 'academic-ml',
    title: 'Applied Machine Learning — CNNs, YOLO, RNNs',
    org: 'Academic',
    icon: '🔬',
    pillar: 'tech',
    tags: ['ai'],
    stack: ['Python', 'CNNs', 'YOLO', 'RNNs', 'LLMs'],
    status: 'completed',
    start: '2022', end: '2024',
    track: 'education', curated: false, featured: false,
    summary: 'Coursework and projects across computer vision and sequence models — convolutional networks, YOLO object detection, recurrent networks, and LLMs.',
    detail: {
      context: 'BSc / coursework',
      intro: 'Hands-on grounding in modern machine learning across vision and sequence domains.',
      sections: [
        { h: 'Covered', list: [
          'CNNs for image classification',
          'YOLO for real-time object detection',
          'RNNs for sequential data',
          'Foundations for working with LLMs'
        ]}
      ]
    },
    href: 'projects/academic-ml.html'
  },
  {
    id: 'big-data-vr',
    title: '3D Interactive Big Data Visualization in VR',
    org: "Bachelor's Final Project",
    icon: '🥽',
    pillar: 'tech',
    tags: ['vr', 'data-viz'],
    stack: ['VTK', 'VR', '3D'],
    status: 'completed',
    start: '2023-09', end: '2024-07',
    track: 'education', curated: true, featured: true,
    summary: 'A system for rendering and interacting with large-scale datasets in VR using VTK, with custom interaction design for complex 3D information spaces.',
    detail: {
      context: 'Final Project · BSc Computational Engineering, University of Aveiro',
      intro: 'Large datasets are hard to understand on a flat screen. This project asked whether immersing the analyst inside the data — in VR — makes complex 3D information spaces more legible.',
      sections: [
        { h: 'Problem', p: 'Conventional 2D tools flatten inherently three-dimensional, large-scale datasets, hiding structure and relationships.' },
        { h: 'Approach', list: [
          'Built a rendering pipeline for large-scale datasets using VTK',
          'Designed custom VR interactions for navigating and querying 3D information spaces',
          'Tuned performance to keep immersion comfortable at scale'
        ]},
        { h: 'Result', p: 'An interactive VR environment where big data can be explored spatially — a tangible demonstration of immersive analytics.' }
      ]
    },
    href: 'projects/big-data-vr.html'
  },
  {
    id: 'ar-animal-tracking',
    title: 'Digital Twin & Animal Tracking App',
    org: 'Client Project',
    icon: '🐾',
    pillar: 'tech',
    tags: ['ar', 'digital-twins', 'mobile'],
    stack: ['Kotlin', 'React Native', 'Firebase', 'A-Frame'],
    status: 'completed',
    start: '2024', end: '2024',
    track: 'projects', curated: true, featured: false,
    summary: 'Real-time animal tracking with digital-twin state monitoring, two-way escape alerts, and an AR layer spatially mapping positions in 3D.',
    detail: {
      context: 'Client Project',
      intro: 'A mobile system that keeps a live digital twin of tracked animals and surfaces their state — including an augmented-reality view that places positions in real space.',
      sections: [
        { h: 'Highlights', list: [
          'Real-time tracking with digital-twin state monitoring',
          'Two-way communication for escape alerts',
          'AR layer spatially mapping positions in 3D (A-Frame)',
          'Cross-stack build: Kotlin + React Native, Firebase backend'
        ]}
      ]
    },
    href: 'projects/ar-animal-tracking.html'
  },
  {
    id: 'vr-architectural-walkthrough',
    title: '1:1 Architectural VR Walkthrough',
    org: 'Client Project',
    icon: '🏛️',
    pillar: 'tech',
    tags: ['vr', '3d'],
    stack: ['Unity', '3D Modelling', 'VR'],
    status: 'completed',
    start: '2023', end: '2023',
    track: 'projects', curated: false, featured: false,
    summary: 'Accurate 1:1 building models in Unity, navigable on desktop and in VR — used by clients to plan decoration and visualize their actual interior space.',
    detail: {
      context: 'Client Project',
      intro: 'Clients wanted to experience their real space before committing to interior decisions. I built accurate 1:1 models they could walk through.',
      sections: [
        { h: 'Highlights', list: [
          'Accurate 1:1 building models implemented in Unity',
          'Navigable on both desktop and VR headsets',
          'Used for decoration planning and interior visualization'
        ]}
      ]
    },
    href: 'projects/vr-architectural-walkthrough.html'
  },
  {
    id: 'cybersecurity-assessment',
    title: 'Cybersecurity Assessment & Footprinting',
    org: 'Client Engagement',
    icon: '🔐',
    pillar: 'tech',
    tags: ['security'],
    stack: ['Footprinting', 'OSINT', 'Offensive Security'],
    status: 'completed',
    start: '2023', end: '2023',
    track: 'projects', curated: true, featured: false,
    summary: 'Security assessment for a cooperative with physical infrastructure — attack-surface mapping, vulnerability identification, a prioritized report, and a client presentation.',
    detail: {
      context: 'Client Engagement',
      intro: 'A real-world security assessment for a cooperative running physical infrastructure.',
      sections: [
        { h: 'Approach', list: [
          'Mapped the attack surface through footprinting and OSINT',
          'Identified and ranked vulnerabilities by risk',
          'Produced a prioritized remediation report',
          'Presented findings to the client'
        ]}
      ]
    },
    href: 'projects/cybersecurity-assessment.html'
  },
  {
    id: 'mobile-client-app',
    title: 'Mobile Client-Management App',
    org: 'Co-operative',
    icon: '📲',
    pillar: 'tech',
    tags: ['mobile'],
    stack: ['React Native', 'Firebase', 'Full-stack'],
    status: 'completed',
    start: '2023', end: '2023',
    track: 'projects', curated: false, featured: false,
    summary: 'A full-stack mobile app letting a cooperative access and manage client information on the go.',
    detail: {
      context: 'Client Project · Co-operative',
      intro: 'A practical full-stack mobile tool for a cooperative to manage client information away from the desk.',
      sections: [
        { h: 'Highlights', list: [
          'React Native client with a Firebase backend',
          'Access and manage client records on the go'
        ]}
      ]
    },
    href: 'projects/mobile-client-app.html'
  },
  {
    id: 'maker-3d-printing',
    title: 'Maker Practice — 3D Modelling & Printing',
    org: 'Personal',
    icon: '🖨️',
    pillar: 'tech',
    tags: ['3d'],
    stack: ['Blender', 'FDM Printing', 'Prototyping'],
    status: 'ongoing',
    start: '2021', end: null,
    track: 'projects', curated: false, featured: false,
    summary: 'An ongoing home maker practice — 3D modelling and printing for rapid prototyping and one-off builds.',
    detail: {
      context: 'Personal',
      intro: 'A continuous hands-on practice that keeps me close to physical prototyping.',
      sections: [
        { h: 'What it involves', list: [
          'Modelling parts in Blender',
          'FDM 3D printing for rapid prototypes and fixes',
          'Iterating on real, tangible objects'
        ]}
      ]
    },
    href: 'projects/maker-3d-printing.html'
  },

  /* ---------------------------------------------------------- ORGANIZATIONAL */
  {
    id: 'florescer',
    title: 'Florescer — Founder & President',
    org: 'Non-profit Co-operative',
    icon: '🌱',
    pillar: 'org',
    tags: [],
    stack: ['Leadership', 'Partnerships', 'Community'],
    status: 'completed',
    start: '2023-01', end: '2025-02',
    track: 'leadership', curated: true, featured: true,
    summary: 'Founded and led a community-focused non-profit cooperative on local educational, social, and environmental initiatives — legal setup, partnerships, and programmes.',
    detail: {
      context: 'Founder & President · Jan 2023 – Feb 2025',
      intro: 'Florescer is a community-focused non-profit cooperative I founded and ran, working on local educational, social, and environmental initiatives.',
      sections: [
        { h: 'What I did', list: [
          'Founded and managed the cooperative: legal documentation, administrative setup, and ongoing compliance',
          'Coordinated partnerships with public and private institutions to fund community programmes',
          'Organized educational activities, workshops, and public-space renovation initiatives'
        ]},
        { h: 'Why it matters', p: 'It is the clearest example of my organizational side: turning an idea into a legal entity, a network of partners, and real activity on the ground.' }
      ]
    },
    href: 'involvement/florescer.html'
  },
  {
    id: 'scouts',
    title: '18+ Years of Scouting',
    org: 'Scouts',
    icon: '⚜️',
    pillar: 'org',
    tags: [],
    stack: ['Leadership', 'Teamwork', 'Outdoors'],
    status: 'ongoing',
    start: '2007', end: null,
    track: 'leadership', curated: true, featured: false,
    summary: 'More than 18 years of Scouting, in national and international activities — a long-running school of leadership, teamwork, and service.',
    detail: {
      context: 'National & international activities',
      intro: 'Scouting has been a constant since childhood and a formative leadership ground.',
      sections: [
        { h: 'In short', list: [
          '18+ years of continuous involvement',
          'National and international activities',
          'Leadership, teamwork, and community service'
        ]}
      ]
    },
    href: 'involvement/scouts.html'
  },
  {
    id: 'erasmus',
    title: 'Erasmus+ Training & Living Abroad',
    org: 'Erasmus+',
    icon: '🌍',
    pillar: 'org',
    tags: [],
    stack: ['International', 'Training', 'Cross-cultural'],
    status: 'completed',
    start: '2022', end: '2023',
    track: 'education', curated: false, featured: false,
    summary: 'Erasmus+ training courses in Finland, Poland, and Portugal — plus six months living in Poland.',
    detail: {
      context: 'Erasmus+ · Finland · Poland · Portugal',
      intro: 'A string of international training experiences, capped by living abroad in Poland for six months.',
      sections: [
        { h: 'Highlights', list: [
          'Training courses in Finland, Poland, and Portugal',
          'Lived in Poland for 6 months',
          'Cross-cultural collaboration and self-reliance'
        ]}
      ]
    },
    href: 'involvement/erasmus.html'
  },
  {
    id: 'impact-malta',
    title: 'Hospitality Consultant',
    org: 'IMPACT Consulting · Malta',
    icon: '🤝',
    pillar: 'org',
    tags: [],
    stack: ['Research', 'Outreach', 'Documentation'],
    status: 'completed',
    start: '2018-07', end: '2018-08',
    track: 'work', curated: false, featured: false,
    summary: 'Early professional experience in Malta — building company databases and outreach documentation connecting travel agencies and hospitality brands.',
    detail: {
      context: 'IMPACT Consulting · Malta · Jul–Aug 2018',
      intro: 'An early consulting role abroad, focused on research and business outreach.',
      sections: [
        { h: 'What I did', list: [
          'Built Excel databases from publicly available company information',
          'Produced documentation connecting travel agencies and hospitality brands'
        ]}
      ]
    },
    href: 'involvement/impact-malta.html'
  },

  /* ---------------------------------------------------------- EDUCATION (timeline only) */
  {
    id: 'msc-leiria',
    title: 'MSc Computer Engineering — Mobile Computing',
    org: 'Polytechnic University of Leiria',
    icon: '🎓',
    pillar: 'education',
    tags: [],
    stack: [],
    status: 'ongoing',
    start: '2024-09', end: null,
    track: 'education', curated: true, featured: false,
    summary: 'Specialising in mobile computing, scalable infrastructure, and AI-ready systems. Thesis: Scalable, AI-Ready Infrastructure Design.',
    href: null
  },
  {
    id: 'bsc-aveiro',
    title: 'BSc Computational Engineering',
    org: 'University of Aveiro',
    icon: '🏫',
    pillar: 'education',
    tags: [],
    stack: [],
    status: 'completed',
    start: '2020-09', end: '2024-07',
    track: 'education', curated: true, featured: false,
    summary: 'Core focus on software engineering, algorithms, applied AI, and systems programming. Final project: 3D Interactive Big Data Visualization in VR.',
    href: null
  },

  /* ---------------------------------------------------------- PERSONAL / WRITING (ongoing) */
  {
    id: 'blog-momentum',
    title: 'Budgeting Emotions and Keeping Momentum',
    org: 'Blog · Self-Development & Sociology',
    icon: '🌱',
    pillar: 'personal',
    tags: [],
    stack: ['Writing', 'Reflection'],
    status: 'ongoing',
    start: '2020', end: null,
    track: 'projects', curated: false, featured: false,
    summary: 'A blog on personal growth, human behaviour, and the psychology behind how we move through the world — a space for reflection and clarity.',
    href: 'https://emotionsandmomentum.blogspot.com/'
  },
  {
    id: 'blog-madman',
    title: 'The Mad Man-Maid Machine',
    org: 'Blog · Creative Writing',
    icon: '✍️',
    pillar: 'personal',
    tags: [],
    stack: ['Writing', 'Poetry'],
    status: 'ongoing',
    start: '2020', end: null,
    track: 'projects', curated: false, featured: false,
    summary: 'Poems, reflections, and stories sitting between the rational and the wild — writing as a way of making sense, or deliberately not.',
    href: 'https://themadmanmaidmachine.blogspot.com/'
  }
];
