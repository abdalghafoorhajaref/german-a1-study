// ============================================================
// WRITING TRAINING MODULE - كتابة المواضيع
// German A1 - Berliner Platz 1 Neu
// 15 Complete Writing Topics with full guidance
// ============================================================

// ── Writing Topics ────────────────────────────────────────────
const WRITING_TOPICS = [
  {
    id: 1,
    title: "Sich vorstellen",
    titleAr: "التعريف بالنفس",
    emoji: "👤",
    type: "Steckbrief / Aufsatz",
    typeAr: "بطاقة شخصية / موضوع تعريفي",
    relatedChapter: 1,
    targetLength: { min: 40, max: 80 },
    description: "تعلم كيف تكتب مقدمة عن نفسك بالألمانية - الاسم والعمر والبلد والسكن والأسرة واللغات.",
    keyVocabulary: [
      { de: "heißen", ar: "اسمه / يُدعى" },
      { de: "kommen aus", ar: "يأتي من / أصله من" },
      { de: "wohnen in", ar: "يسكن في" },
      { de: "sein (ich bin)", ar: "يكون / أنا" },
      { de: "alt (Jahre alt)", ar: "سنة من العمر" },
      { de: "verheiratet", ar: "متزوج" },
      { de: "ledig", ar: "أعزب" },
      { de: "das Kind / die Kinder", ar: "الطفل / الأطفال" },
      { de: "die Muttersprache", ar: "اللغة الأم" },
      { de: "lernen", ar: "يتعلم" },
      { de: "sprechen", ar: "يتحدث" },
      { de: "das Ziel", ar: "الهدف" },
      { de: "die Arbeit / der Beruf", ar: "العمل / المهنة" },
    ],
    usefulPhrases: [
      { de: "Ich heiße ...", ar: "اسمي ..." },
      { de: "Ich komme aus ...", ar: "أنا من ..." },
      { de: "Ich wohne in ... / seit ... Jahren.", ar: "أسكن في ... / منذ ... سنوات." },
      { de: "Ich bin ... Jahre alt.", ar: "عمري ... سنة." },
      { de: "Ich bin verheiratet / ledig.", ar: "أنا متزوج / أعزب." },
      { de: "Ich habe ... Kinder.", ar: "لدي ... أطفال." },
      { de: "Meine Muttersprache ist ...", ar: "لغتي الأم هي ..." },
      { de: "Ich lerne seit ... Deutsch.", ar: "أتعلم الألمانية منذ ..." },
      { de: "Ich spreche auch ...", ar: "أتحدث أيضاً ..." },
      { de: "Mein Ziel ist ...", ar: "هدفي هو ..." },
    ],
    grammarFocus: [
      "استخدم ich bin للتعريف بنفسك",
      "أفعال: heißen, kommen, wohnen, sein, haben",
      "تذكر: ich komme (وليس ich kommt)",
      "الأرقام: ich bin 25 Jahre alt",
    ],
    structure: [
      {
        step: "المقدمة - الاسم والبلد",
        icon: "1️⃣",
        tip: "ابدأ بـ Hallo أو Guten Tag ثم اسمك وبلدك",
        examples: [
          "Hallo! Ich heiße Ahmad.",
          "Ich komme aus Syrien / der Türkei / dem Irak.",
          "Jetzt wohne ich in Berlin / München / Hamburg."
        ]
      },
      {
        step: "المعلومات الشخصية - العمر والحالة",
        icon: "2️⃣",
        tip: "أضف عمرك وحالتك الاجتماعية وعدد أطفالك",
        examples: [
          "Ich bin 30 Jahre alt.",
          "Ich bin verheiratet und habe zwei Kinder.",
          "Ich bin ledig."
        ]
      },
      {
        step: "اللغات والدراسة",
        icon: "3️⃣",
        tip: "اذكر لغتك الأم ومدة تعلمك للألمانية",
        examples: [
          "Meine Muttersprache ist Arabisch.",
          "Ich lerne seit drei Monaten Deutsch.",
          "Ich spreche auch ein bisschen Englisch."
        ]
      },
      {
        step: "الخاتمة - الهدف",
        icon: "4️⃣",
        tip: "اختم بهدفك من تعلم الألمانية",
        examples: [
          "Mein Ziel ist, gut Deutsch zu sprechen.",
          "Ich möchte in Deutschland arbeiten.",
          "Deutsch ist schwer, aber ich lerne gern!"
        ]
      }
    ],
    exampleEssay: {
      text: "Hallo! Ich heiße Ahmad Al-Hassan. Ich komme aus Syrien. Jetzt wohne ich in Berlin, seit zwei Jahren. Ich bin 28 Jahre alt. Ich bin verheiratet und habe zwei Kinder. Meine Muttersprache ist Arabisch. Ich lerne seit drei Monaten Deutsch. Deutsch ist schwer, aber ich lerne gern. Ich spreche auch ein bisschen Englisch. Mein Ziel ist, gut Deutsch zu sprechen und in Deutschland zu arbeiten.",
      translation: "مرحباً! اسمي أحمد الحسن. أنا من سوريا. الآن أسكن في برلين منذ سنتين. عمري 28 سنة. أنا متزوج ولدي طفلان. لغتي الأم العربية. أتعلم الألمانية منذ ثلاثة أشهر. الألمانية صعبة لكنني أحب التعلم. أتحدث أيضاً بعض الإنجليزية. هدفي هو التحدث بالألمانية جيداً والعمل في ألمانيا.",
      wordCount: 68
    },
    writingTips: [
      "ابدأ دائماً بـ Hallo أو Guten Tag",
      "استخدم الفعل ich heiße (وليس mein Name ist Ahmad في البداية)",
      "اكتب جملاً قصيرة وواضحة",
      "تذكر النقطة في نهاية كل جملة",
      "الجملة الألمانية: الفعل دائماً في المكان الثاني"
    ],
    selfCheckList: [
      "هل كتبت اسمك؟ (Ich heiße...)",
      "هل ذكرت بلدك؟ (Ich komme aus...)",
      "هل ذكرت مدينتك في ألمانيا؟ (Ich wohne in...)",
      "هل ذكرت عمرك؟ (Ich bin ... Jahre alt.)",
      "هل ذكرت حالتك الاجتماعية؟",
      "هل ذكرت لغتك الأم؟",
      "هل كل جملة تبدأ بحرف كبير؟",
      "هل كل جملة تنتهي بنقطة؟"
    ]
  },

  {
    id: 2,
    title: "Meine Familie",
    titleAr: "عائلتي",
    emoji: "👨‍👩‍👧‍👦",
    type: "Beschreibung",
    typeAr: "وصف",
    relatedChapter: 6,
    targetLength: { min: 50, max: 90 },
    description: "تعلم كيف تكتب عن عائلتك - أفراد العائلة وأعمارهم ومهنهم.",
    keyVocabulary: [
      { de: "die Familie", ar: "العائلة" },
      { de: "der Vater / die Mutter", ar: "الأب / الأم" },
      { de: "der Bruder / die Schwester", ar: "الأخ / الأخت" },
      { de: "der Sohn / die Tochter", ar: "الابن / الابنة" },
      { de: "der Mann / die Frau", ar: "الزوج / الزوجة" },
      { de: "der Großvater / die Großmutter", ar: "الجد / الجدة" },
      { de: "groß / klein", ar: "كبيرة / صغيرة" },
      { de: "alt (Jahre alt)", ar: "من العمر" },
      { de: "arbeiten als", ar: "يعمل كـ" },
      { de: "wohnen", ar: "يسكن" },
      { de: "mögen / lieben", ar: "يحب" },
      { de: "zusammen", ar: "معاً" },
    ],
    usefulPhrases: [
      { de: "Meine Familie ist groß / klein.", ar: "عائلتي كبيرة / صغيرة." },
      { de: "Wir sind ... Personen.", ar: "نحن ... أشخاص." },
      { de: "Mein Vater heißt ... Er ist ... Jahre alt.", ar: "اسم أبي ... عمره ... سنة." },
      { de: "Meine Mutter ist ... von Beruf.", ar: "مهنة أمي ..." },
      { de: "Ich habe ... Brüder und ... Schwestern.", ar: "لدي ... إخوة و... أخوات." },
      { de: "Mein Bruder ist jünger / älter als ich.", ar: "أخي أصغر / أكبر مني." },
      { de: "Wir wohnen zusammen in ...", ar: "نسكن معاً في ..." },
      { de: "Meine Familie ist sehr wichtig für mich.", ar: "عائلتي مهمة جداً بالنسبة لي." },
    ],
    grammarFocus: [
      "أدوات الملكية: mein (مذكر/محايد) - meine (مؤنث)",
      "Mein Vater / Meine Mutter / Mein Kind",
      "الفعل sein للوصف: Er ist Arzt. Sie ist Lehrerin.",
      "الجنس والعدد في الجمل الوصفية",
    ],
    structure: [
      {
        step: "المقدمة - وصف العائلة بشكل عام",
        icon: "1️⃣",
        tip: "ابدأ بوصف حجم عائلتك وعدد أفرادها",
        examples: [
          "Meine Familie ist groß.",
          "Wir sind sechs Personen.",
          "Ich lebe mit meiner Familie in Berlin."
        ]
      },
      {
        step: "الوصف التفصيلي - كل فرد",
        icon: "2️⃣",
        tip: "صف كل فرد: الاسم والعمر والمهنة",
        examples: [
          "Mein Vater heißt Khalid. Er ist 55 Jahre alt und Ingenieur.",
          "Meine Mutter heißt Fatima. Sie ist Hausfrau.",
          "Ich habe zwei Brüder: Ali (22) und Omar (18)."
        ]
      },
      {
        step: "العلاقات داخل العائلة",
        icon: "3️⃣",
        tip: "اذكر ما تحب في عائلتك",
        examples: [
          "Wir machen gern zusammen Ausflüge.",
          "Am Wochenende kochen wir zusammen.",
          "Meine Familie ist sehr harmonisch."
        ]
      },
      {
        step: "الخاتمة",
        icon: "4️⃣",
        tip: "اختم بجملة تعبر عن مشاعرك تجاه عائلتك",
        examples: [
          "Meine Familie ist sehr wichtig für mich.",
          "Ich liebe meine Familie sehr.",
          "Ohne meine Familie bin ich nicht glücklich."
        ]
      }
    ],
    exampleEssay: {
      text: "Meine Familie ist nicht sehr groß. Wir sind vier Personen. Mein Vater heißt Hassan. Er ist 55 Jahre alt und arbeitet als Ingenieur. Meine Mutter heißt Nour. Sie ist 50 Jahre alt und Lehrerin. Ich habe eine Schwester. Sie heißt Sara und ist 20 Jahre alt. Sie studiert Medizin. Wir wohnen alle zusammen in einer großen Wohnung in Hamburg. Am Wochenende essen wir zusammen und sprechen viel. Meine Familie ist sehr wichtig für mich.",
      translation: "عائلتي ليست كبيرة جداً. نحن أربعة أشخاص. اسم أبي حسن. عمره 55 سنة ويعمل مهندساً. اسم أمي نور. عمرها 50 سنة وهي معلمة. لدي أخت. اسمها سارة وعمرها 20 سنة. تدرس الطب. نسكن جميعاً معاً في شقة كبيرة في هامبورغ. في عطلة الأسبوع نأكل معاً ونتحدث كثيراً. عائلتي مهمة جداً بالنسبة لي.",
      wordCount: 74
    },
    writingTips: [
      "استخدم mein للمذكر والمحايد و meine للمؤنث",
      "اذكر الاسم أولاً ثم العمر ثم المهنة لكل فرد",
      "استخدم und لربط الجمل القصيرة",
      "لا تنسَ الفواصل بين الأرقام والتفاصيل"
    ],
    selfCheckList: [
      "هل وصفت كم عدد أفراد عائلتك؟",
      "هل ذكرت اسم وعمر ومهنة كل فرد؟",
      "هل استخدمت mein/meine بشكل صحيح؟",
      "هل ذكرت أين تسكن عائلتك؟",
      "هل أضفت جملة عاطفية في النهاية؟",
      "هل جميع أسماء الأشخاص بأحرف كبيرة؟"
    ]
  },

  {
    id: 3,
    title: "Meine Wohnung",
    titleAr: "شقتي / منزلي",
    emoji: "🏠",
    type: "Beschreibung",
    typeAr: "وصف",
    relatedChapter: 7,
    targetLength: { min: 50, max: 90 },
    description: "تعلم كيف تصف شقتك أو منزلك - الغرف والأثاث والإيجار والموقع.",
    keyVocabulary: [
      { de: "die Wohnung / das Haus", ar: "الشقة / البيت" },
      { de: "das Zimmer", ar: "الغرفة" },
      { de: "das Wohnzimmer", ar: "غرفة المعيشة" },
      { de: "das Schlafzimmer", ar: "غرفة النوم" },
      { de: "die Küche", ar: "المطبخ" },
      { de: "das Bad / Badezimmer", ar: "الحمام" },
      { de: "der Balkon", ar: "الشرفة" },
      { de: "die Miete", ar: "الإيجار" },
      { de: "der Stock / Erdgeschoss", ar: "الطابق / الطابق الأرضي" },
      { de: "groß / klein / hell / dunkel", ar: "كبير / صغير / مضيء / مظلم" },
      { de: "das Sofa / das Bett / der Tisch", ar: "الأريكة / السرير / الطاولة" },
      { de: "der Garten", ar: "الحديقة" },
    ],
    usefulPhrases: [
      { de: "Ich wohne in einer Wohnung / einem Haus.", ar: "أسكن في شقة / بيت." },
      { de: "Die Wohnung hat ... Zimmer.", ar: "الشقة بها ... غرف." },
      { de: "Die Wohnung ist ... Quadratmeter groß.", ar: "مساحة الشقة ... متر مربع." },
      { de: "Sie liegt im ... Stock.", ar: "تقع في الطابق ..." },
      { de: "Die Miete beträgt / kostet ... Euro.", ar: "الإيجار ... يورو." },
      { de: "Im Wohnzimmer gibt es ...", ar: "في غرفة المعيشة يوجد ..." },
      { de: "Ich mag meine Wohnung, weil ...", ar: "أحب شقتي لأن ..." },
      { de: "Die Wohnung liegt in der Nähe von ...", ar: "الشقة قريبة من ..." },
    ],
    grammarFocus: [
      "es gibt = يوجد (للوصف)",
      "in + Dativ: im Wohnzimmer, in der Küche",
      "Adjektive: Die Wohnung ist groß/hell/schön",
      "حروف الجر: auf dem Tisch, neben dem Sofa, vor dem Fenster",
    ],
    structure: [
      {
        step: "المقدمة - نوع السكن وموقعه",
        icon: "1️⃣",
        tip: "ابدأ بنوع السكن (شقة/بيت) وعنوانه في المدينة",
        examples: [
          "Ich wohne in einer 3-Zimmer-Wohnung in München.",
          "Meine Wohnung liegt im 2. Stock.",
          "Die Wohnung ist in der Nähe vom Bahnhof."
        ]
      },
      {
        step: "وصف الشقة - المساحة والغرف",
        icon: "2️⃣",
        tip: "صف عدد الغرف والمساحة والإيجار",
        examples: [
          "Die Wohnung hat 3 Zimmer: ein Wohnzimmer, ein Schlafzimmer und ein Kinderzimmer.",
          "Sie ist 75 Quadratmeter groß.",
          "Die Miete beträgt 900 Euro pro Monat."
        ]
      },
      {
        step: "وصف الغرف والأثاث",
        icon: "3️⃣",
        tip: "صف ما في كل غرفة",
        examples: [
          "Im Wohnzimmer gibt es ein Sofa, einen Fernseher und einen großen Tisch.",
          "Das Schlafzimmer ist klein, aber gemütlich.",
          "Die Küche ist modern und hell."
        ]
      },
      {
        step: "رأيك في الشقة",
        icon: "4️⃣",
        tip: "اذكر ما تحب وما لا تحب في شقتك",
        examples: [
          "Ich mag meine Wohnung sehr.",
          "Sie ist hell und ruhig.",
          "Der Balkon ist mein Lieblingsplatz."
        ]
      }
    ],
    exampleEssay: {
      text: "Ich wohne in einer 3-Zimmer-Wohnung in Köln. Die Wohnung liegt im 4. Stock und hat einen Balkon. Sie ist 80 Quadratmeter groß. Die Miete beträgt 950 Euro pro Monat. Die Wohnung hat ein Wohnzimmer, ein Schlafzimmer, eine Küche und ein Bad. Im Wohnzimmer gibt es ein großes Sofa und einen Fernseher. Das Schlafzimmer ist klein, aber gemütlich. Die Küche ist neu und modern. Ich mag meine Wohnung sehr. Sie ist hell und ruhig. Vom Balkon sehe ich den Park.",
      translation: "أسكن في شقة بثلاث غرف في كولونيا. الشقة في الطابق الرابع ولديها شرفة. مساحتها 80 متراً مربعاً. الإيجار 950 يورو في الشهر. الشقة بها غرفة معيشة وغرفة نوم ومطبخ وحمام. في غرفة المعيشة يوجد أريكة كبيرة وتلفاز. غرفة النوم صغيرة لكنها مريحة. المطبخ جديد وحديث. أحب شقتي كثيراً. إنها مضيئة وهادئة. من الشرفة أرى الحديقة.",
      wordCount: 82
    },
    writingTips: [
      "استخدم es gibt (يوجد) لوصف محتويات الغرف",
      "وصف الغرف بالترتيب: غرفة المعيشة → غرفة النوم → المطبخ → الحمام",
      "أضف صفات وصفية: groß, klein, hell, modern, gemütlich",
      "اختم بجملة تعبر عن إعجابك بالشقة"
    ],
    selfCheckList: [
      "هل ذكرت نوع السكن (شقة/بيت)؟",
      "هل ذكرت في أي مدينة تسكن؟",
      "هل ذكرت عدد الغرف؟",
      "هل ذكرت المساحة أو الإيجار؟",
      "هل استخدمت es gibt لوصف الأثاث؟",
      "هل أضفت رأيك في الشقة في النهاية؟"
    ]
  },

  {
    id: 4,
    title: "Mein Tagesablauf",
    titleAr: "يومي المعتاد",
    emoji: "⏰",
    type: "Beschreibung",
    typeAr: "وصف الروتين اليومي",
    relatedChapter: 4,
    targetLength: { min: 60, max: 100 },
    description: "تعلم كيف تكتب عن يومك المعتاد - من الاستيقاظ حتى النوم.",
    keyVocabulary: [
      { de: "aufstehen", ar: "يستيقظ" },
      { de: "frühstücken", ar: "يتناول الفطور" },
      { de: "zur Arbeit / zum Kurs gehen", ar: "يذهب للعمل / للدورة" },
      { de: "zu Mittag essen", ar: "يتناول الغداء" },
      { de: "Hausaufgaben machen", ar: "يعمل الواجبات" },
      { de: "einkaufen gehen", ar: "يذهب للتسوق" },
      { de: "kochen", ar: "يطبخ" },
      { de: "zu Abend essen", ar: "يتناول العشاء" },
      { de: "fernsehen", ar: "يشاهد التلفاز" },
      { de: "schlafen gehen", ar: "يذهب للنوم" },
      { de: "um ... Uhr", ar: "في الساعة ..." },
      { de: "morgens / mittags / abends", ar: "صباحاً / ظهراً / مساءً" },
    ],
    usefulPhrases: [
      { de: "Ich stehe um ... Uhr auf.", ar: "أستيقظ في الساعة ..." },
      { de: "Dann frühstücke ich.", ar: "ثم أتناول الفطور." },
      { de: "Um ... Uhr gehe ich zum Kurs.", ar: "في الساعة ... أذهب للدورة." },
      { de: "Mittags esse ich ...", ar: "ظهراً أتناول ..." },
      { de: "Nachmittags lerne ich Deutsch.", ar: "بعد الظهر أدرس الألمانية." },
      { de: "Abends koche ich für meine Familie.", ar: "مساءً أطبخ لعائلتي." },
      { de: "Gegen ... Uhr gehe ich schlafen.", ar: "نحو الساعة ... أذهب للنوم." },
    ],
    grammarFocus: [
      "الأفعال المنفصلة: auf|stehen → Ich stehe auf",
      "الأفعال المنفصلة الأخرى: ein|kaufen, fern|sehen, an|fangen",
      "ترتيب الجملة مع الوقت: Um 7 Uhr stehe ich auf.",
      "الظروف الزمنية: zuerst, dann, danach, am Ende",
    ],
    structure: [
      {
        step: "الصباح (Morgen)",
        icon: "🌅",
        tip: "ابدأ بوقت الاستيقاظ والروتين الصباحي",
        examples: [
          "Ich stehe um 6:30 Uhr auf.",
          "Dann gehe ich ins Bad und dusche.",
          "Um 7 Uhr frühstücke ich. Ich esse Brot mit Käse und trinke Kaffee."
        ]
      },
      {
        step: "قبل الظهر (Vormittag)",
        icon: "☀️",
        tip: "اذكر ذهابك للعمل أو الدورة",
        examples: [
          "Um 8:30 Uhr fahre ich mit der U-Bahn zum Kurs.",
          "Der Kurs beginnt um 9 Uhr und endet um 13 Uhr.",
          "Im Kurs lerne ich Deutsch."
        ]
      },
      {
        step: "بعد الظهر (Nachmittag)",
        icon: "🌤️",
        tip: "صف ما تفعله بعد الظهر",
        examples: [
          "Um 13 Uhr esse ich zu Mittag.",
          "Nachmittags mache ich Hausaufgaben.",
          "Manchmal gehe ich einkaufen."
        ]
      },
      {
        step: "المساء (Abend)",
        icon: "🌙",
        tip: "صف مساءك وانتهِ بموعد النوم",
        examples: [
          "Abends koche ich für meine Familie.",
          "Wir essen zusammen um 19 Uhr.",
          "Dann sehe ich ein bisschen fern.",
          "Um 23 Uhr gehe ich schlafen."
        ]
      }
    ],
    exampleEssay: {
      text: "Mein Tag beginnt um 6:30 Uhr. Ich stehe auf und gehe ins Bad. Um 7 Uhr frühstücke ich. Ich esse Brot mit Käse und trinke Kaffee. Um 8:30 Uhr fahre ich mit der U-Bahn zum Deutschkurs. Der Kurs beginnt um 9 Uhr und endet um 13 Uhr. Mittags esse ich in der Cafeteria. Nachmittags lerne ich zu Hause und mache Hausaufgaben. Manchmal gehe ich auch einkaufen. Abends koche ich für meine Familie. Wir essen zusammen um 19:30 Uhr. Danach sehe ich ein bisschen fern oder lese. Um 23 Uhr gehe ich schlafen. Das ist mein normaler Tag.",
      translation: "يبدأ يومي في الساعة 6:30. أستيقظ وأذهب إلى الحمام. في الساعة 7 أتناول الفطور. آكل خبزاً بالجبن وأشرب قهوة. في الساعة 8:30 أركب المترو وأذهب لدورة الألمانية. تبدأ الدورة في الساعة 9 وتنتهي في الساعة 1 ظهراً. ظهراً آكل في الكافيتيريا. بعد الظهر أدرس في البيت وأعمل الواجبات. أحياناً أذهب للتسوق. مساءً أطبخ لعائلتي. نأكل معاً في الساعة 7:30 مساءً. بعدها أشاهد التلفاز قليلاً أو أقرأ. في الساعة 11 أذهب للنوم. هذا هو يومي المعتاد.",
      wordCount: 95
    },
    writingTips: [
      "استخدم الأفعال المنفصلة: auf|stehen, ein|kaufen, fern|sehen",
      "أضف كلمات الربط الزمني: zuerst, dann, danach, am Ende",
      "اذكر الأوقات بشكل محدد: um 7 Uhr, um 13:30 Uhr",
      "استخدم manchmal (أحياناً) لتنويع النص",
      "تذكر: الفعل دائماً في المكان الثاني"
    ],
    selfCheckList: [
      "هل ذكرت وقت الاستيقاظ؟",
      "هل وصفت روتين الصباح كاملاً؟",
      "هل ذكرت أنشطة قبل الظهر؟",
      "هل ذكرت ما تفعله بعد الظهر؟",
      "هل وصفت مساءك؟",
      "هل ذكرت وقت النوم؟",
      "هل استخدمت الأفعال المنفصلة بشكل صحيح؟",
      "هل استخدمت كلمات ربط مثل dann, danach, zuerst؟"
    ]
  },

  {
    id: 5,
    title: "Mein Hobby",
    titleAr: "هوايتي / وقت فراغي",
    emoji: "⚽",
    type: "Beschreibung",
    typeAr: "وصف",
    relatedChapter: 10,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تكتب عن هواياتك وما تحب أن تفعله في وقت الفراغ.",
    keyVocabulary: [
      { de: "das Hobby", ar: "الهواية" },
      { de: "die Freizeit", ar: "وقت الفراغ" },
      { de: "gern / sehr gern / nicht gern", ar: "يحب / يحب جداً / لا يحب" },
      { de: "spielen (Fußball, Tennis...)", ar: "يلعب" },
      { de: "lesen", ar: "يقرأ" },
      { de: "Musik hören", ar: "يستمع للموسيقى" },
      { de: "kochen", ar: "يطبخ" },
      { de: "reisen", ar: "يسافر" },
      { de: "fotografieren", ar: "يصوّر" },
      { de: "schwimmen", ar: "يسبح" },
      { de: "das Kino / Theater", ar: "السينما / المسرح" },
      { de: "am Wochenende", ar: "في عطلة الأسبوع" },
    ],
    usefulPhrases: [
      { de: "Mein Hobby ist ...", ar: "هوايتي هي ..." },
      { de: "In meiner Freizeit ... ich gern.", ar: "في وقت فراغي أحب أن ..." },
      { de: "Am Wochenende ...", ar: "في عطلة الأسبوع ..." },
      { de: "Das macht mir viel Spaß!", ar: "هذا يسعدني كثيراً!" },
      { de: "Ich interessiere mich für ...", ar: "أنا مهتم بـ ..." },
      { de: "Ich spiele ... mit meinen Freunden.", ar: "ألعب ... مع أصدقائي." },
      { de: "Ich lese gern Bücher über ...", ar: "أحب قراءة كتب عن ..." },
    ],
    grammarFocus: [
      "gern nach dem Verb: Ich spiele gern Fußball.",
      "nicht gern: Ich schwimme nicht gern.",
      "sehr gern: Ich reise sehr gern.",
      "am Wochenende + Verb: Am Wochenende spiele ich..."
    ],
    structure: [
      {
        step: "ذكر هوايتك الرئيسية",
        icon: "1️⃣",
        tip: "ابدأ بذكر هوايتك المفضلة",
        examples: [
          "Mein Hobby ist Fußball.",
          "In meiner Freizeit lese ich gern Bücher.",
          "Ich interessiere mich sehr für Musik."
        ]
      },
      {
        step: "التفاصيل - كيف ومتى وأين",
        icon: "2️⃣",
        tip: "اذكر تفاصيل هوايتك",
        examples: [
          "Ich spiele jeden Samstag Fußball mit meinen Freunden.",
          "Am Wochenende gehe ich ins Kino.",
          "Ich lese jeden Abend vor dem Schlafen."
        ]
      },
      {
        step: "هوايات أخرى",
        icon: "3️⃣",
        tip: "اذكر هوايات أخرى بجانب هوايتك الرئيسية",
        examples: [
          "Außerdem koche ich gern arabisches Essen.",
          "Ich höre auch gern Musik.",
          "Manchmal mache ich Fotos."
        ]
      },
      {
        step: "لماذا تحب هذه الهواية",
        icon: "4️⃣",
        tip: "اذكر سبب حبك لهذه الهواية",
        examples: [
          "Das macht mir viel Spaß!",
          "Ich finde das sehr entspannend.",
          "Mit dem Hobby vergesse ich den Stress."
        ]
      }
    ],
    exampleEssay: {
      text: "Mein Lieblingshobbys sind Lesen und Kochen. In meiner Freizeit lese ich sehr gern Bücher. Ich lese jeden Abend vor dem Schlafen. Ich lese gern Romane und Bücher über Geschichte. Außerdem koche ich gern. Am Wochenende koche ich arabisches Essen für meine Familie. Das macht mir viel Spaß! Ich höre auch gern Musik, besonders arabische Musik. Manchmal gehe ich mit meiner Frau ins Kino. Ich finde Kino sehr schön. Sport mache ich nicht so gern, aber ich gehe manchmal spazieren. Freizeit ist sehr wichtig für mich.",
      translation: "هواياتي المفضلة هي القراءة والطبخ. في وقت فراغي أحب القراءة كثيراً. أقرأ كل مساء قبل النوم. أحب قراءة الروايات والكتب التاريخية. كذلك أحب الطبخ. في عطلة الأسبوع أطبخ طعاماً عربياً لعائلتي. هذا يسعدني جداً! أحب أيضاً الاستماع للموسيقى خاصة العربية. أحياناً أذهب مع زوجتي للسينما. أجد السينما جميلة جداً. لا أحب الرياضة كثيراً لكنني أتمشى أحياناً. وقت الفراغ مهم جداً بالنسبة لي.",
      wordCount: 80
    },
    writingTips: [
      "استخدم gern بعد الفعل مباشرة: Ich spiele gern",
      "استخدم außerdem (بالإضافة إلى ذلك) للتنويع",
      "استخدم auch (أيضاً) لإضافة هوايات أخرى",
      "اختم بجملة عن أهمية وقت الفراغ"
    ],
    selfCheckList: [
      "هل ذكرت هوايتك الرئيسية؟",
      "هل ذكرت متى وأين تمارس هوايتك؟",
      "هل ذكرت هوايات أخرى؟",
      "هل استخدمت gern/sehr gern بشكل صحيح؟",
      "هل ذكرت سبب حبك لهذه الهوايات؟"
    ]
  },

  {
    id: 6,
    title: "Eine E-Mail schreiben",
    titleAr: "كتابة بريد إلكتروني",
    emoji: "📧",
    type: "Brief / E-Mail",
    typeAr: "رسالة / بريد إلكتروني",
    relatedChapter: 1,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تكتب بريداً إلكترونياً رسمياً أو غير رسمي بالألمانية.",
    keyVocabulary: [
      { de: "Sehr geehrte/r Herr/Frau ...", ar: "حضرة السيد/السيدة ... (رسمي)" },
      { de: "Liebe/r ... (غير رسمي)", ar: "عزيزي/عزيزتي ..." },
      { de: "Ich schreibe Ihnen / dir, weil ...", ar: "أكتب إليك لأن ..." },
      { de: "Ich habe eine Frage.", ar: "لدي سؤال." },
      { de: "Könnten Sie mir bitte ... ?", ar: "هل يمكنك من فضلك ...؟" },
      { de: "Ich freue mich auf Ihre Antwort.", ar: "أتطلع إلى ردّك." },
      { de: "Mit freundlichen Grüßen", ar: "مع أطيب التحيات (رسمي)" },
      { de: "Viele Grüße / Liebe Grüße", ar: "مع التحيات / تحياتي (غير رسمي)" },
      { de: "Betreff:", ar: "الموضوع:" },
      { de: "der Anhang / im Anhang", ar: "المرفق / في المرفق" },
    ],
    usefulPhrases: [
      { de: "Sehr geehrte Frau Müller,", ar: "حضرة السيدة مولر," },
      { de: "Ich schreibe Ihnen wegen ...", ar: "أكتب إليك بخصوص ..." },
      { de: "Ich möchte gerne wissen, ob ...", ar: "أودّ معرفة ما إذا كان ..." },
      { de: "Bitte schicken Sie mir ...", ar: "أرجو أن ترسل لي ..." },
      { de: "Vielen Dank im Voraus.", ar: "شكراً جزيلاً مسبقاً." },
      { de: "Ich freue mich auf Ihre Antwort.", ar: "أتطلع إلى ردّك." },
      { de: "Mit freundlichen Grüßen", ar: "مع أطيب التحيات" },
    ],
    grammarFocus: [
      "رسمي (Sie/Ihnen) مع Sehr geehrte/r",
      "غير رسمي (du/dir) مع Liebe/r",
      "الأفعال في حالة الطلب المهذّب: Könnten Sie bitte...?",
      "لا تنسَ الفاصلة بعد التحية الأولى!"
    ],
    structure: [
      {
        step: "التحية الافتتاحية",
        icon: "📨",
        tip: "اختر التحية المناسبة - رسمي أم غير رسمي",
        examples: [
          "Sehr geehrte Frau Müller, (رسمي)",
          "Sehr geehrter Herr Schmidt, (رسمي)",
          "Liebe Anna, (غير رسمي - لصديق)"
        ]
      },
      {
        step: "المقدمة - سبب الكتابة",
        icon: "📝",
        tip: "اذكر سبب كتابة الرسالة في الجملة الأولى",
        examples: [
          "Ich schreibe Ihnen wegen des Deutschkurses.",
          "Ich habe eine Frage zu meinem Termin.",
          "Ich möchte Ihnen mitteilen, dass..."
        ]
      },
      {
        step: "الجسم - التفاصيل",
        icon: "📋",
        tip: "اشرح ما تريد بشكل واضح",
        examples: [
          "Ich möchte wissen, wann der Kurs beginnt.",
          "Könnten Sie mir bitte die Adresse schicken?",
          "Am Montag kann ich leider nicht kommen."
        ]
      },
      {
        step: "الخاتمة والتوقيع",
        icon: "✍️",
        tip: "اختم بجملة مهذبة وتوقيعك",
        examples: [
          "Vielen Dank im Voraus.",
          "Ich freue mich auf Ihre Antwort.",
          "Mit freundlichen Grüßen, Ahmad Al-Hassan"
        ]
      }
    ],
    exampleEssay: {
      text: "Sehr geehrte Frau Müller,\n\nmein Name ist Ahmad Al-Hassan. Ich besuche Ihren Deutschkurs A1 seit drei Wochen. Ich schreibe Ihnen, weil ich am nächsten Montag leider nicht zum Kurs kommen kann. Ich habe einen Arzttermin. Könnten Sie mir bitte sagen, was wir am Montag lernen? Ich möchte die Hausaufgaben trotzdem machen.\n\nVielen Dank im Voraus. Ich freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen\nAhmad Al-Hassan",
      translation: "حضرة السيدة مولر،\n\naسمي أحمد الحسن. أحضر دورة الألمانية A1 منذ ثلاثة أسابيع. أكتب إليك لأنني لن أتمكن من الحضور إلى الدورة يوم الاثنين القادم. لدي موعد عند الطبيب. هل يمكنك إخباري بما ستدرسون يوم الاثنين؟ أريد عمل الواجبات رغم ذلك.\n\nشكراً جزيلاً مسبقاً. أتطلع إلى ردّك.\n\nمع أطيب التحيات\nأحمد الحسن",
      wordCount: 72
    },
    writingTips: [
      "بعد التحية الأولى: فاصلة ثم سطر فارغ ثم ابدأ بحرف صغير",
      "في الألمانية Sehr geehrte + Frau (مؤنث) / Sehr geehrter + Herr (مذكر)",
      "اجعل الرسالة مختصرة وواضحة",
      "أضف اسمك كاملاً في التوقيع"
    ],
    selfCheckList: [
      "هل اخترت التحية المناسبة (رسمي / غير رسمي)؟",
      "هل ذكرت سبب كتابة الرسالة؟",
      "هل شرحت ما تريد بوضوح؟",
      "هل أضفت جملة شكر في النهاية؟",
      "هل وقّعت باسمك الكامل؟",
      "هل أضفت فاصلة بعد التحية الأولى؟"
    ]
  },

  {
    id: 7,
    title: "Beim Arzt",
    titleAr: "عند الطبيب - شرح الأعراض",
    emoji: "🏥",
    type: "Situationsbeschreibung",
    typeAr: "وصف موقف",
    relatedChapter: 8,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تصف حالتك الصحية وأعراضك عند الطبيب.",
    keyVocabulary: [
      { de: "Ich habe Schmerzen.", ar: "عندي ألم." },
      { de: "Kopfschmerzen / Bauchschmerzen", ar: "صداع / ألم بطن" },
      { de: "das Fieber", ar: "الحمى" },
      { de: "die Erkältung", ar: "البرد / الرشح" },
      { de: "der Husten", ar: "السعال" },
      { de: "der Schnupfen", ar: "الزكام" },
      { de: "müde / schwach", ar: "متعب / ضعيف" },
      { de: "seit gestern / seit ... Tagen", ar: "منذ أمس / منذ ... أيام" },
      { de: "schlimm / stark", ar: "شديد / قوي" },
      { de: "das Medikament", ar: "الدواء" },
      { de: "der Termin", ar: "الموعد" },
      { de: "die Krankenversicherung", ar: "التأمين الصحي" },
    ],
    usefulPhrases: [
      { de: "Ich fühle mich nicht gut.", ar: "لا أشعر بخير." },
      { de: "Mir ist schlecht.", ar: "أشعر بالغثيان." },
      { de: "Ich habe seit ... Schmerzen.", ar: "عندي ألم منذ ..." },
      { de: "Die Schmerzen sind stark / nicht so schlimm.", ar: "الألم شديد / ليس شديداً جداً." },
      { de: "Ich habe Fieber. 38,5 Grad.", ar: "عندي حمى. 38.5 درجة." },
      { de: "Ich nehme keine Medikamente.", ar: "لا أتناول أي أدوية." },
      { de: "Ich bin allergisch gegen ...", ar: "أنا حساس ضد ..." },
    ],
    grammarFocus: [
      "Ich habe + [Körperteil]-schmerzen",
      "seit + Dativ: seit drei Tagen, seit gestern",
      "Modalverb müssen: Ich muss zum Arzt gehen.",
      "Negation: Ich nehme keine Medikamente."
    ],
    structure: [
      {
        step: "الشكوى الرئيسية",
        icon: "😷",
        tip: "ابدأ بذكر المشكلة الرئيسية",
        examples: [
          "Ich fühle mich seit gestern nicht gut.",
          "Ich habe starke Kopfschmerzen.",
          "Mir ist schlecht und ich habe Fieber."
        ]
      },
      {
        step: "تفاصيل الأعراض",
        icon: "🌡️",
        tip: "صف الأعراض بالتفصيل",
        examples: [
          "Die Kopfschmerzen sind seit zwei Tagen sehr stark.",
          "Ich habe auch Husten und Schnupfen.",
          "Mein Hals tut sehr weh."
        ]
      },
      {
        step: "معلومات إضافية",
        icon: "💊",
        tip: "اذكر ما أخذته من أدوية وأي حساسية",
        examples: [
          "Ich habe Aspirin genommen, aber es hilft nicht.",
          "Ich nehme keine Medikamente.",
          "Ich bin nicht allergisch."
        ]
      },
      {
        step: "طلب المساعدة",
        icon: "🙏",
        tip: "اطلب المساعدة من الطبيب",
        examples: [
          "Was soll ich tun?",
          "Können Sie mir etwas verschreiben?",
          "Brauche ich Medikamente?"
        ]
      }
    ],
    exampleEssay: {
      text: "Guten Tag, Herr Doktor. Ich fühle mich seit drei Tagen nicht gut. Ich habe starke Kopfschmerzen und Halsschmerzen. Außerdem habe ich Husten und Schnupfen. Gestern hatte ich auch Fieber, 38,5 Grad. Ich bin sehr müde und kann nicht gut schlafen. Ich habe Aspirin genommen, aber die Schmerzen sind immer noch da. Ich nehme keine anderen Medikamente. Ich bin nicht allergisch. Können Sie mir bitte etwas verschreiben? Ich muss nächste Woche arbeiten und möchte schnell gesund werden.",
      translation: "مرحباً يا دكتور. لا أشعر بخير منذ ثلاثة أيام. عندي صداع شديد وألم في الحلق. كذلك عندي سعال وزكام. أمس كان عندي حمى أيضاً 38.5 درجة. أنا متعب جداً ولا أستطيع النوم جيداً. تناولت أسبرين لكن الألم لا يزال موجوداً. لا أتناول أي أدوية أخرى. لا أعاني من أي حساسية. هل يمكنك كتابة وصفة لي من فضلك؟ يجب أن أعمل الأسبوع القادم وأريد أن أتعافى سريعاً.",
      wordCount: 80
    },
    writingTips: [
      "ابدأ دائماً بـ Guten Tag عند زيارة الطبيب",
      "استخدم seit لذكر مدة المرض: seit drei Tagen",
      "صف شدة الألم: stark (شديد), leicht (خفيف)",
      "اذكر ما أخذته من أدوية"
    ],
    selfCheckList: [
      "هل ذكرت الشكوى الرئيسية؟",
      "هل ذكرت منذ متى وأنت مريض؟",
      "هل وصفت جميع الأعراض؟",
      "هل ذكرت درجة الحرارة إن كانت موجودة؟",
      "هل ذكرت الأدوية التي تناولتها؟",
      "هل طلبت المساعدة في النهاية؟"
    ]
  },

  {
    id: 8,
    title: "Im Restaurant bestellen",
    titleAr: "في المطعم - الطلب والدفع",
    emoji: "🍽️",
    type: "Situationsbeschreibung",
    typeAr: "وصف موقف",
    relatedChapter: 12,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تكتب حواراً أو وصفاً لتجربتك في المطعم.",
    keyVocabulary: [
      { de: "die Speisekarte", ar: "قائمة الطعام" },
      { de: "die Vorspeise / Hauptspeise / das Dessert", ar: "المقبلات / الطبق الرئيسي / الحلوى" },
      { de: "bestellen", ar: "يطلب" },
      { de: "empfehlen", ar: "يوصي / يقترح" },
      { de: "schmecken", ar: "يُطعم / له طعم" },
      { de: "lecker / gut / ausgezeichnet", ar: "لذيذ / جيد / رائع" },
      { de: "die Rechnung / zahlen", ar: "الفاتورة / يدفع" },
      { de: "das Trinkgeld", ar: "الإكرامية / البقشيش" },
      { de: "reservieren", ar: "يحجز" },
      { de: "der Tisch für ... Personen", ar: "طاولة لـ ... أشخاص" },
    ],
    usefulPhrases: [
      { de: "Ich möchte einen Tisch für ... Personen reservieren.", ar: "أريد حجز طاولة لـ ... أشخاص." },
      { de: "Was empfehlen Sie?", ar: "ماذا توصي؟" },
      { de: "Ich nehme / Ich möchte ..., bitte.", ar: "سآخذ / أريد ... من فضلك." },
      { de: "Das Essen war sehr lecker!", ar: "الطعام كان لذيذاً جداً!" },
      { de: "Zahlen, bitte! / Die Rechnung, bitte!", ar: "الحساب من فضلك!" },
      { de: "Stimmt so. / Behalten Sie den Rest.", ar: "احتفظ بالباقي." },
    ],
    grammarFocus: [
      "Akkusativ bei bestellen: Ich nehme den/die/das...",
      "Modalverb möchten: Ich möchte einen Kaffee.",
      "Perfekt für Erzählung: Das Essen hat gut geschmeckt.",
      "Superlativ: Das beste Restaurant in der Stadt!"
    ],
    structure: [
      {
        step: "الوصول للمطعم والجلوس",
        icon: "🪑",
        tip: "ابدأ بوصف وصولك للمطعم",
        examples: [
          "Gestern war ich mit meiner Familie im Restaurant.",
          "Wir haben einen Tisch für vier Personen reserviert.",
          "Das Restaurant war schön und gemütlich."
        ]
      },
      {
        step: "قراءة القائمة والطلب",
        icon: "📜",
        tip: "صف ما طلبته من الطعام والشراب",
        examples: [
          "Der Kellner hat uns die Speisekarte gebracht.",
          "Als Vorspeise habe ich die Suppe genommen.",
          "Als Hauptspeise hatte ich Schnitzel mit Kartoffeln."
        ]
      },
      {
        step: "وصف الطعام",
        icon: "😋",
        tip: "صف طعم الطعام وجودته",
        examples: [
          "Das Essen war sehr lecker!",
          "Die Suppe war heiß und würzig.",
          "Das Schnitzel war zart und gut gewürzt."
        ]
      },
      {
        step: "الدفع والمغادرة",
        icon: "💰",
        tip: "صف كيف دفعت وخرجت",
        examples: [
          "Am Ende haben wir die Rechnung bezahlt.",
          "Es hat 45 Euro gekostet.",
          "Wir haben Trinkgeld gegeben.",
          "Ich komme gerne wieder!"
        ]
      }
    ],
    exampleEssay: {
      text: "Gestern war ich mit meiner Frau im Restaurant 'Zum Goldenen Stern'. Das Restaurant war sehr schön und gemütlich. Der Kellner war freundlich und hat uns schnell bedient. Als Vorspeise haben wir Tomatensuppe genommen. Als Hauptspeise hatte ich Schnitzel mit Kartoffeln und meine Frau hatte Pizza. Das Essen war ausgezeichnet! Die Pizza war besonders lecker. Als Dessert haben wir Eis gegessen. Zum Trinken haben wir Wasser und Orangensaft bestellt. Am Ende haben wir die Rechnung bezahlt. Es hat 38 Euro gekostet. Wir haben auch Trinkgeld gegeben. Ich komme gerne wieder in dieses Restaurant!",
      translation: "أمس كنت مع زوجتي في مطعم 'النجمة الذهبية'. كان المطعم جميلاً ومريحاً. كان النادل لطيفاً وخدمنا بسرعة. كمقبلات أخذنا شوربة الطماطم. كطبق رئيسي أخذت شنيتزل مع البطاطا وأخذت زوجتي بيتزا. كان الطعام رائعاً! البيتزا كانت لذيذة بشكل خاص. كحلوى أكلنا آيس كريم. للشرب طلبنا ماء وعصير برتقال. في النهاية دفعنا الفاتورة. كلّف 38 يورو. أعطينا أيضاً إكرامية. سأعود بكل سرور لهذا المطعم!",
      wordCount: 92
    },
    writingTips: [
      "استخدم Perfekt (الماضي) لوصف ما حدث: Ich habe gegessen",
      "وصف الطعام بكلمات محددة: lecker, würzig, zart, heiß",
      "اذكر الأسعار لجعل الوصف أكثر واقعية",
      "اختم برأيك: هل ستعود لهذا المطعم؟"
    ],
    selfCheckList: [
      "هل ذكرت مع من ذهبت للمطعم؟",
      "هل وصفت جو المطعم؟",
      "هل ذكرت ما طلبته (مقبلات / رئيسي / حلوى)؟",
      "هل وصفت طعم الطعام؟",
      "هل ذكرت السعر وطريقة الدفع؟",
      "هل أضفت رأيك في النهاية؟"
    ]
  },

  {
    id: 9,
    title: "Mein Beruf / Meine Arbeit",
    titleAr: "مهنتي / عملي",
    emoji: "💼",
    type: "Beschreibung",
    typeAr: "وصف",
    relatedChapter: 11,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تكتب عن مهنتك ومكان عملك وما تحب في وظيفتك.",
    keyVocabulary: [
      { de: "der Beruf / die Arbeit", ar: "المهنة / العمل" },
      { de: "arbeiten bei / in", ar: "يعمل في" },
      { de: "die Firma / das Unternehmen", ar: "الشركة" },
      { de: "das Büro / die Fabrik", ar: "المكتب / المصنع" },
      { de: "die Arbeitszeit", ar: "ساعات العمل" },
      { de: "das Gehalt", ar: "الراتب" },
      { de: "die Kollegen", ar: "الزملاء" },
      { de: "der Chef / die Chefin", ar: "المدير / المديرة" },
      { de: "Vollzeit / Teilzeit", ar: "دوام كامل / جزئي" },
      { de: "der Urlaub", ar: "الإجازة" },
      { de: "Spaß machen", ar: "يجلب السعادة / ممتع" },
    ],
    usefulPhrases: [
      { de: "Ich bin ... von Beruf.", ar: "مهنتي ..." },
      { de: "Ich arbeite bei / in ...", ar: "أعمل في ..." },
      { de: "Ich arbeite ... Stunden pro Woche.", ar: "أعمل ... ساعة في الأسبوع." },
      { de: "Meine Arbeit macht mir Spaß.", ar: "أحب عملي." },
      { de: "Meine Kollegen sind nett.", ar: "زملائي لطيفون." },
      { de: "Ich verdiene ... Euro pro Monat.", ar: "أكسب ... يورو في الشهر." },
      { de: "Ich suche eine neue Stelle.", ar: "أبحث عن وظيفة جديدة." },
    ],
    grammarFocus: [
      "Ich bin + Berufsbezeichnung (ohne Artikel): Ich bin Arzt.",
      "Ich arbeite als + Berufsbezeichnung: Ich arbeite als Ingenieur.",
      "bei + Firma (Dativ): Ich arbeite bei der Firma Bosch.",
      "pro: 40 Stunden pro Woche"
    ],
    structure: [
      {
        step: "ذكر مهنتك",
        icon: "1️⃣",
        tip: "ابدأ بذكر مهنتك",
        examples: [
          "Ich bin Ingenieur von Beruf.",
          "Ich arbeite als Krankenpfleger.",
          "Ich bin Hausfrau und kümmere mich um meine Kinder."
        ]
      },
      {
        step: "مكان وظروف العمل",
        icon: "2️⃣",
        tip: "صف مكان عملك وساعاته",
        examples: [
          "Ich arbeite bei einer Computerfirma in Berlin.",
          "Ich arbeite 40 Stunden pro Woche.",
          "Meine Arbeitszeit ist von 8 bis 17 Uhr."
        ]
      },
      {
        step: "زملاؤك وبيئة العمل",
        icon: "3️⃣",
        tip: "اذكر زملاءك وجو العمل",
        examples: [
          "Meine Kollegen sind sehr nett.",
          "Mein Chef ist streng, aber fair.",
          "Die Atmosphäre im Büro ist gut."
        ]
      },
      {
        step: "رأيك في عملك",
        icon: "4️⃣",
        tip: "اذكر ما تحبه وما لا تحبه في عملك",
        examples: [
          "Meine Arbeit macht mir sehr viel Spaß.",
          "Manchmal ist die Arbeit stressig.",
          "Ich bin froh, dass ich Arbeit habe."
        ]
      }
    ],
    exampleEssay: {
      text: "Ich bin Elektriker von Beruf. Ich arbeite seit fünf Jahren bei einer Baufirma in Düsseldorf. Meine Arbeitszeit ist von 7 bis 16 Uhr, von Montag bis Freitag. Das sind 40 Stunden pro Woche. Ich arbeite meistens auf Baustellen. Manchmal fahre ich auch zu Kunden nach Hause. Meine Kollegen sind sehr nett und hilfsbereit. Mein Chef ist manchmal streng, aber er ist fair. Meine Arbeit macht mir Spaß, weil ich gern mit den Händen arbeite. Manchmal ist die Arbeit körperlich anstrengend. Aber ich bin zufrieden mit meiner Arbeit.",
      translation: "أنا كهربائي من حيث المهنة. أعمل منذ خمس سنوات في شركة بناء في دوسلدورف. ساعات عملي من 7 إلى 16، من الاثنين إلى الجمعة. هذه 40 ساعة في الأسبوع. أعمل في الغالب في مواقع البناء. أحياناً أذهب أيضاً إلى منازل الزبائن. زملائي لطيفون ومتعاونون. مديري صارم أحياناً لكنه عادل. أحب عملي لأنني أحب العمل بيديّ. أحياناً يكون العمل مرهقاً جسدياً. لكنني راضٍ عن عملي.",
      wordCount: 82
    },
    writingTips: [
      "لا تضع أداة تعريف مع المهن: Ich bin Arzt (وليس Ich bin ein Arzt)",
      "استخدم seit لذكر مدة عملك: seit fünf Jahren",
      "وصف الجوانب الإيجابية والسلبية لعملك",
      "استخدم weil لتفسير سبب حبك للعمل"
    ],
    selfCheckList: [
      "هل ذكرت مهنتك بدون أداة التعريف؟",
      "هل ذكرت مكان عملك؟",
      "هل ذكرت ساعات العمل؟",
      "هل وصفت زملاءك وبيئة العمل؟",
      "هل أضفت رأيك في عملك؟"
    ]
  },

  {
    id: 10,
    title: "Eine Einkaufsliste und Einkaufsdialog",
    titleAr: "قائمة التسوق وحوار في المتجر",
    emoji: "🛒",
    type: "Liste + Dialog",
    typeAr: "قائمة + حوار",
    relatedChapter: 5,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تكتب قائمة تسوق وكيف تجري حواراً في المتجر.",
    keyVocabulary: [
      { de: "die Einkaufsliste", ar: "قائمة التسوق" },
      { de: "brauchen / benötigen", ar: "يحتاج" },
      { de: "ein Kilo / 500 Gramm", ar: "كيلو / 500 غرام" },
      { de: "eine Flasche / ein Paket", ar: "زجاجة / علبة" },
      { de: "frisch / bio", ar: "طازج / عضوي" },
      { de: "der Preis / kosten", ar: "السعر / يكلف" },
      { de: "zusammen / insgesamt", ar: "المجموع" },
      { de: "mit Karte / bar bezahlen", ar: "يدفع بالبطاقة / نقداً" },
      { de: "Haben Sie...?", ar: "هل عندكم...؟" },
      { de: "Wo finde ich...?", ar: "أين أجد...؟" },
    ],
    usefulPhrases: [
      { de: "Ich brauche ...", ar: "أحتاج ..." },
      { de: "Haben Sie frische Tomaten?", ar: "هل عندكم طماطم طازجة؟" },
      { de: "Wo finde ich die Milch?", ar: "أين أجد الحليب؟" },
      { de: "Das macht zusammen ... Euro.", ar: "المجموع ... يورو." },
      { de: "Kann ich mit Karte zahlen?", ar: "هل يمكنني الدفع بالبطاقة؟" },
      { de: "Haben Sie eine Tüte?", ar: "هل عندكم كيس؟" },
    ],
    grammarFocus: [
      "Akkusativ bei einkaufen: Ich kaufe den/die/das...",
      "Mengenangaben: ein Kilo, 500 Gramm, eine Flasche",
      "Können + Infinitiv: Kann ich mit Karte zahlen?",
      "wo-Fragen: Wo finde ich die Milch?"
    ],
    structure: [
      {
        step: "قائمة التسوق",
        icon: "📝",
        tip: "ابدأ بكتابة ما تحتاجه",
        examples: [
          "Diese Woche brauche ich:",
          "- ein Kilo Tomaten",
          "- 500 Gramm Käse",
          "- zwei Liter Milch",
          "- eine Flasche Olivenöl"
        ]
      },
      {
        step: "في المتجر - السؤال عن المنتجات",
        icon: "🏪",
        tip: "صف حوارك مع البائع",
        examples: [
          "Entschuldigung, haben Sie frischen Fisch?",
          "Wo finde ich bitte die Eier?",
          "Wie viel kostet das Brot?"
        ]
      },
      {
        step: "الدفع",
        icon: "💳",
        tip: "اذكر كيف دفعت",
        examples: [
          "An der Kasse habe ich mit Karte bezahlt.",
          "Es hat insgesamt 35 Euro gekostet.",
          "Der Kassierer war freundlich."
        ]
      }
    ],
    exampleEssay: {
      text: "Diese Woche muss ich einkaufen gehen. Ich brauche viele Sachen. Meine Einkaufsliste: ein Kilo Tomaten, 500 Gramm Hähnchen, einen Liter Milch, 200 Gramm Käse, ein Paket Nudeln, eine Flasche Olivenöl und frisches Brot. Im Supermarkt habe ich zuerst das Gemüse geholt. Dann bin ich zur Fleischabteilung gegangen. Entschuldigung, ich habe den Kassierer gefragt: Haben Sie Bio-Eier? Er hat gesagt: Ja, im Gang drei. Super! An der Kasse habe ich mit EC-Karte bezahlt. Es hat insgesamt 42 Euro und 80 Cent gekostet. Das ist nicht zu teuer.",
      translation: "هذا الأسبوع يجب أن أذهب للتسوق. أحتاج أشياء كثيرة. قائمتي للتسوق: كيلو طماطم، 500 غرام دجاج، لتر حليب، 200 غرام جبن، علبة مكرونة، زجاجة زيت زيتون وخبز طازج. في السوبرماركت أخذت الخضروات أولاً. ثم ذهبت لقسم اللحوم. عذراً، سألت الكاشير: هل عندكم بيض عضوي؟ قال: نعم في الممر الثالث. رائع! عند الصندوق دفعت ببطاقة EC. كلّف المجموع 42 يورو و80 سنتاً. هذا ليس غالياً.",
      wordCount: 88
    },
    writingTips: [
      "رتّب القائمة بشكل منطقي (خضروات، لحوم، منتجات ألبان...)",
      "استخدم Perfekt عند وصف ما فعلته: Ich habe gekauft",
      "أضف تفاصيل الحوار مع البائع لجعل النص حياً",
      "اذكر السعر الإجمالي في النهاية"
    ],
    selfCheckList: [
      "هل ذكرت قائمة التسوق؟",
      "هل استخدمت وحدات القياس الصحيحة (Kilo, Gramm, Liter)?",
      "هل وصفت تجربتك في المتجر؟",
      "هل ذكرت كيف دفعت؟",
      "هل ذكرت السعر الإجمالي؟"
    ]
  },

  {
    id: 11,
    title: "Meine Stadt / Mein Wohnort",
    titleAr: "مدينتي / مكان سكني",
    emoji: "🏙️",
    type: "Beschreibung",
    typeAr: "وصف",
    relatedChapter: 7,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تكتب عن مدينتك في ألمانيا أو مدينتك الأصلية.",
    keyVocabulary: [
      { de: "die Stadt / das Dorf", ar: "المدينة / القرية" },
      { de: "die Hauptstadt", ar: "العاصمة" },
      { de: "der Einwohner", ar: "الساكن / المواطن" },
      { de: "die Sehenswürdigkeit", ar: "المعلم السياحي" },
      { de: "der Park / das Museum", ar: "الحديقة / المتحف" },
      { de: "das Zentrum / die Innenstadt", ar: "المركز / وسط المدينة" },
      { de: "ruhig / laut / groß / modern", ar: "هادئ / صاخب / كبير / حديث" },
      { de: "in der Nähe von", ar: "قريب من" },
      { de: "gefallen (mir gefällt)", ar: "يعجبني" },
      { de: "wohnen seit", ar: "يسكن منذ" },
    ],
    usefulPhrases: [
      { de: "Ich wohne in ... seit ... Jahren.", ar: "أسكن في ... منذ ... سنوات." },
      { de: "Die Stadt hat ... Einwohner.", ar: "المدينة بها ... ساكن." },
      { de: "Die Stadt liegt in ...", ar: "المدينة تقع في ..." },
      { de: "In der Stadt gibt es ...", ar: "في المدينة يوجد ..." },
      { de: "Mir gefällt die Stadt, weil ...", ar: "تعجبني المدينة لأن ..." },
      { de: "Die Stadt ist bekannt für ...", ar: "المدينة مشهورة بـ ..." },
    ],
    grammarFocus: [
      "Dativ nach in/bei/seit: Ich wohne in der Stadt.",
      "es gibt + Akkusativ: Es gibt einen schönen Park.",
      "gefallen: Mir gefällt die Stadt.",
      "weil + Verb am Ende: Ich mag die Stadt, weil sie schön ist."
    ],
    structure: [
      {
        step: "تعريف المدينة",
        icon: "🗺️",
        tip: "ابدأ باسم المدينة وموقعها وعدد سكانها",
        examples: [
          "Ich wohne in Leipzig seit zwei Jahren.",
          "Leipzig liegt in Sachsen, im Osten Deutschlands.",
          "Die Stadt hat ca. 600.000 Einwohner."
        ]
      },
      {
        step: "ما يوجد في المدينة",
        icon: "🏛️",
        tip: "صف أهم المعالم والخدمات في مدينتك",
        examples: [
          "In Leipzig gibt es viele Parks und Museen.",
          "Es gibt gute öffentliche Verkehrsmittel.",
          "Das Stadtzentrum ist sehr schön."
        ]
      },
      {
        step: "ما يعجبك في المدينة",
        icon: "❤️",
        tip: "اذكر ما تحب وما لا تحب",
        examples: [
          "Mir gefällt die Stadt, weil sie nicht zu groß ist.",
          "Das Leben in Leipzig ist nicht so teuer wie in Berlin.",
          "Es gibt viele Möglichkeiten für Freizeit."
        ]
      }
    ],
    exampleEssay: {
      text: "Ich wohne seit einem Jahr in Frankfurt am Main. Frankfurt liegt in Hessen, in Westdeutschland. Die Stadt hat ca. 750.000 Einwohner und ist ein wichtiges Finanzzentrum. In Frankfurt gibt es viele Sehenswürdigkeiten: den Römer, den Dom und das Museumsufer. Es gibt auch sehr gute öffentliche Verkehrsmittel. Die U-Bahn und der Bus fahren sehr oft. Mir gefällt Frankfurt sehr, weil die Stadt modern und international ist. Hier leben Menschen aus aller Welt. Manchmal ist die Stadt aber sehr teuer, besonders die Wohnungen. Trotzdem bin ich froh, hier zu wohnen.",
      translation: "أسكن في فرانكفورت آم ماين منذ سنة. تقع فرانكفورت في هيسن في غرب ألمانيا. المدينة بها حوالي 750 ألف ساكن وهي مركز مالي مهم. في فرانكفورت توجد كثير من المعالم: Römer وكاتدرائية و Museumsufer. يوجد أيضاً وسائل نقل عام جيدة جداً. المترو والحافلة تسير كثيراً. تعجبني فرانكفورت كثيراً لأن المدينة حديثة ودولية. هنا يعيش ناس من جميع أنحاء العالم. أحياناً تكون المدينة غالية جداً خاصة الشقق. رغم ذلك أنا سعيد بالسكن هنا.",
      wordCount: 84
    },
    writingTips: [
      "ابدأ بالمعلومات الأساسية: الموقع وعدد السكان",
      "استخدم es gibt لوصف ما في المدينة",
      "أضف إيجابيات وسلبيات لجعل النص أكثر واقعية",
      "استخدم weil لتفسير آراءك"
    ],
    selfCheckList: [
      "هل ذكرت اسم المدينة وموقعها؟",
      "هل ذكرت عدد السكان تقريباً؟",
      "هل ذكرت ما يوجد في المدينة؟",
      "هل ذكرت وسائل النقل؟",
      "هل أضفت رأيك في المدينة (مع weil)?",
      "هل ذكرت شيئاً سلبياً للتوازن؟"
    ]
  },

  {
    id: 12,
    title: "Ein Steckbrief",
    titleAr: "البطاقة الشخصية",
    emoji: "📋",
    type: "Formular / Steckbrief",
    typeAr: "نموذج / بطاقة شخصية",
    relatedChapter: 1,
    targetLength: { min: 30, max: 60 },
    description: "تعلم كيف تملأ بطاقة شخصية أو نموذجاً بمعلوماتك.",
    keyVocabulary: [
      { de: "der Vorname / Nachname", ar: "الاسم الأول / اللقب" },
      { de: "das Geburtsdatum", ar: "تاريخ الميلاد" },
      { de: "der Geburtsort", ar: "مكان الميلاد" },
      { de: "die Staatsangehörigkeit", ar: "الجنسية" },
      { de: "die Adresse", ar: "العنوان" },
      { de: "die Postleitzahl", ar: "الرمز البريدي" },
      { de: "der Familienstand", ar: "الحالة الاجتماعية" },
      { de: "verheiratet / ledig / geschieden", ar: "متزوج / أعزب / مطلق" },
      { de: "die Telefonnummer", ar: "رقم الهاتف" },
      { de: "die E-Mail-Adresse", ar: "البريد الإلكتروني" },
    ],
    usefulPhrases: [
      { de: "Vorname: Ahmad", ar: "الاسم الأول: أحمد" },
      { de: "Nachname: Al-Hassan", ar: "اللقب: الحسن" },
      { de: "Geburtsdatum: 15. März 1996", ar: "تاريخ الميلاد: 15 مارس 1996" },
      { de: "Staatsangehörigkeit: syrisch", ar: "الجنسية: سوري" },
      { de: "Familienstand: verheiratet", ar: "الحالة الاجتماعية: متزوج" },
      { de: "Beruf: Elektriker", ar: "المهنة: كهربائي" },
    ],
    grammarFocus: [
      "تواريخ: am 15. März (am + Ordinalzahl + Monat)",
      "الجنسيات: deutsch, syrisch, türkisch, irakisch",
      "Familienstand: verheiratet / ledig / geschieden / verwitwet",
      "عناوين: Straße + Hausnummer, PLZ + Stadt"
    ],
    structure: [
      {
        step: "المعلومات الشخصية الأساسية",
        icon: "👤",
        tip: "ابدأ بالاسم وتاريخ ومكان الميلاد",
        examples: [
          "Vorname: Ahmad",
          "Nachname: Al-Hassan",
          "Geburtsdatum: 15.03.1996",
          "Geburtsort: Damaskus, Syrien"
        ]
      },
      {
        step: "معلومات الإقامة",
        icon: "🏠",
        tip: "أضف عنوانك ورقم هاتفك",
        examples: [
          "Adresse: Hauptstraße 12, 10115 Berlin",
          "Telefon: 0176 12345678",
          "E-Mail: ahmad@email.de"
        ]
      },
      {
        step: "المعلومات الأخرى",
        icon: "📊",
        tip: "أضف الجنسية والحالة الاجتماعية والمهنة",
        examples: [
          "Staatsangehörigkeit: syrisch",
          "Familienstand: verheiratet",
          "Beruf: Elektriker",
          "Sprachen: Arabisch (Muttersprache), Deutsch (A1), Englisch (B1)"
        ]
      }
    ],
    exampleEssay: {
      text: "STECKBRIEF\n\nVorname: Ahmad\nNachname: Al-Hassan\nGeburtsdatum: 15. März 1996\nGeburtsort: Damaskus, Syrien\nStaatsangehörigkeit: syrisch\nFamilienstand: verheiratet, 2 Kinder\nAdresse: Hauptstraße 45, 10115 Berlin\nTelefonnummer: 0176 – 123 456 78\nE-Mail: ahmad.alhassan@web.de\nBeruf: Elektriker\nArbeitgeber: Baufirma Schmidt GmbH\nSprachen: Arabisch (Muttersprache), Deutsch (A1), Englisch (A2)\nHobbys: Fußball spielen, Lesen, Kochen",
      translation: "بطاقة شخصية\n\nالاسم الأول: أحمد\nاللقب: الحسن\nتاريخ الميلاد: 15 مارس 1996\nمكان الميلاد: دمشق، سوريا\nالجنسية: سوري\nالحالة الاجتماعية: متزوج، 2 أطفال\nالعنوان: شارع هاوبتشتراسه 45، 10115 برلين\nرقم الهاتف: 0176 – 123 456 78\nالبريد الإلكتروني: ahmad.alhassan@web.de\nالمهنة: كهربائي\nصاحب العمل: شركة بناء شميدت\nاللغات: عربي (لغة أم)، ألماني (A1)، إنجليزي (A2)\nالهوايات: لعب كرة القدم، القراءة، الطبخ",
      wordCount: 55
    },
    writingTips: [
      "اكتب التواريخ هكذا: 15. März 1996 (أو 15.03.1996)",
      "الجنسيات: deutsch, syrisch, türkisch (بدون حرف كبير)",
      "اكتب رقم الهاتف بمسافات: 0176 – 123 456 78",
      "ضع Muttersprache بعد لغتك الأم"
    ],
    selfCheckList: [
      "هل كتبت الاسم الأول واللقب منفصلَين؟",
      "هل كتبت تاريخ الميلاد بشكل صحيح؟",
      "هل ذكرت الجنسية (بدون حرف كبير)؟",
      "هل ذكرت الحالة الاجتماعية؟",
      "هل ذكرت العنوان كاملاً (شارع + رقم + رمز بريدي + مدينة)؟",
      "هل ذكرت اللغات التي تتكلمها مع مستوياتها؟"
    ]
  },

  {
    id: 13,
    title: "Das Wetter",
    titleAr: "الطقس",
    emoji: "🌤️",
    type: "Beschreibung",
    typeAr: "وصف",
    relatedChapter: 4,
    targetLength: { min: 40, max: 70 },
    description: "تعلم كيف تكتب وتتحدث عن الطقس وتفضيلاتك الموسمية.",
    keyVocabulary: [
      { de: "das Wetter", ar: "الطقس" },
      { de: "die Jahreszeit", ar: "الموسم / الفصل" },
      { de: "der Frühling / Sommer / Herbst / Winter", ar: "الربيع / الصيف / الخريف / الشتاء" },
      { de: "sonnig / bewölkt / regnerisch", ar: "مشمس / غائم / ممطر" },
      { de: "kalt / warm / heiß", ar: "بارد / دافئ / حار" },
      { de: "der Regen / der Schnee / der Wind", ar: "المطر / الثلج / الريح" },
      { de: "Grad Celsius", ar: "درجة مئوية" },
      { de: "regnen / schneien", ar: "يمطر / يثلج" },
    ],
    usefulPhrases: [
      { de: "Heute ist das Wetter ...", ar: "الطقس اليوم ..." },
      { de: "Es ist ... Grad.", ar: "الحرارة ... درجة." },
      { de: "Es regnet / schneit.", ar: "إنه يمطر / يثلج." },
      { de: "Mein Lieblingsmonat ist ...", ar: "شهري المفضل هو ..." },
      { de: "Im Sommer / Winter ist es ...", ar: "في الصيف / الشتاء إنه ..." },
      { de: "Ich mag ... Wetter.", ar: "أحب طقس ..." },
    ],
    grammarFocus: [
      "Unpersönliche Konstruktionen: Es regnet. Es schneit. Es ist kalt.",
      "im + Jahreszeit (Dativ): im Sommer, im Winter",
      "Vergleiche: Der Sommer in Deutschland ist kühler als in Syrien.",
      "Adjektive: sonnig, windig, bewölkt, stürmisch"
    ],
    structure: [
      { step: "الطقس اليوم", icon: "🌡️", tip: "صف الطقس الحالي", examples: ["Heute ist es sehr kalt in Berlin.", "Es ist nur 5 Grad.", "Der Himmel ist bewölkt und es regnet leicht."] },
      { step: "الطقس في الفصول", icon: "🍂", tip: "صف طقس الفصول المختلفة", examples: ["Im Sommer ist es warm, ca. 25 Grad.", "Im Winter schneit es manchmal.", "Der Frühling ist meine Lieblingsjahrzeit."] },
      { step: "مقارنة مع بلدك الأصلي", icon: "🌍", tip: "قارن الطقس في ألمانيا ببلدك", examples: ["In Syrien ist der Sommer viel heißer.", "Hier gibt es mehr Regen als in meiner Heimat.", "Der Winter hier ist kälter als ich gedacht habe."] }
    ],
    exampleEssay: {
      text: "Heute ist das Wetter in Berlin nicht so schön. Es ist bewölkt und kalt, nur 8 Grad. Es regnet ein bisschen. Im Sommer ist das Wetter hier besser. Es ist warm und sonnig, ca. 25 Grad. Im Winter ist es sehr kalt und manchmal schneit es. Das mag ich! Meine Lieblingsjahrzeit ist der Frühling. Im Frühling ist es nicht zu heiß und nicht zu kalt. Alles ist grün und es gibt viele Blumen. In meiner Heimat, in Syrien, ist der Sommer viel heißer, oft über 40 Grad! Der Winter in Deutschland ist für mich manchmal zu kalt.",
      translation: "الطقس اليوم في برلين ليس جميلاً. إنه غائم وبارد، فقط 8 درجات. إنه يمطر قليلاً. في الصيف يكون الطقس هنا أفضل. إنه دافئ ومشمس، حوالي 25 درجة. في الشتاء يكون بارداً جداً وأحياناً يثلج. أحب ذلك! موسمي المفضل هو الربيع. في الربيع لا يكون حاراً جداً ولا بارداً جداً. كل شيء أخضر وتوجد كثير من الأزهار. في وطني في سوريا يكون الصيف أشد حراً، أحياناً أكثر من 40 درجة! الشتاء في ألمانيا أحياناً بارد جداً بالنسبة لي.",
      wordCount: 84
    },
    writingTips: ["استخدم es ist لوصف الطقس (es ist kalt, es ist warm)", "استخدم es regnet/es schneit كجمل جاهزة", "قارن الطقس في ألمانيا ببلدك الأصلي", "اذكر الحرارة بالأرقام لجعل الوصف أكثر دقة"],
    selfCheckList: ["هل وصفت الطقس الحالي؟", "هل ذكرت درجة الحرارة؟", "هل وصفت الفصول الأربعة؟", "هل ذكرت موسمك المفضل مع سبب؟", "هل قارنت الطقس في ألمانيا ببلدك؟"]
  },

  {
    id: 14,
    title: "Einen Freund / Eine Freundin beschreiben",
    titleAr: "وصف صديق / صديقة",
    emoji: "🤝",
    type: "Personenbeschreibung",
    typeAr: "وصف شخص",
    relatedChapter: 1,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تصف شخصاً تعرفه - المظهر والشخصية والأنشطة المشتركة.",
    keyVocabulary: [
      { de: "der Freund / die Freundin", ar: "الصديق / الصديقة" },
      { de: "kennenlernen", ar: "يتعرف على" },
      { de: "groß / klein / schlank / dick", ar: "طويل / قصير / نحيف / سمين" },
      { de: "die Haare (lang/kurz/schwarz/blond)", ar: "الشعر (طويل/قصير/أسود/أشقر)" },
      { de: "freundlich / lustig / ruhig / fleißig", ar: "ودود / مرح / هادئ / مجتهد" },
      { de: "zusammen", ar: "معاً" },
      { de: "sich treffen", ar: "يلتقيان" },
      { de: "sich verstehen", ar: "يتفاهمان" },
    ],
    usefulPhrases: [
      { de: "Mein bester Freund heißt ...", ar: "اسم صديقي المقرب ..." },
      { de: "Wir kennen uns seit ...", ar: "نعرف بعضنا منذ ..." },
      { de: "Er/Sie ist ... Jahre alt.", ar: "عمره/عمرها ... سنة." },
      { de: "Er/Sie ist sehr ...", ar: "هو/هي ... جداً." },
      { de: "Wir treffen uns oft ...", ar: "نلتقي كثيراً ..." },
      { de: "Er/Sie hilft mir immer.", ar: "هو/هي يساعدني دائماً." },
    ],
    grammarFocus: [
      "Adjektive ohne Artikel: Er ist groß und freundlich.",
      "Adjektive mit Artikel: Er hat braune Haare.",
      "Reflexivverben: Wir treffen uns. Wir verstehen uns.",
      "seit + Dativ: Wir kennen uns seit zwei Jahren."
    ],
    structure: [
      { step: "التعريف بالصديق", icon: "1️⃣", tip: "ابدأ بالاسم وكيف تعرفتما", examples: ["Mein bester Freund heißt Mustafa.", "Wir kennen uns seit drei Jahren.", "Wir haben uns im Deutschkurs kennengelernt."] },
      { step: "وصف المظهر", icon: "2️⃣", tip: "صف مظهره الخارجي", examples: ["Mustafa ist groß und schlank.", "Er hat schwarze, kurze Haare.", "Er trägt immer eine Brille."] },
      { step: "وصف الشخصية", icon: "3️⃣", tip: "صف شخصيته وصفاته", examples: ["Er ist sehr freundlich und hilfsbereit.", "Er ist lustig und macht viele Witze.", "Er ist auch sehr fleißig und lernt viel."] },
      { step: "الأنشطة المشتركة", icon: "4️⃣", tip: "اذكر ما تفعلانه معاً", examples: ["Wir treffen uns oft am Wochenende.", "Wir spielen zusammen Fußball.", "Manchmal gehen wir ins Kino oder Café."] }
    ],
    exampleEssay: {
      text: "Mein bester Freund heißt Omar Al-Rashid. Wir kennen uns seit zwei Jahren. Wir haben uns im Deutschkurs kennengelernt. Omar ist 32 Jahre alt. Er ist mittelgroß und schlank. Er hat schwarze, kurze Haare und einen Bart. Er trägt meistens Jeans und ein T-Shirt. Omar ist sehr freundlich und hilfsbereit. Er hilft mir immer, wenn ich Probleme habe. Er ist auch lustig und macht viele Witze. Wir treffen uns oft am Wochenende. Wir spielen zusammen Fußball oder gehen ins Café. Manchmal lernen wir zusammen Deutsch. Ich bin froh, Omar als Freund zu haben.",
      translation: "اسم صديقي المقرب عمر الرشيد. نعرف بعضنا منذ سنتين. تعرفنا في دورة الألمانية. عمر عمره 32 سنة. هو متوسط الطول ونحيف. لديه شعر أسود قصير ولحية. يلبس في الغالب جينز وتيشيرت. عمر ودود ومتعاون جداً. يساعدني دائماً عندما أواجه مشاكل. هو أيضاً مرح ويمزح كثيراً. نلتقي كثيراً في عطلة الأسبوع. نلعب كرة القدم معاً أو نذهب للكافيه. أحياناً ندرس الألمانية معاً. أنا سعيد لأن عمر صديقي.",
      wordCount: 82
    },
    writingTips: ["ابدأ بكيف تعرفتما", "صف المظهر أولاً ثم الشخصية", "استخدم auch وaußerdem للإضافة", "اختم بجملة تعبر عن شعورك تجاه الصداقة"],
    selfCheckList: ["هل ذكرت اسم صديقك وكيف تعرفتما؟", "هل وصفت مظهره الخارجي؟", "هل وصفت شخصيته؟", "هل ذكرت ما تفعلانه معاً؟", "هل أضفت جملة عاطفية في النهاية؟"]
  },

  {
    id: 15,
    title: "Mein Deutschkurs",
    titleAr: "دورة الألمانية",
    emoji: "📚",
    type: "Bericht",
    typeAr: "تقرير",
    relatedChapter: 1,
    targetLength: { min: 50, max: 80 },
    description: "تعلم كيف تكتب عن دورتك في اللغة الألمانية وتجربتك في التعلم.",
    keyVocabulary: [
      { de: "der Kurs / die Stunde", ar: "الدورة / الحصة" },
      { de: "der Lehrer / die Lehrerin", ar: "المعلم / المعلمة" },
      { de: "die Mitschüler / Kursteilnehmer", ar: "زملاء الفصل / المتدربون" },
      { de: "lernen / üben", ar: "يتعلم / يتدرب" },
      { de: "schwierig / einfach / interessant", ar: "صعب / سهل / مثير للاهتمام" },
      { de: "die Hausaufgaben", ar: "الواجبات" },
      { de: "das Wörterbuch", ar: "القاموس" },
      { de: "die Grammatik / das Vokabular", ar: "القواعد / المفردات" },
      { de: "verstehen / sprechen", ar: "يفهم / يتكلم" },
      { de: "Fortschritte machen", ar: "يتقدم / يحرز تقدماً" },
    ],
    usefulPhrases: [
      { de: "Ich besuche einen Deutschkurs.", ar: "أحضر دورة ألمانية." },
      { de: "Der Kurs ist auf Niveau A1.", ar: "الدورة في مستوى A1." },
      { de: "Der Kurs findet ... statt.", ar: "الدورة تُعقد ..." },
      { de: "Meine Lehrerin/Mein Lehrer heißt ...", ar: "اسم معلمتي/معلمي ..." },
      { de: "Im Kurs lernen wir ...", ar: "في الدورة نتعلم ..." },
      { de: "Deutsch ist schwer, aber ...", ar: "الألمانية صعبة لكن ..." },
      { de: "Ich mache schon Fortschritte.", ar: "أنا أحرز تقدماً بالفعل." },
    ],
    grammarFocus: [
      "Präsens für regelmäßige Aktivitäten",
      "stattfinden (trennbar): Der Kurs findet... statt",
      "Zeitangaben: von 9 bis 13 Uhr, montags bis freitags",
      "Meinung ausdrücken: Ich finde Deutsch schwer/interessant."
    ],
    structure: [
      { step: "معلومات الدورة", icon: "1️⃣", tip: "ابدأ بمعلومات أساسية عن الدورة", examples: ["Ich besuche seit zwei Monaten einen Deutschkurs.", "Der Kurs ist auf Niveau A1 und findet montags bis freitags statt.", "Er beginnt um 9 Uhr und endet um 13 Uhr."] },
      { step: "المعلم وزملاء الفصل", icon: "2️⃣", tip: "صف معلمك وزملاءك", examples: ["Meine Lehrerin heißt Frau Weber. Sie ist sehr nett und geduldig.", "Im Kurs sind 15 Teilnehmer aus verschiedenen Ländern.", "Wir kommen aus Syrien, der Türkei, Irak und Iran."] },
      { step: "ماذا تتعلمون", icon: "3️⃣", tip: "صف ما تتعلمه في الدورة", examples: ["Im Kurs lernen wir Grammatik, Vokabeln und sprechen viel.", "Wir üben auch Hören und Lesen.", "Die Hausaufgaben mache ich jeden Abend."] },
      { step: "رأيك في الدورة والتقدم", icon: "4️⃣", tip: "اذكر رأيك في الدورة وما تقدمت فيه", examples: ["Deutsch ist manchmal schwer, aber ich lerne gern.", "Ich mache schon gute Fortschritte.", "Jetzt kann ich einfache Gespräche führen."] }
    ],
    exampleEssay: {
      text: "Ich besuche seit drei Monaten einen Deutschkurs beim VHS in Hamburg. Der Kurs ist auf Niveau A1. Er findet montags bis freitags statt, von 9 bis 13 Uhr. Meine Lehrerin heißt Frau Hoffmann. Sie ist sehr nett, geduldig und erklärt alles gut. Im Kurs sind 12 Teilnehmer aus verschiedenen Ländern. Wir kommen aus Syrien, Afghanistan, Iran und der Türkei. Im Kurs lernen wir Grammatik und viele neue Wörter. Wir üben auch Sprechen und Hören. Die Hausaufgaben mache ich jeden Abend. Deutsch ist manchmal schwer, besonders die Grammatik. Aber ich lerne gern und mache schon gute Fortschritte. Jetzt kann ich einfache Gespräche auf Deutsch führen!",
      translation: "أحضر دورة ألمانية في VHS في هامبورغ منذ ثلاثة أشهر. الدورة في مستوى A1. تُعقد من الاثنين إلى الجمعة من الساعة 9 إلى 13. اسم معلمتي السيدة هوفمان. إنها لطيفة وصبورة وتشرح كل شيء بشكل جيد. في الدورة 12 مشاركاً من دول مختلفة. نأتي من سوريا وأفغانستان وإيران وتركيا. في الدورة نتعلم القواعد وكلمات جديدة كثيرة. نتدرب أيضاً على التحدث والاستماع. أعمل الواجبات كل مساء. الألمانية صعبة أحياناً خاصة القواعد. لكنني أحب التعلم وأحرز تقدماً جيداً بالفعل. الآن أستطيع إجراء محادثات بسيطة بالألمانية!",
      wordCount: 90
    },
    writingTips: ["ابدأ بمتى بدأت الدورة وأين", "صف معلمك بإيجابية", "اذكر ماذا تتعلمون في الدورة", "اختم بنجاحاتك ومشاعرك تجاه التعلم"],
    selfCheckList: ["هل ذكرت اسم مدرسة اللغة والمستوى؟", "هل ذكرت أوقات الدورة؟", "هل وصفت معلمك؟", "هل ذكرت جنسيات زملائك؟", "هل ذكرت ما تتعلمه؟", "هل ذكرت تقدمك في الألمانية؟"]
  }
];

