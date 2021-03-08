const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const card = document.querySelector('.card'); 
// const API_KEY = "THm6qyEQuC6JGi8JrX3HxPCR8RY7DtWHgsvBJEPr"

const myQuestions = [
    {
        question: "Which is the brightest planet in the night sky?",
        answers: {
            A: "Venus",
            B: "Saturn",
            C: "Jupiter"
        },
        correctAnswer: "A"
    },
    {
        question: "Which planet is closest in size to Earth?",
        answers: {
            A: "Mercury",
            B: "Mars",
            C: "Neptune"
        },
        correctAnswer: "B"
    },
    {
        question: "How many Planets are in our Solar System?",
        answers: {
            A: "7",
            B: "10",
            C: "8"
        },
        correctAnswer: "C"
    },
    {
        question: "How long does it take for the Sun's rays to reach Earth?",
        answers: {
            A: "2 Minutes",
            B: "8 Minutes",
            C: "15 Minutes"
        },
        correctAnswer: "B"
    },
    {
        question: "Who was the first person to walk on the Moon?",
        answers: {
            A: "Michael Collins",
            B: "Buzz Aldrin",
            C: "Neil Armstrong"
        },
        correctAnswer: "C"
    }
];

function buildQuiz() {
    const output = [];
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        )}
    )
    quizContainer.innerHTML = output.join('');
};


function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
    }
    
  });

if (numCorrect === 5) {
    resultsContainer.innerHTML = `Congrats! You got ${numCorrect} out of ${myQuestions.length} correct!`;
} else if (numCorrect === 4) {
    resultsContainer.innerHTML = `Pretty Good! You got ${numCorrect} out of ${myQuestions.length} correct!`;
} else if (numCorrect === 3) {
    resultsContainer.innerHTML = `Not bad! You got ${numCorrect} out of ${myQuestions.length} correct!`;
} else if (numCorrect => 2)
    resultsContainer.innerHTML = `Yikes! You got ${numCorrect} out of ${myQuestions.length} correct.`;
} 

buildQuiz();

submitButton.addEventListener('click', showResults)   
document.getElementById('submit').addEventListener('click', function() {
    this.textContent = 'Blast Off!';
});


// ----- Start Countdown Code -----

const countDownDate = new Date("April 20, 2021 16:00:00").getTime();
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " day(s) : " + hours + " hour(s) : "
    + minutes + " minute(s) : " + seconds + " second(s) ";
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);


// ----- NASA Astronomy Pic of the Day API Request -----

const searchButton = document.querySelector("#search")

searchButton.addEventListener("click", () => {
    console.log("button pressed")
    apiRequest()
});

async function apiRequest() {
    const API_KEY = "THm6qyEQuC6JGi8JrX3HxPCR8RY7DtWHgsvBJEPr"
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=THm6qyEQuC6JGi8JrX3HxPCR8RY7DtWHgsvBJEPr');
    const data = await response.json();
    useApiData(data)
}

function useApiData(data) {
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
    document.querySelector("#content").innerHTML += data.explanation
}

