// ============================================================
// SUMMARIZER.JS - German Vocabulary Study Summarizer
// Automatically classifies words, genders, conjugations & prints
// ============================================================

// ── Reference A1 Dictionary Database ──────────────────────────
const SUMMARIZER_DICT = {
  // CHAPTER 1
  "hallo": { type: "phrase", ar: "مرحباً" },
  "guten tag": { type: "phrase", ar: "مرحباً / صباح الخير" },
  "guten morgen": { type: "phrase", ar: "صباح الخير" },
  "guten abend": { type: "phrase", ar: "مساء الخير" },
  "auf wiedersehen": { type: "phrase", ar: "مع السلامة (رسمي)" },
  "tschüss": { type: "phrase", ar: "مع السلامة (غير رسمي)" },
  "bitte": { type: "phrase", ar: "من فضلك / عفواً" },
  "danke": { type: "phrase", ar: "شكراً" },
  "name": { type: "noun", article: "der", plural: "Namen", ar: "الاسم" },
  "heißen": { type: "verb", prasens: "heißt", prateritum: "hieß", perfekt: "geheißen", helper: "haben", ar: "يُسمّى / اسمه" },
  "sein": { type: "verb", prasens: "ist", prateritum: "war", perfekt: "gewesen", helper: "sein", ar: "يكون / يوجد" },
  "kommen": { type: "verb", prasens: "kommt", prateritum: "kam", perfekt: "gekommen", helper: "sein", ar: "يأتي" },
  "wohnen": { type: "verb", prasens: "wohnt", prateritum: "wohnte", perfekt: "gewohnt", helper: "haben", ar: "يسكن / يقطن" },
  "sprechen": { type: "verb", prasens: "spricht", prateritum: "sprach", perfekt: "gesprochen", helper: "haben", ar: "يتحدث / يتكلم" },
  "sprache": { type: "noun", article: "die", plural: "Sprachen", ar: "اللغة" },
  "land": { type: "noun", article: "das", plural: "Länder", ar: "البلد / الدولة" },
  "kurs": { type: "noun", article: "der", plural: "Kurse", ar: "الدورة / الكورس" },
  "buchstabieren": { type: "verb", prasens: "buchstabiert", prateritum: "buchstabierte", perfekt: "buchstabiert", helper: "haben", ar: "يتهجأ" },
  "alphabet": { type: "noun", article: "das", plural: "Alphabete", ar: "الأبجدية" },
  
  // CHAPTER 2
  "wie geht's": { type: "phrase", ar: "كيف حالك؟" },
  "gut": { type: "adj", ar: "جيد / بخير" },
  "nicht gut": { type: "phrase", ar: "ليس جيداً" },
  "es geht": { type: "phrase", ar: "لا بأس / يمشي الحال" },
  "müde": { type: "adj", ar: "متعب" },
  "krank": { type: "adj", ar: "مريض" },
  "kaffee": { type: "noun", article: "der", plural: "Kaffees", ar: "القهوة" },
  "tee": { type: "noun", article: "der", plural: "Tees", ar: "الشاي" },
  "wasser": { type: "noun", article: "das", plural: "Wässer", ar: "الماء" },
  "milch": { type: "noun", article: "die", plural: "—", ar: "الحليب" },
  "trinken": { type: "verb", prasens: "trinkt", prateritum: "trank", perfekt: "getrunken", helper: "haben", ar: "يشرب" },
  "möchten": { type: "verb", prasens: "möchte", prateritum: "wollte", perfekt: "gewollt", helper: "haben", ar: "يريد / يودّ" },
  "telefonnummer": { type: "noun", article: "die", plural: "Telefonnummern", ar: "رقم الهاتف" },
  "cafeteria": { type: "noun", article: "die", plural: "Cafeterias", ar: "الكافيتيريا" },

  // CHAPTER 3
  "kosten": { type: "verb", prasens: "kostet", prateritum: "kostete", perfekt: "gekostet", helper: "haben", ar: "يكلّف / يُساوي" },
  "kaufen": { type: "verb", prasens: "kauft", prateritum: "kaufte", perfekt: "gekauft", helper: "haben", ar: "يشتري" },
  "teuer": { type: "adj", ar: "غالي" },
  "billig": { type: "adj", ar: "رخيص" },
  "euro": { type: "noun", article: "der", plural: "Euro / Euros", ar: "اليورو" },
  "cent": { type: "noun", article: "der", plural: "Cent / Cents", ar: "السنت" },
  "laptop": { type: "noun", article: "der", plural: "Laptops", ar: "الحاسوب المحمول" },
  "handy": { type: "noun", article: "das", plural: "Handys", ar: "الهاتف الجوال" },
  "buch": { type: "noun", article: "das", plural: "Bücher", ar: "الكتاب" },
  "uhr": { type: "noun", article: "die", plural: "Uhren", ar: "الساعة" },
  "nehmen": { type: "verb", prasens: "nimmt", prateritum: "nahm", perfekt: "genommen", helper: "haben", ar: "يأخذ" },
  "flohmarkt": { type: "noun", article: "der", plural: "Flohmärkte", ar: "سوق المستعمل" },
  "supermarkt": { type: "noun", article: "der", plural: "Supermärkte", ar: "السوبرماركت" },
  "schön": { type: "adj", ar: "جميل" },
  "groß": { type: "adj", ar: "كبير" },
  "klein": { type: "adj", ar: "صغير" },
  "neu": { type: "adj", ar: "جديد" },
  "alt": { type: "adj", ar: "قديم / كبير السن" },

  // CHAPTER 4
  "wie spät ist es": { type: "phrase", ar: "كم الساعة؟" },
  "montag": { type: "noun", article: "der", plural: "Montage", ar: "الاثنين" },
  "dienstag": { type: "noun", article: "der", plural: "Dienstage", ar: "الثلاثاء" },
  "mittwoch": { type: "noun", article: "der", plural: "Mittwoche", ar: "الأربعاء" },
  "donnerstag": { type: "noun", article: "der", plural: "Donnerstage", ar: "الخميس" },
  "freitag": { type: "noun", article: "der", plural: "Freitage", ar: "الجمعة" },
  "samstag": { type: "noun", article: "der", plural: "Samstage", ar: "السبت" },
  "sonntag": { type: "noun", article: "der", plural: "Sonntage", ar: "الأحد" },
  "wochenende": { type: "noun", article: "das", plural: "Wochenenden", ar: "عطلة نهاية الأسبوع" },
  "aufstehen": { type: "verb", prasens: "steht auf", prateritum: "stand auf", perfekt: "aufgestanden", helper: "sein", ar: "يستيقظ" },
  "frühstücken": { type: "verb", prasens: "frühstückt", prateritum: "frühstückte", perfekt: "gefrühstückt", helper: "haben", ar: "يتناول الفطور" },
  "anfangen": { type: "verb", prasens: "fängt an", prateritum: "fing an", perfekt: "angefangen", helper: "haben", ar: "يبدأ" },
  "termin": { type: "noun", article: "der", plural: "Termine", ar: "الموعد" },
  "morgen": { type: "noun", article: "der", plural: "Morgen", ar: "الصباح" },
  "abend": { type: "noun", article: "der", plural: "Abende", ar: "المساء" },
  "nacht": { type: "noun", article: "die", plural: "Nächte", ar: "الليل" },

  // CHAPTER 5
  "brot": { type: "noun", article: "das", plural: "Brote", ar: "الخبز" },
  "tomate": { type: "noun", article: "die", plural: "Tomaten", ar: "الطماطم" },
  "käse": { type: "noun", article: "der", plural: "—", ar: "الجبن" },
  "fleisch": { type: "noun", article: "das", plural: "—", ar: "اللحم" },
  "obst": { type: "noun", article: "das", plural: "—", ar: "الفاكهة" },
  "gemüse": { type: "noun", article: "das", plural: "—", ar: "الخضروات" },
  "zwiebel": { type: "noun", article: "die", plural: "Zwiebeln", ar: "البصل" },
  "gurke": { type: "noun", article: "die", plural: "Gurken", ar: "الخيار" },
  "öl": { type: "noun", article: "das", plural: "Öle", ar: "الزيت" },
  "salz": { type: "noun", article: "das", plural: "Salze", ar: "الملح" },
  "kilo": { type: "noun", article: "das", plural: "Kilos", ar: "الكيلو" },
  "gramm": { type: "noun", article: "das", plural: "Gramm", ar: "الغرام" },
  "liter": { type: "noun", article: "der", plural: "Liter", ar: "اللتر" },
  "flasche": { type: "noun", article: "die", plural: "Flaschen", ar: "الزجاجة" },
  "brauchen": { type: "verb", prasens: "braucht", prateritum: "brauchte", perfekt: "gebraucht", helper: "haben", ar: "يحتاج" },
  "kochen": { type: "verb", prasens: "kocht", prateritum: "kochte", perfekt: "gekocht", helper: "haben", ar: "يطبخ" },
  "essen": { type: "verb", prasens: "isst", prateritum: "aß", perfekt: "gegessen", helper: "haben", ar: "يأكل" },
  "lecker": { type: "adj", ar: "لذيذ" },
  "rezept": { type: "noun", article: "das", plural: "Rezepte", ar: "الوصفة" },

  // CHAPTER 6
  "familie": { type: "noun", article: "die", plural: "Familien", ar: "العائلة" },
  "vater": { type: "noun", article: "der", plural: "Väter", ar: "الأب" },
  "mutter": { type: "noun", article: "die", plural: "Mütter", ar: "الأم" },
  "bruder": { type: "noun", article: "der", plural: "Brüder", ar: "الأخ" },
  "schwester": { type: "noun", article: "die", plural: "Schwestern", ar: "الأخت" },
  "sohn": { type: "noun", article: "der", plural: "Söhne", ar: "الابن" },
  "tochter": { type: "noun", article: "die", plural: "Töchter", ar: "الابنة" },
  "großvater": { type: "noun", article: "der", plural: "Großväter", ar: "الجد" },
  "großmutter": { type: "noun", article: "die", plural: "Großmütter", ar: "الجدة" },
  "kind": { type: "noun", article: "das", plural: "Kinder", ar: "الطفل" },
  "geburtstag": { type: "noun", article: "der", plural: "Geburtstage", ar: "عيد الميلاد" },
  "foto": { type: "noun", article: "das", plural: "Fotos", ar: "الصورة" },

  // CHAPTER 7
  "wohnung": { type: "noun", article: "die", plural: "Wohnungen", ar: "الشقة" },
  "haus": { type: "noun", article: "das", plural: "Häuser", ar: "المنزل" },
  "zimmer": { type: "noun", article: "das", plural: "Zimmer", ar: "الغرفة" },
  "wohnzimmer": { type: "noun", article: "das", plural: "Wohnzimmer", ar: "غرفة المعيشة" },
  "schlafzimmer": { type: "noun", article: "das", plural: "Schlafzimmer", ar: "غرفة النوم" },
  "küche": { type: "noun", article: "die", plural: "Küchen", ar: "المطبخ" },
  "bad": { type: "noun", article: "das", plural: "Bäder", ar: "الحمام" },
  "badezimmer": { type: "noun", article: "das", plural: "Badezimmer", ar: "الحمام" },
  "miete": { type: "noun", article: "die", plural: "Mieten", ar: "الإيجار" },
  "stock": { type: "noun", article: "der", plural: "Stockwerke", ar: "الطابق" },
  "etage": { type: "noun", article: "die", plural: "Etagen", ar: "الطابق" },
  "sofa": { type: "noun", article: "das", plural: "Sofas", ar: "الأريكة" },
  "schrank": { type: "noun", article: "der", plural: "Schränke", ar: "الخزانة" },
  "bett": { type: "noun", article: "das", plural: "Betten", ar: "السرير" },
  "tisch": { type: "noun", article: "der", plural: "Tische", ar: "الطاولة" },
  "stuhl": { type: "noun", article: "der", plural: "Stühle", ar: "الكرسي" },

  // CHAPTER 8
  "kopf": { type: "noun", article: "der", plural: "Köpfe", ar: "الرأس" },
  "bauch": { type: "noun", article: "der", plural: "Bäuche", ar: "البطن" },
  "hals": { type: "noun", article: "der", plural: "Hälse", ar: "الحلق / الرقبة" },
  "rücken": { type: "noun", article: "der", plural: "Rücken", ar: "الظهر" },
  "kopfschmerzen": { type: "noun", article: "die", plural: "—", ar: "صداع الرأس" },
  "fieber": { type: "noun", article: "das", plural: "—", ar: "الحمى / السخونة" },
  "erkältung": { type: "noun", article: "die", plural: "Erkältungen", ar: "البرد / الرشح" },
  "arzt": { type: "noun", article: "der", plural: "Ärzte", ar: "الطبيب" },
  "ärztin": { type: "noun", article: "die", plural: "Ärztinnen", ar: "الطبيبة" },
  "krankenhaus": { type: "noun", article: "das", plural: "Krankenhäuser", ar: "المستشفى" },
  "medikament": { type: "noun", article: "das", plural: "Medikamente", ar: "الدواء" },
  "müssen": { type: "verb", prasens: "muss", prateritum: "musste", perfekt: "gemusst", helper: "haben", ar: "يجب" },
  "können": { type: "verb", prasens: "kann", prateritum: "konnte", perfekt: "gekonnt", helper: "haben", ar: "يستطيع / يمكن" },
  "dürfen": { type: "verb", prasens: "darf", prateritum: "durfte", perfekt: "gedurft", helper: "haben", ar: "يجوز / مسموح" },
  "wehtun": { type: "verb", prasens: "tut weh", prateritum: "tat weh", perfekt: "wehgetan", helper: "haben", ar: "يؤلم" },
  "gesund": { type: "adj", ar: "بصحة جيدة / صحي" },
  "sport": { type: "noun", article: "der", plural: "—", ar: "الرياضة" },

  // CHAPTER 9
  "zug": { type: "noun", article: "der", plural: "Züge", ar: "القطار" },
  "auto": { type: "noun", article: "das", plural: "Autos", ar: "السيارة" },
  "fahrrad": { type: "noun", article: "das", plural: "Fahrräder", ar: "الدراجة" },
  "u-bahn": { type: "noun", article: "die", plural: "U-Bahnen", ar: "مترو الأنفاق" },
  "bus": { type: "noun", article: "der", plural: "Busse", ar: "الحافلة" },
  "fahrkarte": { type: "noun", article: "die", plural: "Fahrkarten", ar: "التذكرة" },
  "bahnhof": { type: "noun", article: "der", plural: "Bahnhöfe", ar: "محطة القطار" },
  "gleis": { type: "noun", article: "das", plural: "Gleise", ar: "الرصيف / السكة" },
  "abfahren": { type: "verb", prasens: "fährt ab", prateritum: "fuhr ab", perfekt: "abgefahren", helper: "sein", ar: "يغادر / يقلع" },
  "ankommen": { type: "verb", prasens: "kommt an", prateritum: "kam an", perfekt: "angekommen", helper: "sein", ar: "يصل" },
  "geradeaus": { type: "adv", ar: "إلى الأمام مباشرة" },
  "rechts": { type: "adv", ar: "يميناً" },
  "links": { type: "adv", ar: "يساراً" },

  // CHAPTER 10
  "hobby": { type: "noun", article: "das", plural: "Hobbies", ar: "الهواية" },
  "fußball": { type: "noun", article: "der", plural: "Fußbälle", ar: "كرة القدم" },
  "tennis": { type: "noun", article: "das", plural: "—", ar: "التنس" },
  "schwimmen": { type: "noun", article: "das", plural: "—", ar: "السباحة" },
  "musik": { type: "noun", article: "die", plural: "—", ar: "الموسيقى" },
  "lesen": { type: "verb", prasens: "liest", prateritum: "las", perfekt: "gelesen", helper: "haben", ar: "يقرأ" },
  "spielen": { type: "verb", prasens: "spielt", prateritum: "spielte", perfekt: "gespielt", helper: "haben", ar: "يلعب" },
  "hören": { type: "verb", prasens: "hört", prateritum: "hörte", perfekt: "gehört", helper: "haben", ar: "يسمع / يستمع" },
  "gern": { type: "adv", ar: "يحب / بسرور" },
  "spaß": { type: "noun", article: "der", plural: "Späße", ar: "المتعة / المرح" },
  "kino": { type: "noun", article: "das", plural: "Kinos", ar: "السينما" },
  "konzert": { type: "noun", article: "das", plural: "Konzerte", ar: "الحفلة الموسيقية" },
  "einladung": { type: "noun", article: "die", plural: "Einladungen", ar: "الدعوة" },

  // CHAPTER 11
  "arbeit": { type: "noun", article: "die", plural: "—", ar: "العمل" },
  "job": { type: "noun", article: "der", plural: "Jobs", ar: "الوظيفة" },
  "beruf": { type: "noun", article: "der", plural: "Berufe", ar: "المهنة" },
  "lehrer": { type: "noun", article: "der", plural: "Lehrer", ar: "المعلم" },
  "ingenieur": { type: "noun", article: "der", plural: "Ingenieure", ar: "المهندس" },
  "koch": { type: "noun", article: "der", plural: "Köche", ar: "الطباخ" },
  "verkäufer": { type: "noun", article: "der", plural: "Verkäufer", ar: "البائع" },
  "büro": { type: "noun", article: "das", plural: "Büros", ar: "المكتب" },
  "arbeiten": { type: "verb", prasens: "arbeitet", prateritum: "arbeitete", perfekt: "gearbeitet", helper: "haben", ar: "يعمل" },
  "gehalt": { type: "noun", article: "das", plural: "Gehälter", ar: "الراتب" },
  "stunde": { type: "noun", article: "die", plural: "Stunden", ar: "الساعة" },

  // CHAPTER 12
  "restaurant": { type: "noun", article: "das", plural: "Restaurants", ar: "المطعم" },
  "speisekarte": { type: "noun", article: "die", plural: "Speisekarten", ar: "قائمة الطعام" },
  "kellner": { type: "noun", article: "der", plural: "Kellner", ar: "النادل" },
  "vorspeise": { type: "noun", article: "die", plural: "Vorspeisen", ar: "المقبلات" },
  "hauptspeise": { type: "noun", article: "die", plural: "Hauptspeisen", ar: "الطبق الرئيسي" },
  "dessert": { type: "noun", article: "das", plural: "Desserts", ar: "الحلوى" },
  "schnitzel": { type: "noun", article: "das", plural: "Schnitzel", ar: "الشنيتزل" },
  "suppe": { type: "noun", article: "die", plural: "Suppen", ar: "الشوربة" },
  "bestellen": { type: "verb", prasens: "bestellt", prateritum: "bestellte", perfekt: "bestellt", helper: "haben", ar: "يطلب" },
  "trinkgeld": { type: "noun", article: "das", plural: "Trinkgelder", ar: "البقشيش / الإكرامية" },
  
  // EXTRA COMMON WORDS
  "gehen": { type: "verb", prasens: "geht", prateritum: "ging", perfekt: "gegangen", helper: "sein", ar: "يذهب" },
  "fahren": { type: "verb", prasens: "fährt", prateritum: "fuhr", perfekt: "gefahren", helper: "sein", ar: "يسافر / يقود" },
  "schreiben": { type: "verb", prasens: "schreibt", prateritum: "schrieb", perfekt: "geschrieben", helper: "haben", ar: "يكتب" },
  "verstehen": { type: "verb", prasens: "versteht", prateritum: "verstand", perfekt: "verstanden", helper: "haben", ar: "يفهم" },
  "lernen": { type: "verb", prasens: "lernt", prateritum: "lernte", perfekt: "gelernt", helper: "haben", ar: "يتعلم" },
  "suchen": { type: "verb", prasens: "sucht", prateritum: "suchte", perfekt: "gesucht", helper: "haben", ar: "يبحث عن" },
  "finden": { type: "verb", prasens: "findet", prateritum: "fand", perfekt: "gefunden", helper: "haben", ar: "يجد" },
  "haben": { type: "verb", prasens: "hat", prateritum: "hatte", perfekt: "gehabt", helper: "haben", ar: "يمتلك / عنده" },
  "geben": { type: "verb", prasens: "gibt", prateritum: "gab", perfekt: "gegeben", helper: "haben", ar: "يعطي" },
  "sehen": { type: "verb", prasens: "sieht", prateritum: "sah", perfekt: "gesehen", helper: "haben", ar: "يرى" },
  "machen": { type: "verb", prasens: "macht", prateritum: "machte", perfekt: "gemacht", helper: "haben", ar: "يفعل / يصنع" },
  "helfen": { type: "verb", prasens: "hilft", prateritum: "half", perfekt: "geholfen", helper: "haben", ar: "يساعد" },
  "fragen": { type: "verb", prasens: "fragt", prateritum: "fragte", perfekt: "gefragt", helper: "haben", ar: "يسأل" },
  "antworten": { type: "verb", prasens: "antwortet", prateritum: "antwortete", perfekt: "geantwortet", helper: "haben", ar: "يجيب" },
  "kalt": { type: "adj", ar: "بارد" },
  "warm": { type: "adj", ar: "دافئ" },
  "heiß": { type: "adj", ar: "حار / ساخن" },
  "mädchen": { type: "noun", article: "das", plural: "Mädchen", ar: "الفتاة / البنت" },
  "dokument": { type: "noun", article: "das", plural: "الوثيقة / المستند", ar: "Dokumente" }
};

