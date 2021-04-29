/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the landing screen's UI.
 * @summary view object for landing screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { LANDING_MODEL } from "/modules/landing/landing-model.js";
import { LANDING_CONTROLLER } from "/modules/landing/landing-controller.js";
import { STARFIELD } from "../starfield.js";

/**
 * Shows the progress bar load, controlled by variable "TIME_PER_INTERVAL".
 * Once the progress bar is loaded, show the landing screen with options to load the game, see the credits, or select a language.
 */
function loadProgressBar() {
  const TIME_PER_INTERVAL = 5; // production 20
  let processBarPercentage = 0;

  let processBarPercentageInterval = setInterval(() => {
    CONSTANTS.HTML.LANDING.SCREEN_PROGRESS_BAR.value = processBarPercentage;
    processBarPercentage++;
    if (processBarPercentage >= 101) {
      hideLandingScreenPart1();
      showLandingScreenPart2();
      STARFIELD.activate();
      clearInterval(processBarPercentageInterval);
    }
  }, TIME_PER_INTERVAL);
}

/**
 * Hides part 1 of the landing screen, the progress bar.
 */
function hideLandingScreenPart1() {
  CONSTANTS.HTML.LANDING.SCREEN_LANDING_PART_1.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_FLEXCOL
  );
  CONSTANTS.HTML.LANDING.SCREEN_LANDING_PART_1.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Shows part 2 of the landing screen, the "start game, see credits, select language" options.
 */
function showLandingScreenPart2() {
  CONSTANTS.HTML.LANDING.SCREEN_LANDING_PART_2.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.LANDING.SCREEN_LANDING_PART_2.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_FLEXCOL
  );
}

/**
 * Hides both parts of the landing screen
 * Preparing to move to either the intro screen or the credits screen
 */
function hideLandingScreen() {
  CONSTANTS.HTML.LANDING.SCREEN_LANDING.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.LANDING.SCREEN_LANDING.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Shows the intro screen
 */
function showIntroScreen() {
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Shows the credits screen
 */
function showCreditsScreen() {
  CONSTANTS.HTML.CREDITS.SCREEN_CREDITS.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_FLEXCOL
  );
  CONSTANTS.HTML.CREDITS.SCREEN_CREDITS.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Exported VIEW object for the landing screen.
 */
const LANDING_VIEW = {
  loadProgressBar: loadProgressBar,
  hideLandingScreen: hideLandingScreen,
  showIntroScreen: showIntroScreen,
  showCreditsScreen: showCreditsScreen,
};
export { LANDING_VIEW };