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
        description="Audit drug_data.csv vs local images and dispensing-game.html drug list."
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
    parser.add_argument(
        "--game-html",
        default="dispensing-game.html",
        help="Game HTML path (default: %(default)s)",
    )
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


def _extract_game_drug_names(html_path: Path) -> set[str]:
    text = html_path.read_text(encoding="utf-8", errors="replace")
    start = text.find("const drugDatabase")
    if start == -1:
        return set()
    end = text.find("];", start)
    chunk = text[start:] if end == -1 else text[start : end + 2]
    return {m.group(1).strip() for m in re.finditer(r'name:\s*"([^"]+)"', chunk) if m.group(1).strip()}


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

    html_path = Path(args.game_html)
    if html_path.is_file():
        game_names = _extract_game_drug_names(html_path)
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

        print("\n== Game Cross-check ==")
        print(f"Game drug names: {len(game_names)}")
        print(f"In game, missing in CSV: {len(missing_in_csv)}")
        print(f"In CSV, not in game: {len(extra_in_csv)}")
        print(f"In game, no ImageFile in CSV: {len(no_image_for_game)}")

        _print_list("In game but missing in CSV", missing_in_csv, args.max_list)
        _print_list("In CSV but not in game", extra_in_csv, args.max_list)
        _print_list("In game but ImageFile missing", no_image_for_game, args.max_list)
    else:
        print(f"\nGame HTML not found; skipping cross-check: {html_path}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

