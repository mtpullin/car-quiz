var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("questions");
var start = document.getElementById("start-quiz");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");

function countdown() {
    var timeleft = 5;
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