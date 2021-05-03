/**
 * @fileoverview This file is for application-wide JavaScript.
 * @summary application-wide JavaScript
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { TRANSLATE_INTO_LANGUAGE } from "../../languages/translator.js";
import { STARFIELD } from "../modules/starfield.js";
import { SOUND } from "../sound/sound-manager.js";
import { LANDING_CONTROLLER } from "/modules/landing/landing-controller.js";
import { INTRO_CONTROLLER } from "/modules/intro/intro-controller.js";
import { MENU_CONTROLLER } from "/modules/menu/menu-controller.js";
import { TUTORIAL_CONTROLLER } from "/modules/tutorial/tutorial-controller.js";
import { BATTLE_CONTROLLER } from "/modules/battle/battle-controller.js";
import { CREDITS_CONTROLLER } from "/modules/credits/credits-controller.js";

window.onload = gameStartup;

function gameStartup() {
  registerAllEventListeners();
  LANDING_CONTROLLER.showLandingScreen();
  LANDING_CONTROLLER.loadProgressBar();
  STARFIELD.activate();
}

function registerAllEventListeners() {
  registerButtonStartGameEventListener();
  registerButtonShowCreditsEventListener();
  registerSelectLanguageEventListener();
  registerButtonSkipIntroEventListener();
  registerButtonPrepareForBattleEventListener();
  registerButtonStartTutorialEventListener();
  registerButtonStartBattleEventListener();
  registerButtonSelectRadarEventListener();
  registerButtonSelectEMPEventListener();
  registerButtonSelectPaulEventListener();
  addButtonReturnToMenuEventListener();
  registerButtonStartNewGameEventListener();
  registerSpecialWeaponFireEventListener();
  TUTORIAL_CONTROLLER.registerTutorialButtonEventHandlers();
}

function registerButtonStartGameEventListener() {
  CONSTANTS.HTML.LANDING.BUTTON_START_GAME.addEventListener("click", () => {
    STARFIELD.activate();
    SOUND.playAudio(SOUND.MUSIC.INTRO);
    LANDING_CONTROLLER.hideLandingScreen();
    INTRO_CONTROLLER.showIntroScreen();
  });
}

function registerButtonShowCreditsEventListener() {
  CONSTANTS.HTML.LANDING.BUTTON_SHOW_CREDITS.addEventListener("click", () => {
    STARFIELD.activate();
    Math.random() > 0.5
      ? SOUND.playAudio(SOUND.MUSIC.CREDITS_LOSE)
      : SOUND.playAudio(SOUND.MUSIC.CREDITS_WIN);
    LANDING_CONTROLLER.hideLandingScreen();
    CREDITS_CONTROLLER.showCreditsScreen();
  });
}

function registerSelectLanguageEventListener() {
  CONSTANTS.HTML.LANDING.SELECT_LANGUAGE.addEventListener(
    "change",
    function (e) {
      TRANSLATE_INTO_LANGUAGE(e.target.value);
    }
  );
  TRANSLATE_INTO_LANGUAGE("english");
}

function registerButtonSkipIntroEventListener() {
  CONSTANTS.HTML.INTRO.BUTTON_SKIP_INTRO.addEventListener("click", () => {
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.MUSIC.INTRO);
    SOUND.playAudio(SOUND.MUSIC.MENU);
    INTRO_CONTROLLER.hideIntroScreen();
    MENU_CONTROLLER.showMenuScreen();
  });
}

function registerButtonPrepareForBattleEventListener() {
  CONSTANTS.HTML.INTRO.BUTTON_PREPAREFORBATTLE.addEventListener("click", () => {
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.MUSIC.INTRO);
    SOUND.playAudio(SOUND.MUSIC.MENU);
    INTRO_CONTROLLER.hideIntroScreen();
    MENU_CONTROLLER.showMenuScreen();
  });
}

function registerButtonStartTutorialEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_START_TUTORIAL.addEventListener("click", () => {
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
    MENU_CONTROLLER.hideMenuScreen();
    TUTORIAL_CONTROLLER.showTutorial();
  });
}

function registerButtonStartBattleEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_START_BATTLE.addEventListener("click", () => {
    STARFIELD.activate();
    SOUND.playAudio(SOUND.MUSIC.BATTLE);
    SOUND.stopAudio(SOUND.MUSIC.MENU);
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
    MENU_CONTROLLER.hideMenuScreen();
    BATTLE_CONTROLLER.showBattleScreen();
  });
}

function registerButtonSelectRadarEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR.addEventListener("click", () => {
    stopAllBattleWeaponSelectionSounds();
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR
    );
    MENU_CONTROLLER.setSelectedWeapon(CONSTANTS.GAME.RADAR);
    SOUND.playAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
  });
}

function registerButtonSelectEMPEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP.addEventListener("click", () => {
    stopAllBattleWeaponSelectionSounds();
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP
    );
    MENU_CONTROLLER.setSelectedWeapon(CONSTANTS.GAME.EMP);
    SOUND.playAudio(SOUND.SFX.BATTLE_EMP_FIRE);
  });
}

function registerButtonSelectPaulEventListener() {
  CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL.addEventListener("click", () => {
    stopAllBattleWeaponSelectionSounds();
    MENU_CONTROLLER.highlightWeaponSelectedButton(
      CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL
    );
    MENU_CONTROLLER.setSelectedWeapon(CONSTANTS.GAME.PAUL);
    SOUND.playAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
  });
}

function stopAllBattleWeaponSelectionSounds() {
  SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
  SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
}

function addButtonReturnToMenuEventListener() {
  CONSTANTS.HTML.TUTORIAL.BUTTON_RETURN_TO_MENU.addEventListener(
    "click",
    () => {
      STARFIELD.activate();
      MENU_CONTROLLER.showMenuScreen();
      TUTORIAL_CONTROLLER.hideTutorial();
    }
  );
}

function registerButtonStartNewGameEventListener() {
  CONSTANTS.HTML.CREDITS.BUTTON_START_NEW_GAME.addEventListener("click", () => {
    STARFIELD.activate();
    SOUND.stopAudio(SOUND.MUSIC.CREDITS_WIN);
    SOUND.stopAudio(SOUND.MUSIC.CREDITS_LOSE);
    SOUND.playAudio(SOUND.MUSIC.INTRO);
    CREDITS_CONTROLLER.hideCreditsScreen();
    INTRO_CONTROLLER.showIntro();
  });
}

function registerSpecialWeaponFireEventListener() {
  CONSTANTS.HTML.BATTLE.BUTTON_FIRE_SPECIAL_WEAPON.addEventListener(
    "click",
    () => {
      BATTLE_CONTROLLER.specialWeaponFire();
      //SOUND.playAudio() // this needs to play the selected weapon
    }
  );
}