// ── Sentence Builders ─────────────────────────────────────────
const SENTENCE_BUILDERS = [
  // Identity
  { pattern: "Ich heiße ___.", meaning: "اسمي ___", example: "Ich heiße Ahmad.", category: "التعريف" },
  { pattern: "Ich bin ___ Jahre alt.", meaning: "عمري ___ سنة", example: "Ich bin 28 Jahre alt.", category: "التعريف" },
  { pattern: "Ich komme aus ___.", meaning: "أنا من ___", example: "Ich komme aus Syrien.", category: "التعريف" },
  { pattern: "Ich wohne in ___ seit ___ Jahren.", meaning: "أسكن في ___ منذ ___ سنوات", example: "Ich wohne in Berlin seit zwei Jahren.", category: "التعريف" },
  { pattern: "Ich bin ___ von Beruf.", meaning: "مهنتي ___", example: "Ich bin Ingenieur von Beruf.", category: "المهنة" },
  { pattern: "Ich arbeite bei/in ___.", meaning: "أعمل في ___", example: "Ich arbeite bei einer Computerfirma.", category: "المهنة" },
  // Family
  { pattern: "Meine Familie ist ___.", meaning: "عائلتي ___", example: "Meine Familie ist groß.", category: "العائلة" },
  { pattern: "Mein ___ heißt ___.", meaning: "اسم ___ هو ___", example: "Mein Vater heißt Hassan.", category: "العائلة" },
  { pattern: "Ich habe ___ Kinder / Geschwister.", meaning: "لدي ___ أطفال / إخوة", example: "Ich habe zwei Kinder.", category: "العائلة" },
  // Daily routine
  { pattern: "Ich stehe um ___ Uhr auf.", meaning: "أستيقظ في الساعة ___", example: "Ich stehe um 7 Uhr auf.", category: "الروتين" },
  { pattern: "Um ___ Uhr ___ ich.", meaning: "في الساعة ___ أنا ___", example: "Um 8 Uhr frühstücke ich.", category: "الروتين" },
  { pattern: "Gegen ___ Uhr gehe ich schlafen.", meaning: "نحو الساعة ___ أنام", example: "Gegen 23 Uhr gehe ich schlafen.", category: "الروتين" },
  // Preferences
  { pattern: "Ich ___ gern ___.", meaning: "أحب أن ___", example: "Ich lese gern Bücher.", category: "التفضيلات" },
  { pattern: "Mein Lieblingsessen ist ___.", meaning: "طعامي المفضل هو ___", example: "Mein Lieblingsessen ist Kebab.", category: "التفضيلات" },
  { pattern: "Mir gefällt ___, weil ___.", meaning: "___ يعجبني لأن ___", example: "Mir gefällt Berlin, weil die Stadt groß ist.", category: "التفضيلات" },
  // Description
  { pattern: "In meiner Wohnung gibt es ___.", meaning: "في شقتي يوجد ___", example: "In meiner Wohnung gibt es drei Zimmer.", category: "الوصف" },
  { pattern: "Die Stadt hat ___ Einwohner.", meaning: "المدينة بها ___ ساكن", example: "Die Stadt hat 500.000 Einwohner.", category: "الوصف" },
  { pattern: "Es gibt ___ in ___.", meaning: "يوجد ___ في ___", example: "Es gibt viele Parks in Hamburg.", category: "الوصف" },
  // Health
  { pattern: "Ich habe ___ schmerzen.", meaning: "عندي ألم في ___", example: "Ich habe Kopfschmerzen.", category: "الصحة" },
  { pattern: "Mir ist ___.", meaning: "أشعر بـ ___", example: "Mir ist schlecht.", category: "الصحة" },
  { pattern: "Ich habe Fieber. ___ Grad.", meaning: "عندي حمى. ___ درجة", example: "Ich habe Fieber. 38 Grad.", category: "الصحة" },
  // Opinions
  { pattern: "Ich finde ___ sehr ___.", meaning: "أجد ___ ___", example: "Ich finde Deutsch sehr interessant.", category: "الرأي" },
  { pattern: "Ich bin froh, dass ___.", meaning: "أنا سعيد لأن ___", example: "Ich bin froh, dass ich hier wohne.", category: "الرأي" },
  { pattern: "Mein Ziel ist, ___ zu ___.", meaning: "هدفي هو ___", example: "Mein Ziel ist, gut Deutsch zu sprechen.", category: "الرأي" },
  // Time
  { pattern: "Seit ___ lerne ich Deutsch.", meaning: "أتعلم الألمانية منذ ___", example: "Seit drei Monaten lerne ich Deutsch.", category: "الوقت" },
  { pattern: "Am Wochenende ___.", meaning: "في عطلة الأسبوع ___", example: "Am Wochenende spiele ich Fußball.", category: "الوقت" },
  { pattern: "Jeden ___ ___.", meaning: "كل ___ أنا ___", example: "Jeden Abend lese ich ein Buch.", category: "الوقت" },
  // Letter
  { pattern: "Sehr geehrte/r ___, ", meaning: "حضرة ___, (رسمي)", example: "Sehr geehrte Frau Müller,", category: "الرسائل" },
  { pattern: "Ich schreibe Ihnen wegen ___.", meaning: "أكتب إليك بخصوص ___", example: "Ich schreibe Ihnen wegen des Kurses.", category: "الرسائل" },
  { pattern: "Mit freundlichen Grüßen, ___.", meaning: "مع أطيب التحيات, ___", example: "Mit freundlichen Grüßen, Ahmad.", category: "الرسائل" },
];

