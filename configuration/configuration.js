/**
 * @fileoverview This file controls different settings in the game
 * @summary game-wide configuration
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

/**
 * Imports
 * */
import { CONSTANTS } from "../constants/constants.js";

/**
 * This "introTextBaseTime" variable determines the speed that the intro text comes on the introduction screen. All text is derived from this time.
 */
let introTextBaseTime = 3000; // dev 1000, prod 3000

const CONFIGURATION = {
  STAR: {
    AVERAGE_STAR_LIFETIME: 90000, // prod 90000
    VARIABLE_ADDITIONAL_STAR_LIFETIME: 30000, // prod 30000
    STAR_MAX_HEIGHT: 3, // prod 3
    STAR_MAX_WIDTH: 3, // prod 3
    STAR_ROTATE_DEGREES: 60, // prod 60
  },
  INTRO_TIMING: {
    TIME_PER_INTRO_TEXT: introTextBaseTime,
    TIME_UNTIL_TITLE_TEXT: introTextBaseTime * 5, // prod *5
    TIME_UNTIL_TITLE_LINK_AS_BUTTON: introTextBaseTime * 6, // prod *6
  },
  LANDING: {
    TIME_PER_PROGRESS_BAR_INTERVAL: 3, // dev 2, prod 20
  },
  BATTLE_TIMING: {
    BATTLE_TIME_INITIAL: 115000, // in ms, prod 115000
    BATTLE_FIRE_WEAPON_TIME: 2000, // 1s, must match battle.css firing animations
    TIME_PER_WARP: Math.ceil(3 + Math.random() * 3), // in ms, prod 4000-6000
    TIME_PER_GAMELOOP: 500, // in ms, prod 250, must equal 1000 at some point
  },
  BATTLE_ENERGY: {
    ENERGY_INITIAL: 20, // prod 20 - subject to change for game balance
    ENERGY_COST_LASER: 1, // prod 1 - subject to change for game balance
    ENERGY_COST_RADAR: 1, // prod 1 - subject to change for game balance
    ENERGY_COST_EMP: 2, // prod 2 - subject to change for game balance
    ENERGY_COST_PAUL: 4, // prod 4 - subject to change for game balance
    GET_SPECIAL_WEAPON_ENERGY_COST: getSpecialWeaponNameEnergyCost,
  },
  BATTLE_WEAPONS: {
    RADAR_DURATION: 1500, // prod 2000 - subject to change for game balance
    EMP_DURATION: 5000, // prod 3000 - subject to change for game balance
  },
};

/**
 * Menu allows for the choosing of a special weapon.
 * The name of that special weapon is passed to battle, but battle does not know the cost, only the name.
 * This allows battle to get the cost of a weapon, without having to pass that information around in other places.
 */
function getSpecialWeaponNameEnergyCost(specialWeapon) {
  let energyCostOfSpecialWeapon = -1;
  if (specialWeapon == CONSTANTS.GAME.RADAR) {
    energyCostOfSpecialWeapon = CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR;
  } else if (specialWeapon == CONSTANTS.GAME.EMP) {
    energyCostOfSpecialWeapon = CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP;
  } else if (specialWeapon == CONSTANTS.GAME.PAUL) {
    energyCostOfSpecialWeapon = CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL;
  }
  return energyCostOfSpecialWeapon;
}

export { CONFIGURATION };
