let boardRegions = document.querySelectorAll("#gameBoard span");
let vBoard = [];
let turnPlayer = "";

function updateTitle() {
  const playerinput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerinput.value;
}

function initializeGame() {
  vBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turnPlayer = "player1";
  document.querySelector("h2").innerHTML =
    '<h2>Vez de : <span id="turnPlayer"></span></h2>';
  updateTitle();
  boardRegions.forEach((element) => {
    element.classList.remove("win");
    element.innerText = "";
    element.addEventListener("click", handleBoardClick);
  });
}

function disableRegion(element) {
  element.style.cursor = "default";
  element.removeEventListener("click", handleBoardClick);
}

function handleBoardClick(ev) {
  const span = ev.currentTarget;
  const region = span.dataset.region; // N.N
  const rowColumnPair = region.split(".");
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if (turnPlayer === "player1") {
    span.innerText = "X";
    vBoard[row][column] = "X";
  } else {
    span.innerText = "O";
    vBoard[row][column] = "O";
  }

  console.clear();
  console.table(vBoard);
  disableRegion(span);
}

document.getElementById("start").addEventListener("click", () => {
  initializeGame();
});
