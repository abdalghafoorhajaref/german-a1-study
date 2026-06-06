const fs = require('fs');
const path = require('path');

const i18nPath = 'c:/Users/abdal/OneDrive/Desktop/German A1/multilingual/js/i18n.js';
const roJsonPath = 'scratch/ro_translations.json';

function run() {
  const i18nContent = fs.readFileSync(i18nPath, 'utf8');
  const roContent = fs.readFileSync(roJsonPath, 'utf8');
  const roObj = JSON.parse(roContent);
  
  const normalized = i18nContent.replace(/\r\n/g, '\n');
  
  // Format the ro object as a JS block
  const roBlock = ',\n  ro: ' + JSON.stringify(roObj, null, 2); // 2 spaces formatting is cleaner
  
  // Find where the TRANSLATIONS object ends
  const targetEnd = '    vocab_btn_save: "+ Kaydet"\n  }\n};';
  const newEnd = '    vocab_btn_save: "+ Kaydet"\n  }' + roBlock + '\n};';
  
  let updatedContent = normalized.replace(targetEnd, newEnd);
  
  // Also update detectDeviceLanguage() to include 'ro'
  const targetDetect = `  if (cleanLang === 'tr') return 'tr';
  if (cleanLang === 'ar') return 'ar';
  return 'en';`;
  
  const newDetect = `  if (cleanLang === 'tr') return 'tr';
  if (cleanLang === 'ar') return 'ar';
  if (cleanLang === 'ro') return 'ro';
  return 'en';`;
  
  updatedContent = updatedContent.replace(targetDetect, newDetect);
  
  fs.writeFileSync(i18nPath, updatedContent, 'utf8');
  console.log('Successfully merged Romanian translations into i18n.js and updated language detection!');
}

run();
