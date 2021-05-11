/**
 * @fileoverview Game is the "front controller" of this entire application.
 * It interacts with the individual screen controllers, allowing for screen transitions, passing of data, etc., as the individual controllers do not coordinate among themselves - they go through game.
 * Note that there is ONE HTML file for the entire project - this was to ensure sounds could play on mobile given the restrictive rules. The screens are changed by clicking the buttons and showing/hiding the correct screen. The logic for those screen transitions are here.
 * For the entire game, this is the key logic.
 * For the battle portion of the game, see the battle controller.
 * The only portion of game accessible to a controller is the game over function available to battle.
 * @summary application-wide JavaScript
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { TRANSLATE_INTO_LANGUAGE } from "../../languages/translator.js";
import { STARFIELD } from "./starfield.js";
import { SOUND } from "../../../sound/sound-manager.js";
import { LANDING_CONTROLLER } from "/modules/landing/landing-controller.js";
import { INTRO_CONTROLLER } from "/modules/intro/intro-controller.js";
import { MENU_CONTROLLER } from "/modules/menu/menu-controller.js";
import { TUTORIAL_CONTROLLER } from "/modules/tutorial/tutorial-controller.js";
import { BATTLE_CONTROLLER } from "/modules/battle/battle-controller.js";
import { CREDITS_CONTROLLER } from "/modules/credits/credits-controller.js";
import { CONFIGURATION } from "../../configuration/configuration.js";

/**
 * The game startup loads the progress bar and registers all event listeners.
 * After that, the game is event-driven by user actions or data conditions.
 */
window.onload = gameStartup;

/**
 * Loads the progress bar and registers all event listeners.
 */
function gameStartup() {
  registerAllEventListeners();
  LANDING_CONTROLLER.showLandingScreen();
  LANDING_CONTROLLER.loadProgressBar();
  STARFIELD.activate();
}

/**
 * Central function to keep track of all event listeners.
 */
function registerAllEventListeners() {
  registerButtonStartGameEventListener();
  registerButtonShowCreditsEventListener();
  registerSelectLanguageEventListener();
  registerButtonSkipIntroEventListener();
  registerButtonPrepareForBattleEventListener();
  registerButtonStartTutorialEventListener();
  registerButtonStartBattleEventListener();
  addButtonReturnToMenuEventListener();
  registerButtonStartNewGameEventListener();
  MENU_CONTROLLER.registerInternalMenuEvents();
  TUTORIAL_CONTROLLER.registerInternalTutorialEvents();
  BATTLE_CONTROLLER.registerInternalBattleEvents();
}

/**
 * Event listener for the "start game" button.
 * This goes from the landing screen to the intro screen.
 */
function registerButtonStartGameEventListener() {
  CONSTANTS.HTML.LANDING.BUTTON_START_GAME.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    STARFIELD.activate();
    SOUND.playAudio(SOUND.MUSIC.INTRO);
    LANDING_CONTROLLER.hideLandingScreen();
    INTRO_CONTROLLER.showIntroScreen();
  });
}

/**
 * Event listener for the "show credits" button.
 * This goes from the landing screen to the credits screen.
 * It will play either the victory or loss music at random.
 */
function registerButtonShowCreditsEventListener() {
  CONSTANTS.HTML.LANDING.BUTTON_SHOW_CREDITS.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    STARFIELD.activate();
    Math.random() > 0.5
      ? SOUND.playAudio(SOUND.MUSIC.CREDITS_LOSE)
      : SOUND.playAudio(SOUND.MUSIC.CREDITS_WIN);
    LANDING_CONTROLLER.hideLandingScreen();
    CREDITS_CONTROLLER.showCreditsScreen();
  });
}

/**
 * Event listener for the "select language" dropdown.
 * This calls the translator's "translate into language" function, updating
 * all of the game's text into the chosen language.
 * By default, the game is in English.
 */
