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

  // Scroll to top
  document.getElementById('mainContent').scrollTop = 0;
}

// ── Sidebar Chapter links ─────────────────────────────────────
function buildSidebarChapters() {
  const container = document.getElementById('chaptersList');
  if (!container) return;
  const saved = getSavedProgress();

  container.innerHTML = CURRICULUM.map(ch => {
    const prog = saved.chaptersProgress?.[ch.id] || 0;
    const done = prog >= 100;
    return `
    <div class="chapter-nav-item ${done ? 'completed' : ''}" onclick="openLesson(${ch.id})">
      <span>${ch.emoji} ${ch.titleAr}</span>
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
    const statusLabel = prog >= 100 ? '✓ مكتمل' : prog > 0 ? 'جاري...' : 'ابدأ الآن';
    const locked = idx > 0 && (saved.chaptersProgress?.[CURRICULUM[idx-1].id] || 0) < 25;

    return `
    <div class="chapter-card ${locked ? 'locked' : ''}" onclick="${locked ? '' : `openLesson(${ch.id})`}" style="border-top: 3px solid ${ch.color}">
      <div class="chapter-number">Kapitel ${ch.id}</div>
      <div class="chapter-title-de">${ch.emoji} ${ch.titleDe}</div>
      <div class="chapter-title-ar">${ch.titleAr}</div>
      <div class="chapter-topics">
        ${ch.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
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
  document.getElementById('lessonSubtitle').textContent = ch.titleAr + ' · Kapitel ' + ch.id;

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
        <div style="font-size:12px;color:var(--accent-primary);font-weight:700;margin-bottom:6px">🎯 بعد هذه الوحدة ستستطيع</div>
        <div style="font-size:15px;color:var(--text-primary)">${ch.canDo}</div>
        <div style="font-size:13px;color:var(--text-muted);font-family:'Inter',sans-serif;margin-top:4px">${ch.canDoDe}</div>
      </div>
    </div>`);

  // Dialogs
  ch.dialogs.forEach((dialog, i) => {
    sections.push(`
      <div class="lesson-text-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <h3 style="font-size:18px;font-weight:700;color:var(--text-primary)">${dialog.title}</h3>
          <span style="font-size:13px;color:var(--text-secondary)">${dialog.titleAr}</span>
        </div>
        <div class="lesson-dialog">
          ${dialog.lines.map(line => `
            <div class="dialog-line">
              <span class="dialog-speaker">${line.speaker}:</span>
              <div class="dialog-content">
                <div class="dialog-de">${line.de}
                  <button class="tts-btn" onclick="speakGerman('${line.de.replace(/'/g,"\\'")}')">🔊 استمع</button>
                </div>
                <div class="dialog-ar">${line.ar}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`);
  });

  // Reading texts
  ch.readingTexts.forEach(rt => {
    sections.push(`
      <div class="lesson-text-section">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <h3 style="font-size:18px;font-weight:700;color:var(--text-primary)">${rt.title}</h3>
          <span style="font-size:13px;color:var(--text-secondary)">${rt.titleAr}</span>
        </div>
        <div class="reading-text-card" style="background:rgba(79,142,247,0.04);border-radius:12px;padding:20px">
          ${rt.text.map(p => `
            <div style="margin-bottom:12px">
              <div style="font-size:16px;color:var(--text-primary);font-family:'Inter',sans-serif;margin-bottom:4px">${p.de}
                <button class="tts-btn" onclick="speakGerman('${p.de.replace(/'/g,"\\'")}')">🔊</button>
              </div>
              <div style="font-size:13px;color:var(--text-arabic)">${p.ar}</div>
            </div>`).join('')}
        </div>
        ${rt.questions.length > 0 ? `
          <div style="margin-top:16px">
            <div style="font-size:14px;font-weight:700;margin-bottom:12px">❓ أسئلة الفهم</div>
            ${rt.questions.map(q => `
              <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:14px;margin-bottom:8px">
                <div style="font-size:14px;font-weight:600;margin-bottom:6px">📌 ${q.qAr}</div>
                <div style="font-size:13px;color:var(--text-muted);margin-bottom:4px;font-family:'Inter',sans-serif">${q.q}</div>
                <button class="btn btn-ghost" style="font-size:12px;padding:6px 12px;margin-top:8px" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">أظهر الإجابة</button>
                <div style="display:none;padding:8px;background:rgba(52,211,153,0.1);border-radius:6px;margin-top:8px">
                  <span style="color:var(--accent-success);font-family:'Inter',sans-serif">${q.answer}</span>
                  <span style="color:var(--text-arabic);margin-right:8px">${q.answerAr}</span>
                </div>
              </div>`).join('')}
          </div>` : ''}
      </div>`);
  });

  // Audio Section
  if (ch.audioFiles && ch.audioFiles.length > 0) {
    sections.push(`
      <div class="lesson-text-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">🎧 تمارين الاستماع</h3>
        <div class="audio-list" style="gap:8px">
          ${ch.audioFiles.map((af, i) => `
            <div class="audio-item" data-track-id="ch${ch.id}_${i}" onclick="playTrack('ch${ch.id}_${i}', '${af.file}', '${af.label.replace(/'/g,"\\'")}', 'وحدة ${ch.id}')">
              <div class="audio-play-icon">▶</div>
              <div class="audio-item-info">
                <div class="audio-item-title">${af.label}</div>
                <div class="audio-item-meta">${af.labelAr}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`);
  }

  // Speaking Section
  sections.push(`
    <div class="lesson-text-section">
      <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">🗣️ تمارين التحدث</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px">
        ${ch.speakingPhrases.map((p,i) => `
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:16px">
            <div style="font-size:16px;font-weight:700;color:var(--text-german);font-family:'Inter',sans-serif;margin-bottom:6px">${p.de}</div>
            <div style="font-size:13px;color:var(--text-arabic);margin-bottom:12px">${p.ar}</div>
            <div style="display:flex;gap:8px">
              <button class="tts-btn" onclick="speakGerman('${p.de.replace(/'/g,"\\'")}')">🔊 استمع</button>
              <button class="tts-btn" onclick="practicePhrase(${i}, '${p.de.replace(/'/g,"\\'")}')">🎤 تدرب</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`);

  // Writing prompt
  if (ch.writingPrompts && ch.writingPrompts.length > 0) {
    const wp = ch.writingPrompts[0];
    sections.push(`
      <div class="lesson-text-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:16px">✍️ تمرين الكتابة</h3>
        <div class="writing-prompt-card">
          <div class="writing-prompt-title">المهمة الكتابية</div>
          <div class="writing-prompt-text">${wp.prompt}</div>
          <div class="writing-prompt-hint">${wp.promptDe}</div>
        </div>
        <div style="margin-bottom:12px">
          <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">💡 كلمات مساعدة:</div>
          <div class="writing-toolbar">
            ${wp.helpers.map(h => `<span class="word-helper-chip" onclick="insertHelper('writingArea_${ch.id}','${h.replace(/'/g,"\\'")}') ">${h}</span>`).join('')}
          </div>
        </div>
        <textarea id="writingArea_${ch.id}" class="writing-area" placeholder="اكتب هنا بالألمانية..." dir="ltr" oninput="updateWordCount(this)"></textarea>
        <div class="writing-count" id="wc_${ch.id}">0 كلمات</div>
        <div style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="checkWriting('${ch.id}')">تحقق من الكتابة</button>
          <button class="btn btn-ghost" onclick="showWritingExample('${ch.id}', '${wp.example.replace(/'/g,"\\'")}')">💡 أظهر مثالاً</button>
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
      ${vocab.map(word => `
        <div class="vocab-mini-card" onclick="speakGerman('${word.de.replace(/'/g,"\\'")}')">
          <div class="vm-de">${word.de}</div>
          <div class="vm-ar">${word.ar}</div>
          <div class="vm-type" style="color:${TYPE_LABELS[word.type]?.color || '#888'}">${TYPE_LABELS[word.type]?.ar || word.type}</div>
          ${word.example ? `<div style="font-size:11px;color:var(--text-muted);font-family:'Inter',sans-serif;margin-top:8px;font-style:italic">${word.example}</div>` : ''}
          <button class="tts-btn" style="margin-top:8px;font-size:11px" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊</button>
        </div>`).join('')}
    </div>`;

  // Mark progress
  markLessonProgress(ch.id, 80);
}

function renderGrammarTab(ch, container) {
  container.innerHTML = ch.grammar.map(g => `
    <div class="grammar-box open">
      <div class="grammar-header" onclick="this.parentElement.classList.toggle('open')">
        <span class="grammar-title">${g.title}</span>
        <span class="grammar-toggle">▼</span>
      </div>
      <div class="grammar-body">
        ${g.explanation ? `<p style="color:var(--text-secondary);font-size:14px;margin-bottom:16px;line-height:1.7">${g.explanation}</p>` : ''}
        ${g.rules.map(r => `
          <div class="grammar-rule">
            <div class="grammar-example">
              ${r.example}
              <button class="tts-btn" onclick="speakGerman('${r.example.replace(/'/g,"\\'")}')">🔊</button>
            </div>
            <div class="grammar-explanation">${r.translation}${r.note ? ` • ${r.note}` : ''}</div>
          </div>`).join('')}
        ${g.table ? `
          <table class="grammar-table">
            <thead><tr>${g.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${g.table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}
      </div>
    </div>`).join('');
}

function renderExercisesTab(ch, container) {
  container.innerHTML = `
    <div class="exercise-list">
      ${ch.exercises.map((ex, i) => renderExercise(ex, i, ch.id)).join('')}
    </div>
    <div style="margin-top:24px;text-align:center">
      <button class="btn btn-primary" onclick="navigateTo('quiz');setTimeout(()=>startChapterQuiz(${ch.id}),300)">
        🎯 ابدأ اختبار الوحدة ${ch.id}
      </button>
    </div>`;

  // Mark progress
  markLessonProgress(ch.id, 100);
}

function renderExercise(ex, idx, chId) {
  if (ex.type === 'mcq') {
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${ex.question}${ex.questionAr ? `<div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${ex.questionAr}</div>` : ''}</div>
        <div class="options-grid" style="grid-template-columns:1fr 1fr">
          ${ex.options.map((opt, oi) => `
            <button class="option-btn" onclick="checkExercise(this, ${oi}, ${ex.answer}, 'exFb_${chId}_${idx}', '${ex.options[ex.answer].replace(/'/g,"\\'")}')">
              ${opt}
            </button>`).join('')}
        </div>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  else if (ex.type === 'fillblank') {
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${ex.question}${ex.questionAr ? `<div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${ex.questionAr}</div>` : ''}</div>
        ${ex.hint ? `<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">💡 ${ex.hint}</div>` : ''}
        <div style="display:flex;gap:8px;align-items:center">
          <input type="text" id="exInp_${chId}_${idx}" class="fill-blank-input" style="max-width:250px" placeholder="اكتب إجابتك..." dir="ltr" />
          <button class="btn btn-primary" onclick="checkFillBlank('exInp_${chId}_${idx}', '${ex.answer.replace(/'/g,"\\'")}', 'exFb_${chId}_${idx}')">تحقق</button>
        </div>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  else if (ex.type === 'order') {
    const shuffled = shuffle([...ex.words]);
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${ex.question}</div>
        <div class="word-answer-area" id="exAnswer_${chId}_${idx}"><span style="color:var(--text-muted);font-size:13px">انقر الكلمات لترتيبها...</span></div>
        <div class="word-order-bank" id="exBank_${chId}_${idx}">
          ${shuffled.map(w => `<span class="word-chip" onclick="placeWordEx(this, 'exAnswer_${chId}_${idx}', 'exBank_${chId}_${idx}', '${w}')">${w}</span>`).join('')}
        </div>
        <button class="btn btn-primary" style="margin-top:12px" onclick="checkOrderEx('exAnswer_${chId}_${idx}', '${ex.answer.replace(/'/g,"\\'")}', 'exFb_${chId}_${idx}')">تحقق</button>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  else if (ex.type === 'matching') {
    const leftItems = ex.pairs.map(p => p.de);
    const rightItems = shuffle(ex.pairs.map(p => p.ar));
    return `
      <div class="exercise-item">
        <div class="exercise-question">${idx+1}. ${ex.question}</div>
        <div class="matching-grid">
          <div>
            ${leftItems.map((item, i) => `<div class="match-item de-item" id="matchL_${chId}_${idx}_${i}" data-pair="${i}" onclick="selectMatchItem(this, 'left', ${i}, '${chId}', ${idx})">${item}</div>`).join('')}
          </div>
          <div>
            ${rightItems.map((item, i) => {
              const pairIdx = ex.pairs.findIndex(p => p.ar === item);
              return `<div class="match-item ar-item" id="matchR_${chId}_${idx}_${i}" data-pair="${pairIdx}" onclick="selectMatchItem(this, 'right', ${i}, '${chId}', ${idx})">${item}</div>`;
            }).join('')}
          </div>
        </div>
        <div class="exercise-feedback" id="exFb_${chId}_${idx}"></div>
      </div>`;
  }
  return `<div class="exercise-item"><div class="exercise-question">${idx+1}. ${ex.question || ''}</div></div>`;
}

// ── Exercise Checkers ─────────────────────────────────────────
function checkExercise(btn, selectedIdx, correctIdx, fbId, correctText) {
  const allBtns = btn.closest('.options-grid').querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);
  if (selectedIdx === correctIdx) {
    btn.classList.add('correct');
    showFeedback(fbId, true, 'صحيح! ممتاز! 🎉');
    addScore(10);
  } else {
    btn.classList.add('wrong');
    allBtns[correctIdx].classList.add('correct');
    showFeedback(fbId, false, `الإجابة الصحيحة: "${correctText}"`);
  }
}

function checkFillBlank(inputId, correctAnswer, fbId) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  const userVal = inp.value.trim().toLowerCase();
  const accepted = correctAnswer.split('/').map(a => a.trim().toLowerCase());
  if (accepted.includes(userVal)) {
    inp.classList.add('correct');
    inp.disabled = true;
    showFeedback(fbId, true, 'صحيح! ممتاز!');
    addScore(15);
  } else {
    inp.classList.add('wrong');
    showFeedback(fbId, false, `الإجابة الصحيحة: "${correctAnswer}"`);
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
    showFeedback(fbId, true, 'ممتاز! الترتيب صحيح!');
    addScore(20);
  } else {
    showFeedback(fbId, false, `الترتيب الصحيح: "${correctAnswer}"`);
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
      showToast('تطابق صحيح! 🎉', 'success');
      addScore(10);
    } else {
      state.left.el.classList.remove('selected');
      state.right.el.classList.remove('selected');
      state.left = null; state.right = null;
      showToast('لا تطابق. حاول مجدداً!', 'error');
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
  CURRICULUM.forEach(ch => {
    const opt = document.createElement('option');
    opt.value = ch.id;
    opt.textContent = `وحدة ${ch.id}: ${ch.titleAr}`;
    sel.appendChild(opt);
  });
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
  if (search) vocab = vocab.filter(v => v.de.toLowerCase().includes(search) || v.ar.includes(search));

  if (vocab.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px;grid-column:1/-1">لا توجد نتائج</div>';
    return;
  }

  container.innerHTML = vocab.map(word => {
    const mastered = saved.masteredWords?.includes(word.id);
    const typeInfo = TYPE_LABELS[word.type] || { ar: word.type, color: '#888' };
    return `
    <div class="vocab-card ${mastered ? 'mastered' : ''}" onclick="speakGerman('${word.de.replace(/'/g,"\\'")}')">
      <div class="vc-chapter">وحدة ${word.ch}</div>
      <div class="vc-de">${word.de}</div>
      <div class="vc-ar">${word.ar}</div>
      <span class="vc-type" style="background:${typeInfo.color}22;color:${typeInfo.color}">${typeInfo.ar}</span>
      ${word.example ? `<div class="vc-example">${word.example}</div>` : ''}
      <div style="display:flex;gap:6px;margin-top:10px">
        <button class="tts-btn" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊</button>
        <button class="tts-btn" onclick="event.stopPropagation();toggleMastered(${word.id})" style="color:${mastered ? 'var(--accent-success)' : 'var(--text-muted)'}">
          ${mastered ? '✓ محفوظة' : '+ احفظ'}
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
    showToast('تمت إزالة الكلمة من المحفوظة', 'info');
  } else {
    progress.masteredWords.push(wordId);
    showToast('تمت إضافة الكلمة إلى المحفوظات ✓', 'success');
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
    ch.grammar.forEach(g => allGrammar.push({ ...g, chapter: ch.id, chapterTitle: ch.titleAr }));
  });

  container.innerHTML = allGrammar.map(g => `
    <div class="grammar-box">
      <div class="grammar-header" onclick="this.parentElement.classList.toggle('open')">
        <div>
          <span class="grammar-title">${g.title}</span>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px">وحدة ${g.chapter}: ${g.chapterTitle}</div>
        </div>
        <span class="grammar-toggle">▼</span>
      </div>
      <div class="grammar-body">
        ${g.explanation ? `<p style="color:var(--text-secondary);font-size:14px;margin-bottom:16px;line-height:1.7">${g.explanation}</p>` : ''}
        ${g.rules.map(r => `
          <div class="grammar-rule">
            <div class="grammar-example">
              ${r.example}
              <button class="tts-btn" onclick="speakGerman('${r.example.replace(/['"]/g, ' ')}')">🔊</button>
            </div>
            <div class="grammar-explanation">${r.translation}${r.note ? ` · ${r.note}` : ''}</div>
          </div>`).join('')}
        ${g.table ? `
          <table class="grammar-table">
            <thead><tr>${g.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${g.table.rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}
      </div>
    </div>`).join('');
}

// ── Flashcards ────────────────────────────────────────────────
function setupFlashcards() {
  const ch = document.getElementById('flashcardChapter')?.value || 'all';
  const sel = document.getElementById('flashcardChapter');

  // Build chapter options if empty
  if (sel && sel.options.length === 1) {
    CURRICULUM.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `وحدة ${c.id}: ${c.titleAr}`;
      sel.appendChild(opt);
    });
  }

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
  showToast('تم خلط البطاقات! 🔀', 'info');
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

  if (front) front.innerHTML = `
    <div class="fc-word">${word.de}</div>
    <div style="font-size:11px;color:var(--accent-primary);font-family:'Inter',sans-serif;margin-bottom:8px">${TYPE_LABELS[word.type]?.de || word.type}</div>
    <button class="tts-btn" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊 استمع</button>
    <div class="fc-hint" style="margin-top:12px">انقر للقلب</div>`;

  if (back) back.innerHTML = `
    <div class="fc-translation">${word.ar}</div>
    <div style="font-size:13px;color:var(--text-secondary);font-family:'Inter',sans-serif;margin-bottom:8px;font-style:italic">${word.example || ''}</div>
    <button class="tts-btn" onclick="event.stopPropagation();speakGerman('${word.de.replace(/'/g,"\\'")}')">🔊</button>`;

  if (counter) counter.textContent = `بطاقة ${fcIndex + 1} من ${fcDeck.length}`;
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
    showToast('رائع! الكلمة محفوظة ✓', 'success');
  } else if (rating === 'hard') {
    // Put card back later
    const card = fcDeck[fcIndex];
    fcDeck.push(card);
    showToast('سنراجعها مرة أخرى', 'info');
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
    dwEl.innerHTML = `
      <span class="word-de">${dailyWord.de}</span>
      <div class="word-ar">${dailyWord.ar}</div>
      <span class="word-type">${TYPE_LABELS[dailyWord.type]?.de || dailyWord.type} · وحدة ${dailyWord.ch}</span>
      <br><button class="tts-btn" style="margin-top:10px" onclick="speakGerman('${dailyWord.de.replace(/'/g,"\\'")}')">🔊 استمع</button>`;
  }

  // Daily sentence - pick from speaking phrases
  const allPhrases = CURRICULUM.flatMap(c => c.speakingPhrases);
  const phraseIdx = dayOfYear % allPhrases.length;
  const phrase = allPhrases[phraseIdx];
  const dsEl = document.getElementById('dailySentence');
  if (dsEl && phrase) {
    dsEl.innerHTML = `
      <div class="sentence-de">${phrase.de}
        <button class="tts-btn" onclick="speakGerman('${phrase.de.replace(/'/g,"\\'")}')">🔊</button>
      </div>
      <div class="sentence-ar">${phrase.ar}</div>`;
  }
}

// ── Speaking Practice ──────────────────────────────────────────
function practicePhrase(idx, phrase) {
  showToast(`🎤 قُل: "${phrase}"`, 'info');
  speakGerman(phrase);
  setTimeout(() => {
    startSpeechRecognition(
      (transcript) => {
        const similarity = calculateSimilarity(transcript.toLowerCase(), phrase.toLowerCase());
        if (similarity > 0.7) {
          showToast(`ممتاز! نطقك صحيح! 🎉 (${Math.round(similarity*100)}%)`, 'success');
          addScore(20);
        } else if (similarity > 0.4) {
          showToast(`جيد! حاول مرة أخرى. (${Math.round(similarity*100)}%)`, 'warning');
        } else {
          showToast(`استمع للنطق مرة أخرى وحاول. (${Math.round(similarity*100)}%)`, 'error');
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
  if (countEl) countEl.textContent = words + ' كلمات';
}

function checkWriting(chId) {
  const ta = document.getElementById('writingArea_' + chId);
  const fb = document.getElementById('writingFeedback_' + chId);
  if (!ta || !fb) return;
  const text = ta.value.trim();
  if (text.length < 10) {
    fb.innerHTML = '<div class="exercise-feedback wrong">اكتب أكثر! حاول كتابة 3-4 جمل على الأقل.</div>';
    return;
  }

  const words = text.split(/\s+/).length;
  const hasDe = /[äöüÄÖÜß]/.test(text) || text.length > 15;
  const startsCapital = /^[A-ZÄÖÜ]/.test(text);

  let tips = [];
  if (!startsCapital) tips.push('تذكر: الجمل تبدأ بحرف كبير');
  if (words < 5) tips.push('حاول الكتابة بأكثر من جملة');
  if (!text.includes('.')) tips.push('لا تنسَ نقطة النهاية (.)');

  fb.innerHTML = `
    <div class="exercise-feedback correct">
      ✅ أحسنت! كتبت ${words} كلمات.
      ${tips.length > 0 ? '<br>💡 ' + tips.join(' · ') : ''}
    </div>`;
  addScore(25);
  showToast('رائع! تمرين الكتابة مكتمل! ✍️', 'success');
}

function showWritingExample(chId, example) {
  const ta = document.getElementById('writingArea_' + chId);
  if (ta && !ta.value.trim()) {
    ta.value = example;
    updateWordCount(ta);
  }
  showToast('هذا مثال فقط. اكتب بأسلوبك الخاص!', 'info');
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
    if (progress.streak > 1) showToast(`🔥 ${progress.streak} أيام متتالية! رائع!`, 'success');
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
      showToast(`🎉 أحسنت! الوحدة ${currentLesson.id} مكتملة!`, 'success');
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
document.getElementById('sidebarToggle')?.addEventListener('click', toggleSidebar);
document.getElementById('mobileMenuBtn')?.addEventListener('click', toggleSidebar);

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
