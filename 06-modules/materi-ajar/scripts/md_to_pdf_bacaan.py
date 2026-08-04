#!/usr/bin/env python3
"""Convert bacaan .md (with local images) to A4 PDF via WeasyPrint."""

from __future__ import annotations

import argparse
import re
from pathlib import Path

import markdown
from weasyprint import CSS, HTML

CSS_TEXT = """
@page {
  size: A4;
  margin: 16mm 14mm 18mm 14mm;
  @bottom-center {
    content: counter(page);
    font-size: 9pt;
    color: #666;
  }
}
body {
  font-family: "DejaVu Sans", "Liberation Sans", sans-serif;
  font-size: 11pt;
  line-height: 1.45;
  color: #1a1a1a;
}
h1 { font-size: 18pt; margin: 0 0 0.4em; }
h2 { font-size: 14pt; margin: 1.2em 0 0.4em; border-bottom: 1px solid #ddd; padding-bottom: 0.2em; }
h3 { font-size: 12pt; margin: 1em 0 0.35em; }
p, li { margin: 0.35em 0; }
blockquote {
  margin: 0.6em 0;
  padding: 0.4em 0.8em;
  border-left: 3px solid #555;
  background: #f6f6f6;
}
code, pre {
  font-family: "DejaVu Sans Mono", "Liberation Mono", monospace;
  font-size: 9.5pt;
}
pre {
  background: #f3f3f3;
  padding: 0.7em 0.8em;
  white-space: pre-wrap;
  border-radius: 4px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 0.8em 0;
  font-size: 10pt;
}
th, td {
  border: 1px solid #bbb;
  padding: 0.35em 0.5em;
  vertical-align: top;
}
th { background: #eee; }
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0.8em auto;
}
hr { border: none; border-top: 1px solid #ccc; margin: 1.2em 0; }
a { color: #234; text-decoration: none; }
.meta { font-size: 9.5pt; color: #444; }
"""


def strip_draft_notes(md: str) -> str:
    """Drop internal production notes from student-facing PDF."""
    return re.split(r"\n## Catatan (draft|produksi)\b", md, maxsplit=1)[0].rstrip() + "\n"


def rewrite_images(md: str, base: Path) -> str:
    def repl(m: re.Match[str]) -> str:
        alt, src = m.group(1), m.group(2)
        if src.startswith(("http://", "https://", "data:")):
            return m.group(0)
        path = (base / src).resolve()
        return f'![{alt}]({path.as_uri()})'

    return re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", repl, md)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input", type=Path)
    parser.add_argument("-o", "--output", type=Path, default=None)
    parser.add_argument("--keep-draft-notes", action="store_true")
    args = parser.parse_args()

    src = args.input.resolve()
    out = (args.output or src.with_suffix(".pdf")).resolve()
    text = src.read_text(encoding="utf-8")
    if not args.keep_draft_notes:
        text = strip_draft_notes(text)
    text = rewrite_images(text, src.parent)

    body = markdown.markdown(
        text,
        extensions=["tables", "fenced_code", "nl2br", "sane_lists"],
    )
    html = f"""<!DOCTYPE html>
<html lang="id">
<head><meta charset="utf-8"><title>{src.stem}</title></head>
<body class="meta">{body}</body>
</html>"""

    HTML(string=html, base_url=src.parent.as_uri() + "/").write_pdf(
        out, stylesheets=[CSS(string=CSS_TEXT)]
    )
    print(out)


if __name__ == "__main__":
    main()
