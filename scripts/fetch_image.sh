#!/usr/bin/env bash
# Fetch a free, license-clean cover image from Pexels and save it into the site.
#
# Usage:
#   PEXELS_API_KEY=xxxxx ./scripts/fetch_image.sh "wind turbines renewable energy" assets/blog/my-post.jpg
#
# Notes:
# - The API key is read from the PEXELS_API_KEY environment variable and is NEVER
#   committed to the repo. Only the downloaded .jpg files are committed.
# - Pexels license: free for commercial use, no attribution required.
# - Used for blog/solutions card covers; the future blog-writing agent can call this
#   to auto-fetch a cover image for each new post.
set -euo pipefail

QUERY="${1:?Usage: fetch_image.sh \"search query\" output/path.jpg}"
OUT="${2:?Usage: fetch_image.sh \"search query\" output/path.jpg}"
: "${PEXELS_API_KEY:?Set PEXELS_API_KEY in your environment}"

ENC=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$QUERY")
URL=$(curl -s -H "Authorization: $PEXELS_API_KEY" \
  "https://api.pexels.com/v1/search?query=${ENC}&per_page=1&orientation=landscape&size=medium" \
  | python3 -c "import sys,json
d=json.load(sys.stdin); p=d.get('photos') or []
print(p[0]['src']['landscape'] if p else '')")

if [ -z "$URL" ]; then echo "No image found for: $QUERY" >&2; exit 1; fi
mkdir -p "$(dirname "$OUT")"
curl -s -L "$URL" -o "$OUT"
echo "Saved $OUT ($(($(wc -c < "$OUT")/1024)) KB) for query: $QUERY"
