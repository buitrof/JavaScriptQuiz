// (function () {
//     // Functions
//   function buildQuiz() {
//       // variable to store the HTML output
//      const output = []

//       // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {

//           // variable to store the list of possible answers
//         const answers = []

//           // and for each available answer...
//         for (letter in currentQuestion.answers) {

//             // ...add an HTML radio button
//           answers.push(
//               `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//             )
//           }

//           // add this question and its answers to the output
//         output.push(
//             `<div class="slide">
//             <div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join("")} </div>
//           </div>`
//           );
//         }
//       );

//       // finally combine our output list into one string of HTML and put it on the page
//       quizContainer.innerHTML = output.join('')
//     }

//     function showResults() {

//       // gather answer containers from our quiz
//       const answerContainers = quizContainer.querySelectorAll('.answers')

//       // keep track of user's answers
//       let numCorrect = 0;

//       // for each question...
//       myQuestions.forEach((currentQuestion, questionNumber) => {

//         // find selected answer
//         const answerContainer = answerContainers[questionNumber]
//         const selector = `input[name=question${questionNumber}]:checked`
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value

//         // if answer is correct
//         if (userAnswer === currentQuestion.correctAnswer) {
//           // add to the number of correct answers
//           numCorrect++

//           // color the answers green
//           answerContainers[questionNumber].style.color = 'lightgreen'
//         }
//         // if answer is wrong or blank
//         else {
//           // color the answers red
//           answerContainers[questionNumber].style.color = 'red'
//         }
//       })

//       // show number of correct answers out of total
//       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
//     }

//     function showSlide(n) {
//       slides[currentSlide].classList.remove('active-slide')
//       slides[n].classList.add('active-slide')
//       currentSlide = n
//       if (currentSlide === 0) {
//         previousButton.style.display = 'none'
//       }
//       else {
//         previousButton.style.display = 'inline-block'
//       }
//       if (currentSlide === slides.length - 1) {
//         nextButton.style.display = 'none'
//         submitButton.style.display = 'inline-block'
//       }
//       else {
//         nextButton.style.display = 'inline-block'
//         submitButton.style.display = 'none'
//       }
//     }

//     function showNextSlide() {
//       showSlide(currentSlide + 1)
//     }

//     function showPreviousSlide() {
//       showSlide(currentSlide - 1)
//     }

//     // Variables
//     const introContainer = document.getElementById('intro')
//     const quizContainer = document.getElementById('quiz')
//     const resultsContainer = document.getElementById('results')
//     const submitButton = document.getElementById('submit')
//     const myQuestions = [
//       {
//         question: 'Commonly used data types do NOT include:',
//         answers: {
//           a: 'strings',
//           b: 'booleans',
//           c: 'alerts',
//           d: 'numbers'
//         },
//         correctAnswer: 'c'
//       },
//       {
//         question: 'The condition in an if/ else statement is enclosed within:',
//         answers: {
//           a: 'quotes',
//           b: 'curly brackets',
//           c: 'square brackets',
//           d: 'parentheses'
//         },
//         correctAnswer: 'd'
//       },
//       {
//         question: 'Arrays in JavaScript can be used to store:',
//         answers: {
//           a: 'numbers and strings',
//           b: 'booleans',
//           c: 'other arrays',
//           d: 'all of the above'
//         },
//         correctAnswer: 'd'
//       }
//     ]

//     // Kick things off
//     buildQuiz()

//     // Pagination
//     const previousButton = document.getElementById("previous")
//     const nextButton = document.getElementById("next")
//     const slides = document.querySelectorAll(".slide")
//     let currentSlide = 0

//     // Show the first slide
//     showSlide(currentSlide)

//     // Event listeners
//     submitButton.addEventListener('click', showResults)
//     previousButton.addEventListener("click", showPreviousSlide)
//     nextButton.addEventListener("click", showNextSlide)
//   })()

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

function makeQuiz(questions, quizContainer, resultsContainer, submitBtn) {
  function showQuestions(questions, quizContainer) {
    let output = []
    let answers
    for (let i=0; i < questions.length; i++) {
      answers = []
      for (letter in questions[i].answers) {
        answers.push(
          '<label>' + '<input type="radio" name="question' + i + '" value="' + letter+ '">' + letter + ': ' + questions[i].answers[letter] + '</label>'
        )
      }
      quizContainer.innerHTML = output.join('')
    }
  }
  function showResults(questions, quizContainer, resultsContainer) {
    let answerContainers = quizContainer.querySelectorAll('.answers')
    let userAnswer = ''
    let numCorrect = 0
    for (let i = 0; i < questions.length; i++) {
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value
      if (userAnswer === questions[i].correctAnswer) {
        numCorrect ++
        answerContainers[i].style.color = 'lightgreen'
      } else {
        answerContainers[i].style.color = 'red'
      }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length
  }
  showQuestions(questions, quizContainer)
document.getElementById('submit').addEventListener('click', _ => {
  showResults(questions, quizContainer, resultsContainer)
})
}

const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results') 
const submitBtn = document.getElementById('submit')

let myQuestions = [
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

makeQuiz(myQuestions, quizContainer, resultsContainer, submitBtn)