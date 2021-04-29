/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for credits screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { SOUND } from "../../sound/sound-manager.js";
import { CREDITS_MODEL } from "/modules/credits/credits-model.js";
import { CREDITS_VIEW } from "/modules/credits/credits-view.js";
import { INTRO_VIEW } from "/modules/intro/intro-view.js";
import { STARFIELD } from "../starfield.js";

const CREDITS_CONTROLLER = {
  registerEventListeners: registerEventListeners,
};

function registerEventListeners() {
  registerButtonStartNewGameEventListener();
}

function registerButtonStartNewGameEventListener() {
  CONSTANTS.HTML.CREDITS.BUTTON_START_NEW_GAME.addEventListener("click", () => {
    CREDITS_VIEW.startNewGame();
    SOUND.stopAudio(SOUND.MUSIC.CREDITS);
    SOUND.playAudio(SOUND.MUSIC.INTRO);
    INTRO_VIEW.loadIntroScrollingText();
    STARFIELD.activate();
  });
}

export { CREDITS_CONTROLLER };
