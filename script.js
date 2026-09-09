// ============================================================
// TRANSLATIONS  (EN · DE · FR · ES)
// ============================================================
const translations = {
    en: {
        title: '🌟 Math Adventure 🌟',
        score: 'Score', streak: 'Streak', accuracy: 'Accuracy', timerLabel: 'Time',
        modeLabel: 'Mode', tableLabel: 'Table', diffLabel: 'Range',
        inputLabel: 'Input', timedLabel: 'Timed',
        multiplication: '× Multiply', division: '÷ Divide',
        addition: '+ Add', subtraction: '− Subtract', mixed: '🎲 Mix',
        allTables: 'All',
        readyToStart: 'Ready to start? 🚀',
        answerPlaceholder: '?',
        submit: 'Submit ✓', next: 'Next →',
        correct: ['🎉 Correct!', '✨ Brilliant!', '🌟 Amazing!', '🔥 On fire!', '💪 Great job!', '⭐ Superb!', '🎯 Spot on!'],
        incorrect: 'Oops! The answer was', tryAgain: 'Try again!',
        timedEnd: "Time's up!", finalScore: 'Final Score:', playAgain: 'Play Again',
        statsTitle: '🏆 Best Scores',
        hsScoreLabel: 'Best Score', hsStreakLabel: 'Best Streak', hsAccuracyLabel: 'Best Accuracy',
        resetStats: 'Reset Stats',
        achievements: {
            first:   '🎯 First correct!',
            streak5:  '🔥 5 in a row!',
            streak10: '⚡ 10 in a row!',
            streak20: '🚀 20 in a row!',
            score10:  '🌟 Score: 10!',
            score25:  '💫 Score: 25!',
            score50:  '🏆 Score: 50!',
            score100: '👑 Score: 100!',
        }
    },
    de: {
        title: '🌟 Mathe Abenteuer 🌟',
        score: 'Punkte', streak: 'Serie', accuracy: 'Genauigkeit', timerLabel: 'Zeit',
        modeLabel: 'Modus', tableLabel: 'Tabelle', diffLabel: 'Bereich',
        inputLabel: 'Eingabe', timedLabel: 'Zeit',
        multiplication: '× Mal', division: '÷ Geteilt',
        addition: '+ Plus', subtraction: '− Minus', mixed: '🎲 Mix',
        allTables: 'Alle',
        readyToStart: 'Bereit? Los! 🚀',
        answerPlaceholder: '?',
        submit: 'Absenden ✓', next: 'Weiter →',
        correct: ['🎉 Richtig!', '✨ Brilliant!', '🌟 Toll!', '🔥 Super!', '💪 Gut gemacht!', '⭐ Klasse!', '🎯 Genau!'],
        incorrect: 'Ups! Die Antwort war', tryAgain: 'Versuch es nochmal!',
        timedEnd: 'Zeit abgelaufen!', finalScore: 'Endergebnis:', playAgain: 'Nochmal spielen',
        statsTitle: '🏆 Bestleistungen',
        hsScoreLabel: 'Bester Score', hsStreakLabel: 'Beste Serie', hsAccuracyLabel: 'Beste Genauigkeit',
        resetStats: 'Stats zurücksetzen',
        achievements: {
            first:    '🎯 Erste Richtige!',
            streak5:  '🔥 5 in Folge!',
            streak10: '⚡ 10 in Folge!',
            streak20: '🚀 20 in Folge!',
            score10:  '🌟 Punkte: 10!',
            score25:  '💫 Punkte: 25!',
            score50:  '🏆 Punkte: 50!',
            score100: '👑 Punkte: 100!',
        }
    },
    fr: {
        title: '🌟 Aventure Math 🌟',
        score: 'Score', streak: 'Série', accuracy: 'Précision', timerLabel: 'Temps',
        modeLabel: 'Mode', tableLabel: 'Table', diffLabel: 'Plage',
        inputLabel: 'Saisie', timedLabel: 'Chrono',
        multiplication: '× Multiplier', division: '÷ Diviser',
        addition: '+ Additionner', subtraction: '− Soustraire', mixed: '🎲 Mix',
        allTables: 'Toutes',
        readyToStart: 'Prêt? Allons-y! 🚀',
        answerPlaceholder: '?',
        submit: 'Valider ✓', next: 'Suivant →',
        correct: ['🎉 Correct!', '✨ Brillant!', '🌟 Superbe!', '🔥 En feu!', '💪 Bien joué!', '⭐ Parfait!', '🎯 Juste!'],
        incorrect: 'Oups! La réponse était', tryAgain: 'Réessaie!',
        timedEnd: 'Temps écoulé!', finalScore: 'Score final:', playAgain: 'Rejouer',
        statsTitle: '🏆 Meilleurs Scores',
        hsScoreLabel: 'Meilleur Score', hsStreakLabel: 'Meilleure Série', hsAccuracyLabel: 'Meilleure Précision',
        resetStats: 'Réinitialiser',
        achievements: {
            first:    '🎯 Première bonne réponse!',
            streak5:  '🔥 5 d\'affilée!',
            streak10: '⚡ 10 d\'affilée!',
            streak20: '🚀 20 d\'affilée!',
            score10:  '🌟 Score: 10!',
            score25:  '💫 Score: 25!',
            score50:  '🏆 Score: 50!',
            score100: '👑 Score: 100!',
        }
    },
    es: {
        title: '🌟 Aventura Matemática 🌟',
        score: 'Puntos', streak: 'Racha', accuracy: 'Precisión', timerLabel: 'Tiempo',
        modeLabel: 'Modo', tableLabel: 'Tabla', diffLabel: 'Rango',
        inputLabel: 'Entrada', timedLabel: 'Tiempo',
        multiplication: '× Multiplicar', division: '÷ Dividir',
        addition: '+ Sumar', subtraction: '− Restar', mixed: '🎲 Mix',
        allTables: 'Todas',
        readyToStart: '¿Listo? ¡Vamos! 🚀',
        answerPlaceholder: '?',
        submit: 'Enviar ✓', next: 'Siguiente →',
        correct: ['🎉 ¡Correcto!', '✨ ¡Brillante!', '🌟 ¡Genial!', '🔥 ¡En llamas!', '💪 ¡Bien hecho!', '⭐ ¡Perfecto!', '🎯 ¡Exacto!'],
        incorrect: 'Oops! La respuesta era', tryAgain: '¡Inténtalo de nuevo!',
        timedEnd: '¡Tiempo agotado!', finalScore: 'Puntuación final:', playAgain: 'Jugar de nuevo',
        statsTitle: '🏆 Mejores Puntuaciones',
        hsScoreLabel: 'Mejor Puntuación', hsStreakLabel: 'Mejor Racha', hsAccuracyLabel: 'Mejor Precisión',
        resetStats: 'Restablecer',
        achievements: {
            first:    '🎯 ¡Primera correcta!',
            streak5:  '🔥 ¡5 seguidas!',
            streak10: '⚡ ¡10 seguidas!',
            streak20: '🚀 ¡20 seguidas!',
            score10:  '🌟 ¡Puntos: 10!',
            score25:  '💫 ¡Puntos: 25!',
            score50:  '🏆 ¡Puntos: 50!',
            score100: '👑 ¡Puntos: 100!',
        }
    }
};

