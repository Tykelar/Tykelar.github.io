/* AUTO-GENERATED from the USI source by scripts/gen_data.py — do not edit by hand.
   Facts live in the USI blocks (../USI); website chrome lives in usi-web.yaml. */

window.TAGS = {
  "qa": {
    "label": "QA",
    "group": "Quality & Delivery",
    "color": "#0d9488",
    "icon": "✅"
  },
  "ci-cd": {
    "label": "CI/CD",
    "group": "Quality & Delivery",
    "color": "#059669",
    "icon": "🔁"
  },
  "process": {
    "label": "Process Engineering",
    "group": "Quality & Delivery",
    "color": "#0284c7",
    "icon": "⚙️"
  },
  "ai": {
    "label": "Applied AI",
    "group": "AI & Data",
    "color": "#7c3aed",
    "icon": "🧠"
  },
  "data-viz": {
    "label": "Data Visualization",
    "group": "AI & Data",
    "color": "#c026d3",
    "icon": "📊"
  },
  "vr": {
    "label": "Virtual Reality",
    "group": "Immersive & 3D",
    "color": "#e11d48",
    "icon": "🥽"
  },
  "ar": {
    "label": "Augmented Reality",
    "group": "Immersive & 3D",
    "color": "#db2777",
    "icon": "📱"
  },
  "digital-twins": {
    "label": "Digital Twins",
    "group": "Immersive & 3D",
    "color": "#ea580c",
    "icon": "🪞"
  },
  "3d": {
    "label": "3D & Making",
    "group": "Immersive & 3D",
    "color": "#d97706",
    "icon": "🖨️"
  },
  "mobile": {
    "label": "Mobile Dev",
    "group": "Software",
    "color": "#2563eb",
    "icon": "📲"
  },
  "security": {
    "label": "Cybersecurity",
    "group": "Security",
    "color": "#dc2626",
    "icon": "🔐"
  }
};

window.TRACKS = {
  "work": "Work",
  "education": "Education",
  "leadership": "Leadership & Community",
  "projects": "Projects"
};