// ── State ────────────────────────────────────────────────────
let currentSumChapter = "1";
let editingRowIndex = null;
let editingField = null;

// ── Heuristic prediction functions ─────────────────────────────

/**
 * Normalizes and analyzes a raw German word string, returning a predicted structure.
 */
function analyzeGermanWord(rawInput) {
  let text = rawInput.trim();
  if (!text) return null;

  let articleOverride = null;
  
  // 1. Detect if user typed article prefix
  const articleRegex = /^(der|die|das)\s+(.+)$/i;
  const match = text.match(articleRegex);
  if (match) {
    articleOverride = match[1].toLowerCase();
    text = match[2].trim();
  }

  const cleanLower = text.toLowerCase();
  
  // 2. Check in Reference Dictionary
  if (SUMMARIZER_DICT[cleanLower]) {
    const entry = { ...SUMMARIZER_DICT[cleanLower] };
    // Format spelling (capitalized for nouns)
    entry.word = entry.type === 'noun' ? text.charAt(0).toUpperCase() + text.slice(1) : text;
    if (articleOverride) entry.article = articleOverride;
    return entry;
  }

  // 3. Fallback Heuristics
  const isCapitalized = text[0] === text[0].toUpperCase();
  
  if (isCapitalized || articleOverride) {
    // Classified as Noun
    return {
      word: text.charAt(0).toUpperCase() + text.slice(1),
      type: "noun",
      article: articleOverride || predictNounArticle(cleanLower),
      plural: "—",
      ar: ""
    };
  } else if (cleanLower.endsWith("en") || cleanLower.endsWith("ern") || cleanLower.endsWith("eln")) {
    // Classified as Verb
    const forms = conjugateVerbRegular(cleanLower);
    return {
      word: cleanLower,
      type: "verb",
      prasens: forms.prasens,
      prateritum: forms.prateritum,
      perfekt: forms.perfekt,
      helper: forms.helper,
      ar: ""
    };
  } else {
    // Classified as Adjective
    return {
      word: cleanLower,
      type: "adj",
      ar: ""
    };
  }
}

