/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the landing screen's UI.
 * @summary view object for landing screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { BATTLE_MODEL } from "/modules/battle/battle-model.js";
import { BATTLE_CONTROLLER } from "/modules/battle/battle-controller.js";

const BATTLE_VIEW = {
  specialWeaponFire: specialWeaponFire,
};

function specialWeaponFire() {
  CONSTANTS.HTML.BATTLE.BUTTON_SPECIAL_WEAPON.classList.add(
    CONSTANTS.CSS.BUTTON_COLOR_DISABLED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_SPECIAL_WEAPON.classList.remove(
    CONSTANTS.CSS.BUTTON_COLOR_DEFAULT
  );
}

export { BATTLE_VIEW };
