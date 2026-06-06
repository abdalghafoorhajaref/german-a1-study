// ============================================================
// APP.JS - Main Application Controller
// Berliner Platz 1 Neu A1 Learning Platform
// ============================================================

// ── State ────────────────────────────────────────────────────
let currentPage = 'dashboard';
let currentLesson = null;
let currentLessonTab = 'text';
let currentLessonSection = 0;

// Flashcard state
let fcDeck = [];
let fcIndex = 0;
let fcFlipped = false;
let fcScores = { easy: 0, medium: 0, hard: 0 };

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAudioPlayer();
  checkDailyStreak();
  buildSidebarChapters();
  buildChaptersGrid();
  buildVocabFilters();
  buildAudioChapterFilter();
  populateGrammarPage();
  buildQuizSelection();
  setupFlashcards();
  setDailyContent();
  updateDashboardStats();
  loadVoices();

  // Register sidebar listeners inside DOMContentLoaded
  document.getElementById('sidebarToggle')?.addEventListener('click', toggleSidebar);
  document.getElementById('mobileMenuBtn')?.addEventListener('click', toggleSidebar);
});

function loadVoices() {
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
}

// ── Navigation ────────────────────────────────────────────────
function navigateTo(page, data) {
  // Close sidebar on mobile
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebarBackdrop')?.classList.remove('active');

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const pageEl = document.getElementById('page-' + page);
  if (!pageEl) return;
  pageEl.classList.add('active');
  currentPage = page;

  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  // Page-specific init
  if (page === 'vocabulary') renderVocabGrid();
  if (page === 'listening') buildAudioList();
  if (page === 'quiz') {
    // Reset quiz to selection screen
    const qs = document.getElementById('quizSelection');
    const qa = document.getElementById('quizActive');
    const qr = document.getElementById('quizResults');
    if (qs) qs.style.display = 'grid';
    if (qa) qa.style.display = 'none';
    if (qr) qr.style.display = 'none';
    buildQuizSelection();
  }
  if (page === 'flashcards') setupFlashcards();
  if (page === 'grammar') populateGrammarPage();
  if (page === 'writing') buildWritingPage();
  if (page === 'conversation') backToConvMenu();
  if (page === 'lesson' && data) openLesson(data);
  if (page === 'summarizer') initSummarizer();

  // Scroll to top
  document.getElementById('mainContent').scrollTop = 0;
}

// ── Translation Helpers ────────────────────────────────────────
function getTranslation(key, fallback = '') {
  if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
    return TRANSLATIONS[currentLang][key];
  }
  return fallback;
}

function getChapterTitle(ch) {
  if (!ch) return '';
  if (currentLang === 'ar') return ch.titleAr;
  if (currentLang === 'tr') return ch.titleTr || ch.titleEn || ch.titleDe || ch.titleAr;
  if (currentLang === 'ro') return ch.titleRo || ch.titleEn || ch.titleDe || ch.titleAr;
  if (currentLang === 'bs') return ch.titleBs || ch.titleEn || ch.titleDe || '';
  return ch.titleEn || ch.titleDe || ch.titleAr;
}

function getChapterTopics(ch) {
  if (!ch) return [];
  if (currentLang === 'ar') return ch.topics || [];
  if (currentLang === 'tr') return ch.topicsTr || ch.topicsEn || ch.topics || [];
  if (currentLang === 'ro') return ch.topicsRo || ch.topicsEn || ch.topics || [];
  if (currentLang === 'bs') return ch.topicsBs || ch.topicsEn || [];
  return ch.topicsEn || ch.topics || [];
}

function getChapterCanDo(ch) {
  if (!ch) return '';
  if (currentLang === 'ar') return ch.canDo;
  if (currentLang === 'tr') return ch.canDoTr || ch.canDoEn || ch.canDoDe || ch.canDo;
  if (currentLang === 'ro') return ch.canDoRo || ch.canDoEn || ch.canDoDe || ch.canDo;
  if (currentLang === 'bs') return ch.canDoBs || ch.canDoEn || ch.canDoDe || '';
  return ch.canDoEn || ch.canDoDe || ch.canDo;
}

function getDialogueTitle(d) {
  if (!d) return '';
  if (currentLang === 'ar') return d.titleAr;
  if (currentLang === 'tr') return d.titleTr || d.titleEn || d.title || d.titleAr;
  if (currentLang === 'ro') return d.titleRo || d.titleEn || d.title || d.titleAr;
  if (currentLang === 'bs') return d.titleBs || d.titleEn || d.title || '';
  return d.titleEn || d.title || d.titleAr;
}

function getDialogueLineTrans(line) {
  if (!line) return '';
  if (currentLang === 'ar') return line.ar;
  if (currentLang === 'tr') return line.tr || line.en || line.ar;
  if (currentLang === 'ro') return line.ro || line.en || line.ar;
  if (currentLang === 'bs') return line.bs || line.en || line.de || '';
  return line.en || line.ar;
}

function getReadingTitle(rt) {
  if (!rt) return '';
  if (currentLang === 'ar') return rt.titleAr;
  if (currentLang === 'tr') return rt.titleTr || rt.titleEn || rt.title || rt.titleAr;
  if (currentLang === 'ro') return rt.titleRo || rt.titleEn || rt.title || rt.titleAr;
  if (currentLang === 'bs') return rt.titleBs || rt.titleEn || rt.title || '';
  return rt.titleEn || rt.title || rt.titleAr;
}

function getParagraphTrans(p) {
  if (!p) return '';
  if (currentLang === 'ar') return p.ar;
  if (currentLang === 'tr') return p.tr || p.en || p.ar;
  if (currentLang === 'ro') return p.ro || p.en || p.ar;
  if (currentLang === 'bs') return p.bs || p.en || p.de || '';
  return p.en || p.ar;
}

function getQuestionText(q) {
  if (!q) return '';
  if (currentLang === 'ar') return q.qAr || q.q;
  if (currentLang === 'tr') return q.qTr || q.qEn || q.q;
  if (currentLang === 'ro') return q.qRo || q.qEn || q.q;
  if (currentLang === 'bs') return q.qBs || q.qEn || q.q || '';
  return q.qEn || q.q;
}

// Translate simple matching terms on LTR viewports
function getMatchItemTrans(word) {
  const matches = {
    "Guten Tag": { ar: "مرحباً/صباح الخير", en: "Good day / Hello", tr: "İyi günler / Merhaba", ro: "Bună ziua", bs: "Dobar dan" },
    "Danke": { ar: "شكراً", en: "Thank you", tr: "Teşekkürler", ro: "Mulțumesc", bs: "Hvala" },
    "Bitte": { ar: "من فضلك / عفواً", en: "Please / You're welcome", tr: "Lütfen / Rica ederim", ro: "Te rog / Cu plăcere", bs: "Molim" },
    "Tschüss": { ar: "مع السلامة", en: "Goodbye", tr: "Hoşçakal / Görüşürüz", ro: "La revedere / Pa", bs: "Ćao / Zbogom" }
  };
  if (matches[word]) {
    return matches[word][currentLang] || matches[word].en || word;
  }
  return word;
}

function getPairTranslation(pair) {
  if (!pair) return '';
  if (currentLang === 'ar') return pair.ar;
  if (currentLang === 'tr') return pair.tr || pair.en || pair.ar;
  if (currentLang === 'ro') return pair.ro || pair.en || pair.ar;
  if (currentLang === 'bs') return pair.bs || pair.en || pair.de || '';
  return pair.en || pair.ar;
}