/**
 * Rule-based predictor for noun gender/article.
 */
function predictNounArticle(word) {
  // Common feminine endings
  if (word.endsWith("ung") || word.endsWith("heit") || word.endsWith("keit") || 
      word.endsWith("schaft") || word.endsWith("ion") || word.endsWith("tät") || 
      word.endsWith("ik") || word.endsWith("ei") || word.endsWith("enz") || 
      word.endsWith("anz") || word.endsWith("ie") || word.endsWith("ur") ||
      word.endsWith("e")) {
    return "die";
  }
  // Common neuter endings
  if (word.endsWith("chen") || word.endsWith("lein") || word.endsWith("ment") || 
      word.endsWith("um") || word.endsWith("ma") || word.endsWith("ett")) {
    return "das";
  }
  // Common masculine endings
  if (word.endsWith("ismus") || word.endsWith("ist") || word.endsWith("ling")) {
    return "der";
  }
  // Default fallback
  return "der"; 
}

/**
 * Rule-based conjugator for regular verbs.
 */
function conjugateVerbRegular(verb) {
  let stem = verb;
  let suffix = "en";
  let helper = "haben";

  if (verb.endsWith("en")) {
    stem = verb.slice(0, -2);
  } else if (verb.endsWith("ern") || verb.endsWith("eln")) {
    stem = verb.slice(0, -1);
    suffix = "n";
  }

  // Check for sein auxiliary verbs (common motion verbs)
  const seinVerbs = ["gehen", "kommen", "fahren", "fliegen", "laufen", "reisen", "wandern", "bleiben", "sein", "aufstehen", "abfahren", "ankommen", "einschlafen", "sterben", "wachsen", "rennen"];
  if (seinVerbs.includes(verb)) {
    helper = "sein";
  }

  // Handle present tense (3rd person singular)
  let prasens = stem + "t";
  if (stem.endsWith("t") || stem.endsWith("d") || stem.endsWith("fn") || stem.endsWith("chn") || stem.endsWith("gn")) {
    prasens = stem + "et";
  } else if (stem.endsWith("s") || stem.endsWith("ß") || stem.endsWith("z") || stem.endsWith("x")) {
    prasens = stem + "t";
  }

  // Handle präteritum (3rd person singular)
  let prateritum = stem + "te";
  if (stem.endsWith("t") || stem.endsWith("d") || stem.endsWith("fn") || stem.endsWith("chn") || stem.endsWith("gn")) {
    prateritum = stem + "ete";
  }

  // Handle perfekt participle (Partizip II)
  let perfekt = "ge" + stem + "t";
  if (stem.endsWith("t") || stem.endsWith("d") || stem.endsWith("fn") || stem.endsWith("chn") || stem.endsWith("gn")) {
    perfekt = "ge" + stem + "et";
  }

  // Verbs ending in -ieren (e.g. studieren) do not get "ge-"
  if (verb.endsWith("ieren")) {
    perfekt = stem + "t";
  }

  // Inseparable prefixes do not get "ge-" (be-, ent-, er-, ver-, zer-, ge-, emp-)
  const inseparablePrefixes = ["be", "ent", "er", "ver", "zer", "ge", "emp"];
  for (let pref of inseparablePrefixes) {
    if (verb.startsWith(pref) && verb.length > pref.length + 2) {
      perfekt = verb.endsWith("en") ? verb.slice(0, -2) + "t" : verb.slice(0, -1) + "t";
      break;
    }
  }

  // Separable prefixes (auf-, an-, ein-, ab-, mit-, zu-, vor-)
  const separablePrefixes = ["auf", "an", "ein", "ab", "mit", "zu", "vor", "nach", "aus", "bei", "her", "hin"];
  for (let pref of separablePrefixes) {
    if (verb.startsWith(pref) && verb.length > pref.length + 2) {
      const baseVerb = verb.slice(pref.length);
      const baseForms = conjugateVerbRegular(baseVerb);
      prasens = baseForms.prasens + " " + pref;
      prateritum = baseForms.prateritum + " " + pref;
      perfekt = pref + "ge" + baseVerb.slice(0, -2) + "t";
      if (baseVerb.endsWith("ieren")) perfekt = pref + baseForms.perfekt;
      break;
    }
  }

  return {
    prasens,
    prateritum,
    perfekt,
    helper
  };
}

