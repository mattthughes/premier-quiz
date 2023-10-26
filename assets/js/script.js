const questions = [
    {
        question: "Who scored the first goal in the Premier League?",

        Answers: [
            { text: "Brian Deane", correct: true },
            { text: "Gary Lineker", correct: false },
            { text: "Alan Shearer", correct: false },
            { text: "Ian Wright", correct: false },
        ]
    },

    {
        question: "What team has not been relegated from the Premier League?",

        Answers: [
            { text: "Newcastle United", correct: false },
            { text: "Aston Villa", correct: false },
            { text: "Arsenal FC", correct: true },
            { text: "Manchester City", correct: false },
        ]
    },

    {
        question: "How many Premier League titles have Manchester United won?",

        Answers: [
            { text: "11", correct: false },
            { text: "14", correct: false },
            { text: "20", correct: false },
            { text: "13", correct: true },
        ]
    },

    {
        question: "Who is the Premier League record goal scorer?",

        Answers: [
            { text: "Wayne Rooney", correct: false },
            { text: "Theirry Henry", correct: false },
            { text: "Alan Shearer", correct: true },
            { text: "Sergio Aguero", correct: false },
        ]
    },

    {
        question: "How many points did Derby County score in the 2007/2008 season?",

        Answers: [
            { text: "13", correct: false },
            { text: "11", correct: true },
            { text: "9", correct: false },
            { text: "39", correct: false },
        ]
    },

    {
        question: "Who was the first goalkeeper to score a goal?",

        Answers: [
            { text: "Paul Robinson", correct: false },
            { text: "Alison", correct: false },
            { text: "Peter Schmeichel", correct: true },
            { text: "Asmir Begovic", correct: false },
        ]
    },

    {
        question: "Who has missed the most penalties in the Premier League?",

        Answers: [
            { text: "Frank Lampard", correct: false },
            { text: "Wayne Rooney", correct: false },
            { text: "Steven Gerrard", correct: false },
            { text: "Alan Shearer", correct: true },
        ]
    },

    {
        question: "Who is the player with the most Substitutions in Premier League history?",

        Answers: [
            { text: "Peter Crouch", correct: false },
            { text: "Shane Long", correct: false },
            { text: "James Milner", correct: true },
            { text: "Gareth Barry", correct: false },
        ]
    },

    {
        question: "Which goalkeeper has kept the most clean sheets in Premier League history?",

        Answers: [
            { text: "Petr Cech", correct: true },
            { text: "Mark Schwarzer", correct: false },
            { text: "Peter Schmeichel", correct: false },
            { text: "David James", correct: false },
        ]
    },

    {
        question: "Which team did not win an away game in a single Premier League season",

        Answers: [
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
let nextButton = document.getElementById('next-button');
let instructionsButton = document.getElementById('instructions-btn');
let startButton = document.getElementById('start-btn');

// Initalise the Quiz //

let score = 0;
let question = 0;
let answer = 0;


function showInstructions() {
    instructionsButton.innerHTML = `<section class="instructions">
    <div class="instructions-text">
    <h2>Premier League Greatest Facts Instructions</h2>
    <p>Welcome to the Premier League Greatest Facts quiz, 
    if you are new to sports quizzes or a quiz veteran we are happy to have you, 
    for all our new players out there this quiz is very simple, just follow these easy steps.</p>
    <br>
    <p>Step 1: Click the start quiz button below.</p>
    <br>
    <p>Step 2: Read the question and select one of the four answers</p>
    <br>
    <p>Step 3: Press the next button and answer all 10 questions to find out your results.</p>
    <br>
    <p>If you would like to take some extra time with certain questions
     you can simply do that by pressing the next button, if you would like to answer this question again later,
     you can do this easily by pressing the Prev button which stands for previous. </p>
    <br>
    <p>We hope you now feel ready to take part in this fun quiz, How well do you really know the Premier League?</p>
    <button class="start-btn >Start Quiz</button>
    </div>
    </section>`;
    $(".quiz-intro").html(instructionsButton);
    
}