/**
 * @fileoverview Controller of the MVC pattern, responsible for dealing with user interactions, and coordinating updates with the model and view.
 * @summary controller object for battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { BATTLE_MODEL } from "/modules/battle/battle-model.js";
import { BATTLE_VIEW } from "/modules/battle/battle-view.js";
import { SOUND } from "../../sound/sound-manager.js";
import { CONFIGURATION } from "../../configuration/configuration.js";

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
 * Sets the special weapon
 */
function setSpecialWeapon(specialWeapon) {
  BATTLE_MODEL.setSpecialWeapon(specialWeapon);
}

/**
 * Registers the special weapon button.
 * Fires the weapon, changes the button color, and disables the button.
 * Also changes the model's data.
 */
function registerSpecialWeaponButtonEventListener() {
  CONSTANTS.HTML.BATTLE.BUTTON_FIRE_SPECIAL_WEAPON.addEventListener(
    "click",
    () => {
      BATTLE_VIEW.specialWeaponArmed();
      BATTLE_MODEL.setSpecialWeaponArmedToTrue();
    }
  );
}

function registerBattleCellsViaEventDelegation() {
  CONSTANTS.HTML.BATTLE.BATTLEFIELD_GRID.TABLE_BATTLEFIELD.addEventListener(
    "click",
    (e) => {
      fireWeapon(e.target.id);
    }
  );
}

function fireWeapon(cellID) {
  stopWeaponSounds();
  let weaponType = "standard-laser";
  let weaponSound = SOUND.SFX.BATTLE_BASIC_LASER_FIRE;
  if (BATTLE_MODEL.isSpecialWeaponArmed()) {
    weaponType = BATTLE_MODEL.getSpecialWeapon();
    if (weaponType == CONSTANTS.GAME.RADAR) {
      weaponSound = SOUND.SFX.BATTLE_RADAR_FIRE;
    } else if (weaponType == CONSTANTS.GAME.EMP) {
      weaponSound = SOUND.SFX.BATTLE_EMP_FIRE;
    } else if (weaponType == CONSTANTS.GAME.PAUL) {
      weaponSound = SOUND.SFX.BATTLE_PAUL_FIRE;
    }
    BATTLE_MODEL.setSpecialWeaponArmedToFalse();
  }

  SOUND.playAudio(weaponSound);
  const weaponProjectile = document.createElement("div");
  weaponProjectile.classList.add(weaponType);
  document.getElementById(cellID).appendChild(weaponProjectile);
  setTimeout(() => {
    document.getElementById(cellID).removeChild(weaponProjectile);
  }, CONFIGURATION.BATTLE_FIRE_WEAPON_TIME);
}

function stopWeaponSounds() {
  SOUND.stopAudio(SOUND.SFX.BATTLE_BASIC_LASER_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
}

function registerInternalBattleEvents() {
  registerSpecialWeaponButtonEventListener();
  registerBattleCellsViaEventDelegation();
}

/**
 * Exported Controller for Battle
 */
const BATTLE_CONTROLLER = {
  showBattleScreen: showBattleScreen,
  hideBattleScreen: hideBattleScreen,
  registerInternalBattleEvents: registerInternalBattleEvents,
  setSpecialWeapon: setSpecialWeapon,
};
export { BATTLE_CONTROLLER };