// ── Persistence ───────────────────────────────────────────────

/**
 * Gets custom vocabulary from local storage.
 */
function getCustomVocab() {
  const progress = getSavedProgress();
  if (!progress.customVocab) progress.customVocab = {};
  return progress.customVocab;
}

/**
 * Saves custom vocabulary to local storage.
 */
function saveCustomVocab(customVocab) {
  const progress = getSavedProgress();
  progress.customVocab = customVocab;
  saveProgress(progress);
}

// ── UI Handlers ───────────────────────────────────────────────

/**
 * Initializes the study summarizer page.
 */
function initSummarizer() {
  currentSumChapter = document.getElementById("sumChapterFilter")?.value || "1";
  
  // Populate Chapter dropdown if not done
  const dropdown = document.getElementById("sumChapterFilter");
  if (dropdown && dropdown.options.length <= 1) {
    dropdown.innerHTML = "";
    CURRICULUM.forEach(ch => {
      const opt = document.createElement("option");
      opt.value = ch.id;
      opt.textContent = `وحدة ${ch.id}: ${ch.titleAr}`;
      dropdown.appendChild(opt);
    });
    dropdown.value = currentSumChapter;
  }

  // Setup auto-suggest event listeners
  const inputEl = document.getElementById("sumWordInput");
  if (inputEl) {
    inputEl.removeEventListener("input", handleAutoSuggestInput);
    inputEl.addEventListener("input", handleAutoSuggestInput);
    inputEl.removeEventListener("keydown", handleAutoSuggestKeyDown);
    inputEl.addEventListener("keydown", handleAutoSuggestKeyDown);
  }

  // Close auto-suggest on click outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".suggest-wrap")) {
      closeAutoSuggest();
    }
  });

  renderSummarizerStats();
  renderSummarizerTable();
}