// ============================================================
// STATE
// ============================================================
let currentLanguage  = localStorage.getItem('language')  || 'en';
let score            = 0;
let streak           = 0;
let maxStreak        = 0;
let totalAttempts    = 0;
let totalCorrect     = 0;
let lastMilestone    = 0;
let currentQuestion  = null;
let recentQuestions  = [];   // rolling history to prevent repeats
let timerInterval    = null;
let timerSecondsLeft = 0;
let timerTotal       = 0;
let gameActive       = true;
let soundEnabled     = localStorage.getItem('soundEnabled') !== 'false';
let darkMode         = localStorage.getItem('darkMode') === 'true';
let achievementsShown = new Set();
let audioCtx         = null;

// ============================================================
// AUDIO  (Web Audio API — no external files needed)
// ============================================================
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

function playTone(freq, dur, type = 'sine', vol = 0.25, delay = 0) {
    if (!soundEnabled) return;
    try {
        const ctx   = getAudioCtx();
        const osc   = ctx.createOscillator();
        const gain  = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = type;
        osc.frequency.value = freq;
        const t = ctx.currentTime + delay;
        gain.gain.setValueAtTime(vol, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
        osc.start(t);
        osc.stop(t + dur);
    } catch (_) {}
}

function playCorrectSound() {
    playTone(523, 0.12, 'sine', 0.25, 0.00);   // C5
    playTone(659, 0.12, 'sine', 0.25, 0.10);   // E5
    playTone(784, 0.18, 'sine', 0.25, 0.20);   // G5
}

function playWrongSound() {
    playTone(330, 0.10, 'sawtooth', 0.2, 0.00);
    playTone(220, 0.20, 'sawtooth', 0.2, 0.10);
}

function playCelebrationSound() {
    [523, 659, 784, 1047].forEach((f, i) => playTone(f, 0.18, 'sine', 0.28, i * 0.11));
}

function playClickSound() {
    playTone(700, 0.05, 'sine', 0.12, 0);
}

function playTimerBeep() {
    playTone(880, 0.08, 'square', 0.12, 0);
}

// ============================================================
// DOM REFERENCES
// ============================================================
const questionEl        = document.getElementById('question');
const answerInput       = document.getElementById('answer');
const submitBtn         = document.getElementById('submit');
const nextBtn           = document.getElementById('next');
const feedbackEl        = document.getElementById('feedback');
const scoreEl           = document.getElementById('score');
const streakEl          = document.getElementById('streak');
const accuracyEl        = document.getElementById('accuracy');
const timerEl           = document.getElementById('timer');
const timerStatEl       = document.getElementById('timer-stat');
const timerDividerEl    = document.getElementById('timer-divider');
const timerBarWrapEl    = document.getElementById('timerBarWrap');
const timerBarEl        = document.getElementById('timerBar');
const timesTableSelect  = document.getElementById('timesTable');
const languageSelect    = document.getElementById('language');
const practiceModeSelect = document.getElementById('practiceMode');
const difficultySelect  = document.getElementById('difficulty');
const inputModeSelect   = document.getElementById('inputMode');
const timedModeSelect   = document.getElementById('timedMode');
const textSizeSelect    = document.getElementById('textSize');
const darkModeToggle    = document.getElementById('darkModeToggle');
const soundToggle       = document.getElementById('soundToggle');
const statsBtn          = document.getElementById('statsBtn');
const typeAnswerContainer = document.getElementById('typeAnswerContainer');
const choicesContainer  = document.getElementById('choicesContainer');
const choicesGrid       = document.getElementById('choicesGrid');
const highscoresPanel   = document.getElementById('highscoresPanel');
const hsScore           = document.getElementById('hs-score');
const hsStreak          = document.getElementById('hs-streak');
const hsAccuracy        = document.getElementById('hs-accuracy');
const resetStatsBtn     = document.getElementById('resetStats');
const titleEl           = document.getElementById('title');

// ============================================================
// HELPERS
// ============================================================
function getRange() {
    const d = difficultySelect.value;
    return d === 'easy' ? 5 : d === 'hard' ? 12 : 10;
}

// skew < 1 biases the pick toward the top of the range (near max);
// skew === 1 is a plain uniform 1..max pick.
function rand(max, skew = 1) {
    return Math.min(max, Math.floor(Math.pow(Math.random(), skew) * max) + 1);
}

function getStreakEmoji(s) {
    if (s >= 20) return ' 🚀';
    if (s >= 10) return ' ⚡';
    if (s >= 5)  return ' 🔥';
    return '';
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Adaptive difficulty: start with numbers 1–4, expand by 1 for every 3
// correct answers until reaching the user's chosen range ceiling.
function getAdaptiveMax(range) {
    const base    = Math.min(4, range);
    const expanded = base + Math.floor(totalCorrect / 3);
    return Math.min(range, expanded);
}

// As totalCorrect grows, bias operand picks toward the top of the
// currently-unlocked range (e.g. 5-9) instead of sampling it uniformly,
// so newly-unlocked harder numbers actually get practiced more than the
// ones already mastered. Eases from uniform (1) down to a strong top-end
// bias (0.45) over the first ~30 correct answers.
function getSkew() {
    return Math.max(0.45, 1 - totalCorrect / 30);
}

// ============================================================
// QUESTION GENERATION
// ============================================================
function getEffectiveMode() {
    if (practiceModeSelect.value === 'mixed') {
        return pickRandom(['multiplication', 'division', 'addition', 'subtraction']);
    }
    return practiceModeSelect.value;
}

function buildQuestion(mode, selectedTable, range) {
    const aMax = getAdaptiveMax(range);   // grows with totalCorrect
    const skew = getSkew();               // biases toward the top of aMax

    if (mode === 'multiplication') {
        const a = rand(aMax, skew);
        const b = selectedTable === 0 ? rand(aMax, skew) : selectedTable;
        return { answer: a * b, display: `${a} × ${b} = ?` };
    }
    if (mode === 'division') {
        const divisor  = selectedTable === 0 ? rand(aMax, skew) : selectedTable;
        const quotient = rand(aMax, skew);
        return { answer: quotient, display: `${divisor * quotient} ÷ ${divisor} = ?` };
    }
    if (mode === 'addition') {
        const a = rand(aMax, skew);
        const b = selectedTable === 0 ? rand(aMax, skew) : selectedTable;
        return { answer: a + b, display: `${a} + ${b} = ?` };
    }
    // subtraction — ensure non-negative result
    const b = selectedTable === 0 ? rand(aMax, skew) : selectedTable;
    const a = b + rand(aMax, skew);   // a >= b+1, so result >= 1
    return { answer: a - b, display: `${a} − ${b} = ?` };
}

function generateQuestion() {
    const selectedTable = parseInt(timesTableSelect.value);
    const range         = getRange();
    const mode          = getEffectiveMode();

    // Pool size = how many distinct questions currently exist.
    // For "All tables" both operands vary; for a specific table only one varies.
    const aMax     = getAdaptiveMax(range);
    const poolSize = selectedTable === 0 ? aMax * aMax : aMax;

    // Keep at most ~60 % of the pool in history so there's always fresh headroom.
    const historyLimit = Math.max(1, Math.floor(poolSize * 0.6));

    let q, attempts = 0;
    do {
        q = buildQuestion(mode, selectedTable, range);
        attempts++;
    } while (attempts < 25 && recentQuestions.includes(q.display));

    // Add to rolling history, drop oldest entry when over limit.
    recentQuestions.push(q.display);
    if (recentQuestions.length > historyLimit) recentQuestions.shift();

    currentQuestion        = q;
    questionEl.textContent = q.display;

    // pop-in animation
    questionEl.classList.remove('question-pop');
    void questionEl.offsetWidth;
    questionEl.classList.add('question-pop');

    if (inputModeSelect.value === 'choice') renderChoices(q);
}

// ============================================================
// MULTIPLE CHOICE
// ============================================================
function generateChoices(correct) {
    const options  = new Set([correct]);
    const offsets  = [-3, -2, -1, 1, 2, 3, -5, 5, -10, 10, -4, 4].sort(() => Math.random() - 0.5);

    for (const off of offsets) {
        if (options.size >= 4) break;
        const c = correct + off;
        if (c >= 0) options.add(c);
    }
    // fallback
    while (options.size < 4) options.add(correct + options.size * 7 + 1);

    return [...options].sort(() => Math.random() - 0.5);
}

function renderChoices(question) {
    choicesGrid.innerHTML = '';
    generateChoices(question.answer).forEach(opt => {
        const btn = document.createElement('button');
        btn.className    = 'choice-btn';
        btn.textContent  = opt;
        btn.addEventListener('click', () => handleChoiceSelect(opt, btn));
        choicesGrid.appendChild(btn);
    });
}

function handleChoiceSelect(value, btn) {
    if (timerTotal > 0 && !gameActive) return;

    document.querySelectorAll('.choice-btn').forEach(b => (b.disabled = true));

    const isCorrect = value === currentQuestion.answer;
    btn.classList.add(isCorrect ? 'choice-correct' : 'choice-wrong');

    if (!isCorrect) {
        document.querySelectorAll('.choice-btn').forEach(b => {
            if (Number(b.textContent) === currentQuestion.answer) b.classList.add('choice-correct');
        });
    }
    processAnswer(isCorrect);
}

// ============================================================
// SCORE & STATS
// ============================================================
function updateStats() {
    scoreEl.textContent  = score;
    streakEl.textContent = streak + getStreakEmoji(streak);

    scoreEl.classList.remove('score-bump');
    void scoreEl.offsetWidth;
    scoreEl.classList.add('score-bump');

    accuracyEl.textContent = totalAttempts > 0
        ? `${Math.round((totalCorrect / totalAttempts) * 100)}%`
        : '—';

    // milestone every 5 correct answers
    if (score > 0 && score % 5 === 0 && score !== lastMilestone) {
        lastMilestone = score;
        spawnConfetti();
        playCelebrationSound();
    }

    saveHighScores();
}

// ============================================================
// HIGH SCORES
// ============================================================
function loadHighScores() {
    try { return JSON.parse(localStorage.getItem('highScores')) || {}; }
    catch (_) { return {}; }
}

function saveHighScores() {
    const best = loadHighScores();
    if (score     > (best.score    || 0)) best.score    = score;
    if (maxStreak > (best.streak   || 0)) best.streak   = maxStreak;
    if (totalAttempts > 0) {
        const pct = Math.round((totalCorrect / totalAttempts) * 100);
        if (pct > (best.accuracy || 0)) best.accuracy = pct;
    }
    localStorage.setItem('highScores', JSON.stringify(best));
    if (highscoresPanel.style.display !== 'none') renderHighScores();
}

function renderHighScores() {
    const best = loadHighScores();
    hsScore.textContent    = best.score    || 0;
    hsStreak.textContent   = best.streak   || 0;
    hsAccuracy.textContent = best.accuracy ? `${best.accuracy}%` : '—';
}

// ============================================================
// ACHIEVEMENTS
// ============================================================
function checkAchievements() {
    const ach = translations[currentLanguage].achievements;
    [
        { key: 'first',    cond: score  === 1   },
        { key: 'streak5',  cond: streak === 5   },
        { key: 'streak10', cond: streak === 10  },
        { key: 'streak20', cond: streak === 20  },
        { key: 'score10',  cond: score  === 10  },
        { key: 'score25',  cond: score  === 25  },
        { key: 'score50',  cond: score  === 50  },
        { key: 'score100', cond: score  === 100 },
    ].forEach(({ key, cond }) => {
        if (cond && !achievementsShown.has(key)) {
            achievementsShown.add(key);
            showAchievementBadge(ach[key]);
        }
    });
}

function showAchievementBadge(text) {
    const el = document.createElement('div');
    el.className   = 'achievement-badge';
    el.textContent = text;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('achievement-show'));
    setTimeout(() => {
        el.classList.add('achievement-hide');
        setTimeout(() => el.remove(), 500);
    }, 2800);
}

// ============================================================
// ANSWER HANDLING
// ============================================================
function handleSubmit() {
    const val = parseInt(answerInput.value, 10);
    if (isNaN(val)) {
        feedbackEl.textContent = '⚠️ Enter a number!';
        feedbackEl.className   = 'feedback incorrect';
        answerInput.focus();
        return;
    }
    processAnswer(val === currentQuestion.answer);
}

function processAnswer(isCorrect) {
    if (timerTotal > 0 && !gameActive) return;

    totalAttempts++;
    const t          = translations[currentLanguage];
    const isTypeMode = inputModeSelect.value === 'type';

    if (isCorrect) {
        totalCorrect++;
        score++;
        streak++;
        maxStreak = Math.max(maxStreak, streak);

        feedbackEl.textContent = pickRandom(t.correct);
        feedbackEl.className   = 'feedback correct';

        if (isTypeMode) answerInput.style.borderColor = '#2ecc71';

        playCorrectSound();
        checkAchievements();
        updateStats();

        submitBtn.style.display = 'none';
        nextBtn.style.display   = 'block';

        // auto-advance in timed mode
        if (timerTotal > 0) setTimeout(() => { if (gameActive) handleNext(); }, 700);

    } else {
        streak = 0;
        feedbackEl.textContent = `${t.incorrect} ${currentQuestion.answer}. ${t.tryAgain}`;
        feedbackEl.className   = 'feedback incorrect';

        if (isTypeMode) answerInput.style.borderColor = '#e74c3c';

        playWrongSound();
        updateStats();

        if (isTypeMode) {
            answerInput.value = '';
            answerInput.focus();
        } else {
            submitBtn.style.display = 'none';
            nextBtn.style.display   = 'block';
            if (timerTotal > 0) setTimeout(() => { if (gameActive) handleNext(); }, 1200);
        }
    }
}

function handleNext() {
    answerInput.value           = '';
    answerInput.style.borderColor = '';
    feedbackEl.textContent      = '';
    feedbackEl.className        = 'feedback';
    nextBtn.style.display       = 'none';

    if (inputModeSelect.value === 'type') {
        submitBtn.style.display = 'block';
        setTimeout(() => answerInput.focus(), 40);
    }
    generateQuestion();
}

// ============================================================
// TIMER
// ============================================================
function startTimer(seconds) {
    timerSecondsLeft = seconds;
    timerTotal       = seconds;
    gameActive       = true;

    timerStatEl.style.display    = 'flex';
    timerDividerEl.style.display = 'block';
    timerBarWrapEl.style.display = 'block';
    timerEl.classList.remove('timer-warning');

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timerSecondsLeft--;
        updateTimerDisplay();
        if (timerSecondsLeft <= 10) {
            playTimerBeep();
            timerEl.classList.add('timer-warning');
        }
        if (timerSecondsLeft <= 0) endTimedGame();
    }, 1000);
}

