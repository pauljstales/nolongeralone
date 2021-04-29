/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for landing screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { SOUND } from "../../sound/sound-manager.js";
import { LANDING_MODEL } from "/modules/landing/landing-model.js";
import { LANDING_VIEW } from "/modules/landing/landing-view.js";
import { INTRO_VIEW } from "/modules/intro/intro-view.js";
import { STARFIELD } from "../starfield.js";
import { translateIntoLanguage } from "../../languages/translator.js";

function registerEventListeners() {
  registerButtonStartGameEventListener();
  registerButtonShowCreditsEventListener();
  registerSelectLanguageEventListener();
}

function registerButtonStartGameEventListener() {
  CONSTANTS.HTML.LANDING.BUTTON_START_GAME.addEventListener("click", () => {
    LANDING_VIEW.hideLandingScreen();
    LANDING_VIEW.showIntroScreen();
    INTRO_VIEW.loadIntroScrollingText();
    SOUND.playAudio(SOUND.MUSIC.INTRO);
    STARFIELD.activate();
  });
}

function registerButtonShowCreditsEventListener() {
  CONSTANTS.HTML.LANDING.BUTTON_SHOW_CREDITS.addEventListener("click", () => {
    LANDING_VIEW.hideLandingScreen();
    LANDING_VIEW.showCreditsScreen();
    SOUND.playAudio(SOUND.MUSIC.CREDITS);
    STARFIELD.activate();
  });
}

function registerSelectLanguageEventListener() {
  CONSTANTS.HTML.LANDING.SELECT_LANGUAGE.addEventListener(
    "change",
    function (e) {
      translateIntoLanguage(e.target.value);
    }
  );
  translateIntoLanguage("english");
}

/** Exported controller object for the landing screen */
const LANDING_CONTROLLER = {
  registerEventListeners: registerEventListeners,
};
export { LANDING_CONTROLLER };
