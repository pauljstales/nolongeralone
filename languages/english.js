/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for English.
 * @summary English language file
 * @author Paul J Stales <https:twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const ENGLISH = {
  GAME_LOADING: "GAME LOADING",
  START_GAME: "START GAME",
  CREDITS: "CREDITS",
  OPTION_SELECT_LANGUAGE: "SELECT LANGUAGE",
  YEAR_2084: "The year is 2084",
  SETI_DETECTED: "SETI detected signals close to Earth",
  UN_LAUNCHED: "The UN launched spacecraft to investigate",
  SHORTLY_AFTER: "Shortly after launch, the UN spacecraft were destroyed",
  WE_ARE: "We are",
  SKIP_INTRO: "SKIP INTRO",
  NO_LONGER_ALONE: "no longer alone",
  PREPARE_FOR_BATTLE: "PREPARE FOR BATTLE",
  LIMITED_TIME_ENERGY:
    "We have limited time and energy. Earth's defense depends on your ability to click a grid quickly and accurately. Good luck.",
  MISSION_INFO:
    "MISSION INFO: The alien ships are cloaked, but, any damaged parts become visible. Ships can also move at random.",
  SELECT_SPECIAL_WEAPON: "Select Special Weapon",
  RADAR: "RADAR",
  EMP_BOMB: "EMP BOMB",
  TUTORIAL: "TUTORIAL",
  ENTER_BATTLE: "ENTER BATTLE",
  HOW_TO_PLAY: "HOW TO PLAY",
  HOW_TO_WIN: "HOW TO WIN",
  HOW_TO_LOSE: "HOW TO LOSE",
  WEAPONS: "WEAPONS",
  OTHER: "OTHER",
  MENU: "MENU",
  CLICK_BUTTON: "* Click a button above to learn more.",
  CLICK_SQUARE:
    "* Click a square on the battlefield grid to fire your laser weapon. It has a cooldown, so do not click too fast!",
  LIMITED_ENERGY:
    "* You have limited energy, and each laser shot takes 1 energy!",
  USING_SPECIAL_WEAPON:
    "* To fire your special weapon, first click the 'arm special weapon' button, then click the grid. Click 'weapons' to learn more.",
  GRID_APPEARS:
    "* The grid appears empty because the aliens are cloaked... hitting their ship will permanently reveal that part of the ship.",
  ALIENS_MOVE:
    "* Alien ships can MOVE! They might move into a cell you fired at previously!",
  TWO_SQUADS: "* There are two possible combinations of alien ships.",
  HSWOH: "* HSWOH squadron has 3 ships, of sizes 4, 3, and 2.",
  VTLNH: "* VTLNH squadron has 3 ships, all of size 3.",
  TO_WIN: "* To win, destroy all 3 ships before you run out of time or energy.",
  ALIENS_CHARGING:
    "* The aliens ships are charging some sort of energy bomb, which they will fire very soon.",
  RUN_OUT_OF:
    "* If you run out of energy/ammo, we cannot stop them from attacking, and we will lose.",
  ATTACK_SLOW:
    "* If you attack too slowly, they will fire their weapon, and we will lose.",
  ONLY_ENOUGH:
    "* There is only enough time to outfit your ship with one special weapon.",
  EACH_SPECIAL_WEAPON:
    "* Each special weapon does something different and costs different energy, but can only be fired once.",
  RADAR_USES:
    "* RADAR: Uses " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    " energy and will remove the alien ship cloaking for a short time.",
  EMP_USES:
    "* EMP Bomb: Uses " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    " energy and will stop the aliens from moving for a short time.",
  PAUL_USES:
    "* PAUL: The 'Plasma Arc Ultra Laser' uses " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    " energy and will destroy any ship it hits.",
  CAN_PAUSE:
    "* Can I Pause? NO. The aliens are coming to kill us all. Do you understand the severity of the situation?.",
  ADJUSTABLE_DIFF:
    "* Will there be adjustable difficultly? NO. The aliens are coming to kill us all, and will not go easy on us.",
  HIGH_SCORE: "* Will there be high scores? No plans at this time.",
  SEND_ME_MONEY:
    "* NO. Whatever it is, no. Unless you want to send me money. Then yes. Coffee and burgers are also accepted.",
  TIMER: "TIMER",
  ENERGY: "ENERGY",
  WEAPON_READY: "WEAPON READY",
  USE_SPECIAL_WEAPON: "USE SPECIAL WEAPON",
  VICTORY_TEXT:
    "Excellent work, Commander. With the aliens destroyed, we are once again alone, masters of this galaxy.",
  PROGRAMMING: "Concept / Code / CSS-Animation",
  ART: "Artwork / Music / Sound",
  OTHER_CREDITS: "Other Contributors: See readme.md",
  START_NEW_GAME: "START NEW GAME",
};

export { ENGLISH };
