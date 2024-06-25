const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Venus", "Saturn"],
        correct: 0
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correct: 0
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choices: ["China", "Japan", "India", "South Korea"],
        correct: 1
    },
    {
        question: "What is the largest mammal on Earth?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const current = quizData[currentQuestion];

    questionEl.textContent = current.question;
    choicesEl.innerHTML = '';

    current.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => selectChoice(index);
        choicesEl.appendChild(button);
    });
}

function selectChoice(index) {
    const buttons = document.getElementById('choices').getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
        if (i === index) {
            buttons[i].classList.add('selected');
        }
    }
}

function submitAnswer() {
    const selected = document.querySelector('#choices button.selected');
    if (!selected) {
        alert('Please select an answer');
        return;
    }

    const selectedIndex = Array.from(selected.parentNode.children).indexOf(selected);
    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `${score} out of ${quizData.length}`;
}

// function restartQuiz() {
//     currentQuestion = 0;
//     score = 0;
//     document.getElementById('results').style.display = 'none';
//     startQuiz();
// }
// {% comment %} <button id="restart" onclick="restartQuiz()">Restart Quiz</button> {% endcomment %}