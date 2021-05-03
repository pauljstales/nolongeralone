/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for landing screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { LANDING_VIEW } from "/modules/landing/landing-view.js";

/**
 * On page startup the landing view shows a progress bar.
 * At the completion of the progress bar the landing page is shown.
 */
function loadProgressBar() {
  LANDING_VIEW.loadProgressBar();
}

/**
 * Shows the landing screen
 */
function showLandingScreen() {
  LANDING_VIEW.showLandingScreen();
}

/**
 * Hides the landing screen
 */
function hideLandingScreen() {
  LANDING_VIEW.hideLandingScreen();
}

/**
 * The exported controller object for landing
 */
const LANDING_CONTROLLER = {
  loadProgressBar: loadProgressBar,
  showLandingScreen: showLandingScreen,
  hideLandingScreen: hideLandingScreen,
};
export { LANDING_CONTROLLER };
