/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for intro screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { SOUND } from "../../sound/sound-manager.js";
import { INTRO_MODEL } from "/modules/intro/intro-model.js";
import { INTRO_VIEW } from "/modules/intro/intro-view.js";
import { STARFIELD } from "../starfield.js";

/**
 * Exported controller object for the intro screen
 */
const INTRO_CONTROLLER = {
  registerEventListeners: registerEventListeners,
};

/**
 * Registers all event listeners on the intro screen
 */
function registerEventListeners() {
  registerButtonSkipIntroEventListener();
  registerButtonPrepareForBattleEventListener();
}

/**
 * Private function to register the "skip intro" button
 */
function registerButtonSkipIntroEventListener() {
  CONSTANTS.HTML.INTRO.BUTTON_SKIP_INTRO.addEventListener("click", () => {
    goToMenu();
  });
}

/**
 * Private function to register the "prepare for battle" button
 */
function registerButtonPrepareForBattleEventListener() {
  CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.addEventListener("click", () => {
    goToMenu();
  });
}

/**
 * Since both "skip intro" and "prepare for battle" do the same thing, this function eliminates that redundancy
 */
function goToMenu() {
  INTRO_VIEW.hideIntro();
  INTRO_VIEW.showMenu();
  SOUND.stopAudio(SOUND.MUSIC.INTRO);
  SOUND.playAudio(SOUND.MUSIC.MENU);
  STARFIELD.activate();
}

export { INTRO_CONTROLLER };
