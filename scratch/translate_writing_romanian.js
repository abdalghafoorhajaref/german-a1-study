const fs = require('fs');
const https = require('https');

const writingPath = 'c:/Users/abdal/OneDrive/Desktop/German A1/multilingual/js/writing_translations.js';

function translateText(text, targetLang) {
  if (!text || typeof text !== 'string' || text.trim() === '') return Promise.resolve('');
  return new Promise((resolve, reject) => {
    const cleanText = text.trim();
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(cleanText)}`;
    
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
  const content = fs.readFileSync(writingPath, 'utf8');
  
  // Create temporary module file to import WRITING_TRANSLATIONS
  const tempModulePath = 'scratch/temp_writing.js';
  let moduleCode = content.replace('const WRITING_TRANSLATIONS =', 'module.exports =');
  
  fs.writeFileSync(tempModulePath, moduleCode, 'utf8');
  const WRITING_TRANSLATIONS = require('./temp_writing.js');
  fs.unlinkSync(tempModulePath);
  
  const enDb = WRITING_TRANSLATIONS.en;
  const roDb = {};
  
  console.log(`Loaded ${Object.keys(enDb).length} writing topics.`);
  
  for (let id of Object.keys(enDb)) {
    console.log(`Translating topic ${id}: ${enDb[id].title}`);
    const item = enDb[id];
    
    roDb[id] = {
      title: await translateText(item.title, 'ro'),
      type: await translateText(item.type, 'ro'),
      description: await translateText(item.description, 'ro'),
      
      keyVocabulary: [],
      usefulPhrases: [],
      grammarFocus: [],
      structure: [],
      exampleEssayTranslation: await translateText(item.exampleEssayTranslation, 'ro'),
      writingTips: [],
      selfCheckList: []
    };
    
    for (let word of item.keyVocabulary || []) {
      roDb[id].keyVocabulary.push(await translateText(word, 'ro'));
    }
    
    for (let phrase of item.usefulPhrases || []) {
      roDb[id].usefulPhrases.push(await translateText(phrase, 'ro'));
    }
    
    for (let rule of item.grammarFocus || []) {
      roDb[id].grammarFocus.push(await translateText(rule, 'ro'));
    }
    
    for (let s of item.structure || []) {
      roDb[id].structure.push({
        step: await translateText(s.step, 'ro'),
        tip: await translateText(s.tip, 'ro')
      });
    }
    
    for (let tip of item.writingTips || []) {
      roDb[id].writingTips.push(await translateText(tip, 'ro'));
    }
    
    for (let check of item.selfCheckList || []) {
      roDb[id].selfCheckList.push(await translateText(check, 'ro'));
    }
    
    await new Promise(r => setTimeout(r, 50));
  }
  
  WRITING_TRANSLATIONS.ro = roDb;
  
  // Save back to file
  const prefix = `// ============================================================
// WRITING TRANSLATIONS DATABASE - English, Turkish, Romanian
// ============================================================

const WRITING_TRANSLATIONS = `;

  const serialized = prefix + JSON.stringify(WRITING_TRANSLATIONS, null, 2) + ';\n';
  fs.writeFileSync(writingPath, serialized, 'utf8');
  console.log('Successfully completed writing translations and saved!');
}

run();
