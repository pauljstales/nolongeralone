/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonHowToPlay = document.getElementById("button-how-to-play");
var buttonHowToWin = document.getElementById("button-how-to-win");
var buttonHowToLose = document.getElementById("button-how-to-lose");
var buttonSpecialWeapons = document.getElementById("button-special-weapons");
var buttonOther = document.getElementById("button-other");
var buttonReturnToMenu = document.getElementById("button-return-to-menu");
var allTutorialButtons = [
  buttonHowToPlay,
  buttonHowToWin,
  buttonHowToLose,
  buttonSpecialWeapons,
  buttonOther,
  buttonReturnToMenu,
];

buttonHowToPlay.addEventListener("click", () => {
  console.log("play");
  allTutorialButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonHowToPlay.classList.remove("button--color--default");
  buttonHowToPlay.classList.add("button--color--default-selected");
});

buttonHowToWin.addEventListener("click", () => {
  console.log("win");
  allTutorialButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonHowToWin.classList.remove("button--color--default");
  buttonHowToWin.classList.add("button--color--default-selected");
});

buttonHowToLose.addEventListener("click", () => {
  console.log("lose");
  allTutorialButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonHowToLose.classList.remove("button--color--default");
  buttonHowToLose.classList.add("button--color--default-selected");
});

buttonSpecialWeapons.addEventListener("click", () => {
  console.log("special weapons");
  allTutorialButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonSpecialWeapons.classList.remove("button--color--default");
  buttonSpecialWeapons.classList.add("button--color--default-selected");
});

buttonOther.addEventListener("click", () => {
  console.log("other");
  allTutorialButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonOther.classList.remove("button--color--default");
  buttonOther.classList.add("button--color--default-selected");
});

buttonReturnToMenu.addEventListener("click", () => {
  SCREEN_CONTAINER_TUTORIAL.classList.remove(
    "screen-container--display--block"
  );
  SCREEN_CONTAINER_TUTORIAL.classList.add("screen-container--display--none");
  SCREEN_CONTAINER_MENU.classList.add("screen-container--display--block");
  SCREEN_CONTAINER_MENU.classList.remove("screen-container--display--none");
});
