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
import { endGame } from "../game/game.js";

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
 * Restart the game (from the credits screen) by resetting the view and model
 */
function restartGame() {
  BATTLE_VIEW.restartGame();
  BATTLE_MODEL.restartGame();
}

/**
 * Battle Loop
 */
function startBattleLoop() {
  initializeGameValues();

  let intervalID = setInterval(() => {
    //BATTLE_MODEL.DEV_printBattleData();

    updateTime();
    alienShipsAttemptToMove();

    checkIfGameOverFromTime(intervalID);
    checkIfGameOverFromEnergy(intervalID);
  }, CONFIGURATION.TIME_PER_GAMELOOP);
}

function checkIfGameOverFromEnergy(intervalID) {
  if (BATTLE_MODEL.getEnergy() == 0) {
    console.log("energy is exhausted, end the game on a loss");
    clearInterval(intervalID);
    endGame(CONSTANTS.GAME.LOSE);
  }
}

function checkIfGameOverFromTime(intervalID) {
  if (BATTLE_MODEL.getTime() == 0) {
    console.log("time is up, end the game on a loss");
    clearInterval(intervalID);
    endGame(CONSTANTS.GAME.LOSE);
  }
}

function alienShipsAttemptToMove() {
  //console.log("time per warp: " + CONFIGURATION.TIME_PER_WARP);
  //console.log("battle time: " + BATTLE_MODEL.getTime() / 1000);
  if ((BATTLE_MODEL.getTime() / 1000) % CONFIGURATION.TIME_PER_WARP == 0) {
    console.log("ships should warp now");
  }
}

function updateTime() {
  BATTLE_MODEL.decreaseTime(CONFIGURATION.TIME_PER_GAMELOOP);
  if (BATTLE_MODEL.getTime() % 1000 == 0) {
    BATTLE_VIEW.setTime(BATTLE_MODEL.getTime() / 1000);
  }
}

function initializeGameValues() {
  BATTLE_VIEW.setTime(CONFIGURATION.BATTLE_TIME_INITIAL / 1000);
  BATTLE_VIEW.setEnergy(CONFIGURATION.ENERGY_INITIAL);
  BATTLE_MODEL.setTime(CONFIGURATION.BATTLE_TIME_INITIAL);
  BATTLE_MODEL.setEnergy(CONFIGURATION.ENERGY_INITIAL);
  BATTLE_MODEL.setWeaponFireable(true);
}

/**
 * Fires a shot, either from the standard laser or one of the special weapons
 * @param {string} cellID
 */
function fireWeapon(cellID) {
  stopWeaponSounds();

  if (BATTLE_MODEL.getEnergy() == 0) {
    console.log("energy is exhausted, disable table, game loop will end it");
    CONSTANTS.HTML.BATTLE.BATTLEFIELD_TABLE.setAttribute("disabled", true);
    return;
  }

  let weaponType = CONSTANTS.GAME.LASER;
  let weaponSound = SOUND.SFX.BATTLE_BASIC_LASER_FIRE;
  let weaponEnergyCost = CONFIGURATION.ENERGY_COST_LASER;
  if (BATTLE_MODEL.isSpecialWeaponArmed()) {
    weaponType = BATTLE_MODEL.getSpecialWeapon();
    if (weaponType == CONSTANTS.GAME.RADAR) {
      weaponSound = SOUND.SFX.BATTLE_RADAR_FIRE;
      weaponEnergyCost = CONFIGURATION.ENERGY_COST_RADAR;
    } else if (weaponType == CONSTANTS.GAME.EMP) {
      weaponSound = SOUND.SFX.BATTLE_EMP_FIRE;
      weaponEnergyCost = CONFIGURATION.ENERGY_COST_EMP;
    } else if (weaponType == CONSTANTS.GAME.PAUL) {
      weaponSound = SOUND.SFX.BATTLE_PAUL_FIRE;
      weaponEnergyCost = CONFIGURATION.ENERGY_COST_PAUL;
    }
    BATTLE_MODEL.setSpecialWeaponArmedToFalse();
  }

  BATTLE_MODEL.decreaseEnergy(weaponEnergyCost);
  BATTLE_VIEW.setEnergy(BATTLE_MODEL.getEnergy());

  SOUND.playAudio(weaponSound);
  const weaponProjectile = document.createElement("div");
  weaponProjectile.classList.add(weaponType);
  document.getElementById(cellID).appendChild(weaponProjectile);
  setTimeout(() => {
    document.getElementById(cellID).removeChild(weaponProjectile);
    BATTLE_MODEL.setWeaponFireable(true);
  }, CONFIGURATION.BATTLE_FIRE_WEAPON_TIME);
}

function stopWeaponSounds() {
  SOUND.stopAudio(SOUND.SFX.BATTLE_BASIC_LASER_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
}

// -------------------------------------------------------------

/**
 * Registers the special weapon button.
 * Fires the weapon, changes the button color, and disables the button.
 * Also changes the model's data.
 */
function registerSpecialWeaponButtonEventListener() {
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.addEventListener(
    "click",
    () => {
      console.log("clicked the special weapon button");
      BATTLE_VIEW.specialWeaponArmed();
      BATTLE_MODEL.setSpecialWeaponArmedToTrue();
    }
  );
}

function registerBattleCellsViaEventDelegation() {
  CONSTANTS.HTML.BATTLE.BATTLEFIELD_TABLE.addEventListener("click", (e) => {
    if (BATTLE_MODEL.isWeaponFireable()) {
      fireWeapon(e.target.id);
      BATTLE_MODEL.setWeaponFireable(false);
    }
    setTimeout(() => {}, 1000);
  });
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
  startBattleLoop: startBattleLoop,
  restartGame: restartGame,
};
export { BATTLE_CONTROLLER };
