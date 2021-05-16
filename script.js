var body = document.getElementById("body")
var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("questions");
var start = document.getElementById("start-quiz");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var score = 0;
var questions = [
    
{
    q: "What car is this?",
    choices:["Chevy Camaro", "Dodge Dart", "Pontiac GTO"],
    a: "Chevy Camaro"
},
    
{   q: "What car is this?",
    choices: ["Dodge Charger", "Ford Mustang", "Chevy Camaro"],
    a: "Ford Mustang"
    },
    
    {
        q: "What car is this?",
        choices: ["Dodge Camaro", "Chevy Mustang", "Oldsmobile 442"],
        a: "Oldsmobile 442"
    },
    
    {
        q: "What car is this?",
        choices: ["Chevy Corvette", "Plymouth Baracuda", "Pontiac Firebird"],
        a: "Pontiac Firebird"
    },
    {q: "What car is this?",
    choices: ["Dodge Demon", "Dodge Charger", "Dodge Dart"],
    a: "Dodge Demon"
    }
]
var images = [
    "/1967-Chevy-Camaro.jpg",
    "./images/1968-ford-mustang.jpg",
    "./1970-oldsmobile-442.jpg",
    "./1977-Pontiac-Firebird-Trans-Am-image-685.jpg",
    "./2017-dodge-challenger-srt-demon.jpg",
]


function quiz() {
    for (var i = 0; i < questions.length; i++) {
var answer = prompt(questions[i].q)

if ( answer === questions[i].a) {
    alert("correct");}

else {
    alert("wrong!");
}
function showimage() {
    for(var i = 0; i < images.length; i++) {
        document.appendChild("body")
        }
    }start.onclick = showimage;
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

    start.onclick = countdown;
    start.onclick = quiz;
    