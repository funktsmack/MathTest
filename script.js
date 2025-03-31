const translations = {
    en: {
        title: "🌟 Times Tables Adventure 🌟",
        score: "Score",
        streak: "Streak",
        tableLabel: "Practice times table:",
        allTables: "All (1-10)",
        table: "times table",
        readyToStart: "Ready to start?",
        answerPlaceholder: "Type your answer here",
        submit: "Submit",
        next: "Next Question",
        correct: "Correct! 🎉 Great job!",
        incorrect: "Oops! The correct answer was",
        tryAgain: "Try again!",
        celebration: "🎉 Amazing Achievement! 🎉",
        celebrationMessage: "You've completed",
        questionsCorrect: "questions correctly!",
        keepWorking: "Keep up the great work!"
    },
    de: {
        title: "🌟 Einmaleins Abenteuer 🌟",
        score: "Punktzahl",
        streak: "Serie",
        tableLabel: "Übe das Einmaleins:",
        allTables: "Alle (1-10)",
        table: "er Einmaleins",
        readyToStart: "Bereit zum Starten?",
        answerPlaceholder: "Gib deine Antwort ein",
        submit: "Absenden",
        next: "Nächste Frage",
        correct: "Richtig! 🎉 Super gemacht!",
        incorrect: "Ups! Die richtige Antwort war",
        tryAgain: "Versuche es noch einmal!",
        celebration: "🎉 Unglaubliche Leistung! 🎉",
        celebrationMessage: "Du hast",
        questionsCorrect: "Fragen richtig beantwortet!",
        keepWorking: "Mach weiter so!"
    }
};

let currentLanguage = 'en';
let score = 0;
let streak = 0;
let maxStreak = 0;
let lastMilestone = 0;
let currentQuestion = null;

const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const timesTableSelect = document.getElementById('timesTable');
const languageSelect = document.getElementById('language');
const title = document.getElementById('title');
const scoreLabel = document.getElementById('score-label');
const streakLabel = document.getElementById('streak-label');
const tableLabel = document.getElementById('table-label');

// Add text size change handler
const textSizeSelect = document.getElementById('textSize');
textSizeSelect.addEventListener('change', (e) => {
    const container = document.querySelector('.container');
    // Remove existing text size classes
    container.classList.remove('text-size-large', 'text-size-x-large');
    // Add new text size class if not normal
    if (e.target.value !== 'normal') {
        container.classList.add(`text-size-${e.target.value}`);
    }
    // Store preference
    localStorage.setItem('preferredTextSize', e.target.value);
});

// Load saved text size preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTextSize = localStorage.getItem('preferredTextSize');
    if (savedTextSize) {
        textSizeSelect.value = savedTextSize;
        if (savedTextSize !== 'normal') {
            document.querySelector('.container').classList.add(`text-size-${savedTextSize}`);
        }
    }
});

function createCelebrationAnimation() {
    const t = translations[currentLanguage];
    const container = document.createElement('div');
    container.className = 'celebration-container';
    
    // Create multiple celebration characters
    const characters = ['🎉', '🎊', '🎈', '🎯', '🎨'];
    characters.forEach((char, index) => {
        const text = document.createElement('div');
        text.className = 'celebration-character';
        text.textContent = char;
        
        // Stagger the animations
        text.style.animation = `explode 0.5s ease-out ${index * 0.1}s forwards, moveAcross 3s linear ${index * 0.2}s forwards`;
        text.style.left = `${Math.random() * 100}%`;
        text.style.top = `${Math.random() * 100}%`;
        
        container.appendChild(text);
    });
    
    // Create milestone message
    const milestone = document.createElement('div');
    milestone.className = 'milestone';
    milestone.innerHTML = `
        <h2>${t.celebration}</h2>
        <p>${t.celebrationMessage} ${score} ${t.questionsCorrect}</p>
        <p>${t.keepWorking}</p>
    `;
    
    document.body.appendChild(container);
    document.body.appendChild(milestone);
    
    // Remove elements after animation
    setTimeout(() => {
        container.remove();
        milestone.remove();
    }, 3000);
}

function updateLanguage() {
    const t = translations[currentLanguage];
    title.textContent = t.title;
    scoreLabel.textContent = `${t.score}: ${score}`;
    streakLabel.textContent = `${t.streak}: ${streak}`;
    tableLabel.textContent = t.tableLabel;
    
    // Update times table options
    const timesTable = document.getElementById('timesTable');
    timesTable.options[0].text = t.allTables;
    for (let i = 1; i <= 10; i++) {
        timesTable.options[i].text = `${i} ${t.table}`;
    }
    
    answerInput.placeholder = t.answerPlaceholder;
    submitButton.textContent = t.submit;
    nextButton.textContent = t.next;
}

function generateQuestion() {
    const selectedTable = parseInt(timesTableSelect.value);
    
    if (selectedTable === 0) {
        // Random question from 1-10
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        currentQuestion = {
            num1,
            num2,
            answer: num1 * num2
        };
        questionElement.textContent = `${currentQuestion.num1} · ${currentQuestion.num2} = ?`;
    } else {
        // Specific times table
        const num2 = selectedTable;
        const num1 = Math.floor(Math.random() * 10) + 1;
        currentQuestion = {
            num1,
            num2,
            answer: num1 * num2
        };
        questionElement.textContent = `${currentQuestion.num1} · ${currentQuestion.num2} = ?`;
    }
}

function updateScore() {
    const t = translations[currentLanguage];
    scoreElement.textContent = score;
    streakElement.textContent = streak;
    scoreLabel.textContent = `${t.score}: ${score}`;
    streakLabel.textContent = `${t.streak}: ${streak}`;
    
    // Check for milestone (every 5 correct answers)
    if (score > 0 && score % 5 === 0 && score !== lastMilestone) {
        lastMilestone = score;
        createCelebrationAnimation();
    }
}

function showFeedback(message, isCorrect) {
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
}

function handleSubmit() {
    const userAnswer = parseInt(answerInput.value);
    const t = translations[currentLanguage];
    
    if (isNaN(userAnswer)) {
        showFeedback('Please enter a number!', false);
        return;
    }

    if (userAnswer === currentQuestion.answer) {
        score += 1;
        streak += 1;
        maxStreak = Math.max(maxStreak, streak);
        showFeedback(t.correct, true);
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        updateScore(); // Update score immediately after correct answer
    } else {
        streak = 0;
        showFeedback(`${t.incorrect} ${currentQuestion.answer}. ${t.tryAgain}`, false);
        updateScore(); // Update score even after incorrect answer
    }
}

function handleNext() {
    answerInput.value = '';
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    generateQuestion();
}

// Event Listeners
submitButton.addEventListener('click', handleSubmit);
nextButton.addEventListener('click', handleNext);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (submitButton.style.display !== 'none') {
            handleSubmit();
        } else {
            handleNext();
        }
    }
});

// When times table selection changes, generate a new question
timesTableSelect.addEventListener('change', () => {
    if (submitButton.style.display !== 'none') {
        generateQuestion();
    }
});

// Language switching
languageSelect.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    updateLanguage();
});

// Start the game
generateQuestion();
updateLanguage(); 