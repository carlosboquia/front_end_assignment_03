let currentState = "start";

function renderQuestion() {
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");


    switch (currentState) {
        case "start":
            break;
        case "redpill":
            break;
        case "bluepill":
            break;
        case "resistance":
            break;
        case "robots":
            break;
        case "fight":
            break;
        case "stay":
            break;
        case "loud":
            break;
        case "quiet":
            break;
        case "loudheadrobot":
            break;
        case "loudminions":
            break;
        case "quietmainframe":
            break;
        case "quietengineerbrain":
            break;
        case "end":
            break;
    }


    questionContainer.textContent = story[currentState].question;
    answersContainer.textContent = "";
    
    for (let i = 0; i < story[currentState].choice.length; i++) {
        const choice = story[currentState].choice[i];
        const button = addAnswerButton(choice);
        answersContainer.appendChild(button);
    }
    
}

function addAnswerButton(choice) {
    const button = document.createElement("button");
    console.log("Button was created!")
    button.textContent = choice.text;

    button.addEventListener('click', () => {
        currentState = choice.nextState;
        console.log("Button was clicked!")
        renderQuestion(); 
    });
    return button;
}


const story = {
    start: {
        question:"Choose your destiny",
        choice: [
            { text: "Red Pill", nextState: "redpill"},
            { text: "Blue Pill", nextState: "bluepill"}
        ]
    },

    redpill: {
        question:"Enjoy paradise",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },

    bluepill: {
        question:"Welcome to the Matrix",
        choice: [
            { text: "Join the Resistance", nextState: "resistance"},
            { text: "Join the Robots", nextState: "robots"},
        ]
    },

    resistance: {
        question:"Welcome to the resistance!",
        choice: [
            { text: "Arm up to fight!", nextState: "fight"},
            { text: "Stay within the community", nextState: "stay"},
        ]
    },

    robots: {
        question:"Enjoy paradise",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },

    fight: {
        question:"Go into battle! How would you like to proceed?",
        choice: [
            { text: "Go in loud", nextState: "loud"},
            { text: "Go in quiet", nextState: "quiet"},
        ]
    },

    stay: {
        question:"You didn't want to fight. The robots have overrun us! Enjoy paradise.",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },
 
 
    loud: {
        question:"Who will you fight first?",
        choice: [
            { text: "The Head Robot", nextState: "loudheadrobot"},
            { text: "Robot Minions", nextState: "loudminions"},
        ]
    },
 
    quiet: {
        question:"Which area do you want to sabotage?",
        choice: [
            { text: "The Main Frame", nextState: "quietmainframe"},
            { text: "Engineers Brain", nextState: "quietengineerbrain"},
        ]
    },
 
    loudheadrobot: {
        question:"You did not sabotage the engineers, you have got overrun. Enjoy Paradise",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },
 
    loudminions: {
        question:"The minions are too strong for our forces. They have overrun us. Enjoy Paradise",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },
 
    quietmainframe: {
        question:"You have been caught by robot security. The Robots Have Won..Enjoy Paradise.",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },

    quietengineerbrain: {
        question:"You made it to the brain! Disable the brain and win for the resistance!",
        choice: [
            { text: "HACK THE BRAIN!", nextState: "end"},
        ]
    },

    end: {
        question:"The Robots have been disabled. The resistance have won!",
        choice: [
            { text: "Welcome to paradise?", nextState: "start"},
        ]
    },




}
renderQuestion();
