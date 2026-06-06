// ============================================================
// MULTILINGUAL SUMMARIZER.JS - German Vocabulary Study Summarizer
// Automatically classifies words, genders, conjugations & prints
// Supports Arabic, English, Turkish, Romanian
// ============================================================

// ── Reference A1 Dictionary Database ──────────────────────────
const SUMMARIZER_DICT = {
  "hallo": {
    "type": "phrase",
    "ar": "مرحباً",
    "en": "Hello",
    "tr": "Merhaba",
    "ro": "Bună",
    "bs": "Zdravo"
  },
  "guten tag": {
    "type": "phrase",
    "ar": "مرحباً / صباح الخير",
    "en": "Good day / Hello",
    "tr": "İyi günler / Merhaba",
    "ro": "Bună ziua",
    "bs": "Dobar dan / Zdravo"
  },
  "guten morgen": {
    "type": "phrase",
    "ar": "صباح الخير",
    "en": "Good morning",
    "tr": "Günaydın",
    "ro": "Bună dimineața",
    "bs": "Dobro jutro"
  },
  "guten abend": {
    "type": "phrase",
    "ar": "مساء الخير",
    "en": "Good evening",
    "tr": "İyi akşamlar",
    "ro": "Bună seara",
    "bs": "Dobro veče"
  },
  "auf wiedersehen": {
    "type": "phrase",
    "ar": "مع السلامة (رسمي)",
    "en": "Goodbye (formal)",
    "tr": "Hoşçakal (resmi)",
    "ro": "La revedere (formal)",
    "bs": "doviđenja (formalno)"
  },
  "tschüss": {
    "type": "phrase",
    "ar": "مع السلامة (غير رسمي)",
    "en": "Goodbye (informal)",
    "tr": "Görüşürüz",
    "ro": "Pa (informal)",
    "bs": "zbogom (neformalno)"
  },
  "bitte": {
    "type": "phrase",
    "ar": "من فضلك / عفواً",
    "en": "Please / You're welcome",
    "tr": "Lütfen / Rica ederim",
    "ro": "Te rog / Cu plăcere",
    "bs": "Molim / Nema na čemu"
  },
  "danke": {
    "type": "phrase",
    "ar": "شكراً",
    "en": "Thank you",
    "tr": "Teşekkürler",
    "ro": "Mulțumesc",
    "bs": "Hvala ti"
  },
  "name": {
    "type": "noun",
    "article": "der",
    "plural": "Namen",
    "ar": "الاسم",
    "en": "Name",
    "tr": "İsim",
    "ro": "Nume",
    "bs": "Ime"
  },
  "heißen": {
    "type": "verb",
    "prasens": "heißt",
    "prateritum": "hieß",
    "perfekt": "geheißen",
    "helper": "haben",
    "ar": "يُسمّى / اسمه",
    "en": "to be called",
    "tr": "adlandırılmak",
    "ro": "a se numi",
    "bs": "biti pozvan"
  },
  "sein": {
    "type": "verb",
    "prasens": "ist",
    "prateritum": "war",
    "perfekt": "gewesen",
    "helper": "sein",
    "ar": "يكون / يوجد",
    "en": "to be",
    "tr": "olmak",
    "ro": "a fi",
    "bs": "biti"
  },
  "kommen": {
    "type": "verb",
    "prasens": "kommt",
    "prateritum": "kam",
    "perfekt": "gekommen",
    "helper": "sein",
    "ar": "يأتي",
    "en": "to come",
    "tr": "gelmek",
    "ro": "a veni",
    "bs": "doći"
  },
  "wohnen": {
    "type": "verb",
    "prasens": "wohnt",
    "prateritum": "wohnte",
    "perfekt": "gewohnt",
    "helper": "haben",
    "ar": "يسكن / يقطن",
    "en": "to live / dwell",
    "tr": "yaşamak / ikamet etmek",
    "ro": "a locui",
    "bs": "živjeti / boraviti"
  },
  "sprechen": {
    "type": "verb",
    "prasens": "spricht",
    "prateritum": "sprach",
    "perfekt": "gesprochen",
    "helper": "haben",
    "ar": "يتحدث / يتكلم",
    "en": "to speak",
    "tr": "konuşmak",
    "ro": "a vorbi",
    "bs": "govoriti"
  },
  "sprache": {
    "type": "noun",
    "article": "die",
    "plural": "Sprachen",
    "ar": "اللغة",
    "en": "Language",
    "tr": "Dil",
    "ro": "Limbă",
    "bs": "Jezik"
  },
  "land": {
    "type": "noun",
    "article": "das",
    "plural": "Länder",
    "ar": "البلد / الدولة",
    "en": "Country",
    "tr": "Ülke",
    "ro": "Țară",
    "bs": "Država"
  },
  "kurs": {
    "type": "noun",
    "article": "der",
    "plural": "Kurse",
    "ar": "الدورة / الكورس",
    "en": "Course",
    "tr": "Kurs",
    "ro": "Curs",
    "bs": "Naravno"
  },
  "buchstabieren": {
    "type": "verb",
    "prasens": "buchstabiert",
    "prateritum": "buchstabierte",
    "perfekt": "buchstabiert",
    "helper": "haben",
    "ar": "يتهجأ",
    "en": "to spell",
    "tr": "hecelemek",
    "ro": "a silabisi",
    "bs": "spelovati"
  },
  "alphabet": {
    "type": "noun",
    "article": "das",
    "plural": "Alphabete",
    "ar": "الأبجدية",
    "en": "Alphabet",
    "tr": "Alfabe",
    "ro": "Alfabet",
    "bs": "Abeceda"
  },
  "wie geht's": {
    "type": "phrase",
    "ar": "كيف حالك؟",
    "en": "How are you?",
    "tr": "Nasıl gidiyor?",
    "ro": "Ce mai faci?",
    "bs": "Kako si?"
  },
  "gut": {
    "type": "adj",
    "ar": "جيد / بخير",
    "en": "good / fine",
    "tr": "iyi",
    "ro": "bine",
    "bs": "dobro / dobro"
  },
  "nicht gut": {
    "type": "phrase",
    "ar": "ليس جيداً",
    "en": "not good",
    "tr": "iyi değil",
    "ro": "nu prea bine",
    "bs": "nije dobro"
  },
  "es geht": {
    "type": "phrase",
    "ar": "لا بأس / يمشي الحال",
    "en": "so-so",
    "tr": "şöyle böyle",
    "ro": "așa și așa",
    "bs": "tako-tako"
  },
  "müde": {
    "type": "adj",
    "ar": "متعب",
    "en": "tired",
    "tr": "yorgun",
    "ro": "obosit",
    "bs": "umoran"
  },
  "krank": {
    "type": "adj",
    "ar": "مريض",
    "en": "sick",
    "tr": "hasta",
    "ro": "bolnav",
    "bs": "bolestan"
  },
  "kaffee": {
    "type": "noun",
    "article": "der",
    "plural": "Kaffees",
    "ar": "القهوة",
    "en": "Coffee",
    "tr": "Kahve",
    "ro": "Cafea",
    "bs": "Kafa"
  },
  "tee": {
    "type": "noun",
    "article": "der",
    "plural": "Tees",
    "ar": "الشاي",
    "en": "Tea",
    "tr": "Çay",
    "ro": "Ceai",
    "bs": "Tea"
  },
  "wasser": {
    "type": "noun",
    "article": "das",
    "plural": "Wässer",
    "ar": "الماء",
    "en": "Water",
    "tr": "Su",
    "ro": "Apă",
    "bs": "Voda"
  },
  "milch": {
    "type": "noun",
    "article": "die",
    "plural": "—",
    "ar": "الحليب",
    "en": "Milk",
    "tr": "Süt",
    "ro": "Lapte",
    "bs": "Mlijeko"
  },
  "trinken": {
    "type": "verb",
    "prasens": "trinkt",
    "prateritum": "trank",
    "perfekt": "getrunken",
    "helper": "haben",
    "ar": "يشرب",
    "en": "to drink",
    "tr": "içmek",
    "ro": "a bea",
    "bs": "piti"
  },
  "möchten": {
    "type": "verb",
    "prasens": "möchte",
    "prateritum": "wollte",
    "perfekt": "gewollt",
    "helper": "haben",
    "ar": "يريد / يودّ",
    "en": "would like",
    "tr": "istemek (kibarca)",
    "ro": "a dori",
    "bs": "voleo bi"
  },
  "telefonnummer": {
    "type": "noun",
    "article": "die",
    "plural": "Telefonnummern",
    "ar": "رقم الهاتف",
    "en": "Telephone number",
    "tr": "Telefon numarası",
    "ro": "Număr de telefon",
    "bs": "Broj telefona"
  },
  "cafeteria": {
    "type": "noun",
    "article": "die",
    "plural": "Cafeterias",
    "ar": "الكافيتيريا",
    "en": "Cafeteria",
    "tr": "Kafeterya",
    "ro": "Cafenea",
    "bs": "Kafeterija"
  },
  "kosten": {
    "type": "verb",
    "prasens": "kostet",
    "prateritum": "kostete",
    "perfekt": "gekostet",
    "helper": "haben",
    "ar": "يكلّف / يُساوي",
    "en": "to cost",
    "tr": "maliyetinde olmak",
    "ro": "a costa",
    "bs": "da košta"
  },
  "kaufen": {
    "type": "verb",
    "prasens": "kauft",
    "prateritum": "kaufte",
    "perfekt": "gekauft",
    "helper": "haben",
    "ar": "يشتري",
    "en": "to buy",
    "tr": "satın almak",
    "ro": "a cumpăra",
    "bs": "kupiti"
  },
  "teuer": {
    "type": "adj",
    "ar": "غالي",
    "en": "expensive",
    "tr": "pahalı",
    "ro": "scump",
    "bs": "skupo"
  },
  "billig": {
    "type": "adj",
    "ar": "رخيص",
    "en": "cheap",
    "tr": "ucuz",
    "ro": "ieftin",
    "bs": "jeftino"
  },
  "euro": {
    "type": "noun",
    "article": "der",
    "plural": "Euro",
    "ar": "اليورو",
    "en": "Euro",
    "tr": "Euro",
    "ro": "Euro",
    "bs": "Euro"
  },
  "cent": {
    "type": "noun",
    "article": "der",
    "plural": "Cent",
    "ar": "السنت",
    "en": "Cent",
    "tr": "Cent",
    "ro": "Cent",
    "bs": "Cent"
  },
  "laptop": {
    "type": "noun",
    "article": "der",
    "plural": "Laptops",
    "ar": "الحاسوب المحمول",
    "en": "Laptop",
    "tr": "Dizüstü bilgisayar",
    "ro": "Laptop",
    "bs": "Laptop"
  },
  "handy": {
    "type": "noun",
    "article": "das",
    "plural": "Handys",
    "ar": "الهاتف الجوال",
    "en": "Mobile phone",
    "tr": "Cep telefonu",
    "ro": "Telefon mobil",
    "bs": "Mobilni telefon"
  },
  "buch": {
    "type": "noun",
    "article": "das",
    "plural": "Bücher",
    "ar": "الكتاب",
    "en": "Book",
    "tr": "Kitap",
    "ro": "Carte",
    "bs": "Book"
  },
  "uhr": {
    "type": "noun",
    "article": "die",
    "plural": "Uhren",
    "ar": "الساعة",
    "en": "Clock / Watch / Hour",
    "tr": "Saat",
    "ro": "Ceas",
    "bs": "Sat / Sat / Sat"
  },
  "nehmen": {
    "type": "verb",
    "prasens": "nimmt",
    "prateritum": "nahm",
    "perfekt": "genommen",
    "helper": "haben",
    "ar": "يأخذ",
    "en": "to take",
    "tr": "almak",
    "ro": "a lua",
    "bs": "uzeti"
  },
  "flohmarkt": {
    "type": "noun",
    "article": "der",
    "plural": "Flohmärkte",
    "ar": "سوق المستعمل",
    "en": "Flea market",
    "tr": "Bit pazarı",
    "ro": "Târg de vechituri",
    "bs": "Buvlja pijaca"
  },
  "supermarkt": {
    "type": "noun",
    "article": "der",
    "plural": "Supermärkte",
    "ar": "السوبرماركت",
    "en": "Supermarket",
    "tr": "Süpermarket",
    "ro": "Supermarket",
    "bs": "Supermarket"
  },
  "schön": {
    "type": "adj",
    "ar": "جميل",
    "en": "beautiful / nice",
    "tr": "güzel",
    "ro": "frumos",
    "bs": "lijepo / lijepo"
  },
  "groß": {
    "type": "adj",
    "ar": "كبير",
    "en": "big / tall",
    "tr": "büyük",
    "ro": "mare",
    "bs": "veliki / visok"
  },
  "klein": {
    "type": "adj",
    "ar": "صغير",
    "en": "small / little",
    "tr": "küçük",
    "ro": "mic",
    "bs": "mali / mali"
  },
  "neu": {
    "type": "adj",
    "ar": "جديد",
    "en": "new",
    "tr": "yeni",
    "ro": "nou",
    "bs": "novo"
  },
  "alt": {
    "type": "adj",
    "ar": "قديم / كبير السن",
    "en": "old",
    "tr": "eski / yaşlı",
    "ro": "vechi / bătrân",
    "bs": "star"
  },
  "montag": {
    "type": "noun",
    "article": "der",
    "plural": "Montage",
    "ar": "الاثنين",
    "en": "Monday",
    "tr": "Pazartesi",
    "ro": "Luni",
    "bs": "ponedjeljak"
  },
  "dienstag": {
    "type": "noun",
    "article": "der",
    "plural": "Dienstage",
    "ar": "الثلاثاء",
    "en": "Tuesday",
    "tr": "Salı",
    "ro": "Marți",
    "bs": "utorak"
  },
  "mittwoch": {
    "type": "noun",
    "article": "der",
    "plural": "Mittwoche",
    "ar": "الأربعاء",
    "en": "Wednesday",
    "tr": "Çarşamba",
    "ro": "Miercuri",
    "bs": "srijeda"
  },
  "donnerstag": {
    "type": "noun",
    "article": "der",
    "plural": "Donnerstage",
    "ar": "الخميس",
    "en": "Thursday",
    "tr": "Perşembe",
    "ro": "Joi",
    "bs": "četvrtak"
  },
  "freitag": {
    "type": "noun",
    "article": "der",
    "plural": "Freitage",
    "ar": "الجمعة",
    "en": "Friday",
    "tr": "Cuma",
    "ro": "Vineri",
    "bs": "petak"
  },
  "samstag": {
    "type": "noun",
    "article": "der",
    "plural": "Samstage",
    "ar": "السبت",
    "en": "Saturday",
    "tr": "Cumartesi",
    "ro": "Sâmbătă",
    "bs": "Subota"
  },
  "sonntag": {
    "type": "noun",
    "article": "der",
    "plural": "Sonntage",
    "ar": "الأحد",
    "en": "Sunday",
    "tr": "Pazar",
    "ro": "Duminică",
    "bs": "Nedjelja"
  },
  "wochenende": {
    "type": "noun",
    "article": "das",
    "plural": "Wochenenden",
    "ar": "عطلة نهاية الأسبوع",
    "en": "Weekend",
    "tr": "Hafta sonu",
    "ro": "Weekend",
    "bs": "Vikend"
  },
  "aufstehen": {
    "type": "verb",
    "prasens": "steht auf",
    "prateritum": "stand auf",
    "perfekt": "aufgestanden",
    "helper": "sein",
    "ar": "يستيقظ",
    "en": "to get up",
    "tr": "ayağa kalkmak / uyanmak",
    "ro": "a se scula",
    "bs": "da ustanem"
  },
  "frühstücken": {
    "type": "verb",
    "prasens": "frühstückt",
    "prateritum": "frühstückte",
    "perfekt": "gefrühstückt",
    "helper": "haben",
    "ar": "يتناول الفطور",
    "en": "to eat breakfast",
    "tr": "kahvaltı yapmak",
    "ro": "a lua micul dejun",
    "bs": "doručkovati"
  },
  "anfangen": {
    "type": "verb",
    "prasens": "fängt an",
    "prateritum": "fing an",
    "perfekt": "angefangen",
    "helper": "haben",
    "ar": "يبدأ",
    "en": "to begin",
    "tr": "başlamak",
    "ro": "a începe",
    "bs": "za početak"
  },
  "termin": {
    "type": "noun",
    "article": "der",
    "plural": "Termine",
    "ar": "الموعد",
    "en": "Appointment",
    "tr": "Randevu",
    "ro": "Programare",
    "bs": "Imenovanje"
  },
  "morgen": {
    "type": "noun",
    "article": "der",
    "plural": "Morgen",
    "ar": "الصباح",
    "en": "Morning",
    "tr": "Sabah",
    "ro": "Dimineață",
    "bs": "Jutro"
  },
  "abend": {
    "type": "noun",
    "article": "der",
    "plural": "Abende",
    "ar": "المساء",
    "en": "Evening",
    "tr": "Akşam",
    "ro": "Seară",
    "bs": "Večernje"
  },
  "nacht": {
    "type": "noun",
    "article": "die",
    "plural": "Nächte",
    "ar": "الليل",
    "en": "Night",
    "tr": "Gece",
    "ro": "Noapte",
    "bs": "Noć"
  },
  "brot": {
    "type": "noun",
    "article": "das",
    "plural": "Brote",
    "ar": "الخبز",
    "en": "Bread",
    "tr": "Ekmek",
    "ro": "Pâine",
    "bs": "Hleb"
  },
  "tomate": {
    "type": "noun",
    "article": "die",
    "plural": "Tomaten",
    "ar": "الطماطم",
    "en": "Tomato",
    "tr": "Domates",
    "ro": "Roșie",
    "bs": "Paradajz"
  },
  "käse": {
    "type": "noun",
    "article": "der",
    "plural": "—",
    "ar": "الجبن",
    "en": "Cheese",
    "tr": "Peynir",
    "ro": "Brânză",
    "bs": "Sir"
  },
  "fleisch": {
    "type": "noun",
    "article": "das",
    "plural": "—",
    "ar": "اللحم",
    "en": "Meat",
    "tr": "Et",
    "ro": "Carne",
    "bs": "Meso"
  },
  "obst": {
    "type": "noun",
    "article": "das",
    "plural": "—",
    "ar": "الفاكهة",
    "en": "Fruit",
    "tr": "Meyve",
    "ro": "Fructe",
    "bs": "Voće"
  },
  "gemüse": {
    "type": "noun",
    "article": "das",
    "plural": "—",
    "ar": "الخضروات",
    "en": "Vegetables",
    "tr": "Sebze",
    "ro": "Legume",
    "bs": "Povrće"
  },
  "zwiebel": {
    "type": "noun",
    "article": "die",
    "plural": "Zwiebeln",
    "ar": "البصل",
    "en": "Onion",
    "tr": "Soğan",
    "ro": "Ceapă",
    "bs": "Luk"
  },
  "gurke": {
    "type": "noun",
    "article": "die",
    "plural": "Gurken",
    "ar": "الخيار",
    "en": "Cucumber",
    "tr": "Salatalık",
    "ro": "Castravete",
    "bs": "Krastavac"
  },
  "öl": {
    "type": "noun",
    "article": "das",
    "plural": "Öle",
    "ar": "الزيت",
    "en": "Oil",
    "tr": "Yağ",
    "ro": "Ulei",
    "bs": "Ulje"
  },
  "salz": {
    "type": "noun",
    "article": "das",
    "plural": "Salze",
    "ar": "الملح",
    "en": "Salt",
    "tr": "Tuz",
    "ro": "Sare",
    "bs": "Sol"
  },
  "kilo": {
    "type": "noun",
    "article": "das",
    "plural": "Kilos",
    "ar": "الكيلو",
    "en": "Kilo",
    "tr": "Kilo",
    "ro": "Kilogram",
    "bs": "Kilo"
  },
  "gramm": {
    "type": "noun",
    "article": "das",
    "plural": "Gramm",
    "ar": "الغرام",
    "en": "Gram",
    "tr": "Gram",
    "ro": "Gram",
    "bs": "Gram"
  },
  "liter": {
    "type": "noun",
    "article": "der",
    "plural": "Liter",
    "ar": "اللتر",
    "en": "Liter",
    "tr": "Litre",
    "ro": "Litru",
    "bs": "Litara"
  },
  "flasche": {
    "type": "noun",
    "article": "die",
    "plural": "Flaschen",
    "ar": "الزجاجة",
    "en": "Bottle",
    "tr": "Şişe",
    "ro": "Sticlă",
    "bs": "Boca"
  },
  "brauchen": {
    "type": "verb",
    "prasens": "braucht",
    "prateritum": "brauchte",
    "perfekt": "gebraucht",
    "helper": "haben",
    "ar": "يحتاج",
    "en": "to need",
    "tr": "ihtiyacı olmak",
    "ro": "a avea nevoie",
    "bs": "da treba"
  },
  "kochen": {
    "type": "verb",
    "prasens": "kocht",
    "prateritum": "kochte",
    "perfekt": "gekocht",
    "helper": "haben",
    "ar": "يطبخ",
    "en": "to cook",
    "tr": "yemek pişirmek",
    "ro": "a găti",
    "bs": "kuhati"
  },
  "essen": {
    "type": "verb",
    "prasens": "isst",
    "prateritum": "aß",
    "perfekt": "gegessen",
    "helper": "haben",
    "ar": "يأكل",
    "en": "to eat",
    "tr": "yemek yemek",
    "ro": "a mânca",
    "bs": "jesti"
  },
  "lecker": {
    "type": "adj",
    "ar": "لذيذ",
    "en": "delicious",
    "tr": "lezzetli",
    "ro": "gustos",
    "bs": "ukusno"
  },
  "rezept": {
    "type": "noun",
    "article": "das",
    "plural": "Rezepte",
    "ar": "الوصفة",
    "en": "Recipe",
    "tr": "Tarif",
    "ro": "Rețetă",
    "bs": "Recept"
  },
  "familie": {
    "type": "noun",
    "article": "die",
    "plural": "Familien",
    "ar": "العائلة",
    "en": "Family",
    "tr": "Aile",
    "ro": "Familie",
    "bs": "Porodica"
  },
  "vater": {
    "type": "noun",
    "article": "der",
    "plural": "Väter",
    "ar": "الأب",
    "en": "Father",
    "tr": "Baba",
    "ro": "Tată",
    "bs": "Oče"
  },
  "mutter": {
    "type": "noun",
    "article": "die",
    "plural": "Mütter",
    "ar": "الأم",
    "en": "Mother",
    "tr": "Anne",
    "ro": "Mamă",
    "bs": "Majko"
  },
  "bruder": {
    "type": "noun",
    "article": "der",
    "plural": "Brüder",
    "ar": "الأخ",
    "en": "Brother",
    "tr": "Erkek kardeş",
    "ro": "Frate",
    "bs": "brate"
  },
  "schwester": {
    "type": "noun",
    "article": "die",
    "plural": "Schwestern",
    "ar": "الأخت",
    "en": "Sister",
    "tr": "Kız kardeş",
    "ro": "Soră",
    "bs": "Sestro"
  },
  "sohn": {
    "type": "noun",
    "article": "der",
    "plural": "Söhne",
    "ar": "الابن",
    "en": "Son",
    "tr": "Oğul",
    "ro": "Fiu",
    "bs": "Sin"
  },
  "tochter": {
    "type": "noun",
    "article": "die",
    "plural": "Töchter",
    "ar": "الابنة",
    "en": "Daughter",
    "tr": "Kız evlat",
    "ro": "Fiică",
    "bs": "kćeri"
  },
  "großvater": {
    "type": "noun",
    "article": "der",
    "plural": "Großväter",
    "ar": "الجد",
    "en": "Grandfather",
    "tr": "Dede",
    "ro": "Bunic",
    "bs": "Djed"
  },
  "großmutter": {
    "type": "noun",
    "article": "die",
    "plural": "Großmütter",
    "ar": "الجدة",
    "en": "Grandmother",
    "tr": "Nene",
    "ro": "Bunică",
    "bs": "Bako"
  },
  "kind": {
    "type": "noun",
    "article": "das",
    "plural": "Kinder",
    "ar": "الطفل",
    "en": "Child",
    "tr": "Çocuk",
    "ro": "Copil",
    "bs": "Dijete"
  },
  "geburtstag": {
    "type": "noun",
    "article": "der",
    "plural": "Geburtstage",
    "ar": "عيد الميلاد",
    "en": "Birthday",
    "tr": "Doğum günü",
    "ro": "Zi de naștere",
    "bs": "Rođendan"
  },
  "foto": {
    "type": "noun",
    "article": "das",
    "plural": "Fotos",
    "ar": "الصورة",
    "en": "Photo",
    "tr": "Fotoğraf",
    "ro": "Fotografie",
    "bs": "Fotografija"
  },
  "wohnung": {
    "type": "noun",
    "article": "die",
    "plural": "Wohnungen",
    "ar": "الشقة",
    "en": "Apartment",
    "tr": "Daire",
    "ro": "Apartament",
    "bs": "Apartman"
  },
  "haus": {
    "type": "noun",
    "article": "das",
    "plural": "Häuser",
    "ar": "المنزل",
    "en": "House",
    "tr": "Ev",
    "ro": "Casă",
    "bs": "Kuća"
  },
  "zimmer": {
    "type": "noun",
    "article": "das",
    "plural": "Zimmer",
    "ar": "الغرفة",
    "en": "Room",
    "tr": "Oda",
    "ro": "Cameră",
    "bs": "Soba"
  },
  "wohnzimmer": {
    "type": "noun",
    "article": "das",
    "plural": "Wohnzimmer",
    "ar": "غرفة المعيشة",
    "en": "Living room",
    "tr": "Oturma odası",
    "ro": "Living",
    "bs": "Dnevni boravak"
  },
  "schlafzimmer": {
    "type": "noun",
    "article": "das",
    "plural": "Schlafzimmer",
    "ar": "غرفة النوم",
    "en": "Bedroom",
    "tr": "Yatak odası",
    "ro": "Dormitor",
    "bs": "Spavaca soba"
  },
  "küche": {
    "type": "noun",
    "article": "die",
    "plural": "Küchen",
    "ar": "المطبخ",
    "en": "Kitchen",
    "tr": "Mutfak",
    "ro": "Bucătărie",
    "bs": "Kuhinja"
  },
  "bad": {
    "type": "noun",
    "article": "das",
    "plural": "Bäder",
    "ar": "الحمام",
    "en": "Bathroom",
    "tr": "Banyo",
    "ro": "Baie",
    "bs": "Kupatilo"
  },
  "badezimmer": {
    "type": "noun",
    "article": "das",
    "plural": "Badezimmer",
    "ar": "الحمام",
    "en": "Bathroom",
    "tr": "Banyo",
    "ro": "Baie",
    "bs": "Kupatilo"
  },
  "miete": {
    "type": "noun",
    "article": "die",
    "plural": "Mieten",
    "ar": "الإيجار",
    "en": "Rent",
    "tr": "Kira",
    "ro": "Chirie",
    "bs": "Najam"
  },
  "stock": {
    "type": "noun",
    "article": "der",
    "plural": "Stockwerke",
    "ar": "الطابق",
    "en": "Floor / Story",
    "tr": "Kat",
    "ro": "Etaj",
    "bs": "Kat / Priča"
  },
  "etage": {
    "type": "noun",
    "article": "die",
    "plural": "Etagen",
    "ar": "الطابق",
    "en": "Floor",
    "tr": "Kat",
    "ro": "Etaj",
    "bs": "Kat"
  },
  "sofa": {
    "type": "noun",
    "article": "das",
    "plural": "Sofas",
    "ar": "الأريكة",
    "en": "Sofa",
    "tr": "Kanepe",
    "ro": "Canapea",
    "bs": "Sofa"
  },
  "schrank": {
    "type": "noun",
    "article": "der",
    "plural": "Schränke",
    "ar": "الخزانة",
    "en": "Cabinet / Wardrobe",
    "tr": "Dolap",
    "ro": "Dulap",
    "bs": "Ormar / Ormar"
  },
  "bett": {
    "type": "noun",
    "article": "das",
    "plural": "Betten",
    "ar": "السرير",
    "en": "Bed",
    "tr": "Yatak",
    "ro": "Pat",
    "bs": "Bed"
  },
  "tisch": {
    "type": "noun",
    "article": "der",
    "plural": "Tische",
    "ar": "الطاولة",
    "en": "Table",
    "tr": "Masa",
    "ro": "Masă",
    "bs": "Table"
  },
  "stuhl": {
    "type": "noun",
    "article": "der",
    "plural": "Stühle",
    "ar": "الكرسي",
    "en": "Chair",
    "tr": "Sandalye",
    "ro": "Scaun",
    "bs": "Stolica"
  },
  "kopf": {
    "type": "noun",
    "article": "der",
    "plural": "Köpfe",
    "ar": "الرأس",
    "en": "Head",
    "tr": "Kafa",
    "ro": "Cap",
    "bs": "Glava"
  },
  "bauch": {
    "type": "noun",
    "article": "der",
    "plural": "Bäuche",
    "ar": "البطن",
    "en": "Belly / Stomach",
    "tr": "Karın",
    "ro": "Burta",
    "bs": "Trbuh / stomak"
  },
  "hals": {
    "type": "noun",
    "article": "der",
    "plural": "Hälse",
    "ar": "الحلق / الرقبة",
    "en": "Throat / Neck",
    "tr": "Boğaz / Boyun",
    "ro": "Gât",
    "bs": "Grlo / Vrat"
  },
  "rücken": {
    "type": "noun",
    "article": "der",
    "plural": "Rücken",
    "ar": "الظهر",
    "en": "Back",
    "tr": "Arka / Sırt",
    "ro": "Spate",
    "bs": "Nazad"
  },
  "kopfschmerzen": {
    "type": "noun",
    "article": "die",
    "plural": "—",
    "ar": "صداع الرأس",
    "en": "Headache",
    "tr": "Baş ağrısı",
    "ro": "Durere de cap",
    "bs": "Glavobolja"
  },
  "fieber": {
    "type": "noun",
    "article": "das",
    "plural": "—",
    "ar": "الحمى / السخونة",
    "en": "Fever",
    "tr": "Ateş",
    "ro": "Febră",
    "bs": "Vrućica"
  },
  "erkältung": {
    "type": "noun",
    "article": "die",
    "plural": "Erkältungen",
    "ar": "البرد / الرشح",
    "en": "Common cold",
    "tr": "Soğuk algınlığı",
    "ro": "Răceală",
    "bs": "Obična prehlada"
  },
  "arzt": {
    "type": "noun",
    "article": "der",
    "plural": "Ärzte",
    "ar": "الطبيب",
    "en": "Doctor (male)",
    "tr": "Doktor",
    "ro": "Medic",
    "bs": "doktor (muško)"
  },
  "ärztin": {
    "type": "noun",
    "article": "die",
    "plural": "Ärztinnen",
    "ar": "الطبيبة",
    "en": "Doctor (female)",
    "tr": "Bayan doktor",
    "ro": "Medic (femeie)",
    "bs": "doktorica (žena)"
  },
  "krankenhaus": {
    "type": "noun",
    "article": "das",
    "plural": "Krankenhäuser",
    "ar": "المستشفى",
    "en": "Hospital",
    "tr": "Hastane",
    "ro": "Spital",
    "bs": "Bolnica"
  },
  "medikament": {
    "type": "noun",
    "article": "das",
    "plural": "Medikamente",
    "ar": "الدواء",
    "en": "Medicine / Drug",
    "tr": "İlaç",
    "ro": "Medicament",
    "bs": "Medicina / Drog"
  },
  "müssen": {
    "type": "verb",
    "prasens": "muss",
    "prateritum": "musste",
    "perfekt": "gemusst",
    "helper": "haben",
    "ar": "يجب",
    "en": "must / have to",
    "tr": "zorunda olmak",
    "ro": "a trebui",
    "bs": "mora / mora"
  },
  "können": {
    "type": "verb",
    "prasens": "kann",
    "prateritum": "konnte",
    "perfekt": "gekonnt",
    "helper": "haben",
    "ar": "يستطيع / يمكن",
    "en": "can / be able to",
    "tr": "bilmek / ebilmek",
    "ro": "a putea",
    "bs": "mogu / mogu"
  },
  "dürfen": {
    "type": "verb",
    "prasens": "darf",
    "prateritum": "durfte",
    "perfekt": "gedurft",
    "helper": "haben",
    "ar": "يجوز / مسموح",
    "en": "may / be allowed to",
    "tr": "izinli olmak",
    "ro": "a avea voie",
    "bs": "može / biti dozvoljeno"
  },
  "wehtun": {
    "type": "verb",
    "prasens": "tut weh",
    "prateritum": "tat weh",
    "perfekt": "wehgetan",
    "helper": "haben",
    "ar": "يؤلم",
    "en": "to hurt",
    "tr": "acımak",
    "ro": "a durea",
    "bs": "da boli"
  },
  "gesund": {
    "type": "adj",
    "ar": "بصحة جيدة / صحي",
    "en": "healthy / sound",
    "tr": "sağlıklı",
    "ro": "sănătos",
    "bs": "zdrav / zdrav"
  },
  "sport": {
    "type": "noun",
    "article": "der",
    "plural": "—",
    "ar": "الرياضة",
    "en": "Sport",
    "tr": "Spor",
    "ro": "Sport",
    "bs": "Sport"
  },
  "zug": {
    "type": "noun",
    "article": "der",
    "plural": "Züge",
    "ar": "القطار",
    "en": "Train",
    "tr": "Tren",
    "ro": "Tren",
    "bs": "Vlak"
  },
  "auto": {
    "type": "noun",
    "article": "das",
    "plural": "Autos",
    "ar": "السيارة",
    "en": "Car",
    "tr": "Araba",
    "ro": "Mașină",
    "bs": "Auto"
  },
  "fahrrad": {
    "type": "noun",
    "article": "das",
    "plural": "Fahrräder",
    "ar": "الدراجة",
    "en": "Bicycle",
    "tr": "Bisiklet",
    "ro": "Bicicletă",
    "bs": "Bicikl"
  },
  "u-bahn": {
    "type": "noun",
    "article": "die",
    "plural": "U-Bahnen",
    "ar": "مترو الأنفاق",
    "en": "Subway",
    "tr": "Metro",
    "ro": "Metrou",
    "bs": "Podzemna željeznica"
  },
  "bus": {
    "type": "noun",
    "article": "der",
    "plural": "Busse",
    "ar": "الحافلة",
    "en": "Bus",
    "tr": "Otobüs",
    "ro": "Autobuz",
    "bs": "Autobus"
  },
  "fahrkarte": {
    "type": "noun",
    "article": "die",
    "plural": "Fahrkarten",
    "ar": "التذكرة",
    "en": "Ticket",
    "tr": "Bilet",
    "ro": "Bilet",
    "bs": "Ticket"
  },
  "bahnhof": {
    "type": "noun",
    "article": "der",
    "plural": "Bahnhöfe",
    "ar": "محطة القطار",
    "en": "Train station",
    "tr": "İstasyon",
    "ro": "Gară",
    "bs": "Željeznička stanica"
  },
  "gleis": {
    "type": "noun",
    "article": "das",
    "plural": "Gleise",
    "ar": "الرصيف / السكة",
    "en": "Platform / Track",
    "tr": "Peron",
    "ro": "Linie / Peron",
    "bs": "Platforma / staza"
  },
  "abfahren": {
    "type": "verb",
    "prasens": "fährt ab",
    "prateritum": "fuhr ab",
    "perfekt": "abgefahren",
    "helper": "sein",
    "ar": "يغادر / يقلع",
    "en": "to depart",
    "tr": "hareket etmek",
    "ro": "a pleca",
    "bs": "da ode"
  },
  "ankommen": {
    "type": "verb",
    "prasens": "kommt an",
    "prateritum": "kam an",
    "perfekt": "angekommen",
    "helper": "sein",
    "ar": "يصل",
    "en": "to arrive",
    "tr": "varmak",
    "ro": "a sosi",
    "bs": "stići"
  },
  "geradeaus": {
    "type": "adv",
    "ar": "إلى الأمام مباشرة",
    "en": "straight ahead",
    "tr": "düz gitmek",
    "ro": "drept înainte",
    "bs": "pravo naprijed"
  },
  "rechts": {
    "type": "adv",
    "ar": "يميناً",
    "en": "right",
    "tr": "sağ",
    "ro": "dreapta",
    "bs": "u pravu"
  },
  "links": {
    "type": "adv",
    "ar": "يساراً",
    "en": "left",
    "tr": "sol",
    "ro": "stânga",
    "bs": "lijevo"
  },
  "hobby": {
    "type": "noun",
    "article": "das",
    "plural": "Hobbies",
    "ar": "الهواية",
    "en": "Hobby",
    "tr": "Hobi",
    "ro": "Hobby",
    "bs": "Hobi"
  },
  "fußball": {
    "type": "noun",
    "article": "der",
    "plural": "Fußbälle",
    "ar": "كرة القدم",
    "en": "Football",
    "tr": "Futbol",
    "ro": "Fotbal",
    "bs": "Fudbal"
  },
  "tennis": {
    "type": "noun",
    "article": "das",
    "plural": "—",
    "ar": "التنس",
    "en": "Tennis",
    "tr": "Tenis",
    "ro": "Tenis",
    "bs": "Tenis"
  },
  "schwimmen": {
    "type": "noun",
    "article": "das",
    "plural": "—",
    "ar": "السباحة",
    "en": "Swimming",
    "tr": "Yüzme",
    "ro": "Înot",
    "bs": "Plivanje"
  },
  "musik": {
    "type": "noun",
    "article": "die",
    "plural": "—",
    "ar": "الموسيقى",
    "en": "Music",
    "tr": "Müzik",
    "ro": "Muzică",
    "bs": "Muzika"
  },
  "lesen": {
    "type": "verb",
    "prasens": "liest",
    "prateritum": "las",
    "perfekt": "gelesen",
    "helper": "haben",
    "ar": "يقرأ",
    "en": "to read",
    "tr": "okumak",
    "ro": "a citi",
    "bs": "čitati"
  },
  "spielen": {
    "type": "verb",
    "prasens": "spielt",
    "prateritum": "spielte",
    "perfekt": "gespielt",
    "helper": "haben",
    "ar": "يلعب",
    "en": "to play",
    "tr": "oynamak",
    "ro": "a se juca",
    "bs": "igrati"
  },
  "hören": {
    "type": "verb",
    "prasens": "hört",
    "prateritum": "hörte",
    "perfekt": "gehört",
    "helper": "haben",
    "ar": "يسمع / يستمع",
    "en": "to hear / listen",
    "tr": "duymak / dinlemek",
    "ro": "a auzi / a asculta",
    "bs": "čuti/slušati"
  },
  "gern": {
    "type": "adv",
    "ar": "يحب / بسرور",
    "en": "gladly",
    "tr": "severek / memnuniyetle",
    "ro": "cu plăcere",
    "bs": "rado"
  },
  "spaß": {
    "type": "noun",
    "article": "der",
    "plural": "Späße",
    "ar": "المتعة / المرح",
    "en": "Fun",
    "tr": "Eğlence",
    "ro": "Distracție",
    "bs": "Zabava"
  },
  "kino": {
    "type": "noun",
    "article": "das",
    "plural": "Kinos",
    "ar": "السينما",
    "en": "Cinema",
    "tr": "Sinema",
    "ro": "Cinema",
    "bs": "Bioskop"
  },
  "konzert": {
    "type": "noun",
    "article": "das",
    "plural": "Konzerte",
    "ar": "الحفلة الموسيقية",
    "en": "Concert",
    "tr": "Konser",
    "ro": "Concert",
    "bs": "Koncert"
  },
  "einladung": {
    "type": "noun",
    "article": "die",
    "plural": "Einladungen",
    "ar": "الدعوة",
    "en": "Invitation",
    "tr": "Davetiye",
    "ro": "Invitație",
    "bs": "Poziv"
  },
  "arbeit": {
    "type": "noun",
    "article": "die",
    "plural": "—",
    "ar": "العمل",
    "en": "Work",
    "tr": "İş",
    "ro": "Muncă",
    "bs": "Posao"
  },
  "job": {
    "type": "noun",
    "article": "der",
    "plural": "Jobs",
    "ar": "الوظيفة",
    "en": "Job",
    "tr": "İş",
    "ro": "Job",
    "bs": "Posao"
  },
  "beruf": {
    "type": "noun",
    "article": "der",
    "plural": "Berufe",
    "ar": "المهنة",
    "en": "Profession",
    "tr": "Meslek",
    "ro": "Profesie",
    "bs": "Profesija"
  },
  "lehrer": {
    "type": "noun",
    "article": "der",
    "plural": "Lehrer",
    "ar": "المعلم",
    "en": "Teacher (male)",
    "tr": "Öğretmen",
    "ro": "Profesor",
    "bs": "Učitelj (muško)"
  },
  "ingenieur": {
    "type": "noun",
    "article": "der",
    "plural": "Ingenieure",
    "ar": "المهندس",
    "en": "Engineer",
    "tr": "Mühendis",
    "ro": "Inginer",
    "bs": "Inženjer"
  },
  "koch": {
    "type": "noun",
    "article": "der",
    "plural": "Köche",
    "ar": "الطباخ",
    "en": "Cook / Chef",
    "tr": "Aşçı",
    "ro": "Bucătar",
    "bs": "Kuvar / Kuvar"
  },
  "verkäufer": {
    "type": "noun",
    "article": "der",
    "plural": "Verkäufer",
    "ar": "البائع",
    "en": "Seller / Clerk",
    "tr": "Satıcı",
    "ro": "Vânzător",
    "bs": "Prodavac / Službenik"
  },
  "büro": {
    "type": "noun",
    "article": "das",
    "plural": "Büros",
    "ar": "المكتب",
    "en": "Office",
    "tr": "Ofis",
    "ro": "Birou",
    "bs": "Ured"
  },
  "arbeiten": {
    "type": "verb",
    "prasens": "arbeitet",
    "prateritum": "arbeitete",
    "perfekt": "gearbeitet",
    "helper": "haben",
    "ar": "يعمل",
    "en": "to work",
    "tr": "çalışmak",
    "ro": "a lucra",
    "bs": "na posao"
  },
  "gehalt": {
    "type": "noun",
    "article": "das",
    "plural": "Gehälter",
    "ar": "الراتب",
    "en": "Salary",
    "tr": "Maaş",
    "ro": "Salariu",
    "bs": "Plata"
  },
  "stunde": {
    "type": "noun",
    "article": "die",
    "plural": "Stunden",
    "ar": "الساعة",
    "en": "Hour",
    "tr": "Saat",
    "ro": "Oră",
    "bs": "Sat"
  },
  "restaurant": {
    "type": "noun",
    "article": "das",
    "plural": "Restaurants",
    "ar": "المطعم",
    "en": "Restaurant",
    "tr": "Restoran",
    "ro": "Restaurant",
    "bs": "Restoran"
  },
  "speisekarte": {
    "type": "noun",
    "article": "die",
    "plural": "Speisekarten",
    "ar": "قائمة الطعام",
    "en": "Menu",
    "tr": "Menü / Yemek listesi",
    "ro": "Meniu",
    "bs": "Meni"
  },
  "kellner": {
    "type": "noun",
    "article": "der",
    "plural": "Kellner",
    "ar": "النادل",
    "en": "Waiter",
    "tr": "Garson",
    "ro": "Chelner",
    "bs": "Konobar"
  },
  "vorspeise": {
    "type": "noun",
    "article": "die",
    "plural": "Vorspeisen",
    "ar": "المقبلات",
    "en": "Appetizer",
    "tr": "Meze / Giriş yemeği",
    "ro": "Aperitiv",
    "bs": "Predjelo"
  },
  "hauptspeise": {
    "type": "noun",
    "article": "die",
    "plural": "Hauptspeisen",
    "ar": "الطبق الرئيسي",
    "en": "Main course",
    "tr": "Ana yemek",
    "ro": "Fel principal",
    "bs": "Glavno jelo"
  },
  "dessert": {
    "type": "noun",
    "article": "das",
    "plural": "Desserts",
    "ar": "الحلوى",
    "en": "Dessert",
    "tr": "Tatlı",
    "ro": "Desert",
    "bs": "Desert"
  },
  "schnitzel": {
    "type": "noun",
    "article": "das",
    "plural": "Schnitzel",
    "ar": "الشنيتزل",
    "en": "Schnitzel",
    "tr": "Şnitzel",
    "ro": "Șnițel",
    "bs": "Schnitzel"
  },
  "suppe": {
    "type": "noun",
    "article": "die",
    "plural": "Suppen",
    "ar": "الشوربة",
    "en": "Soup",
    "tr": "Çorba",
    "ro": "Supă",
    "bs": "Supa"
  },
  "bestellen": {
    "type": "verb",
    "prasens": "bestellt",
    "prateritum": "bestellte",
    "perfekt": "bestellt",
    "helper": "haben",
    "ar": "يطلب",
    "en": "to order",
    "tr": "sipariş vermek",
    "ro": "a comanda",
    "bs": "naručiti"
  },
  "trinkgeld": {
    "type": "noun",
    "article": "das",
    "plural": "Trinkgelder",
    "ar": "البقشيش / الإكرامية",
    "en": "Tip",
    "tr": "Bahşiş",
    "ro": "Bacșiș",
    "bs": "Savjet"
  },
  "gehen": {
    "type": "verb",
    "prasens": "geht",
    "prateritum": "ging",
    "perfekt": "gegangen",
    "helper": "sein",
    "ar": "يذهب",
    "en": "to go",
    "tr": "gitmek",
    "ro": "a merge",
    "bs": "ići"
  },
  "fahren": {
    "type": "verb",
    "prasens": "fährt",
    "prateritum": "fuhr",
    "perfekt": "gefahren",
    "helper": "sein",
    "ar": "يسافر / يقود",
    "en": "to drive / ride",
    "tr": "sürmek / gitmek",
    "ro": "a conduce / a merge",
    "bs": "voziti / voziti se"
  },
  "schreiben": {
    "type": "verb",
    "prasens": "schreibt",
    "prateritum": "schrieb",
    "perfekt": "geschrieben",
    "helper": "haben",
    "ar": "يكتب",
    "en": "to write",
    "tr": "yazmak",
    "ro": "a scrie",
    "bs": "pisati"
  },
  "verstehen": {
    "type": "verb",
    "prasens": "versteht",
    "prateritum": "verstand",
    "perfekt": "verstanden",
    "helper": "haben",
    "ar": "يفهم",
    "en": "to understand",
    "tr": "anlamak",
    "ro": "a înțelege",
    "bs": "razumjeti"
  },
  "lernen": {
    "type": "verb",
    "prasens": "lernt",
    "prateritum": "lernte",
    "perfekt": "gelernt",
    "helper": "haben",
    "ar": "يتعلم",
    "en": "to learn",
    "tr": "öğrenmek",
    "ro": "a învăța",
    "bs": "učiti"
  },
  "suchen": {
    "type": "verb",
    "prasens": "sucht",
    "prateritum": "suchte",
    "perfekt": "gesucht",
    "helper": "haben",
    "ar": "يبحث عن",
    "en": "to search / look for",
    "tr": "aramak",
    "ro": "a căuta",
    "bs": "tražiti / tražiti"
  },
  "finden": {
    "type": "verb",
    "prasens": "findet",
    "prateritum": "fand",
    "perfekt": "gefunden",
    "helper": "haben",
    "ar": "يجد",
    "en": "to find",
    "tr": "bulmak",
    "ro": "a găsi",
    "bs": "pronaći"
  },
  "haben": {
    "type": "verb",
    "prasens": "hat",
    "prateritum": "hatte",
    "perfekt": "gehabt",
    "helper": "haben",
    "ar": "يمتلك / عنده",
    "en": "to have",
    "tr": "sahip olmak",
    "ro": "a avea",
    "bs": "imati"
  },
  "geben": {
    "type": "verb",
    "prasens": "gibt",
    "prateritum": "gab",
    "perfekt": "gegeben",
    "helper": "haben",
    "ar": "يعطي",
    "en": "to give",
    "tr": "vermek",
    "ro": "a oferi",
    "bs": "dati"
  },
  "sehen": {
    "type": "verb",
    "prasens": "sieht",
    "prateritum": "sah",
    "perfekt": "gesehen",
    "helper": "haben",
    "ar": "يرى",
    "en": "to see",
    "tr": "görmek",
    "ro": "a vedea",
    "bs": "vidjeti"
  },
  "machen": {
    "type": "verb",
    "prasens": "macht",
    "prateritum": "machte",
    "perfekt": "gemacht",
    "helper": "haben",
    "ar": "يفعل / يصنع",
    "en": "to do / make",
    "tr": "yapmak",
    "ro": "a face",
    "bs": "učiniti / napraviti"
  },
  "helfen": {
    "type": "verb",
    "prasens": "hilft",
    "prateritum": "half",
    "perfekt": "geholfen",
    "helper": "haben",
    "ar": "يساعد",
    "en": "to help",
    "tr": "yardım etmek",
    "ro": "a ajuta",
    "bs": "pomoći"
  },
  "fragen": {
    "type": "verb",
    "prasens": "fragt",
    "prateritum": "fragte",
    "perfekt": "gefragt",
    "helper": "haben",
    "ar": "يسأل",
    "en": "to ask",
    "tr": "sormak",
    "ro": "a întreba",
    "bs": "pitati"
  },
  "antworten": {
    "type": "verb",
    "prasens": "antwortet",
    "prateritum": "antwortete",
    "perfekt": "antworteten",
    "helper": "haben",
    "ar": "يجيب",
    "en": "to answer",
    "tr": "cevap vermek",
    "ro": "a răspunde",
    "bs": "odgovoriti"
  },
  "kalt": {
    "type": "adj",
    "ar": "بارد",
    "en": "cold",
    "tr": "soğuk",
    "ro": "rece",
    "bs": "hladno"
  },
  "warm": {
    "type": "adj",
    "ar": "دافئ",
    "en": "warm",
    "tr": "sıcak / ılık",
    "ro": "cald",
    "bs": "toplo"
  },
  "heiß": {
    "type": "adj",
    "ar": "حار / ساخن",
    "en": "hot",
    "tr": "çok sıcak",
    "ro": "fierbinte",
    "bs": "vruće"
  },
  "mädchen": {
    "type": "noun",
    "article": "das",
    "plural": "Mädchen",
    "ar": "الفتاة / البنت",
    "en": "Girl",
    "tr": "Kız çocuk",
    "ro": "Fată",
    "bs": "Girl"
  },
  "dokument": {
    "type": "noun",
    "article": "das",
    "plural": "Dokumente",
    "ar": "الوثيقة / المستند",
    "en": "Document",
    "tr": "Belge / Doküman",
    "ro": "Document",
    "bs": "Dokument"
  }
};

