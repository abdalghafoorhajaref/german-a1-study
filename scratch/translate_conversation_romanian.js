const fs = require('fs');
const https = require('https');

const conversationPath = 'c:/Users/abdal/OneDrive/Desktop/German A1/multilingual/js/conversation_translations.js';

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
  const content = fs.readFileSync(conversationPath, 'utf8');
  
  // Create temporary module file to import CONVERSATION_TRANSLATIONS
  const tempModulePath = 'scratch/temp_conversation.js';
  let moduleCode = content.replace('const CONVERSATION_TRANSLATIONS =', 'module.exports =');
  
  fs.writeFileSync(tempModulePath, moduleCode, 'utf8');
  const CONVERSATION_TRANSLATIONS = require('./temp_conversation.js');
  fs.unlinkSync(tempModulePath);
  
  const enDb = CONVERSATION_TRANSLATIONS.en;
  const roDb = {};
  
  console.log(`Loaded ${Object.keys(enDb).length} conversation scenarios.`);
  
  for (let id of Object.keys(enDb)) {
    console.log(`Translating conversation ${id}: ${enDb[id].title}`);
    const item = enDb[id];
    
    roDb[id] = {
      title: await translateText(item.title, 'ro'),
      turns: []
    };
    
    for (let turn of item.turns || []) {
      const roTurn = {};
      if (turn.text) {
        roTurn.text = await translateText(turn.text, 'ro');
      }
      if (turn.prompt) {
        roTurn.prompt = await translateText(turn.prompt, 'ro');
      }
      if (turn.options) {
        roTurn.options = [];
        for (let opt of turn.options) {
          roTurn.options.push(await translateText(opt, 'ro'));
        }
      }
      roDb[id].turns.push(roTurn);
    }
    
    await new Promise(r => setTimeout(r, 50));
  }
  
  CONVERSATION_TRANSLATIONS.ro = roDb;
  
  // Save back to file
  const prefix = `// ============================================================
// CONVERSATION TRANSLATIONS DATABASE - English, Turkish, Romanian
// ============================================================

const CONVERSATION_TRANSLATIONS = `;

  const serialized = prefix + JSON.stringify(CONVERSATION_TRANSLATIONS, null, 2) + ';\n';
  fs.writeFileSync(conversationPath, serialized, 'utf8');
  console.log('Successfully completed conversation translations and saved!');
}

run();
