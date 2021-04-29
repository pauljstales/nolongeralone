/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the intro screen's UI.
 * @summary view object for intro screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { INTRO_MODEL } from "/modules/intro/intro-model.js";
import { INTRO_CONTROLLER } from "/modules/intro/intro-controller.js";

/**
 * Exported view object for the intro screen
 */
const INTRO_VIEW = {
  loadIntroScrollingText: loadIntroScrollingText,
  hideIntro: hideIntro,
  showMenu: showMenu,
};

/**
 * Hide the intro screen
 */
function hideIntro() {
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.INTRO.SCREEN_INTRO.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Show the menu screen
 */
function showMenu() {
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

/**
 * Container function for the various effects used in the introduction screen.
 * Timeouts were used rather than animations (or animation frames) because it worked out nicely as far fading the text in in sequence.
 * There are 4 inner, private helper functions for each part of the introduction.
 * Time breakdown as below:
 * -- Introduction text is shown at 0s, 3s, 6s, 9s, and 12s
 * -- Introduction text is hidden at 18s
 * -- Title text is shown at 18s
 * -- Prepare-for-Battle button is shown at 21s
 */
function loadIntroScrollingText() {
  const TIME_PER_INTRO_TEXT = 1000; // production 3000
  const TIME_UNTIL_TITLE_TEXT = TIME_PER_INTRO_TEXT * 5;
  const TIME_UNTIL_TITLE_LINK_AS_BUTTON = TIME_PER_INTRO_TEXT * 6;

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
      }, i * TIME_PER_INTRO_TEXT);
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
    }, TIME_UNTIL_TITLE_TEXT);
  }

  function showTitleText() {
    setTimeout(() => {
      CONSTANTS.HTML.INTRO.INTRO_TEXT_6.classList.remove(
        CONSTANTS.CSS.SCREEN_TEXT_OPACITY_NONE
      );
      CONSTANTS.HTML.INTRO.INTRO_TEXT_6.classList.add(
        CONSTANTS.CSS.SCREEN_TEXT_OPACITY_SHOW
      );
    }, TIME_UNTIL_TITLE_TEXT);
  }

  function showPrepareForBattleButton() {
    setTimeout(() => {
      CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.classList.remove(
        CONSTANTS.CSS.BUTTON_OPACITY_NONE
      );
      CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.classList.add(
        CONSTANTS.CSS.BUTTON_OPACITY_SHOW
      );
    }, TIME_UNTIL_TITLE_LINK_AS_BUTTON);
  }
}

export { INTRO_VIEW };
