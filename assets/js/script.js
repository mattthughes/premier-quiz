import { questions } from "./questions.js";
// Get the document html elements //
let questionElement = document.getElementById("questions");
let answerButtons = document.getElementById("answer-buttons");
let quizIntro = document.getElementById("quiz-intro");
let quizElement = document.getElementById("quiz");
let questionTracker = document.getElementById("question-tracker");
let restartBtn = document.getElementById("restart-button");
let nextButton = document.getElementById("next-button");
let instructionsButton = document.getElementById("instructions-btn");
let instructionsTextElement = document.getElementById("instructions-text");
let quizStartButton = document.getElementById("quiz-start-btn");
let instructionStartBtn = document.getElementById("instructions-start-btn");
let gameArea = document.getElementById("game-area");
let quizHeading = document.getElementById("game-heading");
let results = document.getElementById("results");
let resultsText = document.getElementById("results-text");
let resultsBtn = document.getElementById("results-btn");
let contactForm = document.getElementById("raffle");
let submitButton = document.getElementById("submit-btn");
let firstName = document.getElementById("first-name");
let surname = document.getElementById("surname");
let phoneNumber = document.getElementById("contact-number");
let favouriteTeam = document.getElementById("favourite-team");
let thankYouText = document.getElementById("thank-you-text");
let thankYou = document.getElementById("thank-you");
let backButton = document.getElementById("back-btn");

// Initalise the Quiz //
let score = 0;
let currentQuestionIndex = 0;
hideInstructions();
hideAnswers();
instructionsButton.addEventListener("click", showInstructions);
quizStartButton.addEventListener("click", runGame);
instructionStartBtn.addEventListener("click", runGame);

// Button styles
instructionStartBtn.classList.add("intro-btns");
quizStartButton.classList.add("intro-btns");
instructionsButton.classList.add("intro-btns");
restartBtn.classList.add("restart-button");

/**Hidding  key elements */
function hideInstructions() {
  instructionsTextElement.classList.add("hide");
  gameArea.classList.add("hide");
  contactForm.classList.add("hide");
  backButton.classList.add("hide");
  thankYou.classList.add("hide");
  results.classList.add("hide");
  resultsText.classList.add("hide");
  resultsBtn.classList.add("hide");
}
/**Hidding  key elements */
function hideAnswers() {
  answerButtons.classList.add("hide");
  questionElement.classList.add("hide");
  nextButton.classList.add("hide");
}
/**Hiding  key elements */
function hideElements() {
  instructionsButton.classList.add("hide");
  quizIntro.classList.add("hide");
  restartBtn.classList.add("hide");
  quizElement.classList.add("hide");
}
/**Hiding and unhiding key elements */
function showInstructions() {
  instructionsTextElement.classList.remove("hide");
  instructionsTextElement.classList.add("quiz-instructions");
  hideElements();
}
/** Hiding and unhiding key elements while also using the start quiz function to start when the start button is clicked */
function runGame() {
  questionElement.classList.remove("hide");
  quizHeading.classList.add("game-heading");
  quizHeading.classList.remove("hide");
  instructionsTextElement.classList.add("hide");
  hideElements();
  hideInstructions();
  nextButton.removeEventListener("click", joinRaffle);
  answerButtons.classList.remove("hide");
  answerButtons.classList.add("show");
  nextButton.classList.remove("hide");
  gameArea.classList.remove("hide");
  startQuiz();
}
/**Setting up quiz functionality by setting default parameters */
function startQuiz() {
  currentQuestionIndex = 0;
  shuffleQuestions(questions);
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
  resetForm();
}
/** Get current question which is questions array and the current question index
 * Set question number to the question index and add one
 * set the question element text to the number of the question and the current question
 * use a for each loop for the answers in the array to create the answer buttons using append
 * child to add new node. if answers is correct change button to correct.
 * add event listener which is a click method and select answer function using the select answer
 * function
 * Quiz basics and customised to projects needs from  https://www.youtube.com/watch?v=PBcqGxrr9g8
 */

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionTracker.innerText =
    "Question " + questionNum + " out of " + questions.length;
  questionElement.innerText = currentQuestion.question;
  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerText = answers.text;
    button.classList.add("answer-btn");
    answerButtons.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
/** Shuffle questions array with the parameter array
 * using the sort method on array and then using arrow function
 * syntax, math.floor and then randomise the number with the questions
 * array being 50% positive and 50% negative randomly shuffling array.
 */
function shuffleQuestions(array) {
  array.sort(() => Math.floor(Math.random() - 0.5));
}
/**First creates a variable select button then
 * another variable checking if the select button is in use.
 * then add one score by 1 if correct and changing button green
 * and if wrong changing button red after a for each loop is getting
 * the array answers and disabling all buttons when an answer has been
 * selected then finally checking if the question index is less than
 * the length of the array if it is show another question if not
 * start quiz.
 *  Quiz basics and customised to projects needs from  https://www.youtube.com/watch?v=PBcqGxrr9g8
 */
