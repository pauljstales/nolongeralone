/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the intro screen's UI.
 * @summary view object for intro screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { CONFIGURATION } from "../../configuration/configuration.js";

/**
 * Shows the intro screen (with the scrolling introduction text)
 */
function showIntroScreen() {
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  loadIntroScrollingText();
}

/**
 * Hide the intro screen
 */
function hideIntroScreen() {
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Container function for the various effects used in the introduction screen.
 * Timeouts were used rather than animations (or animation frames) because it worked out nicely as far fading the text in in sequence.
 * There are 4 inner, private helper functions for each part of the introduction.
 * Time breakdown as below:
 * -- Introduction text is shown at 0s, 3s, 6s, 9s, and 12s
 * -- Introduction text is hidden at 15s
 * -- Title text is shown at 15s
 * -- Prepare-for-Battle button is shown at 18s
 */
function loadIntroScrollingText() {
  showIntroText();
  hideIntroText();
  showTitleText();
  showPrepareForBattleButton();

  function showIntroText() {
    const INTRO_TEXT_ELEMENTS = [
      CONSTANTS.HTML.INTRO.INTRO_TEXT_1,
      CONSTANTS.HTML.INTRO.INTRO_TEXT_2,
      CONSTANTS.HTML.INTRO.INTRO_TEXT_3,
      CONSTANTS.HTML.INTRO.INTRO_TEXT_4,
      CONSTANTS.HTML.INTRO.INTRO_TEXT_5,
    ];
    for (let i = 0; i <= 4; i++) {
      setTimeout(() => {
        INTRO_TEXT_ELEMENTS[i].classList.remove(
          CONSTANTS.CSS.SCREEN_TEXT_OPACITY_NONE
        );
        INTRO_TEXT_ELEMENTS[i].classList.add(
          CONSTANTS.CSS.SCREEN_TEXT_OPACITY_SHOW
        );
      }, i * CONFIGURATION.TIME_PER_INTRO_TEXT);
    }
  }

  function hideIntroText() {
    setTimeout(() => {
      CONSTANTS.HTML.INTRO.SCREEN_INTRO_PART_1.classList.add(
        CONSTANTS.CSS.SCREEN_DISPLAY_NONE
      );
      CONSTANTS.HTML.INTRO.SCREEN_INTRO_PART_1.classList.remove(
        CONSTANTS.CSS.SCREEN_DISPLAY_FLEXCOL
      );
      CONSTANTS.HTML.INTRO.SCREEN_INTRO_PART_1.innerHTML = "";
      CONSTANTS.HTML.INTRO.SCREEN_INTRO_PART_2.classList.add(
        CONSTANTS.CSS.SCREEN_DISPLAY_FLEXCOL
      );
      CONSTANTS.HTML.INTRO.SCREEN_INTRO_PART_2.classList.remove(
        CONSTANTS.CSS.SCREEN_DISPLAY_NONE
      );
    }, CONFIGURATION.TIME_UNTIL_TITLE_TEXT);
  }

  function showTitleText() {
    setTimeout(() => {
      CONSTANTS.HTML.INTRO.INTRO_TEXT_6.classList.remove(
        CONSTANTS.CSS.SCREEN_TEXT_OPACITY_NONE
      );
      CONSTANTS.HTML.INTRO.INTRO_TEXT_6.classList.add(
        CONSTANTS.CSS.SCREEN_TEXT_OPACITY_SHOW
      );
    }, CONFIGURATION.TIME_UNTIL_TITLE_TEXT);
  }

  function showPrepareForBattleButton() {
    setTimeout(() => {
      CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.classList.remove(
        CONSTANTS.CSS.BUTTON_OPACITY_NONE
      );
      CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.classList.add(
        CONSTANTS.CSS.BUTTON_OPACITY_SHOW
      );
    }, CONFIGURATION.TIME_UNTIL_TITLE_LINK_AS_BUTTON);
  }
}

/**
 * Exported view object for the intro screen
 */
const INTRO_VIEW = {
  loadIntroScrollingText: loadIntroScrollingText,
  showIntroScreen: showIntroScreen,
  hideIntroScreen: hideIntroScreen,
};
export { INTRO_VIEW };
