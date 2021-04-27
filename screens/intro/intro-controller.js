/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonSkipIntro = document.getElementById("BUTTON_SKIP_INTRO");
buttonSkipIntro.addEventListener("click", openMenu);

var buttonPrepareForBattle = document.getElementById("BUTTON_PREPAREFORBATTLE");
buttonPrepareForBattle.addEventListener("click", openMenu);

function openMenu() {
  SCREEN_CONTAINER_INTRO.classList.remove("screen-container--display--block");
  SCREEN_CONTAINER_INTRO.classList.add("screen-container--display--none");
  SCREEN_CONTAINER_MENU.classList.add("screen-container--display--block");
  SCREEN_CONTAINER_MENU.classList.remove("screen-container--display--none");
  SOUNDTRACK_INTRO.pause();
  SOUNDTRACK_INTRO.currentTime = 0;
  SOUNDTRACK_MENU.play();
}