// ── Connectors / Linking Words ─────────────────────────────────
const CONNECTORS = [
  { de: "und", ar: "و", type: "إضافة", example: "Ich bin müde und krank.", tip: "يربط جملتين أو كلمتين" },
  { de: "aber", ar: "لكن / ولكن", type: "تعارض", example: "Deutsch ist schwer, aber ich lerne gern.", tip: "للتعبير عن التعارض" },
  { de: "oder", ar: "أو", type: "اختيار", example: "Kaffee oder Tee?", tip: "للاختيار بين أمرين" },
  { de: "denn", ar: "لأن (في المنتصف)", type: "سبب", example: "Ich lerne Deutsch, denn ich wohne in Deutschland.", tip: "السبب - الفعل في المكان الثاني" },
  { de: "weil", ar: "لأن (في النهاية)", type: "سبب", example: "Ich lerne Deutsch, weil ich in Deutschland wohne.", tip: "السبب - الفعل في النهاية" },
  { de: "dass", ar: "أن", type: "رابط", example: "Ich glaube, dass Deutsch schwer ist.", tip: "الفعل في النهاية" },
  { de: "dann", ar: "ثم / بعدها", type: "تسلسل زمني", example: "Ich frühstücke, dann gehe ich zum Kurs.", tip: "للترتيب الزمني" },
  { de: "danach", ar: "بعد ذلك", type: "تسلسل زمني", example: "Ich esse Mittag. Danach mache ich Hausaufgaben.", tip: "في بداية الجملة التالية" },
  { de: "zuerst", ar: "أولاً", type: "تسلسل زمني", example: "Zuerst stehe ich auf.", tip: "في بداية الجملة" },
  { de: "am Ende", ar: "في النهاية", type: "تسلسل زمني", example: "Am Ende gehe ich schlafen.", tip: "لإنهاء التسلسل" },
  { de: "auch", ar: "أيضاً / كذلك", type: "إضافة", example: "Ich spreche auch Englisch.", tip: "يأتي بعد الفعل" },
  { de: "außerdem", ar: "بالإضافة إلى ذلك", type: "إضافة", example: "Außerdem koche ich gern.", tip: "في بداية الجملة - رسمي" },
  { de: "trotzdem", ar: "رغم ذلك", type: "تعارض", example: "Es regnet. Trotzdem gehe ich spazieren.", tip: "الفعل يأتي بعده مباشرة" },
  { de: "deshalb", ar: "لذلك / لهذا السبب", type: "نتيجة", example: "Ich bin krank. Deshalb bleibe ich zu Hause.", tip: "الفعل في المكان الثاني" },
  { de: "manchmal", ar: "أحياناً", type: "تكرار", example: "Manchmal gehe ich ins Kino.", tip: "يأتي في بداية الجملة أو بعد الفعل" },
  { de: "immer", ar: "دائماً", type: "تكرار", example: "Ich esse immer zu Hause.", tip: "يأتي بعد الفعل" },
  { de: "oft", ar: "كثيراً / في الغالب", type: "تكرار", example: "Ich gehe oft ins Café.", tip: "يأتي بعد الفعل" },
  { de: "nie / niemals", ar: "أبداً", type: "تكرار", example: "Ich trinke nie Alkohol.", tip: "النفي الكامل" },
  { de: "meistens", ar: "في معظم الأحيان", type: "تكرار", example: "Ich esse meistens zu Hause.", tip: "أكثر من oft" },
  { de: "besonders", ar: "خاصةً / بشكل خاص", type: "تأكيد", example: "Ich mag Musik, besonders arabische Musik.", tip: "للتأكيد على شيء" },
];

