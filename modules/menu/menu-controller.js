/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { SOUND } from "../../sound/sound-manager.js";
import { MENU_MODEL } from "/modules/menu/menu-model.js";
import { MENU_VIEW } from "/modules/menu/menu-view.js";
import { CONSTANTS } from "../../constants/constants.js";

function showMenuScreen() {
  MENU_VIEW.showMenuScreen();
}

function hideMenuScreen() {
  MENU_VIEW.hideMenuScreen();
}

/**
 * Event listener for the "radar" button.
 * This selects radar as the special weapon for the battle.
 */
function registerButtonSelectRadarEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR.addEventListener("click", () => {
    stopAllBattleWeaponSelectionSounds();
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR
    );
    MENU_CONTROLLER.setSelectedWeapon(CONSTANTS.GAME.RADAR);
    SOUND.playAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
  });
}

/**
 * Event listener for the "EMP Bomb" button.
 * This selects the EMP Bomb as the special weapon for the battle.
 */
function registerButtonSelectEMPEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP.addEventListener("click", () => {
    stopAllBattleWeaponSelectionSounds();
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP
    );
    MENU_CONTROLLER.setSelectedWeapon(CONSTANTS.GAME.EMP);
    SOUND.playAudio(SOUND.SFX.BATTLE_EMP_FIRE);
  });
}

/**
 * Event listener for the "PAUL" button.
 * This selects the PAUL as the special weapon for the battle.
 */
function registerButtonSelectPaulEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL.addEventListener("click", () => {
    stopAllBattleWeaponSelectionSounds();
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL
    );
    MENU_CONTROLLER.setSelectedWeapon(CONSTANTS.GAME.PAUL);
    SOUND.playAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
  });
}

function registerInternalMenuEvents() {
  registerButtonSelectRadarEventListener();
  registerButtonSelectEMPEventListener();
  registerButtonSelectPaulEventListener();
}

/**
 * This stops all weapon sounds on the menu, either because a new weapon was
 * selected, or because the menu screen is being exited.
 */
function stopAllBattleWeaponSelectionSounds() {
  SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
}

function highlightWeaponSelectedButton(selectedWeaponButton) {
  MENU_VIEW.highlightWeaponSelectedButton(selectedWeaponButton);
}

function setSelectedWeapon(selectedWeapon) {
  MENU_MODEL.setSelectedWeapon(selectedWeapon);
}

function getSelectedWeapon() {
  return MENU_MODEL.getSelectedWeapon();
}

/**
 * Exportable controller for the menu screen
 */
const MENU_CONTROLLER = {
  showMenuScreen: showMenuScreen,
  hideMenuScreen: hideMenuScreen,
  highlightWeaponSelectedButton: highlightWeaponSelectedButton,
  getSelectedWeapon: getSelectedWeapon,
  setSelectedWeapon: setSelectedWeapon,
  registerInternalMenuEvents: registerInternalMenuEvents,
};
export { MENU_CONTROLLER };
