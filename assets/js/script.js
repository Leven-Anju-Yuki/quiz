
const quizData = [
   
    {
        question: "Quel est le résultat de 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Quelle est la balise HTML pour créer une liste non ordonnée?",
        options: ["ul", "ol", "li", "list"],
        correctAnswer: "ul"
    },
    {
        question: "Quel est le sélecteur CSS pour sélectionner tous les éléments avec une classe 'example'?",
        options: [".example", "#example", "*example", "element.example"],
        correctAnswer: ".example"
    },
    {
        question: "Quel est le résultat de l'expression logique suivante : true && false?",
        options: ["true", "false", "undefined", "null"],
        correctAnswer: "false"
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: "pop()"
    },
    {
        question: "Quel événement JavaScript est déclenché lorsqu'un utilisateur clique sur un élément HTML?",
        options: ["mouseover", "click", "keydown", "change"],
        correctAnswer: "click"
    },
];

const root = document.getElementById('root');

function buildQuiz() {
    quizData.forEach((questionData, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');

        const questionElement = document.createElement('p');
        questionElement.textContent = `${index + 1}. ${questionData.question}`;

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');

        questionData.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('label');
            optionElement.innerHTML = `
                <input type="radio" name="q${index}" value="${option}">
                ${option}
            `;

            optionsContainer.appendChild(optionElement);
        });

        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(optionsContainer);

        root.appendChild(questionContainer);
    });
}

function calculateScore() {
    const userAnswers = [];
    const answerContainers = document.querySelectorAll('.options-container');

    answerContainers.forEach((container, index) => {
        const selectedOption = container.querySelector('input[name="q' + index + '"]:checked');
        userAnswers.push(selectedOption ? selectedOption.value : null);
    });

    const score = userAnswers.reduce((acc, userAnswer, index) => {
        return userAnswer === quizData[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    alert(`Votre score est : ${score}/${quizData.length}`);
}

buildQuiz();

const submitButton = document.createElement('button');
submitButton.textContent = "Vérifier les réponses";
submitButton.addEventListener('click', calculateScore);
root.appendChild(submitButton);
