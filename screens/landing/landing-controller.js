/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonLoadGame = document.getElementById("start-game");
buttonLoadGame.addEventListener("click", () => {
  document.location.href = "/screens/intro/intro.html";
});

var buttonCredits = document.getElementById("credits");
buttonCredits.addEventListener("click", () => {
  document.location.href = "/screens/credits/credits.html";
});