// ── Saved Writings State ──────────────────────────────────────
let currentWritingTopic = null;

// ── Multilingual Localization Helpers ─────────────────────────
function getLocalizedConnector(c) {
  if (currentLang === 'ar') return c;
  const trans = {
    'und': { en: 'and', tr: 've', ro: 'și', typeEn: 'Addition', typeTr: 'Ekleme', typeRo: 'Adăugare', tipEn: 'Connects two clauses or words', tipTr: 'İki cümle veya kelimeyi bağlar', tipRo: 'Conectează două propoziții sau cuvinte' },
    'aber': { en: 'but', tr: 'ama / fakat', ro: 'dar', typeEn: 'Contrast', typeTr: 'Zıtlık', typeRo: 'Contrast', tipEn: 'Expresses contrast or contradiction', tipTr: 'Zıtlık belirtmek için', tipRo: 'Exprimă un contrast sau o contradicție' },
    'oder': { en: 'or', tr: 'veya', ro: 'sau', typeEn: 'Alternative', typeTr: 'Seçenek', typeRo: 'Alternativă', tipEn: 'To choose between two options', tipTr: 'İki seçenek arasında karar vermek için', tipRo: 'Pentru a alege între două opțiuni' },
    'denn': { en: 'because', tr: 'çünkü', ro: 'deoarece / pentru că', typeEn: 'Reason', typeTr: 'Sebep', typeRo: 'Cauză', tipEn: 'Reason - verb in the 2nd position', tipTr: 'Sebep - fiil 2. pozisyondadır', tipRo: 'Cauză - verbul pe poziția a 2-a' },
    'weil': { en: 'because', tr: 'çünkü / -dığı için', ro: 'deoarece / pentru că', typeEn: 'Reason', typeTr: 'Sebep', typeRo: 'Cauză', tipEn: 'Reason - verb moves to the end', tipTr: 'Sebep - fiil cümlenin sonuna gider', tipRo: 'Cauză - verbul se mută la sfârșit' },
    'dass': { en: 'that', tr: 'ki / -dığını', ro: 'că', typeEn: 'Subordinator', typeTr: 'Bağlaç', typeRo: 'Subordonator', tipEn: 'Verb moves to the end of the clause', tipTr: 'Fiil sonda yer alır', tipRo: 'Verbul se mută la sfârșitul propoziției' },
    'dann': { en: 'then / afterwards', tr: 'sonra / o zaman', ro: 'apoi / după aceea', typeEn: 'Temporal Sequence', typeTr: 'Zaman Sırası', typeRo: 'Secvență temporală', tipEn: 'For chronological ordering', tipTr: 'Zaman sıralaması için', tipRo: 'Pentru ordonare cronologică' },
    'danach': { en: 'after that', tr: 'ondan sonra', ro: 'după aceea', typeEn: 'Temporal Sequence', typeTr: 'Zaman Sırası', typeRo: 'Secvență temporală', tipEn: 'At the start of the next sentence', tipTr: 'Bir sonraki cümlenin başında', tipRo: 'La începutul propoziției următoare' },
    'zuerst': { en: 'first / at first', tr: 'ilk önce / ilk olarak', ro: 'mai întâi / în primul rând', typeEn: 'Temporal Sequence', typeTr: 'Zaman Sırası', typeRo: 'Secvență temporală', tipEn: 'At the start of the sentence', tipTr: 'Cümlenin başında', tipRo: 'La începutul propoziției' },
    'am Ende': { en: 'in the end / finally', tr: 'sonunda / en sonunda', ro: 'la sfârșit / în cele din urmă', typeEn: 'Temporal Sequence', typeTr: 'Zaman Sırası', typeRo: 'Secvență temporală', tipEn: 'To finish the sequence', tipTr: 'Sıralamayı bitirmek için', tipRo: 'Pentru a finaliza secvența' },
    'auch': { en: 'also / too', tr: 'de / da / ayrıca', ro: 'de asemenea / și', typeEn: 'Addition', typeTr: 'Ekleme', typeRo: 'Adăugare', tipEn: 'Comes after the verb', tipTr: 'Fiilden sonra gelir', tipRo: 'Vine după verb' },
    'außerdem': { en: 'besides / furthermore', tr: 'bunun yanı sıra / ayrıca', ro: 'în plus / de asemenea', typeEn: 'Addition', typeTr: 'Ekleme', typeRo: 'Adăugare', tipEn: 'At the beginning of the sentence - formal', tipTr: 'Cümlenin başında - resmi', tipRo: 'La începutul propoziției - formal' },
    'trotzdem': { en: 'nevertheless / anyway', tr: 'buna rağmen', ro: 'cu toate acestea / totuși', typeEn: 'Contrast', typeTr: 'Zıtlık', typeRo: 'Contrast', tipEn: 'The verb comes immediately after it', tipTr: 'Fiil hemen arkasından gelir', tipRo: 'Verbul vine imediat după el' },
    'deshalb': { en: 'therefore / that\'s why', tr: 'bu yüzden / bu nedenle', ro: 'de aceea / prin urmare', typeEn: 'Consequence', typeTr: 'Sonuç', typeRo: 'Consecință', tipEn: 'The verb is in the 2nd position', tipTr: 'Fiil 2. sıradadır', tipRo: 'Verbul este pe poziția a 2-a' },
    'manchmal': { en: 'sometimes', tr: 'bazen / ara sıra', ro: 'uneori', typeEn: 'Frequency', typeTr: 'Sıklık', typeRo: 'Frecvență', tipEn: 'Comes at the start of a sentence or after the verb', tipTr: 'Cümlenin başında veya fiilden sonra gelir', tipRo: 'La începutul propoziției sau după verb' },
    'immer': { en: 'always', tr: 'her zaman / daima', ro: 'întotdeauna', typeEn: 'Frequency', typeTr: 'Sıklık', typeRo: 'Frecvență', tipEn: 'Comes after the verb', tipTr: 'Fiilden sonra gelir', tipRo: 'Vine după verb' },
    'oft': { en: 'often', tr: 'sık sık', ro: 'des', typeEn: 'Frequency', typeTr: 'Sıklık', typeRo: 'Frecvență', tipEn: 'Comes after the verb', tipTr: 'Fiilden sonra gelir', tipRo: 'Vine după verb' },
    'nie / niemals': { en: 'never', tr: 'asla / hiçbir zaman', ro: 'niciodată', typeEn: 'Frequency', typeTr: 'Sıklık', typeRo: 'Frecvență', tipEn: 'Complete negation', tipTr: 'Tam olumsuzluk', tipRo: 'Negare completă' },
    'meistens': { en: 'mostly / usually', tr: 'çoğunlukla / genellikle', ro: 'de cele mai multe ori / de obicei', typeEn: 'Frequency', typeTr: 'Sıklık', typeRo: 'Frecvență', tipEn: 'More frequent than \'oft\'', tipTr: '\'oft\' kelimesinden daha sık', tipRo: 'Mai frecvent decât \'oft\'' },
    'besonders': { en: 'especially / particularly', tr: 'özellikle / bilhassa', ro: 'în special / îndeosebi', typeEn: 'Emphasis', typeTr: 'Vurgu', typeRo: 'Accentul', tipEn: 'To emphasize something', tipTr: 'Bir şeyi vurgulamak için', tipRo: 'Pentru a sublinia ceva' }
  };
  const t = trans[c.de];
  if (t) {
    return {
      de: c.de,
      ar: currentLang === 'ro' ? (t.ro || t.en) : currentLang === 'tr' ? t.tr : t.en,
      type: currentLang === 'ro' ? (t.typeRo || t.typeEn) : currentLang === 'tr' ? t.typeTr : t.typeEn,
      example: c.example,
      tip: currentLang === 'ro' ? (t.tipRo || t.tipEn) : currentLang === 'tr' ? t.tipTr : t.tipEn
    };
  }
  return c;
}

