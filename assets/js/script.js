var timer = document.querySelector("#timer");
var start = document.querySelector("#start");
var main = document.querySelector(".main");
var time = 60;

var questions = {
    question1: "What is a function?",
    question2: "How do you link your JS file to your HTML file?",
    question3: "The external JS file contains the script tag?",
    question4: "How do you add a comment in JS?"
}
// viewHighscores()
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    time--;
    timer.textContent = time;

    if(time === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000); //milliseconds = 1 second
}

// function sendMessage() {

// }


function clearcontent(element) {
    document.querySelector(element).innerHTML = "";
}

start.addEventListener("click", function(event){
    event.preventDefault();
    init();
    setTime();
})

function init() {
    clearcontent(".main");
    firstQuestion();
}

function firstQuestion() {
    var question = document.createElement("h1");
    var buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons")
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var outcomeCont = document.createElement("div")
    outcomeCont.setAttribute("class", "outcome");
    var outcome = document.createElement("p")
    button1.textContent = "A set of instructions";
    button2.textContent = "A variable";
    button3.textContent = "A loop";
    button4.textContent = "An array";
    question.textContent = questions.question1;
    main.appendChild(question);
    main.appendChild(buttons);
    buttons.appendChild(button1);
    buttons.appendChild(button2);
    buttons.appendChild(button3);
    buttons.appendChild(button4);
    main.appendChild(outcomeCont);
    outcomeCont.appendChild(outcome);
    button1.addEventListener("click", function(event){
        event.defaultPrevent();
        outcome.textContent = "Correct";
    })
}

