// ── State ────────────────────────────────────────────────────
let currentSumChapter = "1";
let editingRowIndex = null;
let editingField = null;

// ── Heuristic prediction functions ─────────────────────────────

function analyzeGermanWord(rawInput) {
  let text = rawInput.trim();
  if (!text) return null;

  let articleOverride = null;
  const articleRegex = /^(der|die|das)\s+(.+)$/i;
  const match = text.match(articleRegex);
  if (match) {
    articleOverride = match[1].toLowerCase();
    text = match[2].trim();
  }

  const cleanLower = text.toLowerCase();
  
  if (SUMMARIZER_DICT[cleanLower]) {
    const entry = { ...SUMMARIZER_DICT[cleanLower] };
    entry.word = entry.type === 'noun' ? text.charAt(0).toUpperCase() + text.slice(1) : text;
    if (articleOverride) entry.article = articleOverride;
    return entry;
  }

  const isCapitalized = text[0] === text[0].toUpperCase();
  
  if (isCapitalized || articleOverride) {
    return {
      word: text.charAt(0).toUpperCase() + text.slice(1),
      type: "noun",
      article: articleOverride || predictNounArticle(cleanLower),
      plural: "—",
      ar: "", en: "", tr: "", ro: ""
    };
  } else if (cleanLower.endsWith("en") || cleanLower.endsWith("ern") || cleanLower.endsWith("eln")) {
    const forms = conjugateVerbRegular(cleanLower);
    return {
      word: cleanLower,
      type: "verb",
      prasens: forms.prasens,
      prateritum: forms.prateritum,
      perfekt: forms.perfekt,
      helper: forms.helper,
      ar: "", en: "", tr: "", ro: ""
    };
  } else {
    return {
      word: cleanLower,
      type: "adj",
      ar: "", en: "", tr: "", ro: ""
    };
  }
}

