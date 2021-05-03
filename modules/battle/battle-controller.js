/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { BATTLE_MODEL } from "/modules/battle/battle-model.js";
import { BATTLE_VIEW } from "/modules/battle/battle-view.js";

/**
 * Shows the battle screen
 */
function showBattleScreen() {
  BATTLE_VIEW.showBattleScreen();
}

/**
 * Hides the battle screen
 */
function hideBattleScreen() {
  BATTLE_VIEW.hideBattleScreen();
}

/**
 * Registers the special weapon button.
 * Fires the weapon, changes the button color, and disables the button.
 * Also changes the model's data.
 */
function registerSpecialWeaponFireEventListener() {
  CONSTANTS.HTML.BATTLE.BUTTON_FIRE_SPECIAL_WEAPON.addEventListener(
    "click",
    () => {
      BATTLE_CONTROLLER.specialWeaponFire();
      //SOUND.playAudio() // this needs to play the selected weapon
    }
  );
}

function registerAllBattleEvents() {
  registerSpecialWeaponFireEventListener();
}

/**
 * Exported Controller for Battle
 */
const BATTLE_CONTROLLER = {
  showBattleScreen: showBattleScreen,
  hideBattleScreen: hideBattleScreen,
  registerAllBattleEvents: registerAllBattleEvents,
  specialWeaponFire: specialWeaponFire,
};
export { BATTLE_CONTROLLER };
