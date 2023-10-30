const questions = [
    {
        question: "Who scored the first goal in the Premier League?",

        answers: [
            { text: "Brian Deane", correct: true },
            { text: "Gary Lineker", correct: false },
            { text: "Alan Shearer", correct: false },
            { text: "Ian Wright", correct: false },
        ]
    },

    {
        question: "What team has not been relegated from the Premier League?",

        answers: [
            { text: "Newcastle United", correct: false },
            { text: "Aston Villa", correct: false },
            { text: "Arsenal FC", correct: true },
            { text: "Manchester City", correct: false },
        ]
    },

    {
        question: "How many Premier League titles have Manchester United won?",

        answers: [
            { text: "11", correct: false },
            { text: "14", correct: false },
            { text: "20", correct: false },
            { text: "13", correct: true },
        ]
    },

    {
        question: "Who is the Premier League record goal scorer?",

        answers: [
            { text: "Wayne Rooney", correct: false },
            { text: "Theirry Henry", correct: false },
            { text: "Alan Shearer", correct: true },
            { text: "Sergio Aguero", correct: false },
        ]
    },

    {
        question: "How many points did Derby County score in the 2007/2008 season?",

        answers: [
            { text: "13", correct: false },
            { text: "11", correct: true },
            { text: "9", correct: false },
            { text: "39", correct: false },
        ]
    },

    {
        question: "Who was the first goalkeeper to score a goal?",

        answers: [
            { text: "Paul Robinson", correct: false },
            { text: "Alison", correct: false },
            { text: "Peter Schmeichel", correct: true },
            { text: "Asmir Begovic", correct: false },
        ]
    },

    {
        question: "Who has missed the most penalties in the Premier League?",

        answers: [
            { text: "Frank Lampard", correct: false },
            { text: "Wayne Rooney", correct: false },
            { text: "Steven Gerrard", correct: false },
            { text: "Alan Shearer", correct: true },
        ]
    },

    {
        question: "Who is the player with the most Substitutions in Premier League history?",

        answers: [
            { text: "Peter Crouch", correct: false },
            { text: "Shane Long", correct: false },
            { text: "James Milner", correct: true },
            { text: "Gareth Barry", correct: false },
        ]
    },

    {
        question: "Which goalkeeper has kept the most clean sheets in Premier League history?",

        answers: [
            { text: "Petr Cech", correct: true },
            { text: "Mark Schwarzer", correct: false },
            { text: "Peter Schmeichel", correct: false },
            { text: "David James", correct: false },
        ]
    },

    {
        question: "Which team did not win an away game in a single Premier League season",

        answers: [
            { text: "Stoke City", correct: false },
            { text: "QPR", correct: false },
            { text: "Blackpool", correct: false },
            { text: "Hull City", correct: true },
        ]
    }

];
// Get the document html elements //
let questionElement = document.getElementById('questions');
let answerButtons = document.getElementById('answer-buttons');
let quizIntro = document.getElementById('quiz-intro');
let quizElement = document.getElementById('quiz');
let nextButton = document.getElementById('next-button');
let instructionsButton = document.getElementById('instructions-btn');
let instructionsTextElement = document.getElementById('instructions-text');
let startButton = document.getElementById('start-btn');
let gameArea = document.getElementById('game-area')


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

    nextButton.classList.remove('hide')
    nextButton.classList.add('add')

    gameArea.classList.remove('hide')
    gameArea.classList.add('show')

    startQuiz();

}

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions () {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if (answerButtons.correct) {
            button.dataset.correct = answers.correct;    
        } 

        button.addEventListener("click" , selectAnswer);
    });

}

function selectAnswer(e) {
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === 'true';

    if (isCorrect) {
        selectButton.classList.add('correct');
    } else {
        selectButton.classList.add('incorrect');
    }

}


function resetState () {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }

}
