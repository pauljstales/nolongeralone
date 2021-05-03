/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
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
      BATTLE_VIEW.specialWeaponFire();
    }
  );
}

function registerBattleCellsViaEventDelegation() {
  CONSTANTS.HTML.BATTLE.BATTLEFIELD_GRID.TABLE_BATTLEFIELD.addEventListener(
    "click",
    (e) => {
      console.log("Who was clicked? ");
      console.log(e.target + ", " + e.target.id);
      fireStandardLaser(e.target.id);
    }
  );
}

function fireStandardLaser(cellID) {
  const standardLaserFire = document.createElement("div");
  standardLaserFire.classList.add("standard-laser");
  document.getElementById(cellID).appendChild(standardLaserFire);
  setTimeout(() => {
    document.getElementById(cellID).removeChild(standardLaserFire);
  }, 500);
}

function registerAllBattleEvents() {
  registerSpecialWeaponFireEventListener();
  registerBattleCellsViaEventDelegation();
}

/**
 * Exported Controller for Battle
 */
const BATTLE_CONTROLLER = {
  showBattleScreen: showBattleScreen,
  hideBattleScreen: hideBattleScreen,
  registerAllBattleEvents: registerAllBattleEvents,
};
export { BATTLE_CONTROLLER };
