/**
 * @fileoverview This file controls different settings in the game
 * @summary game-wide configuration
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

let baseTime = 1; // dev 1000, prod 3000
//let baseTime = 3000; // dev 1000, prod 3000

const CONFIGURATION = {
  AVERAGE_STAR_LIFETIME: 60000, // prod 60000
  VARIABLE_ADDITIONAL_STAR_LIFETIME: 30000, // prod 30000
  STAR_MAX_HEIGHT: 3, // prod 3
  STAR_MAX_WIDTH: 3, // prod 3
  STAR_ROTATE_DEGREES: 60, // prod 60
  TIME_PER_INTRO_TEXT: baseTime,
  TIME_UNTIL_TITLE_TEXT: baseTime * 5, // prod *5
  TIME_UNTIL_TITLE_LINK_AS_BUTTON: baseTime * 6, // prod *6
  TIME_PER_PROGRESS_BAR_INTERVAL: 1, // dev 2, prod 20
  BATTLE_FIRE_WEAPON_TIME: 1000, // 1 second
  BATTLE_TIME_INITIAL: 115000, // in ms
  TIME_PER_WARP: Math.ceil(2 + Math.random() * 3), // in ms, prod 2000-4000
  TIME_PER_GAMELOOP: 500, // in ms, prod 250, must equal 1000 at some point
  ENERGY_COST_LASER: 1, // prod 1
  ENERGY_COST_RADAR: 0, // prod 0
  ENERGY_COST_EMP: 1, // prod 1
  ENERGY_COST_PAUL: 2, // prod 2
  ENERGY_INITIAL: 1000, // prod 24
};

export { CONFIGURATION };
