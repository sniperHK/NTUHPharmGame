// drug_data.js -- 共用藥品資料庫
// 由 dispensing-game.html 與 admin.html 共同引用
// Last modified: 2026-02-12 (Patch2: E/F/G 更新與桌面維持 1x5)

// ==================== 櫃位結構設定 ====================
const cabinetConfig = {
  C: { type: 'shelf', rows: 5, cols: 6, label: 'C 櫃' },
  B: { type: 'shelf', rows: 5, cols: 7, label: 'B 櫃' },
  A: { type: 'shelf', rows: 6, cols: 6, label: 'A 櫃' },
  J: {
    type: 'drawer', label: 'J 櫃', sections: {
      drawer1: { rows: 5, cols: 3, label: '抽屜 1' },
      drawer2: { rows: 5, cols: 3, label: '抽屜 2' },
      doorL: { rows: 1, cols: 2, label: '左門' },
      doorR: { rows: 1, cols: 2, label: '右門' }
    }
  },
  I: {
    type: 'drawer', label: 'I 櫃', sections: {
      drawer1: { rows: 5, cols: 3, label: '抽屜 1' },
      drawer2: { rows: 5, cols: 3, label: '抽屜 2' },
      doorL: { rows: 1, cols: 2, label: '左門' },
      doorR: { rows: 1, cols: 2, label: '右門' }
    }
  },
  H: {
    type: 'drawer', label: 'H 櫃', sections: {
      drawer1: { rows: 5, cols: 3, label: '抽屜 1' },
      drawer2: { rows: 5, cols: 3, label: '抽屜 2' },
      doorL: { rows: 1, cols: 2, label: '左門' },
      doorR: { rows: 1, cols: 2, label: '右門' }
    }
  },
  G: {
    type: 'drawer', label: 'G 櫃', sections: {
      drawer1: { rows: 5, cols: 3, label: '抽屜 1' },
      drawer2: { rows: 5, cols: 3, label: '抽屜 2' },
      doorL: { rows: 1, cols: 2, label: '左門' },
      doorR: { rows: 1, cols: 2, label: '右門' }
    }
  },
  F: {
    type: 'drawer', label: 'F 櫃', sections: {
      drawer1: { rows: 6, cols: 3, label: '抽屜 1' },
      drawer2: { rows: 6, cols: 3, label: '抽屜 2' },
      doorL: { rows: 1, cols: 2, label: '左門' },
      doorR: { rows: 1, cols: 2, label: '右門' }
    }
  },
  E: {
    type: 'drawer', label: 'E 櫃', sections: {
      drawer1: { rows: 6, cols: 3, label: '抽屜 1' },
      drawer2: { rows: 6, cols: 3, label: '抽屜 2' },
      doorL: { rows: 1, cols: 2, label: '左門' },
      doorR: { rows: 1, cols: 2, label: '右門' }
    }
  },
  Desktop: { type: 'desktop', rows: 1, cols: 5, label: '桌面區' }
};

