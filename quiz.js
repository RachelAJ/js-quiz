const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    
}

function getResults() {

}

buildQuiz();

submitButton.addEventListener('click', getResults);

const quizQuestions = [
    {
        question: "Which is the brightest planet in the night sky?",
        answers: {
            a: "Venus",
            b: "Saturn",
            c: "Jupiter"
        },
        correctAnswer: "a"
    },
    {
        question: "Which planet is closest in size to Earth?",
        answers: {
            a: "Mercury",
            b: "Mars",
            c: "Neptune"
        },
        correctAnswer: "b"
    },
    {
        question: "How many Planets are in our Solar System?",
        answers: {
            a: "7",
            b: "10",
            c: "8"
        },
        correctAnswer: "c"
    },
    {
        question: "How long does it take for the Sun's rays to reach Earth?",
        answers: {
            a: "2 Minutes",
            b: "8 Minutes",
            c: "15 Minutes"
        },
        correctAnswer: "b"
    },
    {
        question: "Who was the first person to walk on the Moon?",
        answers: {
            a: "Michael Collins",
            b: "Buzz Aldrin",
            c: "Neil Armstrong"
        },
        correctAnswer: "c"
    }
];