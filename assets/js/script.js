
// Get the document html elements //
let questionElement = document.getElementById('questions');
let answerButtons = document.getElementById('answer-buttons');
let quizIntro = document.getElementById('quiz-intro');
let quizElement = document.getElementById('quiz');
let nextButton = document.getElementById('next-button');
let instructionsButton = document.getElementById('instructions-btn');
let instructionsTextElement = document.getElementById('instructions-text');
let startButton = document.getElementById('start-btn');
let gameArea = document.getElementById('game-area');


// Initalise the Quiz //

let score = 0;
let question = 0;
let answer = 0;
let currentQuestionIndex = 0;

hideInstructions();
hideAnswers();

function hideInstructions() {
    instructionsTextElement.classList.add('hide');
    gameArea.classList.add('hide');
}

function hideAnswers() {
    answerButtons.classList.add('hide');
    questionElement.classList.add('hide');
    nextButton.classList.add('hide');
}

function hideElements() {

    instructionsButton.classList.add('hide');
    quizIntro.classList.add('hide');
    quizElement.classList.add('hide');

}

function showInstructions() {
    instructionsTextElement.classList.remove('hide');
    instructionsTextElement.classList.add('show', 'quiz-instructions');
    hideElements();
}

function runGame() {
    questionElement.classList.remove('hide');
    questionElement.classList.add('show');

    instructionsTextElement.classList.remove('show');
    hideElements();
    hideInstructions();


    answerButtons.classList.remove('hide');
    answerButtons.classList.add('show');

    nextButton.classList.remove('hide');
    nextButton.classList.add('add');

    gameArea.classList.remove('hide');
    gameArea.classList.add('show');

    startQuiz();

}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if (answers.isCorrect) {
            button.dataset.correct = answers.correct;
        }

        button.addEventListener("click", selectAnswer);

    });

}

function selectAnswer(e) {
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === "true";

    if (isCorrect) {
        selectButton.classList.add("correct");
    } else {
        selectButton.classList.add("incorrect");
    }



}


function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
