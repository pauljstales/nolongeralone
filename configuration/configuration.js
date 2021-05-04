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
  STAR_MAX_HEIGHT: 3,
  STAR_MAX_WIDTH: 3,
  STAR_ROTATE_DEGREES: 60,
  TIME_PER_INTRO_TEXT: baseTime,
  TIME_UNTIL_TITLE_TEXT: baseTime * 5,
  TIME_UNTIL_TITLE_LINK_AS_BUTTON: baseTime * 6,
  TIME_PER_PROGRESS_BAR_INTERVAL: 1, // dev 2, prod 20
  BATTLE_FIRE_WEAPON_TIME: 1000, // 1 second
};

export { CONFIGURATION };
