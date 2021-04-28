/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the tutorial screen's UI.
 * @summary view object for tutorial screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { TUTORIAL_MODEL } from "/modules/tutorial/tutorial-model.js";
import { TUTORIAL_CONTROLLER } from "/modules/tutorial/tutorial-controller.js";

const TUTORIAL_VIEW = {
  tutorialButtonSelectedHighlight: tutorialButtonSelectedHighlight,
  returnToMenu: returnToMenu,
};

export { TUTORIAL_VIEW };

function returnToMenu() {
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );

  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

function tutorialButtonSelectedHighlight(selectedWeapon) {
  const ALL_TUTORIAL_BUTTONS = [
    CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_PLAY,
    CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_WIN,
    CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_LOSE,
    CONSTANTS.HTML.TUTORIAL.BUTTON_SPECIAL_WEAPONS,
    CONSTANTS.HTML.TUTORIAL.BUTTON_OTHER,
  ];

  ALL_TUTORIAL_BUTTONS.forEach((currentWeaponButton) => {
    if (currentWeaponButton != selectedWeapon) {
      currentWeaponButton.classList.remove(
        CONSTANTS.CSS.BUTTON_COLOR_DEFAULT_SELECTED
      );
      currentWeaponButton.classList.add(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT);
    }
    selectedWeapon.classList.add(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT_SELECTED);
    selectedWeapon.classList.remove(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT);
  });
}
