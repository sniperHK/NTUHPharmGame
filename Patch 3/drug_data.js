// drug_data.js -- 共用藥品資料庫
// 由 dispensing-game.html 與 admin.html 共同引用
// Last modified: 2026-02-23

// ==================== 櫃位結構設定 ====================
const cabinetConfig = {
  C: { type: "shelf", rows: 5, cols: 6, label: "C 櫃" },
  B: { type: "shelf", rows: 5, cols: 7, label: "B 櫃" },
  A: { type: "shelf", rows: 6, cols: 6, label: "A 櫃" },
  J: { type: 'drawer', label: "J 櫃", sections: {
    drawer1: { rows: 6, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 6, cols: 3, label: "抽屜 2" },
    doorL: { rows: 6, cols: 3, label: "左門" },
    doorR: { rows: 6, cols: 3, label: "右門" }
  }},
  I: { type: 'drawer', label: "I 櫃", sections: {
    drawer1: { rows: 6, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 6, cols: 3, label: "抽屜 2" },
    doorL: { rows: 6, cols: 3, label: "左門" },
    doorR: { rows: 6, cols: 3, label: "右門" }
  }},
  H: { type: 'drawer', label: "H 櫃", sections: {
    drawer1: { rows: 6, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 6, cols: 3, label: "抽屜 2" },
    doorL: { rows: 6, cols: 3, label: "左門" },
    doorR: { rows: 6, cols: 3, label: "右門" }
  }},
  G: { type: 'drawer', label: "G 櫃", sections: {
    drawer1: { rows: 6, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 6, cols: 3, label: "抽屜 2" },
    doorL: { rows: 6, cols: 3, label: "左門" },
    doorR: { rows: 6, cols: 3, label: "右門" }
  }},
  F: { type: 'drawer', label: "F 櫃", sections: {
    drawer1: { rows: 6, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 6, cols: 3, label: "抽屜 2" },
    doorL: { rows: 6, cols: 3, label: "左門" },
    doorR: { rows: 6, cols: 3, label: "右門" }
  }},
  E: { type: 'drawer', label: "E 櫃", sections: {
    drawer1: { rows: 6, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 6, cols: 3, label: "抽屜 2" },
    doorL: { rows: 6, cols: 3, label: "左門" },
    doorR: { rows: 6, cols: 3, label: "右門" }
  }},
  Desktop: { type: "desktop", rows: 6, cols: 3, label: "桌面區" }
};;

