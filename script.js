//this function creates a random number between 1 and 3 and assigns it
//to either rock/paper/or scissors and exports that value
function comupterPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  {
    if (computerChoice == 0) computerChoice = "Rock";
    else if (computerChoice == 1) computerChoice = "Paper";
    else computerChoice = "Scissors";
  }
  return computerChoice;
}

function playerSelect() {
  let playerChoice = prompt("Choose your Weapon!!!");
  return playerChoice.toLowerCase();
}

function round() {
  
  let playerScore = 0;
  let computerScore = 0;
for (let i= 0; i < 5; i++){
let computerChoice = comupterPlay();
let playerChoice = playerSelect();
  // rock options
  if (playerChoice == "rock" && computerChoice == "Scissors") {
    alert("You win!");
    playerScore++;
  } else if (playerChoice == "rock" && computerChoice == "Paper") {
    alert("You Lose!");
    computerScore++;
  } else if (playerChoice == "rock" && computerChoice == "Rock") {
    alert("It's a tie!");
    
  }

  // scissors options
  else if (
    playerChoice == ("scissors" || "scissor") &&
    computerChoice == "Rock"
  ) {
    alert("You Lose!");
    computerScore++;
  } else if (
    playerChoice == ("scissors" || "scissor") &&
    computerChoice == "Paper"
  ) {
    alert("You win!");
    playerScore++;
  } else if (
    playerChoice == ("scissors" || "scissor") &&
    computerChoice == "Scissors"
  ) {
    alert("It's a tie!");
    
  }
  // paper options
  else if (playerChoice == "paper" && computerChoice == "Scissors") {
    alert("You Lose!");
    computerScore++;
  } else if (playerChoice == "paper" && computerChoice == "Rock") {
    alert("You win!");
    playerScore++;
  } else if (playerChoice == "paper" && computerChoice == "Paper") {
    alert("It's a tie!");
    
  } else alert("input: rock, paper, or scissors");
  alert(`Player score is ${playerScore} and ComputerScore is ${computerScore}`);}
  alert(`Final score is you: ${playerScore}, computer: ${computerScore}`)
  if (playerScore > computerScore) {alert("You Win!")}
  else if (playerScore==computerScore) {alert("It's a tie!")}
  else alert("You Lose :(")
  
}


newGame = confirm("Would you like to play Rock, Paper, Scissors?");

if (newGame == true) round();
else alert("Chicken!!!");

//this is the main function of the game
//it runs the game five times and adds up the values of result
//it then uses conditional statemtns for overall win/loss

//prompts player if they want to start a new game and then runs game()
