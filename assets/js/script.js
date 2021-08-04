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
var scorePageEl = $('#score-page');
var viewHighscores = $('#highscore');
var index = 0;

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
viewHighscores.on('click', scorePage);
startButton.on("click", startQuiz);
questionEl.removeClass('hide');

function startQuiz() {
    startButton.addClass('hide');
    questionContainerEl.removeClass('hide');
    questionButtonsEl.removeClass('hide');
    outputEl.removeClass('hide');
    getQuestions();
}



// function firstQuestion() {
//     console.log(score)
//     questionEl.text(questions[0].question);
//     choice[0].text(questions[0].choices[0]);
//     choice[1].text(questions[0].choices[1]);
//     choice[2].text(questions[0].choices[2]);
//     choice[3].text(questions[0].choices[3]);


//     answerButtonsEl.on('click', function(event){
//         event.preventDefault();
//         var selection = $(event.target).text();
//         if (selection === questions[0].answer) {
//             score++;
//             $('#score').text(score);
//             outputEl.text("Correct");
//             return secondQuestion();
//         } else {
//             timer -= 15;
//             outputEl.text("Wrong");
//             return secondQuestion();
//         }
//     })
// }



// function secondQuestion() {
//     console.log(score)
//     questionEl.text(questions[1].question);
//     choice[0].text(questions[1].choices[0]);
//     choice[1].text(questions[1].choices[1]);
//     choice[2].text(questions[1].choices[2]);
//     choice[3].text(questions[1].choices[3]);


//     answerButtonsEl.on('click', function(event){
//         event.preventDefault();
//         var selection = $(event.target).text();
//         if (selection === questions[1].answer) {
//             score++;
//             $('#score').text(score);
//             outputEl.text("Correct");
//             return thirdQuestion();
//         } else {
//             timer -= 15;
//             outputEl.text("Wrong");
//             return thirdQuestion();
//         } 
//     })
// }



// function thirdQuestion() {
//     console.log(score)
//     questionEl.text(questions[2].question);
//     choice[0].text(questions[2].choices[0]);
//     choice[1].text(questions[2].choices[1]);
//     choice[2].text(questions[2].choices[2]);
//     choice[3].text(questions[2].choices[3]);


//     answerButtonsEl.on('click', function(event){
//         event.preventDefault();
//         var selection = $(event.target).text();
//         if (selection === questions[2].answer) {
//             score++;
//             $('#score').text(score);
//             outputEl.text("Correct");
//             return fourthQuestion();
//         } else {
//             timer -= 15;
//             outputEl.text("Wrong");
//             return fourthQuestion();
//         }
//     })
// }



// function fourthQuestion() {
//     console.log(score)
//     questionEl.text(questions[3].question);
//     choice[0].text(questions[3].choices[0]);
//     choice[1].text(questions[3].choices[1]);
//     choice[2].text(questions[3].choices[2]);
//     choice[3].text(questions[3].choices[3]);


//     answerButtonsEl.on('click', function(event){
//         event.preventDefault();
//         var selection = $(event.target).text();
//         console.log($(event.target).text());
//         if (selection === questions[3].answer) {
//             score++;
//             $('#score').text(score);
//             outputEl.text("Correct");
//             return highscores();
//         } else {
//             timer -= 15;
//             outputEl.text("Wrong");
//             console.log(score)
//             return highscores();
//         }
//     })
// }


function highscores() {
    questionEl.addClass('hide');
    questionButtonsEl.addClass('hide');
    outputEl.addClass('hide');
    highscore.removeClass('hide');
    highscore.on('submit', function(event){
        event.preventDefault();
        var initials = $('#initials').val()
        localStorage.setItem('initials', initials);
        scorePageEl.append('<div>' + initials + ' = ' + score + '</div>');
        scorePage();
    })
}



function scorePage() {
    startButton.addClass('hide');
    questionEl.addClass('hide');
    questionButtonsEl.addClass('hide');
    outputEl.addClass('hide');
    highscore.addClass('hide');
    scorePageEl.removeClass('hide');
    $('#back').on('click', function(){
        window.location.replace('index.html');
    })
    
}


function getQuestions() {
    var currentQuestion = questions[index];
    questionEl.text(currentQuestion.question);
    choice[0].text(currentQuestion.choices[0]);
    choice[1].text(currentQuestion.choices[1]);
    choice[2].text(currentQuestion.choices[2]);
    choice[3].text(currentQuestion.choices[3]);
    answerButtonsEl.on('click', selectAnswer);
}


function selectAnswer(event) {
        event.preventDefault();
        var selection = $(event.target).text();
        console.log($(event.target).text());
        // console.log(this.value)
        if (selection === questions[index].answer) {
            score++;
            $('#score').text(score);
            outputEl.text("Correct");
            
        } else {
            timer -= 15;
            outputEl.text("Wrong");
            // console.log(score)
            
        }
    
    index++;
    console.log(index)
    if (index === questions.length) {
        highscores();
    } else {
        getQuestions();
    }
}