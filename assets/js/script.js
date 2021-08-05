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
var highscore = $('#highscores');
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
    setTime();
    getQuestions();
}

function getQuestions() {
    var currentQuestion = questions[index];
    questionEl.text(currentQuestion.question);
    choice[0].text(currentQuestion.choices[0]);
    choice[1].text(currentQuestion.choices[1]);
    choice[2].text(currentQuestion.choices[2]);
    choice[3].text(currentQuestion.choices[3]);
    answerButtonsEl.unbind("click").click(selectAnswer);
}


function selectAnswer(event) {
        event.preventDefault();
        var selection = $(event.target).text();
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
    if (index === questions.length) {
        highscores();
    } else {
        getQuestions();
    }
}



function highscores() {
    questionEl.addClass('hide');
    questionButtonsEl.addClass('hide');
    outputEl.addClass('hide');
    highscore.removeClass('hide');
    highscore.on('submit', function(event){
        event.preventDefault();
        var initials = $('#initials').val();
        localStorage.setItem('initials', initials);
        localStorage.setItem('score', score);
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
    scorePageEl.append('<div>' + localStorage.getItem('initials') + ' = ' + localStorage.getItem('score') + '</div>').addClass('stored');
    $('#clear').on('click',function(){
        localStorage.clear();
    })
}



function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timer--;
    $('#timer').text(timer);

    if(timer <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      highscores();
    }
    if (index === questions.length) {
        clearInterval(timerInterval);
    }

  }, 1000); //milliseconds = 1 second
}