/**
 * Switch active chapter
 */
function changeSummarizerChapter(val) {
  currentSumChapter = val;
  closeAutoSuggest();
  renderSummarizerStats();
  renderSummarizerTable();
}

/**
 * Renders the stats counters
 */
function renderSummarizerStats() {
  const vocab = getCustomVocab();
  const list = vocab[currentSumChapter] || [];
  
  let nouns = 0, verbs = 0, adjs = 0;
  list.forEach(w => {
    if (w.type === 'noun') nouns++;
    else if (w.type === 'verb') verbs++;
    else if (w.type === 'adj') adjs++;
  });

  const nounsVal = document.getElementById("sumNounsCount");
  const verbsVal = document.getElementById("sumVerbsCount");
  const adjsVal = document.getElementById("sumAdjsCount");
  const totalVal = document.getElementById("sumTotalCount");

  if (nounsVal) nounsVal.textContent = nouns;
  if (verbsVal) verbsVal.textContent = verbs;
  if (adjsVal) adjsVal.textContent = adjs;
  if (totalVal) totalVal.textContent = list.length;
}

/**
 * Renders the vocab table
 */
function renderSummarizerTable() {
  const container = document.getElementById("sumTableBody");
  if (!container) return;

  const vocab = getCustomVocab();
  const list = vocab[currentSumChapter] || [];

  if (list.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center;color:var(--text-secondary);padding:40px;">
          لا توجد كلمات مضافة في هذه الوحدة بعد. ابدأ بإدخال كلماتك بالأعلى!
        </td>
      </tr>
    `;
    return;
  }

  let html = "";
  list.forEach((item, index) => {
    let detailsHtml = "";
    let wordDisplay = item.word;

    if (item.type === "noun") {
      wordDisplay = `${item.article || ""} ${item.word}`;
      detailsHtml = `<span class="sum-details-span">الجمع: ${item.plural || "—"}</span>`;
    } else if (item.type === "verb") {
      detailsHtml = `
        <span class="sum-details-span">الحاضر: ${item.prasens || "—"}</span> | 
        <span class="sum-details-span">الماضي: ${item.prateritum || "—"}</span> | 
        <span class="sum-details-span">التام: ${item.helper === 'sein' ? 'ist' : 'hat'} ${item.perfekt || "—"}</span>
      `;
    } else {
      detailsHtml = `<span style="color:var(--text-secondary);font-style:italic">صفة / كلمة أخرى</span>`;
    }

    const typeBadge = getBadgeHtml(item.type);

    html += `
      <tr class="sum-row-item">
        <td class="sum-index-cell">${index + 1}</td>
        <td class="sum-word-cell" onclick="speakGerman('${item.word.replace(/'/g, "\\'")}')">
          <span style="cursor:pointer;font-weight:600;color:var(--text-german)">${wordDisplay}</span>
          <button class="tts-btn" style="font-size:10px;padding:2px 4px;margin-right:6px;" onclick="event.stopPropagation();speakGerman('${item.word.replace(/'/g, "\\'")}')">🔊</button>
        </td>
        <td class="sum-type-cell">${typeBadge}</td>
        <td class="sum-details-cell" onclick="startEditCell(${index}, 'details', event)">
          ${detailsHtml}
        </td>
        <td class="sum-trans-cell" onclick="startEditCell(${index}, 'translation', event)">
          <span class="sum-trans-text">${item.ar || '<span style="color:var(--text-secondary);font-size:12px">انقر للكتابة...</span>'}</span>
        </td>
        <td class="sum-actions-cell">
          <button class="btn btn-ghost" style="padding:6px;min-width:32px;font-size:12px;margin:2px" onclick="editRowModal(${index})" title="تعديل تفصيلي">✏️</button>
          <button class="btn btn-ghost" style="padding:6px;min-width:32px;font-size:12px;margin:2px;color:var(--accent-danger)" onclick="deleteWord(${index})" title="حذف">✕</button>
        </td>
      </tr>
    `;
  });

  container.innerHTML = html;
}

function getBadgeHtml(type) {
  if (type === 'noun') return `<span class="vc-type" style="background:#4f8ef722;color:#4f8ef7;padding:3px 8px;border-radius:4px;font-size:11px">اسم - Nomen</span>`;
  if (type === 'verb') return `<span class="vc-type" style="background:#f59e0b22;color:#f59e0b;padding:3px 8px;border-radius:4px;font-size:11px">فعل - Verb</span>`;
  if (type === 'adj') return `<span class="vc-type" style="background:#34d39922;color:#34d399;padding:3px 8px;border-radius:4px;font-size:11px">صفة - Adjektiv</span>`;
  return `<span class="vc-type" style="background:#a78bfa22;color:#a78bfa;padding:3px 8px;border-radius:4px;font-size:11px">${type}</span>`;
}

// ── Suggest Dropdown Logic ────────────────────────────────────
function handleAutoSuggestInput() {
  const inputEl = document.getElementById("sumWordInput");
  const value = inputEl.value.trim().toLowerCase();
  const box = document.getElementById("sumSuggestBox");
  if (!box) return;

  if (value.length < 2) {
    closeAutoSuggest();
    return;
  }

  // Find matches in SUMMARIZER_DICT
  const matches = [];
  for (let key in SUMMARIZER_DICT) {
    if (key.includes(value)) {
      matches.push({ key, ...SUMMARIZER_DICT[key] });
    }
  }

  if (matches.length === 0) {
    closeAutoSuggest();
    return;
  }

  box.innerHTML = matches.slice(0, 5).map(m => {
    let disp = m.key;
    if (m.type === 'noun') disp = m.article + " " + m.key.charAt(0).toUpperCase() + m.key.slice(1);
    return `
      <div class="suggest-item" onclick="selectSuggestion('${m.key.replace(/'/g, "\\'")}')">
        <span>🇩🇪 ${disp}</span>
        <span style="color:var(--text-secondary);font-size:12px;">${m.ar}</span>
      </div>
    `;
  }).join("");
  box.style.display = "block";
}

function handleAutoSuggestKeyDown(e) {
  if (e.key === "Enter") {
    // Just trigger standard add
    setTimeout(() => {
      addSingleWord();
    }, 100);
  }
}

function selectSuggestion(key) {
  const inputEl = document.getElementById("sumWordInput");
  if (inputEl) {
    inputEl.value = SUMMARIZER_DICT[key].type === 'noun' ? 
      SUMMARIZER_DICT[key].article + " " + key.charAt(0).toUpperCase() + key.slice(1) : 
      key;
  }
  closeAutoSuggest();
  // Automatically trigger add for convenience
  addSingleWord();
}

function closeAutoSuggest() {
  const box = document.getElementById("sumSuggestBox");
  if (box) box.style.display = "none";
}

// ── Word Add Operations ────────────────────────────────────────

/**
 * Add a single word from the main input
 */
function addSingleWord() {
  const inputEl = document.getElementById("sumWordInput");
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) return;

  const analysis = analyzeGermanWord(val);
  if (!analysis) return;

  const customVocab = getCustomVocab();
  if (!customVocab[currentSumChapter]) customVocab[currentSumChapter] = [];

  // Check if word already exists in this chapter to avoid duplicates
  const exists = customVocab[currentSumChapter].some(item => item.word.toLowerCase() === analysis.word.toLowerCase());
  if (exists) {
    showToast(`الكلمة "${analysis.word}" مضافة بالفعل في هذه الوحدة!`, "warning");
    inputEl.value = "";
    return;
  }

  customVocab[currentSumChapter].push(analysis);
  saveCustomVocab(customVocab);

  // Success message with type
  const typeAr = analysis.type === 'noun' ? 'اسماً' : (analysis.type === 'verb' ? 'فعلاً' : 'صفةً');
  showToast(`تمت إضافة "${analysis.word}" تلقائياً كـ ${typeAr}!`, "success");

  inputEl.value = "";
  inputEl.focus();

  renderSummarizerStats();
  renderSummarizerTable();
}

/**
 * Bulk Add words
 */
function openBulkAddModal() {
  // Simple creation of overlay text area for bulk add
  let modal = document.getElementById("sumBulkModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "sumBulkModal";
    modal.className = "sum-modal-overlay";
    modal.innerHTML = `
      <div class="sum-modal-card">
        <h3 class="sum-modal-title">📝 إضافة جماعية للكلمات</h3>
        <p style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">
          اكتب الكلمات الألمانية في المربع بالأسفل (كلمة واحدة في كل سطر). سيقوم النظام بتصنيفها واستخراج تصريفاتها وأدواتها تلقائياً!
        </p>
        <textarea id="sumBulkTextarea" class="writing-area" style="height:200px;margin-bottom:16px;font-family:sans-serif;" placeholder="Haus&#10;gehen&#10;der Tisch&#10;schön"></textarea>
        <div style="display:flex;gap:12px;justify-content:flex-end">
          <button class="btn btn-ghost" onclick="closeBulkAddModal()">إلغاء</button>
          <button class="btn btn-primary" onclick="submitBulkAdd()">تحليل وإضافة الكلمات</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.style.display = "flex";
  document.getElementById("sumBulkTextarea").focus();
}

