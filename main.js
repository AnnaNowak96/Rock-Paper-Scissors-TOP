let userScores = 0;
let compScores = 0;
const MaxTurns = 2;


//Wybor komuptera
let compChoice;

function getComputerChoice() {
let choice = Math.random() * 3;
console.log(choice);
if (choice <1){
    compChoice = "rock";
}
else if (choice >1 && choice <2) {
    compChoice = "paper";
}
else {
    compChoice = "scissors";
}
console.log(compChoice);
}


//Logika gry
function playRound() {
const userChoice = prompt("Select your move: ").toLowerCase();
if (userChoice == "rock" && compChoice == "scissors") {
    userScores++;
    alert("You won! Rock beats scissors.");
} 
else if (userChoice == "paper" && compChoice == "rock") {
    userScores ++;
    alert("You won! Paper beats rock.")
}
else if (userChoice == "scissors" && compChoice == "paper") {
    userScores++;
    alert("You won! Scissors beat paper.");
}
else if (userChoice == compChoice) {
    alert("Remis. No scores.");
}
else {
    compScores++;
    alert("Computer won! " + compChoice + " beats " + userChoice);
}
console.log(userChoice);
console.log("Scores for user: " + userScores + " Scores for comp: " + compScores);
}


function gameplay() {
do {
    getComputerChoice();
    playRound();
    if (userScores >= MaxTurns || compScores >= MaxTurns) break;
    }
while (userScores < MaxTurns || compScores < MaxTurns);
}


gameplay();