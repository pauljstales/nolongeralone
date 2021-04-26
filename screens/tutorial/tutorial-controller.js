/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonHowToPlay = document.getElementById("button-how-to-play");
buttonHowToPlay.addEventListener("click", () => {
  console.log("play");
});

var buttonHowToWin = document.getElementById("button-how-to-win");
buttonHowToWin.addEventListener("click", () => {
  console.log("win");
});

var buttonHowToLose = document.getElementById("button-how-to-lose");
buttonHowToLose.addEventListener("click", () => {
  console.log("lose");
});

var buttonSpecialWeapons = document.getElementById("button-special-weapons");
buttonSpecialWeapons.addEventListener("click", () => {
  console.log("special weapons");
});

var buttonOther = document.getElementById("button-other");
buttonOther.addEventListener("click", () => {
  console.log("other");
});

var buttonReturnToMenu = document.getElementById("button-return-to-menu");
buttonReturnToMenu.addEventListener("click", () => {
  document.location.href = "/screens/menu/menu.html";
});
