const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitBtn = document.getElementById('submit')

function buildQuiz(){
  const answer = []
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answers = []
    for (letter in currentQuestion.answers) {
      answers.push(

      )
    }
  })
}

function showResults(){}

buildQuiz()

submitBtn.addEventListener('click', showResults())

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
