const fs = require('fs');
const path = require('path');

// Helper to load browser JS file and return its defined global variable
function loadBrowserJs(filePath, globalVarName) {
  let code = fs.readFileSync(filePath, 'utf8');
  // Replace variable declaration with global assignment
  const pattern = new RegExp(`(?:const|let|var)\\s+${globalVarName}\\s*=`);
  code = code.replace(pattern, `global.${globalVarName} =`);
  global[globalVarName] = undefined;
  try {
    eval(code);
  } catch (err) {
    console.error(`Error evaluating ${filePath}:`, err);
  }
  return global[globalVarName];
}

function verify() {
  console.log('=== VERIFYING ROMANIAN TRANSLATIONS ===');
  
  // 1. i18n Translations
  console.log('\n--- Checking UI TRANSLATIONS ---');
  const i18nCode = fs.readFileSync('multilingual/js/i18n.js', 'utf8');
  // Define browser mocks
  global.document = {
    addEventListener: () => {},
    documentElement: {
      setAttribute: () => {}
    },
    querySelectorAll: () => []
  };
  global.navigator = {
    language: 'en'
  };
  global.localStorage = {
    getItem: () => null,
    setItem: () => {}
  };
  
  // eval TRANSLATIONS
  eval(i18nCode.replace('const TRANSLATIONS =', 'global.TRANSLATIONS ='));
  const TRANSLATIONS = global.TRANSLATIONS;
  if (!TRANSLATIONS) {
    console.error('FAIL: TRANSLATIONS is not defined in i18n.js');
  } else if (!TRANSLATIONS.ro) {
    console.error('FAIL: TRANSLATIONS.ro is not defined');
  } else {
    const keysCount = Object.keys(TRANSLATIONS.ro).length;
    const enKeysCount = Object.keys(TRANSLATIONS.en).length;
    console.log(`OK: TRANSLATIONS.ro loaded with ${keysCount} keys (English has ${enKeysCount} keys)`);
    // Find missing keys
    const missingKeys = Object.keys(TRANSLATIONS.en).filter(k => !TRANSLATIONS.ro[k]);
    if (missingKeys.length > 0) {
      console.warn(`WARNING: TRANSLATIONS.ro is missing keys:`, missingKeys);
    } else {
      console.log('OK: No missing keys in TRANSLATIONS.ro');
    }
  }

  // 2. Vocabulary
  console.log('\n--- Checking VOCABULARY ---');
  const VOCABULARY = loadBrowserJs('multilingual/js/vocabulary.js', 'VOCABULARY');
  if (!VOCABULARY) {
    console.error('FAIL: VOCABULARY is not defined');
  } else {
    console.log(`OK: VOCABULARY loaded with ${VOCABULARY.length} items`);
    let missingRo = 0;
    VOCABULARY.forEach((v, idx) => {
      if (!v.ro) {
        missingRo++;
        if (missingRo <= 5) console.warn(`Missing ro translation at index ${idx}:`, v.de);
      }
    });
    if (missingRo > 0) {
      console.error(`FAIL: ${missingRo} vocabulary items are missing Romanian translation`);
    } else {
      console.log('OK: All vocabulary items have Romanian translations');
    }
  }

  // 3. Curriculum
  console.log('\n--- Checking CURRICULUM ---');
  const CURRICULUM = loadBrowserJs('multilingual/js/curriculum.js', 'CURRICULUM');
  if (!CURRICULUM) {
    console.error('FAIL: CURRICULUM is not defined');
  } else {
    console.log(`OK: CURRICULUM loaded with ${CURRICULUM.length} chapters`);
    let missingTitle = 0, missingCanDo = 0, missingDialogues = 0, missingReadings = 0;
    let missingGrammar = 0, missingExercises = 0, missingSpeaking = 0;
    
    CURRICULUM.forEach((c) => {
      if (!c.titleRo) missingTitle++;
      if (!c.canDoRo) missingCanDo++;
      
      // Dialogues
      if (c.dialogs) {
        c.dialogs.forEach(d => {
          if (d.titleRo === undefined && d.titleEn) {
            missingDialogues++;
            console.log(`Chapter ${c.id}: Dialog "${d.title}" missing titleRo`);
          }
          if (d.lines) {
            d.lines.forEach(l => {
              if (l.ro === undefined) {
                missingDialogues++;
                console.log(`Chapter ${c.id}: Dialog "${d.title}" line missing ro: "${l.de}"`);
              }
            });
          }
        });
      }
      
      // Readings
      if (c.readingTexts) {
        c.readingTexts.forEach(r => {
          if (r.titleRo === undefined && r.titleEn) {
            missingReadings++;
            console.log(`Chapter ${c.id}: Reading Text "${r.title}" missing titleRo`);
          }
          if (r.text) {
            r.text.forEach(sentence => {
              if (sentence.ro === undefined) {
                missingReadings++;
                console.log(`Chapter ${c.id}: Reading Text "${r.title}" line missing ro: "${sentence.de}"`);
              }
            });
          }
          if (r.questions) {
            r.questions.forEach(q => {
              if (q.qRo === undefined || q.answerRo === undefined) {
                missingReadings++;
                console.log(`Chapter ${c.id}: Reading Text "${r.title}" question/answer missing ro: "${q.q}"`);
              }
            });
          }
        });
      }
      
      // Grammar
      if (c.grammar) {
        c.grammar.forEach(g => {
          if (g.titleRo === undefined && g.titleEn) {
            missingGrammar++;
            console.log(`Chapter ${c.id}: Grammar "${g.id}" missing titleRo`);
          }
          if (g.explanationRo === undefined && g.explanationEn) {
            missingGrammar++;
            console.log(`Chapter ${c.id}: Grammar "${g.id}" missing explanationRo`);
          }
          
          if (g.rules) {
            g.rules.forEach(r => {
              if (r.translationRo === undefined) {
                missingGrammar++;
                console.log(`Chapter ${c.id}: Grammar "${g.id}" rule missing translationRo: "${r.example}"`);
              }
            });
          }
          
          if (g.table) {
            if (g.table.headersRo === undefined) {
              missingGrammar++;
              console.log(`Chapter ${c.id}: Grammar "${g.id}" table missing headersRo`);
            }
            if (g.table.rows) {
              g.table.rows.forEach(row => {
                // If the row has 3 elements, the 3rd element contains translation slices
                if (row.length >= 3) {
                  const translationCell = row[2];
                  if (translationCell && translationCell.includes(' / ')) {
                    const slices = translationCell.split(' / ');
                    if (slices.length < 4) {
                      missingGrammar++;
                      console.log(`Chapter ${c.id}: Grammar "${g.id}" table row missing Romanian slice: "${translationCell}"`);
                    }
                  }
                }
              });
            }
          }
        });
      }
      
      // Exercises
      if (c.exercises) {
        c.exercises.forEach(e => {
          if (e.questionRo === undefined) {
            missingExercises++;
            console.log(`Chapter ${c.id}: Exercise question missing questionRo: "${e.question}"`);
          }
          if (e.type === 'mcq' && e.options) {
            e.options.forEach(opt => {
              if (opt && opt.includes(' / ')) {
                const parts = opt.split(' / ');
                if (parts.length < 4) {
                  missingExercises++;
                  console.log(`Chapter ${c.id}: MCQ option missing Romanian slice (has ${parts.length}): "${opt}"`);
                }
              }
            });
          }
        });
      }
      
      // Speaking
      if (c.speaking) {
        c.speaking.forEach(s => {
          if (s.roleRo === undefined && s.roleEn) {
            missingSpeaking++;
            console.log(`Chapter ${c.id}: Speaking missing roleRo`);
          }
          if (s.phrases) {
            s.phrases.forEach(p => {
              if (p.translationRo === undefined) {
                missingSpeaking++;
                console.log(`Chapter ${c.id}: Speaking phrase missing translationRo: "${p.de}"`);
              }
            });
          }
        });
      }
    });
    
    if (missingTitle) console.error(`FAIL: ${missingTitle} chapters missing titleRo`);
    if (missingCanDo) console.error(`FAIL: ${missingCanDo} chapters missing canDoRo`);
    if (missingDialogues) console.error(`FAIL: Dialogues missing translations in ${missingDialogues} instances`);
    if (missingReadings) console.error(`FAIL: Readings missing translations in ${missingReadings} instances`);
    if (missingGrammar) console.error(`FAIL: Grammar missing rules or table headers/cells translations in ${missingGrammar} instances`);
    if (missingExercises) console.error(`FAIL: Exercises missing instructions/options translations in ${missingExercises} instances`);
    if (missingSpeaking) console.error(`FAIL: Speaking missing role or phrase translations in ${missingSpeaking} instances`);
    
    if (!missingTitle && !missingCanDo && !missingDialogues && !missingReadings && !missingGrammar && !missingExercises && !missingSpeaking) {
      console.log('OK: All Curriculum fields successfully localized in Romanian');
    }
  }

  // 4. Writing Translations
  console.log('\n--- Checking WRITING_TRANSLATIONS ---');
  const WRITING_TRANSLATIONS = loadBrowserJs('multilingual/js/writing_translations.js', 'WRITING_TRANSLATIONS');
  if (!WRITING_TRANSLATIONS) {
    console.error('FAIL: WRITING_TRANSLATIONS is not defined');
  } else {
    const roWriting = WRITING_TRANSLATIONS.ro;
    if (!roWriting) {
      console.error('FAIL: WRITING_TRANSLATIONS.ro is not defined');
    } else {
      const topicKeys = Object.keys(roWriting);
      console.log(`OK: WRITING_TRANSLATIONS.ro loaded with ${topicKeys.length} topics`);
      let missingRoCount = 0;
      topicKeys.forEach(k => {
        const t = roWriting[k];
        if (!t.title || !t.type || !t.description || !t.keyVocabulary || !t.usefulPhrases || !t.grammarFocus || !t.structure || !t.exampleEssayTranslation || !t.writingTips || !t.selfCheckList) {
          missingRoCount++;
          console.warn(`Missing some fields in writing topic ${k}:`, {
            title: !!t.title,
            type: !!t.type,
            description: !!t.description,
            keyVocabulary: !!t.keyVocabulary,
            usefulPhrases: !!t.usefulPhrases,
            grammarFocus: !!t.grammarFocus,
            structure: !!t.structure,
            exampleEssayTranslation: !!t.exampleEssayTranslation,
            writingTips: !!t.writingTips,
            selfCheckList: !!t.selfCheckList
          });
        }
      });
      if (missingRoCount > 0) {
        console.error(`FAIL: ${missingRoCount} writing topics missing Romanian translations`);
      } else {
        console.log('OK: All writing topics have complete Romanian translations');
      }
    }
  }

  // 5. Conversation Translations
  console.log('\n--- Checking CONVERSATION_TRANSLATIONS ---');
  const CONVERSATION_TRANSLATIONS = loadBrowserJs('multilingual/js/conversation_translations.js', 'CONVERSATION_TRANSLATIONS');
  if (!CONVERSATION_TRANSLATIONS) {
    console.error('FAIL: CONVERSATION_TRANSLATIONS is not defined');
  } else {
    const roConv = CONVERSATION_TRANSLATIONS.ro;
    if (!roConv) {
      console.error('FAIL: CONVERSATION_TRANSLATIONS.ro is not defined');
    } else {
      const scenarioKeys = Object.keys(roConv);
      console.log(`OK: CONVERSATION_TRANSLATIONS.ro loaded with ${scenarioKeys.length} scenarios`);
      let missingRoCount = 0;
      scenarioKeys.forEach(k => {
        const s = roConv[k];
        if (!s.title || !s.turns) {
          missingRoCount++;
          console.warn(`Missing core fields in conversation scenario ${k}`);
        } else {
          // Check turns
          s.turns.forEach((turn, idx) => {
            if (turn.text === undefined && turn.prompt === undefined) {
              missingRoCount++;
              console.warn(`Scenario ${k} turn ${idx} missing text or prompt`);
            }
          });
        }
      });
      if (missingRoCount > 0) {
        console.error(`FAIL: ${missingRoCount} conversation scenarios missing Romanian translations`);
      } else {
        console.log('OK: All conversation scenarios have complete Romanian translations');
      }
    }
  }
}

verify();
