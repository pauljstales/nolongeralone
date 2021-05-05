/**
 * @fileoverview Intro's controller (MVC pattern), responsible for coordinating "user actions, model data, and view ui".
 * Controller acts as the only communication to and from the intro code.
 * The front/main controller "game" coordinates all controllers.
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
