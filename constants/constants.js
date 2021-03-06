/**
 * @fileoverview This file is for all entities that can be referred to via constants rather than hard-coded strings
 * @summary game-wide constants
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */
/**
 * This constants object will be used throughout the game to allow JavaScript
 * code to refer to HTML, CSS, Battlefield, or game itself from one central
 * object, rather than hard-coded strings.
 */
const CONSTANTS = {
  HTML: {
    STARFIELD: document.getElementById("STARFIELD"),
    LANDING: {
      SCREEN_LANDING: document.getElementById("SCREEN_LANDING"),
      SCREEN_LANDING_PART_1: document.getElementById("SCREEN_LANDING_PART_1"),
      LABEL_PROGRESS_BAR: document.getElementById("LABEL_PROGRESS_BAR"),
      SCREEN_PROGRESS_BAR: document.getElementById("SCREEN_PROGRESS_BAR"),
      SCREEN_LANDING_PART_2: document.getElementById("SCREEN_LANDING_PART_2"),
      BUTTON_START_GAME: document.getElementById("BUTTON_START_GAME"),
      BUTTON_SHOW_CREDITS: document.getElementById("BUTTON_SHOW_CREDITS"),
      SELECT_LANGUAGE: document.getElementById("SELECT_LANGUAGE"),
      OPTION_SELECT_LANGUAGE: document.getElementById("OPTION_SELECT_LANGUAGE"),
    },
    INTRO: {
      SCREEN_INTRO: document.getElementById("SCREEN_INTRO"),
      SCREEN_INTRO_PART_1: document.getElementById("SCREEN_INTRO_PART_1"),
      INTRO_TEXT_1: document.getElementById("INTRO_TEXT_1"),
      INTRO_TEXT_2: document.getElementById("INTRO_TEXT_2"),
      INTRO_TEXT_3: document.getElementById("INTRO_TEXT_3"),
      INTRO_TEXT_4: document.getElementById("INTRO_TEXT_4"),
      INTRO_TEXT_5: document.getElementById("INTRO_TEXT_5"),
      BUTTON_SKIP_INTRO: document.getElementById("BUTTON_SKIP_INTRO"),
      SCREEN_INTRO_PART_2: document.getElementById("SCREEN_INTRO_PART_2"),
      INTRO_TEXT_6: document.getElementById("INTRO_TEXT_6"),
      BUTTON_PREPAREFORBATTLE: document.getElementById(
        "BUTTON_PREPAREFORBATTLE"
      ),
    },
    MENU: {
      SCREEN_MENU: document.getElementById("SCREEN_MENU"),
      MENU_TEXT_SUBTITLES: document.getElementById("MENU_TEXT_SUBTITLES"),
      MENU_TEXT_MISSION: document.getElementById("MENU_TEXT_MISSION"),
      CHOOSE_SPECIAL_WEAPON: document.getElementById("CHOOSE_SPECIAL_WEAPON"),
      BUTTON_SELECT_RADAR: document.getElementById("BUTTON_SELECT_RADAR"),
      BUTTON_SELECT_EMP: document.getElementById("BUTTON_SELECT_EMP"),
      BUTTON_SELECT_PAUL: document.getElementById("BUTTON_SELECT_PAUL"),
      BUTTON_START_TUTORIAL: document.getElementById("BUTTON_START_TUTORIAL"),
      BUTTON_START_BATTLE: document.getElementById("BUTTON_START_BATTLE"),
    },
    TUTORIAL: {
      SCREEN_TUTORIAL: document.getElementById("SCREEN_TUTORIAL"),
      BUTTON_HOW_TO_PLAY: document.getElementById("BUTTON_HOW_TO_PLAY"),
      BUTTON_HOW_TO_WIN: document.getElementById("BUTTON_HOW_TO_WIN"),
      BUTTON_HOW_TO_LOSE: document.getElementById("BUTTON_HOW_TO_LOSE"),
      BUTTON_SPECIAL_WEAPONS: document.getElementById("BUTTON_SPECIAL_WEAPONS"),
      BUTTON_OTHER: document.getElementById("BUTTON_OTHER"),
      BUTTON_RETURN_TO_MENU: document.getElementById("BUTTON_RETURN_TO_MENU"),
      TUTORIAL_TEXT_DEFAULT: document.getElementById("TUTORIAL_TEXT_DEFAULT"),
      TUTORIAL_TEXT_HOWTOPLAY: document.getElementById(
        "TUTORIAL_TEXT_HOWTOPLAY"
      ),
      TUT_TEXT_HTP1: document.getElementById("TUT_TEXT_HTP1"),
      TUT_TEXT_HTP2: document.getElementById("TUT_TEXT_HTP2"),
      TUT_TEXT_HTP3: document.getElementById("TUT_TEXT_HTP3"),
      TUT_TEXT_HTP4: document.getElementById("TUT_TEXT_HTP4"),
      TUT_TEXT_HTP5: document.getElementById("TUT_TEXT_HTP5"),
      TUTORIAL_TEXT_HOWTOWIN: document.getElementById("TUTORIAL_TEXT_HOWTOWIN"),
      TUT_TEXT_HTW1: document.getElementById("TUT_TEXT_HTW1"),
      TUT_TEXT_HTW2: document.getElementById("TUT_TEXT_HTW2"),
      TUT_TEXT_HTW3: document.getElementById("TUT_TEXT_HTW3"),
      TUT_TEXT_HTW4: document.getElementById("TUT_TEXT_HTW4"),
      TUTORIAL_TEXT_HOWTOLOSE: document.getElementById(
        "TUTORIAL_TEXT_HOWTOLOSE"
      ),
      TUT_TEXT_HTL1: document.getElementById("TUT_TEXT_HTL1"),
      TUT_TEXT_HTL2: document.getElementById("TUT_TEXT_HTL2"),
      TUT_TEXT_HTL3: document.getElementById("TUT_TEXT_HTL3"),
      TUTORIAL_TEXT_WEAPONS: document.getElementById("TUTORIAL_TEXT_WEAPONS"),
      TUT_TEXT_WEP1: document.getElementById("TUT_TEXT_WEP1"),
      TUT_TEXT_WEP2: document.getElementById("TUT_TEXT_WEP2"),
      TUT_TEXT_WEP3: document.getElementById("TUT_TEXT_WEP3"),
      TUT_TEXT_WEP4: document.getElementById("TUT_TEXT_WEP4"),
      TUT_TEXT_WEP5: document.getElementById("TUT_TEXT_WEP5"),
      TUTORIAL_TEXT_OTHER: document.getElementById("TUTORIAL_TEXT_OTHER"),
      TUT_TEXT_OTH1: document.getElementById("TUT_TEXT_OTH1"),
      TUT_TEXT_OTH2: document.getElementById("TUT_TEXT_OTH2"),
      TUT_TEXT_OTH3: document.getElementById("TUT_TEXT_OTH3"),
      TUT_TEXT_OTH4: document.getElementById("TUT_TEXT_OTH4"),
    },
    BATTLE: {
      SCREEN_BATTLE: document.getElementById("SCREEN_BATTLE"),
      BATTLEFIELD_TABLE: document.getElementById("BATTLEFIELD_TABLE"),
      SCREEN_BATTLE_VICTORY: document.getElementById("SCREEN_BATTLE_VICTORY"),
      SCREEN_BATTLE_DEFEAT: document.getElementById("SCREEN_BATTLE_DEFEAT"),
      BATTLE_TEXT_TIMER_TITLE: document.getElementById(
        "BATTLE_TEXT_TIMER_TITLE"
      ),
      BATTLE_TEXT_TIMER_TEXT: document.getElementById("BATTLE_TEXT_TIMER_TEXT"),
      BATTLE_TEXT_ENERGY_TITLE: document.getElementById(
        "BATTLE_TEXT_ENERGY_TITLE"
      ),
      BATTLE_TEXT_ENERGY_TEXT: document.getElementById(
        "BATTLE_TEXT_ENERGY_TEXT"
      ),
      BATTLE_TEXT_IS_WEAPON_READY: document.getElementById(
        "BATTLE_TEXT_IS_WEAPON_READY"
      ),
      BATTLE_TEXT_WEAPON_READY_INDICATOR: document.getElementById(
        "BATTLE_TEXT_WEAPON_READY_INDICATOR"
      ),
      BUTTON_ARM_SPECIAL_WEAPON: document.getElementById(
        "BUTTON_ARM_SPECIAL_WEAPON"
      ),
      SCREEN_BATTLE_VICTORY_TEXT: document.getElementById(
        "SCREEN_BATTLE_VICTORY_TEXT"
      ),
    },
    CREDITS: {
      SCREEN_CREDITS: document.getElementById("SCREEN_CREDITS"),

      SCREEN_CREDITS_GAME_OVER_IMAGE: document.getElementById(
        "SCREEN_CREDITS_GAME_OVER_IMAGE"
      ),
      CREDITS_TEXT_PROGRAMMING: document.getElementById(
        "CREDITS_TEXT_PROGRAMMING"
      ),
      CREDITS_TEXT_ART: document.getElementById("CREDITS_TEXT_ART"),
      CREDITS_TEXT_OTHERS: document.getElementById("CREDITS_TEXT_OTHERS"),
      BUTTON_START_NEW_GAME: document.getElementById("BUTTON_START_NEW_GAME"),
    },
  },
  IMAGES: {
    SCREEN_CREDITS_IMAGE_VICTORYMEDAL: "/images/victory-medal.png",
    SCREEN_CREDITS_IMAGE_GAMEOVERALTCLEAR: "/images/game-over-alt-clear.png",
    SCREEN_CREDITS_IMAGE_PEWPEWSQUARE: "/images/pewpew-square-green.png",
  },
  CSS: {
    SCREEN_DISPLAY_BLOCK: "screen--display--block",
    SCREEN_DISPLAY_NONE: "screen--display--none",
    SCREEN: "screen",
    SCREEN_DISPLAY_FLEXROW: "screen--display--flexRow",
    SCREEN_DISPLAY_FLEXCOL: "screen--display--flexCol",
    SCREEN_DISPLAY_GRID: "screen--display--grid",
    SCREEN_DISPLAY_NONE: "screen--display--none",
    SCREEN_DISPLAY_BLOCK: "screen--display--block",
    SCREEN_OPACITY_HIDE: "screen--opacity--hide",
    SCREEN_OPACITY_SHOW: "screen--opacity--show",
    SCREEN_TEXT: "screen__text",
    SCREEN_TEXT_SIZE_EXTRA_LARGE: "screen__text--size--extra-large",
    SCREEN_TEXT_SIZE_LARGE: "screen__text--size--large",
    SCREEN_TEXT_SIZE_MEDIUM: "screen__text--size--medium",
    SCREEN_TEXT_SIZE_SMALL: "screen__text--size--small",
    SCREEN_TEXT_SIZE_EXTRA_SMALL: "screen__text--size--extra-small",
    BUTTON: "button",
    BUTTON_COLOR_DEFAULT: "button--color--default",
    BUTTON_COLOR_DEFAULT_SELECTED: "button--color--default-selected",
    BUTTON_COLOR_LIGHTGRAYBLACK: "button--color--lightgrayblack",
    BUTTON_COLOR_DISABLED: "button--color--disabled",
    BUTTON_COLOR_RED: "button--color--red",
    BUTTON_COLOR_RED_INVERSE: "button--color--red-inverse",
    BUTTON_TEXT_SIZE_EXTRA_LARGE: "button__text--size--extra-large",
    BUTTON_TEXT_SIZE_LARGE: "button__text--size--large",
    BUTTON_TEXT_SIZE_MEDIUM: "button__text--size--medium",
    BUTTON_TEXT_SIZE_EXTRA_SMALL: "button__text--size---extra-small",
    BUTTON_WIDTH_96: "button--width--96",
    BUTTON_WIDTH_84: "button--width--84",
    BUTTON_WIDTH_72: "button--width--72",
    BUTTON_WIDTH_60: "button--width--60",
    BUTTON_WIDTH_48: "button--width--48",
    BUTTON_WIDTH_36: "button--width--36",
    SCREEN_IMAGE_PEWPEW: "screen__image-pewpew",
    SCREEN_PROGRESS_BAR: "screen__progress-bar",
    SCREEN_LANDING_BOTTOM: "screen-landing__bottom",
    SCREEN_TEXT_MARGINBOTTOM_MEDIUM: "screen__text--marginbottom-medium",
    SCREEN_TEXT_OPACITY_NONE: "screen__text--opacity--none",
    SCREEN_TEXT_OPACITY_SHOW: "screen__text--opacity--show",
    BUTTON_OPACITY_NONE: "button--opacity--none",
    BUTTON_OPACITY_SHOW: "button--opacity--show",
    SCREEN_INTRO_BOTTOM: "screen-intro__bottom",
    SCREEN_TEXT_FONT_MONOSPACE: "screen__text--font--monospace",
    SCREEN_MENU: "screen-menu",
    SCREEN_MENU_GRID_WINDOW: "screen-menu--grid--window",
    SCREEN_MENU_GRID_ADMIRAL: "screen-menu--grid--admiral",
    SCREEN_MENU_GRID_MISSION: "screen-menu--grid--mission",
    SCREEN_MENU_GRID_SUBTITLES: "screen-menu--grid--subtitles",
    SCREEN_MENU_GRID_WEAPONS: "screen-menu--grid--weapons",
    SCREEN_MENU_GRID_TUTORIAL: "screen-menu--grid--tutorial",
    SCREEN_MENU_GRID_BATTLE: "screen-menu--grid--battle",
    SCREEN_MENU_GRID_BOTTOM: "screen-menu--grid--bottom",
    SCREEN_MENU_SUBSCREEN_BORDER_GRAY: "screen-menu__subscreen--border--gray",
    SCREEN_MENU_SUBSCREEN_WINDOW: "screen-menu__subscreen-window",
    SCREEN_MENU_SUBSCREEN_ADMIRAL: "screen-menu__subscreen-admiral",
    SCREEN_MENU_SUBSCREEN_MISSION: "screen-menu__subscreen-mission",
    SCREEN_MENU_SUBSCREEN_SUBTITLES: "screen-menu__subscreen-subtitles",
    SCREEN_MENU_SUBSCREEN_WEAPONS: "screen-menu__subscreen-weapons",
    SCREEN_MENU_SUBSCREEN_TUTORIAL: "screen-menu__subscreen-tutorial",
    SCREEN_MENU_SUBSCREEN_BATTLE: "screen-menu__subscreen-battle",
    SCREEN_MENU_SUBSCREEN_BOTTOM: "screen-menu__subscreen-bottom",
    SCREEN_IMAGE_DEEPSPACE: "screen__image-deepspace",
    SCREEN_IMAGE_ADMIRAL: "screen__image-admiral",
    BUTTON_MARGIN_5: "button--margin-2",
    SCREEN_TUTORIAL: "screen-tutorial",
    SCREEN_TUTORIAL_GRID_PLAY: "screen-tutorial--grid--play",
    SCREEN_TUTORIAL_GRID_WIN: "screen-tutorial--grid--win",
    SCREEN_GRIDNAME_LOSE: "screen--gridname--lose",
    SCREEN_TUTORIAL_GRID_WEAPONS: "screen-tutorial--grid--weapons",
    SCREEN_TUTORIAL_GRID_OTHER: "screen-tutorial--grid--other",
    SCREEN_TUTORIAL_GRID_MENU: "screen-tutorial--grid--menu",
    SCREEN_TUTORIAL_GRID_TEXT: "screen-tutorial--grid--text",
    SCREEN_TUTORIAL_GRID_BOTTOM: "screen-tutorial--grid--bottom",
    SCREEN_TUTORIAL_SUBSCREEN_PLAY: "screen-tutorial__subscreen-play",
    SCREEN_TUTORIAL_SUBSCREEN_WIN: "screen-tutorial__subscreen-win",
    SCREEN_TUTORIAL_SUBSCREEN_LOSE: "screen-tutorial__subscreen-lose",
    SCREEN_TUTORIAL_SUBSCREEN_WEAPONS: "screen-tutorial__subscreen-weapons",
    SCREEN_TUTORIAL_SUBSCREEN_OTHER: "screen-tutorial__subscreen-other",
    SCREEN_TUTORIAL_SUBSCREEN_MENU: "screen-tutorial__subscreen-menu",
    SCREEN_TUTORIAL_SUBSCREEN_TUTORIAL_TEXT:
      "screen-tutorial__subscreen-tutorial-text",
    SCREEN_TUTORIAL_SUBSCREEN_BOTTOM: "screen-tutorial__subscreen-bottom",
    SCREEN_BATTLE: "screen-battle",
    SCREEN_BATTLE_GRID_BATTLEFIELD: "screen-battle--grid--battlefield",
    SCREEN_BATTLE_GRID_SHOT_STATUS: "screen-battle--grid--shot-status",
    SCREEN_BATTLE_GRID_TIMER: "screen-battle--grid--timer",
    SCREEN_BATTLE_GRID_ENERGY: "screen-battle--grid--energy",
    SCREEN_BATTLE_GRID_WEAPON: "screen-battle--grid--weapon",
    SCREEN_BATTLE_GRID_BOTTOM: "screen-battle--grid--bottom",
    SCREEN_BATTLE_SUBSCREEN: "screen-battle__subscreen",
    SCREEN_BATTLE_BATTLEFIELD: "screen-battle__battlefield",
    BATTLEFIELD: "battlefield",
    SCREEN_BATTLE_CELL: "screen-battle__cell",
    SCREEN_BATTLE_SHOT_STATUS: "screen-battle__shot-status",
    SCREEN_BATTLE_TIMER: "screen-battle__timer",
    SCREEN_BATTLE_ENERGY: "screen-battle__energy",
    SCREEN_BATTLE_WEAPON_TEXT_SHOW:
      "screen-battle__text-weapon-ready--opacity--show",
    SCREEN_BATTLE_WEAPON_TEXT_HIDE:
      "screen-battle__text-weapon-ready--opacity--hide",
    SCREEN_BATTLE_WEAPON_READY_GREEN:
      "screen-battle__weapon-ready-indicator--color-green",
    SCREEN_BATTLE_WEAPON_READY_RED:
      "screen-battle__weapon-ready-indicator--color-red",
    SCREEN_BATTLE_WEAPON: "screen-battle__weapon",
    SCREEN_BATTLE_BOTTOM: "screen-battle__bottom",
    SCREEN_CREDITS_IMAGE: "screen-credits__image",
    SCREEN_CREDITS_PMGR: "screen-credits__pmgr",
    SCREEN_CREDITS_PJS: "screen-credits__pjs",
    SCREEN_CREDITS_PJS_SM: "screen-credits__pjs-sm",
    SCREEN_CREDITS_ART: "screen-credits__art",
    SCREEN_CREDITS_RJV: "screen-credits__rjv",
    SCREEN_CREDITS_RJV_SM: "screen-credits__rjv-sm",
    SCREEN_CREDITS_OTHER: "screen-credits__other",
    SCREEN_CREDITS_NEWGAME: "screen-credits__newgame",
    SCREEN_CREDITS_BTM: "screen-credits__btm",
    SCREEN_TEXT_DECORATION_UNDERLINE: "screen__text--decoration--underline",
    SCREEN_TEXT_WEIGHT_BOLD: "screen__text--weight--bold",
    SOCIAL_MEDIA_LINK: "social-media-link",
    SCREEN_CREDITS_IMAGE_GAMEOVER: "screen-credits__image-gameover",
  },
  GAME: {
    RADAR: "radar",
    EMP: "emp",
    PAUL: "paul",
    LASER: "laser",
    WIN: "win",
    LOSE: "lose",
  },
  SCREEN_SIZE_PIXELS: {
    IPHONE_6_250K: 250000, // iPhone 6 is 375*667~250k
    IPHONE_6PLUS_300K: 300000, // iPhone 6 plus is 414*746~300k
    IPAD_775K: 775000, // iPad is 768*1024~785k
    LAPTOP_1200K: 1200000, // laptop is 1024*1366~1400K
    DESKTOP_1800K: 1800000, // desktop is 1920*1080~2050K
  },
  SHIP_PART: {
    HEAD: "head",
    BODY: "body",
    TAIL: "tail",
  },
};
export { CONSTANTS };