function predictNounArticle(word) {
  if (word.endsWith("ung") || word.endsWith("heit") || word.endsWith("keit") || 
      word.endsWith("schaft") || word.endsWith("ion") || word.endsWith("tät") || 
      word.endsWith("ik") || word.endsWith("ei") || word.endsWith("enz") || 
      word.endsWith("anz") || word.endsWith("ie") || word.endsWith("ur") ||
      word.endsWith("e")) {
    return "die";
  }
  if (word.endsWith("chen") || word.endsWith("lein") || word.endsWith("ment") || 
      word.endsWith("um") || word.endsWith("ma") || word.endsWith("ett")) {
    return "das";
  }
  if (word.endsWith("ismus") || word.endsWith("ist") || word.endsWith("ling")) {
    return "der";
  }
  return "der"; 
}

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

  const seinVerbs = ["gehen", "kommen", "fahren", "fliegen", "laufen", "reisen", "wandern", "bleiben", "sein", "aufstehen", "abfahren", "ankommen", "einschlafen", "sterben", "wachsen", "rennen"];
  if (seinVerbs.includes(verb)) {
    helper = "sein";
  }

  let prasens = stem + "t";
  if (stem.endsWith("t") || stem.endsWith("d") || stem.endsWith("fn") || stem.endsWith("chn") || stem.endsWith("gn")) {
    prasens = stem + "et";
  } else if (stem.endsWith("s") || stem.endsWith("ß") || stem.endsWith("z") || stem.endsWith("x")) {
    prasens = stem + "t";
  }

  let prateritum = stem + "te";
  if (stem.endsWith("t") || stem.endsWith("d") || stem.endsWith("fn") || stem.endsWith("chn") || stem.endsWith("gn")) {
    prateritum = stem + "ete";
  }

  let perfekt = "ge" + stem + "t";
  if (stem.endsWith("t") || stem.endsWith("d") || stem.endsWith("fn") || stem.endsWith("chn") || stem.endsWith("gn")) {
    perfekt = "ge" + stem + "et";
  }

  if (verb.endsWith("ieren")) {
    perfekt = stem + "t";
  }

  const inseparablePrefixes = ["be", "ent", "er", "ver", "zer", "ge", "emp"];
  for (let pref of inseparablePrefixes) {
    if (verb.startsWith(pref) && verb.length > pref.length + 2) {
      perfekt = verb.endsWith("en") ? verb.slice(0, -2) + "t" : verb.slice(0, -1) + "t";
      break;
    }
  }

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

  return { prasens, prateritum, perfekt, helper };
}

