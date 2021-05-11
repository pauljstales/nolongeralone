/**
 * @fileoverview Tutorial's controller (MVC pattern), responsible for coordinating "user actions, model data, and view UI".
 * Controller acts as the only communication to and from the tutorial code.
 * The front/main controller "game" coordinates all controllers.
 * @summary controller object for tutorial screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { SOUND } from "../../../sound/sound-manager.js";
import { TUTORIAL_VIEW } from "/modules/tutorial/tutorial-view.js";

/**
 * Show the tutorial screen
 */
function showTutorial() {
  TUTORIAL_VIEW.showTutorial();
}

/**
 * Hide the tutorial screen
 */
function hideTutorialScreen() {
  TUTORIAL_VIEW.hideTutorialScreen();
}

/**
 * When the "how to play" HTML button is selected, this both
 * 1 Highlights that button (and de-highlights the others)
 * 2 Shows the tutorial text (while hiding other tutorial text)
 */
function addButtonHowToPlayEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_PLAY.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    TUTORIAL_VIEW.highlightTutorialButton(
      CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_PLAY
    );
    TUTORIAL_VIEW.showTutorialText(
      CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOPLAY
    );
  });
}

/**
 * When the "how to win" HTML button is selected, this both
 * 1 Highlights that button (and de-highlights the others)
 * 2 Shows the tutorial text (while hiding other tutorial text)
 */
function addButtonHowToWinEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_WIN.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    TUTORIAL_VIEW.highlightTutorialButton(
      CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_WIN
    );
    TUTORIAL_VIEW.showTutorialText(
      CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOWIN
    );
  });
}

/**
 * When the "how to lose" HTML button is selected, this both
 * 1 Highlights that button (and de-highlights the others)
 * 2 Shows the tutorial text (while hiding other tutorial text)
 */
function addButtonHowToLoseEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_LOSE.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    TUTORIAL_VIEW.highlightTutorialButton(
      CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_LOSE
    );
    TUTORIAL_VIEW.showTutorialText(
      CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_HOWTOLOSE
    );
  });
}

/**
 * When the "special weapons" HTML button is selected, this both
 * 1 Highlights that button (and de-highlights the others)
 * 2 Shows the tutorial text (while hiding other tutorial text)
 */
function addButtonSpecialWeaponsEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_SPECIAL_WEAPONS.addEventListener(
    "click",
    () => {
      SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
      TUTORIAL_VIEW.highlightTutorialButton(
        CONSTANTS.HTML.TUTORIAL.BUTTON_SPECIAL_WEAPONS
      );
      TUTORIAL_VIEW.showTutorialText(
        CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_WEAPONS
      );
    }
  );
}

/**
 * When the "other" HTML button is selected, this both
 * 1 Highlights that button (and de-highlights the others)
 * 2 Shows the tutorial text (while hiding other tutorial text)
 */
function addButtonOtherEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_OTHER.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    TUTORIAL_VIEW.highlightTutorialButton(CONSTANTS.HTML.TUTORIAL.BUTTON_OTHER);
    TUTORIAL_VIEW.showTutorialText(CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_OTHER);
  });
}

/**
 * Registers tutorial's internal events on game startup
 */
function registerInternalTutorialEvents() {
  addButtonHowToPlayEventListener();
  addButtonHowToWinEventListener();
  addButtonHowToLoseEventListener();
  addButtonSpecialWeaponsEventListener();
  addButtonOtherEventListener();
}

/**
 * Exported controller for tutorial
 */
const TUTORIAL_CONTROLLER = {
  showTutorial: showTutorial,
  hideTutorialScreen: hideTutorialScreen,
  registerInternalTutorialEvents: registerInternalTutorialEvents,
};
export { TUTORIAL_CONTROLLER };
