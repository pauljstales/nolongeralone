/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the landing screen's UI.
 * @summary view object for landing screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../../configuration/configuration.js";
import { CONSTANTS } from "../../constants/constants.js";

/**
 * Shows the battle screen
 */
function showBattleScreen() {
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Hides the battle screen
 */
function hideBattleScreen() {
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

/**
 * asd
 */
function restartGame() {
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_ENERGY_TEXT.innerText =
    CONFIGURATION.ENERGY_INITIAL;
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_TIMER_TEXT.innerText =
    CONFIGURATION.BATTLE_TIME_INITIAL / 1000;
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.remove(
    CONSTANTS.CSS.BUTTON_COLOR_DISABLED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.add(
    CONSTANTS.CSS.BUTTON_COLOR_RED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.removeAttribute("disabled");
}

/**
 * Changes the special weapon button from red to gray, and disables it
 */
function specialWeaponArmed() {
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.add(
    CONSTANTS.CSS.BUTTON_COLOR_DISABLED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.remove(
    CONSTANTS.CSS.BUTTON_COLOR_RED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.setAttribute(
    "disabled",
    true
  );
}

function setEnergy(currentEnergy) {
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_ENERGY_TEXT.innerText = currentEnergy;
}

function setTime(currentTime) {
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_TIMER_TEXT.innerText = currentTime;
}

/**
 * Exported View for Battle
 */
const BATTLE_VIEW = {
  showBattleScreen: showBattleScreen,
  hideBattleScreen: hideBattleScreen,
  specialWeaponArmed: specialWeaponArmed,
  setEnergy: setEnergy,
  setTime: setTime,
  restartGame: restartGame,
};
export { BATTLE_VIEW };
