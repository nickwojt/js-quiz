var startButton = $("#start-btn");
var questionContainerEl = $('.question-container');
var questionButtonsEl = $('.btn-grid');
var outputEl = $('#output');
var questionEl = $('#question');
var answerButtonsEl = $('#answer-buttons');
var button1 = $('#btn-1');
var button2 = $('#btn-2');
var button3 = $('#btn-3');
var button4 = $('#btn-4');
var choice = [button1, button2, button3, button4];
var score = 0;
var timer = 60;
$('#timer').text(timer)
var highscore = $('#highscores');
var finalScore = localStorage.getItem('score');


var questions = [
    {
        question: "What is a function?",
        choices: ['A set of instructions', 'A variable', 'A loop', 'An array'],
        answer: 'A set of instructions'   
    },
    {
        question: "How do you link your JS file to your HTML file?",
        choices: ['<link>', '<head>', '<body>', '<script>'],
        answer: '<script>'
    },
    {
        question: "How do you add a comment in JS?",
        choices: ['//comment', '<!--comment-->', '/*comment*/', 'comment:'],
        answer: '//comment'
    },
    {
        question: 'What is the correct way to write "Hello World" in an alert box?',
        choices: ['msgBox("Hello World")', 'alertBox("Hello World")', 'alert("Hello World")', 'msg("Hello World")'],
        answer: 'alert("Hello World")'
    }
]

startButton.on("click", startQuiz);
questionEl.removeClass('hide');

function startQuiz() {
    startButton.addClass('hide');
    questionContainerEl.removeClass('hide');
    questionButtonsEl.removeClass('hide');
    outputEl.removeClass('hide');
    firstQuestion();
}



function firstQuestion() {
    
    questionEl.text(questions[0].question);
    choice[0].text(questions[0].choices[0]);
    choice[1].text(questions[0].choices[1]);
    choice[2].text(questions[0].choices[2]);
    choice[3].text(questions[0].choices[3]);


    answerButtonsEl.on('click', function(event){
        event.preventDefault();
        var selection = $(event.target).text();
        if (selection === questions[0].answer) {
            score++;
            $('#score').text(score);
            outputEl.text("Correct");
            secondQuestion();
        } else {
            timer -= 15;
            outputEl.text("Wrong");
            secondQuestion();
        }
    })
}



function secondQuestion() {
    
    questionEl.text(questions[1].question);
    choice[0].text(questions[1].choices[0]);
    choice[1].text(questions[1].choices[1]);
    choice[2].text(questions[1].choices[2]);
    choice[3].text(questions[1].choices[3]);


    answerButtonsEl.on('click', function(event){
        event.preventDefault();
        var selection = $(event.target).text();
        if (selection === questions[1].answer) {
            score++;
            $('#score').text(score);
            outputEl.text("Correct");
            thirdQuestion();
        } else {
            timer -= 15;
            outputEl.text("Wrong");
            thirdQuestion();
        }
    })
}



function thirdQuestion() {
    
    questionEl.text(questions[2].question);
    choice[0].text(questions[2].choices[0]);
    choice[1].text(questions[2].choices[1]);
    choice[2].text(questions[2].choices[2]);
    choice[3].text(questions[2].choices[3]);


    answerButtonsEl.on('click', function(event){
        event.preventDefault();
        var selection = $(event.target).text();
        if (selection === questions[2].answer) {
            score++;
            $('#score').text(score);
            outputEl.text("Correct");
            fourthQuestion();
        } else {
            timer -= 15;
            outputEl.text("Wrong");
            fourthQuestion();
        }
    })
}



function fourthQuestion() {
    
    questionEl.text(questions[3].question);
    choice[0].text(questions[3].choices[0]);
    choice[1].text(questions[3].choices[1]);
    choice[2].text(questions[3].choices[2]);
    choice[3].text(questions[3].choices[3]);


    answerButtonsEl.on('click', function(event){
        event.preventDefault();
        var selection = $(event.target).text();
        if (selection === questions[3].answer) {
            score++;
            $('#score').text(score);
            outputEl.text("Correct");
            highscores();
        } else {
            timer -= 15;
            outputEl.text("Wrong");
            highscores();
        }
    })
}


function highscores() {
    questionEl.addClass('hide');
    questionButtonsEl.addClass('hide');
    outputEl.addClass('hide');
    highscore.removeClass('show-end');
    var initials = $('#input').val()
    console.log(initials)
    localStorage.setItem('initials', initials)
    highscore.append('<div>' + initials + ' = ' + score)

}

//got to figure out input and button values and diplay them, local storage, timer, and view highscores screen