let questions = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language"],
        answer: 0
    },
    {
        q: "CSS is used for?",
        options: ["Styling", "Logic", "Database"],
        answer: 0
    },
    {
        q: "Capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata"],
        answer: 0
    }
];

let index = 0;
let score = 0;

function startQuiz() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizBox").style.display = "block";
    questions.sort(() => Math.random() - 0.5);
    loadQuestion();
}

function loadQuestion() {
    let q = questions[index];
    document.getElementById("question").innerText = q.q;
    document.getElementById("progress").innerText =
        `Question ${index + 1} of ${questions.length}`;

    let optionDiv = document.getElementById("options");
    optionDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        optionDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[index].answer) {
        score++;
    }
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quizBox").style.display = "none";
    document.getElementById("resultBox").style.display = "block";
    document.getElementById("score").innerText =
        `Your Score: ${score} / ${questions.length}`;
}

function restart() {
    location.reload();
}