function getQuestionAnswerTrans(q) {
  if (!q) return '';
  if (currentLang === 'ar') return q.answerAr || q.answer;
  if (currentLang === 'tr') return q.answerTr || q.answerEn || q.answer;
  if (currentLang === 'ro') return q.answerRo || q.answerEn || q.answer;
  if (currentLang === 'bs') return q.answerBs || q.answerEn || q.answer || '';
  return q.answerEn || q.answer;
}

function getAudioLabelTrans(af) {
  if (!af) return '';
  if (currentLang === 'ar') return af.labelAr;
  if (currentLang === 'tr') return af.labelTr || af.labelEn || af.label;
  if (currentLang === 'ro') return af.labelRo || af.labelEn || af.label;
  if (currentLang === 'bs') return af.labelBs || af.labelEn || af.label || '';
  return af.labelEn || af.label;
}

function getGrammarTitle(g) {
  if (!g) return '';
  if (currentLang === 'ar') return g.title;
  if (currentLang === 'tr') return g.titleTr || g.titleEn || g.titleDe || g.title;
  if (currentLang === 'ro') return g.titleRo || g.titleEn || g.titleDe || g.title;
  if (currentLang === 'bs') return g.titleBs || g.titleEn || g.titleDe || g.title || '';
  return g.titleEn || g.titleDe || g.title;
}

function getGrammarExplanation(g) {
  if (!g) return '';
  if (currentLang === 'ar') return g.explanation;
  if (currentLang === 'tr') return g.explanationTr || g.explanationEn || g.explanation;
  if (currentLang === 'ro') return g.explanationRo || g.explanationEn || g.explanation;
  if (currentLang === 'bs') return g.explanationBs || g.explanationEn || g.explanation || '';
  return g.explanationEn || g.explanation;
}

function getRuleTranslation(r) {
  if (!r) return '';
  if (currentLang === 'ar') return r.translation;
  if (currentLang === 'tr') return r.translationTr || r.translationEn || r.translation;
  if (currentLang === 'ro') return r.translationRo || r.translationEn || r.translation;
  if (currentLang === 'bs') return r.translationBs || r.translationEn || '';
  return r.translationEn || r.translation;
}

function getRuleNote(r) {
  if (!r) return '';
  if (currentLang === 'ar') return r.note || '';
  if (currentLang === 'tr') return r.noteTr || r.noteEn || r.note || '';
  if (currentLang === 'ro') return r.noteRo || r.noteEn || r.note || '';
  if (currentLang === 'bs') return r.noteBs || r.noteEn || '';
  return r.noteEn || r.note || '';
}

function getTableHeader(idx, table) {
  if (currentLang === 'ar') return table.headers[idx];
  if (currentLang === 'tr') return (table.headersTr && table.headersTr[idx]) || (table.headersEn && table.headersEn[idx]) || table.headers[idx];
  if (currentLang === 'ro') return (table.headersRo && table.headersRo[idx]) || (table.headersEn && table.headersEn[idx]) || table.headers[idx];
  if (currentLang === 'bs') return (table.headersBs && table.headersBs[idx]) || (table.headersEn && table.headersEn[idx]) || '';
  return (table.headersEn && table.headersEn[idx]) || table.headers[idx];
}

function getTableCellTranslation(cell) {
  if (typeof cell !== 'string') return cell;
  if (cell.includes(' / ')) {
    const parts = cell.split(' / ');
    if (currentLang === 'ar') return parts[0];
    if (currentLang === 'en') return parts[1] || parts[0];
    if (currentLang === 'tr') return parts[2] || parts[1] || parts[0];
    if (currentLang === 'ro') return parts[3] || parts[1] || parts[0];
    if (currentLang === 'bs') return parts[4] || parts[1] || '';
  }
  return cell;
}

function getExerciseQuestionText(ex) {
  if (currentLang === 'ar') return ex.questionAr || ex.question;
  if (currentLang === 'tr') return ex.questionTr || ex.questionEn || ex.question;
  if (currentLang === 'ro') return ex.questionRo || ex.questionEn || ex.question;
  if (currentLang === 'bs') return ex.questionBs || ex.questionEn || ex.question || '';
  return ex.questionEn || ex.question;
}

function getExerciseQuestionTranslation(ex) {
  if (currentLang === 'ar') return ex.questionAr || '';
  if (currentLang === 'tr') return ex.questionTr || ex.questionEn || '';
  if (currentLang === 'ro') return ex.questionRo || ex.questionEn || '';
  if (currentLang === 'bs') return ex.questionBs || ex.questionEn || '';
  return ex.questionEn || '';
}

function getExerciseHintText(ex) {
  if (currentLang === 'ar') return ex.hint || '';
  if (currentLang === 'tr') return ex.hintTr || ex.hintEn || ex.hint || '';
  if (currentLang === 'ro') return ex.hintRo || ex.hintEn || ex.hint || '';
  if (currentLang === 'bs') return ex.hintBs || ex.hintEn || '';
  return ex.hintEn || ex.hint || '';
}

function getExerciseOption(opt, ex) {
  if (opt.includes(' / ')) {
    const parts = opt.split(' / ');
    if (currentLang === 'ar') return parts[0];
    if (currentLang === 'en') return parts[1] || parts[0];
    if (currentLang === 'tr') return parts[2] || parts[1] || parts[0];
    if (currentLang === 'ro') return parts[3] || parts[1] || parts[0];
    if (currentLang === 'bs') return parts[4] || parts[1] || '';
  }
  return opt;
}

function getWritingPromptText(wp) {
  if (currentLang === 'ar') return wp.prompt;
  if (currentLang === 'tr') return wp.promptTr || wp.promptEn || wp.prompt;
  if (currentLang === 'ro') return wp.promptRo || wp.promptEn || wp.prompt;
  if (currentLang === 'bs') return wp.promptBs || wp.promptEn || '';
  return wp.promptEn || wp.prompt;
}

function getWritingHelpers(wp) {
  if (currentLang === 'ar') return wp.helpers;
  if (currentLang === 'tr') return wp.helpersTr || wp.helpersEn || wp.helpers;
  if (currentLang === 'ro') return wp.helpersRo || wp.helpersEn || wp.helpers;
  if (currentLang === 'bs') return wp.helpersBs || wp.helpersEn || [];
  return wp.helpersEn || wp.helpers;
}

// ── Sidebar Chapter links ─────────────────────────────────────
function buildSidebarChapters() {
  const container = document.getElementById('chaptersList');
  if (!container) return;
  const saved = getSavedProgress();

  container.innerHTML = CURRICULUM.map(ch => {
    const prog = saved.chaptersProgress?.[ch.id] || 0;
    const done = prog >= 100;
    const title = getChapterTitle(ch);
    return `
    <div class="chapter-nav-item ${done ? 'completed' : ''}" onclick="openLesson(${ch.id})">
      <span>${ch.emoji} ${title}</span>
      <span class="chapter-nav-badge ${done ? 'done' : ''}">${done ? '✓' : `${prog}%`}</span>
    </div>`;
  }).join('');
}

