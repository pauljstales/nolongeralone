/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

var buttonStartTutorial = document.getElementById("button-start-tutorial");
buttonStartTutorial.addEventListener("click", () => {
  SCREEN_CONTAINER_MENU.classList.remove("screen-container--display--block");
  SCREEN_CONTAINER_MENU.classList.add("screen-container--display--none");
  SCREEN_CONTAINER_TUTORIAL.classList.add("screen-container--display--block");
  SCREEN_CONTAINER_TUTORIAL.classList.remove("screen-container--display--none");
  SOUNDTRACK_MENU.pause();
  SOUNDTRACK_MENU.currentTime = 0;
  // need tutorial music
});

var buttonStartBattle = document.getElementById("button-start-battle");
buttonStartBattle.addEventListener("click", () => {
  SCREEN_CONTAINER_MENU.classList.remove("screen-container--display--block");
  SCREEN_CONTAINER_MENU.classList.add("screen-container--display--none");
  SCREEN_CONTAINER_BATTLE.classList.add("screen-container--display--block");
  SCREEN_CONTAINER_BATTLE.classList.remove("screen-container--display--none");
  SOUNDTRACK_MENU.pause();
  SOUNDTRACK_MENU.currentTime = 0;
  SOUNDTRACK_BATTLE.play();
  SFX_RADAR.pause();
  SFX_EMP.pause();
  SFX_PLASMA.pause();
  SFX_RADAR.currentTime = 0;
  SFX_EMP.currentTime = 0;
  SFX_PLASMA.currentTime = 0;
});

var buttonSelectRadar = document.getElementById("select-special-weapon-radar");
var buttonSelectEMP = document.getElementById("select-special-weapon-emp");
var buttonSelectPAUL = document.getElementById("select-special-weapon-paul");
var allMenuButtons = [buttonSelectRadar, buttonSelectEMP, buttonSelectPAUL];

buttonSelectRadar.addEventListener("click", () => {
  console.log("radar");
  allMenuButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonSelectRadar.classList.remove("button--color--default");
  buttonSelectRadar.classList.add("button--color--default-selected");
  SFX_EMP.pause();
  SFX_PLASMA.pause();
  SFX_EMP.currentTime = 0;
  SFX_PLASMA.currentTime = 0;
  SFX_RADAR.play();
});

buttonSelectEMP.addEventListener("click", () => {
  console.log("emp");
  allMenuButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonSelectEMP.classList.remove("button--color--default");
  buttonSelectEMP.classList.add("button--color--default-selected");
  SFX_RADAR.pause();
  SFX_PLASMA.pause();
  SFX_RADAR.currentTime = 0;
  SFX_PLASMA.currentTime = 0;
  SFX_EMP.play();
});

buttonSelectPAUL.addEventListener("click", () => {
  console.log("paul");
  allMenuButtons.forEach((currentButton) => {
    currentButton.classList.remove("button--color--default-selected");
    currentButton.classList.add("button--color--default");
  });
  buttonSelectPAUL.classList.add("button--color--default-selected");
  SFX_RADAR.pause();
  SFX_EMP.pause();
  SFX_RADAR.currentTime = 0;
  SFX_EMP.currentTime = 0;
  SFX_PLASMA.play();
});
