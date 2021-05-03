/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for intro screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { INTRO_VIEW } from "/modules/intro/intro-view.js";

/**
 * Shows the intro screen
 */
function showIntroScreen() {
  INTRO_VIEW.showIntroScreen();
}

/**
 * Hides the intro screen
 */
function hideIntroScreen() {
  INTRO_VIEW.hideIntroScreen();
}

/**
 * Exported controller object for the intro screen
 */
const INTRO_CONTROLLER = {
  showIntroScreen: showIntroScreen,
  hideIntroScreen: hideIntroScreen,
};
export { INTRO_CONTROLLER };
