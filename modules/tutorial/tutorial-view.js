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
  highlightTutorialButton: highlightTutorialButton,
  showTutorialText: showTutorialText,
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

function highlightTutorialButton(selectedTutorial) {
  const ALL_TUTORIAL_BUTTONS = [
    CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_PLAY,
    CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_WIN,
    CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_LOSE,
    CONSTANTS.HTML.TUTORIAL.BUTTON_SPECIAL_WEAPONS,
    CONSTANTS.HTML.TUTORIAL.BUTTON_OTHER,
  ];

  ALL_TUTORIAL_BUTTONS.forEach((currentTutorialButton) => {
    if (currentTutorialButton != selectedTutorial) {
      currentTutorialButton.classList.remove(
        CONSTANTS.CSS.BUTTON_COLOR_DEFAULT_SELECTED
      );
      currentTutorialButton.classList.add(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT);
    }
    selectedTutorial.classList.add(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT_SELECTED);
    selectedTutorial.classList.remove(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT);
  });
}

function showTutorialText(selectedTutorial) {
  console.log("what");
  const ALL_TUTORIAL_TEXT = [
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_DEFAULT,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOPLAY,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOWIN,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOLOSE,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_WEAPONS,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_OTHER,
  ];

  console.log("selectedTutorial:");
  console.log(selectedTutorial);
  ALL_TUTORIAL_TEXT.forEach((currentTutorialText) => {
    if (currentTutorialText != selectedTutorial) {
      console.log("currentTutorialText: ");
      console.log(currentTutorialText);
      currentTutorialText.classList.remove(CONSTANTS.CSS.SCREEN_OPACITY_SHOW);
      currentTutorialText.classList.add(CONSTANTS.CSS.SCREEN_OPACITY_HIDE);
    }
    selectedTutorial.classList.add(CONSTANTS.CSS.SCREEN_OPACITY_SHOW);
    selectedTutorial.classList.remove(CONSTANTS.CSS.SCREEN_OPACITY_HIDE);
  });
}
