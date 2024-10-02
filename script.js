// Start of the game
let currentState = "start";

// Function to update story from choices.
function renderQuestion() {
    
    // Grabs the elements from the HTML 
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");

    // The multiple choices within the game based off the const Story variable
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
        default:
            text ="Game error"
            console.log("Game Error restart page")
    }

    // Grabs the question based off the players choices
    questionContainer.textContent = story[currentState].question;
    
    // returns an empty string (clearing previous choices) from when choices are made. 
    answersContainer.textContent = "";
    
    // A for loop that refreshes everytime a choice is chosen. adds new button based off story choice
    for (let i = 0; i < story[currentState].choice.length; i++) {
        const choice = story[currentState].choice[i];
        const button = addAnswerButton(choice);
        answersContainer.appendChild(button);
    }    
}

// Creates buttons on page
function addAnswerButton(choice) {
    const button = document.createElement("button");
    console.log("Button was created!")
    button.textContent = choice.text;

    // An eventlistener that updates the current state based of the choice that has been clicked
    button.addEventListener('click', () => {
        currentState = choice.nextState;
        console.log("Button was clicked!")
        renderQuestion(); 
    });
    return button;
}

// The story of the game that holds all the different pathways. 
const story = {
    start: {
        question:"Choose your destiny.",
        choice: [
            { text: "Red Pill", nextState: "redpill"},
            { text: "Blue Pill", nextState: "bluepill"},
        ]
        
    },
    redpill: {
        question:"Enjoy your paradise. GAME OVER",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },
    bluepill: {
        question:"Choose a faction",
        choice: [
            { text: "Join the Resistance", nextState: "resistance"},
            { text: "Join the Robots", nextState: "robots"},
        ]
    },
    resistance: {
        question:"Welcome to the Resistance!",
        choice: [
            { text: "Arm up to fight!", nextState: "fight"},
            { text: "Stay at Home Base", nextState: "stay"}, 
        ]
    },
    robots: {
        question:"We are at war with the robots. GAME OVER",
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
        question:"You didn't want to fight. The robots have overrun us! GAME OVER",
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
            { text: "The Engineers Brain", nextState: "quietengineerbrain"},
        ]
    },
    loudheadrobot: {
        question:"You did not sabotage the engineers, you have got overrun. GAME OVER",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },
    loudminions: {
        question:"You have eliminated the minions. But the engineers have taken over our camp. GAME OVER",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },
    quietmainframe: {
        question:"You have been caught by robot security. The Robots Have Won. GAME OVER",
        choice: [
            { text: "Restart Game", nextState: "start"},
        ]
    },
    quietengineerbrain: {
        question:"You made it to the brain! Disable the brain and win for the resistance!",
        choice: [
            { text: "DISABLE THE ENGINEERS BRAIN!", nextState: "end"},
        ]
    },
    end: {
        question:"The Robots have been disabled. The resistance have won!",
        choice: [
            { text: "YOU WIN!", nextState: "start"},
        ]
    },
}
// function to run the whole code
renderQuestion();
