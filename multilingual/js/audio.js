// ============================================================
// AUDIO MANAGER - Berliner Platz 1 Neu MP3 Files
// ============================================================

const AUDIO_TRACKS = [
  // ── CD1 Lernbuch ──────────────────────────────────────────
  { id:'LB_CD1_01', ch:0,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/01_langenschidt_-_vorspann.mp3',     label:'Vorspann (مقدمة)', labelAr:'مقدمة الكتاب' },
  { id:'LB_CD1_02', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/02_langenschidt_-_1.1b_-_die_kursliste.mp3',            label:'1.1b - Die Kursliste',             labelAr:'قائمة الطلاب' },
  { id:'LB_CD1_03', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/03_langenschidt_-_1.2a_-_sie_und_du.mp3',               label:'1.2a - Sie und du',                labelAr:'أنتَ الرسمي وغير الرسمي' },
  { id:'LB_CD1_04', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/04_langenschidt_-_1.3a_-_melodie_und_akzent.mp3',        label:'1.3a - Melodie und Akzent (1)',    labelAr:'لحن اللغة ونبرها' },
  { id:'LB_CD1_05', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/05_langenschidt_-_1.3a_-_melodie_und_akzent.mp3',        label:'1.3a - Melodie und Akzent (2)',    labelAr:'لحن اللغة (تابع)' },
  { id:'LB_CD1_06', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/06_langenschidt_-_1.4a_-_sich_vorstellen.mp3',           label:'1.4a - Sich vorstellen (1)',       labelAr:'التعريف بالنفس' },
  { id:'LB_CD1_07', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/07_langenschidt_-_1.4a_-_sich_vorstellen.mp3',           label:'1.4a - Sich vorstellen (2)',       labelAr:'التعريف بالنفس (تابع)' },
  { id:'LB_CD1_08', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/08_langenschidt_-_1.4a_-_sich_vorstellen.mp3',           label:'1.4a - Sich vorstellen (3)',       labelAr:'التعريف بالنفس (تابع)' },
  { id:'LB_CD1_09', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/09_langenschidt_-_1.6b_-_steckbriefe.mp3',               label:'1.6b - Steckbriefe',               labelAr:'البطاقات الشخصية' },
  { id:'LB_CD1_10', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/10_langenschidt_-_1.7_-_deutschkurs_a1.mp3',             label:'1.7 - Deutschkurs A1',             labelAr:'دورة ألمانية A1' },
  { id:'LB_CD1_11', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/11_langenschidt_-_1.9a_-_buchstabieren.mp3',             label:'1.9a - Buchstabieren',             labelAr:'التهجئة' },
  { id:'LB_CD1_12', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/12_langenschidt_-_1.9b_-_alphabet_und_rhythmus_lernen.mp3', label:'1.9b - Alphabet und Rhythmus',  labelAr:'الأبجدية والإيقاع' },
  { id:'LB_CD1_13', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/13_langenschidt_-_1.9c_-_wie_heissen_die_personen.mp3',   label:'1.9c - Wie heißen die Personen?', labelAr:'ما أسماء الأشخاص؟' },
  { id:'LB_CD1_14', ch:1,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/14_langenschidt_-_1.11_-_leute_aus_deutschland.mp3',      label:'1.11 - Leute aus Deutschland',    labelAr:'ناس من ألمانيا' },
  { id:'LB_CD1_15', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/15_langenschidt_-_2.2a_-_wie_geht\'s.mp3',                label:"2.2a - Wie geht's?",               labelAr:'كيف حالك؟' },
  { id:'LB_CD1_16', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/16_langenschidt_-_2.3a_-_dialoge.mp3',                    label:'2.3a - Dialoge',                  labelAr:'حوارات' },
  { id:'LB_CD1_17', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/17_langenschidt_-_2.2b_-_melodie_ja-nein-fragen.mp3',     label:'2.2b - Melodie Ja/Nein',          labelAr:'لحن أسئلة نعم/لا' },
  { id:'LB_CD1_19', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/19_langenschidt_-_2.5b_-_in_der_cafeteria.mp3',           label:'2.5b - In der Cafeteria',         labelAr:'في الكافيتيريا' },
  { id:'LB_CD1_20', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/20_langenschidt_-_2.8a_-_null_bis_zwolf.mp3',             label:'2.8a - Zahlen 0-12',              labelAr:'الأرقام 0-12' },
  { id:'LB_CD1_21', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/21_langenschidt_-_2.8c_-_handynummern.mp3',               label:'2.8c - Handynummern',             labelAr:'أرقام الجوال' },
  { id:'LB_CD1_22', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/22_langenschidt_-_2.10_-_zahlen_von_13_bis_200.mp3',      label:'2.10 - Zahlen 13-200',            labelAr:'الأرقام 13-200' },
  { id:'LB_CD1_23', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/23_langenschidt_-_2.11a_-_an_der_kasse.mp3',              label:'2.11a - An der Kasse',            labelAr:'عند الصندوق' },
  { id:'LB_CD1_24', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/24_langenschidt_-_2.12_-_telefonnummern_und_uhrzeiten.mp3',label:'2.12 - Telefonnummern & Uhrzeiten',labelAr:'أرقام الهاتف والأوقات' },
  { id:'LB_CD1_25', ch:2,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/25_langenschidt_-_2.13_-_angebote_im_supermarkt.mp3',     label:'2.13 - Supermarkt-Angebote',      labelAr:'عروض السوبرماركت' },
  { id:'LB_CD1_26', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/26_langenschidt_-_3.1b_-_gegenstande.mp3',                label:'3.1b - Gegenstände',              labelAr:'الأشياء' },
  { id:'LB_CD1_27', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/27_langenschidt_-_3.2a_-_was_kostet_....mp3',             label:'3.2a - Was kostet...?',           labelAr:'بكم يكلف؟' },
  { id:'LB_CD1_28', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/28_langenschidt_-_3.4a_-_was_kostet_wie_viel.mp3',        label:'3.4a - Was kostet wie viel?',     labelAr:'بكم؟' },
  { id:'LB_CD1_29', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/29_langenschidt_-_3.4c_-_sechs_dialoge.mp3',              label:'3.4c - Sechs Dialoge',            labelAr:'ستة حوارات' },
  { id:'LB_CD1_30', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/30_langenschidt_-_3.5a_-_das_ist_ein-eine,_kein-keine,_mein-meine_....mp3', label:'3.5a - ein/eine/kein/mein', labelAr:'أدوات النكرة والملكية' },
  { id:'LB_CD1_31', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/31_langenschidt_-_3.7b_-_ein_flohmarkt.mp3',              label:'3.7b - Ein Flohmarkt',            labelAr:'سوق مستعمل' },
  { id:'LB_CD1_35', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/35_langenschidt_-_3.12_-_zwei_gesprache.mp3',             label:'3.12 - Zwei Gespräche',           labelAr:'محادثتان' },
  { id:'LB_CD1_36', ch:3,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/36_langenschidt_-_r1.2_-_dialoge.mp3',                    label:'R1.2 - Dialoge (Wiederholung)',    labelAr:'حوارات مراجعة' },
  { id:'LB_CD1_37', ch:4,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/37_langenschidt_-_4.2a_-_wie_spat_ist_es.mp3',            label:'4.2a - Wie spät ist es?',         labelAr:'كم الساعة؟' },
  { id:'LB_CD1_38', ch:4,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/38_langenschidt_-_4.5_-_wortakzent_und_rhythmus.mp3',     label:'4.5 - Wortakzent und Rhythmus',   labelAr:'نبرة الكلمة' },
  { id:'LB_CD1_39', ch:4,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/39_langenschidt_-_4.8a_-_interviews_im_kurs.mp3',         label:'4.8a - Interviews im Kurs',       labelAr:'مقابلات في الفصل' },
  { id:'LB_CD1_40', ch:4,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/40_langenschidt_-_4.9b_-_kommst_du_mit_....mp3',          label:'4.9b - Kommst du mit?',           labelAr:'هل تأتي معي؟' },
  { id:'LB_CD1_41', ch:5,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/41_langenschidt_-_5.2b_-_einkaufen.mp3',                  label:'5.2b - Einkaufen',                labelAr:'التسوق' },
  { id:'LB_CD1_45', ch:5,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/45_langenschidt_-_5.8_-_matis_laden.mp3',                 label:"5.8 - Matis Laden",               labelAr:'متجر ماتي' },
  { id:'LB_CD1_46', ch:5,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/46_langenschidt_-_5.10a_-_was_kochen_wir.mp3',            label:'5.10a - Was kochen wir?',         labelAr:'ماذا نطبخ؟' },
  { id:'LB_CD1_47', ch:5,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/47_langenschidt_-_5.10b_-_die_zubereitung.mp3',           label:'5.10b - Die Zubereitung',         labelAr:'طريقة التحضير' },
  { id:'LB_CD1_48', ch:5,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/48_langenschidt_-_5.14_-_omas_tipps.mp3',                 label:"5.14 - Omas Tipps",               labelAr:'نصائح الجدة' },
  { id:'LB_CD1_49', ch:6,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/49_langenschidt_-_6.1a_-_familienfotos.mp3',              label:'6.1a - Familienfotos',            labelAr:'صور العائلة' },
  { id:'LB_CD1_50', ch:6,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/50_langenschidt_-_6.2a_-_wie_gross_ist_ihre_familie.mp3', label:'6.2a - Wie groß ist Ihre Familie?',labelAr:'كم عدد أفراد عائلتك؟' },
  { id:'LB_CD1_52', ch:6,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/52_langenschidt_-_6.7a-b_-_bens_geburtstag.mp3',         label:"6.7 - Bens Geburtstag",           labelAr:'عيد ميلاد بن' },
  { id:'LB_CD1_53', ch:6,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/53_langenschidt_-_6.7d_-_gluckwunsche.mp3',               label:'6.7d - Glückwünsche',             labelAr:'التهاني' },

  // ── CD2 Lernbuch ──────────────────────────────────────────
  { id:'LB_CD2_01', ch:0,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/01_langenschidt_-_vorspann.mp3',                                         label:'CD2 - Vorspann',                               labelAr:'مقدمة القرص الثاني' },
  { id:'LB_CD2_02', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/02_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_1.mp3',                label:'7.2 - Berlin kennenlernen (1)',                 labelAr:'التعرف على برلين - حوار 1' },
  { id:'LB_CD2_03', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/03_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_2.mp3',                label:'7.2 - Berlin kennenlernen (2)',                 labelAr:'التعرف على برلين - حوار 2' },
  { id:'LB_CD2_04', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/04_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_3.mp3',                label:'7.2 - Berlin kennenlernen (3)',                 labelAr:'التعرف على برلين - حوار 3' },
  { id:'LB_CD2_05', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/05_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_4.mp3',                label:'7.2 - Berlin kennenlernen (4)',                 labelAr:'التعرف على برلين - حوار 4' },
  { id:'LB_CD2_06', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/06_langenschidt_-_7.3_-_wo_ist_bitte_..._wie_komme_ich_..._ich_suche_....mp3', label:'7.3 - Wegbeschreibung',                           labelAr:'وصف الطريق' },
  { id:'LB_CD2_07', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/07_langenschidt_-_7.5a_-_prapositionen_mit_dativ.mp3',                     label:'7.5a - Präpositionen mit Dativ',                 labelAr:'حروف الجر مع حالة الجر' },
  { id:'LB_CD2_08', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/08_langenschidt_-_7.5c_-_c.mp3',                                           label:'7.5c - Übung',                                 labelAr:'تمرين حروف الجر' },
  { id:'LB_CD2_09', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/09_langenschidt_-_7.7_-_frau_lipinskas_neue_firma,_dialog_1.mp3',          label:'7.7 - Frau Lipinskas Firma (1)',                labelAr:'شركة السيدة ليبينسكا الجديدة 1' },
  { id:'LB_CD2_10', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/10_langenschidt_-_7.7_-_frau_lipinskas_neue_firma,_dialog_2.mp3',          label:'7.7 - Frau Lipinskas Firma (2)',                labelAr:'شركة السيدة ليبينسكا الجديدة 2' },
  { id:'LB_CD2_11', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/11_langenschidt_-_7.7_-_frau_lipinskas_neue_firma,_dialog_3.mp3',          label:'7.7 - Frau Lipinskas Firma (3)',                labelAr:'شركة السيدة ليبينسكا الجديدة 3' },
  { id:'LB_CD2_12', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/12_langenschidt_-_7.7_-_frau_lipinskas_neue_firma,_dialog_4.mp3',          label:'7.7 - Frau Lipinskas Firma (4)',                labelAr:'شركة السيدة ليبينسكا الجديدة 4' },
  { id:'LB_CD2_13', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/13_langenschidt_-_7.7_-_frau_lipinskas_neue_firma,_dialog_5.mp3',          label:'7.7 - Frau Lipinskas Firma (5)',                labelAr:'شركة السيدة ليبينسكا الجديدة 5' },
  { id:'LB_CD2_14', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/14_langenschidt_-_7.9a_-_die_konsonanten_p,_t,_k_und_b,_d,_g.mp3',         label:'7.9a - Konsonanten p, t, k / b, d, g',           labelAr:'الأصوات الساكنة ونطقها' },
  { id:'LB_CD2_15', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/15_langenschidt_-_7.9b_-_b.mp3',                                           label:'7.9b - Übung',                                 labelAr:'تمرين الأصوات الساكنة' },
  { id:'LB_CD2_16', ch:7,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/16_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_1.mp3',            label:'8.2 - Wohnungssuche (1)',                       labelAr:'البحث عن شقة - حوار 1' },
  { id:'LB_CD2_17', ch:7,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/17_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_2.mp3',            label:'8.2 - Wohnungssuche (2)',                       labelAr:'البحث عن شقة - حوار 2' },
  { id:'LB_CD2_18', ch:7,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/18_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_3.mp3',            label:'8.2 - Wohnungssuche (3)',                       labelAr:'البحث عن شقة - حوار 3' },
  { id:'LB_CD2_19', ch:7,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/19_langenschidt_-_8.7_-_magdas_wohnung.mp3',                               label:'8.7 - Magdas Wohnung',                         labelAr:'شقة ماغدا' },
  { id:'LB_CD2_20', ch:7,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/20_langenschidt_-_8.10a_-_w,_f-v,_s.mp3',                                  label:'8.10a - Konsonanten w, f-v, s',                 labelAr:'نطق الحروف w, f-v, s' },
  { id:'LB_CD2_21', ch:7,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/21_langenschidt_-_8.10b_-_b.mp3',                                         label:'8.10b - Übung',                                 labelAr:'تمرين نطق الحروف' },
  { id:'LB_CD2_22', ch:7,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/22_langenschidt_-_8.12_-_der_umzug.mp3',                                   label:'8.12 - Der Umzug',                              labelAr:'الانتقال للسكن الجديد' },
  { id:'LB_CD2_23', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/23_langenschidt_-_9.1_-_das_wochenende.mp3',                               label:'9.1 - Das Wochenende',                          labelAr:'عطلة نهاية الأسبوع' },
  { id:'LB_CD2_24', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/24_langenschidt_-_9.6a_-_h-laut.mp3',                                      label:'9.6a - H-Laut',                                 labelAr:'نطق صوت الـ H' },
  { id:'LB_CD2_25', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/25_langenschidt_-_9.6b_-_vokal-neueinsatz.mp3',                            label:'9.6b - Vokal-Neueinsatz',                       labelAr:'نطق السواكن والعلل' },
  { id:'LB_CD2_26', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/26_langenschidt_-_9.7_-_das_fotoalbum_von_swetlana_riesen.mp3',            label:'9.7 - Das Fotoalbum',                           labelAr:'ألبوم الصور لسفيتلانا ريزن' },
  { id:'LB_CD2_27', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/27_langenschidt_-_9.10c_-_wiener_geschichten.mp3',                         label:'9.10c - Wiener Geschichten',                    labelAr:'قصص فيينا' },
  { id:'LB_CD2_28', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/28_langenschidt_-_9.10d_-_d.mp3',                                         label:'9.10d - Übung',                                 labelAr:'تمرين قصص فيينا (1)' },
  { id:'LB_CD2_29', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/29_langenschidt_-_9.10e_-_e.mp3',                                         label:'9.10e - Übung',                                 labelAr:'تمرين قصص فيينا (2)' },
  { id:'LB_CD2_30', ch:10, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/30_langenschidt_-_9.10f_-_f.mp3',                                         label:'9.10f - Übung',                                 labelAr:'تمرين قصص فيينا (3)' },
  { id:'LB_CD2_31', ch:9,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/31_langenschidt_-_r3.1_-_wege_beschreiben.mp3',                             label:'R3.1 - Wege beschreiben (Review)',              labelAr:'مراجعة وصف الطرق' },
  { id:'LB_CD2_32', ch:11, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/32_langenschidt_-_10.2_-_arbeitsalltag.mp3',                               label:'10.2 - Arbeitsalltag',                          labelAr:'روتين العمل اليومي' },
  { id:'LB_CD2_33', ch:11, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/33_langenschidt_-_10.5_-_im_personalburo.mp3',                             label:'10.5 - Im Personalbüro',                        labelAr:'في مكتب شؤون الموظفين' },
  { id:'LB_CD2_34', ch:11, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/34_langenschidt_-_10.6a_-_ich-laut,_ach-laut,_sch.mp3',                    label:'10.6a - Ich-Laut, Ach-Laut, Sch',               labelAr:'نطق ch و sch' },
  { id:'LB_CD2_35', ch:11, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/35_langenschidt_-_10.6b_-_b.mp3',                                         label:'10.6b - Übung',                                 labelAr:'تمرين نطق الأصوات' },
  { id:'LB_CD2_36', ch:11, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/36_langenschidt_-_10.10_-_zwei_telefongesprache,_gesprach_1.mp3',          label:'10.10 - Telefongespräch (1)',                   labelAr:'مكالمة هاتفية 1' },
  { id:'LB_CD2_37', ch:11, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/37_langenschidt_-_10.10_-_zwei_telefongesprache,_gesprach_2.mp3',          label:'10.10 - Telefongespräch (2)',                   labelAr:'مكالمة هاتفية 2' },
  { id:'LB_CD2_38', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/38_langenschidt_-_11.1b_-_der_korper.mp3',                                 label:'11.1b - Der Körper',                            labelAr:'أجزاء الجسم' },
  { id:'LB_CD2_39', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/39_langenschidt_-_11.1c_-_c.mp3',                                           label:'11.1c - Übung',                                 labelAr:'تمرين أجزاء الجسم' },
  { id:'LB_CD2_40', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/40_langenschidt_-_11.3_-_im_fitness-studio.mp3',                             label:'11.3 - Im Fitness-Studio',                      labelAr:'في صالة الألعاب الرياضية' },
  { id:'LB_CD2_41', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/41_langenschidt_-_11.5_-_bei_der_hausarztin,_dialog_1.mp3',                label:'11.5 - Bei der Hausärztin (1)',                 labelAr:'عند الطبيبة - حوار 1' },
  { id:'LB_CD2_42', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/42_langenschidt_-_11.5_-_bei_der_hausarztin,_dialog_2.mp3',                label:'11.5 - Bei der Hausärztin (2)',                 labelAr:'عند الطبيبة - حوار 2' },
  { id:'LB_CD2_43', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/43_langenschidt_-_11.6_-_fragen_und_antworten_beim_arzt.mp3',                label:'11.6 - Fragen beim Arzt',                       labelAr:'أسئلة وأجوبة عند الطبيب' },
  { id:'LB_CD2_44', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/44_langenschidt_-_11.7_-_modalverben_-_sollen_und_durfen.mp3',             label:'11.7 - Sollen und Dürfen',                      labelAr:'الأفعال المساعدة sollen و dürfen' },
  { id:'LB_CD2_45', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/45_langenschidt_-_11.9_-_termine_machen,_absagen,_verschieben.mp3',         label:'11.9 - Termine machen',                         labelAr:'تحديد وإلغاء وتأجيل المواعيد' },
  { id:'LB_CD2_46', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/46_langenschidt_-_11.11_-_ja_oder_doch.mp3',                                 label:'11.11 - Ja oder Doch',                          labelAr:'الإجابة بـ Ja أو Doch' },
  { id:'LB_CD2_47', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/47_langenschidt_-_11.12a_-_r.mp3',                                         label:'11.12a - R-Laut',                               labelAr:'نطق حرف الـ R' },
  { id:'LB_CD2_48', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/48_langenschidt_-_11.12b_-_b.mp3',                                         label:'11.12b - Übung',                                labelAr:'تمرين نطق حرف R' },
  { id:'LB_CD2_49', ch:8,  file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/49_langenschidt_-_11.14_-_zwei_interviews.mp3',                              label:'11.14 - Zwei Interviews',                       labelAr:'مقابلتان شخصيتان' },
  { id:'LB_CD2_50', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/50_langenschidt_-_12.1_-_bilder_und_worter.mp3',                           label:'12.1 - Bilder und Wörter',                      labelAr:'الصور والكلمات' },
  { id:'LB_CD2_51', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/51_langenschidt_-_12.3_-_eine_reise_buchen.mp3',                           label:'12.3 - Eine Reise buchen',                      labelAr:'حجز رحلة سفر' },
  { id:'LB_CD2_52', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/52_langenschidt_-_12.6_-_fahrkarten_kaufen.mp3',                           label:'12.6 - Fahrkarten kaufen',                      labelAr:'شراء التذاكر' },
  { id:'LB_CD2_53', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/53_langenschidt_-_12.7_-_an_der_rezeption.mp3',                           label:'12.7 - An der Rezeption',                       labelAr:'في الاستقبال' },
  { id:'LB_CD2_54', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/54_langenschidt_-_12.8_-_das_wetter.mp3',                                   label:'12.8 - Das Wetter',                             labelAr:'الطقس' },
  { id:'LB_CD2_55', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/55_langenschidt_-_12.10_-_zwei_konsonanten.mp3',                           label:'12.10 - Zwei Konsonanten',                      labelAr:'صوتان ساكنان مزدوجان' },
  { id:'LB_CD2_56', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/56_langenschidt_-_12.12_-_ein_kursausflug,_dialog_1.mp3',                   label:'12.12 - Exkursion (1)',                         labelAr:'رحلة الصف - حوار 1' },
  { id:'LB_CD2_57', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/57_langenschidt_-_12.12_-_ein_kursausflug,_dialog_2.mp3',                   label:'12.12 - Exkursion (2)',                         labelAr:'رحلة الصف - حوار 2' },
  { id:'LB_CD2_58', ch:12, file:'Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/58_langenschidt_-_12.12_-_ein_kursausflug,_dialog_3.mp3',                   label:'12.12 - Exkursion (3)',                         labelAr:'رحلة الصف - حوار 3' }
];

// ── Audio Player State ──────────────────────────────────────
let currentAudio = null;
let currentTrackId = null;
let isPlaying = false;

// ── Initialize Audio Player ─────────────────────────────────
function initAudioPlayer() {
  const audio = document.getElementById('globalAudio');
  if (!audio) return;
  audio.volume = 1;
}

// ── Play Track ──────────────────────────────────────────────
function playTrack(trackId, filePath, trackName, chapterName) {
  const audio = document.getElementById('globalAudio');
  const player = document.getElementById('globalAudioPlayer');
  const nameEl = document.getElementById('audioTrackName');
  const chEl   = document.getElementById('audioChapterName');

  if (!audio || !player) return;

  // If same track, toggle
  if (currentTrackId === trackId && isPlaying) {
    audio.pause();
    isPlaying = false;
    updatePlayBtn();
    updateAudioListUI();
    return;
  }

  // Load new track
  audio.src = filePath;
  currentTrackId = trackId;
  nameEl.textContent = trackName;
  chEl.textContent = chapterName || '';
  player.style.display = 'block';
  document.body.classList.add('audio-player-active');

  audio.play().then(() => {
    isPlaying = true;
    updatePlayBtn();
    updateAudioListUI();
  }).catch(err => {
    console.warn('Audio error:', err);
    showToast('تعذر تشغيل الملف الصوتي. تأكد من مسار الملف.', 'error');
  });
}

// ── Toggle Play/Pause ───────────────────────────────────────
function toggleAudio() {
  const audio = document.getElementById('globalAudio');
  if (!audio) return;

  if (audio.paused) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
  updatePlayBtn();
  updateAudioListUI();
}

// ── Seek ────────────────────────────────────────────────────
function seekAudio(seconds) {
  const audio = document.getElementById('globalAudio');
  if (!audio) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
}

function seekToPosition(event) {
  const audio = document.getElementById('globalAudio');
  const bar = event.currentTarget;
  if (!audio || !audio.duration) return;
  const rect = bar.getBoundingClientRect();
  const pct = (event.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
}

// ── Volume ──────────────────────────────────────────────────
function setVolume(val) {
  const audio = document.getElementById('globalAudio');
  if (audio) audio.volume = val;
}

// ── Close Player ────────────────────────────────────────────
function closeAudioPlayer() {
  const audio = document.getElementById('globalAudio');
  const player = document.getElementById('globalAudioPlayer');
  if (audio) { audio.pause(); audio.src = ''; }
  if (player) {
    player.style.display = 'none';
    document.body.classList.remove('audio-player-active');
  }
  isPlaying = false;
  currentTrackId = null;
  updateAudioListUI();
}

// ── Callbacks ───────────────────────────────────────────────
function audioEnded() {
  isPlaying = false;
  updatePlayBtn();
  updateAudioListUI();
}

function updateAudioProgress() {
  const audio = document.getElementById('globalAudio');
  const fill = document.getElementById('audioProgressFill');
  const curEl = document.getElementById('audioCurrentTime');
  if (!audio || !fill) return;
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  fill.style.width = pct + '%';
  curEl.textContent = formatTime(audio.currentTime);
}

function audioLoaded() {
  const audio = document.getElementById('globalAudio');
  const durEl = document.getElementById('audioDuration');
  if (audio && durEl) durEl.textContent = formatTime(audio.duration);
}

function updatePlayBtn() {
  const btn = document.getElementById('audioPlayBtn');
  if (btn) btn.textContent = isPlaying ? '⏸' : '▶';
}

function updateAudioListUI() {
  document.querySelectorAll('.audio-item').forEach(item => {
    const tid = item.dataset.trackId;
    if (tid === currentTrackId && isPlaying) {
      item.classList.add('playing');
      const icon = item.querySelector('.audio-play-icon');
      if (icon) icon.innerHTML = '<div class="waveform"><div class="waveform-bar"></div><div class="waveform-bar"></div><div class="waveform-bar"></div><div class="waveform-bar"></div><div class="waveform-bar"></div></div>';
    } else {
      item.classList.remove('playing');
      const icon = item.querySelector('.audio-play-icon');
      if (icon) icon.textContent = '▶';
    }
  });
}

// ── Time Formatter ──────────────────────────────────────────
function formatTime(secs) {
  if (!secs || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return m + ':' + String(s).padStart(2, '0');
}

// ── Build Audio List HTML ───────────────────────────────────
function buildAudioList(filterCh = 'all') {
  const container = document.getElementById('audioList');
  if (!container) return;

  const tracks = filterCh === 'all'
    ? AUDIO_TRACKS
    : AUDIO_TRACKS.filter(t => String(t.ch) === String(filterCh));

  if (tracks.length === 0) {
    container.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:40px">${getTranslation('no_audio_files', 'لا توجد ملفات صوتية لهذه الوحدة')}</div>`;
    return;
  }

  container.innerHTML = tracks.map(t => {
    const chData = t.ch > 0 ? CURRICULUM[t.ch - 1] : null;
    const chLabel = chData ? `${getTranslation('chapter_label', 'الوحدة')} ${t.ch}: ${getChapterTitle(chData)}` : getTranslation('audio_general', 'عام');
    return `
    <div class="audio-item" data-track-id="${t.id}" onclick="playTrack('${t.id}', '${t.file.replace(/'/g,"\\'")}', '${t.label.replace(/'/g,"\\'")}', '${chLabel}')">
      <div class="audio-play-icon">▶</div>
      <div class="audio-item-info">
        <div class="audio-item-title">${t.label}</div>
        <div class="audio-item-meta">${getAudioLabelTrans(t)}</div>
      </div>
      <div class="audio-item-chapter">${chLabel}</div>
    </div>`;
  }).join('');
}

// ── Build Audio Chapter Filter ──────────────────────────────
function buildAudioChapterFilter() {
  const sel = document.getElementById('audioChapterFilter');
  if (!sel) return;
  
  // Clear dynamic options first, keep the first one
  while (sel.options.length > 1) {
    sel.remove(1);
  }

  const usedChapters = [...new Set(AUDIO_TRACKS.map(t => t.ch))].sort((a,b)=>a-b);
  usedChapters.forEach(ch => {
    if (ch === 0) return;
    const chData = CURRICULUM[ch - 1];
    const opt = document.createElement('option');
    opt.value = ch;
    opt.textContent = `${getTranslation('chapter_label', 'الوحدة')} ${ch}: ${chData ? getChapterTitle(chData) : ''}`;
    sel.appendChild(opt);
  });
}

function filterAudio() {
  const sel = document.getElementById('audioChapterFilter');
  buildAudioList(sel ? sel.value : 'all');
}

// ── Text-to-Speech ──────────────────────────────────────────
function speakGerman(text) {
  if (!window.speechSynthesis) {
    showToast('المتصفح لا يدعم النطق الآلي', 'warning');
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'de-DE';
  utter.rate = 0.85;
  utter.pitch = 1;

  // Try to find a German voice
  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de'));
  if (deVoice) utter.voice = deVoice;

  window.speechSynthesis.speak(utter);
}

// ── Speech Recognition ──────────────────────────────────────
let recognizer = null;
let isRecording = false;

function startSpeechRecognition(onResult, onEnd) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('المتصفح لا يدعم التعرف على الصوت. استخدم Chrome.', 'warning');
    onEnd && onEnd('');
    return;
  }
  recognizer = new SpeechRecognition();
  recognizer.lang = 'de-DE';
  recognizer.continuous = false;
  recognizer.interimResults = false;
  recognizer.onresult = e => {
    const transcript = e.results[0][0].transcript;
    onResult && onResult(transcript);
  };
  recognizer.onerror = () => {
    onEnd && onEnd('');
  };
  recognizer.onend = () => {
    isRecording = false;
    onEnd && onEnd('');
  };
  recognizer.start();
  isRecording = true;
}

function stopSpeechRecognition() {
  if (recognizer) recognizer.stop();
  isRecording = false;
}