window.ITEMS = [
  {
    "id": "florescer",
    "title": "Founder & President — Florescer (Cooperative)",
    "org": "Florescer",
    "icon": "🌱",
    "pillar": "org",
    "tags": [],
    "stack": [
      "Leadership",
      "Partnerships",
      "Community",
      "Governance"
    ],
    "status": "completed",
    "start": "2023-01",
    "end": "2026-05",
    "track": "leadership",
    "curated": true,
    "featured": true,
    "summary": "A non-profit cooperative I founded and ran through its full operational lifecycle, working on local educational, social, and environmental initiatives. The clearest example of my organizational side: turning an idea into a legal entity, a network of partners, and real activity on the ground.",
    "detail": {
      "context": "Founder & President · Florescer",
      "intro": "A non-profit cooperative I founded and ran through its full operational lifecycle, working on local educational, social, and environmental initiatives. The clearest example of my organizational side: turning an idea into a legal entity, a network of partners, and real activity on the ground.",
      "sections": [
        {
          "h": "What I did",
          "list": [
            "Founded and built the cooperative from scratch: legal incorporation, administrative setup, governance structure, and ongoing compliance.",
            "Owned the full entrepreneurial process — idea to operational execution — with no prior institutional support.",
            "Coordinated partnerships with public and private institutions to fund community programmes.",
            "Led educational activities, community workshops, and public-space renovation initiatives.",
            "Organized and monitored internal procedures for consistent operational execution.",
            "Managed the full physical setup and operational launch of a café/restaurant space (furniture logistics, spatial arrangement, service prep) and the same for a nursing-school space.",
            "Carried out hands-on building maintenance and renovation: painting, plumbing, basic electrical work."
          ]
        }
      ]
    },
    "href": "involvement/florescer.html"
  },
  {
    "id": "glartek-sqe",
    "title": "Software Quality Engineer — Glartek",
    "org": "Glartek",
    "icon": "🧪",
    "pillar": "tech",
    "tags": [
      "qa",
      "ci-cd",
      "process",
      "ai"
    ],
    "stack": [
      "Playwright",
      "Cypress",
      "GitLab CI",
      "Test Architecture",
      "AI Agents"
    ],
    "status": "completed",
    "start": "2025-09",
    "end": "2026-06",
    "track": "work",
    "curated": true,
    "featured": false,
    "summary": "Redesigned QA infrastructure and CI workflows on an AR-powered Digital Twin platform — cutting pipeline time by more than 50% and lifting features shipped per sprint.",
    "detail": {
      "context": "Software Quality Engineer · Glartek",
      "intro": "Glartek builds an AI-native, mobile-first, no-code EHSQ (Environment, Health, Safety & Quality) Connected Worker / AR-powered Digital Twin platform for frontline industrial operations. I joined to rethink how quality is built into the engineering process — measured concretely in pipeline time and features delivered per sprint.",
      "sections": [
        {
          "h": "Problem",
          "p": "Slow, flaky test cycles and duplicated handover work were throttling release throughput inside agile sprints."
        },
        {
          "h": "Approach",
          "list": [
            "Designed and implemented a full end-to-end test framework in Playwright, with reusable helpers/utilities for scalable, maintainable e2e coverage.",
            "Integrated the automated test battery into GitLab CI pipeline jobs for fully automated execution in the delivery workflow.",
            "Redesigned test infrastructure and processes — >50% time/resource savings in automated cycles.",
            "Re-engineered QA/CI workflows, supporting up to 20% faster feature deployment.",
            "Restructured task distribution and handovers — ~30% time reduction, duplicate work eliminated.",
            "Standardized test naming/data conventions; introduced seed-driven data setup to cut coupling and instability.",
            "Led the Cypress → Playwright migration: trade-off evaluation, implementation, documentation.",
            "Maintained/extended an existing Cypress battery; analyzed reports and failure patterns to prioritize high-impact fixes."
          ]
        },
        {
          "h": "AI in the loop",
          "list": [
            "Built AI agent skills (Claude Code) deployed in internal engineering repos for automated assistance on complex workflows.",
            "Contributed to architecture + testing of an embedded AI chatbot for in-app platform navigation.",
            "Contributed to architecture + testing of a RAG system letting users query their own uploaded documents (per-user feature toggle).",
            "Drove integration of AI agents/services into product and engineering workflows.",
            "Personal-project counterpart to this professional RAG work, built and measured"
          ]
        },
        {
          "h": "Computer vision (in-house image recognition)",
          "list": [
            "Collaborated on developing an in-house image-recognition application built on YOLO object detection.",
            "Labeled/annotated training images and helped purify and curate the dataset for higher-quality training.",
            "Helped define detection classes and ran/evaluated training tests on the models.",
            "Contributed optimization strategies to improve recognition accuracy and performance."
          ]
        },
        {
          "h": "Result",
          "p": "A faster, more trustworthy pipeline and a measurably higher delivery rate — quality shifted left into everyday engineering rather than bolted on at the end. Directly informs (and is informed by) my thesis: MSc Computer Engineering — Polytechnic University of Leiria."
        }
      ]
    },
    "href": "projects/glartek-sqe.html"
  },
  {
    "id": "impact-malta",
    "title": "Hospitality Consultant — IMPACT Consulting (Malta)",
    "org": "IMPACT Consulting",
    "icon": "🤝",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2018-07",
    "end": "2018-08",
    "track": "work",
    "curated": false,
    "featured": false,
    "summary": "An early consulting role abroad, focused on research and business outreach.",
    "detail": {
      "context": "Hospitality Consultant · IMPACT Consulting",
      "intro": "An early consulting role abroad, focused on research and business outreach.",
      "sections": [
        {
          "h": "What I did",
          "list": [
            "Built Excel-based databases from publicly available company information.",
            "Conducted company/individual outreach for partnership opportunities.",
            "Produced documentation linking travel agencies/operators and hospitality brands."
          ]
        }
      ]
    },
    "href": "involvement/impact-malta.html"
  },
  {
    "id": "bsc-aveiro",
    "title": "BSc Computational Engineering — University of Aveiro",
    "org": null,
    "icon": "🏫",
    "pillar": "education",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2021-09",
    "end": "2024-07",
    "track": "education",
    "curated": true,
    "featured": false,
    "summary": "Core focus on software engineering, algorithms, applied AI, and systems programming.",
    "href": null
  },
  {
    "id": "msc-leiria",
    "title": "MSc Computer Engineering — Polytechnic University of Leiria",
    "org": null,
    "icon": "🎓",
    "pillar": "education",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2024-09",
    "end": "2026-07",
    "track": "education",
    "curated": true,
    "featured": false,
    "summary": "Completed July 2026 with a final average of 18/20. Specialized in scalable infrastructure and AI-ready systems.",
    "href": null
  },
  {
    "id": "ai-ready-infra",
    "title": "Scalable, AI-Ready Infrastructure Design (Thesis Research)",
    "org": "Master's Thesis — Polytechnic University of Leiria",
    "icon": "🧠",
    "pillar": "tech",
    "tags": [
      "ai",
      "qa",
      "process"
    ],
    "stack": [
      "CI/CD",
      "QA Architecture",
      "Research"
    ],
    "status": "completed",
    "start": "2024-09",
    "end": "2026-07",
    "track": "education",
    "curated": true,
    "featured": true,
    "summary": "Research into how to design engineering infrastructures that stay scalable, understandable, and ready for AI integration.",
    "detail": {
      "context": "Author / Researcher · Master's Thesis — Polytechnic University of Leiria",
      "intro": "Research into how to design engineering infrastructures that stay scalable, understandable, and ready for AI integration.",
      "sections": [
        {
          "h": "Focus areas",
          "list": [
            "CI/CD architecture and QA integration.",
            "Shift-left quality and test-suite optimization.",
            "Flakiness dynamics and mitigation.",
            "Process re-engineering and toolchain-migration criteria."
          ]
        }
      ]
    },
    "href": "projects/ai-ready-infra.html"
  },
  {
    "id": "ar-animal-tracking",
    "title": "Digital Twin & Animal Tracking App",
    "org": "Client Project",
    "icon": "🐾",
    "pillar": "tech",
    "tags": [
      "ar",
      "digital-twins",
      "mobile"
    ],
    "stack": [
      "Kotlin",
      "React Native",
      "Firebase",
      "A-Frame"
    ],
    "status": "completed",
    "start": "2025",
    "end": "2025",
    "track": "projects",
    "curated": true,
    "featured": false,
    "summary": "A mobile system that keeps a live digital twin of tracked animals across large-scale environments (farms, reserves, wide-area contexts), surfacing their state in real time — including an augmented-reality view that places positions in real space.",
    "detail": {
      "context": "Developer · Client Project",
      "intro": "A mobile system that keeps a live digital twin of tracked animals across large-scale environments (farms, reserves, wide-area contexts), surfacing their state in real time — including an augmented-reality view that places positions in real space.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Real-time tracking with digital-twin state monitoring of physical entities (animals).",
            "Two-way communication to actively locate/reach animals, including escape/alert scenarios.",
            "AR layer with 3D spatial mapping of positions (A-Frame), overlaying live data on a real-world view.",
            "Cross-stack build: Kotlin (native) + React Native, Firebase real-time backend."
          ]
        },
        {
          "h": "Domains",
          "p": "Digital twins · IoT/tracking · AR/VR · two-way communication · real-time visualization · mobile."
        }
      ]
    },
    "href": "projects/ar-animal-tracking.html"
  },
  {
    "id": "big-data-vr",
    "title": "Big Data Analysis & Representation — NO2 Air Pollution Visualization in VR",
    "org": "Bachelor's Final Project — University of Aveiro",
    "icon": "🥽",
    "pillar": "tech",
    "tags": [
      "vr",
      "data-viz"
    ],
    "stack": [
      "OpenXR",
      "VTK",
      "Unity",
      "VR",
      "3D"
    ],
    "status": "completed",
    "start": "2023-09",
    "end": "2024-07",
    "track": "education",
    "curated": true,
    "featured": true,
    "summary": "BSc final project: a VR system for visualizing large-scale NO2 air-pollution data across an urban area (Avenida 25 de Abril, Porto). Large datasets are hard to understand on a flat screen — this asked whether immersing the analyst *inside* the data makes complex 3D information spaces more legible.",
    "detail": {
      "context": "Author · Bachelor's Final Project — University of Aveiro",
      "intro": "BSc final project: a VR system for visualizing large-scale NO2 air-pollution data across an urban area (Avenida 25 de Abril, Porto). Large datasets are hard to understand on a flat screen — this asked whether immersing the analyst *inside* the data makes complex 3D information spaces more legible.",
      "sections": [
        {
          "h": "Approach",
          "list": [
            "Built a rendering pipeline for large-scale datasets using VTK.",
            "Designed custom VR interactions (OpenXR + Unity) for navigating and querying 3D spaces.",
            "Ran a user study comparing VR vs desktop interaction experiences.",
            "Evaluated tools, libraries, and APIs for scientific VR visualization."
          ]
        }
      ]
    },
    "href": "projects/big-data-vr.html"
  },
  {
    "id": "cnn-lol",
    "title": "CNN Match Classification — League of Legends",
    "org": "Master's Coursework — Context-Aware Systems",
    "icon": "🎮",
    "pillar": "tech",
    "tags": [
      "ai"
    ],
    "stack": [
      "Python",
      "CNNs",
      "Transfer Learning",
      "Optuna"
    ],
    "status": "completed",
    "start": "2024",
    "end": "2025",
    "track": "education",
    "curated": false,
    "featured": false,
    "summary": "A Convolutional Neural Network for a multiclass-multilabel classification task on League of Legends match data (Context-Aware Systems course).",
    "detail": {
      "context": "Author · Master's Coursework — Context-Aware Systems",
      "intro": "A Convolutional Neural Network for a multiclass-multilabel classification task on League of Legends match data (Context-Aware Systems course).",
      "sections": [
        {
          "h": "What it does",
          "list": [
            "Input: spatial heatmap images of a player's kill/death positions across a match.",
            "Outputs: (1) match outcome (win/loss); (2) player role (top/jungle/mid/ADC/support); (3) duration category (short/medium/long).",
            "Trained/evaluated multiple architectures: single-input multiclass-multilabel, separate per-output models, Transfer Learning, and an Optuna-optimized model."
          ]
        },
        {
          "h": "Key findings",
          "list": [
            "Transfer Learning gave the best win/loss accuracy, at higher compute cost.",
            "Dual-image input (individual + global map) significantly improved win/loss and duration prediction.",
            "Global context hurt role classification — role is better identified from individual spatial patterns alone."
          ]
        },
        {
          "h": "Domains",
          "p": "Deep learning · CNNs · Transfer Learning · Optuna · multiclass-multilabel · context-aware systems."
        }
      ]
    },
    "href": "projects/cnn-lol.html"
  },
  {
    "id": "cybersecurity-assessment",
    "title": "Cybersecurity Assessment & Footprinting",
    "org": "Client Engagement",
    "icon": "🔐",
    "pillar": "tech",
    "tags": [
      "security"
    ],
    "stack": [
      "Footprinting",
      "OSINT",
      "Offensive Security"
    ],
    "status": "completed",
    "start": "2025",
    "end": "2025",
    "track": "projects",
    "curated": true,
    "featured": false,
    "summary": "A real-world security assessment for a small cooperative running physical infrastructure.",
    "detail": {
      "context": "Security assessor · Client Engagement",
      "intro": "A real-world security assessment for a small cooperative running physical infrastructure.",
      "sections": [
        {
          "h": "Approach",
          "list": [
            "Mapped the external attack surface through footprinting and OSINT.",
            "Identified vulnerabilities across systems, services, exposed information, and physical presence.",
            "Produced a structured, prioritized vulnerability/remediation report.",
            "Presented findings and recommendations directly to the client."
          ]
        },
        {
          "h": "Domains",
          "p": "Cybersecurity · offensive security · OSINT · footprinting · vulnerability assessment · client communication."
        }
      ]
    },
    "href": "projects/cybersecurity-assessment.html"
  },
  {
    "id": "expense-tracker",
    "title": "Shared Expense Tracker — Serverless PWA",
    "org": "Personal Project",
    "icon": "💸",
    "pillar": "tech",
    "tags": [],
    "stack": [
      "TypeScript",
      "React 18",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Google OAuth",
      "Recharts",
      "vite-plugin-pwa / Workbox"
    ],
    "status": "ongoing",
    "start": "2025",
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "A private expense-tracking PWA for two people, built to be installable on a phone, cheap, and to require no backend of my own to run or maintain. Every architectural decision traces back to that one sentence.",
    "detail": {
      "context": "Solo developer (full-stack, from scratch) · Personal Project",
      "intro": "A private expense-tracking PWA for two people, built to be installable on a phone, cheap, and to require no backend of my own to run or maintain. Every architectural decision traces back to that one sentence.",
      "sections": [
        {
          "h": "Architecture",
          "list": [
            "No custom server. The browser talks directly to Supabase",
            "Security is enforced in the database, not the client, via Postgres Row-Level",
            "Auth: Google OAuth — identity is delegated entirely to Google; no passwords are ever"
          ]
        },
        {
          "h": "Custom reactive layer",
          "list": [
            "Deliberately no Redux/Zustand. src/db/live.ts (~60 lines) implements a version"
          ]
        },
        {
          "h": "Static hosting trilogy",
          "list": [
            "Hash router (createHashRouter, src/main.tsx): routing lives entirely client-side,",
            "PWA via vite-plugin-pwa (Workbox-generated service worker): installable on a phone,",
            "Vercel, serving static files only — no functions, no server-side logic. All",
            "Recharts for spending visualizations in the UI."
          ]
        },
        {
          "h": "Contrast with Niche-Field SaaS Marketing & Admin Platform",
          "p": "Two deliberately different auth models across my own projects: this one delegates identity to Google OAuth and authorization to Postgres RLS, because it's a two-person app where maintaining a server isn't worth the cost. The other project (a multi-tenant marketplace) owns its own registration and uses stateless JWT instead — different context, different trade-off. Delivered solo, end to end — architecture, data model, auth/security model, reactive UI, and deploy."
        }
      ]
    },
    "href": "projects/expense-tracker.html"
  },
  {
    "id": "game-dev",
    "title": "Game Design & Development (Multi-Engine)",
    "org": "Academic + Independent",
    "icon": "🕹️",
    "pillar": "tech",
    "tags": [
      "3d"
    ],
    "stack": [
      "Unity",
      "Godot",
      "Blender",
      "VRChat SDK"
    ],
    "status": "ongoing",
    "start": "2021",
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "Simple games designed and developed independently across multiple engines and pipelines.",
    "detail": {
      "context": "Designer / Developer · Academic + Independent",
      "intro": "Simple games designed and developed independently across multiple engines and pipelines.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Original content built with Blender (3D modelling/assets), Unity (C#), and Godot.",
            "Produced and deployed mods, custom content, and assets to live platforms — including VRChat world and asset publishing.",
            "Spanned coursework projects to independent releases."
          ]
        },
        {
          "h": "Domains",
          "p": "Game design & development · 3D asset creation · modding & content publishing · multi-engine."
        }
      ]
    },
    "href": "projects/game-dev.html"
  },
  {
    "id": "maker-3d-printing",
    "title": "Maker Practice — 3D Modelling & Printing",
    "org": "Personal",
    "icon": "🖨️",
    "pillar": "tech",
    "tags": [
      "3d"
    ],
    "stack": [
      "Blender",
      "FDM Printing",
      "Prototyping"
    ],
    "status": "ongoing",
    "start": "2021",
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "An ongoing home maker practice — 3D modelling and printing for rapid prototyping and one-off builds that keep me close to physical prototyping.",
    "detail": {
      "context": "Maker · Personal",
      "intro": "An ongoing home maker practice — 3D modelling and printing for rapid prototyping and one-off builds that keep me close to physical prototyping.",
      "sections": [
        {
          "h": "What it involves",
          "list": [
            "Modelling parts in Blender.",
            "FDM 3D printing for rapid prototypes and fixes.",
            "Iterating on real, tangible objects (design-for-print, iterative problem-solving)."
          ]
        }
      ]
    },
    "href": "projects/maker-3d-printing.html"
  },
  {
    "id": "matlab-simulations",
    "title": "MATLAB Physics & Mathematics Simulations",
    "org": "Academic Projects",
    "icon": "📐",
    "pillar": "tech",
    "tags": [],
    "stack": [
      "MATLAB"
    ],
    "status": "completed",
    "start": null,
    "end": null,
    "track": "education",
    "curated": false,
    "featured": false,
    "summary": "A range of simulation programmes across physics and mathematics domains, built in MATLAB.",
    "detail": {
      "context": "Author · Academic Projects",
      "intro": "A range of simulation programmes across physics and mathematics domains, built in MATLAB.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Modelled and simulated physical phenomena (classical mechanics, dynamics, wave behaviour).",
            "Solved mathematical problems computationally using numerical methods."
          ]
        },
        {
          "h": "Domains",
          "p": "Scientific computing · numerical simulation · physics modelling · mathematical computing."
        }
      ]
    },
    "href": "projects/matlab-simulations.html"
  },
  {
    "id": "mobile-client-app",
    "title": "Mobile Client-Management App — Cooperative",
    "org": "Client Project — Cooperative",
    "icon": "📲",
    "pillar": "tech",
    "tags": [
      "mobile"
    ],
    "stack": [
      "React Native",
      "Firebase"
    ],
    "status": "completed",
    "start": "2025",
    "end": "2025",
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "A full-stack mobile app letting a cooperative access and manage client information on the go.",
    "detail": {
      "context": "Full-stack developer · Client Project — Cooperative",
      "intro": "A full-stack mobile app letting a cooperative access and manage client information on the go.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "React Native client with a Firebase real-time backend.",
            "Full delivery: mobile frontend + backend integration.",
            "Access and manage client records away from the desk."
          ]
        },
        {
          "h": "Domains",
          "p": "Mobile development · client-facing delivery · real-time data · small-client SaaS."
        }
      ]
    },
    "href": "projects/mobile-client-app.html"
  },
  {
    "id": "rag-mini",
    "title": "Minimal Local RAG System (Python + Ollama)",
    "org": "Self-directed practice project",
    "icon": "🔎",
    "pillar": "tech",
    "tags": [
      "ai"
    ],
    "stack": [
      "Python",
      "Ollama",
      "nomic-embed-text",
      "gemma4:e4b",
      "numpy",
      "requests"
    ],
    "status": "ongoing",
    "start": "2026-07",
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "A from-scratch, 100% local RAG pipeline (~110 lines, rag.py) built to close a specific gap: solid RAG theory but no hands-on implementation experience. Indexes Markdown docs from my own projects (ExpenseTracker, BreedBreeder, USI) and answers questions over them entirely offline.",
    "detail": {
      "context": "Solo developer · Self-directed practice project",
      "intro": "A from-scratch, 100% local RAG pipeline (~110 lines, rag.py) built to close a specific gap: solid RAG theory but no hands-on implementation experience. Indexes Markdown docs from my own projects (ExpenseTracker, BreedBreeder, USI) and answers questions over them entirely offline.",
      "sections": [
        {
          "h": "What it does",
          "list": [
            "Retrieval over project docs using Ollama's REST API directly (not the ollama package):",
            "Vector store is a plain Python list + numpy cosine similarity — a deliberate scale",
            "Each function maps 1:1 to a stage of a RAG system-design diagram: load → chunk → embed"
          ]
        },
        {
          "h": "Key findings",
          "list": [
            "Adding nomic's asymmetric prefixes (search_query: / search_document:) to the",
            "Built eval.py, a recall@k harness against a 7-question golden set, replacing \"eyeball",
            "Caught my own evaluation being too permissive: file-level ground truth counted"
          ]
        },
        {
          "h": "Open items",
          "list": [
            "Two queries still fail even at k=3: a short doc answering a generic/acronym-heavy"
          ]
        },
        {
          "h": "Why it matters",
          "p": "Turns \"I know RAG theory\" into \"I built one, evaluated it rigorously, and caught my own eval being overly optimistic\" — a concrete maturity story that covers system design, hands-on coding, and AI-assisted development in one project. Kept intact and runnable as v1 rather than rewritten in place: USI-RAG — Production RAG Chatbot over the USI Corpus (v2) is the production-stack rebuild (LangChain, Chroma, a public deployment), and each row of its results log is measured against what this from-scratch version already established."
        }
      ]
    },
    "href": "projects/rag-mini.html"
  },
  {
    "id": "rnn-sequence",
    "title": "RNN Sequence Prediction",
    "org": "Master's Coursework",
    "icon": "🔮",
    "pillar": "tech",
    "tags": [
      "ai"
    ],
    "stack": [
      "Python",
      "RNNs"
    ],
    "status": "completed",
    "start": null,
    "end": null,
    "track": "education",
    "curated": false,
    "featured": false,
    "summary": "Designed and trained Recurrent Neural Network models for sequence-prediction tasks.",
    "detail": {
      "context": "Author · Master's Coursework",
      "intro": "Designed and trained Recurrent Neural Network models for sequence-prediction tasks.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Applied RNN architectures to learn temporal patterns and predict next elements in sequences."
          ]
        },
        {
          "h": "Domains",
          "p": "Recurrent neural networks · sequence modelling · temporal data · deep learning."
        }
      ]
    },
    "href": "projects/rnn-sequence.html"
  },
  {
    "id": "saas-marketing-platform",
    "title": "Niche-Field SaaS Marketing & Admin Platform",
    "org": "Personal Project",
    "icon": "🌐",
    "pillar": "tech",
    "tags": [
      "qa"
    ],
    "stack": [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Mapbox",
      "Cloudflare R2",
      "Playwright",
      "Vercel"
    ],
    "status": "ongoing",
    "start": "2026-03",
    "end": null,
    "track": "projects",
    "curated": true,
    "featured": false,
    "summary": "A full-stack, multi-tenant SaaS web platform built from scratch to help businesses in a niche field market themselves and administer the information central to their operations.",
    "detail": {
      "context": "Solo developer (full-stack, from scratch) · Personal Project",
      "intro": "A full-stack, multi-tenant SaaS web platform built from scratch to help businesses in a niche field market themselves and administer the information central to their operations.",
      "sections": [
        {
          "h": "Architecture",
          "list": [
            "Monorepo managed with pnpm workspaces — a clean split between UI, API server,",
            "End-to-end type safety: a single source-of-truth API schema (Zod) drives both server"
          ]
        },
        {
          "h": "Frontend",
          "list": [
            "React + Vite SPA styled with TailwindCSS and Radix UI primitives.",
            "TanStack Query for server-state, wouter for routing, Framer Motion for motion.",
            "i18next for full internationalization (multi-language UI)."
          ]
        },
        {
          "h": "Backend",
          "list": [
            "Express (Node.js) API, deployed as serverless functions on Vercel",
            "Auth: JWT signed into an httpOnly cookie, stateless (own registration, not",
            "PostgreSQL accessed through Drizzle ORM, schema-first: drizzle-zod derives the",
            "Mapbox geocoding, called server-side only — the API key never reaches the client.",
            "File storage via Cloudflare R2 (S3-compatible API, @aws-sdk/client-s3 against R2's",
            "Rate limiting via Upstash (managed Redis) — needed because the serverless backend has",
            "Transactional email via Resend, structured logging with Pino."
          ]
        },
        {
          "h": "Monorepo rationale",
          "list": [
            "pnpm workspace split into ui/ (React), server/ (Express), and shared lib/db",
            "Drizzle over Prisma: queries read close to SQL and types derive straight from the"
          ]
        },
        {
          "h": "Quality & delivery",
          "list": [
            "Playwright end-to-end test suite (qa/ package) covering core user flows.",
            "Strict TypeScript across every package, Prettier formatting, esbuild bundling."
          ]
        },
        {
          "h": "Contrast with Shared Expense Tracker — Serverless PWA",
          "p": "Two deliberately different auth models across my own projects: this one delegates identity control to *itself* (own registration, stateless JWT) because it's a multi-tenant marketplace; ExpenseTracker delegates identity to Google OAuth and authorization to Postgres RLS because it's a two-user app with no server to maintain. Same engineer, different context, different trade-off — not a default reached for out of habit. Delivered solo, end to end — architecture, data model, API, UI, auth, testing, and deploy."
        }
      ]
    },
    "href": "projects/saas-marketing-platform.html"
  },
  {
    "id": "siem-implementation",
    "title": "SIEM Implementation — Security Monitoring & Detection",
    "org": "Personal / Project",
    "icon": "🛡️",
    "pillar": "tech",
    "tags": [
      "security"
    ],
    "stack": [
      "Wazuh",
      "Elastic Stack (ELK)",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "HIDS"
    ],
    "status": "completed",
    "start": null,
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "Designed and deployed a working SIEM to centralize log collection, monitoring, and threat detection across hosts and services.",
    "detail": {
      "context": "Author · Personal / Project",
      "intro": "Designed and deployed a working SIEM to centralize log collection, monitoring, and threat detection across hosts and services.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Built log ingestion/normalization pipelines forwarding events from endpoints, system/auth logs, and network services into a centralized indexing/search backend.",
            "Created dashboards/visualizations for real-time security monitoring.",
            "Configured detection rules and alerting (failed-auth patterns, anomalous behaviour, known attack signatures).",
            "Implemented file-integrity monitoring and host-based intrusion detection (HIDS).",
            "Tested detections against simulated attacks to validate coverage and tune out noise/false positives."
          ]
        }
      ]
    },
    "href": "projects/siem-implementation.html"
  },
  {
    "id": "sign-language-recognition",
    "title": "Sign Language Recognition — Image-to-Text",
    "org": "BSc Academic Project",
    "icon": "🤟",
    "pillar": "tech",
    "tags": [
      "ai"
    ],
    "stack": [
      "Python",
      "Computer Vision",
      "ML"
    ],
    "status": "completed",
    "start": "2023",
    "end": "2024",
    "track": "education",
    "curated": true,
    "featured": false,
    "summary": "A computer-vision system that reads sign-language gestures from images and outputs the corresponding text — the capstone machine-learning project of my bachelor's.",
    "detail": {
      "context": "Solo developer · BSc Academic Project",
      "intro": "A computer-vision system that reads sign-language gestures from images and outputs the corresponding text — the capstone machine-learning project of my bachelor's.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Identifies sign-language gestures from images and converts them to text, at 98% classification accuracy.",
            "Image preprocessing and feature handling for gesture recognition.",
            "Regression and multiclass model training with Python CV/ML frameworks."
          ]
        },
        {
          "h": "Domains",
          "p": "Computer vision · image classification · applied ML · accessibility technology."
        }
      ]
    },
    "href": "projects/sign-language-recognition.html"
  },
  {
    "id": "spss-analysis",
    "title": "SPSS Data Analysis",
    "org": "Academic Projects",
    "icon": "📈",
    "pillar": "tech",
    "tags": [],
    "stack": [
      "SPSS"
    ],
    "status": "completed",
    "start": null,
    "end": null,
    "track": "education",
    "curated": false,
    "featured": false,
    "summary": "Statistical analysis across multiple academic cases, extracting insights from datasets.",
    "detail": {
      "context": "Author · Academic Projects",
      "intro": "Statistical analysis across multiple academic cases, extracting insights from datasets.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Descriptive statistics, hypothesis testing, and data interpretation.",
            "Varied analytical contexts across research and engineering problems."
          ]
        },
        {
          "h": "Domains",
          "p": "Statistical analysis · quantitative research · information extraction · research methods."
        }
      ]
    },
    "href": "projects/spss-analysis.html"
  },
  {
    "id": "usi-corpus",
    "title": "USI — Unified Source of Information",
    "org": "Personal Project",
    "icon": "🗂️",
    "pillar": "tech",
    "tags": [
      "ai",
      "process"
    ],
    "stack": [
      "Python",
      "YAML",
      "Markdown"
    ],
    "status": "ongoing",
    "start": "2026",
    "end": null,
    "track": "projects",
    "curated": true,
    "featured": false,
    "summary": "A structured, person-agnostic single source of truth about a person — identity, skills, projects, experience, and traits — captured as small Markdown \"blocks\" with canonical YAML frontmatter and a human-readable body.",
    "detail": {
      "context": "Creator / Maintainer · Personal Project",
      "intro": "A structured, person-agnostic single source of truth about a person — identity, skills, projects, experience, and traits — captured as small Markdown \"blocks\" with canonical YAML frontmatter and a human-readable body.",
      "sections": [
        {
          "h": "Why it exists",
          "list": [
            "One fact, one place — eliminate the drift of keeping a CV, a portfolio site, and an",
            "Audience-gating built in (public / cv / ai-context / private) so each export"
          ]
        },
        {
          "h": "What it powers",
          "list": [
            "CV automation — compile a tailored, role-filtered résumé from the corpus.",
            "Personal website builders — regenerate the portfolio site's data from the blocks.",
            "LLM / agent context packs — emit a curated Markdown bundle to ground a personal AI.",
            "A live RAG chatbot — USI-RAG — Production RAG Chatbot over the USI Corpus (v2) indexes this corpus and answers visitor"
          ]
        },
        {
          "h": "How it works",
          "list": [
            "A Python build script filters blocks by audience / type / tags and emits JSON, a",
            "A controlled taxonomy and a frontmatter schema keep every block consistent and"
          ]
        }
      ]
    },
    "href": "projects/usi-corpus.html"
  },
  {
    "id": "usi-rag",
    "title": "USI-RAG — Production RAG Chatbot over the USI Corpus (v2)",
    "org": "Self-directed practice project",
    "icon": "💬",
    "pillar": "tech",
    "tags": [
      "ai"
    ],
    "stack": [
      "Python",
      "LangChain",
      "ChromaDB",
      "Ollama",
      "nomic-embed-text",
      "qwen3.5:4b",
      "Docker",
      "Docker Compose",
      "Cloudflare Tunnel",
      "HTTP (stdlib)"
    ],
    "status": "ongoing",
    "start": "2026-08",
    "end": null,
    "track": "projects",
    "curated": true,
    "featured": true,
    "summary": "A retrieval system over USI — Unified Source of Information that powers the \"Ask about me\" chatbot on my portfolio site. This is v2 of Minimal Local RAG System (Python + Ollama) (v1), which stays frozen and untouched on purpose: v1 is a from-scratch, ~110-line, no-framework RAG pipeline; v2 reaches for LangChain + Chroma and measures, row by row, what the framework actually bought over the hand-built version. Both are kept runnable so the comparison stays honest rather than anecdotal.",
    "detail": {
      "context": "Solo developer · Self-directed practice project",
      "intro": "A retrieval system over USI — Unified Source of Information that powers the \"Ask about me\" chatbot on my portfolio site. This is v2 of Minimal Local RAG System (Python + Ollama) (v1), which stays frozen and untouched on purpose: v1 is a from-scratch, ~110-line, no-framework RAG pipeline; v2 reaches for LangChain + Chroma and measures, row by row, what the framework actually bought over the hand-built version. Both are kept runnable so the comparison stays honest rather than anecdotal.",
      "sections": [
        {
          "h": "Position in the pipeline",
          "p": "USI-RAG is a downstream consumer of the USI corpus, following the same contract as the personal website's data generator: it imports USI's neutral build.py reader rather than re-implementing frontmatter parsing, and never edits the corpus itself."
        },
        {
          "h": "Architecture",
          "list": [
            "Retrieval: LangChain Documents in a persistent Chroma (HNSW) vector store, swappable",
            "Chunking: Markdown header-aware splitting with heading-trail context prepended to each",
            "Generation: an LCEL chain (retrieve | format | llm | parse) run against a local Ollama",
            "Safety (two-layer gate): USI's block-level audience field (public/cv/ai-context/",
            "Serving: a dependency-free HTTP endpoint (Python stdlib http.server, no FastAPI) with"
          ]
        },
        {
          "h": "Rigor: an eval-driven, not eyeballed, pipeline",
          "p": "Every retrieval change is measured against a 27-case golden set before being kept, tracked in a public results log with recall@1/3/5/10 and MRR, at both chunk- and stricter block-matched levels. Notable finding: the embedding model in production had a tokenizer defect — every capitalized token (Wazuh, GitLab, Python) collapsed to the same vector — silently degrading every measurement since row 0. Diagnosing and containing it (lowercasing before embedding) was the single largest recall gain in the project (chunk recall@5 56% → 70%, strict recall@5 48% → 70%) and reframed several \"chunking\" failures as a ranking-layer defect instead."
        },
        {
          "h": "Deployment",
          "p": "Runs on-demand via Docker Compose (Ollama + the serving container + a Cloudflare quick tunnel), driven by a single script that brings the stack up and prints a public URL — a deliberate \"practicality over always-on\" choice for a low-traffic personal chatbot. The portfolio site's chat.js widget resolves that URL at runtime (query param → localStorage → default), cites the USI block(s) each answer drew from, and degrades to an honest \"offline\" message rather than failing silently when no backend is running."
        },
        {
          "h": "Why it matters",
          "p": "Extends Minimal Local RAG System (Python + Ollama)'s \"I built RAG from scratch\" story with \"I then rebuilt it on a production stack, measured what the framework bought me at every step, found a defect the embedding vendor didn't document, and shipped it as a safety-gated public-facing chatbot\" — covering retrieval-system design, rigorous experimentation discipline, and applied AI safety (PII redaction, audience-scoped generation) in one project."
        }
      ]
    },
    "href": "projects/usi-rag.html"
  },
  {
    "id": "vr-architectural-walkthrough",
    "title": "1:1 Architectural VR Walkthrough",
    "org": "Client Project",
    "icon": "🏛️",
    "pillar": "tech",
    "tags": [
      "vr",
      "3d"
    ],
    "stack": [
      "Unity",
      "3D Modelling",
      "VR"
    ],
    "status": "completed",
    "start": "2023",
    "end": "2023",
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "Accurate 1:1-scale 3D models of real-world buildings, navigable on desktop and in VR — used by clients to plan interior decoration and visualize their actual space before committing.",
    "detail": {
      "context": "Developer · Client Project",
      "intro": "Accurate 1:1-scale 3D models of real-world buildings, navigable on desktop and in VR — used by clients to plan interior decoration and visualize their actual space before committing.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Built accurate 1:1 building models implemented in Unity.",
            "Navigable on both desktop and VR headsets.",
            "Used for decoration planning and spatially-accurate interior visualization (client-facing deliverable)."
          ]
        },
        {
          "h": "Domains",
          "p": "3D modelling · architectural visualization · desktop & VR · Unity · immersive tech."
        }
      ]
    },
    "href": "projects/vr-architectural-walkthrough.html"
  },
  {
    "id": "yolo-detection",
    "title": "Multi-Class Object Detection with YOLO",
    "org": "Master's Coursework",
    "icon": "🎯",
    "pillar": "tech",
    "tags": [
      "ai"
    ],
    "stack": [
      "Python",
      "YOLO"
    ],
    "status": "completed",
    "start": null,
    "end": null,
    "track": "education",
    "curated": false,
    "featured": false,
    "summary": "Trained and tuned YOLO models for multi-class object detection across large-scale image datasets with diverse object categories.",
    "detail": {
      "context": "Author · Master's Coursework",
      "intro": "Trained and tuned YOLO models for multi-class object detection across large-scale image datasets with diverse object categories.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Applied and tuned YOLO architecture for real-world object recognition at scale.",
            "Large-scale dataset training across diverse categories."
          ]
        },
        {
          "h": "Domains",
          "p": "Object detection · computer vision · deep learning · large-scale training · multi-class classification."
        }
      ]
    },
    "href": "projects/yolo-detection.html"
  },
  {
    "id": "banco-alimentar",
    "title": "Banco Alimentar — Volunteer",
    "org": "Banco Alimentar Contra a Fome (Food Bank Against Hunger)",
    "icon": "🥫",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2018",
    "end": "2025",
    "track": "leadership",
    "curated": true,
    "featured": false,
    "summary": "Recurring volunteer across multiple food-collection campaigns (2018–2025) — a long-running, hands-on commitment to the unglamorous logistics that make food drives work.",
    "detail": {
      "context": "Volunteer · Banco Alimentar Contra a Fome (Food Bank Against Hunger)",
      "intro": "Recurring volunteer across multiple food-collection campaigns (2018–2025) — a long-running, hands-on commitment to the unglamorous logistics that make food drives work.",
      "sections": [
        {
          "h": "What I did",
          "list": [
            "Worked in the storage/warehouse department, sorting and organizing donated goods.",
            "Collected and transported donations from partner stores.",
            "Gathered donations in-store during collection campaigns."
          ]
        }
      ]
    },
    "href": "involvement/banco-alimentar.html"
  },
  {
    "id": "erasmus-student-network",
    "title": "Erasmus Student Network (ESN)",
    "org": "Erasmus Student Network (ESN)",
    "icon": "🧳",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": null,
    "end": null,
    "track": "leadership",
    "curated": false,
    "featured": false,
    "summary": "Helped organize and deliver events for international student communities — welcoming and supporting exchange students through ESN programmes.",
    "detail": {
      "context": "Volunteer / Organizer · Erasmus Student Network (ESN)",
      "intro": "Helped organize and deliver events for international student communities — welcoming and supporting exchange students through ESN programmes.",
      "sections": []
    },
    "href": "involvement/erasmus-student-network.html"
  },
  {
    "id": "erasmus",
    "title": "Erasmus+ Training & Living Abroad",
    "org": "Erasmus+",
    "icon": "🌍",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2022",
    "end": "2023",
    "track": "education",
    "curated": false,
    "featured": false,
    "summary": "A string of international training experiences, capped by living abroad in Poland for six months.",
    "detail": {
      "context": "Participant · Erasmus+",
      "intro": "A string of international training experiences, capped by living abroad in Poland for six months.",
      "sections": [
        {
          "h": "Highlights",
          "list": [
            "Training courses in Finland, Poland, and Portugal.",
            "Lived in Poland for 6 months.",
            "Cross-cultural collaboration and self-reliance."
          ]
        }
      ]
    },
    "href": "involvement/erasmus.html"
  },
  {
    "id": "quinta-da-carvalheira",
    "title": "Quinta da Carvalheira — Eco Project",
    "org": "Quinta da Carvalheira (Community Eco Project)",
    "icon": "🌿",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2024",
    "end": "2025",
    "track": "leadership",
    "curated": true,
    "featured": false,
    "summary": "A community-centred eco project built around nature connection and personal development. I was part of the team that brought it to life, from the ground up.",
    "detail": {
      "context": "Contributor · Quinta da Carvalheira (Community Eco Project)",
      "intro": "A community-centred eco project built around nature connection and personal development. I was part of the team that brought it to life, from the ground up.",
      "sections": [
        {
          "h": "What I did",
          "list": [
            "Helped with building and construction of the physical space.",
            "Took part in agricultural and land work.",
            "Connected people to the project and grew its community.",
            "Contributed to shaping and developing the project's vision."
          ]
        }
      ]
    },
    "href": "involvement/quinta-da-carvalheira.html"
  },
  {
    "id": "scouts",
    "title": "18+ Years of Scouting",
    "org": "Scouts",
    "icon": "⚜️",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2007",
    "end": "2025",
    "track": "leadership",
    "curated": true,
    "featured": false,
    "summary": "More than 18 years of continuous involvement in Scouting, across national and international activities — a long-running school of leadership, teamwork, and service.",
    "detail": {
      "context": "Member / Leader · Scouts",
      "intro": "More than 18 years of continuous involvement in Scouting, across national and international activities — a long-running school of leadership, teamwork, and service.",
      "sections": []
    },
    "href": "involvement/scouts.html"
  },
  {
    "id": "student-radio",
    "title": "Student Radio — Founder & Initiator",
    "org": "High School",
    "icon": "📻",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2019",
    "end": "2020",
    "track": "leadership",
    "curated": true,
    "featured": false,
    "summary": "Won a competition for governmental school-improvement funds, then turned them into a student-run radio station — from the winning pitch to selecting and buying the equipment.",
    "detail": {
      "context": "Founder & Initiator · High School",
      "intro": "Won a competition for governmental school-improvement funds, then turned them into a student-run radio station — from the winning pitch to selecting and buying the equipment.",
      "sections": [
        {
          "h": "What I did",
          "list": [
            "Conceived and pitched the project, winning a competition for governmental funds.",
            "Defined what a student-run radio station needed to actually work.",
            "Researched, selected, and purchased the equipment within budget.",
            "Set up the station so students could broadcast and use it."
          ]
        }
      ]
    },
    "href": "involvement/student-radio.html"
  },
  {
    "id": "unlimited-future",
    "title": "Unlimited Future — Ambassador",
    "org": "Unlimited Future (NGO)",
    "icon": "🚀",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2020",
    "end": "2023",
    "track": "leadership",
    "curated": true,
    "featured": false,
    "summary": "Student ambassador for an NGO bridging students and the professional world.",
    "detail": {
      "context": "Student Ambassador · Unlimited Future (NGO)",
      "intro": "Student ambassador for an NGO bridging students and the professional world.",
      "sections": [
        {
          "h": "What I did",
          "list": [
            "Helped coordinate training courses for students.",
            "Organized events connecting students with companies.",
            "Represented the NGO within the student community."
          ]
        }
      ]
    },
    "href": "involvement/unlimited-future.html"
  },
  {
    "id": "world-scout-jamboree",
    "title": "World Scout Jamboree — Japan (Participant)",
    "org": "World Organization of the Scout Movement",
    "icon": "🏕️",
    "pillar": "org",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": "2015",
    "end": "2015",
    "track": "leadership",
    "curated": true,
    "featured": false,
    "summary": "Took part in the World Scout Jamboree held in Japan — an international gathering of Scouts from around the world, bringing together tens of thousands of participants across cultures for two weeks of camp life, exchange, and service.",
    "detail": {
      "context": "Participant · World Organization of the Scout Movement",
      "intro": "Took part in the World Scout Jamboree held in Japan — an international gathering of Scouts from around the world, bringing together tens of thousands of participants across cultures for two weeks of camp life, exchange, and service.",
      "sections": []
    },
    "href": "involvement/world-scout-jamboree.html"
  },
  {
    "id": "blog-madman",
    "title": "The Mad Man-Maid Machine",
    "org": "Blog · Creative Writing",
    "icon": "✍️",
    "pillar": "personal",
    "tags": [],
    "stack": [],
    "status": "ongoing",
    "start": "2020",
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "Poems, reflections, and stories sitting between the rational and the wild — writing as a way of making sense, or deliberately not.",
    "href": "https://themadmanmaidmachine.blogspot.com/"
  },
  {
    "id": "blog-momentum",
    "title": "Budgeting Emotions and Keeping Momentum",
    "org": "Blog · Self-Development & Sociology",
    "icon": "🌱",
    "pillar": "personal",
    "tags": [],
    "stack": [],
    "status": "ongoing",
    "start": "2020",
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "A blog on personal growth, human behaviour, and the psychology behind how we move through the world — a space for reflection and clarity.",
    "href": "https://emotionsandmomentum.blogspot.com/"
  },
  {
    "id": "publications",
    "title": "Academic Publications",
    "org": null,
    "icon": "•",
    "pillar": "education",
    "tags": [],
    "stack": [],
    "status": "completed",
    "start": null,
    "end": null,
    "track": "projects",
    "curated": false,
    "featured": false,
    "summary": "Both degree final works are published academic documents and may be listed as publications on CVs and applications.",
    "href": null
  }
];
