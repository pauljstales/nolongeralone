/**
 * @fileoverview The model as part of the MVC design pattern, responsible for dealing with all data. May use local storage if needed.
 * @summary model object for the battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { BATTLE_VIEW } from "/modules/battle/battle-view.js";
import { BATTLE_CONTROLLER } from "/modules/battle/battle-controller.js";

const BATTLE_MODEL = {
  getSpecialWeapon: getSpecialWeapon,
  setSpecialWeapon: setSpecialWeapon,
};

var battleData = {
  specialWeapon: null,
};

function getSpecialWeapon() {
  return battleData.specialWeapon;
}

function setSpecialWeapon(specialWeapon) {
  battleData.specialWeapon = specialWeapon;
}

export { BATTLE_MODEL };
