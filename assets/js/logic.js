

var startButton = document.querySelector('#start');
var timer = document.getElementById("time")
var timeLeft = 61; // value time starts at
var theTime
var startScreen = document.getElementById("start-screen")
var questionScreen = document.getElementById("questions")
var questionEl = document.getElementById("question-title")
// first action in app is pressing a button to start  

function startQuiz(){
        theTime = setInterval(countdown, 1000)
        startScreen.classList.add("hide")
        questionScreen.classList.remove("hide")
}
// function to switch from start screen to questions screens

function countdown(){
    timeLeft--
    timer.textContent = timeLeft
    console.log(timeLeft)
    if(timeLeft === 0) {
        clearInterval(theTime);
        // stops execution of function at the set interval
        
        // displayMessage();
        // calls function to create display "Quiz Over"message
      }
}
 
startButton.addEventListener('click', startQuiz) 
// event listener to start quiz and timer when start button is clicked

 

// Remaining application requirements

// the first question appears.
 
// * Questions contain buttons for each answer.

// * When answer is clicked, the next question appears
// also "Correct" appears underneath

// * If the answer clicked was incorrect then subtract time from the clock ***

// * When the game ends, it should display their score and give the user the ability to save their initials and their score
