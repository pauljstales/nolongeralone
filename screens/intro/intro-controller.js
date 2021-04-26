/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonSkipIntro = document.getElementById("button-skip-intro");
buttonSkipIntro.addEventListener("click", () => {
  document.location.href = "/screens/menu/menu.html";
});

var buttonPrepareForBattle = document.getElementById(
  "button-prepare-for-battle"
);
buttonPrepareForBattle.addEventListener("click", () => {
  document.location.href = "/screens/menu/menu.html";
});
