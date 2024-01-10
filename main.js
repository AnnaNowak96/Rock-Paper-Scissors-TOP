let userScores = 0;
let compScores = 0;
const MaxScores = 5;


//Wybor komuptera
let compChoice;
function getComputerChoice() {
let choice = Math.random() * 3;
if (choice <1){
    compChoice = "rock";
    return compChoice;
}
else if (choice >1 && choice <2) {
    compChoice = "paper";
    return compChoice;
}
else if (choice >=2) {
    compChoice = "scissors";
    return compChoice;
}
}


// Jaka klase ma nasz przycisk
const btn = document.querySelector(".buttons");
btn.addEventListener("click", (event) => {
    const clickedButton = event.target;
    return clickedButton;
});

// Wybor usera
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
console.log("Computer choice:", compChoice);
console.log("Your choice:", clickedButton);

if ((clickedButton === "rock" && compChoice == "scissors") ||
    (clickedButton === "paper" && compChoice == "rock") ||
    (clickedButton === "scissors" && compChoice == "paper") ) {
    userScores++;

}
else if ((compChoice === "rock" && clickedButton == "scissors") ||
    (compChoice === "paper" && clickedButton == "rock") ||
    (compChoice === "scissors" && clickedButton == "paper")) {
    compScores++;
    
}
else {
    console.log("You chose the same. No scores.");
}


document.getElementById("scores-comp").innerText = "Computer Scores: " + compScores;
document.getElementById("scores-player").innerText = "Your Scores: " + userScores;

document.getElementById("text-comp").innerText = compChoice;
document.getElementById("text-player").innerText = clickedButton;

}


playRound();