function selectAnswer(event) {
  const selectButton = event.target;
  const isCorrect = selectButton.dataset.correct === "true";
  if (isCorrect) {
    score++;
    selectButton.classList.add("correct");
  } else {
    selectButton.classList.add("incorrect");
  }
  nextButton.style.display = "block";
  nextButton.classList.add("nxt-btn");
  Array.from(answerButtons.children).forEach((button) => {
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
 *  Quiz basics and customised to projects needs from  https://www.youtube.com/watch?v=PBcqGxrr9g8
 */
function showNextQuestion() {
  restartBtn.classList.remove("hide");
  restartBtn.addEventListener("click", runGame);
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
  restartBtn.classList.add("hide");
  gameArea.classList.add("hide");
  questionElement.classList.add("hide");
  results.classList.remove("hide");
  resultsText.classList.remove("hide");
  resultsBtn.classList.remove("hide");
  resultsBtn.addEventListener("click", runGame);
  if (score <= 3) {
    resultsText.innerHTML = `Good effort you scored <br> ${score} out of ${questions.length}. <br> Press play again to try again.`;
    resultsBtn.innerHTML = "Play Again";
  } else if (score <= 9) {
    resultsText.innerHTML = `You know alot about the Premier League you scored ${score} out of ${questions.length}. <br> Press play again to try again!`;
    resultsBtn.innerHTML = "Play Again";
  } else if (score > 9) {
    resultsText.innerHTML = `You scored ${score} out of ${questions.length}. <br> Congratulations you got 
        every question correct press the 
        next button to enter the raffle.`;
    resultsBtn.innerHTML = "Next";
    resultsBtn.addEventListener("click", joinRaffle);
  }
}
/**
 * These validation functions are finding a match with the string if its true and matches
 * the string return true otherwise return false and send
 * alert to the user.
 */
function validateFirstName() {
  if (/[A-z][^0-9]/.test(document.forms.raffle.fname.value)) {
    return true;
  } else {
    alert("Please fill in your First Name with the correct format.");
    return false;
  }
}
function validateLastName() {
  if (/[A-z][^0-9]/.test(document.forms.raffle.surname.value)) {
    return true;
  } else {
    alert("Please fill in your Surname with the correct format.");
  }
}
function validateContact() {
  if (/[0-9][^A-z]/.test(document.forms.raffle.contact.value)) {
    return true;
  } else {
    alert(
      "Incorrect contact number please fill in your contact number with the correct format."
    );
    return false;
  }
}
/**
 * targets the form and the inputs value which is achieved by the
 * name of the input
 * checking if each input is an empty string to send an alert to the user
 * otherwise access the raffle end function
 */
function handleForm(event) {
  let i = document.forms["raffle-form"].team.value;
  if (!validateFirstName() || !validateLastName() || !validateContact()) {
    alert("All form elements must be filled in correctly");
  } else if (i == "") {
    alert("Please pick your favourite team from the drop down box");
    return false;
  } else {
    submitButton.addEventListener("click", raffleEnd);
  }
  event.preventDefault();
}
//** This function is first removing the hide class and adding the show class to make this html visible which was previously hidden
// After this the function is hidding the question and answer elements to showcase the correct elements this will only be shown if a user gets ever answer correct **/
function joinRaffle() {
  contactForm.classList.remove("hide");
  questionElement.classList.add("hide");
  answerButtons.classList.add("hide");
  gameArea.classList.add("hide");
  contactForm.classList.add("raffle");
  quizHeading.classList.add("hide");
  submitButton.addEventListener("click", handleForm);
  resultsBtn.removeEventListener("click", joinRaffle);
}
/**
 * Getting the raffle and using the reset method to clear the form
 * Will be used in the start quiz function
 */
function resetForm() {
  document.getElementById("raffle").reset();
}
/**
 * Raffle end function hides contact form and shows the thank you screen
 * the function checks if the user selects none to then showcase the thank you text without the favourite team
 * otherwise showcase the favourite team alongside the first, second name and phone number provided.
 */
function raffleEnd(event) {
  contactForm.classList.add("hide");
  contactForm.classList.remove("raffle");
  thankYou.classList.remove("hide");
  thankYouText.classList.remove("hide");
  backButton.classList.add("back-btn");
  backButton.addEventListener("click", runGame);
  submitButton.removeEventListener("click", raffleEnd);
  submitButton.addEventListener("click", handleForm);
  if (favouriteTeam.value === "None") {
    thankYou.classList.add("thank-you-none");
    thankYouText.innerHTML = `Thank you for taking part in the quiz ${firstName.value} ${surname.value}. <br>
        If you would like to take part again in the quiz just simply press the back button.`;
  } else {
    thankYouText.innerHTML = `Thank you for entering the raffle ${firstName.value} ${surname.value}. <br> 
    We have recieved your message and if you are successful ${favouriteTeam.value} will be in touch with the phone number ${phoneNumber.value} you provided. <br>
    If you would like to take the quiz again simply just press the back button.`;
    thankYou.classList.add("thank-you");
  }
  backButton.classList.remove("hide");
  backButton.classList.add("show");
  event.preventDefault();
}
/** Setting the next button to none and using a while loop to state while the answer buttons.first child is true to then
 * remove the child which is the first child.
 *  Quiz basics and customised to projects needs from  https://www.youtube.com/watch?v=PBcqGxrr9g8
 */
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
