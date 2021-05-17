var question = document.getElementById("questions")
var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("quiz");
var start = document.getElementById("start-quiz");
var timeleft = 60;
var title = document.getElementById("title")
var answerButton = document.getElementById("answers")
var score = 0;
var image = document.getElementById("images")
let shuffledQuestions, currentQuestionIndex
var questions = [
    
    {
        q: "What car is this?",
        image:"images/1967-Chevy-Camaro.jpg",
        answers:[{text: "Chevy Camaro", correct: true}, {text: "Dodge Dart", correct: false}, {text: "Pontiac GTO", correct: false}],
    },
    
    {   
        q: "What car is this?",
        image:"images/1968-ford-mustang.jpg",
        answers: [{text: "Dodge Charger", correct: false}, {text: "Ford Mustang", correct: true}, {text: "Chevy Camaro", correct: false}],
    },
    
    {
        q: "What car is this?",
        image:"images/1970-oldsmobile-442.jpg",
        answers: [{text:"Dodge Camaro", correct: false}, {text:"Chevy Mustang", correct: false}, {text:"Oldsmobile 442", correct: true}],
    },
    
    {
        q: "What car is this?",
        image:"images/1977-Pontiac-Firebird-Trans-Am-image.jpg",
        answers: [{text:"Chevy Corvette", correct: false}, {text:"Plymouth Baracuda", correct: false}, {text: "Pontiac Firebird", correct: true}],
    },
    {   
        q: "What car is this?",
        image:"images/2017-dodge-challenger-srt-demon.jpg",
        answers: [{text:"Dodge Demon", correct: true}, {text:"Dodge Charger", correct: false}, {text:"Dodge Dart", correct: false}],
    }
]


function startquiz() {
    start.classList.add('hide');
    title.classList.add('hide');
    questionEl.classList.remove('hide');
    shuffledQuestions = questions.sort(()=>Math.random()- .5)
    currentQuestionIndex = 0;
    setNextQuestion()
    countdown();
}
    function setNextQuestion () {
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }
    function displayQuestion() {
        questions.innerText = questions.q;
        questions.answers.forEach(answers => {
            const button = document.createElement('button')
            button.innertext = answers.text
            button.classList.add('button')
            if (answers.correct) {
                button.dataset.correct = answers.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButton.appendChild(button)
        function selectAnswer() {

        }
            
        });
        var image = document.createElement("img");
        image.setAttribute("src", questions[currentQuestionIndex].image);
        images.append(image);
    }
function nextQuestion() {
    displayQuestion(questions, questionEl);
}
nextQuestion();

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

    start.onclick = startquiz;
    