function closeBulkAddModal() {
  const modal = document.getElementById("sumBulkModal");
  if (modal) modal.style.display = "none";
}

function submitBulkAdd() {
  const text = document.getElementById("sumBulkTextarea").value;
  if (!text) {
    closeBulkAddModal();
    return;
  }

  const lines = text.split("\n");
  const customVocab = getCustomVocab();
  if (!customVocab[currentSumChapter]) customVocab[currentSumChapter] = [];

  let addedCount = 0;
  let skippedCount = 0;

  lines.forEach(line => {
    const word = line.trim();
    if (!word) return;

    const analysis = analyzeGermanWord(word);
    if (!analysis) return;

    // Avoid duplicates
    const exists = customVocab[currentSumChapter].some(item => item.word.toLowerCase() === analysis.word.toLowerCase());
    if (exists) {
      skippedCount++;
      return;
    }

    customVocab[currentSumChapter].push(analysis);
    addedCount++;
  });

  saveCustomVocab(customVocab);
  closeBulkAddModal();
  
  if (addedCount > 0) {
    showToast(`تم بنجاح تحليل وإضافة ${addedCount} كلمة! ${skippedCount > 0 ? `(تخطي ${skippedCount} مكررة)` : ""}`, "success");
  } else {
    showToast("لم يتم إضافة أي كلمات جديدة (ربما كلها مكررة أو فارغة).", "warning");
  }

  renderSummarizerStats();
  renderSummarizerTable();
}

/**
 * Delete a word
 */
function deleteWord(index) {
  if (!confirm("هل أنت متأكد من حذف هذه الكلمة من جدول تلخيص الدراسة؟")) return;

  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  if (list[index]) {
    const deletedWord = list[index].word;
    list.splice(index, 1);
    customVocab[currentSumChapter] = list;
    saveCustomVocab(customVocab);
    showToast(`تم حذف الكلمة "${deletedWord}"`, "info");
    renderSummarizerStats();
    renderSummarizerTable();
  }
}

