/**
 * @fileoverview The model as part of the MVC design pattern, responsible for dealing with all data. May use local storage if needed.
 * @summary model object for the menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";

const MENU_MODEL = {
  getSelectedWeapon: getSelectedWeapon,
  setSelectedWeapon: setSelectedWeapon,
};

var menuModelData = {
  selectedWeapon: CONSTANTS.GAME.RADAR, // default
};

function getSelectedWeapon() {
  return menuModelData.selectedWeapon;
}

function setSelectedWeapon(selectedWeapon) {
  menuModelData.selectedWeapon = selectedWeapon;
}

export { MENU_MODEL };
