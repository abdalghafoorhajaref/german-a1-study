// ============================================================
// CURRICULUM DATA - Berliner Platz 1 Neu A1
// 12 Kapitel with texts, vocab, grammar, exercises
// ============================================================

const CURRICULUM = [
  {
    id: 1,
    titleDe: "Hallo! Wie heißen Sie?",
    titleAr: "مرحباً! ما اسمك؟",
    emoji: "👋",
    color: "#4f8ef7",
    topics: ["التعريف بالنفس", "التحية", "الأبجدية"],
    topicsDe: ["Vorstellen", "Begrüßung", "Alphabet"],
    canDo: "أستطيع أن أقدم نفسي وأتهجى اسمي",
    canDoDe: "Ich kann mich vorstellen und meinen Namen buchstabieren",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/02_langenschidt_-_1.1b_-_die_kursliste.mp3", label: "1.1b - Die Kursliste", labelAr: "قائمة الطلاب" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/03_langenschidt_-_1.2a_-_sie_und_du.mp3", label: "1.2a - Sie und du", labelAr: "أنتَ الرسمي وغير الرسمي" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/04_langenschidt_-_1.3a_-_melodie_und_akzent.mp3", label: "1.3a - Melodie und Akzent", labelAr: "لحن اللغة ونبرها" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/06_langenschidt_-_1.4a_-_sich_vorstellen.mp3", label: "1.4a - Sich vorstellen", labelAr: "التعريف بالنفس" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/09_langenschidt_-_1.6b_-_steckbriefe.mp3", label: "1.6b - Steckbriefe", labelAr: "البطاقات الشخصية" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/11_langenschidt_-_1.9a_-_buchstabieren.mp3", label: "1.9a - Buchstabieren", labelAr: "التهجئة" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/12_langenschidt_-_1.9b_-_alphabet_und_rhythmus_lernen.mp3", label: "1.9b - Alphabet lernen", labelAr: "تعلم الأبجدية" }
    ],
    dialogs: [
      {
        title: "Guten Tag! Sich vorstellen",
        titleAr: "مرحباً! التعريف بالنفس",
        lines: [
          { speaker: "Anna", de: "Guten Tag! Ich heiße Anna Müller.", ar: "مرحباً! اسمي آنا مولر." },
          { speaker: "Carlos", de: "Guten Tag! Ich bin Carlos Vera. Und Sie?", ar: "مرحباً! أنا كارلوس فيرا. وأنتِ؟" },
          { speaker: "Anna", de: "Mein Name ist Anna Müller. Woher kommen Sie?", ar: "اسمي آنا مولر. من أين أنتَ؟" },
          { speaker: "Carlos", de: "Ich komme aus Spanien. Und Sie?", ar: "أنا من إسبانيا. وأنتِ؟" },
          { speaker: "Anna", de: "Ich komme aus Deutschland.", ar: "أنا من ألمانيا." }
        ]
      },
      {
        title: "Wie schreibt man das?",
        titleAr: "كيف تكتبها؟",
        lines: [
          { speaker: "Lehrerin", de: "Buchstabieren Sie bitte Ihren Namen.", ar: "تهجّ اسمك من فضلك." },
          { speaker: "Student", de: "M-A-R-I-A.", ar: "م-ا-ر-ي-ا." },
          { speaker: "Lehrerin", de: "Danke. Wie ist Ihre Telefonnummer?", ar: "شكراً. ما هو رقم هاتفك؟" },
          { speaker: "Student", de: "0171 – 23 45 67.", ar: "صفر-واحد-سبعة-واحد – ثلاثة وعشرون-خمسة وأربعون-سبعة وستون." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Deutsch lernen in Berlin",
        titleAr: "تعلم الألمانية في برلين",
        text: [
          { de: "Das ist der Deutschkurs.", ar: "هذا هو درس الألمانية." },
          { de: "Die Kursleiterin heißt Frau Kohl.", ar: "اسم المعلمة السيدة كول." },
          { de: "Im Kurs sind 15 Personen.", ar: "في الدرس 15 شخصاً." },
          { de: "Sie kommen aus vielen Ländern.", ar: "يأتون من دول كثيرة." },
          { de: "Carlos kommt aus Spanien. Maria kommt aus Brasilien.", ar: "كارلوس من إسبانيا. ماريا من البرازيل." }
        ],
        questions: [
          { q: "Wie heißt die Kursleiterin?", qAr: "ما اسم المعلمة؟", answer: "Frau Kohl", answerAr: "السيدة كول" },
          { q: "Wie viele Personen sind im Kurs?", qAr: "كم شخصاً في الدرس؟", answer: "15 Personen", answerAr: "15 شخصاً" }
        ]
      }
    ],
    grammar: [
      {
        id: "verb-sein",
        title: "فعل الكون - sein (يكون/هو)",
        titleDe: "Das Verb 'sein'",
        explanation: "فعل sein هو من أهم الأفعال في الألمانية. يُستخدم للتعريف بالنفس والوصف.",
        rules: [
          { example: "Ich bin Carlos.", translation: "أنا كارلوس.", note: "مع ضمير ich نستخدم bin" },
          { example: "Du bist Maria.", translation: "أنتَ ماريا.", note: "مع ضمير du نستخدم bist" },
          { example: "Er/Sie ist Lehrer.", translation: "هو/هي معلم.", note: "مع er/sie نستخدم ist" },
          { example: "Wir sind hier.", translation: "نحن هنا.", note: "مع wir نستخدم sind" }
        ],
        table: {
          headers: ["الضمير", "التصريف", "المعنى"],
          rows: [
            ["ich", "bin", "أنا"],
            ["du", "bist", "أنتَ"],
            ["er/sie/es", "ist", "هو/هي/إنه"],
            ["wir", "sind", "نحن"],
            ["ihr", "seid", "أنتم"],
            ["sie/Sie", "sind", "هم/حضرتك"]
          ]
        }
      },
      {
        id: "verb-heissen",
        title: "فعل heißen (يُدعى/اسمه)",
        titleDe: "Das Verb 'heißen'",
        explanation: "نستخدم heißen للتعريف بالاسم. الفعل يتصرف بشكل منتظم.",
        rules: [
          { example: "Ich heiße Maria.", translation: "اسمي ماريا.", note: "الأول" },
          { example: "Du heißt Carlos.", translation: "اسمك كارلوس.", note: "للمخاطب" },
          { example: "Er heißt Thomas.", translation: "اسمه توماس.", note: "للغائب" }
        ],
        table: {
          headers: ["الضمير", "التصريف"],
          rows: [
            ["ich", "heiße"],
            ["du", "heißt"],
            ["er/sie/es", "heißt"],
            ["wir", "heißen"],
            ["ihr", "heißt"],
            ["sie/Sie", "heißen"]
          ]
        }
      },
      {
        id: "formal-informal",
        title: "الخطاب الرسمي وغير الرسمي - Sie / du",
        titleDe: "Sie und du",
        explanation: "في الألمانية هناك فرق مهم بين الخطاب الرسمي والمألوف.",
        rules: [
          { example: "Wie heißen Sie?", translation: "ما اسمك؟ (رسمي)", note: "مع الغرباء والأكبر سناً" },
          { example: "Wie heißt du?", translation: "ما اسمك؟ (غير رسمي)", note: "مع الأصدقاء والأطفال" },
          { example: "Woher kommen Sie?", translation: "من أين حضرتك؟ (رسمي)", note: "" },
          { example: "Woher kommst du?", translation: "من أين أنت؟ (غير رسمي)", note: "" }
        ]
      }
    ],
    exercises: [
      {
        type: "fillblank",
        question: "Ich _____ Maria. (heißen)",
        questionAr: "أكمل الفراغ بالتصريف الصحيح",
        answer: "heiße",
        hint: "تصريف heißen مع ich"
      },
      {
        type: "fillblank",
        question: "Woher _____ du? (kommen)",
        questionAr: "أكمل الفراغ",
        answer: "kommst",
        hint: "تصريف kommen مع du"
      },
      {
        type: "mcq",
        question: "Wie sagt man 'Wie heißen Sie?' auf Arabisch?",
        questionAr: "ما معنى هذه الجملة بالعربية؟",
        options: ["ما لغتك؟", "ما اسم حضرتك؟", "من أين أنت؟", "كم عمرك؟"],
        answer: 1
      },
      {
        type: "order",
        question: "رتب الكلمات لتكون جملة صحيحة:",
        questionAr: "",
        words: ["aus", "Ich", "komme", "Deutschland"],
        answer: "Ich komme aus Deutschland."
      },
      {
        type: "matching",
        question: "طابق بين الألمانية والعربية:",
        questionAr: "",
        pairs: [
          { de: "Guten Tag", ar: "مرحباً/صباح الخير" },
          { de: "Danke", ar: "شكراً" },
          { de: "Bitte", ar: "من فضلك / عفواً" },
          { de: "Tschüss", ar: "مع السلامة" }
        ]
      }
    ],
    writingPrompts: [
      {
        prompt: "عرّف بنفسك بالألمانية (3-4 جمل)",
        promptDe: "Stellen Sie sich vor! (3-4 Sätze)",
        helpers: ["Ich heiße...", "Ich komme aus...", "Ich wohne in...", "Ich bin ... Jahre alt."],
        example: "Hallo! Ich heiße Ahmad. Ich komme aus Syrien. Ich wohne in Berlin. Ich bin 25 Jahre alt."
      }
    ],
    speakingPhrases: [
      { de: "Guten Tag! Ich heiße ...", ar: "مرحباً! اسمي ..." },
      { de: "Ich komme aus ...", ar: "أنا من ..." },
      { de: "Wie heißen Sie?", ar: "ما اسم حضرتك؟" },
      { de: "Woher kommen Sie?", ar: "من أين حضرتك؟" },
      { de: "Ich buchstabiere: M-A-R-I-A", ar: "أتهجى: م-ا-ر-ي-ا" }
    ]
  },

  {
    id: 2,
    titleDe: "Wie geht's?",
    titleAr: "كيف حالك؟",
    emoji: "😊",
    color: "#34d399",
    topics: ["أحوال الصحة", "الأرقام 0-200", "المشروبات"],
    topicsDe: ["Befinden", "Zahlen 0-200", "Getränke"],
    canDo: "أستطيع أن أسأل عن الحال وأعطي رقم هاتفي",
    canDoDe: "Ich kann nach dem Befinden fragen und meine Telefonnummer angeben",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/15_langenschidt_-_2.2a_-_wie_geht's.mp3", label: "2.2a - Wie geht's?", labelAr: "كيف حالك؟" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/16_langenschidt_-_2.3a_-_dialoge.mp3", label: "2.3a - Dialoge", labelAr: "حوارات" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/19_langenschidt_-_2.5b_-_in_der_cafeteria.mp3", label: "2.5b - In der Cafeteria", labelAr: "في الكافيتيريا" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/20_langenschidt_-_2.8a_-_null_bis_zwolf.mp3", label: "2.8a - Null bis zwölf", labelAr: "الأرقام 0-12" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/22_langenschidt_-_2.10_-_zahlen_von_13_bis_200.mp3", label: "2.10 - Zahlen 13-200", labelAr: "الأرقام 13-200" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/21_langenschidt_-_2.8c_-_handynummern.mp3", label: "2.8c - Handynummern", labelAr: "أرقام الهاتف" }
    ],
    dialogs: [
      {
        title: "Wie geht es Ihnen?",
        titleAr: "كيف حالك؟ (حوار)",
        lines: [
          { speaker: "Kurt", de: "Guten Morgen, Frau Kohl! Wie geht es Ihnen?", ar: "صباح الخير يا سيدة كول! كيف حالك؟" },
          { speaker: "Frau Kohl", de: "Danke, gut. Und Ihnen?", ar: "شكراً، بخير. وأنت؟" },
          { speaker: "Kurt", de: "Es geht. Ich bin müde.", ar: "لا بأس. أنا متعب." },
          { speaker: "Frau Kohl", de: "Oh! Das ist nicht gut.", ar: "أوه! هذا ليس جيداً." }
        ]
      },
      {
        title: "In der Cafeteria",
        titleAr: "في الكافيتيريا",
        lines: [
          { speaker: "Kellnerin", de: "Was möchten Sie trinken?", ar: "ماذا تريد أن تشرب؟" },
          { speaker: "Kunde", de: "Einen Kaffee, bitte.", ar: "قهوة من فضلك." },
          { speaker: "Kellnerin", de: "Mit Milch?", ar: "مع حليب؟" },
          { speaker: "Kunde", de: "Ja, und ein Wasser.", ar: "نعم، وماء." },
          { speaker: "Kellnerin", de: "Das macht 3 Euro 50.", ar: "المجموع ثلاثة يورو وخمسون سنتاً." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Telefonnummern",
        titleAr: "أرقام الهاتف",
        text: [
          { de: "Die Telefonnummer von Carlos ist: 0171 – 34 56 78.", ar: "رقم هاتف كارلوس: 0171 – 34 56 78." },
          { de: "Die Handynummer von Maria ist: 0152 – 45 67 89.", ar: "رقم الجوال لماريا: 0152 – 45 67 89." },
          { de: "Die Kursnummer ist: 030 – 12 34 56.", ar: "رقم الدورة: 030 – 12 34 56." }
        ],
        questions: [
          { q: "Wie ist die Telefonnummer von Carlos?", qAr: "ما هو رقم هاتف كارلوس؟", answer: "0171 – 34 56 78", answerAr: "0171 – 34 56 78" }
        ]
      }
    ],
    grammar: [
      {
        id: "verb-conjugation",
        title: "تصريف الأفعال في الحاضر",
        titleDe: "Verben im Präsens",
        explanation: "الأفعال الألمانية تتصرف حسب الضمير. معظم الأفعال تتبع نمطاً منتظماً.",
        rules: [
          { example: "kommen → ich komme, du kommst", translation: "يأتي", note: "فعل منتظم" },
          { example: "arbeiten → ich arbeite, du arbeitest", translation: "يعمل", note: "تُضاف حرف e قبل اللاحقة" },
          { example: "trinken → ich trinke, du trinkst", translation: "يشرب", note: "فعل منتظم" }
        ],
        table: {
          headers: ["الضمير", "kommen", "arbeiten", "trinken"],
          rows: [
            ["ich", "komme", "arbeite", "trinke"],
            ["du", "kommst", "arbeitest", "trinkst"],
            ["er/sie", "kommt", "arbeitet", "trinkt"],
            ["wir", "kommen", "arbeiten", "trinken"],
            ["ihr", "kommt", "arbeitet", "trinkt"],
            ["sie/Sie", "kommen", "arbeiten", "trinken"]
          ]
        }
      },
      {
        id: "numbers",
        title: "الأرقام من 0 إلى 200",
        titleDe: "Zahlen 0-200",
        explanation: "الأرقام في الألمانية ضرورية جداً للحياة اليومية.",
        rules: [
          { example: "0 = null, 1 = eins, 2 = zwei, 3 = drei", translation: "الأرقام 0-3", note: "" },
          { example: "4 = vier, 5 = fünf, 6 = sechs, 7 = sieben", translation: "الأرقام 4-7", note: "" },
          { example: "8 = acht, 9 = neun, 10 = zehn", translation: "الأرقام 8-10", note: "" },
          { example: "11 = elf, 12 = zwölf, 13 = dreizehn", translation: "الأرقام 11-13", note: "" },
          { example: "20 = zwanzig, 30 = dreißig, 100 = hundert", translation: "العشرات", note: "" },
          { example: "21 = einundzwanzig (واحد وعشرون)", translation: "الأرقام المركبة تبدأ بالآحاد", note: "الفرق مع العربية!" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Wie sagt man 'Wie geht es Ihnen?' auf Arabisch?",
        questionAr: "ما معنى هذه الجملة؟",
        options: ["ما اسمك؟", "من أين أنت؟", "كيف حالك؟ (رسمي)", "كم عمرك؟"],
        answer: 2
      },
      {
        type: "fillblank",
        question: "Ich _____ Kaffee. (trinken)",
        questionAr: "أكمل بالتصريف الصحيح",
        answer: "trinke",
        hint: "تصريف trinken مع ich"
      },
      {
        type: "mcq",
        question: "Was ist 'dreizehn' auf Arabisch?",
        questionAr: "ما معنى dreizehn؟",
        options: ["30", "13", "3", "31"],
        answer: 1
      },
      {
        type: "order",
        question: "رتب الكلمات:",
        questionAr: "",
        words: ["geht", "Wie", "es", "Ihnen"],
        answer: "Wie geht es Ihnen?"
      }
    ],
    writingPrompts: [
      {
        prompt: "اكتب رقم هاتفك بالألمانية",
        promptDe: "Schreiben Sie Ihre Telefonnummer auf Deutsch",
        helpers: ["Meine Telefonnummer ist...", "Meine Handynummer ist..."],
        example: "Meine Handynummer ist: null-eins-sieben-eins – drei-vier-fünf-sechs."
      }
    ],
    speakingPhrases: [
      { de: "Wie geht es Ihnen?", ar: "كيف حالك؟ (رسمي)" },
      { de: "Wie geht's?", ar: "كيف حالك؟ (غير رسمي)" },
      { de: "Gut, danke!", ar: "بخير، شكراً!" },
      { de: "Es geht.", ar: "لا بأس." },
      { de: "Nicht so gut.", ar: "ليس جيداً." },
      { de: "Ich bin müde.", ar: "أنا متعب." },
      { de: "Einen Kaffee, bitte.", ar: "قهوة من فضلك." }
    ]
  },

  {
    id: 3,
    titleDe: "Was kostet das?",
    titleAr: "بكم هذا؟",
    emoji: "🛍️",
    color: "#f59e0b",
    topics: ["التسوق", "الأسعار", "الأشياء", "الأداة والنكرة"],
    topicsDe: ["Einkaufen", "Preise", "Gegenstände", "Artikel"],
    canDo: "أستطيع أن أسأل عن الأسعار وأشتري أشياء",
    canDoDe: "Ich kann nach Preisen fragen und Dinge kaufen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/26_langenschidt_-_3.1b_-_gegenstande.mp3", label: "3.1b - Gegenstände", labelAr: "الأشياء" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/27_langenschidt_-_3.2a_-_was_kostet_....mp3", label: "3.2a - Was kostet...?", labelAr: "بكم يكلف؟" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/29_langenschidt_-_3.4c_-_sechs_dialoge.mp3", label: "3.4c - Sechs Dialoge", labelAr: "ستة حوارات" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/35_langenschidt_-_3.12_-_zwei_gesprache.mp3", label: "3.12 - Zwei Gespräche", labelAr: "محادثتان" }
    ],
    dialogs: [
      {
        title: "Was kostet das?",
        titleAr: "حوار في المتجر",
        lines: [
          { speaker: "Kunde", de: "Entschuldigung! Was kostet der Laptop?", ar: "عذراً! بكم الحاسوب المحمول؟" },
          { speaker: "Verkäufer", de: "Der Laptop kostet 599 Euro.", ar: "الحاسوب يكلف 599 يورو." },
          { speaker: "Kunde", de: "Und die Maus?", ar: "وبكم الفأرة؟" },
          { speaker: "Verkäufer", de: "Die Maus kostet 15 Euro 99.", ar: "الفأرة تكلف 15 يورو و99 سنتاً." },
          { speaker: "Kunde", de: "Ich nehme den Laptop. Bitte.", ar: "سآخذ الحاسوب. من فضلك." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Der Flohmarkt",
        titleAr: "سوق البضاعة المستعملة",
        text: [
          { de: "Heute ist Flohmarkt in Berlin.", ar: "اليوم يوجد سوق مستعمل في برلين." },
          { de: "Carlos kauft eine Uhr für 5 Euro.", ar: "كارلوس يشتري ساعة بـ 5 يورو." },
          { de: "Maria kauft ein Buch für 2 Euro.", ar: "ماريا تشتري كتاباً بـ 2 يورو." },
          { de: "Das ist billig!", ar: "هذا رخيص!" }
        ],
        questions: [
          { q: "Was kauft Carlos?", qAr: "ماذا اشترى كارلوس؟", answer: "Eine Uhr", answerAr: "ساعة" },
          { q: "Wie viel kostet das Buch?", qAr: "بكم الكتاب؟", answer: "2 Euro", answerAr: "2 يورو" }
        ]
      }
    ],
    grammar: [
      {
        id: "artikel",
        title: "أداة التعريف والتنكير - der/die/das/ein/eine",
        titleDe: "Bestimmter und unbestimmter Artikel",
        explanation: "في الألمانية لكل اسم جنس نحوي: مذكر (der)، مؤنث (die)، محايد (das). وهذا مهم جداً!",
        rules: [
          { example: "der Tisch (مذكر) - ein Tisch", translation: "الطاولة - طاولة", note: "مذكر: der/ein" },
          { example: "die Lampe (مؤنث) - eine Lampe", translation: "المصباح - مصباح", note: "مؤنث: die/eine" },
          { example: "das Buch (محايد) - ein Buch", translation: "الكتاب - كتاب", note: "محايد: das/ein" },
          { example: "kein/keine/kein", translation: "النفي: لا يوجد", note: "النفي يتبع نفس نمط ein" }
        ],
        table: {
          headers: ["الجنس", "التعريف", "التنكير", "النفي"],
          rows: [
            ["مذكر (Maskulinum)", "der", "ein", "kein"],
            ["مؤنث (Femininum)", "die", "eine", "keine"],
            ["محايد (Neutrum)", "das", "ein", "kein"],
            ["جمع (Plural)", "die", "–", "keine"]
          ]
        }
      },
      {
        id: "akkusativ",
        title: "حالة المفعول به - Akkusativ",
        titleDe: "Der Akkusativ",
        explanation: "المفعول به في الألمانية يغير أداة التعريف للمذكر فقط!",
        rules: [
          { example: "Ich kaufe der Laptop → den Laptop.", translation: "أشتري الحاسوب.", note: "der → den في المذكر" },
          { example: "Ich kaufe die Lampe.", translation: "أشتري المصباح.", note: "die تبقى die" },
          { example: "Ich kaufe das Buch.", translation: "أشتري الكتاب.", note: "das يبقى das" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Was ist der Artikel für 'Buch'?",
        questionAr: "ما هي أداة التعريف لكلمة Buch (كتاب)؟",
        options: ["der", "die", "das", "ein"],
        answer: 2
      },
      {
        type: "fillblank",
        question: "Was kostet _____ Laptop? (der/die/das)",
        questionAr: "اختر الأداة الصحيحة",
        answer: "der",
        hint: "Laptop مذكر في الألمانية"
      },
      {
        type: "mcq",
        question: "Was bedeutet 'billig'?",
        questionAr: "ما معنى billig؟",
        options: ["غالي", "رخيص", "جميل", "كبير"],
        answer: 1
      }
    ],
    writingPrompts: [
      {
        prompt: "صف ما تريد شراءه من المتجر",
        promptDe: "Was möchten Sie kaufen? Beschreiben Sie!",
        helpers: ["Ich möchte ... kaufen.", "Das kostet ...", "Das ist billig/teuer.", "Ich nehme ..."],
        example: "Ich möchte einen Laptop kaufen. Der Laptop kostet 500 Euro. Das ist nicht billig, aber gut."
      }
    ],
    speakingPhrases: [
      { de: "Was kostet das?", ar: "بكم هذا؟" },
      { de: "Das kostet ... Euro.", ar: "هذا يكلف ... يورو." },
      { de: "Das ist (zu) teuer!", ar: "هذا (جداً) غالي!" },
      { de: "Das ist billig.", ar: "هذا رخيص." },
      { de: "Ich nehme das.", ar: "سآخذ هذا." },
      { de: "Haben Sie ...?", ar: "هل عندكم ...؟" }
    ]
  },

  {
    id: 4,
    titleDe: "Wie spät ist es?",
    titleAr: "كم الساعة؟",
    emoji: "⏰",
    color: "#a78bfa",
    topics: ["الوقت", "المواعيد", "أيام الأسبوع", "الأنشطة اليومية"],
    topicsDe: ["Uhrzeit", "Termine", "Wochentage", "Alltag"],
    canDo: "أستطيع أن أسأل عن الوقت وأحدد مواعيد",
    canDoDe: "Ich kann nach der Uhrzeit fragen und Termine machen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/37_langenschidt_-_4.2a_-_wie_spat_ist_es.mp3", label: "4.2a - Wie spät ist es?", labelAr: "كم الساعة؟" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/38_langenschidt_-_4.5_-_wortakzent_und_rhythmus.mp3", label: "4.5 - Wortakzent", labelAr: "نبرة الكلمة" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/40_langenschidt_-_4.9b_-_kommst_du_mit_....mp3", label: "4.9b - Kommst du mit?", labelAr: "هل تأتي معي؟" }
    ],
    dialogs: [
      {
        title: "Wie spät ist es?",
        titleAr: "كم الساعة الآن؟",
        lines: [
          { speaker: "Maria", de: "Entschuldigung, wie spät ist es?", ar: "عذراً، كم الساعة؟" },
          { speaker: "Thomas", de: "Es ist halb drei.", ar: "الساعة الثانية والنصف." },
          { speaker: "Maria", de: "Oh! Ich habe einen Termin um 3 Uhr.", ar: "أوه! عندي موعد في الساعة الثالثة." },
          { speaker: "Thomas", de: "Beeilen Sie sich!", ar: "أسرعي!" }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Mein Tagesablauf",
        titleAr: "روتيني اليومي",
        text: [
          { de: "Ich stehe um 7 Uhr auf.", ar: "أستيقظ في الساعة السابعة." },
          { de: "Um 8 Uhr frühstücke ich.", ar: "في الساعة الثامنة أتناول الفطور." },
          { de: "Der Deutschkurs beginnt um 9 Uhr.", ar: "درس الألمانية يبدأ في الساعة التاسعة." },
          { de: "Um 12 Uhr esse ich zu Mittag.", ar: "في الساعة الثانية عشرة أتناول الغداء." },
          { de: "Am Abend lerne ich Vokabeln.", ar: "في المساء أحفظ المفردات." }
        ],
        questions: [
          { q: "Um wie viel Uhr beginnt der Kurs?", qAr: "متى يبدأ الدرس؟", answer: "Um 9 Uhr", answerAr: "في الساعة التاسعة" }
        ]
      }
    ],
    grammar: [
      {
        id: "uhrzeit",
        title: "قراءة الساعة",
        titleDe: "Die Uhrzeit",
        explanation: "هناك طريقتان لقراءة الساعة: الرسمية وغير الرسمية.",
        rules: [
          { example: "Es ist 9 Uhr. / Es ist neun Uhr.", translation: "الساعة التاسعة.", note: "تماماً" },
          { example: "Es ist 9:15 / Viertel nach neun.", translation: "الساعة التاسعة والربع.", note: "" },
          { example: "Es ist 9:30 / halb zehn.", translation: "الساعة التاسعة والنصف.", note: "halb = نصف قبل الساعة التالية!" },
          { example: "Es ist 9:45 / Viertel vor zehn.", translation: "الساعة العاشرة إلا الربع.", note: "" }
        ]
      },
      {
        id: "trennbare-verben",
        title: "الأفعال المنفصلة - Trennbare Verben",
        titleDe: "Trennbare Verben",
        explanation: "بعض الأفعال لها بادئة تنفصل وتنتقل إلى نهاية الجملة.",
        rules: [
          { example: "aufstehen → Ich stehe um 7 Uhr auf.", translation: "أستيقظ في السابعة.", note: "auf ينتقل للنهاية" },
          { example: "anfangen → Der Kurs fängt um 9 an.", translation: "الدرس يبدأ في التاسعة.", note: "an ينتقل للنهاية" },
          { example: "einkaufen → Ich kaufe im Supermarkt ein.", translation: "أتسوق في السوبرماركت.", note: "ein ينتقل للنهاية" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Es ist 'halb zehn'. Was bedeutet das?",
        questionAr: "ماذا تعني halb zehn؟",
        options: ["العاشرة والنصف", "التاسعة والنصف", "العاشرة", "العاشرة إلا الربع"],
        answer: 1
      },
      {
        type: "fillblank",
        question: "Ich _____ um 7 Uhr _____. (aufstehen)",
        questionAr: "أكمل الفراغ",
        answer: "stehe / auf",
        hint: "فعل منفصل: stehe...auf"
      }
    ],
    writingPrompts: [
      {
        prompt: "صف يومك العادي",
        promptDe: "Beschreiben Sie Ihren Tagesablauf",
        helpers: ["Ich stehe um ... auf.", "Um ... Uhr ...", "Am Morgen/Abend..."],
        example: "Ich stehe um 7 Uhr auf. Um 8 Uhr frühstücke ich. Um 9 Uhr beginnt der Kurs."
      }
    ],
    speakingPhrases: [
      { de: "Wie spät ist es?", ar: "كم الساعة؟" },
      { de: "Es ist drei Uhr.", ar: "الساعة الثالثة." },
      { de: "Es ist halb vier.", ar: "الساعة الثالثة والنصف." },
      { de: "Wann beginnt der Kurs?", ar: "متى يبدأ الدرس؟" },
      { de: "Hast du Zeit?", ar: "هل لديك وقت؟" }
    ]
  },

  {
    id: 5,
    titleDe: "Einkaufen",
    titleAr: "التسوق والطعام",
    emoji: "🛒",
    color: "#f87171",
    topics: ["التسوق للطعام", "الكميات", "الطبخ", "الأوزان"],
    topicsDe: ["Lebensmittel", "Mengen", "Kochen", "Gewichte"],
    canDo: "أستطيع أن أتسوق وأتحدث عن الطعام",
    canDoDe: "Ich kann einkaufen und über Essen sprechen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/41_langenschidt_-_5.2b_-_einkaufen.mp3", label: "5.2b - Einkaufen", labelAr: "التسوق" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/45_langenschidt_-_5.8_-_matis_laden.mp3", label: "5.8 - Matis Laden", labelAr: "متجر ماتي" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/46_langenschidt_-_5.10a_-_was_kochen_wir.mp3", label: "5.10a - Was kochen wir?", labelAr: "ماذا نطبخ؟" }
    ],
    dialogs: [
      {
        title: "Im Supermarkt",
        titleAr: "في السوبرماركت",
        lines: [
          { speaker: "Kunde", de: "Haben Sie frische Tomaten?", ar: "هل عندكم طماطم طازجة؟" },
          { speaker: "Verkäufer", de: "Ja, natürlich. Wie viel möchten Sie?", ar: "نعم بالطبع. كم تريد؟" },
          { speaker: "Kunde", de: "Ein Kilo, bitte. Und 500 Gramm Käse.", ar: "كيلو من فضلك. و500 غرام جبن." },
          { speaker: "Verkäufer", de: "Gerne. Das macht 6 Euro 80.", ar: "بكل سرور. المجموع 6 يورو و80 سنتاً." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Rezept: Tomatensalat",
        titleAr: "وصفة: سلطة الطماطم",
        text: [
          { de: "Zutaten: 500 g Tomaten, 1 Gurke, 1 Zwiebel, Öl, Salz.", ar: "المكونات: 500 غ طماطم، خيارة، بصلة، زيت، ملح." },
          { de: "Zubereitung: Die Tomaten schneiden.", ar: "طريقة التحضير: تقطيع الطماطم." },
          { de: "Dann die Gurke und die Zwiebel schneiden.", ar: "ثم تقطيع الخيار والبصل." },
          { de: "Alles mischen. Öl und Salz dazu.", ar: "خلط الكل. إضافة الزيت والملح." },
          { de: "Fertig! Guten Appetit!", ar: "جاهز! بالهناء والشفاء!" }
        ],
        questions: [
          { q: "Was braucht man für den Salat?", qAr: "ماذا نحتاج للسلطة؟", answer: "Tomaten, Gurke, Zwiebel, Öl, Salz", answerAr: "طماطم، خيار، بصل، زيت، ملح" }
        ]
      }
    ],
    grammar: [
      {
        id: "mengen",
        title: "الكميات والأوزان",
        titleDe: "Mengenangaben",
        explanation: "عند التسوق تحتاج إلى كلمات الكميات.",
        rules: [
          { example: "ein Kilo Tomaten", translation: "كيلو طماطم", note: "" },
          { example: "500 Gramm Käse", translation: "500 غرام جبن", note: "" },
          { example: "ein Liter Milch", translation: "لتر حليب", note: "" },
          { example: "eine Flasche Wasser", translation: "زجاجة ماء", note: "" },
          { example: "ein Paket Nudeln", translation: "علبة معكرونة", note: "" }
        ]
      },
      {
        id: "imperativ",
        title: "صيغة الأمر - Imperativ",
        titleDe: "Der Imperativ",
        explanation: "نستخدم الأمر في الوصفات والتعليمات.",
        rules: [
          { example: "schneiden → Schneiden Sie die Tomaten!", translation: "اقطع/ي الطماطم! (رسمي)", note: "" },
          { example: "mischen → Mischen Sie alles!", translation: "اخلط/ي كل شيء! (رسمي)", note: "" },
          { example: "kochen → Koch die Suppe! (غير رسمي)", translation: "اطبخ الشوربة!", note: "" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Was bedeutet 'Guten Appetit'?",
        questionAr: "ما معنى Guten Appetit؟",
        options: ["تناول جيداً / بالهناء", "شكراً على الطعام", "الطعام لذيذ", "أنا جائع"],
        answer: 0
      },
      {
        type: "fillblank",
        question: "Ich möchte ein _____ Milch. (لتر)",
        questionAr: "أكمل الفراغ",
        answer: "Liter",
        hint: "وحدة قياس السوائل"
      }
    ],
    writingPrompts: [
      {
        prompt: "اكتب قائمة تسوق لأسبوع",
        promptDe: "Schreiben Sie eine Einkaufsliste",
        helpers: ["Ich brauche...", "ein Kilo...", "500 Gramm...", "eine Flasche..."],
        example: "Ich brauche: ein Kilo Tomaten, 500 Gramm Käse, eine Flasche Öl und zwei Liter Milch."
      }
    ],
    speakingPhrases: [
      { de: "Haben Sie ...?", ar: "هل عندكم ...؟" },
      { de: "Ich möchte ... kaufen.", ar: "أريد أن أشتري ..." },
      { de: "Ein Kilo, bitte.", ar: "كيلو من فضلك." },
      { de: "Was kostet das?", ar: "بكم هذا؟" },
      { de: "Guten Appetit!", ar: "بالهناء والشفاء!" }
    ]
  },

  {
    id: 6,
    titleDe: "Meine Familie",
    titleAr: "عائلتي",
    emoji: "👨‍👩‍👧‍👦",
    color: "#34d399",
    topics: ["أفراد العائلة", "أعياد الميلاد", "التهاني", "الصفات"],
    topicsDe: ["Familie", "Geburtstag", "Glückwünsche", "Adjektive"],
    canDo: "أستطيع أن أتحدث عن عائلتي وأهنئ في المناسبات",
    canDoDe: "Ich kann über meine Familie sprechen und gratulieren",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/49_langenschidt_-_6.1a_-_familienfotos.mp3", label: "6.1a - Familienfotos", labelAr: "صور العائلة" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/50_langenschidt_-_6.2a_-_wie_gross_ist_ihre_familie.mp3", label: "6.2a - Wie groß ist Ihre Familie?", labelAr: "كم عدد أفراد عائلتك؟" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/52_langenschidt_-_6.7a-b_-_bens_geburtstag.mp3", label: "6.7 - Bens Geburtstag", labelAr: "عيد ميلاد بن" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/53_langenschidt_-_6.7d_-_gluckwunsche.mp3", label: "6.7d - Glückwünsche", labelAr: "التهاني" }
    ],
    dialogs: [
      {
        title: "Meine Familie",
        titleAr: "التحدث عن العائلة",
        lines: [
          { speaker: "Anna", de: "Haben Sie Kinder?", ar: "هل لديك أطفال؟" },
          { speaker: "Carlos", de: "Ja, ich habe zwei Kinder. Eine Tochter und einen Sohn.", ar: "نعم، عندي طفلان. بنت وولد." },
          { speaker: "Anna", de: "Wie alt sind sie?", ar: "كم أعمارهم؟" },
          { speaker: "Carlos", de: "Meine Tochter ist 8 und mein Sohn ist 5 Jahre alt.", ar: "ابنتي عمرها 8 وابني عمره 5 سنوات." }
        ]
      },
      {
        title: "Herzlichen Glückwunsch!",
        titleAr: "كل عام وأنت بخير!",
        lines: [
          { speaker: "Maria", de: "Heute ist mein Geburtstag!", ar: "اليوم عيد ميلادي!" },
          { speaker: "Thomas", de: "Herzlichen Glückwunsch zum Geburtstag!", ar: "كل عام وأنت بخير!" },
          { speaker: "Maria", de: "Danke schön!", ar: "شكراً جزيلاً!" },
          { speaker: "Thomas", de: "Wie alt bist du jetzt?", ar: "كم عمرك الآن؟" },
          { speaker: "Maria", de: "Ich bin 30 Jahre alt.", ar: "عمري 30 سنة." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Familie Wagner",
        titleAr: "عائلة فاغنر",
        text: [
          { de: "Das ist Familie Wagner.", ar: "هذه عائلة فاغنر." },
          { de: "Der Vater heißt Peter. Er ist 42 Jahre alt.", ar: "اسم الأب بيتر. عمره 42 سنة." },
          { de: "Die Mutter heißt Sabine. Sie ist 40 Jahre alt.", ar: "اسم الأم زابينه. عمرها 40 سنة." },
          { de: "Sie haben zwei Kinder: Tim (15) und Lisa (12).", ar: "لديهم طفلان: تيم (15) وليزا (12)." },
          { de: "Die Familie wohnt in München.", ar: "العائلة تسكن في ميونيخ." }
        ],
        questions: [
          { q: "Wie alt ist der Vater?", qAr: "كم عمر الأب؟", answer: "42 Jahre alt", answerAr: "42 سنة" },
          { q: "Wo wohnt die Familie?", qAr: "أين تسكن العائلة؟", answer: "In München", answerAr: "في ميونيخ" }
        ]
      }
    ],
    grammar: [
      {
        id: "possessive",
        title: "أدوات الملكية - Possessivartikel",
        titleDe: "Possessivartikel",
        explanation: "لإظهار الملكية نستخدم أدوات الملكية.",
        rules: [
          { example: "mein Vater / meine Mutter / mein Kind", translation: "أبي / أمي / طفلي", note: "mein للمذكر والمحايد، meine للمؤنث" },
          { example: "dein Bruder / deine Schwester", translation: "أخوك / أختك", note: "dein لـ du" },
          { example: "sein Sohn (لـ er) / ihr Sohn (لـ sie)", translation: "ابنه / ابنها", note: "" }
        ],
        table: {
          headers: ["الضمير", "مذكر", "مؤنث", "محايد"],
          rows: [
            ["ich", "mein", "meine", "mein"],
            ["du", "dein", "deine", "dein"],
            ["er", "sein", "seine", "sein"],
            ["sie", "ihr", "ihre", "ihr"]
          ]
        }
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Herzlichen Glückwunsch! Was bedeutet das?",
        questionAr: "ما معنى Herzlichen Glückwunsch؟",
        options: ["مرحباً", "شكراً", "كل عام وأنت بخير / مبروك", "مع السلامة"],
        answer: 2
      },
      {
        type: "fillblank",
        question: "Das ist _____ Mutter. (mein/meine)",
        questionAr: "أكمل بأداة الملكية الصحيحة",
        answer: "meine",
        hint: "Mutter مؤنث → meine"
      }
    ],
    writingPrompts: [
      {
        prompt: "صف عائلتك بالألمانية",
        promptDe: "Beschreiben Sie Ihre Familie",
        helpers: ["Meine Familie ist...", "Mein Vater heißt...", "Meine Mutter ist ... Jahre alt.", "Ich habe ... Geschwister."],
        example: "Meine Familie ist groß. Mein Vater heißt Ahmad. Er ist 50 Jahre alt. Meine Mutter heißt Fatima. Ich habe zwei Brüder und eine Schwester."
      }
    ],
    speakingPhrases: [
      { de: "Ich habe ... Kinder/Geschwister.", ar: "عندي ... أطفال/إخوة." },
      { de: "Mein Vater/Mutter heißt ...", ar: "اسم أبي/أمي ..." },
      { de: "Herzlichen Glückwunsch!", ar: "كل عام وأنت بخير!" },
      { de: "Alles Gute zum Geburtstag!", ar: "كل عام وأنت بخير! (في عيد الميلاد)" },
      { de: "Wie alt bist du?", ar: "كم عمرك؟" }
    ]
  },

  {
    id: 7,
    titleDe: "Wohnen in Deutschland",
    titleAr: "السكن في ألمانيا",
    emoji: "🏠",
    color: "#60a5fa",
    topics: ["المسكن", "الغرف", "الأثاث", "البحث عن شقة"],
    topicsDe: ["Wohnung", "Zimmer", "Möbel", "Wohnungssuche"],
    canDo: "أستطيع أن أصف مسكني وأبحث عن شقة",
    canDoDe: "Ich kann meine Wohnung beschreiben und eine Wohnung suchen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/16_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_1.mp3", label: "8.2 - Wohnungssuche (1)", labelAr: "البحث عن شقة 1" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/17_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_2.mp3", label: "8.2 - Wohnungssuche (2)", labelAr: "البحث عن شقة 2" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/18_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_3.mp3", label: "8.2 - Wohnungssuche (3)", labelAr: "البحث عن شقة 3" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/19_langenschidt_-_8.7_-_magdas_wohnung.mp3", label: "8.7 - Magdas Wohnung", labelAr: "شقة ماغدا" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/22_langenschidt_-_8.12_-_der_umzug.mp3", label: "8.12 - Der Umzug", labelAr: "الانتقال للسكن الجديد" }
    ],
    dialogs: [
      {
        title: "Die Wohnung",
        titleAr: "الشقة",
        lines: [
          { speaker: "Makler", de: "Die Wohnung hat 3 Zimmer, eine Küche und ein Bad.", ar: "الشقة بها 3 غرف ومطبخ وحمام." },
          { speaker: "Kunde", de: "Wie groß ist die Wohnung?", ar: "كم مساحة الشقة؟" },
          { speaker: "Makler", de: "Sie ist 75 Quadratmeter groß.", ar: "مساحتها 75 متراً مربعاً." },
          { speaker: "Kunde", de: "Was kostet die Miete?", ar: "كم الإيجار؟" },
          { speaker: "Makler", de: "Die Miete ist 800 Euro im Monat.", ar: "الإيجار 800 يورو في الشهر." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Meine Wohnung",
        titleAr: "شقتي",
        text: [
          { de: "Ich wohne in einer 2-Zimmer-Wohnung.", ar: "أسكن في شقة بغرفتين." },
          { de: "Meine Wohnung hat ein Wohnzimmer, ein Schlafzimmer, eine Küche und ein Bad.", ar: "شقتي بها غرفة معيشة وغرفة نوم ومطبخ وحمام." },
          { de: "Die Wohnung ist im 3. Stock.", ar: "الشقة في الطابق الثالث." },
          { de: "Ich zahle 650 Euro Miete.", ar: "أدفع 650 يورو إيجاراً." }
        ],
        questions: [
          { q: "Wie viele Zimmer hat die Wohnung?", qAr: "كم غرفة في الشقة؟", answer: "2 Zimmer", answerAr: "غرفتان" }
        ]
      }
    ],
    grammar: [
      {
        id: "praepositionen-ort",
        title: "حروف الجر للمكان",
        titleDe: "Präpositionen des Ortes",
        explanation: "نستخدم حروف الجر لوصف مكان الأشياء.",
        rules: [
          { example: "Das Buch ist auf dem Tisch.", translation: "الكتاب على الطاولة.", note: "auf = على" },
          { example: "Die Lampe ist neben dem Sofa.", translation: "المصباح بجانب الأريكة.", note: "neben = بجانب" },
          { example: "Das Bett ist im Schlafzimmer.", translation: "السرير في غرفة النوم.", note: "in = في" },
          { example: "Der Schrank steht vor dem Fenster.", translation: "الخزانة أمام النافذة.", note: "vor = أمام" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Was bedeutet 'Wohnzimmer'?",
        questionAr: "ما معنى Wohnzimmer؟",
        options: ["غرفة النوم", "المطبخ", "غرفة المعيشة", "الحمام"],
        answer: 2
      },
      {
        type: "fillblank",
        question: "Das Buch ist _____ dem Tisch. (على)",
        questionAr: "أكمل بحرف الجر المناسب",
        answer: "auf",
        hint: "auf = على"
      }
    ],
    writingPrompts: [
      {
        prompt: "صف شقتك أو منزلك",
        promptDe: "Beschreiben Sie Ihre Wohnung",
        helpers: ["Ich wohne in...", "Meine Wohnung hat...", "Im Wohnzimmer gibt es...", "Die Miete ist..."],
        example: "Ich wohne in einer 3-Zimmer-Wohnung. Sie hat ein Wohnzimmer, zwei Schlafzimmer und eine Küche. Im Wohnzimmer gibt es ein Sofa und einen Fernseher."
      }
    ],
    speakingPhrases: [
      { de: "Ich wohne in einer Wohnung/einem Haus.", ar: "أسكن في شقة/بيت." },
      { de: "Meine Wohnung hat ... Zimmer.", ar: "شقتي بها ... غرف." },
      { de: "Was kostet die Miete?", ar: "كم الإيجار؟" },
      { de: "Wo ist ...?", ar: "أين ...؟" }
    ]
  },

  {
    id: 8,
    titleDe: "Gesundheit und Körper",
    titleAr: "الصحة والجسم",
    emoji: "🏥",
    color: "#f87171",
    topics: ["أجزاء الجسم", "الشكاوى الصحية", "عند الطبيب"],
    topicsDe: ["Körperteile", "Beschwerden", "Arztbesuch"],
    canDo: "أستطيع أن أتحدث عن أعراض المرض عند الطبيب",
    canDoDe: "Ich kann beim Arzt über Beschwerden sprechen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/38_langenschidt_-_11.1b_-_der_korper.mp3", label: "11.1b - Der Körper", labelAr: "أجزاء الجسم" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/41_langenschidt_-_11.5_-_bei_der_hausarztin,_dialog_1.mp3", label: "11.5 - Bei der Hausärztin (1)", labelAr: "عند الطبيبة 1" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/42_langenschidt_-_11.5_-_bei_der_hausarztin,_dialog_2.mp3", label: "11.5 - Bei der Hausärztin (2)", labelAr: "عند الطبيبة 2" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/43_langenschidt_-_11.6_-_fragen_und_antworten_beim_arzt.mp3", label: "11.6 - Fragen beim Arzt", labelAr: "أسئلة وأجوبة عند الطبيب" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/45_langenschidt_-_11.9_-_termine_machen,_absagen,_verschieben.mp3", label: "11.9 - Termine machen", labelAr: "تحديد وإلغاء المواعيد" }
    ],
    dialogs: [
      {
        title: "Beim Arzt",
        titleAr: "عند الطبيب",
        lines: [
          { speaker: "Arzt", de: "Guten Tag! Was fehlt Ihnen?", ar: "مرحباً! ما الذي يؤلمك؟" },
          { speaker: "Patient", de: "Ich habe Kopfschmerzen und Fieber.", ar: "عندي صداع وحمى." },
          { speaker: "Arzt", de: "Seit wann?", ar: "منذ متى؟" },
          { speaker: "Patient", de: "Seit zwei Tagen.", ar: "منذ يومين." },
          { speaker: "Arzt", de: "Öffnen Sie bitte den Mund. Sagen Sie: Ah!", ar: "افتح فمك من فضلك. قل: آه!" },
          { speaker: "Patient", de: "Aaah.", ar: "آه." },
          { speaker: "Arzt", de: "Sie haben eine Erkältung. Ich verschreibe Ihnen Medikamente.", ar: "عندك رشح/برد. سأكتب لك دواء." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Gesund bleiben",
        titleAr: "البقاء بصحة جيدة",
        text: [
          { de: "Sport ist gesund.", ar: "الرياضة مفيدة للصحة." },
          { de: "Man soll viel Wasser trinken.", ar: "يجب شرب الكثير من الماء." },
          { de: "Obst und Gemüse sind wichtig.", ar: "الفواكه والخضروات مهمة." },
          { de: "Man soll nicht rauchen.", ar: "لا يجب التدخين." },
          { de: "Viel schlafen ist auch wichtig.", ar: "النوم الكافي مهم أيضاً." }
        ],
        questions: [
          { q: "Was ist gesund?", qAr: "ما المفيد للصحة؟", answer: "Sport, Wasser, Obst und Gemüse, Schlafen", answerAr: "الرياضة، الماء، الفواكه والخضروات، النوم" }
        ]
      }
    ],
    grammar: [
      {
        id: "modalverben",
        title: "أفعال الوجوب والإمكانية - Modalverben",
        titleDe: "Modalverben",
        explanation: "الأفعال الشكلية تُعبّر عن الوجوب والإمكانية والرغبة.",
        rules: [
          { example: "Ich muss Medikamente nehmen.", translation: "يجب أن آخذ الدواء.", note: "müssen = يجب" },
          { example: "Du kannst Sport machen.", translation: "يمكنك ممارسة الرياضة.", note: "können = يمكن" },
          { example: "Sie sollen viel trinken.", translation: "عليك أن تشرب كثيراً.", note: "sollen = عليك" },
          { example: "Ich darf nicht rauchen.", translation: "لا يجوز لي التدخين.", note: "dürfen = يجوز/لا يجوز" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Ich habe _____. (صداع)",
        questionAr: "كيف تقول 'عندي صداع' بالألمانية؟",
        options: ["Bauchschmerzen", "Kopfschmerzen", "Halsschmerzen", "Fieber"],
        answer: 1
      }
    ],
    writingPrompts: [
      {
        prompt: "اكتب رسالة لطبيبك تصف حالتك",
        promptDe: "Schreiben Sie eine Nachricht an Ihren Arzt",
        helpers: ["Ich habe...", "Seit ... Tagen/Stunden...", "Ich nehme..."],
        example: "Sehr geehrter Herr Doktor, ich habe starke Kopfschmerzen und Fieber. Die Schmerzen sind seit gestern. Ich nehme keine Medikamente. Mit freundlichen Grüßen."
      }
    ],
    speakingPhrases: [
      { de: "Ich habe Kopfschmerzen.", ar: "عندي صداع." },
      { de: "Mir ist schlecht.", ar: "أشعر بالغثيان." },
      { de: "Ich habe Fieber.", ar: "عندي حمى/سخونة." },
      { de: "Was fehlt Ihnen?", ar: "ما الذي يؤلمك؟" },
      { de: "Ich muss zum Arzt.", ar: "يجب أن أذهب للطبيب." }
    ]
  },

  {
    id: 9,
    titleDe: "Unterwegs",
    titleAr: "التنقل والسفر",
    emoji: "🚂",
    color: "#a78bfa",
    topics: ["وسائل النقل", "محطة القطار", "الاتجاهات"],
    topicsDe: ["Verkehrsmittel", "Bahnhof", "Wegbeschreibung"],
    canDo: "أستطيع أن أسأل عن الطريق وأشتري تذكرة قطار",
    canDoDe: "Ich kann nach dem Weg fragen und eine Fahrkarte kaufen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/02_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_1.mp3", label: "7.2 - Berlin kennenlernen (1)", labelAr: "التعرف على برلين 1" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/03_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_2.mp3", label: "7.2 - Berlin kennenlernen (2)", labelAr: "التعرف على برلين 2" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/04_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_3.mp3", label: "7.2 - Berlin kennenlernen (3)", labelAr: "التعرف على برلين 3" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/05_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_4.mp3", label: "7.2 - Berlin kennenlernen (4)", labelAr: "التعرف على برلين 4" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/06_langenschidt_-_7.3_-_wo_ist_bitte_..._wie_komme_ich_..._ich_suche_....mp3", label: "7.3 - Wegbeschreibung", labelAr: "وصف الطريق" }
    ],
    dialogs: [
      {
        title: "Am Bahnhof",
        titleAr: "في محطة القطار",
        lines: [
          { speaker: "Kunde", de: "Eine Fahrkarte nach München, bitte.", ar: "تذكرة إلى ميونيخ من فضلك." },
          { speaker: "Beamter", de: "Einfach oder hin und zurück?", ar: "ذهاب فقط أم ذهاباً وعودة؟" },
          { speaker: "Kunde", de: "Hin und zurück, bitte.", ar: "ذهاباً وعودة من فضلك." },
          { speaker: "Beamter", de: "Das macht 89 Euro.", ar: "المجموع 89 يورو." },
          { speaker: "Kunde", de: "Von welchem Gleis fährt der Zug ab?", ar: "من أي رصيف يغادر القطار؟" },
          { speaker: "Beamter", de: "Gleis 7.", ar: "الرصيف 7." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Der Fahrplan",
        titleAr: "جدول المواعيد",
        text: [
          { de: "Der Zug nach Berlin fährt um 10:30 Uhr ab.", ar: "القطار إلى برلين يغادر في الساعة 10:30." },
          { de: "Er kommt um 14:15 Uhr an.", ar: "يصل في الساعة 14:15." },
          { de: "Die Fahrt dauert etwa 4 Stunden.", ar: "الرحلة تستغرق حوالي 4 ساعات." }
        ],
        questions: [
          { q: "Wann fährt der Zug ab?", qAr: "متى يغادر القطار؟", answer: "Um 10:30 Uhr", answerAr: "في الساعة 10:30" }
        ]
      }
    ],
    grammar: [
      {
        id: "wegbeschreibung",
        title: "وصف الطريق",
        titleDe: "Wegbeschreibung",
        explanation: "كلمات مهمة لوصف الطريق.",
        rules: [
          { example: "Gehen Sie geradeaus.", translation: "اذهب إلى الأمام مباشرة.", note: "" },
          { example: "Biegen Sie rechts/links ab.", translation: "انعطف يميناً/يساراً.", note: "" },
          { example: "Die nächste Straße links.", translation: "الشارع التالي على اليسار.", note: "" },
          { example: "Nehmen Sie die U-Bahn.", translation: "خذ مترو الأنفاق.", note: "" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Was bedeutet 'hin und zurück'?",
        questionAr: "ما معنى hin und zurück؟",
        options: ["ذهاب فقط", "عودة فقط", "ذهاباً وعودة", "بدون تذكرة"],
        answer: 2
      }
    ],
    writingPrompts: [
      {
        prompt: "اكتب تعليمات للوصول إلى مكانك",
        promptDe: "Schreiben Sie eine Wegbeschreibung",
        helpers: ["Nehmen Sie die U-Bahn...", "Gehen Sie ... Minuten geradeaus.", "Biegen Sie... ab."],
        example: "Nehmen Sie die U-Bahn Linie 2. Fahren Sie bis zur Haltestelle Alexanderplatz. Dann gehen Sie 5 Minuten geradeaus. Biegen Sie links ab. Das Haus ist auf der rechten Seite."
      }
    ],
    speakingPhrases: [
      { de: "Entschuldigung, wie komme ich zum Bahnhof?", ar: "عذراً، كيف أصل إلى محطة القطار؟" },
      { de: "Gehen Sie geradeaus.", ar: "اذهب إلى الأمام." },
      { de: "Eine Fahrkarte nach ... bitte.", ar: "تذكرة إلى ... من فضلك." },
      { de: "Von welchem Gleis?", ar: "من أي رصيف؟" }
    ]
  },

  {
    id: 10,
    titleDe: "Freizeit und Hobbys",
    titleAr: "وقت الفراغ والهوايات",
    emoji: "⚽",
    color: "#fbbf24",
    topics: ["الهوايات", "الرياضة", "الترفيه", "الدعوة"],
    topicsDe: ["Hobbys", "Sport", "Freizeit", "Einladung"],
    canDo: "أستطيع أن أتحدث عن هواياتي وأدعو شخصاً",
    canDoDe: "Ich kann über Hobbys sprechen und jemanden einladen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/23_langenschidt_-_9.1_-_das_wochenende.mp3", label: "9.1 - Das Wochenende", labelAr: "عطلة نهاية الأسبوع" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/26_langenschidt_-_9.7_-_das_fotoalbum_von_swetlana_riesen.mp3", label: "9.7 - Das Fotoalbum", labelAr: "ألبوم الصور" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/27_langenschidt_-_9.10c_-_wiener_geschichten.mp3", label: "9.10c - Wiener Geschichten", labelAr: "قصص فيينا" }
    ],
    dialogs: [
      {
        title: "Was machst du in der Freizeit?",
        titleAr: "ماذا تفعل في وقت فراغك؟",
        lines: [
          { speaker: "Thomas", de: "Was machst du in der Freizeit?", ar: "ماذا تفعل في وقت فراغك؟" },
          { speaker: "Maria", de: "Ich spiele gern Fußball. Und du?", ar: "أحب لعب كرة القدم. وأنت؟" },
          { speaker: "Thomas", de: "Ich lese gern Bücher und höre Musik.", ar: "أحب قراءة الكتب وسماع الموسيقى." },
          { speaker: "Maria", de: "Spielst du Fußball? Wir brauchen einen Spieler.", ar: "هل تلعب كرة القدم؟ نحتاج لاعباً." },
          { speaker: "Thomas", de: "Ja, ich komme!", ar: "نعم، سأتي!" }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Mein Hobby",
        titleAr: "هوايتي",
        text: [
          { de: "Ich heiße Sarah. Mein Hobby ist Fotografieren.", ar: "اسمي سارة. هوايتي التصوير." },
          { de: "Ich fotografiere gern Menschen und Landschaften.", ar: "أحب تصوير الناس والمناظر الطبيعية." },
          { de: "Am Wochenende gehe ich in den Park.", ar: "في عطلة الأسبوع أذهب إلى الحديقة." },
          { de: "Das macht mir viel Spaß!", ar: "هذا يسعدني كثيراً!" }
        ],
        questions: [
          { q: "Was ist Sarahs Hobby?", qAr: "ما هواية سارة؟", answer: "Fotografieren", answerAr: "التصوير" }
        ]
      }
    ],
    grammar: [
      {
        id: "gern",
        title: "التعبير عن الإعجاب - gern / nicht gern",
        titleDe: "Gern und nicht gern",
        explanation: "نستخدم gern للتعبير عن شيء نحبه.",
        rules: [
          { example: "Ich spiele gern Tennis.", translation: "أحب لعب التنس.", note: "gern بعد الفعل" },
          { example: "Ich lese nicht gern.", translation: "لا أحب القراءة.", note: "nicht gern = لا أحب" },
          { example: "Ich schwimme sehr gern.", translation: "أحب السباحة كثيراً.", note: "sehr gern = أحب جداً" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Ich spiele gern Fußball. Was bedeutet 'gern'?",
        questionAr: "ما معنى gern هنا؟",
        options: ["لا أحب", "أحب/يعجبني", "أستطيع", "يجب"],
        answer: 1
      }
    ],
    writingPrompts: [
      {
        prompt: "اكتب عن هواياتك وما تحب",
        promptDe: "Schreiben Sie über Ihre Hobbys",
        helpers: ["Mein Hobby ist...", "Ich spiele/lese/höre gern...", "Am Wochenende..."],
        example: "Mein Hobby ist Fußball. Ich spiele sehr gern Fußball. Am Wochenende spiele ich mit Freunden. Ich höre auch gern Musik."
      }
    ],
    speakingPhrases: [
      { de: "Was machst du gern?", ar: "ماذا تحب أن تفعل؟" },
      { de: "Ich spiele gern ...", ar: "أحب لعب ..." },
      { de: "Ich lese/höre/sehe gern ...", ar: "أحب قراءة/سماع/مشاهدة ..." },
      { de: "Das macht mir Spaß!", ar: "هذا يسعدني!" },
      { de: "Hast du Lust, ...?", ar: "هل تريد ...؟" }
    ]
  },

  {
    id: 11,
    titleDe: "Arbeit und Beruf",
    titleAr: "العمل والمهنة",
    emoji: "💼",
    color: "#34d399",
    topics: ["المهن", "بيئة العمل", "البحث عن عمل"],
    topicsDe: ["Berufe", "Arbeitsplatz", "Jobsuche"],
    canDo: "أستطيع أن أتحدث عن عملي وأفهم إعلانات الوظائف",
    canDoDe: "Ich kann über meinen Beruf sprechen und Stellenanzeigen verstehen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/32_langenschidt_-_10.2_-_arbeitsalltag.mp3", label: "10.2 - Arbeitsalltag", labelAr: "روتين العمل اليومي" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/33_langenschidt_-_10.5_-_im_personalburo.mp3", label: "10.5 - Im Personalbüro", labelAr: "في مكتب شؤون الموظفين" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/36_langenschidt_-_10.10_-_zwei_telefongesprache,_gesprach_1.mp3", label: "10.10 - Telefongespräch (1)", labelAr: "مكالمة هاتفية 1" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/37_langenschidt_-_10.10_-_zwei_telefongesprache,_gesprach_2.mp3", label: "10.10 - Telefongespräch (2)", labelAr: "مكالمة هاتفية 2" }
    ],
    dialogs: [
      {
        title: "Was sind Sie von Beruf?",
        titleAr: "ما مهنتك؟",
        lines: [
          { speaker: "A", de: "Was sind Sie von Beruf?", ar: "ما مهنتك؟" },
          { speaker: "B", de: "Ich bin Ärztin. Und Sie?", ar: "أنا طبيبة. وأنتَ؟" },
          { speaker: "A", de: "Ich bin Ingenieur. Ich arbeite bei einer Computerfirma.", ar: "أنا مهندس. أعمل في شركة حاسوب." },
          { speaker: "B", de: "Das ist interessant! Ich arbeite im Krankenhaus.", ar: "هذا مثير للاهتمام! أنا أعمل في المستشفى." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Stellenanzeige",
        titleAr: "إعلان وظيفة",
        text: [
          { de: "Gesucht: Koch/Köchin", ar: "مطلوب: طباخ/طباخة" },
          { de: "Wir suchen einen erfahrenen Koch.", ar: "نبحث عن طباخ ذي خبرة." },
          { de: "Arbeitszeit: 40 Stunden pro Woche.", ar: "ساعات العمل: 40 ساعة في الأسبوع." },
          { de: "Gehalt: 2500 Euro pro Monat.", ar: "الراتب: 2500 يورو في الشهر." },
          { de: "Bitte bewerben Sie sich per E-Mail.", ar: "يرجى التقدم عبر البريد الإلكتروني." }
        ],
        questions: [
          { q: "Wie viel Stunden arbeitet man pro Woche?", qAr: "كم ساعة في الأسبوع؟", answer: "40 Stunden", answerAr: "40 ساعة" }
        ]
      }
    ],
    grammar: [
      {
        id: "berufe-genus",
        title: "المهن - المذكر والمؤنث",
        titleDe: "Berufe: maskulin und feminin",
        explanation: "في الألمانية المهن لها صيغة مذكر ومؤنث.",
        rules: [
          { example: "der Arzt → die Ärztin", translation: "الطبيب → الطبيبة", note: "نضيف -in للمؤنث" },
          { example: "der Lehrer → die Lehrerin", translation: "المعلم → المعلمة", note: "" },
          { example: "der Koch → die Köchin", translation: "الطباخ → الطباخة", note: "" },
          { example: "der Ingenieur → die Ingenieurin", translation: "المهندس → المهندسة", note: "" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Was ist die weibliche Form von 'Arzt'?",
        questionAr: "ما صيغة المؤنث لـ Arzt (طبيب)؟",
        options: ["Artzt", "Ärztin", "Arzterin", "Ärzten"],
        answer: 1
      }
    ],
    writingPrompts: [
      {
        prompt: "صف عملك أو عملك المثالي",
        promptDe: "Beschreiben Sie Ihre Arbeit / Ihren Traumjob",
        helpers: ["Ich bin ... von Beruf.", "Ich arbeite bei/in...", "Ich arbeite ... Stunden.", "Mein Traumjob ist..."],
        example: "Ich bin Informatiker. Ich arbeite bei einer Computerfirma in Berlin. Ich arbeite 40 Stunden pro Woche. Mein Job macht mir Spaß."
      }
    ],
    speakingPhrases: [
      { de: "Ich bin ... von Beruf.", ar: "مهنتي ..." },
      { de: "Ich arbeite bei/in ...", ar: "أعمل في ..." },
      { de: "Was sind Sie von Beruf?", ar: "ما مهنتك؟" },
      { de: "Ich suche Arbeit.", ar: "أبحث عن عمل." }
    ]
  },

  {
    id: 12,
    titleDe: "Essen und Trinken",
    titleAr: "الأكل والشرب",
    emoji: "🍽️",
    color: "#fb923c",
    topics: ["المطعم", "الطلب", "تفضيلات الطعام", "الدفع"],
    topicsDe: ["Restaurant", "Bestellen", "Essensvorlieben", "Bezahlen"],
    canDo: "أستطيع أن أطلب في مطعم وأدفع الحساب",
    canDoDe: "Ich kann im Restaurant bestellen und bezahlen",
    audioFiles: [
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/51_langenschidt_-_12.3_-_eine_reise_buchen.mp3", label: "12.3 - Eine Reise buchen", labelAr: "حجز رحلة سفر" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/52_langenschidt_-_12.6_-_fahrkarten_kaufen.mp3", label: "12.6 - Fahrkarten kaufen", labelAr: "شراء التذاكر" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/53_langenschidt_-_12.7_-_an_der_rezeption.mp3", label: "12.7 - An der Rezeption", labelAr: "في الاستقبال" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/54_langenschidt_-_12.8_-_das_wetter.mp3", label: "12.8 - Das Wetter", labelAr: "الطقس" },
      { file: "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/56_langenschidt_-_12.12_-_ein_kursausflug,_dialog_1.mp3", label: "12.12 - Exkursion (1)", labelAr: "رحلة الصف 1" }
    ],
    dialogs: [
      {
        title: "Im Restaurant",
        titleAr: "في المطعم",
        lines: [
          { speaker: "Kellner", de: "Was darf es sein?", ar: "ماذا تتفضل؟" },
          { speaker: "Gast", de: "Ich möchte die Suppe und dann das Schnitzel.", ar: "أريد الشوربة ثم الشنيتزل." },
          { speaker: "Kellner", de: "Was möchten Sie trinken?", ar: "ماذا تريد أن تشرب؟" },
          { speaker: "Gast", de: "Ein Wasser, bitte.", ar: "ماء من فضلك." },
          { speaker: "Gast", de: "Entschuldigung! Zahlen, bitte!", ar: "عذراً! الحساب من فضلك!" },
          { speaker: "Kellner", de: "Das macht 18 Euro 50, bitte.", ar: "المجموع 18 يورو و50 سنتاً." },
          { speaker: "Gast", de: "Stimmt so. Das ist für Sie.", ar: "احتفظ بالباقي. هذا لك." }
        ]
      }
    ],
    readingTexts: [
      {
        title: "Die Speisekarte",
        titleAr: "قائمة الطعام",
        text: [
          { de: "Vorspeisen: Suppe 4,50 € / Salat 5,00 €", ar: "المقبلات: شوربة 4.50 يورو / سلطة 5 يورو" },
          { de: "Hauptspeisen: Schnitzel 13,00 € / Pizza 10,50 €", ar: "الأطباق الرئيسية: شنيتزل 13 يورو / بيتزا 10.50 يورو" },
          { de: "Dessert: Eis 3,50 € / Kuchen 4,00 €", ar: "الحلوى: آيس كريم 3.50 يورو / كيك 4 يورو" },
          { de: "Getränke: Wasser 2,00 € / Bier 3,50 €", ar: "المشروبات: ماء 2 يورو / بيرة 3.50 يورو" }
        ],
        questions: [
          { q: "Was kostet das Schnitzel?", qAr: "بكم الشنيتزل؟", answer: "13,00 Euro", answerAr: "13 يورو" }
        ]
      }
    ],
    grammar: [
      {
        id: "indefinitpronomen",
        title: "الضمائر غير المحددة - man / es gibt",
        titleDe: "man und es gibt",
        explanation: "",
        rules: [
          { example: "Man isst in Deutschland viel Brot.", translation: "يأكل الناس في ألمانيا الكثير من الخبز.", note: "man = الناس/أحد" },
          { example: "Es gibt heute Schnitzel.", translation: "اليوم يوجد شنيتزل.", note: "es gibt = يوجد" },
          { example: "Es gibt keine Pizza heute.", translation: "لا يوجد بيتزا اليوم.", note: "es gibt + kein = لا يوجد" }
        ]
      }
    ],
    exercises: [
      {
        type: "mcq",
        question: "Zahlen, bitte! Was möchte der Gast?",
        questionAr: "ماذا يريد الضيف؟",
        options: ["يريد طعاماً إضافياً", "يريد الحساب", "يريد مشروباً", "يريد القائمة"],
        answer: 1
      },
      {
        type: "fillblank",
        question: "_____ gibt heute Schnitzel.",
        questionAr: "أكمل الجملة",
        answer: "Es",
        hint: "es gibt = يوجد"
      }
    ],
    writingPrompts: [
      {
        prompt: "اكتب طلبك في مطعم",
        promptDe: "Schreiben Sie Ihre Bestellung im Restaurant",
        helpers: ["Ich möchte...", "Als Vorspeise...", "Als Hauptspeise...", "Zum Trinken..."],
        example: "Guten Tag! Ich möchte als Vorspeise die Tomatensuppe. Als Hauptspeise nehme ich das Schnitzel. Zum Trinken möchte ich ein Mineralwasser, bitte."
      }
    ],
    speakingPhrases: [
      { de: "Was darf es sein?", ar: "ماذا تتفضل؟" },
      { de: "Ich möchte ..., bitte.", ar: "أريد ... من فضلك." },
      { de: "Zahlen, bitte!", ar: "الحساب من فضلك!" },
      { de: "Stimmt so.", ar: "احتفظ بالباقي." },
      { de: "Das Essen war lecker!", ar: "الطعام كان لذيذاً!" }
    ]
  }
];

// Daily rotation index
const TODAY_IDX = new Date().getDate() % CURRICULUM.reduce((a, c) => a + c.speakingPhrases.length, 0);
