// ============================================================
// CONVERSATION SIMULATOR - ممارسة المحادثة التفاعلية
// Berliner Platz 1 Neu A1 - 12 Dialogue Scenarios
// ============================================================

const CONVERSATION_SCENARIOS = [
  // ── CHAPTER 1: Sich vorstellen ──────────────────────────────
  {
    id: 1,
    ch: 1,
    title: "Sich vorstellen",
    titleAr: "التعريف بالنفس",
    emoji: "👤",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Ich bin Anna. Wie heißt du?", textAr: "مرحباً! أنا آنا. ما اسمك؟" },
      {
        speaker: "user",
        prompt: "عرّف بنفسك وقل اسمك للشريك",
        options: [
          { textDe: "Hallo Anna! Ich heiße Ahmad.", textAr: "مرحباً آنا! اسمي أحمد.", points: 10 },
          { textDe: "Guten Tag! Mein Name ist Ahmad.", textAr: "نهارك سعيد! اسمي أحمد.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Freut mich, Ahmad! Woher kommst du?", textAr: "سررت بلقائك يا أحمد! من أين أنت؟" },
      {
        speaker: "user",
        prompt: "أخبر الشريك ببلدك الأصلي",
        options: [
          { textDe: "Ich komme aus Syrien.", textAr: "أنا من سوريا.", points: 10 },
          { textDe: "Ich komme aus Ägypten.", textAr: "أنا من مصر.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Ah, schön! Und wo wohnst du jetzt?", textAr: "آه، جميل! وأين تسكن الآن؟" },
      {
        speaker: "user",
        prompt: "أخبر الشريك بمدينتك الحالية",
        options: [
          { textDe: "Ich wohne jetzt in Berlin.", textAr: "أنا أسكن الآن في برلين.", points: 10 },
          { textDe: "Ich wohne jetzt in München.", textAr: "أنا أسكن الآن في ميونيخ.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Berlin ist toll! Welche Sprachen sprichst du?", textAr: "برلين رائعة! ما اللغات التي تتحدثها؟" },
      {
        speaker: "user",
        prompt: "اذكر اللغات التي تتحدثها",
        options: [
          { textDe: "Ich spreche Arabisch und ein bisschen Deutsch.", textAr: "أتحدث العربية وقليلاً من الألمانية.", points: 15 },
          { textDe: "Meine Muttersprache ist Arabisch. Ich lerne jetzt Deutsch.", textAr: "لغتي الأم هي العربية. وأتعلم الألمانية الآن.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Sehr gut! Auf Wiedersehen, Ahmad!", textAr: "ممتاز! مع السلامة يا أحمد!" },
      {
        speaker: "user",
        prompt: "ودّع الشريك بطريقة مناسبة",
        options: [
          { textDe: "Auf Wiedersehen, Anna! Tschüss!", textAr: "إلى اللقاء آنا! مع السلامة!", points: 10 },
          { textDe: "Tschüss! Bis bald!", textAr: "مع السلامة! نلتقي قريباً!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 2: Wie geht's? ──────────────────────────────────
  {
    id: 2,
    ch: 2,
    title: "Ein Treffen im Café",
    titleAr: "لقاء في المقهى والاطمئنان",
    emoji: "☕",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Wie geht es dir heute?", textAr: "مرحباً! كيف حالك اليوم؟" },
      {
        speaker: "user",
        prompt: "أجب بأنك بخير واسأل الشريك عن حاله",
        options: [
          { textDe: "Hallo! Mir geht es sehr gut, danke. Und dir?", textAr: "مرحباً! أنا بخير جداً، شكراً. وأنت؟", points: 10 },
          { textDe: "Danke, gut! Und wie geht es dir?", textAr: "شكراً، جيد! وكيف حالك أنت؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Mir geht's auch gut, danke. Möchtest du Kaffee oder Tee trinken?", textAr: "أنا بخير أيضاً، شكراً. هل تود شرب القهوة أم الشاي؟" },
      {
        speaker: "user",
        prompt: "اطلب فنجاناً من القهوة بالحليب من فضلك",
        options: [
          { textDe: "Ich möchte einen Kaffee mit Milch, bitte.", textAr: "أود قهوة بالحليب من فضلك.", points: 10 },
          { textDe: "Einen Kaffee mit Milch für mich, bitte.", textAr: "فنجان قهوة بالحليب لي من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Gerne! Ich nehme einen Tee. Was ist deine Handynummer für später?", textAr: "بكل سرور! سآخذ شاياً. ما هو رقم جوالك لنتواصل لاحقاً؟" },
      {
        speaker: "user",
        prompt: "أعطِ رقم هاتفك للشريك (0176...)",
        options: [
          { textDe: "Meine Nummer ist null-eins-sieben-sechs-zwei-drei-vier.", textAr: "رقمي هو 0176234.", points: 15 },
          { textDe: "Hier ist meine Nummer: null-eins-sieben-sechs-fünf-sechs-sieben.", textAr: "تفضل رقمي: 0176567.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Danke, ich habe sie notiert! Bis zum nächsten Mal!", textAr: "شكراً، قمت بتدوينه! إلى اللقاء في المرة القادمة!" },
      {
        speaker: "user",
        prompt: "ودع زميلك وتمنّ له يوماً طيباً",
        options: [
          { textDe: "Tschüss! Einen schönen Tag noch!", textAr: "مع السلامة! يوم سعيد!", points: 10 },
          { textDe: "Auf Wiedersehen! Bis bald!", textAr: "إلى اللقاء! نلتقي قريباً!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 3: Was kostet das? ──────────────────────────────
  {
    id: 3,
    ch: 3,
    title: "Auf dem Flohmarkt",
    titleAr: "في سوق البضائع المستعملة",
    emoji: "📷",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Suchen Sie etwas Bestimmtes?", textAr: "نهارك سعيد! هل تبحث عن شيء معين؟" },
      {
        speaker: "user",
        prompt: "قل أنك تبحث عن كاميرا أو كتاب وتتساءل عن السعر",
        options: [
          { textDe: "Guten Tag! Ich suche ein Buch. Was kostet dieses Buch?", textAr: "نهارك سعيد! أبحث عن كتاب. كم سعر هذا الكتاب؟", points: 10 },
          { textDe: "Hallo! Was kostet diese Kamera hier?", textAr: "مرحباً! كم سعر هذه الكاميرا هنا؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das Buch kostet 5 Euro. Die Kamera kostet 45 Euro. Das ist billig!", textAr: "الكتاب سعره 5 يورو. الكاميرا سعرها 45 يورو. هذا رخيص!" },
      {
        speaker: "user",
        prompt: "قل أن السعر مرتفع جداً (غالي) وحاول المفاصلة بسعر أقل للغرض",
        options: [
          { textDe: "Das Buch ist günstig. Ich nehme das Buch.", textAr: "سعر الكتاب مناسب. سآخذ الكتاب.", points: 10 },
          { textDe: "Oh, 45 Euro ist zu teuer! Geht auch 35 Euro?", textAr: "أوه، 45 يورو غالي جداً! هل ينفع 35 يورو؟", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Na gut, 35 Euro für die Kamera ist okay. Nehmen Sie sie?", textAr: "حسناً، 35 يورو للكاميرا موافق. هل ستأخذها؟" },
      {
        speaker: "user",
        prompt: "وافق وقل أنك ستأخذها وسل أين تدفع",
        options: [
          { textDe: "Ja, ich nehme sie. Danke schön!", textAr: "نعم، سآخذها. شكراً جزيلاً!", points: 10 },
          { textDe: "Super, ich nehme die Kamera für 35 Euro.", textAr: "رائع، سآخذ الكاميرا بـ 35 يورو.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Bitte sehr. Das macht dann 35 Euro.", textAr: "تفضل. المجموع 35 يورو." },
      {
        speaker: "user",
        prompt: "ادفع للبائع واشكره",
        options: [
          { textDe: "Hier sind 35 Euro. Vielen Dank!", textAr: "تفضل، هذه 35 يورو. شكراً جزيلاً!", points: 10 },
          { textDe: "Bitte schön, 35 Euro. Einen schönen Tag!", textAr: "تفضل، 35 يورو. أتمنى لك يوماً سعيداً!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 4: Wie spät ist es? ─────────────────────────────
  {
    id: 4,
    ch: 4,
    title: "Morgens und Termine",
    titleAr: "روتين المواعيد والوقت",
    emoji: "⏰",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Hallo! Wann stehst du normalerweise auf?", textAr: "مرحباً! متى تستيقظ عادةً؟" },
      {
        speaker: "user",
        prompt: "أخبره أنك تستيقظ عادة في الساعة 7 صباحاً وتفطر في 7:30",
        options: [
          { textDe: "Ich stehe um sieben Uhr auf und frühstücke um halb acht.", textAr: "أستيقظ في السابعة صباحاً وأتناول الفطور في السابعة والنصف.", points: 15 },
          { textDe: "Normalerweise stehe ich um 7 Uhr auf, dann frühstücke ich.", textAr: "عادة أستيقظ في السابعة، ثم أتناول الفطور.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Und wann fängt dein Deutschkurs an?", textAr: "ومتى تبدأ دورة اللغة الألمانية الخاصة بك؟" },
      {
        speaker: "user",
        prompt: "أخبره أن الدرس يبدأ في التاسعة تماماً وينتهي في الواحدة والنصف ظهراً",
        options: [
          { textDe: "Der Kurs fängt um neun Uhr an und endet um halb zwei.", textAr: "يبدأ الكورس في التاسعة تماماً وينتهي في الواحدة والنصف.", points: 15 },
          { textDe: "Er beginnt um 9 Uhr und geht bis 13 Uhr 30.", textAr: "يبدأ في التاسعة ويستمر حتى الساعة الواحدة والنصف.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Oh, das ist ein langer Kurs! Hast du am Freitagabend Zeit? Gehen wir ins Kino?", textAr: "أوه، هذا كورس طويل! هل لديك وقت مساء الجمعة؟ هل نذهب للسينما؟" },
      {
        speaker: "user",
        prompt: "اعتذر بأنه ليس لديك وقت لأن لديك موعد آخر، واسأل عن السبت",
        options: [
          { textDe: "Es tut mir leid, am Freitag habe ich keine Zeit. Geht es am Samstag?", textAr: "يؤسفني، ليس لدي وقت يوم الجمعة. هل يناسبك السبت؟", points: 15 },
          { textDe: "Leider habe ich einen Termin am Freitag. Wie ist es am Samstag?", textAr: "للأسف لدي موعد يوم الجمعة. ما رأيك بالسبت؟", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Ja, Samstag um 18 Uhr passt gut! Bis Samstag!", textAr: "نعم، السبت الساعة السادسة مساءً مناسب جداً! نلتقي السبت!" },
      {
        speaker: "user",
        prompt: "وافق على الموعد وودّعه",
        options: [
          { textDe: "Klasse! Bis Samstag um 18 Uhr. Tschüss!", textAr: "ممتاز! نلتقي السبت في السادسة. مع السلامة!", points: 10 },
          { textDe: "Abgemacht! Bis Samstag!", textAr: "اتفقنا! نلتقي السبت!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 5: Einkaufen ────────────────────────────────────
  {
    id: 5,
    ch: 5,
    title: "Lebensmittel einkaufen",
    titleAr: "التسوق في السوبرماركت",
    emoji: "🛒",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Was kann ich für Sie tun?", textAr: "نهارك سعيد! ماذا يمكنني أن أقدم لك؟" },
      {
        speaker: "user",
        prompt: "قل أنك تريد شراء الطماطم والجبن وتتساءل إن كانت طازجة",
        options: [
          { textDe: "Guten Tag! Ich brauche Tomaten und Käse. Sind sie frisch?", textAr: "نهارك سعيد! أحتاج طماطم وجبناً. هل هي طازجة؟", points: 10 },
          { textDe: "Hallo! Ich möchte Tomaten und Käse kaufen.", textAr: "مرحباً! أود شراء طماطم وجبن.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Ja, alles ist ganz frisch! Wie viel Tomaten möchten Sie?", textAr: "نعم، كل شيء طازج تماماً! كم كمية الطماطم التي تريدها؟" },
      {
        speaker: "user",
        prompt: "اطلب كيلو غراماً واحداً من الطماطم",
        options: [
          { textDe: "Ich möchte ein Kilo Tomaten, bitte.", textAr: "أود كيلو غراماً واحداً من الطماطم من فضلك.", points: 10 },
          { textDe: "Ein Kilo Tomaten, bitte.", textAr: "كيلو طماطم من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Gerne. Und wie viel Käse darf es sein?", textAr: "بكل سرور. وكم كمية الجبن التي تريدها؟" },
      {
        speaker: "user",
        prompt: "اطلب 300 غرام من الجبن السويسري",
        options: [
          { textDe: "Geben Sie mir bitte 300 Gramm Käse.", textAr: "أعطني من فضلك 300 غرام من الجبن.", points: 15 },
          { textDe: "Ich brauche dreihundert Gramm Käse, bitte.", textAr: "أحتاج ثلاثمئة غرام من الجبن من فضلك.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Bitte sehr. Sonst noch etwas?", textAr: "تفضل. هل هناك أي شيء آخر؟" },
      {
        speaker: "user",
        prompt: "أجب بالنفي وسل عن التكلفة الكلية",
        options: [
          { textDe: "Nein, danke. Das ist alles. Was kostet das?", textAr: "لا شكراً. هذا كل شيء. كم الحساب؟", points: 10 },
          { textDe: "Das ist alles, danke. Wie viel macht das?", textAr: "هذا كل شيء، شكراً. كم المجموع؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das macht zusammen 9 Euro 40, bitte.", textAr: "المجموع الكلي هو 9 يورو و40 سنتاً من فضلك." },
      {
        speaker: "user",
        prompt: "أعطه ورقة نقود بقيمة 10 يورو وقل له أن يحتفظ بالفكة (الباقي)",
        options: [
          { textDe: "Hier sind 10 Euro. Stimmt so!", textAr: "تفضل، هذه 10 يورو. احتفظ بالباقي!", points: 15 },
          { textDe: "Bitte schön. Zehn Euro. Stimmt so.", textAr: "تفضل، عشرة يورو. احتفظ بالباقي.", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 6: Meine Familie ────────────────────────────────
  {
    id: 6,
    ch: 6,
    title: "Über Familie sprechen",
    titleAr: "التحدث عن أفراد العائلة والأبناء",
    emoji: "👨‍👩‍👧‍👦",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Wohnst du allein oder mit deiner Familie?", textAr: "مرحباً! هل تسكن بمفردك أم مع عائلتك؟" },
      {
        speaker: "user",
        prompt: "قل أنك متزوج وتسكن مع عائلتك وأبنائك",
        options: [
          { textDe: "Ich bin verheiratet und wohne mit meiner Familie.", textAr: "أنا متزوج وأسكن مع عائلتي.", points: 10 },
          { textDe: "Ich lebe mit meiner Frau und meinen zwei Kindern zusammen.", textAr: "أعيش مع زوجتي وطفليّ الاثنين.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Ah, wie schön! Wie alt sind deine Kinder?", textAr: "آه، ما أجمل هذا! كم تبلغ أعمار أطفالك؟" },
      {
        speaker: "user",
        prompt: "أخبره أن ابنتك عمرها 8 سنوات وابنك عمره 5 سنوات",
        options: [
          { textDe: "Meine Tochter ist acht und mein Sohn ist fünf Jahre alt.", textAr: "ابنتي عمرها ثماني سنوات وابني عمره خمس سنوات.", points: 15 },
          { textDe: "Die Tochter ist 8 Jahre alt und der Sohn ist 5.", textAr: "الابنة عمرها 8 سنوات والابن عمره 5.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Und deine Eltern? Wohnen sie auch hier in Deutschland?", textAr: "ووالداك؟ هل يسكنان أيضاً هنا في ألمانيا؟" },
      {
        speaker: "user",
        prompt: "أخبره أنهما يسكنان في بلدك الأصلي ولكنك تتحدث معهما هاتفياً دائماً",
        options: [
          { textDe: "Nein, meine Eltern wohnen in meiner Heimat. Aber wir telefonieren oft.", textAr: "لا، والداي يسكنان في وطني. لكننا نتحدث هاتفياً كثيراً.", points: 15 },
          { textDe: "Sie wohnen in Ägypten/Syrien. Ich telefoniere jeden Tag mit ihnen.", textAr: "يسكنان في مصر/سوريا. أتحدث معهما هاتفياً كل يوم.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Das ist gut! Morgen hat meine Schwester Geburtstag. Wir feiern!", textAr: "هذا جيد! غداً عيد ميلاد أختي. نحن نحتفل!" },
      {
        speaker: "user",
        prompt: "هنئ أخته وتمنّ لها عيد ميلاد سعيد",
        options: [
          { textDe: "Herzlichen Glückwunsch zum Geburtstag für deine Schwester!", textAr: "تهانينا الحارة بمناسبة عيد الميلاد لأختك!", points: 15 },
          { textDe: "Alles Gute zum Geburtstag für sie!", textAr: "كل التمنيات الطيبة لعيد ميلادها!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 7: Wohnungssuche ────────────────────────────────
  {
    id: 7,
    ch: 7,
    title: "Eine Wohnung mieten",
    titleAr: "حوار استئجار شقة جديدة",
    emoji: "🏠",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Sie rufen wegen der 3-Zimmer-Wohnung an?", textAr: "نهارك سعيد! هل تتصل بخصوص الشقة ذات الثلاث غرف؟" },
      {
        speaker: "user",
        prompt: "أكد الاتصال وسل عن مساحة الشقة الإجمالية بالامتار",
        options: [
          { textDe: "Ja, genau. Wie groß ist die Wohnung eigentlich?", textAr: "نعم، تماماً. كم تبلغ مساحة الشقة في الواقع؟", points: 10 },
          { textDe: "Guten Tag! Ja, ich interessiere mich für die Wohnung. Wie viele Quadratmeter hat sie?", textAr: "نهارك سعيد! نعم، أنا مهتم بالشقة. كم متراً مربعاً مساحتها؟", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Die Wohnung ist 85 Quadratmeter groß und hat auch einen Balkon.", textAr: "تبلغ مساحة الشقة 85 متراً مربعاً وبها شرفة أيضاً." },
      {
        speaker: "user",
        prompt: "اسأل عن الإيجار البارد وتكلفة الخدمات الإضافية والكهرباء",
        options: [
          { textDe: "Wie hoch ist die Kaltmiete? Und wie hoch sind die Nebenkosten?", textAr: "كم يبلغ الإيجار البارد؟ وكم تبلغ تكاليف الخدمات الإضافية؟", points: 15 },
          { textDe: "Was kostet die Miete warm?", textAr: "كم يبلغ الإيجار الكلي (الدافئ)؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Die Kaltmiete ist 750 Euro. Die Nebenkosten betragen 180 Euro.", textAr: "الإيجار البارد هو 750 يورو. والخدمات الإضافية تبلغ 180 يورو." },
      {
        speaker: "user",
        prompt: "اسأل في أي طابق تقع الشقة وهل تحتوي البناية على مصعد",
        options: [
          { textDe: "In welchem Stock ist die Wohnung? Gibt es einen Aufzug?", textAr: "في أي طابق تقع الشقة؟ وهل هناك مصعد؟", points: 15 },
          { textDe: "Liegt die Wohnung im Erdgeschoss oder im ersten Stock?", textAr: "هل تقع الشقة في الطابق الأرضي أم الطابق الأول؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Die Wohnung liegt im dritten Stock. Aber es gibt leider keinen Aufzug.", textAr: "تقع الشقة في الطابق الثالث. ولكن للأسف لا يوجد مصعد." },
      {
        speaker: "user",
        prompt: "قل أنك تجد الشقة مناسبة وسل عن إمكانية معاينتها قريباً",
        options: [
          { textDe: "Das ist okay für mich. Kann ich die Wohnung besichtigen?", textAr: "هذا لا بأس به بالنسبة لي. هل يمكنني معاينة الشقة؟", points: 15 },
          { textDe: "Wann ist eine Besichtigung möglich? Ich möchte sie sehen.", textAr: "متى تكون المعاينة ممكنة؟ أود رؤيتها.", points: 15 }
        ]
      }
    ]
  },

  // ── CHAPTER 8: Beim Arzt ────────────────────────────────────
  {
    id: 8,
    ch: 8,
    title: "Beim Arzt",
    titleAr: "عند الطبيب وشرح الحالة المرضية",
    emoji: "🩺",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Was fehlt Ihnen denn?", textAr: "نهارك سعيد! ما الذي تشكو منه؟" },
      {
        speaker: "user",
        prompt: "اشرح للطبيب أنك متعب ولديك صداع شديد وحمى",
        options: [
          { textDe: "Guten Tag, Herr Doktor. Ich fühle mich sehr schlecht. Ich habe Kopfschmerzen und Fieber.", textAr: "نهارك سعيد يا دكتور. أشعر بسوء شديد. لدي صداع وحمى.", points: 15 },
          { textDe: "Ich bin krank. Mein Kopf tut weh und ich habe Fieber.", textAr: "أنا مريض. رأسي يؤلمني ولدي سخونة.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Verstehe. Haben Sie auch Halsschmerzen oder Husten?", textAr: "فهمت. هل تشكو أيضاً من ألم في الحلق أو سعال؟" },
      {
        speaker: "user",
        prompt: "أجبه بنعم، حلقك يؤلمك أيضاً ولا تستطيع النوم جيداً",
        options: [
          { textDe: "Ja, mein Hals tut auch weh und ich kann nicht schlafen.", textAr: "نعم، حلقي يؤلمني أيضاً ولا أستطيع النوم.", points: 15 },
          { textDe: "Ja, ich habe Halsschmerzen seit gestern.", textAr: "نعم، لدي ألم في الحلق منذ الأمس.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Sie haben eine starke Erkältung. Ich verschreibe Ihnen Medikamente.", textAr: "لديك نزلة برد شديدة. سأكتب لك وصفة طبية للدواء." },
      {
        speaker: "user",
        prompt: "اسأل الطبيب كم مرة في اليوم يجب أن تأخذ هذا الدواء",
        options: [
          { textDe: "Wie oft am Tag muss ich die Medikamente nehmen?", textAr: "كم مرة في اليوم يجب أن آخذ الأدوية؟", points: 15 },
          { textDe: "Wann soll ich das Medikament einnehmen?", textAr: "متى يجب علي تناول الدواء؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Zweimal täglich, morgens und abends nach dem Essen. Gute Besserung!", textAr: "مرتين يومياً، صباحاً ومساءً بعد تناول الطعام. أتمنى لك الشفاء العاجل!" },
      {
        speaker: "user",
        prompt: "اشكره وودعه بأدب",
        options: [
          { textDe: "Vielen Dank, Herr Doktor. Auf Wiedersehen!", textAr: "شكراً جزيلاً يا دكتور. مع السلامة!", points: 10 },
          { textDe: "Danke schön für Ihre Hilfe. Tschüss!", textAr: "شكراً جزيلاً لمساعدتك. مع السلامة!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 9: Wegbeschreibung ──────────────────────────────
  {
    id: 9,
    ch: 9,
    title: "Nach dem Weg fragen",
    titleAr: "السؤال عن الطريق ووصفه",
    emoji: "🗺️",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Entschuldigung! Wie komme ich zum Bahnhof?", textAr: "معذرة! كيف أصل إلى محطة القطار؟" },
      {
        speaker: "user",
        prompt: "أخبر السائل أن يذهب للأمام مباشرة ثم ينعطف يساراً",
        options: [
          { textDe: "Gehen Sie geradeaus und dann die nächste Straße links.", textAr: "اذهب مباشرة ثم خذ الشارع التالي يساراً.", points: 15 },
          { textDe: "Gehen Sie zuerst geradeaus, dann links abbiegen.", textAr: "اذهب أولاً مباشرة، ثم انعطف يساراً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Ist der Bahnhof weit von hier?", textAr: "هل المحطة بعيدة من هنا؟" },
      {
        speaker: "user",
        prompt: "أخبره أنه ليس بعيداً، فقط خمس دقائق مشياً على الأقدام",
        options: [
          { textDe: "Nein, es ist ganz nah. Nur fünf Minuten zu Fuß.", textAr: "لا، إنها قريبة جداً. فقط خمس دقائق مشياً.", points: 15 },
          { textDe: "Es ist nicht weit, ungefähr 500 Meter.", textAr: "ليست بعيدة، حوالي 500 متر.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Kann ich auch den Bus nehmen?", textAr: "هل يمكنني أيضاً ركوب الحافلة؟" },
      {
        speaker: "user",
        prompt: "أخبره بنعم، حافلة رقم 100 تذهب مباشرة إلى هناك",
        options: [
          { textDe: "Ja, der Bus Linie 100 fährt direkt dorthin.", textAr: "نعم، الحافلة رقم 100 تذهب مباشرة إلى هناك.", points: 15 },
          { textDe: "Ja, nehmen Sie den Bus Nummer 100.", textAr: "نعم، اركب الحافلة رقم 100.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Super! Vielen Dank für Ihre Hilfe!", textAr: "رائع! شكراً جزيلاً لمساعدتك!" },
      {
        speaker: "user",
        prompt: "رد عليه بـ (على الرحب والسعة) وتمنّ له رحلة سعيدة",
        options: [
          { textDe: "Gern geschehen! Gute Reise!", textAr: "على الرحب والسعة! رحلة سعيدة!", points: 10 },
          { textDe: "Bitte sehr! Schönen Tag noch!", textAr: "عفواً! طاب يومك!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 10: Freizeit und Hobbys ──────────────────────────
  {
    id: 10,
    ch: 10,
    title: "Freizeitpläne machen",
    titleAr: "التخطيط لوقت الفراغ والهوايات",
    emoji: "⚽",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Was machst du am liebsten in deiner Freizeit?", textAr: "مرحباً! ما الذي تفضل فعله في وقت فراغك؟" },
      {
        speaker: "user",
        prompt: "أخبره أنك تحب لعب كرة القدم وسماع الموسيقى",
        options: [
          { textDe: "Ich spiele sehr gern Fußball und höre gern Musik.", textAr: "أحب لعب كرة القدم كثيراً وسماع الموسيقى.", points: 10 },
          { textDe: "In meiner Freizeit spiele ich Fußball oder lese ein Buch.", textAr: "في وقت فراغي ألعب كرة القدم أو أقرأ كتاباً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Fußball ist toll! Wir spielen am Samstag. Hast du Lust mitzukommen?", textAr: "كرة القدم رائعة! سنلعب يوم السبت. هل تود المجيء معنا؟" },
      {
        speaker: "user",
        prompt: "أبدِ إعجابك بالفكرة وسل في أي ساعة ستبدأ اللعب",
        options: [
          { textDe: "Ja, sehr gerne! Um wie viel Uhr trefft ihr euch?", textAr: "نعم، بكل سرور! في أي ساعة ستلتقون؟", points: 15 },
          { textDe: "Das macht Spaß! Wann spielt ihr am Samstag?", textAr: "هذا ممتع! متى ستلعبون يوم السبت؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Wir spielen am Samstag um 15 Uhr im Park. Bring einfach Sportschuhe mit.", textAr: "سنلعب السبت الساعة الثالثة عصراً في الحديقة. أحضر معك فقط حذاءً رياضياً." },
      {
        speaker: "user",
        prompt: "أكد حضورك بالموعد المحدد وقل أنك ستأتي بالتأكيد",
        options: [
          { textDe: "Alles klar! Ich komme am Samstag um 15 Uhr. Bis dann!", textAr: "واضح تماماً! سآتي السبت في الثالثة. أراك حينها!", points: 15 },
          { textDe: "Prima, ich bin am Samstag um drei Uhr da.", textAr: "ممتاز، سأكون هناك السبت الساعة الثالثة.", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 11: Arbeit und Beruf ────────────────────────────
  {
    id: 11,
    ch: 11,
    title: "Über Berufe sprechen",
    titleAr: "التحدث عن المهن والوظائف",
    emoji: "💼",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Hallo! Was sind Sie von Beruf?", textAr: "مرحباً! ما هي مهنتك؟" },
      {
        speaker: "user",
        prompt: "أخبره بمهنتك (مثلاً مهندس حاسوب) والشركة التي تعمل بها",
        options: [
          { textDe: "Ich bin Ingenieur von Beruf und arbeite bei einer Computerfirma.", textAr: "أنا مهندس كمبيوتر وأعمل في شركة حاسوب.", points: 15 },
          { textDe: "Ich arbeite als Verkäufer in einem Supermarkt.", textAr: "أعمل كبائع في سوبرماركت.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das ist interessant! Wie viele Stunden arbeiten Sie pro Woche?", textAr: "هذا مثير للاهتمام! كم ساعة تعمل في الأسبوع؟" },
      {
        speaker: "user",
        prompt: "قل أنك تعمل 40 ساعة في الأسبوع وعملك ممتع ولكنه متعب",
        options: [
          { textDe: "Ich arbeite 40 Stunden pro Woche. Die Arbeit macht Spaß, aber sie ist stressig.", textAr: "أعمل 40 ساعة في الأسبوع. العمل ممتع لكنه متعب/مجهد.", points: 15 },
          { textDe: "Ich arbeite vierzig Stunden. Mein Beruf gefällt mir sehr.", textAr: "أعمل 40 ساعة. عملي يعجبني كثيراً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Verstehe. Und was ist Ihr Traumjob?", textAr: "فهمت. وما هي وظيفة أحلامك؟" },
      {
        speaker: "user",
        prompt: "قل أن وظيفة أحلامك هي أن تعمل كمدير أو مصمم برامج وتكسب الكثير من المال",
        options: [
          { textDe: "Mein Traumjob ist Softwareentwickler. Ich möchte flexibel arbeiten.", textAr: "وظيفة أحلامي هي مطور برمجيات. أود أن أعمل بمرونة.", points: 15 },
          { textDe: "Ich möchte ein erfolgreicher Koch sein und mein eigenes Restaurant haben.", textAr: "أود أن أكون طباخاً ناجحاً وأمتلك مطعمي الخاص.", points: 15 }
        ]
      }
    ]
  },

  // ── CHAPTER 12: Im Restaurant ──────────────────────────────
  {
    id: 12,
    ch: 12,
    title: "Im Restaurant",
    titleAr: "في المطعم وطلب الطعام والدفع",
    emoji: "🍽️",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Guten Abend! Haben Sie einen Tisch reserviert?", textAr: "مساء الخير! هل قمت بحجز طاولة؟" },
      {
        speaker: "user",
        prompt: "أجب بنعم، حجزت طاولة لشخصين باسم (أحمد)",
        options: [
          { textDe: "Guten Abend! Ja, wir haben einen Tisch für zwei Personen auf den Namen Ahmad reserviert.", textAr: "مساء الخير! نعم، حجزنا طاولة لشخصين باسم أحمد.", points: 15 },
          { textDe: "Ja, einen Tisch für zwei Personen. Der Name ist Ahmad.", textAr: "نعم، طاولة لشخصين. الاسم هو أحمد.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Sehr wohl, Herr Ahmad. Hier ist Ihr Tisch. Was möchten Sie trinken?", textAr: "على الرحب والسعة يا سيد أحمد. هنا طاولتك. ماذا تريد أن تشرب؟" },
      {
        speaker: "user",
        prompt: "اطلب زجاجة مياه معدنية وعصير تفاح",
        options: [
          { textDe: "Ich möchte eine Flasche Mineralwasser und einen Apfelsaft, bitte.", textAr: "أود زجاجة مياه معدنية وعصير تفاح من فضلك.", points: 15 },
          { textDe: "Bringen Sie mir bitte ein Wasser und einen Saft.", textAr: "أحضر لي من فضلك ماءً وعصيراً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Sehr gerne. Und was möchten Sie essen?", textAr: "بكل سرور. وماذا تود أن تأكل؟" },
      {
        speaker: "user",
        prompt: "اطلب حساء الطماطم كمقبلات وشنيتزل كطبق رئيسي",
        options: [
          { textDe: "Als Vorspeise die Tomatensuppe und als Hauptspeise das Schnitzel.", textAr: "كمقبلات شوربة الطماطم وكطبق رئيسي الشنيتزل.", points: 15 },
          { textDe: "Ich nehme eine Suppe und ein Schnitzel, bitte.", textAr: "سآخذ شوربة وشنيتزل من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Kommt sofort. (Später...) War das Essen lecker? Möchten Sie bezahlen?", textAr: "سيأتي فوراً. (لاحقاً...) هل كان الطعام لذيذاً؟ هل تريد الدفع؟" },
      {
        speaker: "user",
        prompt: "امتدح الطعام واطلب الفاتورة (الحساب)",
        options: [
          { textDe: "Ja, das Essen war fantastisch! Zahlen, bitte!", textAr: "نعم، كان الطعام رائعاً! الحساب من فضلك!", points: 15 },
          { textDe: "Es war sehr lecker. Die Rechnung, bitte.", textAr: "كان لذيذاً جداً. الفاتورة من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das macht zusammen 27 Euro 80 Cent.", textAr: "المجموع الكلي هو 27 يورو و 80 سنتاً." },
      {
        speaker: "user",
        prompt: "أعطه 30 يورو وقل له أن يحتفظ بالباقي (إكرامية)",
        options: [
          { textDe: "Hier sind 30 Euro. Stimmt so!", textAr: "تفضل، هذه 30 يورو. احتفظ بالباقي!", points: 15 },
          { textDe: "Stimmt so. Machen Sie 30 Euro.", textAr: "اجعلها 30 يورو واحتفظ بالباقي.", points: 10 }
        ]
      }
    ]
  }
];

// ── Conversation UI Translations ────────────────────────────
const CONV_LOCALIZED_UI = {
  ar: {
    points_label: "النقاط",
    points_suffix: "نقطة",
    partner_typing: "الشريك يكتب...",
    task_label: "🎯 المطلوب:",
    mic_instructions: "انقر زر الميكروفون وتدرب على نطق الخيار المحدد بصوتك",
    send_without_voice: "إرسال بدون صوت ➔",
    listening_status: "جاري الاستماع... تحدّث الآن بالألمانية",
    great_pronunciation: "نطق رائع!",
    imprecise_pronunciation: "نطق غير دقيق. حاول مجدداً أو اضغط إرسال.",
    voice_error: "تعذر التعرف على الصوت. اضغط مجدداً أو اختر إرسال.",
    sent_points: "تم الإرسال (+{points} نقاط)",
    end_msg_excellent: "مذهل! تتحدث كالألمان تماماً! 🏆",
    end_msg_good: "أداء رائع وقدرة ممتازة على التعبير! 👏",
    end_msg_poor: "جيد! تدرب أكثر لتحسين طلاقتك 💪",
    result_score_details: "النقاط المحرزة: {score} من أصل {max} نقطة {stars}",
    result_scenario: "سيناريو: {title}",
    restart_btn: "🔄 أعد المحادثة",
    scenarios_menu_btn: "← قائمة السيناريوهات",
    active_conversation: "المحادثة النشطة",
    exit_conversation: "← إنهاء المحادثة",
  },
  en: {
    points_label: "Points",
    points_suffix: "pts",
    partner_typing: "Partner is typing...",
    task_label: "🎯 Task:",
    mic_instructions: "Click the microphone button and practice pronouncing the selected option",
    send_without_voice: "Send without voice ➔",
    listening_status: "Listening... Speak now in German",
    great_pronunciation: "Great pronunciation!",
    imprecise_pronunciation: "Imprecise pronunciation. Try again or click send.",
    voice_error: "Could not recognize speech. Press again or choose send.",
    sent_points: "Sent (+{points} points)",
    end_msg_excellent: "Amazing! You speak exactly like a German! 🏆",
    end_msg_good: "Great performance and excellent expression! 👏",
    end_msg_poor: "Good! Practice more to improve your fluency 💪",
    result_score_details: "Points achieved: {score} out of {max} points {stars}",
    result_scenario: "Scenario: {title}",
    restart_btn: "🔄 Restart Conversation",
    scenarios_menu_btn: "← Scenarios List",
    active_conversation: "Active Conversation",
    exit_conversation: "← Exit Conversation",
  },
  tr: {
    points_label: "Puan",
    points_suffix: "puan",
    partner_typing: "Ortak yazıyor...",
    task_label: "🎯 Görev:",
    mic_instructions: "Mikrofon düğmesine tıklayın ve seçilen seçeneği telaffuz etme pratiği yapın",
    send_without_voice: "Ses olmadan gönder ➔",
    listening_status: "Dinleniyor... Şimdi Almanca konuşun",
    great_pronunciation: "Harika telaffuz!",
    imprecise_pronunciation: "Hatalı telaffuz. Tekrar deneyin veya göndere basın.",
    voice_error: "Ses tanınamadı. Tekrar basın veya göndermeyi seçin.",
    sent_points: "Gönderildi (+{points} puan)",
    end_msg_excellent: "Harika! Tam bir Alman gibi konuşuyorsun! 🏆",
    end_msg_good: "Harika performans ve mükemmel ifade! 👏",
    end_msg_poor: "İyi! Akıcılığını geliştirmek için daha fazla pratik yap 💪",
    result_score_details: "Kazanılan Puan: {max} puan üzerinden {score} {stars}",
    result_scenario: "Senaryo: {title}",
    restart_btn: "🔄 Konuşmayı Yeniden Başlat",
    scenarios_menu_btn: "← Senaryo Listesi",
    active_conversation: "Aktif Konuşma",
    exit_conversation: "← Konuşmadan Çık",
  },
  ro: {
    points_label: "Puncte",
    points_suffix: "puncte",
    partner_typing: "Partenerul scrie...",
    task_label: "🎯 Cerință:",
    mic_instructions: "Faceți clic pe butonul microfonului și exersați pronunțarea opțiunii selectate",
    send_without_voice: "Trimite fără voce ➔",
    listening_status: "Se ascultă... Vorbiți acum în germană",
    great_pronunciation: "Pronunție excelentă!",
    imprecise_pronunciation: "Pronunție imprecisă. Încercați din nou sau faceți clic pe trimitere.",
    voice_error: "Nu s-a putut recunoaște vorbirea. Apăsați din nou sau alegeți trimitere.",
    sent_points: "Trimis (+{points} puncte)",
    end_msg_excellent: "Uimitor! Vorbești exact ca un german! 🏆",
    end_msg_good: "Performanță excelentă și exprimare minunată! 👏",
    end_msg_poor: "Bine! Exersați mai mult pentru a vă îmbunătăți fluența 💪",
    result_score_details: "Puncte obținute: {score} din {max} puncte {stars}",
    result_scenario: "Scenariu: {title}",
    restart_btn: "🔄 Reporniți conversația",
    scenarios_menu_btn: "← Lista scenariilor",
    active_conversation: "Conversație activă",
    exit_conversation: "← Finalizează conversația",
  },
  bs: {
    points_label: "Bodovi",
    points_suffix: "boda",
    partner_typing: "Partner kuca...",
    task_label: "🎯 Zadatak:",
    mic_instructions: "Kliknite dugme mikrofona i vježbajte izgovor odabrane opcije",
    send_without_voice: "Pošalji bez glasa ➔",
    listening_status: "Slušam... Govorite sada na njemačkom",
    great_pronunciation: "Odličan izgovor!",
    imprecise_pronunciation: "Neprecizan izgovor. Pokušajte ponovo ili kliknite pošalji.",
    voice_error: "Govor nije prepoznat. Pritisnite ponovo ili odaberite slanje.",
    sent_points: "Poslano (+{points} bodova)",
    end_msg_excellent: "Nevjerovatno! Govorite baš kao Nijemac! 🏆",
    end_msg_good: "Sjajan nastup i odličan izraz! 👏",
    end_msg_poor: "Dobro! Vježbajte više da poboljšate tečnost 💪",
    result_score_details: "Osvojeni bodovi: {score} od {max} bodova {stars}",
    result_scenario: "Scenarij: {title}",
    restart_btn: "🔄 Ponovo pokreni razgovor",
    scenarios_menu_btn: "← Lista scenarija",
    active_conversation: "Aktivan razgovor",
    exit_conversation: "← Završi razgovor",
  }
};

// ── Get Localized Scenario Text Helper ────────────────────────
function getLocalizedScenarioText(scId, turnIndex, field, optionIndex = -1) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  
  const sc = CONVERSATION_SCENARIOS.find(s => s.id === scId);
  if (!sc) return '';
  
  if (lang === 'ar') {
    if (turnIndex === -1) {
      return sc.titleAr || sc.title;
    }
    const turn = sc.turns[turnIndex];
    if (!turn) return '';
    if (field === 'text') {
      return turn.textAr || '';
    } else if (field === 'prompt') {
      return turn.prompt || '';
    } else if (field === 'option') {
      const opt = turn.options[optionIndex];
      return opt ? opt.textAr : '';
    }
    return '';
  }
  
  if (typeof CONVERSATION_TRANSLATIONS !== 'undefined' && CONVERSATION_TRANSLATIONS[lang] && CONVERSATION_TRANSLATIONS[lang][scId]) {
    const trSc = CONVERSATION_TRANSLATIONS[lang][scId];
    if (turnIndex === -1) {
      return trSc.title || (lang === 'ar' ? sc.titleAr : sc.titleEn) || sc.title;
    }
    const trTurn = trSc.turns[turnIndex];
    if (trTurn) {
      if (field === 'text') {
        return trTurn.text || '';
      } else if (field === 'prompt') {
        return trTurn.prompt || '';
      } else if (field === 'option') {
        return trTurn.options && trTurn.options[optionIndex] !== undefined ? trTurn.options[optionIndex] : '';
      }
    }
  }
  
  if (turnIndex === -1) {
    return lang === 'ar' ? (sc.titleAr || sc.title) : sc.title;
  }
  const turn = sc.turns[turnIndex];
  if (!turn) return '';
  if (field === 'text') {
    return lang === 'ar' ? (turn.textAr || '') : (turn.textEn || turn.textDe || '');
  } else if (field === 'prompt') {
    return lang === 'ar' ? (turn.prompt || '') : (turn.promptEn || turn.prompt || '');
  } else if (field === 'option') {
    const opt = turn.options[optionIndex];
    return opt ? (lang === 'ar' ? opt.textAr : (opt.textEn || opt.textDe || '')) : '';
  }
  return '';
}

// ── Conversation State ──────────────────────────────────────
let convState = {
  scenario: null,
  currentTurnIndex: 0,
  score: 0,
  history: [],
  selectedOptionIndex: -1,
  isRecording: false
};

// ── Build Scenario List ─────────────────────────────────────
function buildConversationSelection() {
  const container = document.getElementById('convSelection');
  if (!container) return;

  const saved = getSavedProgress();
  const convScores = saved.convScores || {};
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  container.innerHTML = CONVERSATION_SCENARIOS.map(sc => {
    const bestScore = convScores[sc.id] || 0;
    const localizedTitle = getLocalizedScenarioText(sc.id, -1, 'title');
    const unitText = TRANSLATIONS[lang] && TRANSLATIONS[lang]['unit'] ? TRANSLATIONS[lang]['unit'] : 'وحدة';
    const bestScoreText = TRANSLATIONS[lang] && TRANSLATIONS[lang]['quiz_status_score'] ? TRANSLATIONS[lang]['quiz_status_score'] : 'أفضل نتيجة: ';
    return `
    <div class="conv-scenario-card" onclick="startConversation(${sc.id})">
      <div class="conv-card-emoji">${sc.emoji}</div>
      <div class="conv-card-title">${sc.title}</div>
      <div class="conv-card-sub">${localizedTitle}</div>
      <div class="conv-card-meta">
        <span class="topic-tag">${unitText} ${sc.ch}</span>
        <span class="topic-tag" style="background:rgba(245,158,11,0.1);color:var(--accent-gold)">${sc.difficulty}</span>
        ${bestScore > 0 ? `<span class="topic-tag" style="background:rgba(52,211,153,0.1);color:var(--accent-success)">${bestScoreText}${bestScore} ${ui.points_suffix}</span>` : ''}
      </div>
    </div>`;
  }).join('');
}

// ── Start Scenario ──────────────────────────────────────────
function startConversation(scenarioId) {
  const sc = CONVERSATION_SCENARIOS.find(s => s.id === scenarioId);
  if (!sc) return;

  convState = {
    scenario: sc,
    currentTurnIndex: 0,
    score: 0,
    history: [],
    selectedOptionIndex: -1,
    isRecording: false
  };

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  document.getElementById('convSelection').style.display = 'none';
  document.getElementById('convActive').style.display = 'flex';
  document.getElementById('convResults').style.display = 'none';

  const localizedTitle = getLocalizedScenarioText(sc.id, -1, 'title');
  document.getElementById('convScenarioTitle').textContent = `${sc.emoji} ${sc.title} (${localizedTitle})`;
  document.getElementById('convScore').textContent = `${ui.points_label}: 0`;

  const chat = document.getElementById('chatContainer');
  if (chat) chat.innerHTML = '';

  progressConversation();
}

// ── Progress Conversation ───────────────────────────────────
function progressConversation() {
  const sc = convState.scenario;
  const idx = convState.currentTurnIndex;

  if (idx >= sc.turns.length) {
    endConversation();
    return;
  }

  const turn = sc.turns[idx];

  if (turn.speaker === 'partner') {
    // Partner Turn
    const localizedText = getLocalizedScenarioText(sc.id, idx, 'text');
    addConvMessage('partner', turn.textDe, localizedText);
    speakConvPartner(turn.textDe);
    
    // Auto advance to next user turn after a short delay
    setTimeout(() => {
      convState.currentTurnIndex++;
      progressConversation();
    }, 1800);
  } else {
    // User Turn
    renderUserOptions(turn);
  }
}

// ── Add Chat Bubble ─────────────────────────────────────────
function addConvMessage(speaker, textDe, textAr, scoreGlow = false) {
  const container = document.getElementById('chatContainer');
  if (!container) return;

  const msg = document.createElement('div');
  msg.className = `chat-message ${speaker} ${scoreGlow ? 'score-glow' : ''}`;
  msg.innerHTML = `
    <div class="msg-de">
      <span>${textDe}</span>
      <button class="tts-btn" style="padding: 2px 8px; font-size:10px" onclick="speakGerman('${textDe.replace(/'/g,"\\'")}')">🔊</button>
    </div>
    <div class="msg-ar">${textAr}</div>
  `;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

// ── Render User Options ─────────────────────────────────────
function renderUserOptions(turn) {
  const area = document.getElementById('userInputArea');
  if (!area) return;

  convState.selectedOptionIndex = -1;

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];
  const localizedPrompt = getLocalizedScenarioText(convState.scenario.id, convState.currentTurnIndex, 'prompt');

  area.innerHTML = `
    <div class="conv-prompt-banner">${ui.task_label} ${localizedPrompt}</div>
    <div class="conv-options-list">
      ${turn.options.map((opt, i) => {
        const localizedOptionText = getLocalizedScenarioText(convState.scenario.id, convState.currentTurnIndex, 'option', i);
        return `
        <div class="conv-option-card" id="convOpt-${i}" onclick="selectConvOption(${i})">
          <div>
            <div style="font-weight:700;color:var(--text-german);font-family:'Inter',sans-serif">${opt.textDe}</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:4px">${localizedOptionText}</div>
          </div>
          <span style="font-size:12px;color:var(--accent-gold)">+${opt.points} ${ui.points_suffix}</span>
        </div>`;
      }).join('')}
    </div>
    <div id="convVoiceArea" style="display:none" class="conv-voice-practice-area">
      <div class="conv-mic-status" id="convMicStatus">${ui.mic_instructions}</div>
      <button class="mic-btn" id="convMicBtn" onclick="startConvSpeech()">🎤</button>
      <div class="conv-action-row">
        <button class="btn btn-primary" onclick="skipConvSpeech()">${ui.send_without_voice}</button>
      </div>
    </div>
  `;
}

// ── Select Response Option ──────────────────────────────────
function selectConvOption(idx) {
  convState.selectedOptionIndex = idx;
  document.querySelectorAll('.conv-option-card').forEach((card, i) => {
    card.classList.toggle('selected', i === idx);
  });

  const voiceArea = document.getElementById('convVoiceArea');
  if (voiceArea) voiceArea.style.display = 'flex';

  const chat = document.getElementById('chatContainer');
  if (chat) {
    setTimeout(() => {
      chat.scrollTop = chat.scrollHeight;
    }, 50);
  }
}

// ── Speech Synthesis for Partner ────────────────────────────
function speakConvPartner(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'de-DE';
  utter.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de') && v.name.includes('Google'));
  if (deVoice) utter.voice = deVoice;

  window.speechSynthesis.speak(utter);
}

// ── Speech Recognition for User ──────────────────────────────
function startConvSpeech() {
  const idx = convState.selectedOptionIndex;
  if (idx === -1) return;

  const turn = convState.scenario.turns[convState.currentTurnIndex];
  const option = turn.options[idx];
  const phrase = option.textDe;

  const btn = document.getElementById('convMicBtn');
  const status = document.getElementById('convMicStatus');
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  if (convState.isRecording) {
    stopSpeechRecognition();
    if (btn) btn.classList.remove('recording');
    return;
  }

  if (btn) btn.classList.add('recording');
  if (status) status.textContent = ui.listening_status;

  startSpeechRecognition(
    (transcript) => {
      if (btn) btn.classList.remove('recording');
      
      const similarity = calculateSimilarity(transcript.toLowerCase(), phrase.toLowerCase());
      console.log('Similarity score:', similarity);

      if (similarity > 0.65) {
        if (status) status.textContent = `${ui.great_pronunciation} (${Math.round(similarity*100)}%)`;
        
        const successMsg = lang === 'ar' ? 'نطق ممتاز! 🎉' : (lang === 'bs' ? 'Odličan izgovor! 🎉' : (lang === 'tr' ? 'Harika telaffuz! 🎉' : (lang === 'ro' ? 'Pronunție excelentă! 🎉' : 'Excellent pronunciation! 🎉')));
        showToast(successMsg, 'success');
        
        // Award full points
        convState.score += option.points;
        document.getElementById('convScore').textContent = `${ui.points_label}: ${convState.score}`;

        setTimeout(() => {
          advanceAfterUserSelection(option, true);
        }, 1200);
      } else {
        if (status) status.textContent = `${ui.imprecise_pronunciation} (${Math.round(similarity*100)}%)`;
        const warnMsg = lang === 'ar' ? 'النطق غير واضح، حاول مجدداً' : (lang === 'bs' ? 'Izgovor nejasan, pokušajte ponovo' : (lang === 'tr' ? 'Telaffuz anlaşılmadı, tekrar deneyin' : (lang === 'ro' ? 'Pronunție neclară, încercați din nou' : 'Pronunciation unclear, try again')));
        showToast(warnMsg, 'warning');
      }
    },
    () => {
      if (btn) btn.classList.remove('recording');
      if (status) status.textContent = ui.voice_error;
    }
  );
}

// ── Proceed without Voice (Skip) ─────────────────────────────
function skipConvSpeech() {
  const idx = convState.selectedOptionIndex;
  if (idx === -1) return;

  const turn = convState.scenario.turns[convState.currentTurnIndex];
  const option = turn.options[idx];
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  // Award half points for skipped voice practice
  const halfPoints = Math.round(option.points / 2);
  convState.score += halfPoints;
  document.getElementById('convScore').textContent = `${ui.points_label}: ${convState.score}`;
  
  const toastMsg = ui.sent_points.replace('{points}', halfPoints);
  showToast(toastMsg, 'info');

  advanceAfterUserSelection(option, false);
}

// ── Advance Dialogue ─────────────────────────────────────────
function advanceAfterUserSelection(option, spokenSuccess) {
  const localizedOptionText = getLocalizedScenarioText(convState.scenario.id, convState.currentTurnIndex, 'option', convState.selectedOptionIndex);
  addConvMessage('user', option.textDe, localizedOptionText, spokenSuccess);
  
  convState.currentTurnIndex++;
  
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  // Clean user area temporarily
  const area = document.getElementById('userInputArea');
  if (area) area.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text-muted)">${ui.partner_typing}</div>`;

  setTimeout(() => {
    progressConversation();
  }, 1000);
}

// ── End Scenario & Show Results ──────────────────────────────
function endConversation() {
  document.getElementById('convActive').style.display = 'none';
  const res = document.getElementById('convResults');
  res.style.display = 'block';

  // Calculate maximum score
  const maxScore = convState.scenario.turns
    .filter(t => t.speaker === 'user')
    .reduce((a, t) => a + Math.max(...t.options.map(o => o.points)), 0);

  const saved = getSavedProgress();
  if (!saved.convScores) saved.convScores = {};
  
  const previousBest = saved.convScores[convState.scenario.id] || 0;
  if (convState.score > previousBest) {
    saved.convScores[convState.scenario.id] = convState.score;
  }
  saved.totalScore = (saved.totalScore || 0) + convState.score;
  saveProgress(saved);
  updateDashboardStats();

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  const pct = Math.round((convState.score / maxScore) * 100);
  const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 65 ? '⭐⭐' : pct >= 40 ? '⭐' : '';
  const grade = pct >= 80 ? 'excellent' : pct >= 55 ? 'good' : 'poor';
  const msg = pct >= 90 ? ui.end_msg_excellent : pct >= 70 ? ui.end_msg_good : ui.end_msg_poor;

  const scoreDetails = ui.result_score_details
    .replace('{score}', convState.score)
    .replace('{max}', maxScore)
    .replace('{stars}', stars);
  const scenarioTitleText = getLocalizedScenarioText(convState.scenario.id, -1, 'title');
  const scenarioDetails = ui.result_scenario.replace('{title}', scenarioTitleText);

  res.innerHTML = `
    <div class="result-score ${grade}">${pct}%</div>
    <div class="result-message">${msg}</div>
    <div class="result-details">
      ${scoreDetails}<br>
      ${scenarioDetails}
    </div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="startConversation(${convState.scenario.id})">${ui.restart_btn}</button>
      <button class="btn btn-ghost" onclick="backToConvMenu()">${ui.scenarios_menu_btn}</button>
    </div>
  `;
}

// ── Exit Conversation ───────────────────────────────────────
function backToConvMenu() {
  document.getElementById('convSelection').style.display = 'grid';
  document.getElementById('convActive').style.display = 'none';
  document.getElementById('convResults').style.display = 'none';
  buildConversationSelection();
}