// ── Dashboard Chapters Grid ───────────────────────────────────
function buildChaptersGrid() {
  const container = document.getElementById('chaptersGrid');
  if (!container) return;
  const saved = getSavedProgress();

  container.innerHTML = CURRICULUM.map((ch, idx) => {
    const prog = saved.chaptersProgress?.[ch.id] || 0;
    const status = prog >= 100 ? 'done' : prog > 0 ? 'inprogress' : '';
    
    let statusLabel = getTranslation('status_start', 'ابدأ الآن');
    if (prog >= 100) statusLabel = getTranslation('status_completed', '✓ مكتمل');
    else if (prog > 0) statusLabel = getTranslation('status_in_progress', 'جاري...');
    
    const locked = idx > 0 && (saved.chaptersProgress?.[CURRICULUM[idx-1].id] || 0) < 25;
    const title = getChapterTitle(ch);
    const topics = getChapterTopics(ch);

    return `
    <div class="chapter-card ${locked ? 'locked' : ''}" onclick="${locked ? '' : `openLesson(${ch.id})`}" style="border-top: 3px solid ${ch.color}">
      <div class="chapter-number">Kapitel ${ch.id}</div>
      <div class="chapter-title-de">${ch.emoji} ${ch.titleDe}</div>
      <div class="chapter-title-ar">${title}</div>
      <div class="chapter-topics">
        ${topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
      </div>
      <div class="chapter-footer">
        <div class="chapter-progress-mini"><div class="chapter-progress-fill" style="width:${prog}%;background:${ch.color}"></div></div>
        <span class="chapter-status ${status}">${statusLabel}</span>
      </div>
    </div>`;
  }).join('');
}

// ── Open Lesson ───────────────────────────────────────────────
function openLesson(chapterId) {
  const ch = CURRICULUM.find(c => c.id === chapterId);
  if (!ch) return;

  currentLesson = ch;
  currentLessonSection = 0;
  currentLessonTab = 'text';

  document.getElementById('lessonTitle').textContent = `${ch.emoji} ${ch.titleDe}`;
  document.getElementById('lessonSubtitle').textContent = getChapterTitle(ch) + ' · Kapitel ' + ch.id;

  navigateTo('lesson', null);
  updateLessonTabs();
  renderLessonContent();
}

