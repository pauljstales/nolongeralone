/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonStartTutorial = document.getElementById("button-start-tutorial");
buttonStartTutorial.addEventListener("click", () => {
  document.location.href = "/screens/tutorial/tutorial.html";
});

var buttonStartBattle = document.getElementById("button-start-battle");
buttonStartBattle.addEventListener("click", () => {
  document.location.href = "/screens/battle/battle.html";
});

var buttonSelectRadar = document.getElementById("select-special-weapon-radar");
buttonSelectRadar.addEventListener("click", () => {
  console.log("radar");
});

var buttonSelectEMP = document.getElementById("select-special-weapon-emp");
buttonSelectEMP.addEventListener("click", () => {
  console.log("emp");
});

var buttonSelectPAUL = document.getElementById("select-special-weapon-paul");
buttonSelectPAUL.addEventListener("click", () => {
  console.log("paul");
});