// ── Inline & Detail Editing ───────────────────────────────────

/**
 * Starts editing a cell inline
 */
function startEditCell(index, field, event) {
  // Prevent nested clicks if already editing
  if (editingRowIndex !== null) return;

  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  const item = list[index];
  if (!item) return;

  const cell = event.currentTarget;
  editingRowIndex = index;
  editingField = field;

  if (field === 'translation') {
    const oldVal = item.ar || "";
    cell.innerHTML = `
      <input type="text" id="inlineEditInp" class="vocab-search" style="margin:0;padding:4px 8px;font-size:13px;width:100%" value="${oldVal}" dir="rtl" />
    `;
    const input = document.getElementById("inlineEditInp");
    input.focus();
    input.select();
    
    // Save on blur or enter
    input.addEventListener("blur", () => finishEditCell(true));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") finishEditCell(true);
      if (e.key === "Escape") finishEditCell(false);
    });
  } else if (field === 'details') {
    // Inline editing for details depends on word type
    if (item.type === 'noun') {
      cell.innerHTML = `
        <div style="display:flex;gap:6px;align-items:center">
          <select id="inlineEditArt" class="filter-select" style="margin:0;padding:2px;font-size:12px;width:auto">
            <option value="der" ${item.article === 'der' ? 'selected' : ''}>der</option>
            <option value="die" ${item.article === 'die' ? 'selected' : ''}>die</option>
            <option value="das" ${item.article === 'das' ? 'selected' : ''}>das</option>
          </select>
          <input type="text" id="inlineEditPlural" class="vocab-search" style="margin:0;padding:4px;font-size:12px;width:100px" placeholder="الجمع" value="${item.plural || ''}" />
        </div>
      `;
      const select = document.getElementById("inlineEditArt");
      const input = document.getElementById("inlineEditPlural");
      
      select.focus();
      
      const saveFn = () => {
        item.article = select.value;
        item.plural = input.value.trim() || "—";
        list[index] = item;
        customVocab[currentSumChapter] = list;
        saveCustomVocab(customVocab);
        editingRowIndex = null;
        editingField = null;
        renderSummarizerTable();
      };

      // Simple click out handler
      const clickOut = (e) => {
        if (!cell.contains(e.target)) {
          saveFn();
          document.removeEventListener("mousedown", clickOut);
        }
      };
      document.addEventListener("mousedown", clickOut);
      
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          saveFn();
          document.removeEventListener("mousedown", clickOut);
        }
      });
    } else if (item.type === 'verb') {
      // Direct inline edit for verbs is crowded, so redirect to modal
      editingRowIndex = null;
      editingField = null;
      editRowModal(index);
    }
  }
}

function finishEditCell(save) {
  if (editingRowIndex === null) return;

  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  const item = list[editingRowIndex];

  if (save && item) {
    if (editingField === 'translation') {
      const input = document.getElementById("inlineEditInp");
      if (input) {
        item.ar = input.value.trim();
        list[editingRowIndex] = item;
        customVocab[currentSumChapter] = list;
        saveCustomVocab(customVocab);
      }
    }
  }

  editingRowIndex = null;
  editingField = null;
  renderSummarizerTable();
}

/**
 * Full Edit Modal for detailed changes
 */
function editRowModal(index) {
  let modal = document.getElementById("sumEditModal");
  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  const item = list[index];
  if (!item) return;

  let detailsForm = "";
  if (item.type === "noun") {
    detailsForm = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">أداة التعريف (Artikel):</label>
        <select id="editArt" class="filter-select" style="width:100%">
          <option value="der" ${item.article === 'der' ? 'selected' : ''}>der (مذكر)</option>
          <option value="die" ${item.article === 'die' ? 'selected' : ''}>die (مؤنث)</option>
          <option value="das" ${item.article === 'das' ? 'selected' : ''}>das (محايد)</option>
        </select>
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">صيغة الجمع (Plural):</label>
        <input type="text" id="editPlural" class="vocab-search" style="margin:0;width:100%" value="${item.plural || ''}" placeholder="مثال: Bücher" />
      </div>
    `;
  } else if (item.type === "verb") {
    detailsForm = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">تصريف الحاضر (Präsens 3rd Person):</label>
        <input type="text" id="editPrasens" class="vocab-search" style="margin:0;width:100%" value="${item.prasens || ''}" placeholder="مثال: geht" />
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">تصريف الماضي (Präteritum 3rd Person):</label>
        <input type="text" id="editPrateritum" class="vocab-search" style="margin:0;width:100%" value="${item.prateritum || ''}" placeholder="مثال: ging" />
      </div>
      <div style="margin-bottom:12px;display:grid;grid-template-columns: 2fr 1fr;gap:8px">
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">تصريف التام (Perfekt Participle):</label>
          <input type="text" id="editPerfekt" class="vocab-search" style="margin:0;width:100%" value="${item.perfekt || ''}" placeholder="مثال: gegangen" />
        </div>
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">المساعد (Aux):</label>
          <select id="editHelper" class="filter-select" style="width:100%">
            <option value="haben" ${item.helper === 'haben' ? 'selected' : ''}>haben</option>
            <option value="sein" ${item.helper === 'sein' ? 'selected' : ''}>sein</option>
          </select>
        </div>
      </div>
    `;
  }

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "sumEditModal";
    modal.className = "sum-modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="sum-modal-card">
      <h3 class="sum-modal-title">✏️ تعديل كلمة: ${item.word}</h3>
      
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">الكلمة الألمانية:</label>
        <input type="text" id="editWord" class="vocab-search" style="margin:0;width:100%" value="${item.word}" />
      </div>

      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">النوع:</label>
        <select id="editType" class="filter-select" style="width:100%" onchange="toggleEditModalTypeForm()">
          <option value="noun" ${item.type === 'noun' ? 'selected' : ''}>اسم - Noun</option>
          <option value="verb" ${item.type === 'verb' ? 'selected' : ''}>فعل - Verb</option>
          <option value="adj" ${item.type === 'adj' ? 'selected' : ''}>صفة - Adjective</option>
          <option value="phrase" ${item.type === 'phrase' ? 'selected' : ''}>عبارة - Phrase</option>
        </select>
      </div>

      <div id="editModalDetailsContainer">
        ${detailsForm}
      </div>

      <div style="margin-bottom:16px">
        <label class="progress-label" style="margin-bottom:4px;display:block">الترجمة العربية:</label>
        <input type="text" id="editTrans" class="vocab-search" style="margin:0;width:100%" value="${item.ar || ''}" dir="rtl" />
      </div>

      <div style="display:flex;gap:12px;justify-content:flex-end">
        <button class="btn btn-ghost" onclick="closeEditModal()">إلغاء</button>
        <button class="btn btn-primary" onclick="submitEditWord(${index})">حفظ التغييرات</button>
      </div>
    </div>
  `;
  modal.style.display = "flex";
}

function toggleEditModalTypeForm() {
  const type = document.getElementById("editType").value;
  const container = document.getElementById("editModalDetailsContainer");
  if (!container) return;

  if (type === "noun") {
    container.innerHTML = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">أداة التعريف (Artikel):</label>
        <select id="editArt" class="filter-select" style="width:100%">
          <option value="der">der (مذكر)</option>
          <option value="die">die (مؤنث)</option>
          <option value="das">das (محايد)</option>
        </select>
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">صيغة الجمع (Plural):</label>
        <input type="text" id="editPlural" class="vocab-search" style="margin:0;width:100%" value="" placeholder="مثال: Bücher" />
      </div>
    `;
  } else if (type === "verb") {
    container.innerHTML = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">تصريف الحاضر (Präsens 3rd Person):</label>
        <input type="text" id="editPrasens" class="vocab-search" style="margin:0;width:100%" value="" placeholder="مثال: geht" />
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">تصريف الماضي (Präteritum 3rd Person):</label>
        <input type="text" id="editPrateritum" class="vocab-search" style="margin:0;width:100%" value="" placeholder="مثال: ging" />
      </div>
      <div style="margin-bottom:12px;display:grid;grid-template-columns: 2fr 1fr;gap:8px">
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">تصريف التام (Perfekt Participle):</label>
          <input type="text" id="editPerfekt" class="vocab-search" style="margin:0;width:100%" value="" placeholder="مثال: gegangen" />
        </div>
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">المساعد (Aux):</label>
          <select id="editHelper" class="filter-select" style="width:100%">
            <option value="haben">haben</option>
            <option value="sein">sein</option>
          </select>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = "";
  }
}

