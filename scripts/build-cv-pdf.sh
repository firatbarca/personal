#!/usr/bin/env bash
# Generate the downloadable CV (_site/cv-firat-barca.pdf) from the built homepage.
# The @media print stylesheet in src/index.html renders the page as a compact CV.
# Headless Chrome's --print-to-pdf never fires the beforeprint event, so the
# experience "More" sections are opened here the same way the in-page handler
# does for visitors who print in a browser.
set -euo pipefail

SITE_DIR="${1:-_site}"
OUT="cv-firat-barca.pdf"

CHROME="${CHROME_BIN:-}"
if [ -z "$CHROME" ]; then
  for c in google-chrome google-chrome-stable chromium-browser chromium; do
    if command -v "$c" >/dev/null 2>&1; then CHROME="$c"; break; fi
  done
fi
if [ -z "$CHROME" ] && [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
fi
if [ -z "$CHROME" ]; then
  echo "build-cv-pdf: no Chrome/Chromium found; set CHROME_BIN" >&2
  exit 1
fi

python3 - "$SITE_DIR" <<'PY'
import sys
site = sys.argv[1]
html = open(f"{site}/index.html", encoding="utf-8").read()
start = html.index('id="experience"')
end = html.index('id="education"')
seg = html[start:end].replace('<details class="more"', '<details class="more" open')
open(f"{site}/cv-print-tmp.html", "w", encoding="utf-8").write(html[:start] + seg + html[end:])
PY

"$CHROME" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 \
  --print-to-pdf="$SITE_DIR/$OUT" "file://$(cd "$SITE_DIR" && pwd)/cv-print-tmp.html"
rm -f "$SITE_DIR/cv-print-tmp.html"

# Sanity check: a broken render (missing fonts/styles) comes out much smaller.
SIZE=$(wc -c < "$SITE_DIR/$OUT")
if [ "$SIZE" -lt 100000 ]; then
  echo "build-cv-pdf: $OUT is suspiciously small ($SIZE bytes); failing" >&2
  exit 1
fi
echo "build-cv-pdf: wrote $SITE_DIR/$OUT ($SIZE bytes)"