// ── Lesson Tabs ───────────────────────────────────────────────
function switchLessonTab(tab) {
  currentLessonTab = tab;
  document.querySelectorAll('.lesson-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  currentLessonSection = 0;
  renderLessonContent();
}

function updateLessonTabs() {
  document.querySelectorAll('.lesson-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-tab="${currentLessonTab}"]`)?.classList.add('active');
}

// ── Render Lesson Content ─────────────────────────────────────
function renderLessonContent() {
  const ch = currentLesson;
  if (!ch) return;
  const container = document.getElementById('lessonContent');

  if (currentLessonTab === 'text') renderTextTab(ch, container);
  else if (currentLessonTab === 'vocab') renderVocabTab(ch, container);
  else if (currentLessonTab === 'grammar') renderGrammarTab(ch, container);
  else if (currentLessonTab === 'exercises') renderExercisesTab(ch, container);
}

function renderTextTab(ch, container) {
  const sections = [];

  // Can-do section
  sections.push(`
    <div class="lesson-text-section" style="margin-bottom:16px">
      <div style="background:rgba(79,142,247,0.08);border-radius:12px;padding:16px;margin-bottom:20px">
        <div style="font-size:12px;color:var(--accent-primary);font-weight:700;margin-bottom:6px">${getTranslation('lesson_cando_header', '🎯 بعد هذه الوحدة ستستطيع')}</div>
        <div style="font-size:15px;color:var(--text-primary)">${getChapterCanDo(ch)}</div>
        <div style="font-size:13px;color:var(--text-muted);font-family:'Inter',sans-serif;margin-top:4px">${ch.canDoDe}</div>
      </div>
    </div>`);

  // Dialogs
  ch.dialogs.forEach((dialog, i) => {
    const dTitle = getDialogueTitle(dialog);
    sections.push(`
      <div class="lesson-text-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <h3 style="font-size:18px;font-weight:700;color:var(--text-primary)">${dialog.title}</h3>
          <span style="font-size:13px;color:var(--text-secondary)">${dTitle}</span>
        </div>
        <div class="lesson-dialog">
          ${dialog.lines.map(line => {
            const lineTrans = getDialogueLineTrans(line);
            return `
            <div class="dialog-line">
              <span class="dialog-speaker">${line.speaker}:</span>
              <div class="dialog-content">
                <div class="dialog-de">${line.de}
                  <button class="tts-btn" onclick="speakGerman('${line.de.replace(/'/g,"\\'")}')">${getTranslation('btn_listen', '🔊 استمع')}</button>
                </div>
                <div class="dialog-ar">${lineTrans}</div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>`);
  });

  // Reading texts
  ch.readingTexts.forEach(rt => {
    const rtTitle = getReadingTitle(rt);
    sections.push(`
      <div class="lesson-text-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <h3 style="font-size:18px;font-weight:700;color:var(--text-primary)">${rt.title}</h3>
          <span style="font-size:13px;color:var(--text-secondary)">${rtTitle}</span>
        </div>
        <div class="reading-text-card" style="background:rgba(79,142,247,0.04);border-radius:12px;padding:20px">
          ${rt.text.map(p => {
            const pTrans = getParagraphTrans(p);
            return `
            <div style="margin-bottom:12px">
              <div style="font-size:16px;color:var(--text-primary);font-family:'Inter',sans-serif;margin-bottom:4px">${p.de}
                <button class="tts-btn" onclick="speakGerman('${p.de.replace(/'/g,"\\'")}')">🔊</button>
              </div>
              <div style="font-size:13px;color:var(--text-arabic)">${pTrans}</div>
            </div>`;
          }).join('')}
        </div>
        ${rt.questions.length > 0 ? `
          <div style="margin-top:16px">
            <div style="font-size:14px;font-weight:700;margin-bottom:12px">${getTranslation('comprehension_questions', '❓ أسئلة الفهم')}</div>
            ${rt.questions.map(q => {
              const qText = getQuestionText(q);
              const qAns = getQuestionAnswerTrans(q);
              return `
              <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:14px;margin-bottom:8px">
                <div style="font-size:14px;font-weight:600;margin-bottom:6px">📌 ${qText}</div>
                <div style="font-size:13px;color:var(--text-muted);margin-bottom:4px;font-family:'Inter',sans-serif">${q.q}</div>
                <button class="btn btn-ghost" style="font-size:12px;padding:6px 12px;margin-top:8px" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">${getTranslation('btn_show_answer', 'أظهر الإجابة')}</button>
                <div style="display:none;padding:8px;background:rgba(52,211,153,0.1);border-radius:6px;margin-top:8px">
                  <span style="color:var(--accent-success);font-family:'Inter',sans-serif">${q.answer}</span>
                  <span style="color:var(--text-arabic);margin-right:8px">${qAns}</span>
                </div>
              </div>`;
            }).join('')}
          </div>` : ''}
      </div>`);
  });

  // Audio Section
  if (ch.audioFiles && ch.audioFiles.length > 0) {
    sections.push(`
      <div class="lesson-text-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">${getTranslation('listening_exercises', '🎧 تمارين الاستماع')}</h3>
        <div class="audio-list" style="gap:8px">
          ${ch.audioFiles.map((af, i) => {
            const afLabelTrans = getAudioLabelTrans(af);
            const chLabel = getTranslation('chapter_label', 'الوحدة') + ' ' + ch.id;
            return `
            <div class="audio-item" data-track-id="ch${ch.id}_${i}" onclick="playTrack('ch${ch.id}_${i}', '${af.file}', '${af.label.replace(/'/g,"\\'")}', '${chLabel}')">
               <div class="audio-play-icon">▶</div>
               <div class="audio-item-info">
                 <div class="audio-item-title">${af.label}</div>
                 <div class="audio-item-meta">${afLabelTrans}</div>
               </div>
            </div>`;
          }).join('')}
        </div>
      </div>`);
  }

  // Speaking Section
  sections.push(`
    <div class="lesson-text-section">
      <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">${getTranslation('speaking_exercises', '🗣️ تمارين التحدث')}</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px">
        ${ch.speakingPhrases.map((p,i) => {
          const phraseTrans = currentLang === 'bs' ? (p.bs || p.en || '') : currentLang === 'ro' ? (p.ro || p.en || p.ar) : currentLang === 'tr' ? (p.tr || p.en || p.ar) : currentLang === 'en' ? (p.en || p.ar) : p.ar;
          return `
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:16px">
            <div style="font-size:16px;font-weight:700;color:var(--text-german);font-family:'Inter',sans-serif;margin-bottom:6px">${p.de}</div>
            <div style="font-size:13px;color:var(--text-arabic);margin-bottom:12px">${phraseTrans}</div>
            <div style="display:flex;gap:8px">
              <button class="tts-btn" onclick="speakGerman('${p.de.replace(/'/g,"\\'")}')">${getTranslation('btn_listen', '🔊 استمع')}</button>
              <button class="tts-btn" onclick="practicePhrase(${i}, '${p.de.replace(/'/g,"\\'")}')">${getTranslation('btn_practice', '🎤 تدرب')}</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`);

  // Writing prompt
  if (ch.writingPrompts && ch.writingPrompts.length > 0) {
    const wp = ch.writingPrompts[0];
    const wpPrompt = getWritingPromptText(wp);
    const wpHelpers = getWritingHelpers(wp);
    sections.push(`
      <div class="lesson-text-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">${getTranslation('writing_exercise', '✍️ تمرين الكتابة')}</h3>
        <div class="writing-prompt-card">
          <div class="writing-prompt-title">${getTranslation('writing_task', 'المهمة الكتابية')}</div>
          <div class="writing-prompt-text">${wpPrompt}</div>
          <div class="writing-prompt-hint">${wp.promptDe}</div>
        </div>
        <div style="margin-bottom:12px">
          <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">${getTranslation('word_helpers', '💡 كلمات مساعدة:')}</div>
          <div class="writing-toolbar">
            ${wpHelpers.map(h => `<span class="word-helper-chip" onclick="insertHelper('writingArea_${ch.id}','${h.replace(/'/g,"\\'")}') ">${h}</span>`).join('')}
          </div>
        </div>
        <textarea id="writingArea_${ch.id}" class="writing-area" placeholder="${getTranslation('writing_placeholder', 'اكتب هنا بالألمانية...')}" dir="ltr" oninput="updateWordCount(this)"></textarea>
        <div class="writing-count" id="wc_${ch.id}">0 ${getTranslation('words_count', 'كلمات')}</div>
        <div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="checkWriting('${ch.id}')">${getTranslation('btn_check_writing', 'تحقق من الكتابة')}</button>
          <button class="btn btn-ghost" onclick="showWritingExample('${ch.id}', '${wp.example.replace(/'/g,"\\'")}')">${getTranslation('btn_show_example', '💡 أظهر مثالاً')}</button>
        </div>
        <div id="writingFeedback_${ch.id}"></div>
      </div>`);
  }

  // Mark progress
  markLessonProgress(ch.id, 60);

  container.innerHTML = sections.join('');
}

function renderVocabTab(ch, container) {
  const vocab = VOCABULARY.filter(v => v.ch === ch.id);
  container.innerHTML = `
    <div class="vocab-cards-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">
      ${vocab.map(word => {
        const trans = currentLang === 'bs' ? (word.bs || word.en || '') : currentLang === 'ro' ? (word.ro || word.en) : currentLang === 'tr' ? (word.tr || word.en) : currentLang === 'en' ? word.en : word.ar;
        const typeInfo = TYPE_LABELS[word.type] || { ar: word.type, en: word.type, tr: word.type, ro: word.type, color: '#888' };
        const typeLabel = typeInfo[currentLang] || typeInfo.en || word.type;
        return `
        <div class="vocab-mini-card" onclick="speakGerman('${word.de.replace(/'/g,"\\'")}')">
          <div class="vm-de">${word.de}</div>
          <div class="vm-ar">${trans}</div>
          <div class="vm-type" style="color:${typeInfo.color}">${typeLabel}</div>
          ${word.example ? `<div style="font-size:11px;color:var(--text-muted);font-family:'Inter',sans-serif;margin-top:8px;font-style:italic">${word.example}</div>` : ''}
          <button class="tts-btn" style="margin-top:8px;font-size:11px" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊</button>
        </div>`;
      }).join('')}
    </div>`;

  // Mark progress
  markLessonProgress(ch.id, 80);
}

function renderGrammarTab(ch, container) {
  container.innerHTML = ch.grammar.map(g => {
    const gTitle = getGrammarTitle(g);
    const gExp = getGrammarExplanation(g);
    return `
    <div class="grammar-box open">
      <div class="grammar-header" onclick="this.parentElement.classList.toggle('open')">
        <span class="grammar-title">${gTitle}</span>
        <span class="grammar-toggle">▼</span>
      </div>
      <div class="grammar-body">
        ${gExp ? `<p style="color:var(--text-secondary);font-size:14px;margin-bottom:16px;line-height:1.7">${gExp}</p>` : ''}
        ${g.rules.map(r => {
          const ruleTrans = getRuleTranslation(r);
          const ruleNote = getRuleNote(r);
          return `
          <div class="grammar-rule">
            <div class="grammar-example">
              ${r.example}
              <button class="tts-btn" onclick="speakGerman('${r.example.replace(/'/g,"\\'")}')">🔊</button>
            </div>
            <div class="grammar-explanation">${ruleTrans}${ruleNote ? ` · ${ruleNote}` : ''}</div>
          </div>`;
        }).join('')}
        ${g.table ? `
          <table class="grammar-table">
            <thead><tr>${g.table.headers.map((h, hi) => `<th>${getTableHeader(hi, g.table)}</th>`).join('')}</tr></thead>
            <tbody>${g.table.rows.map(row => `<tr>${row.map(cell => `<td>${getTableCellTranslation(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}
      </div>
    </div>`;
  }).join('');
}

function renderExercisesTab(ch, container) {
  container.innerHTML = `
    <div class="exercise-list">
      ${ch.exercises.map((ex, i) => renderExercise(ex, i, ch.id)).join('')}
    </div>
    <div style="margin-top:24px;text-align:center">
      <button class="btn btn-primary" onclick="navigateTo('quiz');setTimeout(()=>startChapterQuiz(${ch.id}),300)">
        ${getTranslation('btn_start_unit_quiz', '🎯 ابدأ اختبار الوحدة')} ${ch.id}
      </button>
    </div>`;

  // Mark progress
  markLessonProgress(ch.id, 100);
}

function renderExercise(ex, idx, chId) {
  if (ex.type === 'mcq') {
    const qTrans = getExerciseQuestionTranslation(ex);
    const qTransHtml = qTrans ? `<div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${qTrans}</div>` : '';
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${ex.question}${qTransHtml}</div>
        <div class="options-grid" style="grid-template-columns:1fr 1fr">
          ${ex.options.map((opt, oi) => {
            const transOpt = getExerciseOption(opt);
            const escapedCorrect = getExerciseOption(ex.options[ex.answer]).replace(/'/g, "\\'");
            return `
            <button class="option-btn" onclick="checkExercise(this, ${oi}, ${ex.answer}, 'exFb_${chId}_${idx}', '${escapedCorrect}')">
              ${transOpt}
            </button>`;
          }).join('')}
        </div>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  else if (ex.type === 'fillblank') {
    const qTrans = getExerciseQuestionTranslation(ex);
    const qTransHtml = qTrans ? `<div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${qTrans}</div>` : '';
    const hintText = getExerciseHintText(ex);
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${ex.question}${qTransHtml}</div>
        ${hintText ? `<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">💡 ${hintText}</div>` : ''}
        <div style="display:flex;gap:8px;align-items:center">
          <input type="text" id="exInp_${chId}_${idx}" class="fill-blank-input" style="max-width:250px" placeholder="${getTranslation('fillblank_placeholder', 'اكتب إجابتك...')}" dir="ltr" />
          <button class="btn btn-primary" onclick="checkFillBlank('exInp_${chId}_${idx}', '${ex.answer.replace(/'/g,"\\'")}', 'exFb_${chId}_${idx}')">${getTranslation('btn_verify', 'تحقق')}</button>
        </div>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  else if (ex.type === 'order') {
    const shuffled = shuffle([...ex.words]);
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${getExerciseQuestionText(ex)}</div>
        <div class="word-answer-area" id="exAnswer_${chId}_${idx}"><span style="color:var(--text-muted);font-size:13px">${getTranslation('order_hint', 'انقر الكلمات لترتيبها...')}</span></div>
        <div class="word-order-bank" id="exBank_${chId}_${idx}">
          ${shuffled.map(w => `<span class="word-chip" onclick="placeWordEx(this, 'exAnswer_${chId}_${idx}', 'exBank_${chId}_${idx}', '${w}')">${w}</span>`).join('')}
        </div>
        <button class="btn btn-primary" style="margin-top:12px" onclick="checkOrderEx('exAnswer_${chId}_${idx}', '${ex.answer.replace(/'/g,"\\'")}', 'exFb_${chId}_${idx}')">${getTranslation('btn_verify', 'تحقق')}</button>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  else if (ex.type === 'matching') {
    const leftItems = ex.pairs.map(p => p.de);
    const rightItems = shuffle(ex.pairs.map(p => getPairTranslation(p)));
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${getExerciseQuestionText(ex)}</div>
        <div class="matching-grid">
          <div>
            ${leftItems.map((item, i) => `<div class="match-item de-item" id="matchL_${chId}_${idx}_${i}" data-pair="${i}" onclick="selectMatchItem(this, 'left', ${i}, '${chId}', ${idx})">${item}</div>`).join('')}
          </div>
          <div>
            ${rightItems.map((item, i) => {
              const pairIdx = ex.pairs.findIndex(p => getPairTranslation(p) === item);
              return `<div class="match-item ar-item" id="matchR_${chId}_${idx}_${i}" data-pair="${pairIdx}" onclick="selectMatchItem(this, 'right', ${i}, '${chId}', ${idx})">${item}</div>`;
            }).join('')}
          </div>
        </div>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  return `<div class="exercise-item"><div class="exercise-question">${idx+1}. ${getExerciseQuestionText(ex) || ''}</div></div>`;
}

// ── Exercise Checkers ─────────────────────────────────────────
function checkExercise(btn, selectedIdx, correctIdx, fbId, correctText) {
  const allBtns = btn.closest('.options-grid').querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);
  if (selectedIdx === correctIdx) {
    btn.classList.add('correct');
    showFeedback(fbId, true, getTranslation('feedback_correct', 'صحيح! ممتاز! 🎉'));
    addScore(10);
  } else {
    btn.classList.add('wrong');
    allBtns[correctIdx].classList.add('correct');
    showFeedback(fbId, false, `${getTranslation('feedback_correct_answer', 'الإجابة الصحيحة:')} "${correctText}"`);
  }
}

// Fill in the blank checker
function checkFillBlank(inputId, correctAnswer, fbId) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  const userVal = inp.value.trim().toLowerCase();
  const accepted = correctAnswer.split('/').map(a => a.trim().toLowerCase());
  if (accepted.includes(userVal)) {
    inp.classList.add('correct');
    inp.disabled = true;
    showFeedback(fbId, true, getTranslation('feedback_correct', 'صحيح! ممتاز!'));
    addScore(15);
  } else {
    inp.classList.add('wrong');
    showFeedback(fbId, false, `${getTranslation('feedback_correct_answer', 'الإجابة الصحيحة:')} "${correctAnswer}"`);
    setTimeout(() => { inp.classList.remove('wrong'); }, 1000);
  }
}

function placeWordEx(chip, answerId, bankId, word) {
  if (chip.classList.contains('placed')) return;
  chip.classList.add('placed');
  const area = document.getElementById(answerId);
  if (!area) return;
  const placed = document.createElement('span');
  placed.className = 'placed-chip';
  placed.textContent = word;
  placed.onclick = () => {
    placed.remove();
    chip.classList.remove('placed');
  };
  // Remove placeholder
  const ph = area.querySelector('span[style]');
  if (ph) ph.remove();
  area.appendChild(placed);
}

function checkOrderEx(answerId, correctAnswer, fbId) {
  const area = document.getElementById(answerId);
  if (!area) return;
  const words = [...area.querySelectorAll('.placed-chip')].map(c => c.textContent);
  const result = words.join(' ');
  if (result.trim() === correctAnswer.trim()) {
    showFeedback(fbId, true, getTranslation('feedback_correct', 'صحيح! ممتاز!'));
    addScore(20);
  } else {
    showFeedback(fbId, false, `${getTranslation('feedback_correct_order', 'الترتيب الصحيح:')} "${correctAnswer}"`);
  }
}

// Matching state
let matchState = {};

function selectMatchItem(el, side, idx, chId, exIdx) {
  const key = `${chId}_${exIdx}`;
  if (!matchState[key]) matchState[key] = { left: null, right: null };
  const state = matchState[key];

  el.classList.add('selected');

  if (side === 'left') {
    // Deselect previous left
    document.querySelectorAll(`[id^="matchL_${chId}_${exIdx}_"]`).forEach(e => { if (e !== el && !e.classList.contains('matched')) e.classList.remove('selected'); });
    state.left = { el, pair: parseInt(el.dataset.pair) };
  } else {
    document.querySelectorAll(`[id^="matchR_${chId}_${exIdx}_"]`).forEach(e => { if (e !== el && !e.classList.contains('matched')) e.classList.remove('selected'); });
    state.right = { el, pair: parseInt(el.dataset.pair) };
  }

  // Check if both sides selected
  if (state.left && state.right) {
    if (state.left.pair === state.right.pair) {
      state.left.el.classList.add('matched');
      state.right.el.classList.add('matched');
      state.left.el.classList.remove('selected');
      state.right.el.classList.remove('selected');
      state.left = null; state.right = null;
      showToast(getTranslation('toast_match_correct', 'تطابق صحيح! 🎉'), 'success');
      addScore(10);
    } else {
      state.left.el.classList.remove('selected');
      state.right.el.classList.remove('selected');
      state.left = null; state.right = null;
      showToast(getTranslation('toast_match_incorrect', 'لا تطابق. حاول مجدداً!'), 'error');
    }
  }
}

function showFeedback(fbId, correct, msg) {
  const el = document.getElementById(fbId);
  if (!el) return;
  el.className = `exercise-feedback ${correct ? 'correct' : 'wrong'}`;
  el.style.display = 'block';
  el.textContent = (correct ? '✅ ' : '❌ ') + msg;
}

// ── Vocab Page ────────────────────────────────────────────────
function buildVocabFilters() {
  const sel = document.getElementById('chapterFilter');
  if (!sel) return;
  sel.innerHTML = `<option value="all">${getTranslation('vocab_all_chapters', 'جميع الوحدات')}</option>`;
  CURRICULUM.forEach(ch => {
    const opt = document.createElement('option');
    opt.value = ch.id;
    opt.textContent = `${getTranslation('chapter_label', 'الوحدة')} ${ch.id}: ${getChapterTitle(ch)}`;
    sel.appendChild(opt);
  });

  const typeSel = document.getElementById('typeFilter');
  if (typeSel) {
    typeSel.innerHTML = `
      <option value="all">${getTranslation('vocab_all_types', 'جميع الأنواع')}</option>
      <option value="noun">${getTranslation('vocab_noun_opt', 'اسم - Nomen')}</option>
      <option value="verb">${getTranslation('vocab_verb_opt', 'فعل - Verb')}</option>
      <option value="adj">${getTranslation('vocab_adj_opt', 'صفة - Adjektiv')}</option>
      <option value="phrase">${getTranslation('vocab_phrase_opt', 'عبارة - Ausdruck')}</option>
    `;
  }
}

function renderVocabGrid(filter = null) {
  const container = document.getElementById('vocabGrid');
  if (!container) return;
  const search = (document.getElementById('vocabSearch')?.value || '').toLowerCase();
  const ch = document.getElementById('chapterFilter')?.value || 'all';
  const type = document.getElementById('typeFilter')?.value || 'all';
  const saved = getSavedProgress();

  let vocab = VOCABULARY;
  if (ch !== 'all') vocab = vocab.filter(v => String(v.ch) === ch);
  if (type !== 'all') vocab = vocab.filter(v => v.type === type);
  if (search) {
    vocab = vocab.filter(v => 
      v.de.toLowerCase().includes(search) || 
      (v.ar && v.ar.toLowerCase().includes(search) && currentLang !== 'bs') ||
      (v.en && v.en.toLowerCase().includes(search)) ||
      (v.tr && v.tr.toLowerCase().includes(search)) ||
      (v.ro && v.ro.toLowerCase().includes(search)) ||
      (v.bs && v.bs.toLowerCase().includes(search))
    );
  }

  if (vocab.length === 0) {
    const emptyMsg = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]?.vocab_empty) || 'No results';
    container.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:40px;grid-column:1/-1">${emptyMsg}</div>`;
    return;
  }

  container.innerHTML = vocab.map(word => {
    const mastered = saved.masteredWords?.includes(word.id);
    const typeInfo = TYPE_LABELS[word.type] || { ar: word.type, en: word.type, tr: word.type, ro: word.type, color: '#888' };
    const typeLabel = typeInfo[currentLang] || typeInfo.en || word.type;
    const trans = currentLang === 'bs' ? (word.bs || word.en || '') : currentLang === 'ro' ? (word.ro || word.en) : currentLang === 'tr' ? (word.tr || word.en) : currentLang === 'en' ? word.en : word.ar;
    const chLabel = `${getTranslation('chapter_label', 'الوحدة')} ${word.ch}`;
    const btnText = mastered 
      ? getTranslation('vocab_btn_saved', '✓ محفوظة') 
      : getTranslation('vocab_btn_save', '+ احفظ');

    return `
    <div class="vocab-card ${mastered ? 'mastered' : ''}" onclick="speakGerman('${word.de.replace(/'/g,"\\'")}')">
      <div class="vc-chapter">${chLabel}</div>
      <div class="vc-de">${word.de}</div>
      <div class="vc-ar">${trans}</div>
      <span class="vc-type" style="background:${typeInfo.color}22;color:${typeInfo.color}">${typeLabel}</span>
      ${word.example ? `<div class="vc-example">${word.example}</div>` : ''}
      <div style="display:flex;gap:6px;margin-top:10px">
        <button class="tts-btn" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊</button>
        <button class="tts-btn" onclick="event.stopPropagation();toggleMastered(${word.id})" style="color:${mastered ? 'var(--accent-success)' : 'var(--text-muted)'}">
          ${btnText}
        </button>
      </div>
    </div>`;
  }).join('');
}

function filterVocab() { renderVocabGrid(); }

function toggleMastered(wordId) {
  const progress = getSavedProgress();
  if (!progress.masteredWords) progress.masteredWords = [];
  const idx = progress.masteredWords.indexOf(wordId);
  if (idx > -1) {
    progress.masteredWords.splice(idx, 1);
    showToast(getTranslation('toast_vocab_removed', 'تمت إزالة الكلمة من المحفوظات'), 'info');
  } else {
    progress.masteredWords.push(wordId);
    showToast(getTranslation('toast_vocab_added', 'تمت إضافة الكلمة إلى المحفوظات ✓'), 'success');
    addScore(5);
  }
  saveProgress(progress);
  renderVocabGrid();
  updateDashboardStats();
}

// ── Grammar Page ───────────────────────────────────────────────
function populateGrammarPage() {
  const container = document.getElementById('grammarList');
  if (!container) return;

  const allGrammar = [];
  CURRICULUM.forEach(ch => {
    ch.grammar.forEach(g => allGrammar.push({ ...g, chapter: ch.id, chapterTitle: getChapterTitle(ch) }));
  });

  container.innerHTML = allGrammar.map(g => `
    <div class="grammar-box">
      <div class="grammar-header" onclick="this.parentElement.classList.toggle('open')">
        <div>
          <span class="grammar-title">${getGrammarTitle(g)}</span>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${getTranslation('unit', 'وحدة')} ${g.chapter}: ${g.chapterTitle}</div>
        </div>
        <span class="grammar-toggle">▼</span>
      </div>
      <div class="grammar-body">
        ${getGrammarExplanation(g) ? `<p style="color:var(--text-secondary);font-size:14px;margin-bottom:16px;line-height:1.7">${getGrammarExplanation(g)}</p>` : ''}
        ${g.rules.map(r => `
          <div class="grammar-rule">
            <div class="grammar-example">
              ${r.example}
              <button class="tts-btn" onclick="speakGerman('${r.example.replace(/['"]/g, ' ')}')">🔊</button>
            </div>
            <div class="grammar-explanation">${getRuleTranslation(r)}${getRuleNote(r) ? ` · ${getRuleNote(r)}` : ''}</div>
          </div>`).join('')}
        ${g.table ? `
          <table class="grammar-table">
            <thead><tr>${g.table.headers.map((h, hIdx) => `<th>${getTableHeader(hIdx, g.table)}</th>`).join('')}</tr></thead>
            <tbody>${g.table.rows.map(row => `<tr>${row.map(c => `<td>${getTableCellTranslation(c)}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}
      </div>
    </div>`).join('');
}

// ── Flashcards ────────────────────────────────────────────────
function setupFlashcards() {
  const sel = document.getElementById('flashcardChapter');
  const activeCh = sel ? sel.value : 'all';

  // Build chapter options
  if (sel) {
    sel.innerHTML = `<option value="all">${getTranslation('vocab_all_chapters', 'جميع الوحدات')}</option>`;
    CURRICULUM.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${getTranslation('chapter_label', 'الوحدة')} ${c.id}: ${getChapterTitle(c)}`;
      sel.appendChild(opt);
    });
    // Restore selection if valid
    if (activeCh && [...sel.options].some(o => o.value === activeCh)) {
      sel.value = activeCh;
    }
  }

  const ch = sel ? sel.value : 'all';
  let vocab = ch === 'all' ? [...VOCABULARY] : VOCABULARY.filter(v => String(v.ch) === ch);
  vocab = shuffle(vocab);
  fcDeck = vocab;
  fcIndex = 0;
  fcFlipped = false;
  fcScores = { easy: 0, medium: 0, hard: 0 };
  renderFlashcard();
}

function shuffleFlashcards() {
  fcDeck = shuffle([...fcDeck]);
  fcIndex = 0;
  fcFlipped = false;
  renderFlashcard();
  showToast(getTranslation('toast_deck_shuffled', 'تم خلط البطاقات! 🔀'), 'info');
}

function renderFlashcard() {
  if (fcDeck.length === 0) return;
  const word = fcDeck[fcIndex];
  const card = document.getElementById('flashcard');
  const front = document.getElementById('flashcardFront');
  const back = document.getElementById('flashcardBack');
  const counter = document.getElementById('flashcardCounter');
  const actions = document.getElementById('flashcardActions');

  if (card) card.classList.remove('flipped');
  fcFlipped = false;

  const typeInfo = TYPE_LABELS[word.type] || { ar: word.type, en: word.type, tr: word.type, ro: word.type };
  const typeLabel = typeInfo[currentLang] || typeInfo.en || word.type;
  const trans = currentLang === 'bs' ? (word.bs || word.en || '') : currentLang === 'ro' ? (word.ro || word.en) : currentLang === 'tr' ? (word.tr || word.en) : currentLang === 'en' ? word.en : word.ar;
  const hintText = currentLang === 'bs' ? 'Kliknite za okretanje' : currentLang === 'ro' ? 'Atingeți pentru a întoarce' : currentLang === 'tr' ? 'Çevirmek için tıklayın' : currentLang === 'en' ? 'Click card to flip' : 'انقر للقلب';
  const listenText = currentLang === 'bs' ? 'Slušaj' : currentLang === 'ro' ? 'Ascultă' : currentLang === 'tr' ? 'Dinle' : currentLang === 'en' ? 'Listen' : 'استمع';

  if (front) front.innerHTML = `
    <div class="fc-word">${word.de}</div>
    <div style="font-size:11px;color:var(--accent-primary);font-family:'Inter',sans-serif;margin-bottom:8px">${typeLabel}</div>
    <button class="tts-btn" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊 ${listenText}</button>
    <div class="fc-hint" style="margin-top:12px">${hintText}</div>`;

  if (back) back.innerHTML = `
    <div class="fc-translation">${trans}</div>
    <div style="font-size:13px;color:var(--text-secondary);font-family:'Inter',sans-serif;margin-bottom:8px;font-style:italic">${word.example || ''}</div>
    <button class="tts-btn" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊</button>`;

  if (counter) {
    const cardText = currentLang === 'bs' ? 'Kartica' : currentLang === 'ro' ? 'Card' : currentLang === 'tr' ? 'Kart' : currentLang === 'en' ? 'Card' : 'بطاقة';
    const ofText = currentLang === 'bs' ? 'od' : currentLang === 'ro' ? 'din' : currentLang === 'tr' ? '/' : currentLang === 'en' ? 'of' : 'من';
    counter.textContent = `${cardText} ${fcIndex + 1} ${ofText} ${fcDeck.length}`;
  }
  if (actions) actions.style.display = 'none';
}

function flipCard() {
  const card = document.getElementById('flashcard');
  const actions = document.getElementById('flashcardActions');
  if (!card) return;
  fcFlipped = !fcFlipped;
  card.classList.toggle('flipped', fcFlipped);
  if (actions) actions.style.display = fcFlipped ? 'flex' : 'none';
}

function rateCard(rating) {
  fcScores[rating]++;
  if (rating === 'easy') {
    const saved = getSavedProgress();
    if (!saved.masteredWords) saved.masteredWords = [];
    const wordId = fcDeck[fcIndex].id;
    if (!saved.masteredWords.includes(wordId)) {
      saved.masteredWords.push(wordId);
      saveProgress(saved);
      addScore(5);
    }
    showToast(getTranslation('toast_vocab_saved', 'رائع! الكلمة محفوظة ✓'), 'success');
  } else if (rating === 'hard') {
    // Put card back later
    const card = fcDeck[fcIndex];
    fcDeck.push(card);
    showToast(getTranslation('toast_review_again', 'سنراجعها مرة أخرى'), 'info');
  }
  nextCard();
}

function nextCard() {
  fcIndex = (fcIndex + 1) % fcDeck.length;
  fcFlipped = false;
  renderFlashcard();
}

function prevCard() {
  fcIndex = (fcIndex - 1 + fcDeck.length) % fcDeck.length;
  fcFlipped = false;
  renderFlashcard();
}

// ── Daily Content ──────────────────────────────────────────────
function setDailyContent() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);

  // Daily word
  const wordIdx = dayOfYear % VOCABULARY.length;
  const dailyWord = VOCABULARY[wordIdx];
  const dwEl = document.getElementById('dailyWord');
  if (dwEl && dailyWord) {
    const trans = currentLang === 'bs' ? (dailyWord.bs || dailyWord.en || '') : currentLang === 'ro' ? (dailyWord.ro || dailyWord.en) : currentLang === 'tr' ? (dailyWord.tr || dailyWord.en) : currentLang === 'en' ? dailyWord.en : dailyWord.ar;
    const typeInfo = TYPE_LABELS[dailyWord.type] || { ar: dailyWord.type, en: dailyWord.type, tr: dailyWord.type, ro: dailyWord.type };
    const typeLabel = typeInfo[currentLang] || typeInfo.en || dailyWord.type;
    const chLabel = `${getTranslation('chapter_label', 'الوحدة')} ${dailyWord.ch}`;
    const listenText = getTranslation('btn_listen', '🔊 استمع').replace('🔊', '').trim();

    dwEl.innerHTML = `
      <span class="word-de">${dailyWord.de}</span>
      <div class="word-ar">${trans}</div>
      <span class="word-type">${typeLabel} · ${chLabel}</span>
      <br><button class="tts-btn" style="margin-top:10px" onclick="speakGerman('${dailyWord.de.replace(/'/g,"\\'")}')">🔊 ${listenText}</button>`;
  }

  // Daily sentence - pick from speaking phrases
  const allPhrases = CURRICULUM.flatMap(c => c.speakingPhrases);
  const phraseIdx = dayOfYear % allPhrases.length;
  const phrase = allPhrases[phraseIdx];
  const dsEl = document.getElementById('dailySentence');
  if (dsEl && phrase) {
    const trans = currentLang === 'bs' ? (phrase.bs || phrase.en || '') : currentLang === 'ro' ? (phrase.ro || phrase.en || phrase.ar) : currentLang === 'tr' ? (phrase.tr || phrase.en || phrase.ar) : currentLang === 'en' ? (phrase.en || phrase.ar) : phrase.ar;
    dsEl.innerHTML = `
      <div class="sentence-de">${phrase.de}
        <button class="tts-btn" onclick="speakGerman('${phrase.de.replace(/'/g,"\\'")}')">🔊</button>
      </div>
      <div class="sentence-ar">${trans}</div>`;
  }
}

