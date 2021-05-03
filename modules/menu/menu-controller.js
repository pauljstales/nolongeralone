/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { SOUND } from "../../sound/sound-manager.js";
import { MENU_MODEL } from "/modules/menu/menu-model.js";
import { MENU_VIEW } from "/modules/menu/menu-view.js";
import { STARFIELD } from "../starfield.js";

/**
 * Exportable controller for the menu screen
 */
const MENU_CONTROLLER = {
  registerEventListeners: registerEventListeners,
};

/** Registers all event listeners for the menu screen */
function registerEventListeners() {
  registerButtonStartTutorialEventListener();
  registerButtonStartBattleEventListener();
  registerButtonSelectRadarEventListener();
  registerButtonSelectEMPEventListener();
  registerButtonSelectPaulEventListener();
}

function registerButtonStartTutorialEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_START_TUTORIAL.addEventListener("click", () => {
    MENU_VIEW.hideMenu();
    MENU_VIEW.showTutorial();
    //SOUND.stopAudio(SOUND.MUSIC.MENU); // rob suggests tutorial uses menu music, so will let it play to see how it sounds and feels
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
    STARFIELD.activate();
  });
}

function registerButtonStartBattleEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_START_BATTLE.addEventListener("click", () => {
    MENU_VIEW.hideMenu();
    MENU_VIEW.showBattle();
    SOUND.playAudio(SOUND.MUSIC.BATTLE);
    SOUND.stopAudio(SOUND.MUSIC.MENU);
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
    STARFIELD.activate();
  });
}

function registerButtonSelectRadarEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR.addEventListener("click", () => {
    MENU_VIEW.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR
    );
    SOUND.playAudio(SOUND.SFX.BATTLE_RADAR_FIRE); // might change to "arming" sfx
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
  });
}

function registerButtonSelectEMPEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP.addEventListener("click", () => {
    MENU_VIEW.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP
    );
    SOUND.playAudio(SOUND.SFX.BATTLE_EMP_FIRE); // might change to "arming" sfx
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
  });
}

function registerButtonSelectPaulEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL.addEventListener("click", () => {
    MENU_VIEW.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL
    );
    SOUND.playAudio(SOUND.SFX.BATTLE_PAUL_FIRE); // might change to "arming" sfx
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
  });
}

export { MENU_CONTROLLER };