// ── Persistence ───────────────────────────────────────────────

function getCustomVocab() {
  const progress = getSavedProgress();
  if (!progress.customVocab) progress.customVocab = {};
  return progress.customVocab;
}

function saveCustomVocab(customVocab) {
  const progress = getSavedProgress();
  progress.customVocab = customVocab;
  saveProgress(progress);
}

// ── UI Handlers ───────────────────────────────────────────────

function initSummarizer() {
  currentSumChapter = document.getElementById("sumChapterFilter")?.value || "1";
  
  const dropdown = document.getElementById("sumChapterFilter");
  if (dropdown && dropdown.options.length <= 1) {
    dropdown.innerHTML = "";
    CURRICULUM.forEach(ch => {
      const opt = document.createElement("option");
      opt.value = ch.id;
      // Get translated chapter label
      const chLabel = getTranslation('chapter_label', 'الوحدة');
      const title = getChapterTitle(ch);
      opt.textContent = `${chLabel} ${ch.id}: ${title}`;
      dropdown.appendChild(opt);
    });
    dropdown.value = currentSumChapter;
  }

  const inputEl = document.getElementById("sumWordInput");
  if (inputEl) {
    inputEl.removeEventListener("input", handleAutoSuggestInput);
    inputEl.addEventListener("input", handleAutoSuggestInput);
    inputEl.removeEventListener("keydown", handleAutoSuggestKeyDown);
    inputEl.addEventListener("keydown", handleAutoSuggestKeyDown);
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".suggest-wrap")) {
      closeAutoSuggest();
    }
  });

  renderSummarizerStats();
  renderSummarizerTable();
}

