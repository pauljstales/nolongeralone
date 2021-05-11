/**
 * @fileoverview Menu's model (MVC pattern), responsible managing all data related to the menu.
 * Menu's controller is the only access into the model.
 * The only data on menu is the selection of the special weapon, which is given to battle via the front/main controller "game".
 * @summary model object for the menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";

/**
 * Encapsulated data object for menu
 */
var menuModelData = {
  selectedWeaponName: CONSTANTS.GAME.RADAR, // default
};

/**
 * Getter for the special-weapon's name
 * @returns string representing the selected weapon
 */
function getSelectedWeaponName() {
  return menuModelData.selectedWeaponName;
}

/**
 * Sets the special-weapon's name to a string value
 * @param {string} selectedWeapon
 */
function setSelectedWeaponName(selectedWeaponName) {
  menuModelData.selectedWeaponName = selectedWeaponName;
}

/**
 * Exported model for menu
 */
const MENU_MODEL = {
  getSelectedWeaponName: getSelectedWeaponName,
  setSelectedWeaponName: setSelectedWeaponName,
};
export { MENU_MODEL };
