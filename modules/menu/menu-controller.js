/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { MENU_MODEL } from "/modules/menu/menu-model.js";
import { MENU_VIEW } from "/modules/menu/menu-view.js";

/**
 * Exportable controller for the menu screen
 */
const MENU_CONTROLLER = {
  showMenuScreen: showMenuScreen,
  hideMenuScreen: hideMenuScreen,
  highlightWeaponSelectedButton: highlightWeaponSelectedButton,
  getSelectedWeapon: getSelectedWeapon,
  setSelectedWeapon: setSelectedWeapon,
};

function showMenuScreen() {
  MENU_VIEW.showMenuScreen();
}

function hideMenuScreen() {
  MENU_VIEW.hideMenuScreen();
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

export { MENU_CONTROLLER };
