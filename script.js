const computerChoice = comupterPlay();

function comupterPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  {
    if (computerChoice == 0) computerChoice = "Rock";
    else if (computerChoice == 1) computerChoice = "Paper";
    else computerChoice = "Scissors";
  }
  return computerChoice;
}

function round(playerChoice, computerChoice) {
  // rock options
  if (playerChoice.toLowerCase() == "rock" && computerChoice == "Scissors")
    return "you win";
  else if (playerChoice.toLowerCase() == "rock" && computerChoice == "Paper")
    return "you lose";
  else if (playerChoice.toLowerCase() == "rock" && computerChoice == "Rock")
    return "It's a tie!";
  // scissors options
  else if (
    playerChoice.toLowerCase() == ("scissors" || "scissor") &&
    computerChoice == "Rock"
  )
    return "You Lose!";
  else if (
    playerChoice.toLowerCase() == ("scissors" || "scissor") &&
    computerChoice == "Paper"
  )
    return "You Win!";
  else if (
    playerChoice.toLowerCase() == ("scissors" || "scissor") &&
    computerChoice == "Scissors"
  )
    return "It's a tie!";
  // paper options
  else if (playerChoice.toLowerCase() == "paper" && computerChoice == "Scissors")
    return "You Lose!";
  else if (playerChoice.toLowerCase() == "paper" && computerChoice == "Rock")
    return "You Win!";
  else if (
    playerChoice.toLowerCase() == "paper" &&
    computerChoice == "Paper"
  )
    return "It's a Tie!";
  else return "error";
}

let playerChoice = prompt("lets play rock paper scissors");
alert(round(playerChoice, computerChoice));