function getLocalizedSentenceBuilder(s) {
  if (currentLang === 'ar') return s;
  const categories = {
    'التعريف': { en: 'Introduction', tr: 'Tanıtım', ro: 'Introducere' },
    'المهنة': { en: 'Profession', tr: 'Meslek', ro: 'Profesie' },
    'العائلة': { en: 'Family', tr: 'Aile', ro: 'Familie' },
    'الروتين': { en: 'Routine', tr: 'Rutin', ro: 'Rutină' },
    'التفضيلات': { en: 'Preferences', tr: 'Tercihler', ro: 'Preferințe' },
    'الوصف': { en: 'Description', tr: 'Açıklama', ro: 'Descriere' },
    'الصحة': { en: 'Health', tr: 'Sağlık', ro: 'Sănătate' },
    'الرأي': { en: 'Opinion', tr: 'Fikir', ro: 'Opinie' },
    'الوقت': { en: 'Time / Duration', tr: 'Zaman / Süre', ro: 'Timp / Durată' },
    'الرسائل': { en: 'Letters / Emails', tr: 'Mektuplar / E-postalar', ro: 'Scrisori / E-mailuri' }
  };
  const meanings = {
    'اسمي ___': { en: 'My name is ___', tr: 'Benim adım ___', ro: 'Numele meu este ___' },
    'عمري ___ سنة': { en: 'I am ___ years old', tr: '___ yaşındayım', ro: 'Am ___ ani' },
    'أنا من ___': { en: 'I come from ___', tr: '___-den/dan geliyorum', ro: 'Vin din ___' },
    'أسكن في ___ منذ ___ سنوات': { en: 'I live in ___ since ___ years', tr: '___ yıldır ___\'de yaşıyorum', ro: 'Locuiesc în ___ de ___ ani' },
    'مهنتي ___': { en: 'My profession is ___', tr: 'Mesleğim ___', ro: 'Profesia mea este ___' },
    'أعمل في ___': { en: 'I work at ___', tr: '___\'de çalışıyorum', ro: 'Lucrez la ___' },
    'عائلتي ___': { en: 'My family is ___', tr: 'Ailem ___', ro: 'Familia mea este ___' },
    'اسم ___ هو ___': { en: 'My ___\'s name is ___', tr: '___ adım ___', ro: 'Numele ___ meu este ___' },
    'لدي ___ أطفال / إخوة': { en: 'I have ___ children / siblings', tr: '___ çocuğum / kardeşim var', ro: 'Am ___ copii / frați' },
    'أستيقظ في الساعة ___': { en: 'I wake up at ___ o\'clock', tr: 'Saat ___\'da uyanıyorum', ro: 'Mă trezesc la ora ___' },
    'في الساعة ___ أنا ___': { en: 'At ___ o\'clock I ___', tr: 'Saat ___\'da ___ yapıyorum', ro: 'La ora ___ eu ___' },
    'نحو الساعة ___ أنام': { en: 'Around ___ o\'clock I go to sleep', tr: 'Saat ___ civarında uyuyorum', ro: 'În jur de ora ___ mă culc' },
    'أحب أن ___': { en: 'I like to ___', tr: '___ yapmayı severim', ro: 'Îmi place să ___' },
    'طعامي المفضل هو ___': { en: 'My favorite food is ___', tr: 'En sevdiğim yemek ___', ro: 'Mâncarea mea preferată este ___' },
    '___ يعجبني لأن ___': { en: 'I like ___ because ___', tr: '___ hoşuma gidiyor çünkü ___', ro: 'Îmi place ___ pentru că ___' },
    'في شقتي يوجد ___': { en: 'In my apartment there is/are ___', tr: 'Dairemde ___ var', ro: 'În apartamentul meu există ___' },
    'المدينة بها ___ ساكن': { en: 'The city has ___ inhabitants', tr: 'Şehir ___ nüfusa sahip', ro: 'Orașul are ___ locuitori' },
    'يوجد ___ في ___': { en: 'There is/are ___ in ___', tr: '___\'de ___ var', ro: 'Există ___ în ___' },
    'عندي ألم في ___': { en: 'I have pain in ___', tr: '___ ağrım var', ro: 'Am dureri de ___' },
    'أشعر بـ ___': { en: 'I feel ___', tr: '___ hissediyorum', ro: 'Mă simt ___' },
    'عندي حمى. ___ درجة': { en: 'I have a fever. ___ degrees', tr: 'Ateşim var. ___ derece', ro: 'Am febră. ___ grade' },
    'أجد ___ ___': { en: 'I find ___ very ___', tr: '___\'yi çok ___ buluyorum', ro: 'Găsesc ___ ___' },
    'أنا سعيد لأن ___': { en: 'I am glad that ___', tr: '___ olduğu için mutluyum', ro: 'Mă bucur că ___' },
    'هدفي هو ___': { en: 'My goal is to ___', tr: 'Hedefim ___', ro: 'Scopul meu este să ___' },
    'أتعلم الألمانية منذ ___': { en: 'I have been learning German since ___', tr: '___ süredir Almanca öğreniyorum', ro: 'Învăț germana de ___' },
    'في عطلة الأسبوع ___': { en: 'On weekends ___', tr: 'Hafta sonu ___', ro: 'În weekend ___' }, // corrected typo
    'كل ___ أنا ___': { en: 'Every ___ I ___', tr: 'Her ___ ___ yapıyorum', ro: 'În fiecare ___ eu ___' },
    'حضرة ___, (رسمي)': { en: 'Dear Mr./Mrs. ___ (formal)', tr: 'Sayın ___ (resmi)', ro: 'Stimate Domnule/Stimată Doamnă ___ (formal)' },
    'أكتب إليك بخصوص ___': { en: 'I am writing to you regarding ___', tr: 'Size ___ hakkında yazıyorum', ro: 'Vă scriu cu privire la ___' },
    'مع أطيب التحيات, ___': { en: 'With best regards, ___', tr: 'Saygılarımla, ___', ro: 'Cu stimă / Cu cele mai bune urări, ___' }
  };
  const cat = (categories[s.category] && categories[s.category][currentLang]) || (categories[s.category] && categories[s.category]['en']) || s.category;
  const m = (meanings[s.meaning] && meanings[s.meaning][currentLang]) || (meanings[s.meaning] && meanings[s.meaning]['en']) || s.meaning;
  return {
    pattern: s.pattern,
    meaning: m,
    example: s.example,
    category: cat
  };
}

