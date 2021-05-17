var question = document.getElementById("questions")
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
        a: "Chevy Camaro"
    },
    
    {   
        q: "What car is this?",
        image: "images/1968-ford-mustang.jpg",
        choices: [{text: "Dodge Charger"}, {text: "Ford Mustang"}, {text: "Chevy Camaro"}],
        a: "Ford Mustang"
    },
    
    {
        q: "What car is this?",
        image:"1970-oldsmobile-442.jpg",
        choices: [{text:"Dodge Camaro"}, {text:"Chevy Mustang"}, {text:"Oldsmobile 442"}],
        a: "Oldsmobile 442"
    },
    
    {
        q: "What car is this?",
        image:"1977-Pontiac-Firebird-Trans-Am-image.jpg",
        choices: [{text:"Chevy Corvette"}, {text:"Plymouth Baracuda"}, {text: "Pontiac Firebird"}],
        a: "Pontiac Firebird"
    },
    {   
        q: "What car is this?",
        image:"2017-dodge-challenger-srt-demon.jpg",
        choices: [{text:"Dodge Demon"}, {text:"Dodge Charger"}, {text:"Dodge Dart"}],
        a: "Dodge Demon"
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
        imeleft-= 5;
}
    function nextQuestion() {
        showQuestion(questions[i])
}
    function showQuestion(questions) {
        question.innerHTML = questions.questions
}
nextQuestion();
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
                prompt("Times up enter initials for score.");
                clearInterval(timeinterval);
                timerEl.classList.add('hide');
            }
        }, 1000)
    }

    start.onclick = quiz;
    