// ============================================================
// QUIZ ENGINE - All exercise types
// ============================================================

let quizState = {
  chapter: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],
  answered: false
};

function getVocabTranslation(word) {
  if (currentLang === 'bs') return (word.bs && word.bs.trim() !== '') ? word.bs : ((word.en && word.en.trim() !== '') ? word.en : '');
  if (currentLang === 'ro') return (word.ro && word.ro.trim() !== '') ? word.ro : ((word.en && word.en.trim() !== '') ? word.en : word.ar);
  if (currentLang === 'tr') return (word.tr && word.tr.trim() !== '') ? word.tr : ((word.en && word.en.trim() !== '') ? word.en : word.ar);
  if (currentLang === 'en') return (word.en && word.en.trim() !== '') ? word.en : word.ar;
  return word.ar;
}

// ── Build Quiz Selection ────────────────────────────────────
function buildQuizSelection() {
  const container = document.getElementById('quizSelection');
  if (!container) return;

  const saved = getSavedProgress();

  container.innerHTML = CURRICULUM.map(ch => {
    const best = saved.quizScores?.[ch.id] || 0;
    const stars = best >= 80 ? '⭐⭐⭐' : best >= 60 ? '⭐⭐' : best >= 40 ? '⭐' : '';
    const chapterTitle = getChapterTitle(ch);
    const scoreLabel = best > 0 
      ? `${getTranslation('quiz_status_score')}${best}% ${stars}` 
      : getTranslation('quiz_not_tested');
    return `
    <div class="quiz-chapter-card" onclick="startChapterQuiz(${ch.id})">
      <div class="quiz-card-num">${ch.id}</div>
      <div class="quiz-card-title">${ch.titleDe}</div>
      <div class="quiz-card-sub">${chapterTitle}</div>
      <div class="quiz-card-score">${scoreLabel}</div>
    </div>`;
  }).join('');
}

// ── Generate Questions for Chapter ─────────────────────────
function generateQuizQuestions(chapterId) {
  const ch = CURRICULUM.find(c => c.id === chapterId);
  if (!ch) return [];

  const questions = [];
  const chVocab = VOCABULARY.filter(v => v.ch === chapterId);
  const allVocab = VOCABULARY;

  // Q1-Q3: Vocabulary MCQ (German → Translation)
  const shuffledVocab = shuffle([...chVocab]).slice(0, 5);
  shuffledVocab.forEach(word => {
    const correctTrans = getVocabTranslation(word);
    const wrongOpts = shuffle(allVocab.filter(v => getVocabTranslation(v) !== correctTrans)).slice(0, 3).map(v => getVocabTranslation(v));
    const options = shuffle([correctTrans, ...wrongOpts]);
    const qText = getTranslation('quiz_q_vocab_meaning').replace('{word}', word.de);

    questions.push({
      type: 'mcq',
      skill: 'vocabulary',
      question: qText,
      options,
      answer: options.indexOf(correctTrans),
      explanation: `${word.de} = ${correctTrans}`,
      points: 10
    });
  });

  // Q4-Q5: Vocabulary MCQ (Translation → German)
  const shuffledVocab2 = shuffle([...chVocab]).slice(0, 3);
  shuffledVocab2.forEach(word => {
    const correctTrans = getVocabTranslation(word);
    const wrongOpts = shuffle(chVocab.filter(v => v.de !== word.de)).slice(0, 3).map(v => v.de);
    const options = shuffle([word.de, ...wrongOpts]);
    const qText = getTranslation('quiz_q_how_say').replace('{word}', correctTrans);

    questions.push({
      type: 'mcq',
      skill: 'vocabulary',
      question: qText,
      options,
      answer: options.indexOf(word.de),
      explanation: `${correctTrans} = ${word.de}`,
      points: 10
    });
  });

  // Q6-Q7: Grammar MCQ from exercises
  ch.exercises.filter(e => e.type === 'mcq').slice(0, 2).forEach(ex => {
    const localizedOptions = ex.options.map(opt => getExerciseOption(opt, ex));
    questions.push({
      type: 'mcq',
      skill: 'grammar',
      question: ex.question,
      questionAr: getExerciseQuestionText(ex),
      options: localizedOptions,
      answer: ex.answer,
      explanation: `${getTranslation('feedback_correct_answer')} ${localizedOptions[ex.answer]}`,
      points: 15
    });
  });

  // Q8-Q9: Fill-in-blank from exercises
  ch.exercises.filter(e => e.type === 'fillblank').slice(0, 2).forEach(ex => {
    questions.push({
      type: 'fillblank',
      skill: 'grammar',
      question: ex.question,
      questionAr: getExerciseQuestionText(ex) || '',
      answer: ex.answer,
      hint: getExerciseHintText(ex),
      explanation: `${getTranslation('feedback_correct_answer')} "${ex.answer}"`,
      points: 15
    });
  });

  // Q10: Reading comprehension
  if (ch.readingTexts && ch.readingTexts[0] && ch.readingTexts[0].questions[0]) {
    const rq = ch.readingTexts[0].questions[0];
    const wrongOpts = ['Nein', 'Ich weiß nicht', 'Vielleicht'];
    const options = shuffle([rq.answer, ...wrongOpts]);
    const rt = ch.readingTexts[0];
    const rtTitle = getReadingTitle(rt);
    const qText = getQuestionText(rq);
    const qAnsTrans = getQuestionAnswerTrans(rq);

    questions.push({
      type: 'mcq',
      skill: 'reading',
      question: `<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px">📖 ${rtTitle}</div>${qText}`,
      options,
      answer: options.indexOf(rq.answer),
      explanation: `${qText} → ${qAnsTrans || rq.answer}`,
      points: 15
    });
  }

  // Q: Sentence ordering
  const orderEx = ch.exercises.find(e => e.type === 'order');
  if (orderEx) {
    questions.push({
      type: 'order',
      skill: 'grammar',
      question: getExerciseQuestionText(orderEx),
      words: shuffle([...orderEx.words]),
      answer: orderEx.answer,
      explanation: `${getTranslation('feedback_correct_order')} "${orderEx.answer}"`,
      points: 20
    });
  }

  return shuffle(questions).slice(0, 10);
}

