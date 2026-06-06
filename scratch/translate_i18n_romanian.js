const fs = require('fs');
const https = require('https');

const i18nPath = 'c:/Users/abdal/OneDrive/Desktop/German A1/multilingual/js/i18n.js';

function translateText(text, targetLang) {
  if (!text || typeof text !== 'string' || text.trim() === '') return Promise.resolve('');
  return new Promise((resolve, reject) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          let translation = '';
          if (parsed && parsed[0]) {
            for (let chunk of parsed[0]) {
              if (chunk[0]) translation += chunk[0];
            }
          }
          resolve(translation.trim());
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  // Read file and parse TRANSLATIONS using VM or simple regex extraction
  const content = fs.readFileSync(i18nPath, 'utf8');
  
  // We can locate the start and end of en block
  const enStartIdx = content.indexOf('  en: {');
  const enEndIdx = content.indexOf('  },', enStartIdx) + 4; // approximate end of en block
  
  // Actually, we can just load the file as a module by hacking it!
  const tempModulePath = 'scratch/temp_i18n.js';
  // Replace const TRANSLATIONS with module.exports = TRANSLATIONS
  let moduleCode = content.replace('const TRANSLATIONS =', 'module.exports =');
  // Also we might have functions or local variables at the bottom we can stub
  // Let's truncate everything after module.exports ending
  const closeIdx = moduleCode.indexOf('};', moduleCode.indexOf('module.exports ='));
  moduleCode = moduleCode.slice(0, closeIdx + 2);
  
  fs.writeFileSync(tempModulePath, moduleCode, 'utf8');
  const TRANSLATIONS = require('./temp_i18n.js');
  fs.unlinkSync(tempModulePath);
  
  const enTranslations = TRANSLATIONS.en;
  console.log(`Loaded ${Object.keys(enTranslations).length} keys for English.`);
  
  const roTranslations = {};
  
  // Special manual overrides for common German terms in Romanian context
  const overrides = {
    chapters_menu: "Capitole - Kapitel",
    toast_correct_answer: "Răspuns corect! 🎉",
    toast_wrong_answer: "Răspuns greșit",
    toast_vocab_saved: "Excelent! Cuvânt salvat ✓",
    toast_vocab_added: "Cuvânt adăugat la salvate ✓",
    toast_vocab_removed: "Cuvânt eliminat de la salvate",
    vocab_noun_opt: "Substantiv - Nomen",
    vocab_verb_opt: "Verb - Verb",
    vocab_adj_opt: "Adjectiv - Adjektiv",
    vocab_phrase_opt: "Expresie - Ausdruck",
    status_completed: "✓ Finalizat",
    status_in_progress: "În desfășurare...",
    status_start: "Începe acum",
    status_locked: "🔒 Blocat",
    quiz_btn_check: "Verifică răspunsul",
    quiz_btn_next: "Următorul →",
    fc_shuffle_btn: "🔀 Amestecă cardurile",
    fc_btn_prev: "← Anteriorul",
    fc_btn_next: "Următorul →",
    conv_btn_end: "← Termină conversația",
    vocab_btn_saved: "✓ Salvat",
    vocab_btn_save: "+ Salvează"
  };
  
  for (let key of Object.keys(enTranslations)) {
    if (overrides[key]) {
      roTranslations[key] = overrides[key];
      console.log(`Key "${key}" preset to "${roTranslations[key]}"`);
    } else {
      const val = enTranslations[key];
      try {
        const trans = await translateText(val, 'ro');
        roTranslations[key] = trans;
        console.log(`Key "${key}" translated to "${roTranslations[key]}"`);
        await new Promise(r => setTimeout(r, 50));
      } catch (err) {
        console.error(`Failed to translate key "${key}":`, err);
        roTranslations[key] = val; // fallback
      }
    }
  }
  
  fs.writeFileSync('scratch/ro_translations.json', JSON.stringify(roTranslations, null, 2), 'utf8');
  console.log('Saved Translated Romanian keys to scratch/ro_translations.json!');
}

run();
