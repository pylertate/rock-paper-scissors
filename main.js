const player = document.querySelector("#playerScore");
const computer = document.querySelector("#computerScore");
const scoreBoard = document.querySelector(".scoreBoard");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const bottomText = document.querySelector(".bottomText");
const newGame = document.createElement("button");
newGame.innerHTML = "New Game?";
newGame.classList.add("newGame");
const refreshPage = () => {
  location.reload();
};
newGame.addEventListener("click", refreshPage);
let playerScore = 0;
let computerScore = 0;

player.innerHTML = `Player: ${playerScore}`;
computer.innerHTML = `Computer: ${computerScore}`;

function comupterPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  {
    if (computerChoice == 0) computerChoice = "Rock";
    else if (computerChoice == 1) computerChoice = "Paper";
    else computerChoice = "Scissors";
  }
  return computerChoice;
}

function youLose() {
  player.remove();
  computer.remove();
  rockButton.remove();
  paperButton.remove();
  scissorsButton.remove();
  bottomText.remove();
  const youLoseScreen = document.createElement("div");
  youLoseScreen.classList.add("endScreen");
  youLoseScreen.innerHTML = "You Lose!";
  scoreBoard.appendChild(youLoseScreen);
  scoreBoard.appendChild(newGame);
}
function youWin() {
  player.remove();
  computer.remove();
  rockButton.remove();
  paperButton.remove();
  scissorsButton.remove();
  bottomText.remove();
  const youWinScreen = document.createElement("div");
  youWinScreen.classList.add("endScreen");
  youWinScreen.innerHTML = "You Win!";
  scoreBoard.appendChild(youWinScreen);
  scoreBoard.appendChild(newGame);
}

rockButton.addEventListener("click", () => {
  let computerChoice = comupterPlay();

  if (computerChoice == "Rock") return;
  if (computerChoice == "Scissors") playerScore++;
  if (computerChoice == "Paper") computerScore++;
  player.innerHTML = `Player: ${playerScore}`;
  computer.innerHTML = `Computer: ${computerScore}`;
  if (playerScore >= 3 && computerScore < 3) {
    youWin();
  }
  if (playerScore < computerScore && computerScore >= 3) {
    youLose();
  }
});

paperButton.addEventListener("click", () => {
  let computerChoice = comupterPlay();

  if (computerChoice == "Rock") playerScore++;
  if (computerChoice == "Scissors") computerScore++;
  if (computerChoice == "Paper") return;
  player.innerHTML = `Player: ${playerScore}`;
  computer.innerHTML = `Computer: ${computerScore}`;
  if (playerScore >= 3 && computerScore < 3) {
    youWin();
  }
  if (playerScore < computerScore && computerScore >= 3) {
    youLose();
  }
});

scissorsButton.addEventListener("click", () => {
  let computerChoice = comupterPlay();

  if (computerChoice == "Rock") computerScore++;
  if (computerChoice == "Scissors") return;
  if (computerChoice == "Paper") playerScore++;
  player.innerHTML = `Player: ${playerScore}`;
  computer.innerHTML = `Computer: ${computerScore}`;
  if (playerScore >= 3 && computerScore < 3) {
    youWin();
  }
  if (playerScore < computerScore && computerScore >= 3) {
    youLose();
  }
});
