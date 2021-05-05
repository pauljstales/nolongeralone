/**
 * @fileoverview Landing's view (MVC pattern), responsible for the view/ui.
 * Landing's controller is the only access into the view.
 * @summary view object for landing screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../../configuration/configuration.js";
import { CONSTANTS } from "../../constants/constants.js";

/**
 * Shows the progress bar load, controlled by variable "LANDING.TIME_PER_PROGRESS_BAR_INTERVAL".
 * Once the progress bar is loaded, show the landing screen with options to load the game, see the credits, or select a language.
 */
function loadProgressBar() {
  let processBarPercentage = 0;

  let processBarPercentageInterval = setInterval(() => {
    CONSTANTS.HTML.LANDING.SCREEN_PROGRESS_BAR.value = processBarPercentage;
    processBarPercentage++;
    if (processBarPercentage >= 101) {
      hideLandingScreenPart1();
      showLandingScreenPart2();
      clearInterval(processBarPercentageInterval);
    }
  }, CONFIGURATION.LANDING.TIME_PER_PROGRESS_BAR_INTERVAL);
}

/**
 * Shows both parts of the landing screen
 */
function showLandingScreen() {
  CONSTANTS.HTML.LANDING.SCREEN_LANDING.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.LANDING.SCREEN_LANDING.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

/**
 * Hides part 1 of the landing screen, the "progress bar".
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
 * Shows part 2 of the landing screen.
 * The "start game, see credits, select language" options.
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
 * Exported VIEW object for the landing screen.
 */
const LANDING_VIEW = {
  loadProgressBar: loadProgressBar,
  showLandingScreen: showLandingScreen,
  hideLandingScreen: hideLandingScreen,
};
export { LANDING_VIEW };