function updateTimerDisplay() {
    timerEl.textContent = timerSecondsLeft;
    const pct = (timerSecondsLeft / timerTotal) * 100;
    timerBarEl.style.width      = `${pct}%`;
    timerBarEl.style.background = pct > 50 ? '#2ecc71' : pct > 20 ? '#f39c12' : '#e74c3c';
}

function endTimedGame() {
    clearInterval(timerInterval);
    gameActive = false;

    const t        = translations[currentLanguage];
    const accuracy = totalAttempts > 0
        ? `${Math.round((totalCorrect / totalAttempts) * 100)}%`
        : '—';

    const overlay = document.createElement('div');
    overlay.className = 'game-over-overlay';
    overlay.innerHTML = `
        <div class="game-over-box">
            <div class="go-emoji">🎉</div>
            <h2>${t.timedEnd}</h2>
            <div class="go-stats">
                <div class="go-stat">
                    <span class="go-stat-label">${t.finalScore}</span>
                    <span class="go-stat-value">${score}</span>
                </div>
                <div class="go-stat">
                    <span class="go-stat-label">${t.accuracy}</span>
                    <span class="go-stat-value">${accuracy}</span>
                </div>
                <div class="go-stat">
                    <span class="go-stat-label">${t.streak}</span>
                    <span class="go-stat-value">${maxStreak}</span>
                </div>
            </div>
            <button class="btn-primary play-again-btn">${t.playAgain}</button>
        </div>`;

    document.body.appendChild(overlay);
    spawnConfetti(30);
    playCelebrationSound();

    overlay.querySelector('.play-again-btn').addEventListener('click', () => {
        overlay.remove();
        resetGame();
    });
}

