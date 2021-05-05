/**
 * @fileoverview Battle's model (MVC pattern), responsible managing all data related to the battle.
 * Battle's controller is the only access into the model.
 * Battle is THE actual game portion, and most game-related data is here, with one or two exceptions.
 * @summary model object for the battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../../configuration/configuration.js";

/**
 * Encapsulated data for the battle
 */
var battleData = {
  specialWeapon: null,
  specialWeaponReadyForFire: null,
  isWeaponFireable: null,
  energy: null,
  time: null,
};

/**
 * Initializes the game values for a new game, setting energy and time to the configured values and allowing the user to fire the weapons.
 */
function initializeGameValues() {
  // special weapon set by another function
  battleData.specialWeaponReadyForFire = null;
  battleData.isWeaponFireable = true;
  battleData.energy = CONFIGURATION.BATTLE_ENERGY.ENERGY_INITIAL;
  battleData.time = CONFIGURATION.BATTLE_TIMING.BATTLE_TIME_INITIAL;
}

/**
 * Getter for the name of the special weapon
 * @returns the name of the special weapon
 */
function getSpecialWeapon() {
  return battleData.specialWeapon;
}

/**
 * Setter for the name of the special weapon
 * @param {string} specialWeapon
 */
function setSpecialWeapon(specialWeapon) {
  battleData.specialWeapon = specialWeapon;
}

/**
 * Returns whether or not the special weapon can be armed (null), is armed (true), or can no longer be armed because there is not enough energy or it was already fired (false)
 * @returns boolean concerning special weapon's fireable status
 */
function isSpecialWeaponReadyForFire() {
  return battleData.specialWeaponReadyForFire;
}

/**
 * The special weapon can no longer be fired because there is not enough energy, or it was already fired
 */
function setSpecialWeaponReadyForFireToFalse() {
  battleData.specialWeaponReadyForFire = false;
}

/**
 * Arms the special weapon for firing, and the next click will fire the special weapon (then the special weapon ready-to-fire will be false)
 */
function setSpecialWeaponReadyForFireToTrue() {
  battleData.specialWeaponReadyForFire = true;
}

/**
 * In order to keep players from spamming the fire key (and messing up the graphics, model, etc.) they can only fire every so often (controlled by configuration's BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME).
 * Before firing, this boolean is checked to determine if they can fire.
 * @returns boolean concerning if any weapon can be fired
 */
function isWeaponFireable() {
  //console.log("battleData.isWeaponFireable: " + battleData.isWeaponFireable);
  return battleData.isWeaponFireable;
}

/**
 * When a user fires a weapon, this is set to false.
 * A setTimeout for BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME is executed, and at the end of that time, this will be set to true again, allowing another shot.
 * @param {boolean} weaponFireableStatus
 */
function setWeaponFireable(weaponFireableStatus) {
  //console.log("Setting weaponFireableStatus: " + weaponFireableStatus);
  battleData.isWeaponFireable = weaponFireableStatus;
}

/**
 * Getter for energy (there is no setter, energy is initialized with the configuration value)
 * @returns number representing the energy remaining
 */
function getEnergy() {
  return battleData.energy;
}

/**
 * After successfully firing a shot, decrease the energy by this amount
 * @param {number} energyUsed
 */
function decreaseEnergy(energyUsed) {
  battleData.energy = battleData.energy - energyUsed;
}

/**
 * Getter for time (there is no setter, time is initialized with the configuration value)
 * @returns number representing the time remaining
 */
function getTime() {
  return battleData.time;
}

/**
 * As the game loop ticks by configuration's BATTLE_TIMING.TIME_PER_GAMELOOP, each loop decreases the time by that amount.
 * @param {number} timePassed
 */
function decreaseTime(timePassed) {
  battleData.time = battleData.time - timePassed;
}

function DEV_printBattleData() {
  console.log("specialWeapon: " + battleData.specialWeapon);
  console.log(
    "specialWeaponReadyForFire: " + battleData.specialWeaponReadyForFire
  );
  console.log("energy: " + battleData.energy);
  console.log("time: " + battleData.time);
  console.log("----------------------------------------");
}

/**
 * Exportable model for battle
 */
const BATTLE_MODEL = {
  getSpecialWeapon: getSpecialWeapon,
  setSpecialWeapon: setSpecialWeapon,
  isSpecialWeaponReadyForFire: isSpecialWeaponReadyForFire,
  setSpecialWeaponReadyForFireToTrue: setSpecialWeaponReadyForFireToTrue,
  setSpecialWeaponReadyForFireToFalse: setSpecialWeaponReadyForFireToFalse,
  isWeaponFireable: isWeaponFireable,
  setWeaponFireable: setWeaponFireable,
  getEnergy: getEnergy,
  decreaseEnergy: decreaseEnergy,
  getTime: getTime,
  decreaseTime: decreaseTime,
  initializeGameValues: initializeGameValues,
  DEV_printBattleData: DEV_printBattleData,
};
export { BATTLE_MODEL };
