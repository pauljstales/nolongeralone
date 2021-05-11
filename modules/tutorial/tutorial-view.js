/**
 * @fileoverview Tutorial's view (MVC pattern), responsible for the view/UI.
 * Tutorial's controller is the only access into the view.
 * @summary view object for tutorial screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";

/**
 * Shows the tutorial screen
 */
function showTutorial() {
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Hides the tutorial screen
 */
function hideTutorialScreen() {
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

/**
 * Highlights the selected tutorial HTML button, and de-highlights the others.
 * @param {string} selectedTutorial
 */
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

/**
 * Shows the HTML Button's related tutorial text, and hides the others.
 * @param {string} selectedTutorial
 */
function showTutorialText(selectedTutorial) {
  const ALL_TUTORIAL_TEXT = [
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_DEFAULT,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOPLAY,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOWIN,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOLOSE,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_WEAPONS,
    CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_OTHER,
  ];

  ALL_TUTORIAL_TEXT.forEach((currentTutorialText) => {
    if (currentTutorialText != selectedTutorial) {
      currentTutorialText.classList.remove(CONSTANTS.CSS.SCREEN_OPACITY_SHOW);
      currentTutorialText.classList.add(CONSTANTS.CSS.SCREEN_OPACITY_HIDE);
    }
    selectedTutorial.classList.add(CONSTANTS.CSS.SCREEN_OPACITY_SHOW);
    selectedTutorial.classList.remove(CONSTANTS.CSS.SCREEN_OPACITY_HIDE);
  });
}

/**
 * Exported object for tutorial view
 */
const TUTORIAL_VIEW = {
  highlightTutorialButton: highlightTutorialButton,
  showTutorial: showTutorial,
  hideTutorialScreen: hideTutorialScreen,
  showTutorialText: showTutorialText,
};
export { TUTORIAL_VIEW };
