let userScores = 0;
let compScores = 0;
const MaxTurns = 5;


//Wybor komuptera
let compChoice;

function getComputerChoice() {
let choice = Math.random() * 3;
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


// Jaka klase ma nasz przycisk
const btn = document.querySelector(".buttons");
btn.addEventListener("click", (event) => {
    const clickedButton = event.target;
    console.log(clickedButton);
    return clickedButton;
});

const rockBtn = document.getElementById("buttons-rock");
const paperBtn = document.getElementById("buttons-paper");
const scissorsBtn = document.getElementById("buttons-scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock");
})
paperBtn.addEventListener("click", () => {
    playRound("paper");
})
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
})

function playRound(clickedButton) {
getComputerChoice();
if (clickedButton === "rock" && compChoice == "scissors") {
    userScores++;
    document.write("You won! Rock beats scissors.");
} 
else if (clickedButton === "paper" && compChoice == "rock") {
    userScores ++;
    alert("You won! Paper beats rock.")
}
else if (clickedButton === "scissors" && compChoice == "paper") {
    userScores++;
    alert("You won! Scissors beat paper.");
}
else if (clickedButton === compChoice) {
    alert("Remis. No scores.");
}


// else {
//     compScores++;
//     alert("Computer won! ");
// }

// console.log("Scores for user: " + userScores + " Scores for comp: " + compScores);
}

playRound();

// // function gameplay() {
// // do {
// //     getComputerChoice();
// //     playRound();
// //     if (userScores >= MaxTurns || compScores >= MaxTurns) break;
// //     }
// // while (userScores < MaxTurns || compScores < MaxTurns);
// }


