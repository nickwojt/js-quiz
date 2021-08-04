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
var i = 0;
var score = 0;
var timer = 60;




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


function startQuiz() {
    startButton.addClass('hide');
    questionContainerEl.removeClass('hide');
    questionButtonsEl.removeClass('hide');
    outputEl.removeClass('hide');
    startQuestions();
}


function startQuestions() {
    for (i; i < questions.length; i++) {
        questionEl.text(questions[i].question);
        choice[0].text(questions[i].choices[0]);
        choice[1].text(questions[i].choices[1]);
        choice[2].text(questions[i].choices[2]);
        choice[3].text(questions[i].choices[3]);
        return selectAnswer();
    }
}


// need to figure out dataset values, and keep copying and pasting, get timer imported, and get score going


function selectAnswer() {
    answerButtonsEl.on('click', function(event){
        event.preventDefault();
        var selection = $(event.target).text();
        if (selection === questions[i].answer) {
            console.log('right');
            score++;
            $('#score').text(score);
            return;
        } else {
            console.log("Wrong");
            timer -= 15;
            console.log(timer)
        }
        console.log(i);
        return;
    })
    return;
}