function getLocalizedWritingTopic(topic) {
  if (!topic) return null;
  const lang = currentLang;
  if (lang === 'ar') {
    return {
      ...topic,
      titleLocal: topic.titleAr,
      typeLocal: topic.typeAr,
      descriptionLocal: topic.description,
      keyVocabulary: topic.keyVocabulary.map(v => ({ de: v.de, meaning: v.ar })),
      usefulPhrases: topic.usefulPhrases.map(p => ({ de: p.de, meaning: p.ar })),
      grammarFocusLocal: topic.grammarFocus,
      structureLocal: topic.structure.map(s => ({ step: s.step, tip: s.tip, icon: s.icon, examples: s.examples })),
      exampleEssayLocalTranslation: topic.exampleEssay.translation,
      writingTipsLocal: topic.writingTips,
      selfCheckListLocal: topic.selfCheckList
    };
  }
  const trans = WRITING_TRANSLATIONS[lang]?.[topic.id] || {};
  return {
    ...topic,
    titleLocal: trans.title || topic.titleAr,
    typeLocal: trans.type || topic.typeAr,
    descriptionLocal: trans.description || topic.description,
    keyVocabulary: topic.keyVocabulary.map((v, idx) => ({
      de: v.de,
      meaning: trans.keyVocabulary?.[idx] || v.ar
    })),
    usefulPhrases: topic.usefulPhrases.map((p, idx) => ({
      de: p.de,
      meaning: trans.usefulPhrases?.[idx] || p.ar
    })),
    grammarFocusLocal: trans.grammarFocus || topic.grammarFocus,
    structureLocal: topic.structure.map((s, idx) => ({
      step: trans.structure?.[idx]?.step || s.step,
      tip: trans.structure?.[idx]?.tip || s.tip,
      icon: s.icon,
      examples: s.examples
    })),
    exampleEssayLocalTranslation: trans.exampleEssayTranslation || topic.exampleEssay.translation,
    writingTipsLocal: trans.writingTips || topic.writingTips,
    selfCheckListLocal: trans.selfCheckList || topic.selfCheckList
  };
}

