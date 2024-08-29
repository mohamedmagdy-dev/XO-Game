"use strict";

let playerTurnLabel = document.getElementById("player-turn");
let gameBoxes = document.querySelectorAll(".game .box");
let winnerCard = document.querySelector(".winner-card");
let winnerCardLabel = document.querySelector(".winner-card p");
let resetBtn = document.querySelector(".winner-card button");

let playerTurn = 1; // 1 Refer To Player One "X" -- 2 Refer To Player Two "O"

// Set First Player When Game Start
playerTurnLabel.innerText = playerTurn == 1 ? 'Player 1 "X"' : 'Player 2 "O"';

gameBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    turn(box);
  });
});

// Restart The Game
resetBtn.onclick = restartGame;

function turn(box) {
  playerTurnLabel.innerText = playerTurn == 1 ? 'Player 1 "X"' : 'Player 2 "O"';

  if (playerTurn == 1) {
    box.innerText = "X";
    box.classList.add("x");
    box.classList.add("selected");
    checkWinner();
    playerTurn = 2;
  } else {
    box.innerText = "O";
    box.classList.add("o");
    box.classList.add("selected");
    checkWinner();
    playerTurn = 1;
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], // الصف الأول
    [3, 4, 5], // الصف الثاني
    [6, 7, 8], // الصف الثالث
    [0, 3, 6], // العمود الأول
    [1, 4, 7], // العمود الثاني
    [2, 5, 8], // العمود الثالث
    [0, 4, 8], // القطر الأول
    [2, 4, 6], // القطر الثاني
  ];

  for (let combo of winningCombinations) {
    let [a, b, c] = combo;
    if (
      gameBoxes[a].innerText != "" &&
      gameBoxes[a].innerText === gameBoxes[b].innerText &&
      gameBoxes[a].innerText === gameBoxes[c].innerText
    ) {
      winnerCard.classList.add("show");
      winnerCardLabel.innerText =
        playerTurn == 1 ? "Player 1 Is Win" : "Player 2 Is Win";
    }
  }
}

function restartGame() {
  winnerCard.classList.remove("show");
  playerTurn = 1;
  gameBoxes.forEach((box) => {
    box.className = "box";
    box.innerText = "";
  });
}