function changeSummarizerChapter(val) {
  currentSumChapter = val;
  closeAutoSuggest();
  renderSummarizerStats();
  renderSummarizerTable();
}

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

function renderSummarizerTable() {
  const container = document.getElementById("sumTableBody");
  if (!container) return;

  const vocab = getCustomVocab();
  const list = vocab[currentSumChapter] || [];

  if (list.length === 0) {
    const emptyMsg = getTranslation('sum_empty_label', 'لا توجد كلمات مضافة في هذه الوحدة بعد. ابدأ بإدخال كلماتك بالأعلى!');
    container.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center;color:var(--text-secondary);padding:40px;">
          ${emptyMsg}
        </td>
      </tr>
    `;
    return;
  }

  // Get translations for table row terms
  const pluralTxt = getTranslation('sum_plural', 'الجمع');
  const presentTxt = getTranslation('sum_present', 'الحاضر');
  const pastTxt = getTranslation('sum_past', 'الماضي');
  const perfectTxt = getTranslation('sum_perfect', 'التام');
  const clickToEditTxt = getTranslation('sum_click_to_edit', 'انقر للكتابة...');
  const editTooltip = getTranslation('sum_edit_tooltip', 'تعديل تفصيلي');
  const deleteTooltip = getTranslation('sum_delete_tooltip', 'حذف');

  let html = "";
  list.forEach((item, index) => {
    let detailsHtml = "";
    let wordDisplay = item.word;

    if (item.type === "noun") {
      wordDisplay = `${item.article || ""} ${item.word}`;
      detailsHtml = `<span class="sum-details-span">${pluralTxt}: ${item.plural || "—"}</span>`;
    } else if (item.type === "verb") {
      detailsHtml = `
        <span class="sum-details-span">${presentTxt}: ${item.prasens || "—"}</span> | 
        <span class="sum-details-span">${pastTxt}: ${item.prateritum || "—"}</span> | 
        <span class="sum-details-span">${perfectTxt}: ${item.helper === 'sein' ? 'ist' : 'hat'} ${item.perfekt || "—"}</span>
      `;
    } else {
      const isAdjLabel = currentLang === 'bs' ? 'pridjev / ostalo' : currentLang === 'ar' ? 'صفة / كلمة أخرى' : currentLang === 'tr' ? 'sıfat / diğer' : currentLang === 'ro' ? 'adjectiv / altul' : 'adjective / other';
      detailsHtml = `<span style="color:var(--text-secondary);font-style:italic">${isAdjLabel}</span>`;
    }

    const typeBadge = getBadgeHtml(item.type);
    
    // Choose translation field based on currentLang
    let trans = currentLang === 'bs' ? (item.bs || item.en || "") : (item[currentLang] || item.ar || item.en || item.tr || item.ro || "");

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
          <span class="sum-trans-text">${trans || `<span style="color:var(--text-secondary);font-size:12px">${clickToEditTxt}</span>`}</span>
        </td>
        <td class="sum-actions-cell">
          <button class="btn btn-ghost" style="padding:6px;min-width:32px;font-size:12px;margin:2px" onclick="editRowModal(${index})" title="${editTooltip}">✏️</button>
          <button class="btn btn-ghost" style="padding:6px;min-width:32px;font-size:12px;margin:2px;color:var(--accent-danger)" onclick="deleteWord(${index})" title="${deleteTooltip}">✕</button>
        </td>
      </tr>
    `;
  });

  container.innerHTML = html;
}

