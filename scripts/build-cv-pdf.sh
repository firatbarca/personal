#!/usr/bin/env bash
# Generate the downloadable CV (_site/cv-firat-barca.pdf) from the dedicated
# CV document built by Eleventy from src/cv.njk (a professional A4 resume
# layout, deliberately separate from the website design).
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

"$CHROME" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 \
  --print-to-pdf="$SITE_DIR/$OUT" "file://$(cd "$SITE_DIR" && pwd)/cv/index.html"

# Sanity check: a broken render (missing fonts/photo) comes out much smaller.
SIZE=$(wc -c < "$SITE_DIR/$OUT")
if [ "$SIZE" -lt 100000 ]; then
  echo "build-cv-pdf: $OUT is suspiciously small ($SIZE bytes); failing" >&2
  exit 1
fi
echo "build-cv-pdf: wrote $SITE_DIR/$OUT ($SIZE bytes)"
