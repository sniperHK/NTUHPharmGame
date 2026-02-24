// drug_data.js -- 共用藥品資料庫
// 由 dispensing-game.html 與 admin.html 共同引用
// Last modified: 2026-02-10

// ==================== 櫃位結構設定 ====================
const cabinetConfig = {
  C: { type: "shelf", rows: 5, cols: 6, label: "C 櫃" },
  B: { type: "shelf", rows: 5, cols: 6, label: "B 櫃" },
  A: { type: "shelf", rows: 6, cols: 6, label: "A 櫃" },
  J: { type: 'drawer', label: "J 櫃", sections: {
    drawer1: { rows: 4, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 4, cols: 4, label: "抽屜 2" },
    doorL: { rows: 1, cols: 2, label: "左門" },
    doorR: { rows: 1, cols: 2, label: "右門" }
  }},
  I: { type: 'drawer', label: "I 櫃", sections: {
    drawer1: { rows: 4, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 3, cols: 5, label: "抽屜 2" },
    doorL: { rows: 1, cols: 2, label: "左門" },
    doorR: { rows: 1, cols: 2, label: "右門" }
  }},
  H: { type: 'drawer', label: "H 櫃", sections: {
    drawer1: { rows: 3, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 4, cols: 4, label: "抽屜 2" },
    doorL: { rows: 1, cols: 2, label: "左門" },
    doorR: { rows: 1, cols: 2, label: "右門" }
  }},
  G: { type: 'drawer', label: "G 櫃", sections: {
    drawer1: { rows: 3, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 1, cols: 2, label: "抽屜 2" },
    doorL: { rows: 1, cols: 2, label: "左門" },
    doorR: { rows: 1, cols: 2, label: "右門" }
  }},
  F: { type: 'drawer', label: "F 櫃", sections: {
    drawer1: { rows: 4, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 4, cols: 3, label: "抽屜 2" },
    doorL: { rows: 1, cols: 2, label: "左門" },
    doorR: { rows: 1, cols: 2, label: "右門" }
  }},
  E: { type: 'drawer', label: "E 櫃", sections: {
    drawer1: { rows: 4, cols: 3, label: "抽屜 1" },
    drawer2: { rows: 4, cols: 3, label: "抽屜 2" },
    doorL: { rows: 1, cols: 2, label: "左門" },
    doorR: { rows: 1, cols: 2, label: "右門" }
  }},
  Desktop: { type: "desktop", rows: 1, cols: 5, label: "桌面區" }
};

