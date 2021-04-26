/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonStartGame = document.getElementById("button-start-game");
buttonStartGame.addEventListener("click", () => {
  document.location.href = "/screens/intro/intro.html";
});

var buttonShowCredits = document.getElementById("button-show-credits");
buttonShowCredits.addEventListener("click", () => {
  document.location.href = "/screens/credits/credits.html";
});
