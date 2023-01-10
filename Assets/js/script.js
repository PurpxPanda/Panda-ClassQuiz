//Global Variables 
var currentQuestion = 0;
var score = 0;
var questions = [
    {question: "Commanly used data types do NOT include", a: "Strings", b: "Booleons", c: "Alerts", d: "Numbers", correct: "c"},
    {question: "The condition in an if/else statement is enlosed with _____", a: "Quotes", b: "Curly Brackets", c: "Parenthesis", d: "Square Brackets", correct: "c"},
    {question: "Arrays in JavaScript can be used to store _____", a: "Numbers and strings", b: "Other arrays", c: "Booleans", d: "All of the above", correct: "d"},
    {question: "Javascript was invented by whom?", a: "William Java", b: "Brendan Eich", c: "Hakon Wium Lie", d: "Guido van Rossum", correct: "b"},
    {question: "JavaScript is a ___-side programming language", a: "Client", b: "Server", c: "Both", d: "None", correct: "c"}
];

var startButtonEl = document.getElementById("begin");
var leaderBoxEl = document.getElementById("leaderBox");
var scoreEl = document.getElementById("score");
//Question Elements
var questionEl = document.getElementById("question-text");
var optionOneEl = document.getElementById("option-one");
var optionTwoEl = document.getElementById("option-two");
var optionThreeEl = document.getElementById("option-three");
var optionFourEl = document.getElementById("option-four");

var submitName = function() {
    // Adds user to highscore board
    document.getElementById("highScore").style.display = "none";
    document.getElementById("leader").style.display = "block";
    var nickName = document.getElementById("nickname").value;
    leaderBoxEl.innerHTML  = "<p>" + nickName + ":   " + score + "</p>";
}
var count = 30;
function countDown(){
var timer = document.getElementById("timer");
if(count > 0){
    count--;
    timer.innerHTML = "There are "+count+" seconds remaining.";
    setTimeout("countDown()", 1000);
}
else{
    gameOver();
}
}
var gameOver = function() {
    document.getElementById("page-content").style.display = "none";
    document.getElementById("highScore").style.display = "block";
    scoreEl.innerText = score;
    count = 0;
}
var questionValidator = function(answerChoice) {
    document.getElementById("correct").style.display = "none";
    document.getElementById("incorrect").style.display = "none";
    if (answerChoice === questions[currentQuestion].correct) {
        //1. add to score//2. make correct appear
        document.getElementById("correct").style.display = "block";
        score++;
    }
    else {
    //make incorrect apper
    document.getElementById("incorrect").style.display = "inline";
    count = count - 5
    } 
    //add iteration of the array
    currentQuestion++;
    nextQuestion();
    };    
var startQuiz = function() {
    //Screen will dissapear 
    document.getElementById("start").style.display = "none";
    document.getElementById("page-content").style.display = "block";
    countDown();
    nextQuestion(); 
};
var nextQuestion = function() {
    //sets up next question and its corresponding options
    if (currentQuestion < questions.length) {
        questionEl.innerText = questions[currentQuestion].question;
        optionOneEl.innerText = questions[currentQuestion].a;
        optionTwoEl.innerText = questions[currentQuestion].b;
        optionThreeEl.innerText = questions[currentQuestion].c;
        optionFourEl.innerText = questions[currentQuestion].d;
    }
    //Game will end if when questions are depleted
    else {
        gameOver();
    }
};
var reset = function() {
    document.getElementById("leader").style.display = "none";
    document.getElementById("highScore").style.display = "none";
    score = 0;
    currentQuestion = 0;
    document.getElementById("start").style.display = "block";
    count = 30;
}
startButtonEl.addEventListener("click", startQuiz);