// ── Build Writing Hub Page ─────────────────────────────────────
function buildWritingPage() {
  const container = document.getElementById('page-writing');
  if (!container) return;

  const saved = getSavedProgress();
  const savedWritings = saved.writings || {};

  container.innerHTML = `
    <div class="page-header">
      <div class="page-title-area">
        <h1 class="page-title">${getTranslation('writing_title', '✍️ كتابة المواضيع - Aufsatz-Training')}</h1>
        <p class="page-subtitle">${getTranslation('writing_subtitle', '15 موضوعاً متكاملاً لتطوير مهارة الكتابة بالألمانية A1')}</p>
      </div>
      <button class="btn btn-ghost" onclick="showSentenceBuilderModal()">${getTranslation('nav_sentences', '📐 جُمل مساعدة')}</button>
    </div>

    <!-- Writing Stats -->
    <div class="writing-stats-grid">
      <div class="stat-card">
        <div class="stat-icon">✍️</div>
        <div class="stat-info">
          <span class="stat-value">${Object.keys(savedWritings).length}</span>
          <span class="stat-label">${getTranslation('stat_topics_written', 'مواضيع كتبتها')}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-info">
          <span class="stat-value">${WRITING_TOPICS.length}</span>
          <span class="stat-label">${getTranslation('stat_topics_available', 'مواضيع متاحة')}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🎯</div>
        <div class="stat-info">
          <span class="stat-value">${Object.values(savedWritings).reduce((a,w) => a + (w.wordCount || 0), 0)}</span>
          <span class="stat-label">${getTranslation('stat_words_written', 'كلمات كتبتها')}</span>
        </div>
      </div>
    </div>

    <!-- Quick Tools -->
    <div style="display:flex;gap:12px;margin-bottom:28px;flex-wrap:wrap">
      <button class="btn btn-ghost" onclick="showConnectorsPanel()">${getTranslation('btn_connectors', '🔗 كلمات الربط')}</button>
      <button class="btn btn-ghost" onclick="showSentenceBuilderModal()">${getTranslation('btn_sentence_patterns', '📐 أنماط الجمل')}</button>
      <button class="btn btn-ghost" onclick="showWritingGuide()">${getTranslation('btn_writing_guide', '📖 دليل الكتابة')}</button>
    </div>

    <div class="section-title-row" style="margin-bottom:20px">
      <h2 class="section-title">${getTranslation('header_choose_topic', 'اختر موضوعاً للكتابة')}</h2>
      <span class="section-sub">${getTranslation('sub_easy_to_hard', 'من الأسهل للأصعب')}</span>
    </div>

    <!-- Topics Grid -->
    <div class="writing-topics-grid">
      ${WRITING_TOPICS.map(topic => {
        const localTopic = getLocalizedWritingTopic(topic);
        const hasSaved = savedWritings[topic.id];
        const savedWords = hasSaved ? savedWritings[topic.id].wordCount || 0 : 0;
        return `
        <div class="chapter-card" onclick="openWritingTopic(${topic.id})" style="border-top:3px solid var(--accent-primary)">
          <div style="font-size:32px;margin-bottom:8px">${topic.emoji}</div>
          <div class="chapter-title-de">${topic.title}</div>
          <div class="chapter-title-ar">${localTopic.titleLocal}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
            <span class="topic-tag">${localTopic.typeLocal}</span>
            <span class="topic-tag">${getTranslation('chapter_label', 'وحدة')} ${topic.relatedChapter}</span>
            <span class="topic-tag">${topic.targetLength.min}-${topic.targetLength.max} ${getTranslation('words_count', 'كلمة')}</span>
          </div>
          <div style="font-size:12px;color:var(--text-muted)">${localTopic.descriptionLocal.slice(0,60)}...</div>
          ${hasSaved ? `<div style="margin-top:10px;padding:6px 10px;background:rgba(52,211,153,0.1);border-radius:6px;font-size:12px;color:var(--accent-success)">✓ ${getTranslation('label_saved', 'تم الحفظ')} | ${savedWords} ${getTranslation('words_count', 'كلمة')}</div>` : ''}
        </div>`;
      }).join('')}
    </div>

    <!-- Writing Guide Panels (hidden by default) -->
    <div id="connectorsPanel" style="display:none;margin-bottom:24px">
      <div class="lesson-text-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:20px">${getTranslation('btn_connectors', '🔗 كلمات الربط')} - Konnektoren</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">
          ${CONNECTORS.map(c => {
            const lc = getLocalizedConnector(c);
            return `
            <div style="padding:12px;background:rgba(255,255,255,0.03);border:var(--border-subtle);border-radius:10px">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                <span style="font-size:18px;font-weight:700;color:var(--text-german);font-family:'Inter',sans-serif">${lc.de}</span>
                <span style="font-size:10px;padding:2px 8px;border-radius:20px;background:rgba(79,142,247,0.15);color:var(--accent-primary)">${lc.type}</span>
              </div>
              <div style="font-size:14px;color:var(--text-arabic);margin-bottom:6px">${lc.ar}</div>
              <div style="font-size:12px;color:var(--text-muted);font-family:'Inter',sans-serif;font-style:italic">${lc.example}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:4px">💡 ${lc.tip}</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div id="sentenceBuilderPanel" style="display:none;margin-bottom:24px">
      <div class="lesson-text-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:20px">${getTranslation('btn_sentence_patterns', '📐 أنماط الجمل')}</h3>
        ${(() => {
          if (currentLang === 'ar') {
            return ['التعريف','المهنة','العائلة','الروتين','التفضيلات','الوصف','الصحة','الرأي','الوقت','الرسائل'];
          } else if (currentLang === 'tr') {
            return ['Tanıtım','Meslek','Aile','Rutin','Tercihler','Açıklama','Sağlık','Fikir','Zaman / Süre','Mektuplar / E-postalar'];
          } else if (currentLang === 'ro') {
            return ['Introducere','Profesie','Familie','Rutină','Preferințe','Descriere','Sănătate','Opinie','Timp / Durată','Scrisori / E-mailuri'];
          } else {
            return ['Introduction','Profession','Family','Routine','Preferences','Description','Health','Opinion','Time / Duration','Letters / Emails'];
          }
        })().map(cat => {
          // get original category name based on language
          const origCats = {
            'Introduction': 'التعريف', 'Profession': 'المهنة', 'Family': 'العائلة', 'Routine': 'الروتين',
            'Preferences': 'التفضيلات', 'Description': 'الوصف', 'Health': 'الصحة', 'Opinion': 'الرأي',
            'Time / Duration': 'الوقت', 'Letters / Emails': 'الرسائل',
            'Tanıtım': 'التعريف', 'Meslek': 'المهنة', 'Aile': 'العائلة', 'Rutin': 'الروتين',
            'Tercihler': 'التفضيلات', 'Açıklama': 'الوصف', 'Sağlık': 'الصحة', 'Fikir': 'الرأي',
            'Zaman / Süre': 'الوقت', 'Mektuplar / E-postalar': 'الرسائل',
            'Introducere': 'التعريف', 'Profesie': 'المهنة', 'Familie': 'العائلة', 'Rutină': 'الروتين',
            'Preferințe': 'التفضيلات', 'Descriere': 'الوصف', 'Sănătate': 'الصحة', 'Opinie': 'الرأي',
            'Timp / Durată': 'الوقت', 'Scrisori / E-mailuri': 'الرسائل'
          };
          const matchCat = currentLang === 'ar' ? cat : (origCats[cat] || cat);
          const filtered = SENTENCE_BUILDERS.filter(s => s.category === matchCat);
          if (filtered.length === 0) return '';
          
          return `
          <div style="margin-bottom:20px">
            <div style="font-size:14px;font-weight:700;color:var(--accent-primary);margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,0.07)">${cat}</div>
            ${filtered.map(s => {
              const ls = getLocalizedSentenceBuilder(s);
              return `
              <div style="padding:10px 14px;background:rgba(255,255,255,0.03);border-radius:8px;margin-bottom:6px;cursor:pointer" onclick="speakGerman('${s.example.replace(/'/g, "\\'")}')">
                <div style="font-size:15px;font-weight:600;color:var(--text-german);font-family:'Inter',sans-serif;margin-bottom:4px">${ls.pattern} <button class="tts-btn" style="font-size:11px">🔊</button></div>
                <div style="font-size:13px;color:var(--text-arabic);margin-bottom:4px">${ls.meaning}</div>
                <div style="font-size:12px;color:var(--text-muted);font-family:'Inter',sans-serif;font-style:italic">${ls.example}</div>
              </div>`;
            }).join('')}
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ── Toggle Panels ─────────────────────────────────────────────
function showConnectorsPanel() {
  const p = document.getElementById('connectorsPanel');
  const s = document.getElementById('sentenceBuilderPanel');
  if (p) { p.style.display = p.style.display === 'none' ? 'block' : 'none'; }
  if (s) s.style.display = 'none';
  if (p && p.style.display !== 'none') p.scrollIntoView({ behavior: 'smooth' });
}

function showSentenceBuilderModal() {
  const p = document.getElementById('sentenceBuilderPanel');
  const c = document.getElementById('connectorsPanel');
  if (p) { p.style.display = p.style.display === 'none' ? 'block' : 'none'; }
  if (c) c.style.display = 'none';
  if (p && p.style.display !== 'none') p.scrollIntoView({ behavior: 'smooth' });
}

function showWritingGuide() {
  showToast(getTranslation('toast_writing_example', '💡 انظر إلى قسم "دليل الكتابة" في كل موضوع عند فتحه!'), 'info');
}

// ── Open Writing Topic ─────────────────────────────────────────
function openWritingTopic(id) {
  const topic = WRITING_TOPICS.find(t => t.id === id);
  if (!topic) return;
  currentWritingTopic = topic;

  const localTopic = getLocalizedWritingTopic(topic);
  const container = document.getElementById('page-writing');
  if (!container) return;

  const saved = getSavedProgress();
  const savedText = saved.writings?.[id]?.text || '';
  const savedWords = saved.writings?.[id]?.wordCount || 0;

  container.innerHTML = `
    <!-- Back Button -->
    <div class="page-header">
      <button class="btn btn-ghost back-btn" onclick="buildWritingPage()">← ${getTranslation('btn_back_to_topics', 'العودة للمواضيع')}</button>
      <div class="page-title-area">
        <h1 class="page-title">${topic.emoji} ${topic.title}</h1>
        <p class="page-subtitle">${localTopic.titleLocal} · ${localTopic.typeLocal}</p>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="topic-tag">${topic.targetLength.min}-${topic.targetLength.max} ${getTranslation('words_count', 'كلمة')}</span>
        <span class="topic-tag">${getTranslation('chapter_label', 'وحدة')} ${topic.relatedChapter}</span>
      </div>
    </div>

    <div class="writing-workspace-grid">
      <!-- LEFT: Guide Panel -->
      <div>
        <!-- Can-do -->
        <div style="background:rgba(79,142,247,0.08);border:1px solid rgba(79,142,247,0.2);border-radius:var(--radius-lg);padding:18px;margin-bottom:16px">
          <div style="font-size:12px;color:var(--accent-primary);font-weight:700;margin-bottom:8px">🎯 ${getTranslation('header_what_learn', 'ماذا ستتعلم')}</div>
          <div style="font-size:14px;color:var(--text-primary);line-height:1.6">${localTopic.descriptionLocal}</div>
        </div>

        <!-- Structure Steps -->
        <div style="background:var(--bg-card);border:var(--border-subtle);border-radius:var(--radius-lg);padding:20px;margin-bottom:16px">
          <h3 style="font-size:15px;font-weight:700;margin-bottom:16px;color:var(--accent-primary)">📋 ${getTranslation('header_step_by_step', 'هيكل الموضوع خطوة بخطوة')}</h3>
          ${localTopic.structureLocal.map(step => `
            <div style="margin-bottom:16px">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
                <span style="font-size:18px">${step.icon}</span>
                <span style="font-size:14px;font-weight:700;color:var(--text-primary)">${step.step}</span>
              </div>
              <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">💡 ${step.tip}</div>
              ${step.examples.map(ex => `
                <div style="padding:6px 12px;background:rgba(255,255,255,0.03);border-right:2px solid var(--accent-primary);border-radius:4px;margin-bottom:4px;font-size:13px;color:var(--text-german);font-family:'Inter',sans-serif;cursor:pointer" onclick="speakGerman('${ex.replace(/'/g,"\\'")}')">
                  ${ex} <span style="font-size:11px;opacity:0.5">🔊</span>
                </div>`).join('')}
            </div>`).join('')}
        </div>

        <!-- Key Vocabulary -->
        <div style="background:var(--bg-card);border:var(--border-subtle);border-radius:var(--radius-lg);padding:20px;margin-bottom:16px">
          <h3 style="font-size:15px;font-weight:700;margin-bottom:14px;color:var(--accent-primary)">📚 ${getTranslation('header_key_vocab', 'المفردات الأساسية')}</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            ${localTopic.keyVocabulary.map(v => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:rgba(255,255,255,0.03);border-radius:8px;cursor:pointer" onclick="speakGerman('${v.de.replace(/'/g,"\\'")}')">
                <span style="font-size:14px;font-weight:600;color:var(--text-german);font-family:'Inter',sans-serif">${v.de}</span>
                <span style="font-size:13px;color:var(--text-arabic)">${v.meaning}</span>
              </div>`).join('')}
          </div>
        </div>

        <!-- Useful Phrases -->
        <div style="background:var(--bg-card);border:var(--border-subtle);border-radius:var(--radius-lg);padding:20px;margin-bottom:16px">
          <h3 style="font-size:15px;font-weight:700;margin-bottom:14px;color:var(--accent-primary)">💬 ${getTranslation('header_useful_phrases', 'عبارات مفيدة')}</h3>
          ${localTopic.usefulPhrases.map(p => `
            <div style="margin-bottom:10px;padding:10px 14px;background:rgba(255,255,255,0.03);border-radius:8px;cursor:pointer" onclick="insertToWritingArea('${p.de.replace(/'/g,"\\'")} ')">
              <div style="font-size:14px;font-weight:600;color:var(--text-german);font-family:'Inter',sans-serif;margin-bottom:3px">${p.de}</div>
              <div style="font-size:12px;color:var(--text-arabic)">${p.meaning}</div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:3px">${getTranslation('click_to_add', 'انقر لإضافتها')}</div>
            </div>`).join('')}
        </div>

        <!-- Grammar Focus -->
        <div style="background:var(--bg-card);border:var(--border-subtle);border-radius:var(--radius-lg);padding:20px">
          <h3 style="font-size:15px;font-weight:700;margin-bottom:14px;color:var(--accent-primary)">📐 ${getTranslation('header_grammar_focus', 'القواعد المهمة')}</h3>
          ${localTopic.grammarFocusLocal.map(g => `
            <div style="padding:8px 14px;border-right:2px solid var(--accent-secondary);background:rgba(124,92,191,0.06);border-radius:6px;margin-bottom:8px;font-size:13px;color:var(--text-secondary)">${g}</div>`).join('')}
        </div>
      </div>

      <!-- RIGHT: Writing Area -->
      <div>
        <!-- Writing Toolbar -->
        <div style="background:var(--bg-card);border:var(--border-subtle);border-radius:var(--radius-lg);padding:20px;margin-bottom:16px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
            <h3 style="font-size:16px;font-weight:700">✏️ ${getTranslation('header_write_here', 'اكتب موضوعك هنا')}</h3>
            <div style="display:flex;gap:8px">
              <button class="tts-btn" onclick="readWritingAloud()">🔊 ${getTranslation('btn_read_aloud', 'اقرأ')}</button>
              <button class="tts-btn" onclick="clearWriting()">🗑️ ${getTranslation('btn_clear', 'مسح')}</button>
            </div>
          </div>

          <!-- Word bank chips -->
          <div style="margin-bottom:12px">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${getTranslation('label_click_insert_word', 'انقر لإدراج كلمة:')}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px">
              ${localTopic.usefulPhrases.slice(0, 5).map(p => `
                <span class="word-helper-chip" onclick="insertToWritingArea('${p.de.replace(/'/g,"\\'")} ')">${p.de.split('...')[0].trim()}</span>`).join('')}
              ${CONNECTORS.slice(0, 6).map(c => {
                const lc = getLocalizedConnector(c);
                return `<span class="word-helper-chip" style="background:rgba(52,211,153,0.1);border-color:rgba(52,211,153,0.2);color:var(--accent-success)" onclick="insertToWritingArea('${c.de} ')">${c.de} (${lc.ar})</span>`;
              }).join('')}
            </div>
          </div>

          <textarea
            id="writingTextArea"
            class="writing-area"
            style="min-height:250px;font-size:16px;line-height:1.8"
            placeholder="${getTranslation('writing_placeholder', 'اكتب هنا بالألمانية...')}"
            dir="ltr"
            oninput="updateMainWritingCount()"
          >${savedText}</textarea>

          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;flex-wrap:wrap;gap:10px">
            <div style="display:flex;align-items:center;gap:16px">
              <span id="writingWordCount" style="font-size:13px;color:var(--text-secondary)">0 ${getTranslation('words_count', 'كلمات')}</span>
              <span style="font-size:12px;color:var(--text-muted)">(${getTranslation('label_target', 'الهدف')}: ${topic.targetLength.min}-${topic.targetLength.max} ${getTranslation('words_count', 'كلمة')})</span>
            </div>
            <div style="display:flex;gap:8px">
              <button class="btn btn-ghost" onclick="showExampleEssay()">${getTranslation('btn_show_example', '💡 أظهر مثالاً')}</button>
              <button class="btn btn-primary" onclick="saveAndCheckWriting()">${getTranslation('btn_save_check', '💾 احفظ وتحقق')}</button>
            </div>
          </div>

          <!-- Progress Bar for word count -->
          <div style="margin-top:10px">
            <div style="height:4px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden">
              <div id="writingProgressBar" style="height:100%;background:var(--gradient-accent);border-radius:4px;transition:width 0.3s;width:0%"></div>
            </div>
          </div>
        </div>

        <!-- Feedback Area -->
        <div id="writingFeedbackArea" style="display:none;background:var(--bg-card);border:var(--border-subtle);border-radius:var(--radius-lg);padding:20px;margin-bottom:16px">
          <!-- feedback injected here -->
        </div>

        <!-- Self Checklist -->
        <div style="background:var(--bg-card);border:var(--border-subtle);border-radius:var(--radius-lg);padding:20px;margin-bottom:16px">
          <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">✅ ${getTranslation('header_self_checklist', 'قائمة المراجعة الذاتية')}</h3>
          ${localTopic.selfCheckListLocal.map((item, i) => `
            <label style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.04)">
              <input type="checkbox" id="check_${i}" style="margin-top:2px;width:16px;height:16px;accent-color:var(--accent-success);flex-shrink:0" />
              <span style="font-size:13px;color:var(--text-secondary)">${item}</span>
            </label>`).join('')}
        </div>

        <!-- Writing Tips -->
        <div style="background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.2);border-radius:var(--radius-lg);padding:20px;margin-bottom:16px">
          <h3 style="font-size:15px;font-weight:700;margin-bottom:12px;color:var(--accent-gold)">💡 ${getTranslation('header_writing_tips', 'نصائح الكتابة')}</h3>
          ${localTopic.writingTipsLocal.map(tip => `
            <div style="display:flex;gap:8px;margin-bottom:8px">
              <span style="color:var(--accent-gold)">→</span>
              <span style="font-size:13px;color:var(--text-secondary)">${tip}</span>
            </div>`).join('')}
        </div>

        <!-- Example Essay (hidden) -->
        <div id="exampleEssaySection" style="display:none;background:var(--bg-card);border:1px solid rgba(52,211,153,0.2);border-radius:var(--radius-lg);padding:20px">
          <h3 style="font-size:15px;font-weight:700;margin-bottom:12px;color:var(--accent-success)">📝 ${getTranslation('header_example_essay', 'موضوع نموذجي')} (${topic.exampleEssay.wordCount} ${getTranslation('words_count', 'كلمة')})</h3>
          <div style="background:rgba(52,211,153,0.05);border-radius:10px;padding:16px;margin-bottom:16px">
            <div style="font-size:15px;color:var(--text-primary);font-family:'Inter',sans-serif;line-height:1.8;white-space:pre-line">${topic.exampleEssay.text}</div>
          </div>
          <div style="font-size:13px;color:var(--text-arabic);line-height:1.8;white-space:pre-line;border-top:var(--border-subtle);padding-top:14px">${localTopic.exampleEssayLocalTranslation}</div>
          <div style="margin-top:12px;display:flex;gap:8px">
            <button class="tts-btn" onclick="speakGerman(\`${topic.exampleEssay.text.replace(/`/g, "'")}\`)">🔊 ${getTranslation('btn_listen_example', 'استمع للمثال')}</button>
            <button class="btn btn-ghost" style="font-size:12px;padding:6px 12px" onclick="useExampleAsTemplate()">📋 ${getTranslation('btn_use_template', 'استخدم كقالب')}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Update word count on load
  updateMainWritingCount();
}

