/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the credits screen's UI.
 * @summary view object for credits screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";

const CREDITS_VIEW = {
  showCreditsScreen: showCreditsScreen,
  hideCreditsScreen: hideCreditsScreen,
};

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
 * Hides the credits screen
 */
function hideCreditsScreen() {
  CONSTANTS.HTML.CREDITS.SCREEN_CREDITS.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.CREDITS.SCREEN_CREDITS.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_FLEXCOL
  );
}

export { CREDITS_VIEW };
