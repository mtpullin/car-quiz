var body = document.getElementById("body")
var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("questions");
var start = document.getElementById("start-quiz");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var score = 0;
//var qimages = document.getElementById("images");
var questions = [
    
{
    q: "What car is this?",
    imgSrc: "/images/1967-Chevy-Camaro.jpg",
    choices:[{a: "Chevy Camaro"}, {b: "Dodge Dart"}, {c: "Pontiac GTO"}],
    answer: "Chevy Camaro"
},
    
{   q: "What car is this?",
    choices: [{a: "Dodge Charger"}, {b: "Ford Mustang"}, {c: "Chevy Camaro"}],
    answer: "Ford Mustang"
    },
    
    {
        q: "What car is this?",
        choices: [{a:"Dodge Camaro"}, {b:"Chevy Mustang"}, {c:"Oldsmobile 442"}],
        answer: "Oldsmobile 442"
    },
    
    {
        q: "What car is this?",
        choices: [{a:"Chevy Corvette"}, {b:"Plymouth Baracuda"}, {c: "Pontiac Firebird"}],
        answer: "Pontiac Firebird"
    },
    {q: "What car is this?",
    choices: [{a:"Dodge Demon"}, {b:"Dodge Charger"}, {c:"Dodge Dart"}],
    answer: "Dodge Demon"
    }
]
var images = document.getElementById([
    "./1967-Chevy-Camaro.jpg",
    "./images/1968-ford-mustang.jpg",
    "./1970-oldsmobile-442.jpg",
    "./1977-Pontiac-Firebird-Trans-Am-image-685.jpg",
    "./2017-dodge-challenger-srt-demon.jpg",
])
function renderquestion() {
    let q = questions

    question.innerhtml = "<p>" + q.question +"</p>";
    images.innerhtml = "<img src="+q.imgSrc +">";
    a.innerhtml = q.a;
    b.innerhtml = q.b;
    c.innerhtml = q.c;
}
//function showimage() {
    //for(var i = 0; i < images.length; i++) {
        //document.createAttribute("img")
        //document.appendChild("body")
        //}
    //}

function quiz() {
    countdown();
    showimage();
    renderquestion();
    for (var i = 0; i < questions.length; i++) {
var answer = (questions[i].q)

if ( answer === questions[i].a) {
    score++;}

else {
    alert("wrong!");
    time--;
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
    