// ── Speaking Practice ──────────────────────────────────────────
function practicePhrase(idx, phrase) {
  showToast(`${getTranslation('toast_speak_prompt', 'قُل:')} "${phrase}"`, 'info');
  speakGerman(phrase);
  setTimeout(() => {
    startSpeechRecognition(
      (transcript) => {
        const similarity = calculateSimilarity(transcript.toLowerCase(), phrase.toLowerCase());
        if (similarity > 0.7) {
          showToast(`${getTranslation('toast_speak_correct', 'ممتاز! نطقك صحيح!')} 🎉 (${Math.round(similarity*100)}%)`, 'success');
          addScore(20);
        } else if (similarity > 0.4) {
          showToast(`${getTranslation('toast_speak_warning', 'جيد! حاول مرة أخرى.')} (${Math.round(similarity*100)}%)`, 'warning');
        } else {
          showToast(`${getTranslation('toast_speak_error', 'استمع للنطق مرة أخرى وحاول.')} (${Math.round(similarity*100)}%)`, 'error');
        }
      },
      () => {}
    );
  }, 2000);
}

function calculateSimilarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  if (longer.length === 0) return 1.0;
  const editDist = levenshtein(longer, shorter);
  return (longer.length - editDist) / longer.length;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length:m+1}, (_,i) => Array.from({length:n+1}, (_,j) => i===0?j:j===0?i:0));
  for (let i=1;i<=m;i++) for(let j=1;j<=n;j++)
    dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

