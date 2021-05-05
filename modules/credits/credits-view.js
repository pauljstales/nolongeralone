/**
 * @fileoverview Credits's view (MVC pattern), responsible for the view/ui.
 * Credits's controller is the only access into the view.
 * @summary view object for credits screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";

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

/** Exported object for credits view */
const CREDITS_VIEW = {
  showCreditsScreen: showCreditsScreen,
  hideCreditsScreen: hideCreditsScreen,
};
export { CREDITS_VIEW };
