/**
 * @fileoverview This file controls different settings in the game
 * @summary game-wide configuration
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../constants/constants.js";

/**
 * This "introTextBaseTime" variable determines the speed that the intro text comes on the introduction screen. All intro text is derived from this time.
 */
let introTextBaseTime = 3000; // prod 3000

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
    TIME_PER_PROGRESS_BAR_INTERVAL: 20, // prod 20
  },
  BATTLE_TIMING: {
    BATTLE_TIME_INITIAL: 116000, // in ms, prod 116000
    BATTLE_FIRE_WEAPON_TIME: 2000, // 2s, must match battle.css animations
    TIME_PER_WARP: Math.ceil(3 + Math.random() * 3), // in ms, prod 4000-6000
    TIME_PER_GAMELOOP: 1000, // prod 1000
    TIME_UNTIL_RESULTS_SCREEN: 3000, // prod 3000
    TIME_UNTIL_CREDITS_SCREEN: 5000, // prod 5000
  },
  BATTLE_ENERGY: {
    ENERGY_INITIAL: 27, // prod 27 - subject to change for game balance
    ENERGY_COST_LASER: 1, // prod 1 - subject to change for game balance
    ENERGY_COST_RADAR: 5, // prod 5 - subject to change for game balance
    ENERGY_COST_EMP: 3, // prod 3 - subject to change for game balance
    ENERGY_COST_PAUL: 7, // prod 7 - subject to change for game balance
    GET_SPECIAL_WEAPON_ENERGY_COST: getSpecialWeaponNameEnergyCost,
  },
  BATTLE_WEAPONS: {
    RADAR_DURATION: 2000, // prod 2000 - subject to change for game balance
    EMP_DURATION: 5000, // prod 5000 - subject to change for game balance
  },
};

/**
 * Menu allows for the choosing of a special weapon.
 * The name of that special weapon is passed to battle, but battle does not know the cost, only the name.
 * This allows battle to get the cost of a weapon, without having to pass that information around in other places.
 * @param {string} specialWeapon the name of the special weapon
 * @returns number the energy cost of the weapon
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
