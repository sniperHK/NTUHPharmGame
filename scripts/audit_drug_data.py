#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import re
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class CsvRow:
    original_name: str
    drug_code: str
    chinese_name: str
    image_file: str


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Audit consistency between CSV image metadata, drug_data.js names, "
            "and drug_map.js mappings."
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
        help="Local images directory (default: %(default)s)",
    )
    parser.add_argument("--drug-data-js", default="drug_data.js", help="drug_data.js path (default: %(default)s)")
    parser.add_argument("--drug-map-js", default="drug_map.js", help="drug_map.js path (default: %(default)s)")
    parser.add_argument(
        "--max-list",
        type=int,
        default=30,
        help="Max items to print per list (default: %(default)s)",
    )
    return parser


def _read_csv_rows(csv_path: Path) -> list[CsvRow]:
    rows: list[CsvRow] = []
    with csv_path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(
                CsvRow(
                    original_name=(row.get("OriginalName") or "").strip(),
                    drug_code=(row.get("DrugCode") or "").strip(),
                    chinese_name=(row.get("ChineseName") or "").strip(),
                    image_file=(row.get("ImageFile") or "").strip(),
                )
            )
    return rows


def _extract_drug_names_from_js(js_path: Path) -> set[str]:
    text = js_path.read_text(encoding="utf-8", errors="replace")
    return {m.group(1).strip() for m in re.finditer(r'name:\s*"([^"]+)"', text) if m.group(1).strip()}


def _extract_map_entries(js_path: Path) -> dict[str, str]:
    text = js_path.read_text(encoding="utf-8", errors="replace")
    entries: dict[str, str] = {}
    for k, v in re.findall(r'"([^"]+)"\s*:\s*"([^"]+)"', text):
        key = k.strip()
        value = v.strip()
        if key and value:
            entries[key] = value
    return entries


def _print_list(title: str, items: list[str], max_list: int) -> None:
    if not items:
        return
    print(f"\n{title} ({len(items)})")
    for item in items[:max_list]:
        print(f"- {item}")
    if len(items) > max_list:
        print(f"... (+{len(items) - max_list} more)")


def main() -> int:
    args = _build_parser().parse_args()
    csv_path = Path(args.csv)
    if not csv_path.is_file():
        raise SystemExit(f"CSV not found: {csv_path}")

    rows = _read_csv_rows(csv_path)
    rows_by_name: dict[str, list[CsvRow]] = defaultdict(list)
    for row in rows:
        if row.original_name:
            rows_by_name[row.original_name].append(row)

    unique_names = sorted(rows_by_name.keys())
    duplicate_names = sorted([name for name, grouped in rows_by_name.items() if len(grouped) > 1])
    missing_imagefile_names = sorted(
        [name for name, grouped in rows_by_name.items() if any(not r.image_file for r in grouped)]
    )

    images_dir = Path(args.images_dir)
    images_dir_exists = images_dir.is_dir()
    missing_on_disk_names: list[str] = []
    if images_dir_exists:
        for name, grouped in rows_by_name.items():
            for r in grouped:
                if r.image_file and not (images_dir / r.image_file).is_file():
                    missing_on_disk_names.append(f"{name} -> {r.image_file}")
    missing_on_disk_names.sort()

    print("== CSV Summary ==")
    print(f"Rows: {len(rows)}")
    print(f"Unique OriginalName: {len(unique_names)}")
    print(f"Duplicate OriginalName: {len(duplicate_names)}")
    print(f"Missing ImageFile: {len(missing_imagefile_names)}")
    if images_dir_exists:
        print(f"Missing image file on disk: {len(missing_on_disk_names)}")
    else:
        print("Images dir not found; skipping disk checks.")

    _print_list("Duplicate OriginalName", duplicate_names, args.max_list)
    _print_list("Missing ImageFile", missing_imagefile_names, args.max_list)
    _print_list("Missing image file on disk", missing_on_disk_names, args.max_list)

    drug_data_path = Path(args.drug_data_js)
    game_names: set[str] = set()
    if drug_data_path.is_file():
        game_names = _extract_drug_names_from_js(drug_data_path)
        missing_in_csv = sorted([name for name in game_names if name not in rows_by_name])
        extra_in_csv = sorted([name for name in rows_by_name.keys() if name not in game_names])
        no_image_for_game = sorted(
            [
                name
                for name in game_names
                if name not in rows_by_name
                or any(not r.image_file for r in rows_by_name.get(name, []))
            ]
        )

        print("\n== drug_data.js Cross-check ==")
        print(f"drug_data.js names: {len(game_names)}")
        print(f"In drug_data.js, missing in CSV: {len(missing_in_csv)}")
        print(f"In CSV, not in drug_data.js: {len(extra_in_csv)}")
        print(f"In drug_data.js, no ImageFile in CSV: {len(no_image_for_game)}")

        _print_list("In drug_data.js but missing in CSV", missing_in_csv, args.max_list)
        _print_list("In CSV but not in drug_data.js", extra_in_csv, args.max_list)
        _print_list("In drug_data.js but ImageFile missing", no_image_for_game, args.max_list)
    else:
        print(f"\ndrug_data.js not found; skipping JS cross-check: {drug_data_path}")

    drug_map_path = Path(args.drug_map_js)
    if drug_map_path.is_file():
        map_entries = _extract_map_entries(drug_map_path)
        map_keys = set(map_entries.keys())

        print("\n== drug_map.js Cross-check ==")
        print(f"Map keys: {len(map_entries)}")

        if game_names:
            missing_in_map = sorted([name for name in game_names if name not in map_keys])
            extra_map_keys = sorted([name for name in map_keys if name not in game_names])
            print(f"In drug_data.js but missing in drug_map.js: {len(missing_in_map)}")
            print(f"In drug_map.js but not in drug_data.js: {len(extra_map_keys)}")
            _print_list("Missing image mapping keys", missing_in_map, args.max_list)
            _print_list("Extra mapping keys", extra_map_keys, args.max_list)

        remote_urls = sorted([f"{k} -> {v}" for k, v in map_entries.items() if re.match(r"^https?://", v)])
        missing_local_targets: list[str] = []
        for k, v in map_entries.items():
            if re.match(r"^https?://", v):
                continue
            p = Path(v)
            if not p.is_absolute():
                p = Path.cwd() / p
            if not p.is_file():
                missing_local_targets.append(f"{k} -> {v}")
        missing_local_targets.sort()

        print(f"Remote URL mappings: {len(remote_urls)}")
        print(f"Broken local mapping targets: {len(missing_local_targets)}")
        _print_list("Remote URL mappings", remote_urls, args.max_list)
        _print_list("Broken local mapping targets", missing_local_targets, args.max_list)
    else:
        print(f"\ndrug_map.js not found; skipping map cross-check: {drug_map_path}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
