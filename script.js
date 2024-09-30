let currentState = "start";

function renderQuestion() {
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");

    questionContainer.textContent = currentState.question;
    answersContainer.textContent = "";
    
}