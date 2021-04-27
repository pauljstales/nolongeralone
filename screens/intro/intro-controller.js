/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonSkipIntro = document.getElementById("button-skip-intro");
buttonSkipIntro.addEventListener("click", () => {
  SCREEN_CONTAINER_INTRO.classList.remove("screen-container--display--block");
  SCREEN_CONTAINER_INTRO.classList.add("screen-container--display--none");
  SCREEN_CONTAINER_MENU.classList.add("screen-container--display--block");
  SCREEN_CONTAINER_MENU.classList.remove("screen-container--display--none");
});

var buttonPrepareForBattle = document.getElementById(
  "button-prepare-for-battle"
);
buttonPrepareForBattle.addEventListener("click", () => {
  SCREEN_CONTAINER_INTRO.classList.remove("screen-container--display--block");
  SCREEN_CONTAINER_INTRO.classList.add("screen-container--display--none");
  SCREEN_CONTAINER_MENU.classList.add("screen-container--display--block");
  SCREEN_CONTAINER_MENU.classList.remove("screen-container--display--none");
});