function registerSelectLanguageEventListener() {
  CONSTANTS.HTML.LANDING.SELECT_LANGUAGE.addEventListener(
    "change",
    function (e) {
      SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
      TRANSLATE_INTO_LANGUAGE(e.target.value);
    }
  );
  TRANSLATE_INTO_LANGUAGE("english");
}

/**
 * Event listener for the "skip intro" button.
 * Skips the introduction screen and goes right to the menu screen.
 */
function registerButtonSkipIntroEventListener() {
  CONSTANTS.HTML.INTRO.BUTTON_SKIP_INTRO.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.MUSIC.INTRO);
    SOUND.playAudio(SOUND.MUSIC.MENU);
    INTRO_CONTROLLER.hideIntroScreen();
    MENU_CONTROLLER.showMenuScreen();
  });
}

/**
 * Event listener for the "prepare for battle" button.
 * Goes from the intro screen to the menu screen.
 */
function registerButtonPrepareForBattleEventListener() {
  CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.MUSIC.INTRO);
    SOUND.playAudio(SOUND.MUSIC.MENU);
    INTRO_CONTROLLER.hideIntroScreen();
    MENU_CONTROLLER.showMenuScreen();
  });
}

/**
 * Event listener for the "start tutorial" button.
 * Goes from the menu screen to the tutorial screen, but does NOT stop the
 * menu music - it plays through on both the menu and tutorial screens.
 */
function registerButtonStartTutorialEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_START_TUTORIAL.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
    MENU_CONTROLLER.hideMenuScreen();
    TUTORIAL_CONTROLLER.showTutorial();
  });
}

/**
 * Event listener for the tutorial's "menu" button.
 * Goes from the tutorial screen back to the menu screen.
 */
function addButtonReturnToMenuEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_RETURN_TO_MENU.addEventListener(
    "click",
    () => {
      SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
      STARFIELD.activate();
      MENU_CONTROLLER.showMenuScreen();
      TUTORIAL_CONTROLLER.hideTutorialScreen();
    }
  );
}

/**
 * Event listener for the "start battle" button.
 * Goes from the menu screen to the battle screen.
 */
function registerButtonStartBattleEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_START_BATTLE.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    STARFIELD.activate();
    SOUND.playAudio(SOUND.MUSIC.BATTLE);
    SOUND.stopAudio(SOUND.MUSIC.MENU);
    SOUND.stopAudio(SOUND.SFX.SPECIAL_WEAPON_SELECTED);
    MENU_CONTROLLER.hideMenuScreen();
    BATTLE_CONTROLLER.setSpecialWeaponName(
      MENU_CONTROLLER.getSelectedWeaponName()
    );
    BATTLE_CONTROLLER.showBattleScreen();
    BATTLE_CONTROLLER.startBattleLoop();
  });
}

/**
 * Event listener for the "start new game" button.
 * Goes from the credits screen to the intro screen.
 */
function registerButtonStartNewGameEventListener() {
  CONSTANTS.HTML.CREDITS.BUTTON_START_NEW_GAME.addEventListener("click", () => {
    SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.MUSIC.CREDITS_WIN);
    SOUND.stopAudio(SOUND.MUSIC.CREDITS_LOSE);
    SOUND.playAudio(SOUND.MUSIC.INTRO);
    CREDITS_CONTROLLER.hideCreditsScreen();
    INTRO_CONTROLLER.showIntroScreen();
  });
}

/**
 * Exported function so battle can inform game that the battle is over
 */
export function endGame(gameResult) {
  setTimeout(() => {
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.MUSIC.BATTLE);
    if (gameResult == CONSTANTS.GAME.WIN) {
      SOUND.playAudio(SOUND.MUSIC.CREDITS_WIN);
    } else if (gameResult == CONSTANTS.GAME.LOSE) {
      SOUND.playAudio(SOUND.MUSIC.CREDITS_LOSE);
    }
    BATTLE_CONTROLLER.hideBattleResultScreen();
    CREDITS_CONTROLLER.showCreditsScreen();
  }, CONFIGURATION.BATTLE_TIMING.TIME_UNTIL_CREDITS_SCREEN);
}
