#!/usr/bin/env bash
# Audits every page of the built portfolio served at localhost:4321.
# Usage: bash .claude/skills/design-audit/audit-site.sh [threshold] [runs]
set -u
THRESHOLD="${1:-90}"
RUNS="${2:-3}"
BASE="http://localhost:4321"
TOOL=".claude/skills/design-audit/scripts/audit.mjs"
for page in $(cd dist && find . -name index.html | sed 's#^\.##; s#index.html$##' | sort); do
  echo "=== $page"
  node "$TOOL" "$BASE$page" --threshold "$THRESHOLD" --runs "$RUNS" --out .design-audit/reports
done
