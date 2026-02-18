#!/usr/bin/env bash
set -euo pipefail

required=(NETLIFY_AUTH_TOKEN NETLIFY_SITE_ID)
missing=()

for key in "${required[@]}"; do
  if [ -z "${!key:-}" ]; then
    missing+=("$key")
  fi
done

if [ "${#missing[@]}" -gt 0 ]; then
  echo "Netlify deploy preflight: missing ${#missing[@]} required env var(s)."
  for key in "${missing[@]}"; do
    echo "- $key"
  done
  if [ -f .env ]; then
    echo "Tip: run 'set -a; source .env; set +a' before deploy."
  fi
  exit 1
fi

echo "Netlify deploy preflight: OK"
echo "- NETLIFY_AUTH_TOKEN is set"
echo "- NETLIFY_SITE_ID is set"