function getBadgeHtml(type) {
  const key = type === 'adj' ? 'vocab_adjectives' : 'vocab_' + type + 's';
  const label = getTranslation(key, type);
  let color = '#888';
  if (type === 'noun') color = '#4f8ef7';
  else if (type === 'verb') color = '#f59e0b';
  else if (type === 'adj') color = '#34d399';

  return `<span class="vc-type" style="background:${color}22;color:${color};padding:3px 8px;border-radius:4px;font-size:11px">${label}</span>`;
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
    
    // Choose translation for suggest display
    const trans = currentLang === 'bs' ? (m.bs || m.en || "") : (m[currentLang] || m.ar || m.en || "");
    
    return `
      <div class="suggest-item" onclick="selectSuggestion('${m.key.replace(/'/g, "\\'")}')">
        <span>🇩🇪 ${disp}</span>
        <span style="color:var(--text-secondary);font-size:12px;">${trans}</span>
      </div>
    `;
  }).join("");
  box.style.display = "block";
}

function handleAutoSuggestKeyDown(e) {
  if (e.key === "Enter") {
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
  addSingleWord();
}

function closeAutoSuggest() {
  const box = document.getElementById("sumSuggestBox");
  if (box) box.style.display = "none";
}

// ── Word Add Operations ────────────────────────────────────────

function addSingleWord() {
  const inputEl = document.getElementById("sumWordInput");
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) return;

  const analysis = analyzeGermanWord(val);
  if (!analysis) return;

  const customVocab = getCustomVocab();
  if (!customVocab[currentSumChapter]) customVocab[currentSumChapter] = [];

  const exists = customVocab[currentSumChapter].some(item => item.word.toLowerCase() === analysis.word.toLowerCase());
  if (exists) {
    const existsMsg = getTranslation('sum_exists_toast', 'الكلمة "{word}" مضافة بالفعل في هذه الوحدة!').replace('{word}', analysis.word);
    showToast(existsMsg, "warning");
    inputEl.value = "";
    return;
  }

  // Pre-fill Translation from dict if found
  const cleanLower = analysis.word.toLowerCase();
  if (SUMMARIZER_DICT[cleanLower]) {
    analysis[currentLang] = SUMMARIZER_DICT[cleanLower][currentLang] || "";
  }

  customVocab[currentSumChapter].push(analysis);
  saveCustomVocab(customVocab);

  const typeLabel = getTranslation('vocab_' + analysis.type + 's', analysis.type);
  const successMsg = getTranslation('sum_added_toast', 'تمت إضافة "{word}" تلقائياً كـ {type}!').replace('{word}', analysis.word).replace('{type}', typeLabel);
  showToast(successMsg, "success");

  inputEl.value = "";
  inputEl.focus();

  renderSummarizerStats();
  renderSummarizerTable();
}