// ============================================================
// GAME RESET
// ============================================================
function resetGame() {
    score         = 0;
    streak        = 0;
    maxStreak     = 0;
    totalAttempts = 0;
    totalCorrect  = 0;
    lastMilestone = 0;
    achievementsShown.clear();
    recentQuestions = [];
    clearInterval(timerInterval);
    gameActive    = true;

    timerEl.classList.remove('timer-warning');
    feedbackEl.textContent        = '';
    feedbackEl.className          = 'feedback';
    nextBtn.style.display         = 'none';
    answerInput.value             = '';
    answerInput.style.borderColor = '';

    // restore submit button visibility based on mode
    submitBtn.style.display = (inputModeSelect.value === 'type') ? 'block' : 'none';

    updateStats();

    const sec = parseInt(timedModeSelect.value);
    if (sec > 0) {
        startTimer(sec);
    } else {
        timerTotal                   = 0;
        timerStatEl.style.display    = 'none';
        timerDividerEl.style.display = 'none';
        timerBarWrapEl.style.display = 'none';
    }

    generateQuestion();
    if (inputModeSelect.value === 'type') setTimeout(() => answerInput.focus(), 50);
}

// ============================================================
// CONFETTI
// ============================================================
function spawnConfetti(count = 18) {
    const chars = ['🎉', '🎊', '🎈', '⭐', '🌟', '💫', '✨', '🎯', '🏆', '🎁'];
    for (let i = 0; i < count; i++) {
        const el          = document.createElement('div');
        el.className      = 'confetti-piece';
        el.textContent    = pickRandom(chars);
        el.style.left     = `${Math.random() * 100}vw`;
        el.style.fontSize = `${18 + Math.random() * 28}px`;
        el.style.animationDuration  = `${1.2 + Math.random() * 1.8}s`;
        el.style.animationDelay     = `${Math.random() * 0.6}s`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3500);
    }
}

