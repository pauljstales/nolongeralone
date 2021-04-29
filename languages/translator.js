/**
 * @fileoverview
 * Whenever the select_language <select> element changes, its event handler calls this translator's function translateIntoLanguage with the selected language.
 * English is selected as the default language.
 * The translator then injected the text of the chosen language into the HTML.
 * @summary translates game into selected language
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../constants/constants.js";
import { ENGLISH } from "./english.js";
/*
import { CHINESE }  from "./chinese.js";
import { HINDI }  from "./hindi.js";
import { SPANISH }  from "./spanish.js";
import { FRENCH }  from "./french.js";
import { ARABIC }  from "./arabic.js";
import { RUSSIAN }  from "./russian.js";
import { PORTUGUESE }  from "./portuguese.js";
import { JAPANESE }  from "./japanese.js";
import { GERMAN }  from "./german.js";
*/

export function translateIntoLanguage(language) {
  let CHOSEN_LANGUAGE_MODULE = null;

  console.log("wtf is language: " + language);

  if (language == "english") {
    CHOSEN_LANGUAGE_MODULE = ENGLISH;
  } else if (language == "chinese") {
    CHOSEN_LANGUAGE_MODULE = CHINESE;
  } else if (language == "hindi") {
    CHOSEN_LANGUAGE_MODULE = HINDI;
  } else if (language == "spanish") {
    CHOSEN_LANGUAGE_MODULE = SPANISH;
  } else if (language == "french") {
    CHOSEN_LANGUAGE_MODULE = FRENCH;
  } else if (language == "arabic") {
    CHOSEN_LANGUAGE_MODULE = ARABIC;
  } else if (language == "russian") {
    CHOSEN_LANGUAGE_MODULE = RUSSIAN;
  } else if (language == "portuguese") {
    CHOSEN_LANGUAGE_MODULE = PORTUGUESE;
  } else if (language == "japanese") {
    CHOSEN_LANGUAGE_MODULE = JAPANESE;
  } else if (language == "german") {
    CHOSEN_LANGUAGE_MODULE = GERMAN;
  } else {
    CHOSEN_LANGUAGE_MODULE = ENGLISH;
  }

  /* Landing */
  CONSTANTS.HTML.LANDING.LABEL_PROGRESS_BAR.innerText =
    CHOSEN_LANGUAGE_MODULE.GAME_LOADING;
  CONSTANTS.HTML.LANDING.BUTTON_START_GAME.innerText =
    CHOSEN_LANGUAGE_MODULE.START_GAME;
  CONSTANTS.HTML.LANDING.BUTTON_SHOW_CREDITS.innerText =
    CHOSEN_LANGUAGE_MODULE.CREDITS;
  CONSTANTS.HTML.LANDING.OPTION_SELECT_LANGUAGE.innerText =
    CHOSEN_LANGUAGE_MODULE.OPTION_SELECT_LANGUAGE;

  /* intro */
  CONSTANTS.HTML.INTRO.INTRO_TEXT_1.innerText =
    CHOSEN_LANGUAGE_MODULE.YEAR_2084;
  CONSTANTS.HTML.INTRO.INTRO_TEXT_2.innerText =
    CHOSEN_LANGUAGE_MODULE.SETI_DETECTED;
  CONSTANTS.HTML.INTRO.INTRO_TEXT_3.innerText =
    CHOSEN_LANGUAGE_MODULE.UN_LAUNCHED;
  CONSTANTS.HTML.INTRO.INTRO_TEXT_4.innerText =
    CHOSEN_LANGUAGE_MODULE.SHORTLY_AFTER;
  CONSTANTS.HTML.INTRO.INTRO_TEXT_5.innerText = CHOSEN_LANGUAGE_MODULE.WE_ARE;
  CONSTANTS.HTML.INTRO.BUTTON_SKIP_INTRO.innerText =
    CHOSEN_LANGUAGE_MODULE.SKIP_INTRO;
  CONSTANTS.HTML.INTRO.INTRO_TEXT_6.innerText =
    CHOSEN_LANGUAGE_MODULE.NO_LONGER_ALONE;
  CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.innerText =
    CHOSEN_LANGUAGE_MODULE.PREPARE_FOR_BATTLE;

  /* menu */

  CONSTANTS.HTML.MENU.MENU_TEXT_SUBTITLES.innerText =
    CHOSEN_LANGUAGE_MODULE.LIMITED_TIME_ENERGY;
  CONSTANTS.HTML.MENU.MENU_TEXT_MISSION.innerText =
    CHOSEN_LANGUAGE_MODULE.MISSION_INFO;
  CONSTANTS.HTML.MENU.CHOOSE_SPECIAL_WEAPON.innerText =
    CHOSEN_LANGUAGE_MODULE.SELECT_SPECIAL_WEAPON;
  CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR.innerText =
    CHOSEN_LANGUAGE_MODULE.RADAR;
  CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP.innerText =
    CHOSEN_LANGUAGE_MODULE.EMP_BOMB;
  CONSTANTS.HTML.MENU.BUTTON_START_TUTORIAL.innerText =
    CHOSEN_LANGUAGE_MODULE.TUTORIAL;
  CONSTANTS.HTML.MENU.BUTTON_START_BATTLE.innerText =
    CHOSEN_LANGUAGE_MODULE.ENTER_BATTLE;

  /* tutorial */

  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_PLAY.innerText =
    CHOSEN_LANGUAGE_MODULE.HOW_TO_PLAY;
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_WIN.innerText =
    CHOSEN_LANGUAGE_MODULE.HOW_TO_WIN;
  CONSTANTS.HTML.TUTORIAL.BUTTON_HOW_TO_LOSE.innerText =
    CHOSEN_LANGUAGE_MODULE.HOW_TO_LOSE;
  CONSTANTS.HTML.TUTORIAL.BUTTON_SPECIAL_WEAPONS.innerText =
    CHOSEN_LANGUAGE_MODULE.WEAPONS;
  CONSTANTS.HTML.TUTORIAL.BUTTON_OTHER.innerText = CHOSEN_LANGUAGE_MODULE.OTHER;
  CONSTANTS.HTML.TUTORIAL.BUTTON_RETURN_TO_MENU.innerText =
    CHOSEN_LANGUAGE_MODULE.MENU;
  CONSTANTS.HTML.TUTORIAL.TUTORIAL_TEXT_DEFAULT.innerText =
    CHOSEN_LANGUAGE_MODULE.CLICK_BUTTON;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTP1.innerText =
    CHOSEN_LANGUAGE_MODULE.CLICK_SQUARE;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTP2.innerText =
    CHOSEN_LANGUAGE_MODULE.LIMITED_ENERGY;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTP3.innerText =
    CHOSEN_LANGUAGE_MODULE.CLICK_WEAPONS;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTP4.innerText =
    CHOSEN_LANGUAGE_MODULE.GRID_APPEARS;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTP5.innerText =
    CHOSEN_LANGUAGE_MODULE.ALIENS_MOVE;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTW1.innerText =
    CHOSEN_LANGUAGE_MODULE.TWO_SQUADS;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTW2.innerText =
    CHOSEN_LANGUAGE_MODULE.HSWOH;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTW3.innerText =
    CHOSEN_LANGUAGE_MODULE.VTLNH;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTW4.innerText =
    CHOSEN_LANGUAGE_MODULE.TO_WIN;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTL1.innerText =
    CHOSEN_LANGUAGE_MODULE.ALIENS_CHARGING;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTL2.innerText =
    CHOSEN_LANGUAGE_MODULE.RUN_OUT_OF;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_HTL3.innerText =
    CHOSEN_LANGUAGE_MODULE.ATTACK_SLOW;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_WEP1.innerText =
    CHOSEN_LANGUAGE_MODULE.ONLY_ENOUGH;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_WEP2.innerText =
    CHOSEN_LANGUAGE_MODULE.EACH_SPECIAL_WEAPON;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_WEP3.innerText =
    CHOSEN_LANGUAGE_MODULE.RADAR_USES;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_WEP4.innerText =
    CHOSEN_LANGUAGE_MODULE.EMP_USES;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_WEP5.innerText =
    CHOSEN_LANGUAGE_MODULE.PAUL_USES;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_OTH1.innerText =
    CHOSEN_LANGUAGE_MODULE.CAN_PAUSE;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_OTH2.innerText =
    CHOSEN_LANGUAGE_MODULE.ADJUSTABLE_DIFF;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_OTH3.innerText =
    CHOSEN_LANGUAGE_MODULE.HIGH_SCORE;
  CONSTANTS.HTML.TUTORIAL.TUT_TEXT_OTH4.innerText =
    CHOSEN_LANGUAGE_MODULE.SEND_ME_MONEY;

  /* battle */

  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_SHOT_STATUS_TITLE.innerText =
    CHOSEN_LANGUAGE_MODULE.SHOT_STATUS;
  CONSTANTS.HTML.BATTLE.BTSST_HIT.innerText = CHOSEN_LANGUAGE_MODULE.HIT;
  CONSTANTS.HTML.BATTLE.BTSST_MISS.innerText = CHOSEN_LANGUAGE_MODULE.MISS;
  CONSTANTS.HTML.BATTLE.BTSST_AT.innerText = CHOSEN_LANGUAGE_MODULE.AT;
  CONSTANTS.HTML.BATTLE.BTSST_COORDINATES.innerText =
    CHOSEN_LANGUAGE_MODULE.COORDINATES;
  CONSTANTS.HTML.BATTLE.BTSST_THE.innerText = CHOSEN_LANGUAGE_MODULE.THE;
  CONSTANTS.HTML.BATTLE.BTSST_SHIP.innerText =
    CHOSEN_LANGUAGE_MODULE.ALIEN_SHIP_STATUS;
  CONSTANTS.HTML.BATTLE.BTSST_DAMAGED.innerText =
    CHOSEN_LANGUAGE_MODULE.DAMAGED;
  CONSTANTS.HTML.BATTLE.BTSST_DESTROYED.innerText =
    CHOSEN_LANGUAGE_MODULE.DESTROYED;
  CONSTANTS.HTML.BATTLE.BTSST_SPECIAL_WEAPON_SELECTED.innerText =
    CHOSEN_LANGUAGE_MODULE.SW_SELECTED;
  CONSTANTS.HTML.BATTLE.BTSST_SPECIAL_WEAPON_FIRED.innerText =
    CHOSEN_LANGUAGE_MODULE.SW_FIRED;
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_TIMER_TITLE.innerText =
    CHOSEN_LANGUAGE_MODULE.TIMER;
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_ENERGY_TITLE.innerText =
    CHOSEN_LANGUAGE_MODULE.ENERGY;
  CONSTANTS.HTML.BATTLE.BUTTON_FIRE_SPECIAL_WEAPON.innerText =
    CHOSEN_LANGUAGE_MODULE.FIRE_SW;

  /* credits */
  CONSTANTS.HTML.CREDITS.CREDITS_TEXT_PROGRAMMING.innerText =
    CHOSEN_LANGUAGE_MODULE.PROGRAMMING;
  CONSTANTS.HTML.CREDITS.CREDITS_TEXT_ART.innerText =
    CHOSEN_LANGUAGE_MODULE.ART;
  CONSTANTS.HTML.CREDITS.CREDITS_TEXT_OTHERS.innerText =
    CHOSEN_LANGUAGE_MODULE.OTHER_CREDITS;
  CONSTANTS.HTML.CREDITS.BUTTON_START_NEW_GAME.innerText =
    CHOSEN_LANGUAGE_MODULE.START_NEW_GAME;
}