function openBulkAddModal() {
  let modal = document.getElementById("sumBulkModal");
  
  const cancelTxt = getTranslation('sum_cancel', 'إلغاء');
  const titleTxt = getTranslation('sum_bulk_title', '📝 إضافة جماعية للكلمات');
  const descTxt = getTranslation('sum_bulk_desc', 'اكتب الكلمات الألمانية في المربع بالأسفل (كلمة واحدة في كل سطر). سيقوم النظام بتصنيفها واستخراج تصريفاتها وأدواتها تلقائياً!');
  const submitTxt = getTranslation('sum_bulk_submit', 'تحليل وإضافة الكلمات');

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "sumBulkModal";
    modal.className = "sum-modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="sum-modal-card">
      <h3 class="sum-modal-title">${titleTxt}</h3>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">
        ${descTxt}
      </p>
      <textarea id="sumBulkTextarea" class="writing-area" style="height:200px;margin-bottom:16px;font-family:sans-serif;" placeholder="Haus&#10;gehen&#10;der Tisch&#10;schön"></textarea>
      <div style="display:flex;gap:12px;justify-content:flex-end">
        <button class="btn btn-ghost" onclick="closeBulkAddModal()">${cancelTxt}</button>
        <button class="btn btn-primary" onclick="submitBulkAdd()">${submitTxt}</button>
      </div>
    </div>
  `;
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

    const exists = customVocab[currentSumChapter].some(item => item.word.toLowerCase() === analysis.word.toLowerCase());
    if (exists) {
      skippedCount++;
      return;
    }

    // Pre-fill translation
    const cleanLower = analysis.word.toLowerCase();
    if (SUMMARIZER_DICT[cleanLower]) {
      analysis[currentLang] = SUMMARIZER_DICT[cleanLower][currentLang] || "";
    }

    customVocab[currentSumChapter].push(analysis);
    addedCount++;
  });

  saveCustomVocab(customVocab);
  closeBulkAddModal();
  
  if (addedCount > 0) {
    const skippedText = skippedCount > 0 ? getTranslation('sum_bulk_skipped', '(تخطي {count} مكررة)').replace('{count}', skippedCount) : "";
    const successMsg = getTranslation('sum_bulk_success', 'تم بنجاح تحليل وإضافة {added} كلمة! {skipped}').replace('{added}', addedCount).replace('{skipped}', skippedText);
    showToast(successMsg, "success");
  } else {
    showToast(getTranslation('sum_bulk_no_new', 'لم يتم إضافة أي كلمات جديدة (ربما كلها مكررة أو فارغة).'), "warning");
  }

  renderSummarizerStats();
  renderSummarizerTable();
}

function deleteWord(index) {
  const confirmMsg = getTranslation('sum_delete_confirm', 'هل أنت متأكد من حذف هذه الكلمة من جدول تلخيص الدراسة؟');
  if (!confirm(confirmMsg)) return;

  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  if (list[index]) {
    const deletedWord = list[index].word;
    list.splice(index, 1);
    customVocab[currentSumChapter] = list;
    saveCustomVocab(customVocab);
    const deleteMsg = getTranslation('sum_deleted_toast', 'تم حذف الكلمة "{word}"').replace('{word}', deletedWord);
    showToast(deleteMsg, "info");
    renderSummarizerStats();
    renderSummarizerTable();
  }
}

// ── Inline & Detail Editing ───────────────────────────────────

function startEditCell(index, field, event) {
  if (editingRowIndex !== null) return;

  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  const item = list[index];
  if (!item) return;

  const cell = event.currentTarget;
  editingRowIndex = index;
  editingField = field;

  if (field === 'translation') {
    const oldVal = currentLang === 'bs' ? (item.bs || item.en || "") : (item[currentLang] || item.ar || item.en || "");
    cell.innerHTML = `
      <input type="text" id="inlineEditInp" class="vocab-search" style="margin:0;padding:4px 8px;font-size:13px;width:100%" value="${oldVal}" />
    `;
    const input = document.getElementById("inlineEditInp");
    input.focus();
    input.select();
    
    input.addEventListener("blur", () => finishEditCell(true));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") finishEditCell(true);
      if (e.key === "Escape") finishEditCell(false);
    });
  } else if (field === 'details') {
    if (item.type === 'noun') {
      const pluralTxt = getTranslation('sum_plural', 'الجمع');
      cell.innerHTML = `
        <div style="display:flex;gap:6px;align-items:center">
          <select id="inlineEditArt" class="filter-select" style="margin:0;padding:2px;font-size:12px;width:auto">
            <option value="der" ${item.article === 'der' ? 'selected' : ''}>der</option>
            <option value="die" ${item.article === 'die' ? 'selected' : ''}>die</option>
            <option value="das" ${item.article === 'das' ? 'selected' : ''}>das</option>
          </select>
          <input type="text" id="inlineEditPlural" class="vocab-search" style="margin:0;padding:4px;font-size:12px;width:100px" placeholder="${pluralTxt}" value="${item.plural || ''}" />
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
        // Set translation specifically for current active language!
        item[currentLang] = input.value.trim();
        // Fallback ar/en just in case
        if (currentLang === 'ar') item.ar = item[currentLang];
        if (currentLang === 'en') item.en = item[currentLang];
        
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

function editRowModal(index) {
  let modal = document.getElementById("sumEditModal");
  const customVocab = getCustomVocab();
  const list = customVocab[currentSumChapter] || [];
  const item = list[index];
  if (!item) return;

  const cancelTxt = getTranslation('sum_cancel', 'إلغاء');
  const saveTxt = getTranslation('sum_save', 'حفظ التغييرات');
  const modalTitle = getTranslation('sum_edit_title', 'تعديل كلمة') + `: ${item.word}`;
  const germanWordLabel = getTranslation('sum_german_word', 'الكلمة الألمانية:');
  const typeLabel = getTranslation('sum_col_type', 'النوع:');
  const transLabel = getTranslation('sum_col_trans', 'الترجمة:');

  const labelPlural = getTranslation('sum_plural', 'صيغة الجمع') + " (Plural):";
  const labelPrasens = getTranslation('sum_present', 'تصريف الحاضر') + " (Präsens 3rd Person):";
  const labelPrateritum = getTranslation('sum_past', 'تصريف الماضي') + " (Präteritum 3rd Person):";
  const labelPerfekt = getTranslation('sum_perfect', 'تصريف التام') + " (Perfekt Participle):";
  const labelArt = getTranslation('sum_col_details', 'أداة التعريف') + " (Artikel):";

  let detailsForm = "";
  if (item.type === "noun") {
    detailsForm = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelArt}</label>
        <select id="editArt" class="filter-select" style="width:100%">
          <option value="der" ${item.article === 'der' ? 'selected' : ''}>der</option>
          <option value="die" ${item.article === 'die' ? 'selected' : ''}>die</option>
          <option value="das" ${item.article === 'das' ? 'selected' : ''}>das</option>
        </select>
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelPlural}</label>
        <input type="text" id="editPlural" class="vocab-search" style="margin:0;width:100%" value="${item.plural || ''}" placeholder="Bücher" />
      </div>
    `;
  } else if (item.type === "verb") {
    detailsForm = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelPrasens}</label>
        <input type="text" id="editPrasens" class="vocab-search" style="margin:0;width:100%" value="${item.prasens || ''}" placeholder="geht" />
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelPrateritum}</label>
        <input type="text" id="editPrateritum" class="vocab-search" style="margin:0;width:100%" value="${item.prateritum || ''}" placeholder="ging" />
      </div>
      <div style="margin-bottom:12px;display:grid;grid-template-columns: 2fr 1fr;gap:8px">
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">${labelPerfekt}</label>
          <input type="text" id="editPerfekt" class="vocab-search" style="margin:0;width:100%" value="${item.perfekt || ''}" placeholder="gegangen" />
        </div>
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">Aux:</label>
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

  // Choose translation value
  const transVal = currentLang === 'bs' ? (item.bs || item.en || "") : (item[currentLang] || item.ar || item.en || "");

  modal.innerHTML = `
    <div class="sum-modal-card">
      <h3 class="sum-modal-title">${modalTitle}</h3>
      
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${germanWordLabel}</label>
        <input type="text" id="editWord" class="vocab-search" style="margin:0;width:100%" value="${item.word}" />
      </div>

      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${typeLabel}</label>
        <select id="editType" class="filter-select" style="width:100%" onchange="toggleEditModalTypeForm()">
          <option value="noun" ${item.type === 'noun' ? 'selected' : ''}>${getTranslation('vocab_nouns', 'اسم')}</option>
          <option value="verb" ${item.type === 'verb' ? 'selected' : ''}>${getTranslation('vocab_verbs', 'فعل')}</option>
          <option value="adj" ${item.type === 'adj' ? 'selected' : ''}>${getTranslation('vocab_adjectives', 'صفة')}</option>
          <option value="phrase" ${item.type === 'phrase' ? 'selected' : ''}>${getTranslation('vocab_phrases', 'عبارة')}</option>
        </select>
      </div>

      <div id="editModalDetailsContainer">
        ${detailsForm}
      </div>

      <div style="margin-bottom:16px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${transLabel}</label>
        <input type="text" id="editTrans" class="vocab-search" style="margin:0;width:100%" value="${transVal}" />
      </div>

      <div style="display:flex;gap:12px;justify-content:flex-end">
        <button class="btn btn-ghost" onclick="closeEditModal()">${cancelTxt}</button>
        <button class="btn btn-primary" onclick="submitEditWord(${index})">${saveTxt}</button>
      </div>
    </div>
  `;
  modal.style.display = "flex";
}

function toggleEditModalTypeForm() {
  const type = document.getElementById("editType").value;
  const container = document.getElementById("editModalDetailsContainer");
  if (!container) return;

  const labelPlural = getTranslation('sum_plural', 'صيغة الجمع') + " (Plural):";
  const labelPrasens = getTranslation('sum_present', 'تصريف الحاضر') + " (Präsens 3rd Person):";
  const labelPrateritum = getTranslation('sum_past', 'تصريف الماضي') + " (Präteritum 3rd Person):";
  const labelPerfekt = getTranslation('sum_perfect', 'تصريف التام') + " (Perfekt Participle):";
  const labelArt = getTranslation('sum_col_details', 'أداة التعريف') + " (Artikel):";

  if (type === "noun") {
    container.innerHTML = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelArt}</label>
        <select id="editArt" class="filter-select" style="width:100%">
          <option value="der">der</option>
          <option value="die">die</option>
          <option value="das">das</option>
        </select>
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelPlural}</label>
        <input type="text" id="editPlural" class="vocab-search" style="margin:0;width:100%" value="" placeholder="Bücher" />
      </div>
    `;
  } else if (type === "verb") {
    container.innerHTML = `
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelPrasens}</label>
        <input type="text" id="editPrasens" class="vocab-search" style="margin:0;width:100%" value="" placeholder="geht" />
      </div>
      <div style="margin-bottom:12px">
        <label class="progress-label" style="margin-bottom:4px;display:block">${labelPrateritum}</label>
        <input type="text" id="editPrateritum" class="vocab-search" style="margin:0;width:100%" value="" placeholder="ging" />
      </div>
      <div style="margin-bottom:12px;display:grid;grid-template-columns: 2fr 1fr;gap:8px">
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">${labelPerfekt}</label>
          <input type="text" id="editPerfekt" class="vocab-search" style="margin:0;width:100%" value="" placeholder="gegangen" />
        </div>
        <div>
          <label class="progress-label" style="margin-bottom:4px;display:block">Aux:</label>
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
    showToast(getTranslation('sum_word_required', 'يجب إدخال الكلمة الألمانية!'), "error");
    return;
  }

  item.type = type;
  item.word = word;
  
  // Set translation for active language
  item[currentLang] = trans;
  if (currentLang === 'ar') item.ar = trans;
  if (currentLang === 'en') item.en = trans;

  if (type === "noun") {
    item.article = document.getElementById("editArt").value;
    item.plural = document.getElementById("editPlural").value.trim() || "—";
    
    delete item.prasens;
    delete item.prateritum;
    delete item.perfekt;
    delete item.helper;
  } else if (type === "verb") {
    item.prasens = document.getElementById("editPrasens").value.trim();
    item.prateritum = document.getElementById("editPrateritum").value.trim();
    item.perfekt = document.getElementById("editPerfekt").value.trim();
    item.helper = document.getElementById("editHelper").value;

    delete item.article;
    delete item.plural;
  } else {
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
  showToast(getTranslation('sum_update_toast', 'تم تحديث معلومات الكلمة!'), "success");
  renderSummarizerStats();
  renderSummarizerTable();
}

// ── Export & Import JSON Operations ─────────────────────────────

function exportCustomVocab() {
  const customVocab = getCustomVocab();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customVocab, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `german_multilingual_study_summary.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast(getTranslation('sum_export_success', 'تم تصدير ملف النسخة الاحتياطية بنجاح! 💾'), "success");
}