// ── Writing Area Functions ─────────────────────────────────────
function insertToWritingArea(text) {
  const ta = document.getElementById('writingTextArea');
  if (!ta) return;
  const pos = ta.selectionStart || ta.value.length;
  ta.value = ta.value.slice(0, pos) + text + ta.value.slice(pos);
  ta.focus();
  ta.selectionStart = ta.selectionEnd = pos + text.length;
  updateMainWritingCount();
}

function updateMainWritingCount() {
  const ta = document.getElementById('writingTextArea');
  const countEl = document.getElementById('writingWordCount');
  const bar = document.getElementById('writingProgressBar');
  if (!ta || !currentWritingTopic) return;

  const words = ta.value.trim().split(/\s+/).filter(w => w.length > 0).length;
  if (countEl) countEl.textContent = words + ' ' + getTranslation('words_count', 'كلمات');

  const { min, max } = currentWritingTopic.targetLength;
  const pct = Math.min(100, (words / max) * 100);
  if (bar) {
    bar.style.width = pct + '%';
    bar.style.background = words >= min ? 'var(--gradient-success)' : 'var(--gradient-accent)';
  }
}

function clearWriting() {
  const ta = document.getElementById('writingTextArea');
  if (ta && confirm(getTranslation('confirm_clear', 'هل تريد مسح النص؟'))) {
    ta.value = '';
    updateMainWritingCount();
  }
}

function readWritingAloud() {
  const ta = document.getElementById('writingTextArea');
  if (ta && ta.value.trim()) {
    speakGerman(ta.value);
  } else {
    showToast(getTranslation('toast_write_first', 'اكتب شيئاً أولاً!'), 'warning');
  }
}

function showExampleEssay() {
  const sec = document.getElementById('exampleEssaySection');
  if (sec) {
    sec.style.display = sec.style.display === 'none' ? 'block' : 'none';
    if (sec.style.display !== 'none') sec.scrollIntoView({ behavior: 'smooth' });
  }
}

function useExampleAsTemplate() {
  const ta = document.getElementById('writingTextArea');
  if (!ta || !currentWritingTopic) return;
  if (!ta.value.trim() || confirm(getTranslation('confirm_replace_template', 'سيتم استبدال نصك بالقالب. هل تريد المتابعة؟'))) {
    ta.value = currentWritingTopic.exampleEssay.text;
    updateMainWritingCount();
    showToast(getTranslation('toast_template_copied', 'تم نسخ المثال. عدّله بمعلوماتك الشخصية!'), 'info');
  }
}

function saveAndCheckWriting() {
  const ta = document.getElementById('writingTextArea');
  const fbArea = document.getElementById('writingFeedbackArea');
  if (!ta || !currentWritingTopic) return;

  const text = ta.value.trim();
  const words = text.split(/\s+/).filter(w => w.length > 0).length;
  const { min, max } = currentWritingTopic.targetLength;

  // Save to localStorage
  const progress = getSavedProgress();
  if (!progress.writings) progress.writings = {};
  progress.writings[currentWritingTopic.id] = { text, wordCount: words, savedAt: new Date().toISOString() };
  saveProgress(progress);
  addScore(30);

  // Generate feedback
  const tips = [];
  const positives = [];

  if (words < 5) {
    fbArea.innerHTML = `<div class="feedback-bar wrong">${getTranslation('toast_too_short', '❌ الموضوع قصير جداً. اكتب على الأقل {count} كلمة.').replace('{count}', min)}</div>`;
    fbArea.style.display = 'block';
    return;
  }
  if (words >= min) positives.push(getTranslation('feedback_length_suitable', '✅ طول الموضوع مناسب: {count} كلمات').replace('{count}', words));
  if (words < min) tips.push(getTranslation('feedback_length_short', '📏 اكتب أكثر - الهدف {min} كلمة على الأقل (لديك {count})').replace('{min}', min).replace('{count}', words));
  if (!text.match(/[.!?]/)) tips.push(getTranslation('feedback_no_periods', '📌 لا تنسَ النقاط في نهاية الجمل'));
  if (!text.match(/^[A-ZÄÖÜ]/)) tips.push(getTranslation('feedback_start_capital', '🔠 ابدأ بحرف كبير'));
  if (!text.includes('Ich')) tips.push(getTranslation('feedback_no_ich', '👤 يبدو أن "Ich" غير موجود - تذكر الكتابة عن نفسك'));

  // Check for useful phrases
  const foundPhrases = currentWritingTopic.usefulPhrases.filter(p =>
    text.toLowerCase().includes(p.de.toLowerCase().split('...')[0].split('_')[0].trim().toLowerCase())
  );
  if (foundPhrases.length > 0) positives.push(getTranslation('feedback_phrases_count', '✅ استخدمت {count} عبارات مفيدة').replace('{count}', foundPhrases.length));

  // Check connectors
  const foundConnectors = CONNECTORS.filter(c => text.toLowerCase().includes(' ' + c.de.toLowerCase() + ' '));
  if (foundConnectors.length > 0) positives.push(getTranslation('feedback_connectors_count', '✅ استخدمت كلمات ربط: {connectors}').replace('{connectors}', foundConnectors.map(c=>c.de).join(', ')));
  else tips.push(getTranslation('feedback_no_connectors', '🔗 أضف كلمات ربط مثل: und, aber, dann, weil'));

  const score = Math.round((positives.length / (positives.length + tips.length + 1)) * 100);

  const gradeMsg = score >= 80 
    ? getTranslation('grade_excellent', '🏆 ممتاز!') 
    : score >= 60 
      ? getTranslation('grade_good', '👍 جيد جداً!') 
      : getTranslation('grade_improve', '💪 استمر في التحسين!');

  fbArea.innerHTML = `
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px;color:${score >= 60 ? 'var(--accent-success)' : 'var(--accent-warning)'}">
      ${gradeMsg} (${score}%)
    </h3>
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:12px">${getTranslation('label_saved', 'تم الحفظ ✓')} | ${words} ${getTranslation('words_count', 'كلمة')}</div>
    ${positives.map(p => `<div style="padding:8px 12px;background:rgba(52,211,153,0.1);border-radius:8px;font-size:13px;color:var(--accent-success);margin-bottom:6px">${p}</div>`).join('')}
    ${tips.map(t => `<div style="padding:8px 12px;background:rgba(251,191,36,0.1);border-radius:8px;font-size:13px;color:var(--accent-warning);margin-bottom:6px">${t}</div>`).join('')}
    <div style="margin-top:12px;padding:10px 14px;background:rgba(79,142,247,0.08);border-radius:8px;font-size:13px;color:var(--text-secondary)">
      💡 <strong>${getTranslation('label_next_checklist', 'التالي: راجع القائمة الذاتية للتأكد من اكتمال الموضوع')}</strong>
    </div>`;
  fbArea.style.display = 'block';
  fbArea.scrollIntoView({ behavior: 'smooth' });
  showToast(getTranslation('toast_saved_points', 'تم الحفظ! 💾 +30 نقطة'), 'success');
}