// ============================================================
// LANGUAGE & UI
// ============================================================
function updateLanguage() {
    const t = translations[currentLanguage];

    titleEl.textContent = t.title;
    document.getElementById('score-label').textContent    = t.score;
    document.getElementById('streak-label').textContent   = t.streak;
    document.getElementById('accuracy-label').textContent = t.accuracy;
    document.getElementById('timer-label').textContent    = t.timerLabel;
    document.getElementById('mode-label').textContent     = t.modeLabel;
    document.getElementById('table-label').textContent    = t.tableLabel;
    document.getElementById('diff-label').textContent     = t.diffLabel;
    document.getElementById('input-label').textContent    = t.inputLabel;
    document.getElementById('timed-label').textContent    = t.timedLabel;
    document.getElementById('hs-title').textContent       = t.statsTitle;
    document.getElementById('hs-score-label').textContent    = t.hsScoreLabel;
    document.getElementById('hs-streak-label').textContent   = t.hsStreakLabel;
    document.getElementById('hs-accuracy-label').textContent = t.hsAccuracyLabel;
    resetStatsBtn.textContent  = t.resetStats;
    answerInput.placeholder    = t.answerPlaceholder;
    submitBtn.textContent      = t.submit;
    nextBtn.textContent        = t.next;

    // Mode options
    const mOpts = practiceModeSelect.options;
    mOpts[0].text = t.multiplication;
    mOpts[1].text = t.division;
    mOpts[2].text = t.addition;
    mOpts[3].text = t.subtraction;
    mOpts[4].text = t.mixed;

    // Rebuild table options preserving selection
    const prevTable = timesTableSelect.value;
    const range     = getRange();
    timesTableSelect.innerHTML = `<option value="0">${t.allTables}</option>`;
    for (let i = 1; i <= range; i++) {
        const opt   = document.createElement('option');
        opt.value   = i;
        opt.textContent = i;
        timesTableSelect.appendChild(opt);
    }
    timesTableSelect.value = (parseInt(prevTable) <= range) ? prevTable : '0';

    localStorage.setItem('language', currentLanguage);
}