// ── Writing Helpers ────────────────────────────────────────────
function insertHelper(areaId, text) {
  const ta = document.getElementById(areaId);
  if (!ta) return;
  const pos = ta.selectionStart;
  ta.value = ta.value.slice(0, pos) + text + ' ' + ta.value.slice(pos);
  ta.focus();
  updateWordCount(ta);
}

function updateWordCount(ta) {
  const words = ta.value.trim().split(/\s+/).filter(w => w).length;
  const countEl = document.getElementById(ta.id.replace('writingArea_', 'wc_'));
  if (countEl) countEl.textContent = words + ' ' + getTranslation('words_count', 'كلمات');
}

function checkWriting(chId) {
  const ta = document.getElementById('writingArea_' + chId);
  const fb = document.getElementById('writingFeedback_' + chId);
  if (!ta || !fb) return;
  const text = ta.value.trim();
  if (text.length < 10) {
    fb.innerHTML = `<div class="exercise-feedback wrong">${getTranslation('writing_write_more', 'اكتب أكثر! حاول كتابة 3-4 جمل على الأقل.')}</div>`;
    return;
  }

  const words = text.split(/\s+/).length;
  const hasDe = /[äöüÄÖÜß]/.test(text) || text.length > 15;
  const startsCapital = /^[A-ZÄÖÜ]/.test(text);

  let tips = [];
  if (!startsCapital) tips.push(getTranslation('tip_capital_letter', 'تذكر: الجمل تبدأ بحرف كبير'));
  if (words < 5) tips.push(getTranslation('tip_more_sentences', 'حاول الكتابة بأكثر من جملة'));
  if (!text.includes('.')) tips.push(getTranslation('tip_period', 'لا تنسَ نقطة النهاية (.)'));

  fb.innerHTML = `
    <div class="exercise-feedback correct">
      ✅ أحسنت! كتبت ${words} كلمات.
      ${tips.length > 0 ? '<br>💡 ' + tips.join(' · ') : ''}
    </div>`;
  addScore(25);
  showToast(getTranslation('toast_writing_complete', 'رائع! تمرين الكتابة مكتمل! ✍️'), 'success');
}

