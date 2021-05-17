var body = document.getElementById("body")
var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("quiz");
var start = document.getElementById("start-quiz");
var timeleft = 60;
var title = document.getElementById("title")
var answerButton = document.getElementById("answer")
var score = 0;
//var qimages = document.getElementById("images");
var questions = [
    
{
    q: "What car is this?",
    image: "images/1967-Chevy-Camaro.jpg",
    choices:[{text: "Chevy Camaro"}, {text: "Dodge Dart"}, {text: "Pontiac GTO"}],
    answer: "Chevy Camaro"
},
    
{   q: "What car is this?",
    choices: [{text: "Dodge Charger"}, {text: "Ford Mustang"}, {text: "Chevy Camaro"}],
    answer: "Ford Mustang"
    },
    
    {
        q: "What car is this?",
        choices: [{text:"Dodge Camaro"}, {text:"Chevy Mustang"}, {text:"Oldsmobile 442"}],
        answer: "Oldsmobile 442"
    },
    
    {
        q: "What car is this?",
        choices: [{text:"Chevy Corvette"}, {text:"Plymouth Baracuda"}, {text: "Pontiac Firebird"}],
        answer: "Pontiac Firebird"
    },
    {q: "What car is this?",
    choices: [{text:"Dodge Demon"}, {text:"Dodge Charger"}, {text:"Dodge Dart"}],
    answer: "Dodge Demon"
    }
]


function quiz() {
    start.classList.add('hide');
    title.classList.add('hide');
    questionEl.classList.remove('hide');
    countdown();
    for (var i = 0; i < questions.length; i++) {
var answer = (questions[i].q)

if ( answer === questions[i].a) {
    score++;}

else {
    timeleft-= 5;
}
function nextQuestion() {
    showQuestion(questions[i])
}
function showQuestion(questions) {
    questions.innerText = questions.questionsEl
}
}
}
//timer countdown function
function countdown() {
    var timeleft = 60;
        var timeinterval = setInterval(function() {
            if (timeleft >= 1) {
                timerEl.textContent = timeleft;
                timeleft--;
            }
            else {
                promt("Times up enter initials for score.");
                clearInterval(timeinterval);
            }
        }, 1000)
    }

    start.onclick = quiz;
    