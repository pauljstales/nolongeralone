/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the credits screen's UI.
 * @summary view object for credits screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { CREDITS_MODEL } from "/modules/credits/credits-model.js";
import { CREDITS_CONTROLLER } from "/modules/credits/credits-controller.js";

const CREDITS_VIEW = {
  startNewGame: startNewGame,
};

function startNewGame() {
  CONSTANTS.HTML.CREDITS.SCREEN_CREDITS.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.CREDITS.SCREEN_CREDITS.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

export { CREDITS_VIEW };
