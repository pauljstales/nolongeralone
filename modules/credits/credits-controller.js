/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
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
