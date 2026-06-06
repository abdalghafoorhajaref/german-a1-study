const fs = require('fs');
const https = require('https');

const curriculumPath = 'c:/Users/abdal/OneDrive/Desktop/German A1/multilingual/js/curriculum.js';

function translateText(text, targetLang) {
  if (!text || typeof text !== 'string' || text.trim() === '') return Promise.resolve('');
  return new Promise((resolve, reject) => {
    // Clean up potential formatting/extra quotes
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
  const content = fs.readFileSync(curriculumPath, 'utf8');
  
  // Create temporary module file to import CURRICULUM
  const tempModulePath = 'scratch/temp_curriculum.js';
  let moduleCode = content.replace('const CURRICULUM =', 'module.exports =');
  // Strip the TODAY_IDX line at the bottom
  const idx = moduleCode.indexOf('const TODAY_IDX');
  if (idx !== -1) {
    moduleCode = moduleCode.slice(0, idx);
  }
  
  fs.writeFileSync(tempModulePath, moduleCode, 'utf8');
  const CURRICULUM = require('./temp_curriculum.js');
  fs.unlinkSync(tempModulePath);
  
  console.log(`Loaded ${CURRICULUM.length} chapters.`);
  
  for (let ch of CURRICULUM) {
    console.log(`\nTranslating Chapter ${ch.id}: ${ch.titleDe}`);
    
    // Chapter Title
    ch.titleRo = await translateText(ch.titleEn, 'ro');
    console.log(`- Title: ${ch.titleRo}`);
    
    // Topics
    ch.topicsRo = [];
    for (let t of ch.topicsEn || []) {
      const trans = await translateText(t, 'ro');
      ch.topicsRo.push(trans);
    }
    console.log(`- Topics: ${ch.topicsRo.join(', ')}`);
    
    // Can Do
    ch.canDoRo = await translateText(ch.canDoEn, 'ro');
    console.log(`- Can Do: ${ch.canDoRo}`);
    
    // Audio Files
    if (ch.audioFiles) {
      for (let af of ch.audioFiles) {
        af.labelRo = await translateText(af.labelEn, 'ro');
      }
      console.log(`- Localized audio labels`);
    }
    
    // Dialogs
    if (ch.dialogs) {
      for (let d of ch.dialogs) {
        d.titleRo = await translateText(d.titleEn || d.title, 'ro');
        for (let line of d.lines || []) {
          line.ro = await translateText(line.en || line.ar, 'ro');
        }
      }
      console.log(`- Localized dialogues`);
    }
    
    // Reading Texts
    if (ch.readingTexts) {
      for (let rt of ch.readingTexts) {
        rt.titleRo = await translateText(rt.titleEn || rt.title, 'ro');
        for (let p of rt.text || []) {
          p.ro = await translateText(p.en || p.ar, 'ro');
        }
        for (let q of rt.questions || []) {
          q.qRo = await translateText(q.qEn || q.qAr || q.q, 'ro');
          q.answerRo = await translateText(q.answerEn || q.answerAr || q.answer, 'ro');
        }
      }
      console.log(`- Localized reading texts`);
    }
    
    // Grammar
    if (ch.grammar) {
      for (let g of ch.grammar) {
        g.titleRo = await translateText(g.titleEn || g.title, 'ro');
        g.explanationRo = await translateText(g.explanationEn || g.explanation, 'ro');
        for (let rule of g.rules || []) {
          rule.translationRo = await translateText(rule.translationEn || rule.translation, 'ro');
          if (rule.noteEn || rule.note) {
            rule.noteRo = await translateText(rule.noteEn || rule.note, 'ro');
          }
        }
        if (g.table) {
          g.table.headersRo = [];
          for (let h of g.table.headersEn || g.table.headers) {
            const trans = await translateText(h, 'ro');
            g.table.headersRo.push(trans);
          }
          for (let row of g.table.rows || []) {
            // Check if any cell has translation format
            for (let i = 0; i < row.length; i++) {
              let cell = row[i];
              if (typeof cell === 'string' && cell.includes(' / ')) {
                const parts = cell.split(' / ');
                const enVal = parts[1] || parts[0];
                const roVal = await translateText(enVal, 'ro');
                // Append Romanian
                row[i] = cell + ' / ' + roVal;
              }
            }
          }
        }
      }
      console.log(`- Localized grammar rules and tables`);
    }
    
    // Exercises
    if (ch.exercises) {
      for (let ex of ch.exercises) {
        ex.questionRo = await translateText(ex.questionEn || ex.question, 'ro');
        if (ex.hintEn || ex.hint) {
          ex.hintRo = await translateText(ex.hintEn || ex.hint, 'ro');
        }
        // Options for MCQ
        if (ex.options) {
          for (let i = 0; i < ex.options.length; i++) {
            let opt = ex.options[i];
            if (typeof opt === 'string' && opt.includes(' / ')) {
              const parts = opt.split(' / ');
              const enVal = parts[1] || parts[0];
              const roVal = await translateText(enVal, 'ro');
              ex.options[i] = opt + ' / ' + roVal;
            }
          }
        }
      }
      console.log(`- Localized exercises`);
    }
    
    // Writing Prompts
    if (ch.writingPrompts) {
      for (let wp of ch.writingPrompts) {
        wp.promptRo = await translateText(wp.promptEn || wp.prompt, 'ro');
        if (wp.helpersEn || wp.helpers) {
          wp.helpersRo = [];
          for (let h of wp.helpersEn || wp.helpers) {
            const trans = await translateText(h, 'ro');
            wp.helpersRo.push(trans);
          }
        }
      }
      console.log(`- Localized writing prompts`);
    }
    
    // Speaking Phrases
    if (ch.speakingPhrases) {
      for (let sp of ch.speakingPhrases) {
        // Special check: we already updated "Ich muss zum Arzt gehen." and added "ro" directly,
        // so let's skip if "ro" is already present
        if (!sp.ro) {
          sp.ro = await translateText(sp.en || sp.ar, 'ro');
        }
      }
      console.log(`- Localized speaking phrases`);
    }
    
    await new Promise(r => setTimeout(r, 100)); // Sleep to prevent rate-limit
  }
  
  // Write back to curriculum.js
  const prefix = `// ============================================================
// CURRICULUM DATA - Berliner Platz 1 Neu A1
// 12 Kapitel with texts, vocab, grammar, exercises (Arabic, English, Turkish, Romanian)
// ============================================================

const CURRICULUM = `;

  const todayIdxStr = `\n\n// Daily rotation index\nconst TODAY_IDX = new Date().getDate() % CURRICULUM.reduce((a, c) => a + c.speakingPhrases.length, 0);\n`;

  const serialized = prefix + JSON.stringify(CURRICULUM, null, 2) + ';' + todayIdxStr;
  fs.writeFileSync(curriculumPath, serialized, 'utf8');
  console.log('\nSuccessfully completed curriculum translation and saved!');
}

run();
