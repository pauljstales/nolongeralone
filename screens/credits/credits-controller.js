/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonStartNewGame = document.getElementById("button-start-new-game");
buttonStartNewGame.addEventListener("click", () => {
  document.location.href = "/screens/menu/menu.html";
});
