/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonHowToPlay = document.getElementById("BUTTON_HOW_TO_PLAY");
var buttonHowToWin = document.getElementById("BUTTON_HOW_TO_WIN");
var buttonHowToLose = document.getElementById("BUTTON_HOW_TO_LOSE");
var buttonSpecialWeapons = document.getElementById("BUTTON_SPECIAL_WEAPONS");
var buttonOther = document.getElementById("BUTTON_OTHER");
var buttonReturnToMenu = document.getElementById("BUTTON_RETURN_TO_MENU");
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
  SOUNDTRACK_MENU.play();
});
