#!/usr/bin/env python3
"""
gen_data.py — regenerate this site's data.js from the USI source of truth.

USI (../USI) holds the canonical facts as Markdown blocks. This script reads them
through USI's neutral reader (USI/scripts/build.py), layers on website-only
presentation from usi-web.yaml (emoji icons, curated/featured flags, slug/summary
overrides), and emits window.TAGS / TRACKS / ITEMS.

Facts live in USI; only presentation chrome lives here.

Usage:
  python scripts/gen_data.py                 # -> data.generated.js (review, then promote to data.js)
  python scripts/gen_data.py -o data.js      # write data.js directly
  USI_PATH=/path/to/USI python scripts/gen_data.py

Requires PyYAML:  pip install pyyaml
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

import yaml

HERE = Path(__file__).resolve().parent       # PersonalWebsite/scripts
SITE = HERE.parent                           # PersonalWebsite
USI = Path(os.environ.get("USI_PATH", SITE.parent / "USI")).resolve()

if not (USI / "scripts" / "build.py").exists():
    sys.exit(f"USI source not found at {USI}. Set USI_PATH to the USI repo root.")

sys.path.insert(0, str(USI / "scripts"))
import build  # noqa: E402  — USI's neutral reader (build.ROOT points at USI)

WEB_PREFIXES = ("project-", "experience-", "involvement-", "education-", "writing-")


def strip_prefix(block_id: str) -> str:
    for p in WEB_PREFIXES:
        if block_id.startswith(p):
            return block_id[len(p):]
    return block_id


TITLES: dict[str, str] = {}


def clean(text: str) -> str:
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)
    text = re.sub(r"\[\[([^\]]+)\]\]", lambda m: TITLES.get(m.group(1), m.group(1)), text)
    text = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)   # [text](url) -> text
    return text.replace("**", "").replace("`", "").strip()


def body_to_detail(body: str) -> tuple[str, list[dict]]:
    intro_parts: list[str] = []
    sections: list[dict] = []
    cur: dict | None = None
    intro_done = False
    for raw in body.splitlines():
        line = raw.rstrip()
        if line.startswith("# ") or line.startswith("> ") or line.startswith("<!--"):
            continue
        if line.startswith("## "):
            if cur:
                sections.append(cur)
            cur = {"h": line[3:].strip(), "lines": []}
            continue
        if cur is not None:
            cur["lines"].append(line)
        elif not intro_done:
            if line.strip():
                intro_parts.append(line.strip())
            elif intro_parts:
                intro_done = True
    if cur:
        sections.append(cur)

    out: list[dict] = []
    for s in sections:
        bullets = [clean(l.strip()[2:]) for l in s["lines"] if l.strip().startswith("- ")]
        h = clean(s["h"])
        if bullets:
            out.append({"h": h, "list": bullets})
        else:
            p = clean(" ".join(l.strip() for l in s["lines"] if l.strip()))
            if p:
                out.append({"h": h, "p": p})
    return clean(" ".join(intro_parts)), out


def context_line(m: dict) -> str:
    role, org = m.get("role"), m.get("org")
    return f"{role} · {org}" if role and org else (org or role or "")


def datestr(v) -> str | None:
    return None if v is None else str(v)


def main() -> None:
    ap = argparse.ArgumentParser(description="Regenerate data.js from the USI source.")
    ap.add_argument("-o", "--out", default="data.generated.js",
                    help="Output file relative to the site root (default: data.generated.js).")
    args = ap.parse_args()

    tax = yaml.safe_load((USI / "taxonomy.yaml").read_text(encoding="utf-8")) or {}
    tags_tax = tax.get("tags", {}) or {}
    tracks_tax = tax.get("tracks", {}) or {}

    web_doc = yaml.safe_load((SITE / "usi-web.yaml").read_text(encoding="utf-8")) or {}
    web = web_doc.get("items", {}) or {}

    all_blocks = build.load_blocks()
    TITLES.update({b["meta"]["id"]: b["meta"].get("title", b["meta"]["id"]) for b in all_blocks})

    blocks = [
        b for b in all_blocks
        if b["meta"].get("pillar") and "public" in (b["meta"].get("audience") or [])
    ]

    items = []
    for b in blocks:
        m = b["meta"]
        ov = web.get(m["id"], {}) or {}
        if ov.get("hidden"):
            continue
        pillar = m.get("pillar")
        webid = ov.get("id") or strip_prefix(m["id"])
        intro, sections = body_to_detail(b["body"])
        item = {
            "id": webid,
            "title": m.get("title"),
            "org": m.get("org"),
            "icon": ov.get("icon", "•"),
            "pillar": pillar,
            "tags": m.get("tags") or [],
            "stack": m.get("stack") or [],
            "status": m.get("status"),
            "start": datestr(m.get("start")),
            "end": datestr(m.get("end")),
            "track": m.get("track"),
            "curated": bool(ov.get("curated", False)),
            "featured": bool(m.get("featured") or ov.get("featured", False)),
            "summary": ov.get("summary") or intro,
        }
        if pillar in ("tech", "org"):
            item["detail"] = {
                "context": ov.get("context") or context_line(m),
                "intro": intro,
                "sections": sections,
            }
            item["href"] = ov.get("href") or (
                f"projects/{webid}.html" if pillar == "tech" else f"involvement/{webid}.html"
            )
        elif pillar == "personal":
            links = m.get("links") or []
            item["href"] = ov.get("href") or (links[0]["url"] if links else None)
        else:  # education and anything else -> timeline-only
            item["href"] = ov.get("href")
        items.append(item)

    js = (
        "/* AUTO-GENERATED from the USI source by scripts/gen_data.py — do not edit by hand.\n"
        "   Facts live in the USI blocks (../USI); website chrome lives in usi-web.yaml. */\n\n"
        "window.TAGS = " + json.dumps(tags_tax, ensure_ascii=False, indent=2) + ";\n\n"
        "window.TRACKS = " + json.dumps(tracks_tax, ensure_ascii=False, indent=2) + ";\n\n"
        "window.ITEMS = " + json.dumps(items, ensure_ascii=False, indent=2, default=str) + ";\n"
    )

    out = (SITE / args.out).resolve()
    out.write_text(js, encoding="utf-8")
    print(f"Wrote {len(items)} item(s) -> {out}")


if __name__ == "__main__":
    main()