function closeEditModal() {
  const modal = document.getElementById("sumEditModal");
  if (modal) modal.style.display = "none";
}

function submitEditWord(index) {
  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  const item = list[index];
  if (!item) return;

  const type = document.getElementById("editType").value;
  const word = document.getElementById("editWord").value.trim();
  const trans = document.getElementById("editTrans").value.trim();

  if (!word) {
    showToast("يجب إدخال الكلمة الألمانية!", "error");
    return;
  }

  item.type = type;
  item.word = word;
  item.ar = trans;

  if (type === "noun") {
    item.article = document.getElementById("editArt").value;
    item.plural = document.getElementById("editPlural").value.trim() || "—";
    
    // Clean up verb forms if any
    delete item.prasens;
    delete item.prateritum;
    delete item.perfekt;
    delete item.helper;
  } else if (type === "verb") {
    item.prasens = document.getElementById("editPrasens").value.trim();
    item.prateritum = document.getElementById("editPrateritum").value.trim();
    item.perfekt = document.getElementById("editPerfekt").value.trim();
    item.helper = document.getElementById("editHelper").value;

    // Clean up noun forms if any
    delete item.article;
    delete item.plural;
  } else {
    // Clean up both
    delete item.article;
    delete item.plural;
    delete item.prasens;
    delete item.prateritum;
    delete item.perfekt;
    delete item.helper;
  }

  list[index] = item;
  customVocab[currentSumChapter] = list;
  saveCustomVocab(customVocab);

  closeEditModal();
  showToast("تم تحديث معلومات الكلمة!", "success");
  renderSummarizerStats();
  renderSummarizerTable();
}

// ── Export, Import & Copy Code ─────────────────────────────────

/**
 * Exports data to a JSON file download
 */
function exportCustomVocab() {
  const customVocab = getCustomVocab();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customVocab, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `german_study_summary_chapters.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("تم تصدير ملف النسخة الاحتياطية بنجاح! 💾", "success");
}

/**
 * Triggers hidden file input for import
 */
function triggerImportVocab() {
  const input = document.getElementById("sumImportInput");
  if (input) input.click();
}

/**
 * Handles JSON file import
 */
function importCustomVocab(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      // Validate structure basically
      if (typeof data !== 'object') throw new Error("Format invalid");
      
      if (confirm("هل تريد استبدال مفردات المذاكرة الحالية بالملف المستورد؟")) {
        saveCustomVocab(data);
        showToast("تم استيراد المفردات والتلخيص بنجاح! 📂", "success");
        initSummarizer();
      }
    } catch (err) {
      showToast("خطأ: الملف المختار غير صالح أو تالف!", "error");
    }
  };
  reader.readAsText(file);
  // Reset input
  event.target.value = "";
}

/**
 * Formats custom vocabulary list as a JS code snippet and copies to clipboard.
 */
function copyCustomVocabAsCode() {
  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  
  if (list.length === 0) {
    showToast("الجدول فارغ، أضف بعض الكلمات أولاً!", "warning");
    return;
  }

  // Format array
  const codeArray = list.map(item => {
    let fields = `ch:${currentSumChapter}, de:`;
    if (item.type === 'noun') {
      fields += `"${item.article} ${item.word}", ar:"${item.ar}", type:"noun", example:"Plural: ${item.plural}"`;
    } else if (item.type === 'verb') {
      const forms = `${item.prasens || ''} | ${item.prateritum || ''} | ${item.helper === 'sein' ? 'ist' : 'hat'} ${item.perfekt || ''}`;
      fields += `"${item.word}", ar:"${item.ar}", type:"verb", example:"Forms: ${forms}"`;
    } else {
      fields += `"${item.word}", ar:"${item.ar}", type:"${item.type}"`;
    }
    return `  { ${fields} }`;
  });

  const output = `// كلمات ملخصة للوحدة ${currentSumChapter}\nconst chapter${currentSumChapter}Words = [\n${codeArray.join(",\n")}\n];`;

  navigator.clipboard.writeText(output).then(() => {
    showToast("تم نسخ الكود ككائنات جافا سكريبت للحافظة! 📋", "success");
  }).catch(() => {
    showToast("فشل في نسخ الكود تلقائياً.", "error");
  });
}

// ── Print Logic ───────────────────────────────────────────────

/**
 * Triggers browser print with modified headers
 */
function printSummarizer() {
  // Get active chapter details to put in print header
  const chId = parseInt(currentSumChapter);
  const ch = CURRICULUM.find(c => c.id === chId);
  const printTitleDe = ch ? ch.titleDe : `Kapitel ${chId}`;
  const printTitleAr = ch ? ch.titleAr : `الوحدة ${chId}`;

  const headerDe = document.getElementById("printChapterTitleDe");
  const headerAr = document.getElementById("printChapterTitleAr");

  if (headerDe) headerDe.textContent = `Kapitel ${chId}: ${printTitleDe}`;
  if (headerAr) headerAr.textContent = `ملخص كلمات الوحدة ${chId}: ${printTitleAr}`;

  window.print();
}