// ── Start Quiz ──────────────────────────────────────────────
function startChapterQuiz(chapterId) {
  quizState = {
    chapter: chapterId,
    questions: generateQuizQuestions(chapterId),
    currentIndex: 0,
    score: 0,
    answers: [],
    answered: false
  };

  document.getElementById('quizSelection').style.display = 'none';
  document.getElementById('quizActive').style.display = 'block';
  document.getElementById('quizResults').style.display = 'none';

  renderQuestion();
}

// ── Render Question ─────────────────────────────────────────
function renderQuestion() {
  const q = quizState.questions[quizState.currentIndex];
  const total = quizState.questions.length;
  const idx = quizState.currentIndex;

  quizState.answered = false;

  // Update header
  const progressText = getTranslation('quiz_question_of')
    .replace('{num}', idx + 1)
    .replace('{total}', total);
  const pointsText = getTranslation('quiz_points')
    .replace('{score}', quizState.score);

  document.getElementById('quizProgress').textContent = progressText;
  document.getElementById('quizScore').textContent = pointsText;
  document.getElementById('quizProgressFill').style.width = ((idx / total) * 100) + '%';

  // Buttons
  document.getElementById('checkAnswerBtn').style.display = 'block';
  document.getElementById('nextQuestionBtn').style.display = 'none';
  document.getElementById('checkAnswerBtn').disabled = true;

  const skillLabel = { 
    vocabulary: getTranslation('skill_vocab', '📚 مفردات'), 
    grammar: getTranslation('skill_grammar', '📐 قواعد'), 
    reading: getTranslation('skill_reading', '📖 قراءة'), 
    listening: getTranslation('skill_listening', '🎧 استماع') 
  };
  const card = document.getElementById('questionCard');

  if (q.type === 'mcq') {
    card.innerHTML = `
      <div class="question-type-badge">${skillLabel[q.skill] || q.skill}</div>
      <div class="question-text">${q.question}${q.questionAr ? `<div style="font-size:14px;color:var(--text-secondary);margin-top:8px">${q.questionAr}</div>` : ''}</div>
      <div class="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" id="opt-${i}" onclick="selectOption(${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="quizFeedback"></div>`;
  }
  else if (q.type === 'fillblank') {
    card.innerHTML = `
      <div class="question-type-badge">${skillLabel[q.skill] || q.skill}</div>
      <div class="question-text">${q.question.replace('_____', '<span style="border-bottom:2px solid var(--accent-primary);padding:0 20px">_____</span>')}${q.questionAr ? `<div style="font-size:14px;color:var(--text-secondary);margin-top:8px">${q.questionAr}</div>` : ''}</div>
      ${q.hint ? `<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px">💡 ${q.hint}</div>` : ''}
      <input type="text" id="fillInput" class="fill-blank-input" placeholder="${getTranslation('fillblank_placeholder', 'اكتب إجابتك...')}" oninput="onFillInput()" onkeydown="if(event.key==='Enter')checkAnswer()" dir="ltr" autocomplete="off" />
      <div id="quizFeedback"></div>`;
    setTimeout(() => document.getElementById('fillInput')?.focus(), 100);
  }
  else if (q.type === 'order') {
    // Build word order puzzle
    const placed = [];
    const bank = [...q.words];

    const renderOrder = () => {
      document.getElementById('wordBank').innerHTML = bank.map((w,i) =>
        `<span class="word-chip ${placed.includes(w) ? 'placed' : ''}" onclick="placeWord('${w}',${i})">${w}</span>`
      ).join('');
      document.getElementById('answerArea').innerHTML = placed.map((w,i) =>
        `<span class="placed-chip" onclick="removeWord('${w}',${i})">${w}</span>`
      ).join('') || `<span style="color:var(--text-muted);font-size:13px">${getTranslation('order_hint')}</span>`;
      document.getElementById('checkAnswerBtn').disabled = placed.length === 0;
    };

    card.innerHTML = `
      <div class="question-type-badge">${skillLabel[q.skill] || q.skill}</div>
      <div class="question-text">${q.question}</div>
      <div class="word-answer-area" id="answerArea"></div>
      <div class="word-order-bank" id="wordBank"></div>
      <div id="quizFeedback"></div>`;

    // Store state
    card.dataset.placed = JSON.stringify([]);
    card.dataset.bank = JSON.stringify(bank);

    renderOrder();

    // Override check for this type
    window._currentOrderState = { placed, bank, renderOrder };
  }
}

// ── Word Order Helpers ──────────────────────────────────────
function placeWord(word, idx) {
  if (!window._currentOrderState) return;
  const { placed, bank, renderOrder } = window._currentOrderState;
  if (!placed.includes(word)) {
    placed.push(word);
    renderOrder();
    document.getElementById('checkAnswerBtn').disabled = false;
  }
}

// ── Select Option ───────────────────────────────────────────
function selectOption(idx) {
  if (quizState.answered) return;
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.getElementById('opt-' + idx);
  if (btn) btn.classList.add('selected');
  document.getElementById('checkAnswerBtn').disabled = false;
  quizState._selectedOption = idx;
}

function onFillInput() {
  const inp = document.getElementById('fillInput');
  document.getElementById('checkAnswerBtn').disabled = !inp?.value.trim();
}

// ── Check Answer ────────────────────────────────────────────
function checkAnswer() {
  if (quizState.answered) return;
  const q = quizState.questions[quizState.currentIndex];
  let isCorrect = false;
  let userAnswer = '';

  if (q.type === 'mcq') {
    const sel = quizState._selectedOption;
    if (sel === undefined) return;
    isCorrect = sel === q.answer;
    userAnswer = q.options[sel];
    // Show correct/wrong
    document.querySelectorAll('.option-btn').forEach((b, i) => {
      if (i === q.answer) b.classList.add('correct');
      else if (i === sel && !isCorrect) b.classList.add('wrong');
    });
  }
  else if (q.type === 'fillblank') {
    const inp = document.getElementById('fillInput');
    userAnswer = inp?.value.trim() || '';
    // Accept partial answers (split by /)
    const acceptedAnswers = q.answer.split('/').map(a => a.trim().toLowerCase());
    isCorrect = acceptedAnswers.includes(userAnswer.toLowerCase());
    if (inp) inp.classList.add(isCorrect ? 'correct' : 'wrong');
  }
  else if (q.type === 'order') {
    const { placed } = window._currentOrderState || { placed: [] };
    userAnswer = placed.join(' ');
    isCorrect = userAnswer.trim() === q.answer.trim();
  }

  quizState.answered = true;
  quizState.answers.push({ q, isCorrect, userAnswer });

  const pointsText = getTranslation('quiz_points').replace('{score}', quizState.score + (isCorrect ? (q.points || 10) : 0));

  if (isCorrect) {
    quizState.score += q.points || 10;
    showScoreFloat('+' + (q.points || 10));
    showToast(getTranslation('toast_correct_answer', 'إجابة صحيحة! 🎉'), 'success');
  } else {
    showToast(getTranslation('toast_wrong_answer', 'إجابة خاطئة'), 'error');
  }

  // Show feedback
  const fb = document.getElementById('quizFeedback');
  if (fb) {
    const prefix = isCorrect 
      ? '✅ ' + getTranslation('feedback_correct', 'ممتاز!') 
      : '❌ ' + getTranslation('feedback_correct_answer', 'الإجابة الصحيحة:');
    fb.innerHTML = `<div class="feedback-bar ${isCorrect ? 'correct' : 'wrong'}">
      ${prefix} ${isCorrect ? '' : `<strong>${q.explanation}</strong>`}
    </div>`;
  }

  document.getElementById('checkAnswerBtn').style.display = 'none';
  document.getElementById('nextQuestionBtn').style.display = 'inline-flex';
  document.getElementById('quizScore').textContent = pointsText;
}

// ── Next Question ───────────────────────────────────────────
function nextQuestion() {
  window._currentOrderState = null;
  quizState._selectedOption = undefined;
  quizState.currentIndex++;

  if (quizState.currentIndex >= quizState.questions.length) {
    showQuizResults();
  } else {
    renderQuestion();
  }
}

// ── Show Results ────────────────────────────────────────────
function showQuizResults() {
  document.getElementById('quizActive').style.display = 'none';
  const resultsEl = document.getElementById('quizResults');
  resultsEl.style.display = 'block';

  const total = quizState.questions.reduce((a, q) => a + (q.points || 10), 0);
  const pct = Math.round((quizState.score / total) * 100);
  const correct = quizState.answers.filter(a => a.isCorrect).length;

  // Save score
  const progress = getSavedProgress();
  if (!progress.quizScores) progress.quizScores = {};
  if (pct > (progress.quizScores[quizState.chapter] || 0)) {
    progress.quizScores[quizState.chapter] = pct;
  }
  progress.totalScore = (progress.totalScore || 0) + quizState.score;
  saveProgress(progress);
  updateDashboardStats();

  const grade = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'poor';
  
  let msg = '';
  if (pct >= 90) msg = getTranslation('quiz_msg_excellent', 'ممتاز! أداء رائع! 🏆');
  else if (pct >= 70) msg = getTranslation('quiz_msg_good', 'جيد جداً! استمر! 👏');
  else if (pct >= 50) msg = getTranslation('quiz_msg_passing', 'جيد! راجع المفردات الضعيفة 📚');
  else msg = getTranslation('quiz_msg_fail', 'راجع الوحدة مرة أخرى 💪');

  const chData = CURRICULUM.find(c => c.id === quizState.chapter);
  const chName = getChapterTitle(chData);

  const summaryText = getTranslation('quiz_result_summary')
    .replace('{correct}', correct)
    .replace('{total}', quizState.questions.length)
    .replace('{score}', quizState.score);

  resultsEl.innerHTML = `
    <div class="result-score ${grade}">${pct}%</div>
    <div class="result-message">${msg}</div>
    <div class="result-details">
      ${summaryText}<br>
      ${getTranslation('chapter_label', 'الوحدة')}: ${chName}
    </div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="startChapterQuiz(${quizState.chapter})">🔄 ${getTranslation('quiz_results_restart')}</button>
      <button class="btn btn-ghost" onclick="backToQuizMenu()">← ${getTranslation('quiz_results_back')}</button>
      <button class="btn btn-ghost" onclick="navigateTo('flashcards')">🃏 ${getTranslation('quiz_review_flashcards')}</button>
    </div>
    <div class="answer-review" style="margin-top:32px;text-align:right">
      <h3 style="font-size:16px;margin-bottom:16px">${getTranslation('quiz_review_answers')}</h3>
      ${quizState.answers.map((a, i) => `
        <div style="padding:10px;border-radius:8px;margin-bottom:8px;background:${a.isCorrect ? 'rgba(52,211,153,0.08)' : 'rgba(248,113,113,0.08)'}">
          <span style="color:${a.isCorrect ? 'var(--accent-success)' : 'var(--accent-danger)'}">${a.isCorrect ? '✅' : '❌'}</span>
          <span style="font-size:13px;margin-right:8px">${a.q.explanation || ''}</span>
        </div>
      `).join('')}
    </div>`;
}

function removeWord(word, idx) {
  if (!window._currentOrderState) return;
  const { placed, renderOrder } = window._currentOrderState;
  const i = placed.indexOf(word);
  if (i > -1) placed.splice(i, 1);
  renderOrder();
}

function backToQuizMenu() {
  document.getElementById('quizSelection').style.display = 'grid';
  document.getElementById('quizActive').style.display = 'none';
  document.getElementById('quizResults').style.display = 'none';
  buildQuizSelection();
}

// ── Score Float Animation ───────────────────────────────────
function showScoreFloat(text) {
  const el = document.createElement('div');
  el.className = 'score-float';
  el.textContent = text;
  el.style.cssText = `top:${Math.random() * 200 + 100}px;left:${Math.random() * 300 + 200}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

// ── Utilities ───────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
