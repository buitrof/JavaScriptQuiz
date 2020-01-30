(function quiz() {
  function buildQuiz() {
    const output = []
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = []
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          )
        }
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('')
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers')
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber]
      const selector = `input[name=question${questionNumber}]:checked`
      const userAnswer = (answerContainer.querySelector(selector) || {}).value
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++
        answerContainers[questionNumber].style.color = 'lightgreen'
      }
      else {
        answerContainers[questionNumber].style.color = 'red'
      }
    })
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide')
    slides[n].classList.add('active-slide')
    currentSlide = n
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none'
      submitButton.style.display = 'inline-block'
      restartButton.style.display = 'inline-block'
    }
    else {
      nextButton.style.display = 'inline-block'
      submitButton.style.display = 'none'
      restartButton.style.display = 'none'
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1)
  }
  function showPreviousSlide() {
    showSlide(currentSlide - 1)
  }

  const quizContainer = document.getElementById('quiz')
  const resultsContainer = document.getElementById('results')
  const submitButton = document.getElementById('submit')
  const myQuestions = [
    {
      question: 'Commonly used data types do NOT include:',
      answers: {
        a: 'strings',
        b: 'booleans',
        c: 'alerts',
        d: 'numbers'
      },
      correctAnswer: 'c'
    },
    {
      question: 'The condition in an if/ else statement is enclosed within:',
      answers: {
        a: 'quotes',
        b: 'curly brackets',
        c: 'square brackets',
        d: 'parentheses'
      },
      correctAnswer: 'd'
    },
    {
      question: 'Arrays in JavaScript can be used to store:',
      answers: {
        a: 'numbers and strings',
        b: 'booleans',
        c: 'other arrays',
        d: 'all of the above'
      },
      correctAnswer: 'd'
    }
  ]
  buildQuiz()

  const previousButton = document.getElementById("previous")
  const nextButton = document.getElementById("next")
  const restartButton = document.getElementById('restart')
  const slides = document.querySelectorAll(".slide")
  let currentSlide = 0
  showSlide(currentSlide)

  submitButton.addEventListener('click', showResults)
  nextButton.addEventListener("click", showNextSlide)
  restartButton.addEventListener('click', quiz)
})()

function startTimer(duration) {
  var timer = duration, seconds
  setInterval(function () {
    seconds = parseInt(timer % 61, 10)
    seconds = seconds < 10 ? "0" + seconds : seconds
    document.getElementById('time').textContent = 'Time: ' + seconds
    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}

window.onload = function () {
  startTimer(60)
}