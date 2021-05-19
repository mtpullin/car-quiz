  
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var carImage = document.getElementById('questionImage')
var timerEl = document.getElementById("countdown");
var scoreEl = document.getElementById("score");
var questions = [
    
    {
        question: "how many awards did the Lord of the Rings film trilogy earn?",
        answers:[{text: "17", correct: true}, {text: "30", correct: false}, {text: "2", correct: false}],
    },
    
    {   
        question: "Who played Frodo Baggins?",
        answers: [{text: "Orlando Bloom", correct: false}, {text: "Elijah Wood", correct: true}, {text: "Billy Boyd", correct: false}],
    },
    
    {
        question: "What was Galadriel's gift to Gimli?",
        answers: [{text:"An Axe", correct: false}, {text:"A Kiss", correct: false}, {text:"3 Hairs", correct: true}],
    },
    
    {
        question: "How many people were a part of the fellowship of the ring?",
        answers: [{text:"5", correct: false}, {text:"7", correct: false}, {text: "9", correct: true}],
    },
    {   
        question: "Who actually met JRR Tolkien that was involved in the film?",
        answers: [{text:"Christopher Lee", correct: true}, {text:"John Rhys-Davies", correct: false}, {text:"Ian McKellen", correct: false}],
    }
]

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    countdown()
    currentQuestionIndex++
  setNextQuestion()
  
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
function showHighScore() {
    var score = localStorage.getItem('score')
    if (score === null)
    return;
}

incrementScore = num => {
    score += num;
    scoreText.innerText = score; };




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
    