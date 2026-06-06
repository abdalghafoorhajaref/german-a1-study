const fs = require('fs');
const path = require('path');

// Modal verbs conjugations
const MODALS = [
  'muss', 'musst', 'müssen', 'müsst',
  'kann', 'kannst', 'können', 'könnt',
  'soll', 'sollst', 'sollen', 'sollt',
  'will', 'willst', 'wollen', 'wollt',
  'darf', 'darfst', 'dürfen', 'dürft',
  'möchte', 'möchtest', 'möchten', 'möchtet'
];

// Directional prepositions / destination indicators
const DIRECTIONS = [
  'zum', 'zur', 'nach', 'ins', 'in die', 'in den', 'in das', 'zu ', 'nach Hause', 'in der',
  'an den', 'an die', 'an das', 'auf die', 'auf den', 'auf das', 'über die', 'über den', 'über das'
];

// Common infinitive verbs that can end these sentences
const INFINITIVES = [
  'gehen', 'fahren', 'reisen', 'fliegen', 'kommen', 'bleiben', 'machen', 'tun', 'besuchen', 'laufen', 'wandern', 'kaufen', 'sehen', 'sprechen', 'schreiben', 'nehmen'
];

function extractGermanSentences(text) {
  // Simple regex to find German strings: de: "..." or "de": "..." or just text block
  const sentences = [];
  
  // Find all patterns of "de": "..." or de: "..." or "exampleEssay": "..." or "question": "..."
  const stringRegex = /(?:"de"|de|question|exampleEssay|de|textDe|example)\s*:\s*(["'])(.*?)\1/g;
  let match;
  while ((match = stringRegex.exec(text)) !== null) {
    const content = match[2];
    // split into individual sentences
    const parts = content.split(/[.!?]/);
    parts.forEach(p => {
      const clean = p.trim();
      if (clean.length > 5 && !/[أ-ي]/.test(clean)) { // skip Arabic
        sentences.push({ original: content, sentence: clean });
      }
    });
  }
  
  return sentences;
}

function scanFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const sentences = extractGermanSentences(content);
  
  const matches = [];
  sentences.forEach(s => {
    const words = s.sentence.toLowerCase().split(/\s+/);
    
    // Check if sentence contains a modal verb
    const hasModal = words.some(w => MODALS.includes(w));
    if (!hasModal) return;
    
    // Check if sentence contains a directional indicator
    const lowerSent = s.sentence.toLowerCase();
    const hasDirection = DIRECTIONS.some(d => lowerSent.includes(d));
    if (!hasDirection) return;
    
    // Check if it ends with one of our infinitives
    const endsWithVerb = INFINITIVES.some(inf => {
      // Check if sentence ends with the infinitive (allowing punctuation/whitespace)
      return lowerSent.endsWith(inf) || lowerSent.endsWith(inf + ',') || lowerSent.endsWith(inf + '.');
    });
    
    if (!endsWithVerb) {
      matches.push(s);
    }
  });
  
  return matches;
}

function run() {
  const files = [
    'index.html',
    'multilingual/index.html',
    'js/curriculum.js',
    'js/vocabulary.js',
    'js/writing.js',
    'multilingual/js/curriculum.js',
    'multilingual/js/vocabulary.js',
    'multilingual/js/writing.js',
    'multilingual/js/writing_translations.js',
    'multilingual/js/conversation_translations.js',
    'multilingual/js/summarizer.js'
  ];
  
  console.log('=== SCANNING GERMAN SENTENCES FOR MODAL VERB COMPLETENESS ===');
  let totalMatches = 0;
  
  files.forEach(f => {
    const matches = scanFile(f);
    if (matches && matches.length > 0) {
      console.log(`\nFile: ${f} (${matches.length} suspect sentences):`);
      matches.forEach((m, idx) => {
        console.log(`  ${idx + 1}. Full text: "${m.original}"`);
        console.log(`     Suspect sentence: "${m.sentence}"`);
      });
      totalMatches += matches.length;
    }
  });
  
  console.log(`\nScan complete. Found ${totalMatches} suspect sentences.`);
}

run();
