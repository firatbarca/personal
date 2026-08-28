#!/usr/bin/env bash
# Fetch a free, license-clean cover image from Pexels and save it into the site.
#
# Usage:
#   PEXELS_API_KEY=xxxxx ./scripts/fetch_image.sh "wind turbines renewable energy" assets/blog/my-post.jpg
#
# Notes:
# - The API key is read from the PEXELS_API_KEY environment variable and is NEVER
#   committed to the repo. Only the downloaded .jpg files are committed.
# - Pexels license: see https://www.pexels.com/license/. A source record is
#   written to docs/compliance/image-sources for every new download.
# - Used for blog/solutions card covers; the future blog-writing agent can call this
#   to auto-fetch a cover image for each new post.
set -euo pipefail

QUERY="${1:?Usage: fetch_image.sh \"search query\" output/path.jpg}"
OUT="${2:?Usage: fetch_image.sh \"search query\" output/path.jpg}"
: "${PEXELS_API_KEY:?Set PEXELS_API_KEY in your environment}"

ENC=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))" "$QUERY")
RESPONSE_FILE=$(mktemp)
trap 'rm -f "$RESPONSE_FILE"' EXIT
curl -sS -H "Authorization: $PEXELS_API_KEY" \
  "https://api.pexels.com/v1/search?query=${ENC}&per_page=1&orientation=landscape&size=medium" \
  -o "$RESPONSE_FILE"
URL=$(python3 -c "import sys,json
d=json.load(open(sys.argv[1])); p=d.get('photos') or []
print(p[0]['src']['landscape'] if p else '')" "$RESPONSE_FILE")

if [ -z "$URL" ]; then echo "No image found for: $QUERY" >&2; exit 1; fi
mkdir -p "$(dirname "$OUT")"
curl -s -L "$URL" -o "$OUT"
REPO_ROOT=$(cd "$(dirname "$0")/.." && pwd)
RECORD_DIR="$REPO_ROOT/docs/compliance/image-sources"
RECORD_NAME=$(basename "$OUT").json
mkdir -p "$RECORD_DIR"
python3 -c "import json,sys
d=json.load(open(sys.argv[1])); p=d['photos'][0]
record={'local_file':sys.argv[2],'query':sys.argv[3],'source':'Pexels','photo_id':p.get('id'),'source_page':p.get('url'),'photographer':p.get('photographer'),'photographer_page':p.get('photographer_url'),'license':'https://www.pexels.com/license/'}
json.dump(record,open(sys.argv[4],'w'),indent=2); open(sys.argv[4],'a').write('\\n')" \
  "$RESPONSE_FILE" "$OUT" "$QUERY" "$RECORD_DIR/$RECORD_NAME"
echo "Saved $OUT ($(($(wc -c < "$OUT")/1024)) KB) for query: $QUERY"
echo "Saved source record: $RECORD_DIR/$RECORD_NAME"
