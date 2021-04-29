/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { SOUND } from "../../sound/sound-manager.js";
import { BATTLE_MODEL } from "/modules/battle/battle-model.js";
import { BATTLE_VIEW } from "/modules/battle/battle-view.js";
import { STARFIELD } from "../starfield.js";

const BATTLE_CONTROLLER = {
  registerEventListeners: registerEventListeners,
};

function registerEventListeners() {
  registerSpecialWeaponFireEventListener();
}

function registerSpecialWeaponFireEventListener() {
  CONSTANTS.HTML.BATTLE.BUTTON_FIRE_SPECIAL_WEAPON.addEventListener(
    "click",
    () => {
      BATTLE_VIEW.specialWeaponFire();
      //SOUND.playAudio() // this needs to play the selected weapon
    }
  );
}

export { BATTLE_CONTROLLER };
