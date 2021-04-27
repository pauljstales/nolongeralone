/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonStartNewGame = document.getElementById("button-start-new-game");
buttonStartNewGame.addEventListener("click", () => {
  SCREEN_CONTAINER_CREDITS.classList.remove("screen-container--display--block");
  SCREEN_CONTAINER_CREDITS.classList.add("screen-container--display--none");
  SCREEN_CONTAINER_INTRO.classList.add("screen-container--display--block");
  SCREEN_CONTAINER_INTRO.classList.remove("screen-container--display--none");
});