function updateInputMode() {
    const isChoice = inputModeSelect.value === 'choice';
    typeAnswerContainer.style.display = isChoice ? 'none' : 'flex';
    choicesContainer.style.display    = isChoice ? 'block' : 'none';
    submitBtn.style.display           = isChoice ? 'none' : 'block';
    if (!isChoice) setTimeout(() => answerInput.focus(), 40);
}

function applyDarkMode() {
    document.body.classList.toggle('dark', darkMode);
    darkModeToggle.textContent = darkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', darkMode);
}

function applySoundToggle() {
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
    localStorage.setItem('soundEnabled', soundEnabled);
}

function applyTextSize() {
    const container = document.querySelector('.container');
    container.classList.remove('text-size-large', 'text-size-x-large');
    const val = textSizeSelect.value;
    if (val !== 'normal') container.classList.add(`text-size-${val}`);
    localStorage.setItem('preferredTextSize', val);
}

// ============================================================
// EVENT LISTENERS
// ============================================================
submitBtn.addEventListener('click', () => { playClickSound(); handleSubmit(); });
nextBtn.addEventListener('click',   () => { playClickSound(); handleNext();   });

answerInput.addEventListener('keypress', e => {
    if (e.key !== 'Enter') return;
    if (submitBtn.style.display !== 'none') handleSubmit();
    else handleNext();
});

