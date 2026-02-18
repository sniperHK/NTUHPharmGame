# drug_map Gap Report

更新日期：2026-02-18

## 檢查基準
- `drug_data.js` 名稱數：204
- `drug_map.js` key 數：238
- 產生方式：`python3 scripts/generate_drug_map.py --out-json drug_map.json`
- 稽核方式：`python3 scripts/audit_drug_data.py --max-list 40`

## 目前缺映射（0）
`drug_data.js` 目前所有藥名都已存在對應 `drug_map.js` key。

## 本輪新增映射（10）
- Abilify -> `ABI4IB43-A.jpg`
- Sinemet 100# -> `SIN4JB13-A.jpg`
- Sinomin oph. -> `OSM2UC16-A.jpg`
- Sirdalud -> `SIR4JC13-A.jpg`
- Takepron -> `TAK4HA47-A.jpg`
- Tetracycline oph -> `TET2UC33-A.jpg`
- Userm -> `USE4JC12-A.jpg`
- Valdoxan -> `VAL4IC29-A.jpg`
- Wecoli -> `WEC4DI01-A.jpg`
- Xarelto 10mg -> `XAR4EA44-A.jpg`

## 維護建議
- 新增/修改藥名後，先更新 `Reference/DrugData/drug_map.overrides.json`。
- 再執行：
  - `python3 scripts/generate_drug_map.py --out-json drug_map.json`
  - `python3 scripts/audit_drug_data.py --max-list 40`
