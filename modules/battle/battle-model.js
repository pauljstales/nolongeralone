/**
 * @fileoverview The model as part of the MVC design pattern, responsible for dealing with all data. May use local storage if needed.
 * @summary model object for the battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { BATTLE_VIEW } from "/modules/battle/battle-view.js";
import { BATTLE_CONTROLLER } from "/modules/battle/battle-controller.js";
import { CONFIGURATION } from "../../configuration/configuration.js";

var battleData = {
  specialWeapon: null,
  specialWeaponArmed: null,
  energy: null,
  time: null,
  isWeaponFireable: null,
};

function restartGame() {
  battleData.specialWeapon = null;
  battleData.specialWeaponArmed = null;
  battleData.energy = null;
  battleData.time = null;
}

function isWeaponFireable() {
  console.log(
    "Asking if weapon is fireable, answer: " + battleData.isWeaponFireable
  );
  return battleData.isWeaponFireable;
}

function setWeaponFireable(weaponFireableStatus) {
  console.log(
    "Setting weapon fireable status, answer: " + weaponFireableStatus
  );
  battleData.isWeaponFireable = weaponFireableStatus;
}

function getSpecialWeapon() {
  return battleData.specialWeapon;
}

function setSpecialWeapon(specialWeapon) {
  battleData.specialWeapon = specialWeapon;
}

function isSpecialWeaponArmed() {
  return battleData.specialWeaponArmed;
}

function setSpecialWeaponArmedToFalse() {
  battleData.specialWeaponArmed = false;
}

function setSpecialWeaponArmedToTrue() {
  battleData.specialWeaponArmed = true;
}

function getEnergy() {
  return battleData.energy;
}

function setEnergy(energy) {
  battleData.energy = energy;
}

function decreaseEnergy(energyUsed) {
  battleData.energy = battleData.energy - energyUsed;
}

function getTime() {
  return battleData.time;
}

function setTime(time) {
  battleData.time = time;
}

function decreaseTime(timePassed) {
  battleData.time = battleData.time - timePassed;
}

function DEV_printBattleData() {
  console.log("specialWeapon: " + battleData.specialWeapon);
  console.log("specialWeaponArmed: " + battleData.specialWeaponArmed);
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
  isSpecialWeaponArmed: isSpecialWeaponArmed,
  setSpecialWeaponArmedToTrue: setSpecialWeaponArmedToTrue,
  setSpecialWeaponArmedToFalse: setSpecialWeaponArmedToFalse,
  isWeaponFireable: isWeaponFireable,
  setWeaponFireable: setWeaponFireable,
  getEnergy: getEnergy,
  setEnergy: setEnergy,
  decreaseEnergy: decreaseEnergy,
  getTime: getTime,
  setTime: setTime,
  decreaseTime: decreaseTime,
  restartGame: restartGame,
  DEV_printBattleData: DEV_printBattleData,
};
export { BATTLE_MODEL };