languageSelect.addEventListener('change', e => {
    currentLanguage = e.target.value;
    updateLanguage();
});

practiceModeSelect.addEventListener('change', () => {
    recentQuestions = [];
    generateQuestion();
});

timesTableSelect.addEventListener('change', () => {
    recentQuestions = [];
    if (submitBtn.style.display !== 'none' || inputModeSelect.value === 'choice') generateQuestion();
});

difficultySelect.addEventListener('change', () => {
    recentQuestions = [];
    updateLanguage();   // rebuilds table options for new range
    generateQuestion();
});

inputModeSelect.addEventListener('change', () => {
    updateInputMode();
    generateQuestion();
});

timedModeSelect.addEventListener('change', () => {
    clearInterval(timerInterval);
    const sec = parseInt(timedModeSelect.value);
    if (sec > 0) {
        resetGame();
    } else {
        timerTotal                   = 0;
        gameActive                   = true;
        timerStatEl.style.display    = 'none';
        timerDividerEl.style.display = 'none';
        timerBarWrapEl.style.display = 'none';
    }
});

darkModeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    applyDarkMode();
    playClickSound();
});

soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    applySoundToggle();
});

statsBtn.addEventListener('click', () => {
    const hidden = highscoresPanel.style.display === 'none';
    highscoresPanel.style.display = hidden ? 'block' : 'none';
    if (hidden) renderHighScores();
    playClickSound();
});

resetStatsBtn.addEventListener('click', () => {
    localStorage.removeItem('highScores');
    renderHighScores();
    playClickSound();
});

textSizeSelect.addEventListener('change', () => applyTextSize());

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Restore persisted preferences
    languageSelect.value = currentLanguage;

    const savedSize = localStorage.getItem('preferredTextSize');
    if (savedSize) { textSizeSelect.value = savedSize; applyTextSize(); }

    applyDarkMode();
    applySoundToggle();
    updateLanguage();
    updateInputMode();
    generateQuestion();
    setTimeout(() => answerInput.focus(), 80);
});