function triggerImportVocab() {
  const input = document.getElementById("sumImportInput");
  if (input) input.click();
}

function importCustomVocab(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (typeof data !== 'object') throw new Error("Format invalid");
      
      const confirmMsg = getTranslation('sum_import_confirm', 'هل تريد استبدال مفردات المذاكرة الحالية بالملف المستورد؟');
      if (confirm(confirmMsg)) {
        saveCustomVocab(data);
        showToast(getTranslation('sum_import_success', 'تم استيراد المفردات والتلخيص بنجاح! 📂'), "success");
        initSummarizer();
      }
    } catch (err) {
      showToast(getTranslation('sum_import_error', 'خطأ: الملف المختار غير صالح أو تالف!'), "error");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

// ── Print Logic ───────────────────────────────────────────────

function printSummarizer() {
  const chId = parseInt(currentSumChapter);
  const ch = CURRICULUM.find(c => c.id === chId);
  const printTitleDe = ch ? ch.titleDe : `Kapitel ${chId}`;
  
  // Custom bilingually generated title for print header
  const titleText = getChapterTitle(ch);

  const headerDe = document.getElementById("printChapterTitleDe");
  const headerAr = document.getElementById("printChapterTitleAr");

  if (headerDe) headerDe.textContent = `Kapitel ${chId}: ${printTitleDe}`;
  if (headerAr) {
    const sumHeaderLabel = currentLang === 'ar' ? 'ملخص كلمات الوحدة' : currentLang === 'tr' ? 'Ünite Kelime Özeti' : currentLang === 'ro' ? 'Rezumatul cuvintelor capitolul' : 'Unit Word Summary';
    headerAr.textContent = `${sumHeaderLabel} ${chId}: ${titleText}`;
  }

  window.print();
}
