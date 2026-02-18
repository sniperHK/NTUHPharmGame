# drug_map Gap Report

更新日期：2026-02-18

## 檢查基準
- `drug_data.js` 名稱數：204
- `drug_map.js` key 數：228
- 產生方式：`python3 scripts/generate_drug_map.py --out-json drug_map.json`
- 稽核方式：`python3 scripts/audit_drug_data.py --max-list 40`

## 仍缺映射（10）
以下藥名目前在 `drug_data.js` 中，但 `drug_map.js` 尚無對應 key：

- Abilify
- Sinemet 100#
- Sinomin oph.
- Sirdalud
- Takepron
- Tetracycline oph
- Userm
- Valdoxan
- Wecoli
- Xarelto 10mg

## 已補 alias（本次）
為配合 `drug_data.js` 新命名，本次加入以下 alias：

- Advagraf 1mg (G) -> Advagraf 1mg
- Amoxicillin 250 mg/cap -> Amoxicillin
- Carlipin -> 糖 Carlipin
- Nifedipine S.R.F.C. Tablet 30 mg/tab -> Nifedipine 30mg
- Zyprexa Zydis 5 mg/tab -> Zyprexa
- Tofranil 10mg -> Tofranil
- Tofranil 25mg -> Tofranil

## 維護建議
- 新增/修改藥名後，先更新 `Reference/DrugData/drug_map.overrides.json`。
- 再執行：
  - `python3 scripts/generate_drug_map.py --out-json drug_map.json`
  - `python3 scripts/audit_drug_data.py --max-list 40`
