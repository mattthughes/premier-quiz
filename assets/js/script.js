
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
let contactForm = document.getElementById('raffle');



// Initalise the Quiz //

let score = 0;
let question = 0;
let answer = 0;
let currentQuestionIndex = 0;

hideInstructions();
hideAnswers();

/**Hidding  key elements */

function hideInstructions() {
    instructionsTextElement.classList.add('hide');
    gameArea.classList.add('hide');
    contactForm.classList.add('hide');
}

/**Hidding  key elements */

function hideAnswers() {
    answerButtons.classList.add('hide');
    questionElement.classList.add('hide');
    nextButton.classList.add('hide');
}

/**Hidding  key elements */

function hideElements() {

    instructionsButton.classList.add('hide');
    quizIntro.classList.add('hide');
    quizElement.classList.add('hide');

}

/**Hidding and unhiding key elements */

function showInstructions() {
    instructionsTextElement.classList.remove('hide');
    instructionsTextElement.classList.add('show', 'quiz-instructions');
    hideElements();
}

/** Hidding and unhiding key elements while also using the start quiz function to start when the start button is clicked */

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

/**Setting up quiz functionality by setting default parameters */

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

/* This function is reseting the state and getting the current question by using the object questions and the currentquestion index 
previously declared to get the question number is done by the current question index adding 1 and then setting the inner next of the question
to grab the question from the object, after this using a for each loop to the questions answers by creating a new element button for 
the answers and changing the button text to the answers.text which is the answers in the array answers using the append child 
method to move the button then finally setting up the correct answer functionality by checking if the answer.correct is true to 
set the button data to answers.correct I then create an event listener with a click parameter and a select answer function. */

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerText = questionNum + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('answer-btn');
        answerButtons.appendChild(button);

        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }

        button.addEventListener("click", selectAnswer);

    });


}

/* This function is first creating a variable called select button with the constant key word which cannot be changed then creating
another varible which is checking if the select button is the variable in use. After its checkig if the question is correct to 
add on score by 1 and to add the class correct which is changing the colour of the button and if the answer is wrong 
to add the incorrect class, next accessing the next button once an answer has been selected and setting this to a block 
level element after this a for each loop is getting the array answers and the children which is the text and the true 
and false values once this is done to disable all buttons once an option has been clicked using the . disabled method
and finally I add an event listener using the click and empty function parameter which simply checks if the current question
index is less than the length of the object questions if it is you show the next question or start the quiz.* */

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
    nextButton.classList.add('nxt-btn');


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
/** This function is adding onto the current question index and showing if the current question index is less 
 * than the questions in the array to show questions to get another question and answers from 
 * the question object otherwise show the results function.
 */
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showResults();
    }
}
/** This function is first using the reset state and then checking what the score is
 * then i am changing the question element space by using the inner html property to change the 
 * html and doing the same for the next button and setting this to a block level element. with the last option allowing the user to go to 
 * another screen to fill out the form by adding an event listener with the parameters click and join raffle function.
 */
function showResults() {
    resetState();

    if (score <= 3) {
        questionElement.innerHTML = `Good effort you scored ${score} out of ${questions.length} Press play again to try again!`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';


    }
    else if (score < 9) {
        questionElement.innerHTML = `You know alot about the Premier league you scored ${score} out of ${questions.length} Press play again to try again!`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';

    } else if (score > 9) {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length} Congratulations you got every question correct press the next button to enter the raffle!`;
        nextButton.style.display = 'block';
        nextButton.innerHTML = 'next';

        nextButton.addEventListener('click', joinRaffle);

    }

}
//** This function is first removing the hide class and adding the show class to make this html visible which was previously hidden 
// After this the function is hidding the question and answer elements to showcase the correct elements this will only be shown if a user gets ever answer correct **/


function joinRaffle() {

    contactForm.classList.remove('hide');
    contactForm.classList.add('show');

    questionElement.classList.remove('show');
    questionElement.classList.add('hide');

    answerButtons.classList.remove('show');
    answerButtons.classList.add('hide');


}

/** Setting the next button to none and using a while loop to state while the answer buttons.first child is true to then 
 * remove the child which is the first child.
 */

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
