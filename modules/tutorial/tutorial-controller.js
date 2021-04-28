/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for tutorial screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { SOUND } from "../../sound/sound-manager.js";
import { TUTORIAL_MODEL } from "/modules/tutorial/tutorial-model.js";
import { TUTORIAL_VIEW } from "/modules/tutorial/tutorial-view.js";

const TUTORIAL_CONTROLLER = {
  registerEventListeners: registerEventListeners,
};

function registerEventListeners() {
  addButtonHowToPlayEventListener();
  addButtonHowToWinEventListener();
  addButtonHowToLoseEventListener();
  addButtonSpecialWeaponsEventListener();
  addButtonOtherEventListener();
  addButtonReturnToMenuEventListener();
}

export { TUTORIAL_CONTROLLER };

function addButtonHowToPlayEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_PLAY.addEventListener("click", () => {
    TUTORIAL_VIEW.tutorialButtonSelectedHighlight(
      CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_PLAY
    );
  });
}

function addButtonHowToWinEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_WIN.addEventListener("click", () => {
    TUTORIAL_VIEW.tutorialButtonSelectedHighlight(
      CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_WIN
    );
  });
}

function addButtonHowToLoseEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_LOSE.addEventListener("click", () => {
    TUTORIAL_VIEW.tutorialButtonSelectedHighlight(
      CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_LOSE
    );
  });
}

function addButtonSpecialWeaponsEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_SPECIAL_WEAPONS.addEventListener(
    "click",
    () => {
      TUTORIAL_VIEW.tutorialButtonSelectedHighlight(
        CONSTANTS.HTML.TUTORIAL.BUTTON_SPECIAL_WEAPONS
      );
    }
  );
}

function addButtonOtherEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_OTHER.addEventListener("click", () => {
    TUTORIAL_VIEW.tutorialButtonSelectedHighlight(
      CONSTANTS.HTML.TUTORIAL.BUTTON_OTHER
    );
  });
}

function addButtonReturnToMenuEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_RETURN_TO_MENU.addEventListener(
    "click",
    () => {
      TUTORIAL_VIEW.returnToMenu();
      //SOUND.stopAudio(SOUND.MUSIC.TUTORIAL); //not implemented yet
      SOUND.playAudio(SOUND.MUSIC.MENU);
    }
  );
}