function showWritingExample(chId, example) {
  const ta = document.getElementById('writingArea_' + chId);
  if (ta && !ta.value.trim()) {
    ta.value = example;
    updateWordCount(ta);
  }
  showToast(getTranslation('toast_writing_example', 'هذا مثال فقط. اكتب بأسلوبك الخاص!'), 'info');
}

// ── Progress ──────────────────────────────────────────────────
function getSavedProgress() {
  try {
    return JSON.parse(localStorage.getItem('deutschA1Progress') || '{}');
  } catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem('deutschA1Progress', JSON.stringify(data));
}

function markLessonProgress(chId, pct) {
  const progress = getSavedProgress();
  if (!progress.chaptersProgress) progress.chaptersProgress = {};
  if ((progress.chaptersProgress[chId] || 0) < pct) {
    progress.chaptersProgress[chId] = pct;
    saveProgress(progress);
    updateDashboardStats();
    buildSidebarChapters();
    buildChaptersGrid();
    updateOverallProgress();
  }
}

function addScore(points) {
  const progress = getSavedProgress();
  progress.totalScore = (progress.totalScore || 0) + points;
  saveProgress(progress);
  updateDashboardStats();
}

function checkDailyStreak() {
  const progress = getSavedProgress();
  const today = new Date().toDateString();
  if (progress.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (progress.lastVisit === yesterday) {
      progress.streak = (progress.streak || 0) + 1;
    } else if (progress.lastVisit && progress.lastVisit !== today) {
      progress.streak = 1;
    } else if (!progress.lastVisit) {
      progress.streak = 1;
    }
    progress.lastVisit = today;
    saveProgress(progress);
    if (progress.streak > 1) showToast('🔥 ' + progress.streak + ' ' + getTranslation('streak_days_suffix', 'أيام متتالية! رائع!'), 'success');
  }
}

