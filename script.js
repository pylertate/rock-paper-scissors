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
  if (playerChoice.toLowerCase() == "rock" && computerChoice == "Scissors") {
    alert("You win!");
    let result = 1;
    return result;
  } else if (
    playerChoice.toLowerCase() == "rock" &&
    computerChoice == "Paper"
  ) {
    alert("You Lose!");
    let result = -1;
    return result;
  } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "Rock") {
    alert("It's a tie!");
    let result = 0;
    return result;
  }

  // scissors options
  else if (
    playerChoice.toLowerCase() == ("scissors" || "scissor") &&
    computerChoice == "Rock"
  ) {
    alert("You Lose!");
    let result = -1;
    return result;
  } else if (
    playerChoice.toLowerCase() == ("scissors" || "scissor") &&
    computerChoice == "Paper"
  ) {
    alert("You win!");
    let result = 1;
    return result;
  } else if (
    playerChoice.toLowerCase() == ("scissors" || "scissor") &&
    computerChoice == "Scissors"
  ) {
    alert("It's a tie!");
    let result = 0;
    return result;
  }
  // paper options
  else if (
    playerChoice.toLowerCase() == "paper" &&
    computerChoice == "Scissors"
  ) {
    alert("You Lose!");
    let result = -1;
    return result;
  } else if (
    playerChoice.toLowerCase() == "paper" &&
    computerChoice == "Rock"
  ) {
    alert("You win!");
    let result = 1;
    return result;
  } else if (
    playerChoice.toLowerCase() == "paper" &&
    computerChoice == "Paper"
  ) {
    alert("It's a tie!");
    let result = 0;
    return result;
  } else alert("input: rock, paper, or scissors");
}

function game() {
  function round1() {
    let playerChoice = prompt("Choose your weapon: ");
    let score = round(playerChoice, computerChoice);
    return score;
  }
  score = round1();
  alert(score);

  function round2() {
    let playerChoice = prompt("Choose your weapon: ");
    let score = round(playerChoice, computerChoice);
    return score;
  }
  score = score + round2();
  alert(score);

  function round3() {
    let playerChoice = prompt("Choose your weapon: ");
    let score = round(playerChoice, computerChoice);
    return score;
  }
  score = score + round3();

  if (score === 3) {
    alert("Congratulations, you probably cheated!");
  } else if (score < 2) alert("You suck! Try again...");
  else {
    function round4() {
      let playerChoice = prompt(
        "Choose your weapon: rock, paper, or scissors! "
      );
      let score = round(playerChoice, computerChoice);
      return score;
    }
    score = score + round4();
    alert(score);
    function round5() {
      let playerChoice = prompt("FINAL ROUND");
      let score = round(playerChoice, computerChoice);
      return score;
    }
    score = score + round5();
    if (score > 2) alert("Gg, you got lucky.");
    else if (score === 2) alert("It's a tie, but I was just warming up.");
    else alert("YOU LOSE. Try again?");
  }
}
newGame = confirm("Would you like to play Rock, Paper, Scissors?");

if (newGame == true) game();
else alert("Chicken!!!");