// ==================== 藥品資料庫 ====================
const drugDatabase = [
  // ========== C 櫃 ==========
  { name: "Lixiana 30mg", cabinet: "C", row: 1, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Pradaxa 110mg", cabinet: "C", row: 1, col: 2, stripSize: 10, boxSize: 60 },
  { name: "Zanidip", cabinet: "C", row: 1, col: 3, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Plavix", cabinet: "C", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "DOXABEN XL 4MG", cabinet: "C", row: 1, col: 5, isBox: true, colSpan: 2, stripSize: 7, boxSize: 28 },
  { name: "Requip 2mg", cabinet: "C", row: 2, col: 1, isBox: true, stripSize: 4, boxSize: 28 },
  { name: "Entresto 50mg", cabinet: "C", row: 2, col: 2, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Ateol", cabinet: "C", row: 2, col: 3, stripSize: 14 },
  { name: "Nifedipine 30mg", cabinet: "C", row: 2, col: 4, stripSize: 14 },
  { name: "COZAAR", cabinet: "C", row: 2, col: 5, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Bokey", cabinet: "C", row: 2, col: 6, stripSize: 28 },
  { name: "Youkoxia", cabinet: "C", row: 3, col: 1, stripSize: 7 },
  { name: "Arheuma", cabinet: "C", row: 3, col: 2, stripSize: 10 },
  { name: "EURICON", cabinet: "C", row: 3, col: 3, stripSize: 10 },
  { name: "Forflow SR", cabinet: "C", row: 3, col: 4, stripSize: 10 },
  { name: "Aldactone", cabinet: "C", row: 3, col: 5, stripSize: 10 },
  { name: "DILATREND 6.25mg", cabinet: "C", row: 3, col: 6, stripSize: 10 },
  { name: "Betmiga", cabinet: "C", row: 4, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Dexilant", cabinet: "C", row: 4, col: 2, isBox: true, stripSize: 7, boxSize: 14 },
  { name: "Urief", cabinet: "C", row: 4, col: 3, stripSize: 14 },
  { name: "Dulcolax", cabinet: "C", row: 4, col: 4, stripSize: 20 },
  { name: "Livalo", cabinet: "C", row: 4, col: 5, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Diamicron", cabinet: "C", row: 4, col: 6, stripSize: 30 },
  { name: "Biofermin", cabinet: "C", row: 5, col: 1, isBox: true, stripSize: 3, boxSize: 120 },
  { name: "Trileptal", cabinet: "C", row: 5, col: 4, stripSize: 10 },
  { name: "Januvia", cabinet: "C", row: 5, col: 5, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Promeran", cabinet: "C", row: 5, col: 6, stripSize: 10 },

  // ========== B 櫃 ==========
  { name: "Edarbi", cabinet: "B", row: 1, col: 1, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Celebrex", cabinet: "B", row: 1, col: 2, isBox: true, colSpan: 2, stripSize: 7, boxSize: 28 },
  { name: "Nebilet", cabinet: "B", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Crestor", cabinet: "B", row: 1, col: 5, isBox: true, colSpan: 2, stripSize: 14, boxSize: 28 },
  { name: "Diovan 160mg", cabinet: "B", row: 2, col: 1, isBox: true, colSpan: 2, stripSize: 14, boxSize: 28 },
  { name: "Acetal", cabinet: "B", row: 2, col: 3, stripSize: 10 },
  { name: "Lasix", cabinet: "B", row: 2, col: 4, stripSize: 15 },
  { name: "Exforge", cabinet: "B", row: 2, col: 5, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Aprovel 300mg", cabinet: "B", row: 2, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "MgO 56#", cabinet: "B", row: 3, col: 1, stripSize: 56 },
  { name: "Norvasc", cabinet: "B", row: 3, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Certican", cabinet: "B", row: 3, col: 3, stripSize: 10 },
  { name: "Lipitor", cabinet: "B", row: 3, col: 4, isBox: true, colSpan: 2, stripSize: 7, boxSize: 28 },
  { name: "Amaryl", cabinet: "B", row: 3, col: 6, stripSize: 15 },
  { name: "Fluitran", cabinet: "B", row: 4, col: 1, stripSize: 10 },
  { name: "Trajenta", cabinet: "B", row: 4, col: 2, stripSize: 10 },
  { name: "Strocain", cabinet: "B", row: 4, col: 3, stripSize: 10 },
  { name: "Musco", cabinet: "B", row: 4, col: 4, stripSize: 10 },
  { name: "Ezetrol", cabinet: "B", row: 4, col: 5, stripSize: 10 },
  { name: "Weimok", cabinet: "B", row: 4, col: 6, stripSize: 10 },
  { name: "Synorid", cabinet: "B", row: 5, col: 1, stripSize: 10 },
  { name: "Regrow SR", cabinet: "B", row: 5, col: 2, stripSize: 10, boxSize: 30 },
  { name: "MgO 28#", cabinet: "B", row: 5, col: 3, stripSize: 10, boxSize: 28 },
  { name: "新 Pronolol", cabinet: "B", row: 5, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Vit. B C 28#", cabinet: "B", row: 5, col: 5, stripSize: 10, boxSize: 28 },
  { name: "Kascoal", cabinet: "B", row: 5, col: 6, stripSize: 10 },
  { name: "Oxbu", cabinet: "B", row: 5, col: 7, stripSize: 14, boxSize: 100 },

  // ========== A 櫃 ==========
  { name: "Curam", cabinet: "A", row: 1, col: 1, isBox: true, stripSize: 2, boxSize: 14 },
  { name: "Amanda", cabinet: "A", row: 1, col: 2, stripSize: 10 },
  { name: "Feburic", cabinet: "A", row: 1, col: 3, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Forxiga", cabinet: "A", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Pariet", cabinet: "A", row: 1, col: 5, isBox: true, stripSize: 7, boxSize: 14 },
  { name: "Juxac", cabinet: "A", row: 1, col: 6, stripSize: 7 },
  { name: "Glucophage", cabinet: "A", row: 2, col: 1, stripSize: 14, boxSize: 70 },
  { name: "Olmetec", cabinet: "A", row: 2, col: 2, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Ferrum", cabinet: "A", row: 2, col: 3, stripSize: 10 },
  { name: "Singulair 10mg", cabinet: "A", row: 2, col: 4, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Algitab", cabinet: "A", row: 2, col: 5, stripSize: 12, boxSize: 84 },
  { name: "SOLAXIN", cabinet: "A", row: 3, col: 1, stripSize: 10 },
  { name: "Jardiance 25mg", cabinet: "A", row: 3, col: 2, stripSize: 10 },
  { name: "Diphenidol", cabinet: "A", row: 3, col: 3, stripSize: 10 },
  { name: "Zoloft", cabinet: "A", row: 3, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Amoxicillin", cabinet: "A", row: 3, col: 5, stripSize: 10 },
  { name: "Effexor", cabinet: "A", row: 3, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Folic acid", cabinet: "A", row: 4, col: 1, stripSize: 10 },
  { name: "Predonine", cabinet: "A", row: 4, col: 2, stripSize: 10 },
  { name: "Xyzal", cabinet: "A", row: 4, col: 3, stripSize: 10 },
  { name: "Naposin", cabinet: "A", row: 4, col: 4, stripSize: 10 },
  { name: "糖 Carlipin", cabinet: "A", row: 4, col: 5, stripSize: 10 },
  { name: "Nexium", cabinet: "A", row: 5, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Lipanthyl", cabinet: "A", row: 5, col: 2, stripSize: 10 },
  { name: "Baraclude 0.5mg", cabinet: "A", row: 5, col: 3, stripSize: 10 },
  { name: "CellCept", cabinet: "A", row: 5, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Prograf 1mg", cabinet: "A", row: 5, col: 5, isBox: true, stripSize: 10, boxSize: 50 },
  { name: "Zyprexa", cabinet: "A", row: 5, col: 6, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Natrilix", cabinet: "A", row: 6, col: 1, stripSize: 10 },
  { name: "Qtern", cabinet: "A", row: 6, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Lyrica", cabinet: "A", row: 6, col: 3, isBox: true, stripSize: 14, boxSize: 56 },
  { name: "Nacid", cabinet: "A", row: 6, col: 6, stripSize: 10, boxSize: 100 },

  // ========== J 櫃 ==========
  // 抽屜 1
  { name: "Myfortic", cabinet: "J", section: "drawer1", row: 1, col: 1, rowSpan: 2, stripSize: 10, boxSize: 120 },
  { name: "Sulpin 200mg", cabinet: "J", section: "drawer1", row: 1, col: 2, stripSize: 10 },
  { name: "Akinfree", cabinet: "J", section: "drawer1", row: 1, col: 3, stripSize: 10 },
  { name: "ESTRADE", cabinet: "J", section: "drawer1", row: 2, col: 2, stripSize: 10 },
  { name: "Wecoli", cabinet: "J", section: "drawer1", row: 2, col: 3, stripSize: 10 },
  { name: "Catapress", cabinet: "J", section: "drawer1", row: 3, col: 1, stripSize: 10 },
  { name: "PLAQUENIL", cabinet: "J", section: "drawer1", row: 3, col: 2, unit: "束", rowSpan: 2, stripSize: 15, boxSize: 56 },
  { name: "Colian", cabinet: "J", section: "drawer1", row: 4, col: 1, stripSize: 10 },
  // 抽屜 2
  { name: "Vimpat", cabinet: "J", section: "drawer2", row: 1, col: 1, rowSpan: 2, stripSize: 14, boxSize: 56 },
  { name: "Fycompa", cabinet: "J", section: "drawer2", row: 1, col: 2, rowSpan: 2, stripSize: 14 },
  { name: "Catilon", cabinet: "J", section: "drawer2", row: 1, col: 3, rowSpan: 2, stripSize: 21 },
  { name: "Cinnazine", cabinet: "J", section: "drawer2", row: 3, col: 1, stripSize: 10 },
  { name: "Advagraf 1mg", cabinet: "J", section: "drawer2", row: 3, col: 2, stripSize: 10 },
  { name: "Splotin 50mg", cabinet: "J", section: "drawer2", row: 3, col: 3, stripSize: 10 },
  { name: "Doxymycin", cabinet: "J", section: "drawer2", row: 4, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Takepron", cabinet: "J", section: "drawer2", row: 4, col: 2, rowSpan: 2, stripSize: 14 },
  { name: "Mopride", cabinet: "J", section: "drawer2", row: 4, col: 3, rowSpan: 2, stripSize: 21 },

  // ========== I 櫃 ==========
  // 抽屜 1
  { name: "Azilect", cabinet: "I", section: "drawer1", row: 1, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Doxaben 2mg", cabinet: "I", section: "drawer1", row: 1, col: 2, rowSpan: 2, stripSize: 10 },
  { name: "Denosin", cabinet: "I", section: "drawer1", row: 1, col: 3, rowSpan: 3, stripSize: 10 },
  { name: "Suzin", cabinet: "I", section: "drawer1", row: 3, col: 1, stripSize: 10 },
  { name: "Sigmart", cabinet: "I", section: "drawer1", row: 3, col: 2, stripSize: 10 },
  { name: "Concor 5", cabinet: "I", section: "drawer1", row: 4, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Sandel", cabinet: "I", section: "drawer1", row: 4, col: 2, rowSpan: 2, stripSize: 10 },
  { name: "Herbesser", cabinet: "I", section: "drawer1", row: 4, col: 3, rowSpan: 2, stripSize: 10 },
  // 抽屜 2
  { name: "Calcium Carbonate", cabinet: "I", section: "drawer2", row: 1, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Rytmonorm", cabinet: "I", section: "drawer2", row: 1, col: 2, rowSpan: 2, stripSize: 10 },
  { name: "Meletin", cabinet: "I", section: "drawer2", row: 1, col: 3, rowSpan: 2, stripSize: 10 },
  { name: "Avodart", cabinet: "I", section: "drawer2", row: 3, col: 1, stripSize: 10 },
  { name: "U-Ca", cabinet: "I", section: "drawer2", row: 3, col: 2, rowSpan: 2, stripSize: 10 },
  { name: "Femara", cabinet: "I", section: "drawer2", row: 3, col: 3, stripSize: 10 },
  { name: "Pletaal", cabinet: "I", section: "drawer2", row: 4, col: 1, stripSize: 10 },
  { name: "Alfacalcidol", cabinet: "I", section: "drawer2", row: 4, col: 3, rowSpan: 2, stripSize: 10 },
  { name: "Midorine", cabinet: "I", section: "drawer2", row: 5, col: 1, stripSize: 10 },
  { name: "Xarelto 10mg", cabinet: "I", section: "drawer2", row: 5, col: 2, stripSize: 10 },

  // ========== H 櫃 ==========
  // 抽屜 1
  { name: "Cofarin 1mg", cabinet: "H", section: "drawer1", row: 1, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Antiasth", cabinet: "H", section: "drawer1", row: 1, col: 2, rowSpan: 2, stripSize: 6 },
  { name: "Eliquis", cabinet: "H", section: "drawer1", row: 1, col: 3, rowSpan: 2, stripSize: 14 },
  { name: "Baktar", cabinet: "H", section: "drawer1", row: 3, col: 1, stripSize: 10 },
  { name: "Cordarone", cabinet: "H", section: "drawer1", row: 3, col: 2, rowSpan: 2, stripSize: 15 },
  { name: "Meptin", cabinet: "H", section: "drawer1", row: 3, col: 3, stripSize: 10 },
  { name: "Cephalexin", cabinet: "H", section: "drawer1", row: 4, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Userm", cabinet: "H", section: "drawer1", row: 4, col: 3, stripSize: 10 },
  { name: "Colchicine", cabinet: "H", section: "drawer1", row: 5, col: 2, stripSize: 10 },
  { name: "Allegra", cabinet: "H", section: "drawer1", row: 5, col: 3, stripSize: 10 },
  // 抽屜 2
  { name: "Glunormal", cabinet: "H", section: "drawer2", row: 1, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Aleviatin", cabinet: "H", section: "drawer2", row: 1, col: 2, rowSpan: 2, stripSize: 21 },
  { name: "Glyxambi", cabinet: "H", section: "drawer2", row: 1, col: 3, rowSpan: 2, stripSize: 10 },
  { name: "Aspirin", cabinet: "H", section: "drawer2", row: 3, col: 1, stripSize: 10 },
  { name: "Tofranil 25mg", cabinet: "H", section: "drawer2", row: 3, col: 2, stripSize: 10 },
  { name: "Acemet", cabinet: "H", section: "drawer2", row: 3, col: 3, stripSize: 10 },
  { name: "Mobicam", cabinet: "H", section: "drawer2", row: 4, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Actos", cabinet: "H", section: "drawer2", row: 4, col: 2, rowSpan: 2, stripSize: 10 },
  { name: "Repaglinide", cabinet: "H", section: "drawer2", row: 4, col: 3, rowSpan: 2, stripSize: 21 },

  // ========== G 櫃 ==========
  // 抽屜 1
  { name: "Secorin", cabinet: "G", section: "drawer1", row: 1, col: 1, unit: "束", rowSpan: 2, stripSize: 10, boxSize: 100 },
  { name: "Lexotan", cabinet: "G", section: "drawer1", row: 1, col: 2, unit: "束", rowSpan: 2, stripSize: 10, boxSize: 200 },
  { name: "Utraphen", cabinet: "G", section: "drawer1", row: 1, col: 3, unit: "束", rowSpan: 2, stripSize: 10, boxSize: 100 },
  { name: "Lendormin", cabinet: "G", section: "drawer1", row: 3, col: 1, unit: "束", stripSize: 10, boxSize: 100 },
  { name: "Rivotril", cabinet: "G", section: "drawer1", row: 3, col: 2, unit: "束", rowSpan: 2, stripSize: 10, boxSize: 240 },
  { name: "Stilnox", cabinet: "G", section: "drawer1", row: 3, col: 3, unit: "束", stripSize: 14, boxSize: 280 },
  { name: "Ativan", cabinet: "G", section: "drawer1", row: 4, col: 1, unit: "束", rowSpan: 2, stripSize: 10, boxSize: 100 },
  { name: "Alpraline", cabinet: "G", section: "drawer1", row: 4, col: 3, unit: "束", rowSpan: 2, stripSize: 10, boxSize: 100 },
  { name: "Eurodin", cabinet: "G", section: "drawer1", row: 5, col: 2, unit: "束", stripSize: 10, boxSize: 100 },
  // 抽屜 2
  { name: "Epram", cabinet: "G", section: "drawer2", row: 1, col: 1, stripSize: 10 },
  { name: "Duxetine", cabinet: "G", section: "drawer2", row: 1, col: 2, stripSize: 14 },
  { name: "Mirapex 1mg", cabinet: "G", section: "drawer2", row: 1, col: 3, stripSize: 10 },
  { name: "Sirdalud", cabinet: "G", section: "drawer2", row: 2, col: 1, stripSize: 10 },
  { name: "Mesyrel", cabinet: "G", section: "drawer2", row: 2, col: 2, stripSize: 10 },
  { name: "Valdoxan", cabinet: "G", section: "drawer2", row: 2, col: 3, stripSize: 14, boxSize: 28 },
  { name: "Seroquel 25mg", cabinet: "G", section: "drawer2", row: 3, col: 1, stripSize: 10 },
  { name: "Abilify", cabinet: "G", section: "drawer2", row: 3, col: 2, stripSize: 10 },
  { name: "Apa-Mirtazapine", cabinet: "G", section: "drawer2", row: 3, col: 3, rowSpan: 2, stripSize: 10 },
  { name: "Tofranil 10mg", cabinet: "G", section: "drawer2", row: 4, col: 1, stripSize: 10 },
  { name: "Clozaril", cabinet: "G", section: "drawer2", row: 4, col: 2, stripSize: 10 },

  // ========== F 櫃 ==========
  // 左門
  { name: "Pacrea", cabinet: "F", section: "doorL", row: 1, col: 1, isBox: true, stripSize: 1, boxSize: 100 },
  // 抽屜 1
  { name: "Seroquel XR 200 mg/tab", cabinet: "F", section: "drawer1", row: 1, col: 1, rowSpan: 4, stripSize: 10 },
  { name: "Isoptin SR", cabinet: "F", section: "drawer1", row: 1, col: 2, rowSpan: 2, stripSize: 15 },
  { name: "Syntam", cabinet: "F", section: "drawer1", row: 1, col: 3, rowSpan: 3, stripSize: 10 },
  { name: "Dosin", cabinet: "F", section: "drawer1", row: 3, col: 2, stripSize: 10 },
  { name: "Keppra FC 500 mg/tab", cabinet: "F", section: "drawer1", row: 4, col: 2, rowSpan: 2, stripSize: 10 },
  { name: "Methylcobal", cabinet: "F", section: "drawer1", row: 4, col: 3, rowSpan: 3, stripSize: 10 },
  { name: "Nolvadex", cabinet: "F", section: "drawer1", row: 5, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Uroso", cabinet: "F", section: "drawer1", row: 6, col: 2, stripSize: 10 },
  // 抽屜 2
  { name: "Procal", cabinet: "F", section: "drawer2", row: 1, col: 1, rowSpan: 3, stripSize: 10 },
  { name: "LAMICTAL", cabinet: "F", section: "drawer2", row: 1, col: 2, rowSpan: 2, stripSize: 15 },
  { name: "Depakine", cabinet: "F", section: "drawer2", row: 1, col: 3, unit: "罐", rowSpan: 4, stripSize: 1, boxSize: 28 },
  { name: "Sinemet 100#", cabinet: "F", section: "drawer2", row: 3, col: 2, stripSize: 1, boxSize: 100 },
  { name: "Salazine", cabinet: "F", section: "drawer2", row: 4, col: 1, unit: "包", rowSpan: 2, stripSize: 1, boxSize: 28 },
  { name: "Madopar", cabinet: "F", section: "drawer2", row: 4, col: 2, rowSpan: 2, stripSize: 1, boxSize: 21 },

  // ========== E 櫃 ==========
  // 抽屜 1
  { name: "Neuquinon", cabinet: "E", section: "drawer1", row: 1, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Atanaal 5mg", cabinet: "E", section: "drawer1", row: 1, col: 2, rowSpan: 2, stripSize: 10 },
  { name: "Sandimmun 25 mg", cabinet: "E", section: "drawer1", row: 1, col: 3, rowSpan: 3, stripSize: 5, boxSize: 50 },
  { name: "Nitrostat Sub.", cabinet: "E", section: "drawer1", row: 3, col: 1, stripSize: 1 },
  { name: "Stable 25 mg", cabinet: "E", section: "drawer1", row: 3, col: 2, stripSize: 10 },
  { name: "Ginkgocentrate", cabinet: "E", section: "drawer1", row: 4, col: 1, rowSpan: 2, stripSize: 10 },
  { name: "Folina", cabinet: "E", section: "drawer1", row: 4, col: 2, stripSize: 10 },
  { name: "Votan", cabinet: "E", section: "drawer1", row: 5, col: 2, stripSize: 10 },
  { name: "Imolex", cabinet: "E", section: "drawer1", row: 5, col: 3, rowSpan: 2, stripSize: 10 },
  { name: "Visanne", cabinet: "E", section: "drawer1", row: 6, col: 1, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Utrogestan", cabinet: "E", section: "drawer1", row: 6, col: 2, stripSize: 15 },
  // 抽屜 2
  { name: "Foxone", cabinet: "E", section: "drawer2", row: 1, col: 1, stripSize: 1 },
  { name: "O.N.S.D.", cabinet: "E", section: "drawer2", row: 1, col: 2, stripSize: 1 },
  { name: "Comtan", cabinet: "E", section: "drawer2", row: 1, col: 3, stripSize: 1, boxSize: 30 },
  { name: "Artelac", cabinet: "E", section: "drawer2", row: 2, col: 1, rowSpan: 2, stripSize: 1 },
  { name: "Methacin gel", cabinet: "E", section: "drawer2", row: 2, col: 2, stripSize: 1 },
  { name: "Rinderon-V", cabinet: "E", section: "drawer2", row: 4, col: 1, stripSize: 1 },
  { name: "Nincort", cabinet: "E", section: "drawer2", row: 4, col: 3, stripSize: 1 },
  { name: "Sinomin", cabinet: "E", section: "drawer2", row: 5, col: 1, stripSize: 1 },
  { name: "Tetracycline", cabinet: "E", section: "drawer2", row: 5, col: 2, stripSize: 1 },
  { name: "C.B. Strong", cabinet: "E", section: "drawer2", row: 5, col: 3, stripSize: 1 },

  // ========== 桌面區 ==========
  { name: "Biocal", cabinet: "Desktop", row: 1, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Coxine", cabinet: "Desktop", row: 1, col: 2, stripSize: 14, boxSize: 100 },
  { name: "Sennapur", cabinet: "Desktop", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Loditon", cabinet: "Desktop", row: 1, col: 4, stripSize: 10, boxSize: 100 },
  { name: "HARNALIDGE", cabinet: "Desktop", row: 1, col: 5, stripSize: 14, boxSize: 100 },

];

// ==================== 變更歷程 ====================
// 以下為後台編輯紀錄，供追蹤參考
// [2026/2/13 下午3:52:52] 移動: 「DOXABEN XL 4MG」C 櫃 第1行 第6列 → C 櫃 第1行 第5列
// [2026/2/13 下午3:52:58] 編輯: 「DOXABEN XL 4MG」 @ C 櫃 第1行 第5列
// [2026/2/13 下午3:53:44] 移動: 「Celebrex」B 櫃 第1行 第3列 → B 櫃 第1行 第2列
// [2026/2/13 下午3:53:48] 編輯: 「Celebrex」 @ B 櫃 第1行 第2列
// [2026/2/13 下午3:53:53] 移動: 「Crestor」B 櫃 第1行 第6列 → B 櫃 第1行 第5列
// [2026/2/13 下午3:54:01] 編輯: 「Crestor」 @ B 櫃 第1行 第5列
// [2026/2/13 下午3:54:12] 移動: 「Diovan 160mg」B 櫃 第2行 第2列 → B 櫃 第2行 第1列
// [2026/2/13 下午3:54:16] 編輯: 「Diovan 160mg」 @ B 櫃 第2行 第1列
// [2026/2/13 下午3:54:23] 移動: 「Lipitor」B 櫃 第3行 第5列 → B 櫃 第3行 第4列
// [2026/2/13 下午3:54:26] 編輯: 「Lipitor」 @ B 櫃 第3行 第4列
// [2026/2/13 下午3:54:38] 移動: 「Oxbu」B 櫃 第5行 第6列 → B 櫃 第5行 第7列
// [2026/2/13 下午3:54:39] 移動: 「Kascoal」B 櫃 第5行 第5列 → B 櫃 第5行 第6列
// [2026/2/13 下午3:54:39] 移動: 「Vit. B C 28#」B 櫃 第5行 第4列 → B 櫃 第5行 第5列
// [2026/2/13 下午3:54:41] 移動: 「新 Pronolol」B 櫃 第5行 第3列 → B 櫃 第5行 第4列
// [2026/2/13 下午3:54:43] 移動: 「MgO 28#」B 櫃 第5行 第2列 → B 櫃 第5行 第3列
// [2026/2/13 下午3:54:44] 移動: 「Regrow SR」B 櫃 第5行 第1列 → B 櫃 第5行 第2列
// [2026/2/13 下午3:55:00] 新增: 「Synorid」 @ B 櫃 第5行 第1列
// [2026/2/13 下午3:55:04] 編輯: 「Synorid」 @ B 櫃 第5行 第1列
// [2026/2/13 下午3:55:38] 編輯: 「Effexor 75」 → 「Effexor」 @ A 櫃 第3行 第6列
// [2026/2/13 下午3:56:11] 移除: 「Lescol XL」 @ A 櫃 第4行 第6列
// [2026/2/13 下午3:57:00] 編輯: 「Neuquinon」 @ E 櫃 抽屜 1 第1行 第1列
// [2026/2/13 下午3:57:04] 編輯: 「Atanaal 5mg」 @ E 櫃 抽屜 1 第1行 第2列
// [2026/2/13 下午3:57:08] 編輯: 「Sandimmun Neoral 25 mg/cap」 @ E 櫃 抽屜 1 第1行 第3列
// [2026/2/13 下午3:57:11] 移動: 「Imolex」E 櫃 抽屜 1 第4行 第3列 → E 櫃 抽屜 1 第5行 第3列
// [2026/2/13 下午3:57:14] 移動: 「Imolex」E 櫃 抽屜 1 第5行 第3列 → E 櫃 抽屜 1 第4行 第3列
// [2026/2/13 下午3:57:21] 移動: 「Imolex」E 櫃 抽屜 1 第4行 第3列 → E 櫃 抽屜 1 第5行 第3列
// [2026/2/13 下午3:57:24] 編輯: 「Sandimmun Neoral 25 mg/cap」 @ E 櫃 抽屜 1 第1行 第3列
// [2026/2/13 下午3:57:38] 編輯: 「Ginkgocentrate」 @ E 櫃 抽屜 1 第4行 第1列
// [2026/2/13 下午3:57:45] 移動: 「Imolex」E 櫃 抽屜 1 第5行 第3列 → E 櫃 抽屜 1 第4行 第3列
// [2026/2/13 下午3:57:49] 移動: 「Imolex」E 櫃 抽屜 1 第4行 第3列 → E 櫃 抽屜 1 第5行 第3列
// [2026/2/13 下午3:57:53] 編輯: 「Imolex」 @ E 櫃 抽屜 1 第5行 第3列
// [2026/2/13 下午3:58:07] 編輯: 「Stable 25 mg/tab」 → 「Stable 25 mg」 @ E 櫃 抽屜 1 第3行 第2列
// [2026/2/13 下午3:58:34] 編輯: 「Sandimmun Neoral 25 mg/cap」 → 「Sandimmun 25 mg」 @ E 櫃 抽屜 1 第1行 第3列
// [2026/2/13 下午3:58:47] 編輯: 「Foxone oph.」 → 「Foxone」 @ E 櫃 抽屜 2 第1行 第1列
// [2026/2/13 下午3:58:53] 編輯: 「Artelac oph.」 → 「Artelac」 @ E 櫃 抽屜 2 第2行 第1列
// [2026/2/13 下午3:59:19] 編輯: 「Artelac」 @ E 櫃 抽屜 2 第2行 第1列
// [2026/2/13 下午3:59:40] 編輯: 「Sinomin oph.」 → 「Sinomin」 @ E 櫃 抽屜 2 第5行 第1列
// [2026/2/13 下午3:59:58] 編輯: 「Tetracycline oph」 → 「Tetracycline」 @ E 櫃 抽屜 2 第5行 第2列
// [2026/2/13 下午4:00:37] 編輯: 「Seroquel XR 200 mg/tab」 @ F 櫃 抽屜 1 第1行 第1列
// [2026/2/13 下午4:00:40] 編輯: 「Nolvadex」 @ F 櫃 抽屜 1 第5行 第1列
// [2026/2/13 下午4:00:43] 編輯: 「Isoptin SR」 @ F 櫃 抽屜 1 第1行 第2列
// [2026/2/13 下午4:00:50] 編輯: 「Keppra FC 500 mg/tab」 @ F 櫃 抽屜 1 第4行 第2列
// [2026/2/13 下午4:01:05] 編輯: 「Syntam」 @ F 櫃 抽屜 1 第1行 第3列
// [2026/2/13 下午4:01:09] 編輯: 「Methylcobal」 @ F 櫃 抽屜 1 第4行 第3列
// [2026/2/13 下午4:01:18] 移動: 「Salazine」F 櫃 抽屜 2 第3行 第1列 → F 櫃 抽屜 2 第4行 第1列
// [2026/2/13 下午4:01:25] 編輯: 「Procal」 @ F 櫃 抽屜 2 第1行 第1列
// [2026/2/13 下午4:01:30] 編輯: 「Salazine」 @ F 櫃 抽屜 2 第4行 第1列
// [2026/2/13 下午4:01:33] 編輯: 「Madopar」 @ F 櫃 抽屜 2 第4行 第2列
// [2026/2/13 下午4:01:39] 移動: 「Sinemet 100#」F 櫃 抽屜 2 第2行 第2列 → F 櫃 抽屜 2 第3行 第2列
// [2026/2/13 下午4:01:42] 編輯: 「LAMICTAL」 @ F 櫃 抽屜 2 第1行 第2列
// [2026/2/13 下午4:01:48] 編輯: 「Depakine」 @ F 櫃 抽屜 2 第1行 第3列
// [2026/2/13 下午4:02:11] 編輯: 「Secorin」 @ G 櫃 抽屜 1 第1行 第1列
// [2026/2/13 下午4:02:14] 編輯: 「Lexotan」 @ G 櫃 抽屜 1 第1行 第2列
// [2026/2/13 下午4:02:17] 編輯: 「Utraphen」 @ G 櫃 抽屜 1 第1行 第3列
// [2026/2/13 下午4:02:21] 編輯: 「Rivotril」 @ G 櫃 抽屜 1 第3行 第2列
// [2026/2/13 下午4:02:23] 移動: 「Alpraline」G 櫃 抽屜 1 第5行 第3列 → G 櫃 抽屜 1 第4行 第3列
// [2026/2/13 下午4:02:26] 編輯: 「Alpraline」 @ G 櫃 抽屜 1 第4行 第3列
// [2026/2/13 下午4:03:14] 移除: 「Lendormin」 @ H 櫃 抽屜 1 第2行 第3列
// [2026/2/13 下午4:03:27] 新增: 「Lendormin」 @ G 櫃 抽屜 1 第3行 第1列
// [2026/2/13 下午4:03:31] 編輯: 「Ativan」 @ G 櫃 抽屜 1 第4行 第1列
// [2026/2/13 下午4:03:51] 移除: 「Epram」 @ H 櫃 抽屜 2 第1行 第3列
// [2026/2/13 下午4:03:54] 移除: 「Valdoxan」 @ H 櫃 抽屜 2 第2行 第3列
// [2026/2/13 下午4:03:56] 移除: 「Abilify」 @ H 櫃 抽屜 2 第3行 第3列
// [2026/2/13 下午4:03:59] 移除: 「Apa-Mirtazapine ODT」 @ H 櫃 抽屜 2 第4行 第3列
// [2026/2/13 下午4:04:01] 移除: 「Clozaril」 @ H 櫃 抽屜 2 第5行 第3列
// [2026/2/13 下午4:04:05] 移除: 「Seroquel 25mg」 @ H 櫃 抽屜 2 第3行 第2列
// [2026/2/13 下午4:04:08] 移除: 「Mesyrel」 @ H 櫃 抽屜 2 第2行 第2列
// [2026/2/13 下午4:04:13] 移除: 「Cymbalta」 @ H 櫃 抽屜 2 第4行 第1列
// [2026/2/13 下午4:04:21] 新增: 「Epram」 @ G 櫃 抽屜 2 第1行 第1列
// [2026/2/13 下午4:04:38] 移除: 「Sirdalud」 @ H 櫃 抽屜 2 第2行 第1列
// [2026/2/13 下午4:04:46] 新增: 「Sirdalud」 @ G 櫃 抽屜 2 第2行 第1列
// [2026/2/13 下午4:04:56] 新增: 「Seroquel 25mg」 @ G 櫃 抽屜 2 第3行 第1列
// [2026/2/13 下午4:05:10] 移除: 「Tofranil 10mg」 @ H 櫃 抽屜 2 第4行 第2列
// [2026/2/13 下午4:05:24] 新增: 「Tofranil 10mg」 @ G 櫃 抽屜 2 第4行 第1列
// [2026/2/13 下午4:05:32] 新增: 「Clozaril」 @ G 櫃 抽屜 2 第4行 第2列
// [2026/2/13 下午4:05:37] 新增: 「Abilify」 @ G 櫃 抽屜 2 第3行 第2列
// [2026/2/13 下午4:05:44] 新增: 「Mesyrel」 @ G 櫃 抽屜 2 第2行 第2列
// [2026/2/13 下午4:06:01] 編輯: 「Advagraf 1mg (G)」 → 「Duxetine」 @ G 櫃 抽屜 2 第1行 第2列
// [2026/2/13 下午4:06:08] 編輯: 「Mirapex 1mg」 @ G 櫃 抽屜 2 第1行 第3列
// [2026/2/13 下午4:06:18] 新增: 「Valdoxan」 @ G 櫃 抽屜 2 第2行 第3列
// [2026/2/13 下午4:06:29] 新增: 「Apa-Mirtazapine」 @ G 櫃 抽屜 2 第3行 第3列
// [2026/2/13 下午4:06:32] 編輯: 「Apa-Mirtazapine」 @ G 櫃 抽屜 2 第3行 第3列
// [2026/2/13 下午4:06:46] 移動: 「Cephalexin」H 櫃 抽屜 1 第3行 第1列 → H 櫃 抽屜 1 第4行 第1列
// [2026/2/13 下午4:06:47] 移動: 「Baktar」H 櫃 抽屜 1 第2行 第1列 → H 櫃 抽屜 1 第3行 第1列
// [2026/2/13 下午4:06:51] 編輯: 「Cofarin 1mg」 @ H 櫃 抽屜 1 第1行 第1列
// [2026/2/13 下午4:06:54] 編輯: 「Cephalexin」 @ H 櫃 抽屜 1 第4行 第1列
// [2026/2/13 下午4:07:00] 移動: 「Meptin」H 櫃 抽屜 1 第2行 第2列 → H 櫃 抽屜 1 第2行 第3列
// [2026/2/13 下午4:07:05] 編輯: 「Antiasth」 @ H 櫃 抽屜 1 第1行 第2列
// [2026/2/13 下午4:07:08] 編輯: 「Cordarone」 @ H 櫃 抽屜 1 第3行 第2列
// [2026/2/13 下午4:07:10] 移動: 「Userm」H 櫃 抽屜 1 第3行 第3列 → H 櫃 抽屜 1 第4行 第3列
// [2026/2/13 下午4:07:11] 移動: 「Meptin」H 櫃 抽屜 1 第2行 第3列 → H 櫃 抽屜 1 第3行 第3列
// [2026/2/13 下午4:07:16] 編輯: 「Eliquis」 @ H 櫃 抽屜 1 第1行 第3列
// [2026/2/13 下午4:07:22] 編輯: 「Antiasth」 @ H 櫃 抽屜 1 第1行 第2列
// [2026/2/13 下午4:07:27] 編輯: 「Cordarone」 @ H 櫃 抽屜 1 第3行 第2列
// [2026/2/13 下午4:07:31] 編輯: 「Cephalexin」 @ H 櫃 抽屜 1 第4行 第1列
// [2026/2/13 下午4:07:34] 編輯: 「Baktar」 @ H 櫃 抽屜 1 第3行 第1列
// [2026/2/13 下午4:07:38] 編輯: 「Cofarin 1mg」 @ H 櫃 抽屜 1 第1行 第1列
// [2026/2/13 下午4:07:41] 編輯: 「Meptin」 @ H 櫃 抽屜 1 第3行 第3列
// [2026/2/13 下午4:07:44] 編輯: 「Userm」 @ H 櫃 抽屜 1 第4行 第3列
// [2026/2/13 下午4:08:06] 移除: 「Allegra」 @ I 櫃 抽屜 1 第4行 第2列
// [2026/2/13 下午4:08:13] 新增: 「Allegra」 @ H 櫃 抽屜 1 第5行 第3列
// [2026/2/13 下午4:08:29] 移動: 「Glyxambi」H 櫃 抽屜 2 第1行 第2列 → H 櫃 抽屜 2 第1行 第3列
// [2026/2/13 下午4:08:30] 移動: 「Aleviatin」H 櫃 抽屜 2 第1行 第1列 → H 櫃 抽屜 2 第1行 第2列
// [2026/2/13 下午4:08:33] 編輯: 「Aleviatin」 @ H 櫃 抽屜 2 第1行 第2列
// [2026/2/13 下午4:08:37] 編輯: 「Glyxambi」 @ H 櫃 抽屜 2 第1行 第3列
// [2026/2/13 下午4:08:41] 編輯: 「Aleviatin」 @ H 櫃 抽屜 2 第1行 第2列
// [2026/2/13 下午4:08:44] 編輯: 「Glyxambi」 @ H 櫃 抽屜 2 第1行 第3列
// [2026/2/13 下午4:09:08] 移除: 「Glunormal」 @ I 櫃 抽屜 2 第4行 第1列
// [2026/2/13 下午4:09:15] 移除: 「Acemet」 @ I 櫃 抽屜 2 第4行 第2列
// [2026/2/13 下午4:09:21] 移除: 「Actos」 @ I 櫃 抽屜 2 第4行 第3列
// [2026/2/13 下午4:09:24] 移除: 「Repaglinide」 @ I 櫃 抽屜 2 第5行 第3列
// [2026/2/13 下午4:09:45] 移除: 「Tofranil 25mg」 @ I 櫃 抽屜 2 第2行 第3列
// [2026/2/13 下午4:09:57] 移除: 「Mobicam」 @ I 櫃 抽屜 2 第3行 第3列
// [2026/2/23 下午3:32:00] 編輯: 「Cephalexin」 @ H 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:32:02] 移動: 「Cephalexin」H 櫃 抽屜 1 第4行 第1列 → H 櫃 抽屜 1 第6行 第1列
// [2026/2/23 下午3:32:04] 移動: 「Cephalexin」H 櫃 抽屜 1 第6行 第1列 → H 櫃 抽屜 1 第5行 第1列
// [2026/2/23 下午3:32:21] 移動: 「Baktar」H 櫃 抽屜 1 第3行 第1列 → H 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:32:30] 移動: 「Baktar」H 櫃 抽屜 1 第4行 第1列 → H 櫃 抽屜 1 第3行 第1列
// [2026/2/23 下午3:32:31] 移動: 「Cephalexin」H 櫃 抽屜 1 第5行 第1列 → H 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:32:37] 編輯: 「Cephalexin」 @ H 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:33:03] 移除: 「Colchicine」 @ I 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:33:11] 新增: 「Colchicine」 @ H 櫃 抽屜 1 第5行 第2列
// [2026/2/23 下午3:36:11] 新增: 「Glunormal」 @ H 櫃 抽屜 2 第1行 第1列
// [2026/2/23 下午3:36:15] 編輯: 「Glunormal」 @ H 櫃 抽屜 2 第1行 第1列
// [2026/2/23 下午3:36:21] 編輯: 「Aleviatin」 @ H 櫃 抽屜 2 第1行 第2列
// [2026/2/23 下午3:36:24] 編輯: 「Glyxambi」 @ H 櫃 抽屜 2 第1行 第3列
// [2026/2/23 下午3:36:37] 移除: 「Aspirin」 @ I 櫃 抽屜 2 第2行 第2列
// [2026/2/23 下午3:36:48] 新增: 「Aspirin」 @ H 櫃 抽屜 2 第3行 第1列
// [2026/2/23 下午3:36:58] 新增: 「Mobicam」 @ H 櫃 抽屜 2 第4行 第1列
// [2026/2/23 下午3:37:01] 編輯: 「Mobicam」 @ H 櫃 抽屜 2 第4行 第1列
// [2026/2/23 下午3:37:46] 新增: 「Tofranil 25mg」 @ H 櫃 抽屜 2 第3行 第2列
// [2026/2/23 下午3:38:26] 新增: 「Actos」 @ H 櫃 抽屜 2 第4行 第2列
// [2026/2/23 下午3:38:36] 新增: 「Acemet」 @ H 櫃 抽屜 2 第3行 第3列
// [2026/2/23 下午3:39:02] 新增: 「Repaglinide」 @ H 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:39:22] 移動: 「Concor 5」I 櫃 抽屜 1 第3行 第1列 → I 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:39:23] 移動: 「Suzin」I 櫃 抽屜 1 第2行 第1列 → I 櫃 抽屜 1 第3行 第1列
// [2026/2/23 下午3:39:32] 編輯: 「Azilect」 @ I 櫃 抽屜 1 第1行 第1列
// [2026/2/23 下午3:39:38] 編輯: 「Suzin」 @ I 櫃 抽屜 1 第3行 第1列
// [2026/2/23 下午3:39:44] 編輯: 「Concor 5」 @ I 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:39:46] 移動: 「Sandel」I 櫃 抽屜 1 第3行 第2列 → I 櫃 抽屜 1 第4行 第2列
// [2026/2/23 下午3:39:47] 移動: 「Sigmart」I 櫃 抽屜 1 第2行 第2列 → I 櫃 抽屜 1 第3行 第2列
// [2026/2/23 下午3:39:52] 編輯: 「Doxaben 2mg」 @ I 櫃 抽屜 1 第1行 第2列
// [2026/2/23 下午3:39:59] 編輯: 「Sigmart」 @ I 櫃 抽屜 1 第3行 第2列
// [2026/2/23 下午3:40:06] 編輯: 「Sandel」 @ I 櫃 抽屜 1 第4行 第2列
// [2026/2/23 下午3:40:16] 編輯: 「Denosin」 @ I 櫃 抽屜 1 第1行 第3列
// [2026/2/23 下午3:40:24] 編輯: 「Herbesser」 @ I 櫃 抽屜 1 第3行 第3列
// [2026/2/23 下午3:40:31] 移除: 「Imovane」 @ I 櫃 抽屜 1 第4行 第3列
// [2026/2/23 下午3:40:32] 移動: 「Herbesser」I 櫃 抽屜 1 第3行 第3列 → I 櫃 抽屜 1 第4行 第3列
// [2026/2/23 下午3:40:44] 編輯: 「Denosin」 @ I 櫃 抽屜 1 第1行 第3列
// [2026/2/23 下午3:40:48] 編輯: 「Herbesser」 @ I 櫃 抽屜 1 第4行 第3列
// [2026/2/23 下午3:41:27] 移動: 「Xarelto 10mg」I 櫃 抽屜 2 第3行 第1列 → I 櫃 抽屜 2 第4行 第2列
// [2026/2/23 下午3:41:29] 移動: 「Alfacalcidol」I 櫃 抽屜 2 第3行 第2列 → I 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:42:05] 移動: 「Femara」I 櫃 抽屜 2 第2行 第1列 → I 櫃 抽屜 2 第3行 第3列
// [2026/2/23 下午3:42:08] 移動: 「Avodart」I 櫃 抽屜 2 第1行 第1列 → I 櫃 抽屜 2 第2行 第1列
// [2026/2/23 下午3:42:41] 移動: 「Avodart」I 櫃 抽屜 2 第2行 第1列 → I 櫃 抽屜 2 第3行 第1列
// [2026/2/23 下午3:42:49] 移除: 「Calcium Carbonate」 @ J 櫃 抽屜 2 第4行 第1列
// [2026/2/23 下午3:42:58] 移除: 「U-Ca」 @ J 櫃 抽屜 2 第4行 第2列
// [2026/2/23 下午3:43:03] 移除: 「Midorine」 @ J 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:43:34] 新增: 「Calcium Carbonate」 @ I 櫃 抽屜 2 第1行 第1列
// [2026/2/23 下午3:45:01] 移動: 「Xarelto 10mg」I 櫃 抽屜 2 第4行 第2列 → I 櫃 抽屜 2 第5行 第2列
// [2026/2/23 下午3:45:03] 移動: 「Alfacalcidol」I 櫃 抽屜 2 第4行 第3列 → I 櫃 抽屜 2 第5行 第3列
// [2026/2/23 下午3:45:04] 移動: 「Femara」I 櫃 抽屜 2 第3行 第3列 → I 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:45:13] 編輯: 「Rytmonorm」 @ I 櫃 抽屜 2 第1行 第2列
// [2026/2/23 下午3:45:19] 編輯: 「Meletin」 @ I 櫃 抽屜 2 第1行 第3列
// [2026/2/23 下午3:45:23] 編輯: 「Avodart」 @ I 櫃 抽屜 2 第3行 第1列
// [2026/2/23 下午3:45:43] 移除: 「Pletaal」 @ J 櫃 抽屜 2 第2行 第3列
// [2026/2/23 下午3:45:51] 新增: 「Pletaal」 @ I 櫃 抽屜 2 第4行 第1列
// [2026/2/23 下午3:45:59] 新增: 「Midorine」 @ I 櫃 抽屜 2 第5行 第1列
// [2026/2/23 下午3:46:06] 新增: 「U-Ca」 @ I 櫃 抽屜 2 第3行 第2列
// [2026/2/23 下午3:46:09] 編輯: 「U-Ca」 @ I 櫃 抽屜 2 第3行 第2列
// [2026/2/23 下午3:46:24] 移動: 「Femara」I 櫃 抽屜 2 第4行 第3列 → I 櫃 抽屜 2 第3行 第3列
// [2026/2/23 下午3:46:26] 編輯: 「Femara」 @ I 櫃 抽屜 2 第3行 第3列
// [2026/2/23 下午3:46:28] 移動: 「Alfacalcidol」I 櫃 抽屜 2 第5行 第3列 → I 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:46:37] 編輯: 「Alfacalcidol」 @ I 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:47:36] 編輯: 「Xarelto 10mg」 @ I 櫃 抽屜 2 第5行 第2列
// [2026/2/23 下午3:48:05] 編輯: 「Myfortic」 @ J 櫃 抽屜 1 第1行 第1列
// [2026/2/23 下午3:48:09] 編輯: 「Catapress」 @ J 櫃 抽屜 1 第3行 第1列
// [2026/2/23 下午3:48:17] 編輯: 「Colian」 @ J 櫃 抽屜 1 第4行 第1列
// [2026/2/23 下午3:48:30] 編輯: 「Sulpin 200mg」 @ J 櫃 抽屜 1 第1行 第2列
// [2026/2/23 下午3:48:34] 編輯: 「ESTRADE」 @ J 櫃 抽屜 1 第2行 第2列
// [2026/2/23 下午3:48:48] 編輯: 「PLAQUENIL」 @ J 櫃 抽屜 1 第3行 第2列
// [2026/2/23 下午3:48:57] 編輯: 「Akinfree」 @ J 櫃 抽屜 1 第1行 第3列
// [2026/2/23 下午3:49:02] 編輯: 「Wecoli」 @ J 櫃 抽屜 1 第2行 第3列
// [2026/2/23 下午3:49:20] 編輯: 「Vimpat」 @ J 櫃 抽屜 2 第1行 第1列
// [2026/2/23 下午3:50:19] 移動: 「Takepron」J 櫃 抽屜 2 第3行 第2列 → J 櫃 抽屜 2 第4行 第2列
// [2026/2/23 下午3:50:21] 移動: 「Advagraf 1mg」J 櫃 抽屜 2 第2行 第1列 → J 櫃 抽屜 2 第3行 第2列
// [2026/2/23 下午3:50:25] 移動: 「Splotin 50mg」J 櫃 抽屜 2 第2行 第2列 → J 櫃 抽屜 2 第2行 第3列
// [2026/2/23 下午3:50:32] 移動: 「Doxymycin」J 櫃 抽屜 2 第5行 第1列 → J 櫃 抽屜 2 第4行 第1列
// [2026/2/23 下午3:50:39] 編輯: 「Vimpat」 @ J 櫃 抽屜 2 第1行 第1列
// [2026/2/23 下午3:50:44] 編輯: 「Cinnazine」 @ J 櫃 抽屜 2 第3行 第1列
// [2026/2/23 下午3:50:53] 編輯: 「Doxymycin」 @ J 櫃 抽屜 2 第4行 第1列
// [2026/2/23 下午3:51:00] 編輯: 「Fycompa」 @ J 櫃 抽屜 2 第1行 第2列
// [2026/2/23 下午3:51:10] 編輯: 「Advagraf 1mg」 @ J 櫃 抽屜 2 第3行 第2列
// [2026/2/23 下午3:51:16] 編輯: 「Takepron」 @ J 櫃 抽屜 2 第4行 第2列
// [2026/2/23 下午3:51:20] 移動: 「Mopride」J 櫃 抽屜 2 第3行 第3列 → J 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:51:22] 移動: 「Splotin 50mg」J 櫃 抽屜 2 第2行 第3列 → J 櫃 抽屜 2 第3行 第3列
// [2026/2/23 下午3:51:34] 編輯: 「Mopride」 @ J 櫃 抽屜 2 第4行 第3列
// [2026/2/23 下午3:51:41] 編輯: 「Splotin 50mg」 @ J 櫃 抽屜 2 第3行 第3列
// [2026/2/23 下午3:51:48] 編輯: 「Catilon」 @ J 櫃 抽屜 2 第1行 第3列

// ==================== 意見回饋 ====================
// 圖片需要調整部分如下
// 1.(H1-1-1)Cofarin為1mg (圖片為5mg)
// 2.(H1-3-2)Cordarone為tablet (圖片為針劑)
// 3.(H2-3-2)Tofranil為25mg (圖片為10mg)
// 4.(I1-4-3)Herbesser為tablet (圖片為針劑)
// 5.(I2-1-1)Calcium Carbonate為0.5g/tab排裝 (圖片為罐裝藥品)
// 6.(J2-1-1)Vimpat無照片
