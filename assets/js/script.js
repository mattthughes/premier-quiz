
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
    questionElement.innerText = questionNum + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('answer-buttons');
        answerButtons.appendChild(button);

        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }

        button.addEventListener("click", selectAnswer);

    });


}

function selectAnswer(event) {
    const selectButton = event.target;
    const isCorrect = selectButton.dataset.correct === "true";

    if (isCorrect) {
        score++;
        selectButton.classList.add("correct");
    } else {
        selectButton.classList.add("incorrect");

    }

    nextButton.style.display = 'block';


    Array.from(answerButtons.children).forEach(button => {
       

        button.disabled = true;

    });

}

    nextButton.addEventListener("click", () => {

        if (currentQuestionIndex < questions.length) {
            showNextQuestion();
        } else {
            startQuiz();
        }

    });

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showResults();
    }
}

function showResults() {
    resetState();

    if (score <= 3) {
        questionElement.innerHTML = `Good effort you scored ${score} out of ${questions.length} Press play again to try again!`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';
    }
    else if (score <= 7) {
        questionElement.innerHTML = `You know alot about the Premier league you scored ${score} out of ${questions.length} Press play again to try again!`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';

    } else if (score >= 10) {
        gameArea.innerHTML = `You scored ${score} out of ${questions.length} Congratulations you got every question correct press the next button to enter the raffle!`;
        nextButton.style.display = 'block';
        nextButton.innerHTML = 'next';

    }

}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