// ==================== 藥品資料庫 ====================
const drugDatabase = [
  // ========== C 櫃 ==========
  { name: "Lixiana 30mg", cabinet: "C", row: 1, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Pradaxa 110mg", cabinet: "C", row: 1, col: 2, stripSize: 10, boxSize: 60 },
  { name: "Zanidip", cabinet: "C", row: 1, col: 3, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Plavix", cabinet: "C", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "DOXABEN XL 4MG", cabinet: "C", row: 1, col: 6, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Requip 2mg", cabinet: "C", row: 2, col: 1, isBox: true, stripSize: 4, boxSize: 28 },
  { name: "Entresto 50mg", cabinet: "C", row: 2, col: 2, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Ateol", cabinet: "C", row: 2, col: 3, stripSize: 14, boxSize: undefined },
  { name: "Nifedipine 30mg", cabinet: "C", row: 2, col: 4, stripSize: 14, boxSize: undefined },
  { name: "COZAAR", cabinet: "C", row: 2, col: 5, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Bokey", cabinet: "C", row: 2, col: 6, stripSize: 28, boxSize: undefined },
  { name: "Youkoxia", cabinet: "C", row: 3, col: 1, stripSize: 7, boxSize: undefined },
  { name: "Arheuma", cabinet: "C", row: 3, col: 2, stripSize: 10, boxSize: undefined },
  { name: "EURICON", cabinet: "C", row: 3, col: 3, stripSize: 10, boxSize: undefined },
  { name: "Forflow SR", cabinet: "C", row: 3, col: 4, stripSize: 10, boxSize: undefined },
  { name: "Aldactone", cabinet: "C", row: 3, col: 5, stripSize: 10, boxSize: undefined },
  { name: "DILATREND 6.25mg", cabinet: "C", row: 3, col: 6, stripSize: 10, boxSize: undefined },
  { name: "Betmiga", cabinet: "C", row: 4, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Dexilant", cabinet: "C", row: 4, col: 2, isBox: true, stripSize: 7, boxSize: 14 },
  { name: "Urief", cabinet: "C", row: 4, col: 3, stripSize: 14, boxSize: undefined },
  { name: "Dulcolax", cabinet: "C", row: 4, col: 4, stripSize: 20, boxSize: undefined },
  { name: "Livalo", cabinet: "C", row: 4, col: 5, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Diamicron", cabinet: "C", row: 4, col: 6, stripSize: 30, boxSize: undefined },
  { name: "Biofermin", cabinet: "C", row: 5, col: 1, isBox: true, stripSize: 3, boxSize: 120 },
  { name: "Trileptal", cabinet: "C", row: 5, col: 4, stripSize: 10, boxSize: undefined },
  { name: "Januvia", cabinet: "C", row: 5, col: 5, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Promeran", cabinet: "C", row: 5, col: 6, stripSize: 10, boxSize: undefined },

  // ========== B 櫃 ==========
  { name: "Edarbi", cabinet: "B", row: 1, col: 1, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Celebrex", cabinet: "B", row: 1, col: 3, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Nebilet", cabinet: "B", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Crestor", cabinet: "B", row: 1, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Diovan 160mg", cabinet: "B", row: 2, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Acetal", cabinet: "B", row: 2, col: 3, stripSize: 10, boxSize: undefined },
  { name: "Lasix", cabinet: "B", row: 2, col: 4, stripSize: 15, boxSize: undefined },
  { name: "Exforge", cabinet: "B", row: 2, col: 5, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Aprovel 300mg", cabinet: "B", row: 2, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "MgO 56#", cabinet: "B", row: 3, col: 1, stripSize: 56, boxSize: undefined },
  { name: "Norvasc", cabinet: "B", row: 3, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Certican", cabinet: "B", row: 3, col: 3, stripSize: 10, boxSize: undefined },
  { name: "Lipitor", cabinet: "B", row: 3, col: 5, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Amaryl", cabinet: "B", row: 3, col: 6, stripSize: 15, boxSize: undefined },
  { name: "Fluitran", cabinet: "B", row: 4, col: 1, stripSize: 10, boxSize: undefined },
  { name: "Trajenta", cabinet: "B", row: 4, col: 2, stripSize: 10, boxSize: undefined },
  { name: "Strocain", cabinet: "B", row: 4, col: 3, stripSize: 10, boxSize: undefined },
  { name: "Musco", cabinet: "B", row: 4, col: 4, stripSize: 10, boxSize: undefined },
  { name: "Ezetrol", cabinet: "B", row: 4, col: 5, stripSize: 10, boxSize: undefined },
  { name: "Weimok", cabinet: "B", row: 4, col: 6, stripSize: 10, boxSize: undefined },
  { name: "Regrow SR", cabinet: "B", row: 5, col: 1, stripSize: 10, boxSize: 30 },
  { name: "MgO 28#", cabinet: "B", row: 5, col: 2, stripSize: 10, boxSize: 28 },
  { name: "新 Pronolol", cabinet: "B", row: 5, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Vit. B C 28#", cabinet: "B", row: 5, col: 4, stripSize: 10, boxSize: 28 },
  { name: "Kascoal", cabinet: "B", row: 5, col: 5, stripSize: 10, boxSize: undefined },
  { name: "Oxbu", cabinet: "B", row: 5, col: 6, stripSize: 14, boxSize: 100 },

  // ========== A 櫃 ==========
  { name: "Curam", cabinet: "A", row: 1, col: 1, isBox: true, stripSize: 2, boxSize: 14 },
  { name: "Amanda", cabinet: "A", row: 1, col: 2, stripSize: 10, boxSize: undefined },
  { name: "Feburic", cabinet: "A", row: 1, col: 3, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Forxiga", cabinet: "A", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Pariet", cabinet: "A", row: 1, col: 5, isBox: true, stripSize: 7, boxSize: 14 },
  { name: "Juxac", cabinet: "A", row: 1, col: 6, stripSize: 7, boxSize: undefined },
  { name: "Glucophage", cabinet: "A", row: 2, col: 1, stripSize: 14, boxSize: 70 },
  { name: "Olmetec", cabinet: "A", row: 2, col: 2, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Ferrum", cabinet: "A", row: 2, col: 3, stripSize: 10, boxSize: undefined },
  { name: "Singulair 10mg", cabinet: "A", row: 2, col: 4, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Algitab", cabinet: "A", row: 2, col: 5, stripSize: 12, boxSize: 84 },
  { name: "SOLAXIN", cabinet: "A", row: 3, col: 1, stripSize: 10, boxSize: undefined },
  { name: "Jardiance 25mg", cabinet: "A", row: 3, col: 2, stripSize: 10, boxSize: undefined },
  { name: "Diphenidol", cabinet: "A", row: 3, col: 3, stripSize: 10, boxSize: undefined },
  { name: "Zoloft", cabinet: "A", row: 3, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Amoxicillin", cabinet: "A", row: 3, col: 5, stripSize: 10, boxSize: undefined },
  { name: "Effexor 75", cabinet: "A", row: 3, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Folic acid", cabinet: "A", row: 4, col: 1, stripSize: 10, boxSize: undefined },
  { name: "Predonine", cabinet: "A", row: 4, col: 2, stripSize: 10, boxSize: undefined },
  { name: "Xyzal", cabinet: "A", row: 4, col: 3, stripSize: 10, boxSize: undefined },
  { name: "Naposin", cabinet: "A", row: 4, col: 4, stripSize: 10, boxSize: undefined },
  { name: "糖 Carlipin", cabinet: "A", row: 4, col: 5, stripSize: 10, boxSize: undefined },
  { name: "Lescol XL", cabinet: "A", row: 4, col: 6, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Nexium", cabinet: "A", row: 5, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Lipanthyl", cabinet: "A", row: 5, col: 2, stripSize: 10, boxSize: undefined },
  { name: "Baraclude 0.5mg", cabinet: "A", row: 5, col: 3, stripSize: 10, boxSize: undefined },
  { name: "CellCept", cabinet: "A", row: 5, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Prograf 1mg", cabinet: "A", row: 5, col: 5, isBox: true, stripSize: 10, boxSize: 50 },
  { name: "Zyprexa", cabinet: "A", row: 5, col: 6, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Natrilix", cabinet: "A", row: 6, col: 1, stripSize: 10, boxSize: undefined },
  { name: "Qtern", cabinet: "A", row: 6, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Lyrica", cabinet: "A", row: 6, col: 3, isBox: true, stripSize: 14, boxSize: 56 },
  { name: "Nacid", cabinet: "A", row: 6, col: 6, stripSize: 10, boxSize: 100 },

  // ========== J 櫃 ==========
  // 抽屜 1
  { name: "Myfortic", cabinet: "J", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 120 },
  { name: "Sulpin 200mg", cabinet: "J", section: "drawer1", row: 1, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Akinfree", cabinet: "J", section: "drawer1", row: 1, col: 3, stripSize: 10, boxSize: 30 },
  { name: "ESTRADE", cabinet: "J", section: "drawer1", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Wecoli", cabinet: "J", section: "drawer1", row: 2, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Catapress", cabinet: "J", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "PLAQUENIL", cabinet: "J", section: "drawer1", row: 3, col: 2, stripSize: 15, boxSize: 60 },
  { name: "Colian", cabinet: "J", section: "drawer1", row: 4, col: 1, stripSize: 10, boxSize: 100 },
  // 抽屜 2
  { name: "Vimpat", cabinet: "J", section: "drawer2", row: 1, col: 1, stripSize: 14, boxSize: 56 },
  { name: "Fycompa", cabinet: "J", section: "drawer2", row: 1, col: 2, stripSize: 14, boxSize: 100 },
  { name: "Catilon", cabinet: "J", section: "drawer2", row: 1, col: 3, stripSize: 21, boxSize: 100 },
  { name: "Calcium Carbonate", cabinet: "J", section: "drawer2", row: 1, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Advagraf 1mg", cabinet: "J", section: "drawer2", row: 2, col: 1, stripSize: 10, boxSize: 50 },
  { name: "Splotin 50mg", cabinet: "J", section: "drawer2", row: 2, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Pletaal", cabinet: "J", section: "drawer2", row: 2, col: 3, stripSize: 10, boxSize: 50 },
  { name: "U-Ca", cabinet: "J", section: "drawer2", row: 2, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Cinnazine", cabinet: "J", section: "drawer2", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Takepron", cabinet: "J", section: "drawer2", row: 3, col: 2, stripSize: 14, boxSize: 28 },
  { name: "Mopride", cabinet: "J", section: "drawer2", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Midorine", cabinet: "J", section: "drawer2", row: 3, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Doxymycin", cabinet: "J", section: "drawer2", row: 4, col: 1, stripSize: 10, boxSize: 100 },

  // ========== I 櫃 ==========
  // 抽屜 1
  { name: "Azilect", cabinet: "I", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Doxaben 2mg", cabinet: "I", section: "drawer1", row: 1, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Denosin", cabinet: "I", section: "drawer1", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Suzin", cabinet: "I", section: "drawer1", row: 2, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Sigmart", cabinet: "I", section: "drawer1", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Concor 5", cabinet: "I", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Sandel", cabinet: "I", section: "drawer1", row: 3, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Herbesser", cabinet: "I", section: "drawer1", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Colchicine", cabinet: "I", section: "drawer1", row: 4, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Allegra", cabinet: "I", section: "drawer1", row: 4, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Imovane", cabinet: "I", section: "drawer1", row: 4, col: 3, stripSize: 10, boxSize: 20 },
  // 抽屜 2
  { name: "Avodart", cabinet: "I", section: "drawer2", row: 1, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Rytmonorm", cabinet: "I", section: "drawer2", row: 1, col: 2, stripSize: 10, boxSize: 60 },
  { name: "Meletin", cabinet: "I", section: "drawer2", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Glunormal", cabinet: "I", section: "drawer2", row: 1, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Femara", cabinet: "I", section: "drawer2", row: 2, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Aspirin", cabinet: "I", section: "drawer2", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Tofranil 25mg", cabinet: "I", section: "drawer2", row: 2, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Acemet", cabinet: "I", section: "drawer2", row: 2, col: 4, stripSize: 10, boxSize: 100 },
  { name: "Xarelto 10mg", cabinet: "I", section: "drawer2", row: 3, col: 1, stripSize: 14, boxSize: 28 },
  { name: "Alfacalcidol", cabinet: "I", section: "drawer2", row: 3, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Mobicam", cabinet: "I", section: "drawer2", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Actos", cabinet: "I", section: "drawer2", row: 3, col: 4, stripSize: 10, boxSize: 30 },
  { name: "Repaglinide", cabinet: "I", section: "drawer2", row: 3, col: 5, stripSize: 10, boxSize: 100 },

  // ========== H 櫃 ==========
  // 抽屜 1
  { name: "Cofarin 1mg", cabinet: "H", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Antiasth", cabinet: "H", section: "drawer1", row: 1, col: 2, stripSize: 6, boxSize: 100 },
  { name: "Eliquis", cabinet: "H", section: "drawer1", row: 1, col: 3, stripSize: 14, boxSize: 60 },
  { name: "Baktar", cabinet: "H", section: "drawer1", row: 2, col: 1, stripSize: 10, boxSize: 20 },
  { name: "Meptin", cabinet: "H", section: "drawer1", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Lendormin", cabinet: "H", section: "drawer1", row: 2, col: 3, stripSize: 10, boxSize: 20 },
  { name: "Cephalexin", cabinet: "H", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Cordarone", cabinet: "H", section: "drawer1", row: 3, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Userm", cabinet: "H", section: "drawer1", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  // 抽屜 2
  { name: "Aleviatin", cabinet: "H", section: "drawer2", row: 1, col: 1, stripSize: 21, boxSize: 100 },
  { name: "Glyxambi", cabinet: "H", section: "drawer2", row: 1, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Epram", cabinet: "H", section: "drawer2", row: 1, col: 3, stripSize: 10, boxSize: 28 },
  { name: "Cymbalta", cabinet: "H", section: "drawer2", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Sirdalud", cabinet: "H", section: "drawer2", row: 2, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Mesyrel", cabinet: "H", section: "drawer2", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Valdoxan", cabinet: "H", section: "drawer2", row: 2, col: 3, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Seroquel 25mg", cabinet: "H", section: "drawer2", row: 3, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Abilify", cabinet: "H", section: "drawer2", row: 3, col: 3, stripSize: 10, boxSize: 30 },
  { name: "Apa-Mirtazapine ODT", cabinet: "H", section: "drawer2", row: 3, col: 4, stripSize: 10, boxSize: 30 },
  { name: "Tofranil 10mg", cabinet: "H", section: "drawer2", row: 4, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Clozaril", cabinet: "H", section: "drawer2", row: 4, col: 3, stripSize: 10, boxSize: 100 },

  // ========== G 櫃 ==========
  // 抽屜 1
  { name: "Secorin", cabinet: "G", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Lexotan", cabinet: "G", section: "drawer1", row: 1, col: 2, stripSize: 10, boxSize: 50 },
  { name: "Utraphen", cabinet: "G", section: "drawer1", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Rivotril", cabinet: "G", section: "drawer1", row: 2, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Stilnox", cabinet: "G", section: "drawer1", row: 2, col: 2, stripSize: 14, boxSize: 20 },
  { name: "Ativan", cabinet: "G", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Alpraline", cabinet: "G", section: "drawer1", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Eurodin", cabinet: "G", section: "drawer1", row: 4, col: 2, stripSize: 10, boxSize: 100 },
  // 抽屜 2
  { name: "Mirapex 1mg", cabinet: "G", section: "drawer2", row: 1, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Advagraf 1mg (G)", cabinet: "G", section: "drawer2", row: 1, col: 2, stripSize: 10, boxSize: 50 },

  // ========== F 櫃 ==========
  // 左門
  { name: "Pacrea", cabinet: "F", section: "doorL", row: 1, col: 1, isBox: true, stripSize: 10, boxSize: 100 },
  // 抽屜 1
  { name: "Seroquel XR 200mg", cabinet: "F", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 60 },
  { name: "Isoptin SR", cabinet: "F", section: "drawer1", row: 1, col: 2, stripSize: 15, boxSize: 100 },
  { name: "Syntam", cabinet: "F", section: "drawer1", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Dosin", cabinet: "F", section: "drawer1", row: 2, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Nolvadex", cabinet: "F", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Keppra", cabinet: "F", section: "drawer1", row: 3, col: 2, stripSize: 10, boxSize: 60 },
  { name: "Methylcobal", cabinet: "F", section: "drawer1", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Uroso", cabinet: "F", section: "drawer1", row: 4, col: 2, stripSize: 10, boxSize: 100 },
  // 抽屜 2
  { name: "Procal", cabinet: "F", section: "drawer2", row: 1, col: 1, stripSize: 10, boxSize: 100 },
  { name: "LAMICTAL", cabinet: "F", section: "drawer2", row: 1, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Depakine", cabinet: "F", section: "drawer2", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Sinemet 100#", cabinet: "F", section: "drawer2", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Salazine 28#", cabinet: "F", section: "drawer2", row: 3, col: 1, stripSize: 10, boxSize: 28 },
  { name: "Madopar 21#", cabinet: "F", section: "drawer2", row: 4, col: 2, stripSize: 21, boxSize: 100 },

  // ========== E 櫃 ==========
  // 抽屜 1
  { name: "Neuquinon", cabinet: "E", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Atanaal 5mg", cabinet: "E", section: "drawer1", row: 1, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Sandimmun 25", cabinet: "E", section: "drawer1", row: 1, col: 3, stripSize: 5, boxSize: 50 },
  { name: "Nitrostat Sub.", cabinet: "E", section: "drawer1", row: 2, col: 1, stripSize: 10, boxSize: 25 },
  { name: "Folina", cabinet: "E", section: "drawer1", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Stable 25", cabinet: "E", section: "drawer1", row: 2, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Ginkgocentrate", cabinet: "E", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Votan", cabinet: "E", section: "drawer1", row: 3, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Imolex", cabinet: "E", section: "drawer1", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Visanne", cabinet: "E", section: "drawer1", row: 4, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Utrogestan", cabinet: "E", section: "drawer1", row: 4, col: 3, stripSize: 15, boxSize: 100 },
  // 抽屜 2
  { name: "Foxone oph.", cabinet: "E", section: "drawer2", row: 1, col: 1, stripSize: 1, boxSize: 1 },
  { name: "O.N.S.D.", cabinet: "E", section: "drawer2", row: 1, col: 2, stripSize: 1, boxSize: 1 },
  { name: "Comtan 30#", cabinet: "E", section: "drawer2", row: 1, col: 3, stripSize: 30, boxSize: 100 },
  { name: "Artelac oph.", cabinet: "E", section: "drawer2", row: 2, col: 1, stripSize: 1, boxSize: 1 },
  { name: "Methacin gel", cabinet: "E", section: "drawer2", row: 2, col: 2, stripSize: 1, boxSize: 1 },
  { name: "Nincort", cabinet: "E", section: "drawer2", row: 2, col: 3, stripSize: 1, boxSize: 1 },
  { name: "Rinderon-V", cabinet: "E", section: "drawer2", row: 3, col: 1, stripSize: 1, boxSize: 1 },
  { name: "Sinomin oph.", cabinet: "E", section: "drawer2", row: 4, col: 1, stripSize: 1, boxSize: 1 },
  { name: "Tetracycline oph", cabinet: "E", section: "drawer2", row: 4, col: 2, stripSize: 1, boxSize: 1 },
  { name: "C.B. Strong", cabinet: "E", section: "drawer2", row: 4, col: 3, stripSize: 10, boxSize: 100 },

  // ========== 桌面區 ==========
  { name: "Biocal", cabinet: "Desktop", row: 1, col: 1, stripSize: 7, boxSize: 28 },
  { name: "Coxine", cabinet: "Desktop", row: 1, col: 2, stripSize: 14, boxSize: 100 },
  { name: "Sennapur", cabinet: "Desktop", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Loditon", cabinet: "Desktop", row: 1, col: 4, stripSize: 10, boxSize: 100 },
  { name: "HARNALIDGE", cabinet: "Desktop", row: 1, col: 5, stripSize: 14, boxSize: 100 },

];

// ==================== 變更歷程 ====================
// 以下為後台編輯紀錄，供追蹤參考
// [2026/2/10 上午9:35:17] 編輯: 「Juxac」 @ A 櫃 第1行 第6列
// [2026/2/10 上午9:35:34] 編輯: 「Amanda」 @ A 櫃 第1行 第2列
// [2026/2/10 上午9:35:47] 編輯: 「Ferrum」 @ A 櫃 第2行 第3列
// [2026/2/10 上午9:36:00] 編輯: 「SOLAXIN」 @ A 櫃 第3行 第1列
// [2026/2/10 上午9:36:22] 編輯: 「Jardiance」 @ A 櫃 第3行 第2列
// [2026/2/10 上午9:36:33] 編輯: 「Jardiance」 @ A 櫃 第3行 第2列
// [2026/2/10 上午9:38:58] 編輯: 「Jardiance」 → 「Jardiance 25mg」 @ A 櫃 第3行 第2列
// [2026/2/10 上午9:39:04] 編輯: 「Diphenidol」 @ A 櫃 第3行 第3列
// [2026/2/10 上午9:39:12] 編輯: 「Amoxicillin」 @ A 櫃 第3行 第5列
// [2026/2/10 上午9:39:16] 編輯: 「Effexor 75」 @ A 櫃 第3行 第6列
// [2026/2/10 上午9:39:21] 編輯: 「Creon」 @ A 櫃 第4行 第1列
// [2026/2/10 上午9:39:40] 編輯: 「Creon」 → 「Folic acid」 @ A 櫃 第4行 第1列
// [2026/2/10 上午9:39:47] 編輯: 「Predonine」 @ A 櫃 第4行 第2列
// [2026/2/10 上午9:40:01] 編輯: 「Xyzal」 @ A 櫃 第4行 第3列
// [2026/2/10 上午9:40:06] 編輯: 「Naposin」 @ A 櫃 第4行 第4列
// [2026/2/10 上午9:40:23] 編輯: 「Glucobay」 → 「Carlipin」 @ A 櫃 第4行 第5列
// [2026/2/10 上午9:40:32] 編輯: 「Lescol XL」 @ A 櫃 第4行 第6列
// [2026/2/10 上午9:40:40] 編輯: 「Nexium」 @ A 櫃 第5行 第1列
// [2026/2/10 上午9:40:47] 編輯: 「Lipanthyl」 @ A 櫃 第5行 第2列
// [2026/2/10 上午9:40:52] 編輯: 「Baraclude 0.5mg」 @ A 櫃 第5行 第3列
// [2026/2/10 上午9:40:55] 編輯: 「CellCept」 @ A 櫃 第5行 第4列
// [2026/2/10 上午9:40:59] 編輯: 「Prograf 1mg」 @ A 櫃 第5行 第5列
// [2026/2/10 上午9:41:03] 編輯: 「Zyprexa」 @ A 櫃 第5行 第6列
// [2026/2/10 上午9:41:05] 編輯: 「Zyprexa」 @ A 櫃 第5行 第6列
// [2026/2/10 上午9:41:10] 編輯: 「Natrilix」 @ A 櫃 第6行 第1列
// [2026/2/10 上午9:41:14] 編輯: 「Qtern」 @ A 櫃 第6行 第2列
// [2026/2/10 上午9:41:19] 編輯: 「Lyrica」 @ A 櫃 第6行 第3列
// [2026/2/10 上午9:41:32] 編輯: 「Nacid」 @ A 櫃 第6行 第6列
// [2026/2/10 上午9:52:52] 編輯: 「Carlipin」 → 「糖 Carlipin」 @ A 櫃 第4行 第5列
// [2026/2/10 下午2:30:45] 移動: 「Youkoxia」B 櫃 第2行 第3列 → B 櫃 第3行 第6列
// [2026/2/10 下午2:30:46] 移動: 「Lasix」B 櫃 第1行 第6列 → B 櫃 第2行 第3列
// [2026/2/10 下午2:30:58] 移動: 「Lasix」B 櫃 第2行 第3列 → B 櫃 第2行 第4列
// [2026/2/10 下午2:31:04] 移動: 「Aprovel 300mg」B 櫃 第2行 第2列 → B 櫃 第2行 第6列
// [2026/2/10 下午2:31:07] 移動: 「Exforge」B 櫃 第2行 第1列 → B 櫃 第2行 第5列
// [2026/2/10 下午2:31:32] 移動: 「Entresto 50mg」B 櫃 第1行 第5列 → B 櫃 第2行 第3列
// [2026/2/10 下午2:31:33] 移動: 「Requip PD 2mg」B 櫃 第1行 第4列 → B 櫃 第2行 第2列
// [2026/2/10 下午2:31:38] 移動: 「Crestor」B 櫃 第1行 第3列 → B 櫃 第1行 第6列
// [2026/2/10 下午2:31:41] 移動: 「Nebilet」B 櫃 第1行 第2列 → B 櫃 第1行 第4列
// [2026/2/10 下午2:31:46] 移動: 「Celebrex」B 櫃 第1行 第1列 → B 櫃 第1行 第3列
// [2026/2/10 下午2:32:32] 移動: 「Entresto 50mg」B 櫃 第2行 第3列 → B 櫃 第1行 第1列
// [2026/2/10 下午2:33:12] 移除: 「Entresto 50mg」 @ B 櫃 第1行 第1列
// [2026/2/10 下午2:33:17] 移除: 「Requip PD 2mg」 @ B 櫃 第2行 第2列
// [2026/2/10 下午2:33:26] 移除: 「Edarbi」 @ C 櫃 第1行 第6列
// [2026/2/10 下午2:33:29] 移除: 「Acetal」 @ C 櫃 第2行 第6列
// [2026/2/10 下午2:33:35] 移除: 「Diovan」 @ C 櫃 第2行 第5列
// [2026/2/10 下午2:33:38] 移動: 「DOXABEN XL 4MG」C 櫃 第1行 第5列 → C 櫃 第1行 第6列
// [2026/2/10 下午2:33:47] 移動: 「Bokey」C 櫃 第2行 第4列 → C 櫃 第2行 第6列
// [2026/2/10 下午2:33:49] 移動: 「COZAAR」C 櫃 第2行 第3列 → C 櫃 第2行 第5列
// [2026/2/10 下午2:33:53] 移動: 「Nifedipine 30mg」C 櫃 第2行 第2列 → C 櫃 第2行 第4列
// [2026/2/10 下午2:33:55] 移動: 「Ateol」C 櫃 第2行 第1列 → C 櫃 第2行 第3列
// [2026/2/10 下午2:34:04] 移除: 「MgO 56#」 @ C 櫃 第3行 第6列
// [2026/2/10 下午2:34:07] 移動: 「DILATREND 6.25mg」C 櫃 第3行 第5列 → C 櫃 第3行 第6列
// [2026/2/10 下午2:34:08] 移動: 「Aldactone」C 櫃 第3行 第4列 → C 櫃 第3行 第5列
// [2026/2/10 下午2:34:09] 移動: 「Forflow SR」C 櫃 第3行 第3列 → C 櫃 第3行 第4列
// [2026/2/10 下午2:34:11] 移動: 「EURICON 50mg」C 櫃 第3行 第2列 → C 櫃 第3行 第3列
// [2026/2/10 下午2:34:12] 移動: 「Arheuma」C 櫃 第3行 第1列 → C 櫃 第3行 第2列
// [2026/2/10 下午2:34:18] 移動: 「Betmiga」C 櫃 第5行 第5列 → C 櫃 第3行 第1列
// [2026/2/10 下午2:34:23] 移除: 「Fluitran」 @ C 櫃 第4行 第6列
// [2026/2/10 下午2:34:24] 移動: 「Diamicron」C 櫃 第4行 第5列 → C 櫃 第4行 第6列
// [2026/2/10 下午2:34:25] 移動: 「Livalo」C 櫃 第4行 第4列 → C 櫃 第4行 第5列
// [2026/2/10 下午2:34:27] 移動: 「Dulcolax」C 櫃 第4行 第3列 → C 櫃 第4行 第4列
// [2026/2/10 下午2:34:29] 移動: 「Urief」C 櫃 第4行 第2列 → C 櫃 第4行 第3列
// [2026/2/10 下午2:34:31] 移動: 「Dexilant」C 櫃 第4行 第1列 → C 櫃 第4行 第2列
// [2026/2/10 下午2:34:32] 移動: 「Betmiga」C 櫃 第3行 第1列 → C 櫃 第4行 第1列
// [2026/2/10 下午2:34:39] 移除: 「Norvasc」 @ C 櫃 第5行 第1列
// [2026/2/10 下午2:34:43] 移除: 「Certican」 @ C 櫃 第5行 第2列
// [2026/2/10 下午2:34:48] 移除: 「Lipitor」 @ C 櫃 第5行 第3列
// [2026/2/10 下午2:34:52] 移除: 「Amaryl」 @ C 櫃 第5行 第4列
// [2026/2/10 下午2:44:22] 新增: 「Edarbi」 @ B 櫃 第1行 第1列
// [2026/2/10 下午2:44:39] 新增: 「Acetal」 @ B 櫃 第2行 第3列
// [2026/2/10 下午2:44:53] 新增: 「Diovan 160mg」 @ B 櫃 第2行 第2列
// [2026/2/10 下午2:45:07] 移除: 「Trileptal」 @ B 櫃 第4行 第2列
// [2026/2/10 下午2:45:15] 移除: 「Biofermin」 @ B 櫃 第4行 第1列
// [2026/2/10 下午2:45:18] 移除: 「Januvia」 @ B 櫃 第4行 第3列
// [2026/2/10 下午2:45:21] 移除: 「Promeran」 @ B 櫃 第4行 第4列
// [2026/2/10 下午2:45:28] 移動: 「Oxbu」B 櫃 第5行 第5列 → B 櫃 第5行 第6列
// [2026/2/10 下午2:45:31] 移動: 「Kascoal」B 櫃 第3行 第4列 → B 櫃 第5行 第5列
// [2026/2/10 下午2:45:35] 移除: 「Traceton」 @ B 櫃 第5行 第4列
// [2026/2/10 下午2:45:39] 移動: 「Vit. B C 28#」B 櫃 第5行 第3列 → B 櫃 第5行 第4列
// [2026/2/10 下午2:45:48] 移除: 「Youkoxia」 @ B 櫃 第3行 第6列
// [2026/2/10 下午2:45:53] 移動: 「Trajenta」B 櫃 第3行 第1列 → B 櫃 第4行 第2列
// [2026/2/10 下午2:45:59] 移動: 「Strocain」B 櫃 第3行 第2列 → B 櫃 第4行 第3列
// [2026/2/10 下午2:46:01] 移動: 「Musco」B 櫃 第3行 第3列 → B 櫃 第4行 第4列
// [2026/2/10 下午2:46:06] 移動: 「Synorid」B 櫃 第4行 第5列 → B 櫃 第4行 第1列
// [2026/2/10 下午2:46:07] 移動: 「新 Pronolol」B 櫃 第5行 第2列 → B 櫃 第5行 第3列
// [2026/2/10 下午2:46:09] 移動: 「MgO 28#」B 櫃 第5行 第1列 → B 櫃 第5行 第2列
// [2026/2/10 下午2:46:12] 移動: 「Regrow SR」B 櫃 第4行 第6列 → B 櫃 第5行 第1列
// [2026/2/10 下午2:46:18] 移動: 「Weimok」B 櫃 第3行 第5列 → B 櫃 第4行 第6列
// [2026/2/10 下午2:46:26] 移除: 「Synorid」 @ B 櫃 第4行 第1列
// [2026/2/10 下午2:46:41] 新增: 「Amaryl」 @ B 櫃 第3行 第6列
// [2026/2/10 下午2:46:52] 新增: 「Lipitor」 @ B 櫃 第3行 第5列
// [2026/2/10 下午2:46:59] 新增: 「Certican」 @ B 櫃 第3行 第3列
// [2026/2/10 下午2:47:10] 新增: 「Norvasc」 @ B 櫃 第3行 第2列
// [2026/2/10 下午2:47:37] 新增: 「MgO 56#」 @ B 櫃 第3行 第1列
// [2026/2/10 下午3:01:43] 新增: 「Fluitran」 @ B 櫃 第4行 第1列
// [2026/2/10 下午3:01:54] 新增: 「Ezetrol」 @ B 櫃 第4行 第5列
// [2026/2/10 下午3:02:07] 編輯: 「Kascoal」 @ B 櫃 第5行 第5列
// [2026/2/10 下午3:03:42] 編輯: 「Lasix」 @ B 櫃 第2行 第4列
// [2026/2/10 下午3:03:47] 編輯: 「Exforge」 @ B 櫃 第2行 第5列
// [2026/2/10 下午3:03:52] 編輯: 「Aprovel 300mg」 @ B 櫃 第2行 第6列
// [2026/2/10 下午3:03:55] 編輯: 「MgO 56#」 @ B 櫃 第3行 第1列
// [2026/2/10 下午3:03:58] 編輯: 「Norvasc」 @ B 櫃 第3行 第2列
// [2026/2/10 下午3:04:01] 編輯: 「Certican」 @ B 櫃 第3行 第3列
// [2026/2/10 下午3:04:03] 編輯: 「Lipitor」 @ B 櫃 第3行 第5列
// [2026/2/10 下午3:04:07] 編輯: 「Amaryl」 @ B 櫃 第3行 第6列
// [2026/2/10 下午3:04:10] 編輯: 「Fluitran」 @ B 櫃 第4行 第1列
// [2026/2/10 下午3:04:16] 編輯: 「Trajenta」 @ B 櫃 第4行 第2列
// [2026/2/10 下午3:04:21] 編輯: 「Strocain」 @ B 櫃 第4行 第3列
// [2026/2/10 下午3:04:27] 編輯: 「Musco」 @ B 櫃 第4行 第4列
// [2026/2/10 下午3:04:31] 編輯: 「Ezetrol」 @ B 櫃 第4行 第5列
// [2026/2/10 下午3:04:51] 編輯: 「Weimok」 @ B 櫃 第4行 第6列
// [2026/2/10 下午3:41:50] 新增: 「Requip 2mg」 @ C 櫃 第2行 第1列
// [2026/2/10 下午3:42:08] 新增: 「Entresto 50mg」 @ C 櫃 第2行 第2列
// [2026/2/10 下午3:42:14] 編輯: 「Ateol」 @ C 櫃 第2行 第3列
// [2026/2/10 下午3:42:20] 編輯: 「Nifedipine 30mg」 @ C 櫃 第2行 第4列
// [2026/2/10 下午3:42:24] 編輯: 「COZAAR」 @ C 櫃 第2行 第5列
// [2026/2/10 下午3:44:38] 編輯: 「Bokey」 @ C 櫃 第2行 第6列
// [2026/2/10 下午3:44:53] 新增: 「Youkoxia」 @ C 櫃 第3行 第1列
// [2026/2/10 下午3:45:13] 編輯: 「Arheuma」 @ C 櫃 第3行 第2列
// [2026/2/10 下午3:45:31] 編輯: 「EURICON 50mg」 → 「EURICON」 @ C 櫃 第3行 第3列
// [2026/2/10 下午3:46:07] 編輯: 「Forflow SR」 @ C 櫃 第3行 第4列
// [2026/2/10 下午3:46:11] 編輯: 「Aldactone」 @ C 櫃 第3行 第5列
// [2026/2/10 下午3:46:20] 編輯: 「DILATREND 6.25mg」 @ C 櫃 第3行 第6列
// [2026/2/10 下午3:51:03] 編輯: 「Urief」 @ C 櫃 第4行 第3列
// [2026/2/10 下午3:51:09] 編輯: 「Dulcolax」 @ C 櫃 第4行 第4列
// [2026/2/10 下午3:51:12] 編輯: 「Livalo」 @ C 櫃 第4行 第5列
// [2026/2/10 下午3:51:18] 編輯: 「Diamicron」 @ C 櫃 第4行 第6列
// [2026/2/10 下午3:54:13] 新增: 「Biofermin」 @ C 櫃 第5行 第1列
// [2026/2/10 下午3:54:20] 新增: 「Promeran」 @ C 櫃 第5行 第6列
// [2026/2/10 下午3:54:30] 新增: 「Januvia」 @ C 櫃 第5行 第5列
// [2026/2/10 下午3:54:52] 新增: 「Trileptal」 @ C 櫃 第5行 第4列

// ==================== 意見回饋 ====================
// 主要調整A.B.C櫃藥品是否盒裝，及部分藥品品項更新
// 圖片須更新的有：(區-行-列)
// 1.(A-3-2)Jardiance，因加上劑量25mg
// 2.(A-3-5)Amoxicillin應為膠囊Amoxicillin 250 mg/cap 圖片
// 3.(A-4-1)改成Folic acid
// 4.(A-4-5)改成Carlipin
// 5.(A-5-6)Zyprexa應為Zyprexa Zydis 5 mg/tab 圖片
// 6.(B-2-2)Diovan加上劑量160mg
// 7.(B-4-5)改成Ezetrol
// 8.(C-2-1)Requip 2mg新增品項
// 9.(C-2-4)Nifedipine應為Nifedipine S.R.F.C. Tablet 30 mg/tab 圖片
// 10.(C-3-1)Youkoxia新增品項
// 11.(C-3-3)Euricon刪除後面50mg字樣，圖片需要補上
// 12.(C-3-6)Diatrend 6.25mg需要更新(現圖為25mg)
// 13.(C-5-4)Trileptal新增品項
