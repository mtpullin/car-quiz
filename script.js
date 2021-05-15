var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("questions");
var start = document.getElementById("start-quiz");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var correct = 0;
var incorrect = 0;
var questions = [
    
    {
        Question: "What car is this?",
        imgsrc: "./images/1967-Chevy-Camaro.jpg",
        answers:["Chevy Camaro", "Dodge Dart", "Pontiac GTO"],
        correct: "Chevy Camaro"
},
    
{   Question: "What car is this?",
    imagesrc: "./images/1968-ford-mustang.jpg",
    answers: ["Dodge Charger", "Ford Mustang", "Chevy Camaro"],
    correct: "Ford Mustang"
    },
    
    {
        Question: "What car is this?",
        imgsrc: "./1970-oldsmobile-442.jpg",
        answers: ["Dodge Camaro", "Chevy Mustang", "Oldsmobile 442"],
        correct: "Oldsmobile 442"
    },
    
    {
        Question: "What car is this?",
        imgsrc: "./1977-Pontiac-Firebird-Trans-Am-image-685.jpg",
        answers: ["Chevy Corvette", "Plymouth Baracuda", "Pontiac Firebird"],
        correct: "Pontiac Firebird"
    },
    {Question: "What car is this?",
    imgsrc: "./2017-dodge-challenger-srt-demon.jpg",
    answers: ["Dodge Demon", "Dodge Charger", "Dodge Dart"],
    correct: "Dodge Demon"
    }
]

//timer countdown function
function countdown() {
    var timeleft = 60;
        var timeinterval = setInterval(function() {
            if (timeleft >= 1) {
                timerEl.textContent = timeleft;
                timeleft--;
            }
            else {
                confirm("you ran out of time");
                clearInterval(timeinterval);
            }
        }, 1000)
    }
    start.onclick = countdown;

