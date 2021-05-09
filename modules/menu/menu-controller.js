/**
 * @fileoverview Menu's controller (MVC pattern), responsible for coordinating "user actions, model data, and view ui".
 * Controller acts as the only communication to and from the menu code.
 * The front/main controller "game" coordinates all controllers.
 * @summary controller object for menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { SOUND } from "../../sound/sound-manager.js";
import { MENU_MODEL } from "/modules/menu/menu-model.js";
import { MENU_VIEW } from "/modules/menu/menu-view.js";
import { CONSTANTS } from "../../constants/constants.js";

/**
 * Shows the menu screen
 */
function showMenuScreen() {
  MENU_VIEW.showMenuScreen();
}

/**
 * Hides the menu screen
 */
function hideMenuScreen() {
  MENU_VIEW.hideMenuScreen();
}

/**
 * Whenever an HTML Button representing a special weapon is clicked, this function highlights that button (and de-highlights the others)
 * @param {HTML_Element} selectedWeaponButton
 */
function highlightWeaponSelectedButton(selectedWeaponButton) {
  MENU_VIEW.highlightWeaponSelectedButton(selectedWeaponButton);
}

/**
 * Getter used by GAME to get the name of the selected weapon
 * @returns string of the name of the selected weapon
 */
function getSelectedWeaponName() {
  return MENU_MODEL.getSelectedWeaponName();
}

/**
 * When a special weapon HTML button is selected, a string is passed to the model data of menu representing which weapon was selected.
 * GAME (the main controller) gets this data and passes it to battle.
 * @param {string} selectedWeapon
 */
function setSelectedWeaponName(selectedWeaponName) {
  MENU_MODEL.setSelectedWeaponName(selectedWeaponName);
}

/**
 * Event listener for the "radar" button.
 * This selects radar as the special weapon for the battle.
 */
function registerButtonSelectRadarEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR.addEventListener("click", () => {
    SOUND.stopAudio(SOUND.SFX.SPECIAL_WEAPON_SELECTED);
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR
    );
    MENU_CONTROLLER.setSelectedWeaponName(CONSTANTS.GAME.RADAR);
    SOUND.playAudio(SOUND.SFX.SPECIAL_WEAPON_SELECTED);
  });
}

/**
 * Event listener for the "EMP Bomb" button.
 * This selects the EMP Bomb as the special weapon for the battle.
 */
function registerButtonSelectEMPEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP.addEventListener("click", () => {
    SOUND.stopAudio(SOUND.SFX.SPECIAL_WEAPON_SELECTED);
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP
    );
    MENU_CONTROLLER.setSelectedWeaponName(CONSTANTS.GAME.EMP);
    SOUND.playAudio(SOUND.SFX.SPECIAL_WEAPON_SELECTED);
  });
}

/**
 * Event listener for the "PAUL" button.
 * This selects the PAUL as the special weapon for the battle.
 */
function registerButtonSelectPaulEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL.addEventListener("click", () => {
    SOUND.stopAudio(SOUND.SFX.SPECIAL_WEAPON_SELECTED);
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL
    );
    MENU_CONTROLLER.setSelectedWeaponName(CONSTANTS.GAME.PAUL);
    SOUND.playAudio(SOUND.SFX.SPECIAL_WEAPON_SELECTED);
  });
}

/**
 * Registers the menu's internal events on game startup
 */
function registerInternalMenuEvents() {
  registerButtonSelectRadarEventListener();
  registerButtonSelectEMPEventListener();
  registerButtonSelectPaulEventListener();
}

/**
 * Exportable controller for the menu screen
 */
const MENU_CONTROLLER = {
  showMenuScreen: showMenuScreen,
  hideMenuScreen: hideMenuScreen,
  highlightWeaponSelectedButton: highlightWeaponSelectedButton,
  getSelectedWeaponName: getSelectedWeaponName,
  setSelectedWeaponName: setSelectedWeaponName,
  registerInternalMenuEvents: registerInternalMenuEvents,
};
export { MENU_CONTROLLER };
