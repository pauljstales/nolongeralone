/**
 * @fileoverview Credit's controller (MVC pattern), responsible for coordinating "user actions, model data, and view ui".
 * Controller acts as the only communication to and from the credit code.
 * The front/main controller "game" coordinates all controllers.
 * @summary controller object for credits screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CREDITS_VIEW } from "/modules/credits/credits-view.js";

/**
 * Show the credits screen
 */
function showCreditsScreen() {
  CREDITS_VIEW.showCreditsScreen();
}

/**
 * Hide the credits screen
 */
function hideCreditsScreen() {
  CREDITS_VIEW.hideCreditsScreen();
}

/**
 * Exportable controller for credits
 */
const CREDITS_CONTROLLER = {
  showCreditsScreen: showCreditsScreen,
  hideCreditsScreen: hideCreditsScreen,
};
export { CREDITS_CONTROLLER };
