#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Generate drug_map.js (and optional drug_map.json) from Reference/DrugData/drug_data.csv."
        )
    )
    parser.add_argument(
        "--csv",
        default="Reference/DrugData/drug_data.csv",
        help="Input CSV path (default: %(default)s)",
    )
    parser.add_argument(
        "--images-dir",
        default="Reference/DrugData/Images",
        help=(
            "Local images directory used to verify ImageFile exists (default: %(default)s). "
            "Set to empty string to skip existence checks."
        ),
    )
    parser.add_argument(
        "--base-path",
        default="Reference/DrugData/Images",
        help="Base path used in generated URLs (default: %(default)s)",
    )
    parser.add_argument(
        "--out-js",
        default="drug_map.js",
        help="Output JS file path (default: %(default)s)",
    )
    parser.add_argument(
        "--out-json",
        default="",
        help="Optional output JSON file path (default: disabled)",
    )
    parser.add_argument(
        "--overrides",
        default="Reference/DrugData/drug_map.overrides.json",
        help=(
            "Optional JSON mapping file to override/append keys after CSV generation "
            "(default: %(default)s)."
        ),
    )
    parser.add_argument(
        "--require-exists",
        action="store_true",
        help="Only include mappings whose image file exists in --images-dir",
    )
    return parser


def _normalize_base_path(path: str) -> str:
    return path.rstrip("/").rstrip("\\")


def _load_overrides(path: str) -> dict[str, str]:
    if not path:
        return {}
    p = Path(path)
    if not p.is_file():
        return {}
    payload = json.loads(p.read_text(encoding="utf-8"))
    if not isinstance(payload, dict):
        raise SystemExit(f"Overrides must be a JSON object: {p}")

    out: dict[str, str] = {}
    for k, v in payload.items():
        if not isinstance(k, str) or not isinstance(v, str):
            raise SystemExit(f"Overrides key/value must be strings: {p}")
        key = k.strip()
        value = v.strip()
        if key and value:
            out[key] = value
    return out


def main() -> int:
    args = _build_parser().parse_args()
    csv_path = Path(args.csv)
    if not csv_path.is_file():
        raise SystemExit(f"CSV not found: {csv_path}")

    images_dir = Path(args.images_dir) if args.images_dir else None
    images_dir_exists = bool(images_dir and images_dir.is_dir())

    base_path = _normalize_base_path(args.base_path)
    mapping: dict[str, str] = {}

    total_rows = 0
    missing_imagefile = 0
    missing_on_disk = 0
    duplicates = 0
    overrides = _load_overrides(args.overrides)

    with csv_path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            total_rows += 1
            name = (row.get("OriginalName") or "").strip()
            image_file = (row.get("ImageFile") or "").strip()
            if not name:
                continue

            if name in mapping:
                duplicates += 1

            if not image_file:
                missing_imagefile += 1
                continue

            if images_dir_exists and images_dir is not None:
                if not (images_dir / image_file).is_file():
                    missing_on_disk += 1
                    if args.require_exists:
                        continue

            mapping[name] = f"{base_path}/{image_file}"

    # Apply manual/alias overrides at the end so curated mappings win.
    for name, image in overrides.items():
        mapping[name] = image

    js_output = "const drugImageMap = " + json.dumps(
        mapping, ensure_ascii=False, indent=4, sort_keys=True
    ) + ";\n"
    out_js = Path(args.out_js)
    out_js.write_text(js_output, encoding="utf-8")

    if args.out_json:
        out_json = Path(args.out_json)
        out_json.write_text(
            json.dumps(mapping, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
            encoding="utf-8",
        )

    print(f"Rows: {total_rows}")
    print(f"Mappings written: {len(mapping)} -> {out_js}")
    if args.out_json:
        print(f"JSON written: {args.out_json}")
    print(f"Overrides applied: {len(overrides)}")
    if duplicates:
        print(f"Duplicate OriginalName (kept last): {duplicates}")
    if missing_imagefile:
        print(f"Missing ImageFile: {missing_imagefile}")
    if images_dir_exists:
        print(f"Missing image file on disk: {missing_on_disk}")
    else:
        print("Skipped image existence checks (images dir not found or disabled).")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