function updateDashboardStats() {
  const progress = getSavedProgress();
  const mastered = (progress.masteredWords || []).length;
  const completed = Object.values(progress.chaptersProgress || {}).filter(p => p >= 100).length;
  const streak = progress.streak || 0;
  const score = progress.totalScore || 0;

  const el = (id, val) => { const e = document.getElementById(id); if(e) e.textContent = val; };
  el('learnedWords', mastered);
  el('completedLessons', completed);
  el('streakDays', streak);
  el('totalScore', score);

  const bar = (id, pct) => { const e = document.getElementById(id); if(e) e.style.width = Math.min(100,pct)+'%'; };
  bar('wordBar',   (mastered / VOCABULARY.length) * 100);
  bar('lessonBar', (completed / 12) * 100);
  bar('streakBar', Math.min(100, streak * 10));
  bar('scoreBar',  Math.min(100, score / 10));

  updateOverallProgress();
}

function updateOverallProgress() {
  const progress = getSavedProgress();
  const vals = Object.values(progress.chaptersProgress || {});
  const avg = vals.length > 0 ? Math.round(vals.reduce((a,b) => a+b, 0) / 12) : 0;
  const fill = document.getElementById('overallProgress');
  const pct  = document.getElementById('overallProgressPct');
  if (fill) fill.style.width = avg + '%';
  if (pct)  pct.textContent  = avg + '%';
}

function startLearning() {
  const progress = getSavedProgress();
  const inProgress = Object.entries(progress.chaptersProgress || {}).find(([,v]) => v > 0 && v < 100);
  if (inProgress) {
    openLesson(parseInt(inProgress[0]));
  } else {
    openLesson(1);
  }
}

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── Prev/Next Lesson Section ──────────────────────────────────
function prevSection() {
  if (currentLessonSection > 0) {
    currentLessonSection--;
    renderLessonContent();
  } else {
    // Go to prev tab
    const tabs = ['text','vocab','grammar','exercises'];
    const idx = tabs.indexOf(currentLessonTab);
    if (idx > 0) { currentLessonTab = tabs[idx-1]; updateLessonTabs(); renderLessonContent(); }
  }
}

function nextSection() {
  const tabs = ['text','vocab','grammar','exercises'];
  const idx = tabs.indexOf(currentLessonTab);
  if (idx < tabs.length - 1) {
    currentLessonTab = tabs[idx + 1];
    updateLessonTabs();
    renderLessonContent();
    document.getElementById('mainContent').scrollTop = 0;
  } else {
    // Done with lesson
    if (currentLesson) {
      markLessonProgress(currentLesson.id, 100);
      showToast('🎉 ' + getTranslation('toast_lesson_completed', 'أحسنت! الوحدة مكتملة!') + ' (' + getTranslation('chapter_label', 'الوحدة') + ' ' + currentLesson.id + ')', 'success');
    }
    navigateTo('dashboard');
  }
}

// ── Sidebar Toggle (Mobile) ────────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) {
    const isOpen = sidebar.classList.toggle('open');
    if (backdrop) {
      if (isOpen) {
        backdrop.classList.add('active');
      } else {
        backdrop.classList.remove('active');
      }
    }
  }
}

// ── Keyboard Shortcuts ─────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (currentPage === 'flashcards') {
    if (e.key === ' ') { e.preventDefault(); flipCard(); }
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === '1' && fcFlipped) rateCard('hard');
    if (e.key === '2' && fcFlipped) rateCard('medium');
    if (e.key === '3' && fcFlipped) rateCard('easy');
  }
});