// ==================== 藥品資料庫 ====================
const drugDatabase = [
  // ========== C 櫃 (上排左側架子，5層×6格) ==========
  { name: "Lixiana 30mg", cabinet: "C", row: 1, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Pradaxa 110mg", cabinet: "C", row: 1, col: 2, stripSize: 10, boxSize: 60 },
  { name: "Zanidip", cabinet: "C", row: 1, col: 3, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Plavix", cabinet: "C", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "DOXABEN XL 4MG", cabinet: "C", row: 1, col: 6, isBox: true, stripSize: 7, boxSize: 28 },
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

  // ========== B 櫃 (上排中間架子，5層×7格) ==========
  { name: "Edarbi", cabinet: "B", row: 1, col: 1, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Celebrex", cabinet: "B", row: 1, col: 3, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Nebilet", cabinet: "B", row: 1, col: 4, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Crestor", cabinet: "B", row: 1, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Diovan 160mg", cabinet: "B", row: 2, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Acetal", cabinet: "B", row: 2, col: 3, stripSize: 10 },
  { name: "Lasix", cabinet: "B", row: 2, col: 4, stripSize: 15 },
  { name: "Exforge", cabinet: "B", row: 2, col: 5, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Aprovel 300mg", cabinet: "B", row: 2, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "MgO 56#", cabinet: "B", row: 3, col: 1, stripSize: 56 },
  { name: "Norvasc", cabinet: "B", row: 3, col: 2, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Certican", cabinet: "B", row: 3, col: 3, stripSize: 10 },
  { name: "Lipitor", cabinet: "B", row: 3, col: 5, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Amaryl", cabinet: "B", row: 3, col: 6, stripSize: 15 },
  { name: "Fluitran", cabinet: "B", row: 4, col: 1, stripSize: 10 },
  { name: "Trajenta", cabinet: "B", row: 4, col: 2, stripSize: 10 },
  { name: "Strocain", cabinet: "B", row: 4, col: 3, stripSize: 10 },
  { name: "Musco", cabinet: "B", row: 4, col: 4, stripSize: 10 },
  { name: "Ezetrol", cabinet: "B", row: 4, col: 5, stripSize: 10 },
  { name: "Weimok", cabinet: "B", row: 4, col: 6, stripSize: 10 },
  { name: "Regrow SR", cabinet: "B", row: 5, col: 1, stripSize: 10, boxSize: 30 },
  { name: "MgO 28#", cabinet: "B", row: 5, col: 2, stripSize: 10, boxSize: 28 },
  { name: "新 Pronolol", cabinet: "B", row: 5, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Vit. B C 28#", cabinet: "B", row: 5, col: 4, stripSize: 10, boxSize: 28 },
  { name: "Kascoal", cabinet: "B", row: 5, col: 5, stripSize: 10 },
  { name: "Oxbu", cabinet: "B", row: 5, col: 6, stripSize: 14, boxSize: 100 },

  // ========== A 櫃 (上排右側架子，6層×6格) ==========
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
  { name: "Effexor 75", cabinet: "A", row: 3, col: 6, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Folic acid", cabinet: "A", row: 4, col: 1, stripSize: 10 },
  { name: "Predonine", cabinet: "A", row: 4, col: 2, stripSize: 10 },
  { name: "Xyzal", cabinet: "A", row: 4, col: 3, stripSize: 10 },
  { name: "Naposin", cabinet: "A", row: 4, col: 4, stripSize: 10 },
  { name: "糖 Carlipin", cabinet: "A", row: 4, col: 5, stripSize: 10 },
  { name: "Lescol XL", cabinet: "A", row: 4, col: 6, isBox: true, stripSize: 7, boxSize: 28 },
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

  // ========== J 櫃 (下排最左，僅抽屜) ==========
  // J1 抽屜 (根據 PDF 20260129 版) - 3列布局
  { name: "Myfortic", cabinet: "J", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 120 },
  { name: "Sulpin 200mg", cabinet: "J", section: "drawer1", row: 1, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Akinfree", cabinet: "J", section: "drawer1", row: 1, col: 3, stripSize: 10, boxSize: 30 },
  { name: "ESTRADE", cabinet: "J", section: "drawer1", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Wecoli", cabinet: "J", section: "drawer1", row: 2, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Catapress", cabinet: "J", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "PLAQUENIL", cabinet: "J", section: "drawer1", row: 3, col: 2, stripSize: 15, boxSize: 60 },
  { name: "Colian", cabinet: "J", section: "drawer1", row: 4, col: 1, stripSize: 10, boxSize: 100 },
  // J2 抽屜
  { name: "Vimpat", cabinet: "J", section: "drawer2", row: 1, col: 1, stripSize: 14, boxSize: 56 },
  { name: "Fycompa", cabinet: "J", section: "drawer2", row: 1, col: 2, stripSize: 14, boxSize: 100 },
  { name: "Catilon", cabinet: "J", section: "drawer2", row: 1, col: 3, stripSize: 21, boxSize: 100 },
  { name: "Calcium Carbonate", cabinet: "J", section: "drawer2", row: 4, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Advagraf 1mg", cabinet: "J", section: "drawer2", row: 2, col: 1, stripSize: 10, boxSize: 50 },
  { name: "Splotin 50mg", cabinet: "J", section: "drawer2", row: 2, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Pletaal", cabinet: "J", section: "drawer2", row: 2, col: 3, stripSize: 10, boxSize: 50 },
  { name: "U-Ca", cabinet: "J", section: "drawer2", row: 4, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Cinnazine", cabinet: "J", section: "drawer2", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Takepron", cabinet: "J", section: "drawer2", row: 3, col: 2, stripSize: 14, boxSize: 28 },
  { name: "Mopride", cabinet: "J", section: "drawer2", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Midorine", cabinet: "J", section: "drawer2", row: 4, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Doxymycin", cabinet: "J", section: "drawer2", row: 5, col: 1, stripSize: 10, boxSize: 100 },

  // ========== I 櫃 ==========
  // I1 抽屜 (3列布局)
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
  // I2 抽屜
  { name: "Avodart", cabinet: "I", section: "drawer2", row: 1, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Rytmonorm", cabinet: "I", section: "drawer2", row: 1, col: 2, stripSize: 10, boxSize: 60 },
  { name: "Meletin", cabinet: "I", section: "drawer2", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Glunormal", cabinet: "I", section: "drawer2", row: 4, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Femara", cabinet: "I", section: "drawer2", row: 2, col: 1, stripSize: 10, boxSize: 30 },
  { name: "Aspirin", cabinet: "I", section: "drawer2", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Tofranil 25mg", cabinet: "I", section: "drawer2", row: 2, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Acemet", cabinet: "I", section: "drawer2", row: 4, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Xarelto 10mg", cabinet: "I", section: "drawer2", row: 3, col: 1, stripSize: 14, boxSize: 28 },
  { name: "Alfacalcidol", cabinet: "I", section: "drawer2", row: 3, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Mobicam", cabinet: "I", section: "drawer2", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Actos", cabinet: "I", section: "drawer2", row: 4, col: 3, stripSize: 10, boxSize: 30 },
  { name: "Repaglinide", cabinet: "I", section: "drawer2", row: 5, col: 3, stripSize: 10, boxSize: 100 },

  // ========== H 櫃 ==========
  // H1 抽屜 (3列布局)
  { name: "Cofarin 1mg", cabinet: "H", section: "drawer1", row: 1, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Antiasth", cabinet: "H", section: "drawer1", row: 1, col: 2, stripSize: 6, boxSize: 100 },
  { name: "Eliquis", cabinet: "H", section: "drawer1", row: 1, col: 3, stripSize: 14, boxSize: 60 },
  { name: "Baktar", cabinet: "H", section: "drawer1", row: 2, col: 1, stripSize: 10, boxSize: 20 },
  { name: "Meptin", cabinet: "H", section: "drawer1", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Lendormin", cabinet: "H", section: "drawer1", row: 2, col: 3, stripSize: 10, boxSize: 20 },
  { name: "Cephalexin", cabinet: "H", section: "drawer1", row: 3, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Cordarone", cabinet: "H", section: "drawer1", row: 3, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Userm", cabinet: "H", section: "drawer1", row: 3, col: 3, stripSize: 10, boxSize: 100 },
  // H2 抽屜
  { name: "Aleviatin", cabinet: "H", section: "drawer2", row: 1, col: 1, stripSize: 21, boxSize: 100 },
  { name: "Glyxambi", cabinet: "H", section: "drawer2", row: 1, col: 2, stripSize: 10, boxSize: 30 },
  { name: "Epram", cabinet: "H", section: "drawer2", row: 1, col: 3, stripSize: 10, boxSize: 28 },
  { name: "Cymbalta", cabinet: "H", section: "drawer2", row: 4, col: 1, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Sirdalud", cabinet: "H", section: "drawer2", row: 2, col: 1, stripSize: 10, boxSize: 100 },
  { name: "Mesyrel", cabinet: "H", section: "drawer2", row: 2, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Valdoxan", cabinet: "H", section: "drawer2", row: 2, col: 3, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Seroquel 25mg", cabinet: "H", section: "drawer2", row: 3, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Abilify", cabinet: "H", section: "drawer2", row: 3, col: 3, stripSize: 10, boxSize: 30 },
  { name: "Apa-Mirtazapine ODT", cabinet: "H", section: "drawer2", row: 4, col: 3, stripSize: 10, boxSize: 30 },
  { name: "Tofranil 10mg", cabinet: "H", section: "drawer2", row: 4, col: 2, stripSize: 10, boxSize: 100 },
  { name: "Clozaril", cabinet: "H", section: "drawer2", row: 5, col: 3, stripSize: 10, boxSize: 100 },

  // ========== G 櫃 ==========
  // G1 抽屜 (3列布局)
  { name: "Secorin", cabinet: "G", section: "drawer1", row: 1, col: 1, unit: "束", stripSize: 10, boxSize: 100 },
  { name: "Lexotan", cabinet: "G", section: "drawer1", row: 1, col: 2, unit: "束", stripSize: 10, boxSize: 200 },
  { name: "Utraphen", cabinet: "G", section: "drawer1", row: 1, col: 3, unit: "束", stripSize: 10, boxSize: 100 },
  { name: "Rivotril", cabinet: "G", section: "drawer1", row: 3, col: 2, unit: "束", stripSize: 10, boxSize: 240 },
  { name: "Stilnox", cabinet: "G", section: "drawer1", row: 3, col: 3, unit: "束", stripSize: 14, boxSize: 280 },
  { name: "Ativan", cabinet: "G", section: "drawer1", row: 4, col: 1, unit: "束", stripSize: 10, boxSize: 100 },
  { name: "Eurodin", cabinet: "G", section: "drawer1", row: 5, col: 2, unit: "束", stripSize: 10, boxSize: 100 },
  { name: "Alpraline", cabinet: "G", section: "drawer1", row: 5, col: 3, unit: "束", stripSize: 10, boxSize: 100 },
  // G2 抽屜
  { name: "Advagraf 1mg (G)", cabinet: "G", section: "drawer2", row: 1, col: 2, stripSize: 10, boxSize: 50 },
  { name: "Mirapex 1mg", cabinet: "G", section: "drawer2", row: 1, col: 3, stripSize: 10, boxSize: 30 },

  // ========== F 櫃 ==========
  // F1 抽屜
  { name: "Seroquel XR 200 mg/tab", cabinet: "F", section: "drawer1", row: 1, col: 1, stripSize: 10 },
  { name: "Isoptin SR", cabinet: "F", section: "drawer1", row: 1, col: 2, stripSize: 15 },
  { name: "Syntam", cabinet: "F", section: "drawer1", row: 1, col: 3, stripSize: 10 },
  { name: "Dosin", cabinet: "F", section: "drawer1", row: 3, col: 2, stripSize: 10 },
  { name: "Keppra FC 500 mg/tab", cabinet: "F", section: "drawer1", row: 4, col: 2, stripSize: 10 },
  { name: "Methylcobal", cabinet: "F", section: "drawer1", row: 4, col: 3, stripSize: 10 },
  { name: "Nolvadex", cabinet: "F", section: "drawer1", row: 5, col: 1, stripSize: 10 },
  { name: "Uroso", cabinet: "F", section: "drawer1", row: 6, col: 2, stripSize: 10 },
  // F2 抽屜
  { name: "Procal", cabinet: "F", section: "drawer2", row: 1, col: 1, stripSize: 10 },
  { name: "LAMICTAL", cabinet: "F", section: "drawer2", row: 1, col: 2, stripSize: 15 },
  { name: "Depakine", cabinet: "F", section: "drawer2", row: 1, col: 3, unit: "罐", stripSize: 1, boxSize: 28 },
  { name: "Sinemet 100#", cabinet: "F", section: "drawer2", row: 2, col: 2, stripSize: 1, boxSize: 100 },
  { name: "Salazine", cabinet: "F", section: "drawer2", row: 3, col: 1, unit: "包", stripSize: 1, boxSize: 28 },
  { name: "Madopar", cabinet: "F", section: "drawer2", row: 4, col: 2, stripSize: 1, boxSize: 21 },
  // F 左門
  { name: "Pacrea", cabinet: "F", section: "doorL", row: 1, col: 1, isBox: true, stripSize: 1, boxSize: 100 },

  // ========== E 櫃 ==========
  // E1 抽屜
  { name: "Neuquinon", cabinet: "E", section: "drawer1", row: 1, col: 1, stripSize: 10 },
  { name: "Atanaal 5mg", cabinet: "E", section: "drawer1", row: 1, col: 2, stripSize: 10 },
  { name: "Sandimmun Neoral 25 mg/cap", cabinet: "E", section: "drawer1", row: 1, col: 3, stripSize: 5, boxSize: 50 },
  { name: "Nitrostat Sub.", cabinet: "E", section: "drawer1", row: 3, col: 1, stripSize: 1 },
  { name: "Stable 25 mg/tab", cabinet: "E", section: "drawer1", row: 3, col: 2, stripSize: 10 },
  { name: "Ginkgocentrate", cabinet: "E", section: "drawer1", row: 4, col: 1, stripSize: 10 },
  { name: "Folina", cabinet: "E", section: "drawer1", row: 4, col: 2, stripSize: 10 },
  { name: "Imolex", cabinet: "E", section: "drawer1", row: 4, col: 3, stripSize: 10 },
  { name: "Votan", cabinet: "E", section: "drawer1", row: 5, col: 2, stripSize: 10 },
  { name: "Visanne", cabinet: "E", section: "drawer1", row: 6, col: 1, isBox: true, stripSize: 14, boxSize: 28 },
  { name: "Utrogestan", cabinet: "E", section: "drawer1", row: 6, col: 2, stripSize: 15 },
  // E2 抽屜
  { name: "Foxone oph.", cabinet: "E", section: "drawer2", row: 1, col: 1, stripSize: 1 },
  { name: "O.N.S.D.", cabinet: "E", section: "drawer2", row: 1, col: 2, stripSize: 1 },
  { name: "Comtan", cabinet: "E", section: "drawer2", row: 1, col: 3, stripSize: 1, boxSize: 30 },
  { name: "Artelac oph.", cabinet: "E", section: "drawer2", row: 2, col: 1, stripSize: 1 },
  { name: "Methacin gel", cabinet: "E", section: "drawer2", row: 2, col: 2, stripSize: 1 },
  { name: "Rinderon-V", cabinet: "E", section: "drawer2", row: 4, col: 1, stripSize: 1 },
  { name: "Nincort", cabinet: "E", section: "drawer2", row: 4, col: 3, stripSize: 1 },
  { name: "Sinomin oph.", cabinet: "E", section: "drawer2", row: 5, col: 1, stripSize: 1 },
  { name: "Tetracycline oph", cabinet: "E", section: "drawer2", row: 5, col: 2, stripSize: 1 },
  { name: "C.B. Strong", cabinet: "E", section: "drawer2", row: 5, col: 3, stripSize: 1 },

  // ========== 桌面區 ==========
  { name: "Biocal", cabinet: "Desktop", row: 1, col: 1, isBox: true, stripSize: 7, boxSize: 28 },
  { name: "Coxine", cabinet: "Desktop", row: 1, col: 2, stripSize: 14, boxSize: 100 },
  { name: "Sennapur", cabinet: "Desktop", row: 1, col: 3, stripSize: 10, boxSize: 100 },
  { name: "Loditon", cabinet: "Desktop", row: 1, col: 4, stripSize: 10, boxSize: 100 },
  { name: "HARNALIDGE", cabinet: "Desktop", row: 1, col: 5, stripSize: 14, boxSize: 100 },
];

// ==================== 變更歷程 (Patch1 - 2026/2/10 後台操作紀錄) ====================
// A 櫃調整
// [2026/2/10 上午9:38:58] 編輯: 「Jardiance」 → 「Jardiance 25mg」 @ A 櫃 第3行 第2列
// [2026/2/10 上午9:39:40] 編輯: 「Creon」 → 「Folic acid」 @ A 櫃 第4行 第1列
// [2026/2/10 上午9:40:23] 編輯: 「Glucobay」 → 「糖 Carlipin」 @ A 櫃 第4行 第5列
// [2026/2/10 上午9:35-9:41] 多處 boxSize/isBox 調整（詳見 Patch1/drug_dataPatch1.js）
//
// B 櫃調整
// [2026/2/10 下午2:30-3:04] 大幅位置重排
// [2026/2/10 下午2:44:53] 新增: 「Diovan 160mg」 @ B 櫃 第2行 第2列
// [2026/2/10 下午3:01:54] 新增: 「Ezetrol」 @ B 櫃 第4行 第5列
// [2026/2/10 下午2:45:28] 移除: Synorid, Traceton, Youkoxia (從 B 櫃移出)
// 原 B 櫃的 Biofermin/Trileptal/Januvia/Promeran 移至 C 櫃
// 原 C 櫃的 Norvasc/Certican/Lipitor/Amaryl/MgO 56#/Fluitran 移至 B 櫃
//
// C 櫃調整
// [2026/2/10 下午2:33-3:54] 大幅位置重排
// [2026/2/10 下午3:41:50] 新增: 「Requip 2mg」 @ C 櫃 第2行 第1列
// [2026/2/10 下午3:42:08] 新增: 「Entresto 50mg」 @ C 櫃 第2行 第2列
// [2026/2/10 下午3:44:53] 新增: 「Youkoxia」 @ C 櫃 第3行 第1列
// [2026/2/10 下午3:45:31] 編輯: 「EURICON 50mg」 → 「EURICON」 @ C 櫃 第3行 第3列
// [2026/2/10 下午3:54:52] 新增: 「Trileptal」 @ C 櫃 第5行 第4列
// 原 C 櫃的 Edarbi/Acetal/Diovan 移至 B 櫃，多處 boxSize 清除為留白

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
