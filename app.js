// console.log("Welcome to tic tac toe");
let music = new Audio("./Assets/music.mp3");
let turnmusic = new Audio("./Assets/ting.mp3");
const gameover = new Audio("./Assets/gameover.mp3");

let turn = "X";
let isgameOver = false;

//Function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 0, 5, 5],
    [3, 4, 5, 0, 5, 15],
    [6, 7, 8, 0, 5, 25],
    [0, 3, 6, 90, 15, 5],
    [1, 4, 7, 90, 15, -5],
    [2, 5, 8, 90, 15, -15],
    [0, 4, 8, 45, 14, 7],
    [2, 4, 6, 135, 7, -14],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        "Winner is " + boxtext[e[0]].innerText;
      isgameOver = true;
      document.getElementsByTagName("img")[0].style.width = "250px";
      document.querySelector(
        ".line"
      ).style.transform = `rotate(${e[3]}deg) translate(${e[4]}vw, ${e[5]}vw)`;
      document.querySelector(".line").style.width = "20vw";
      gameover.play();
    }
  });
};
// Logic of the Game
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnmusic.play();
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add click listener on button to reset
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameOver = false;
  document.getElementsByTagName("img")[0].style.width = "0px";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".line").style.width = "0";
  music.play();
});
