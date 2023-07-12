// Catch Elements

const question = document.querySelector(".questions");
const answers = document.querySelector("#answers");
const btn = document.querySelector(".btn");
let answerStatus = document.querySelector(".status");
let currentNo = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;
let score = 0;

// Quiz Question and Answers

const quizQuestions = [
    {
        question: "Q1. How many 2 + 5 ? ",
        answer: ["One","Two","Seven","five"],
        correctAnswer: "Seven",
    },
    {
        question: "How many 2 + 2 ? ",
        answer: ["One","Two","Three","four"],
        correctAnswer: "four",
    }
];


// Display Current Question

function displayQuestion(){
    resetState();
    
    const currentQuestion = quizQuestions[currentNo];
    question.textContent = currentQuestion.question;
    const currentAnswer = currentQuestion.answer;
    // 
    // newQuestion.value = 0;
    for (let option in currentAnswer) {
        const newQuestion = document.createElement("option");
        newQuestion.className = option;
        // newQuestion.value = option;
        newQuestion.text = currentAnswer[option];
        answers.appendChild(newQuestion);
        // newQuestion.value++;
    }
    btn.setAttribute("onclick","checkAnswer()");
}

// Answer checking Process

function checkAnswer(){
    const selectedAnswer = answers.value;
    const correctOption = quizQuestions[currentNo].correctAnswer;
    if (selectedAnswer == correctOption) {
        // score++;
        showPopup('Correct!');
        correctAnswer++;
    } else{
        showPopup('Wrong!');
        incorrectAnswer++;
    };
    
    currentNo++;
    
    

    if (currentNo < quizQuestions.length) {
        // answers.removeChild(newQuestion);
        displayQuestion();
    } else{
        // displayQuestion();
        leaderboard();
    };
}


// Pop Message

function showPopup(message) {
    if (message == 'Correct!' ) {
        answerStatus.style.display = "block";
        answerStatus.style.backgroundColor = "green";
        answerStatus.textContent = "Status: Right Answer";
    } else{
        answerStatus.style.display = "block";
        answerStatus.style.backgroundColor = "red";
        answerStatus.textContent = "Status: Wrong Answer";
    }
    
    setTimeout(() => {
      answerStatus.remove();
    }, 2000);
  }

function resetState(){
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}


// leaderboard

function leaderboard(){
    const quizSection = document.querySelector(".quiz-section");
    quizSection.style.display = "none";
    const rightAnswer = document.querySelector(".rightpara");
    rightAnswer.textContent = `Total Right Question: ${correctAnswer}`;

    const leaderboard = document.querySelector(".leaderboard");
    leaderboard.style.display = "block";
    const wrongAnswer = document.querySelector(".wrongpara");
    wrongAnswer.textContent = `Total Wrong Questions ${incorrectAnswer}`;

    if (correctAnswer == 0) {
        document.querySelector(".result").textContent = "Final Result: Fail";
    };
}




displayQuestion();
// checkAnswer();