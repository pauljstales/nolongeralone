/**
 * @fileoverview Battle's controller (MVC pattern), responsible for coordinating "user actions, model data, and view/UI".
 * Controller acts as the only communication to and from the battle code.
 * The front/main controller "game" coordinates all controllers.
 * @summary controller object for battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { BATTLE_MODEL } from "/modules/battle/battle-model.js";
import { BATTLE_VIEW } from "/modules/battle/battle-view.js";
import { SOUND } from "../../sound/sound-manager.js";
import { CONFIGURATION } from "../../configuration/configuration.js";
import { endGame } from "../game/game.js";

/**
 * Shows the battle screen
 */
function showBattleScreen() {
  BATTLE_VIEW.showBattleScreen();
}

/**
 * Hides the battle screen
 */
function hideBattleScreen() {
  BATTLE_VIEW.hideBattleScreen();
}

/**
 * Shows the battle result screen
 * @param {string} result string of win or lose
 */
function showBattleResultScreen(result) {
  BATTLE_VIEW.showBattleResultScreen(result);
}

/**
 * Hides the battle result screen
 */
function hideBattleResultScreen() {
  BATTLE_VIEW.hideBattleResultScreen();
}

/**
 * Sets the special weapon (this is chosen on the menu screen).
 * The GAME coordinates the passing of data from menu to battle.
 * @param {spring} specialWeaponName name of the special weapon
 */
function setSpecialWeaponName(specialWeaponName) {
  BATTLE_MODEL.setSpecialWeaponName(specialWeaponName);
}

/* *************************************************************************
 * Battle Loop
 * ************************************************************************/

/**
 * Battle Loop
 * This is the heart of the "game", the actual battle.
 * Before the loop begins, game values are initialized.
 * The loop runs on a set interval that "ticks" according to the configuration's "time per gameloop".
 * Every gameloop updates the time/energy and checks for game over conditions.
 * Any game over condition ends this set interval.
 * As of beta 2.0.0, it also renders on every loop. This may change if performance issues occur, but so far all hardware handled fine.
 */
async function startBattleLoop() {
  await BATTLE_MODEL.initializeGameValues();
  await BATTLE_VIEW.initializeGameValues(BATTLE_MODEL.getShips());

  let intervalID = setInterval(() => {
    gameLoopUpdateTime();
    gameLoopAlienShipsAttemptToMove();
    gameLoopCheckIfTimerOrEnergyLow();
    gameLoopCheckIfGameOverFromAlienShipsDestroyed(intervalID);
    gameLoopCheckIfGameOverFromTime(intervalID);
    gameLoopCheckIfGameOverFromEnergy(intervalID);
    BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());

    // ---------------------------------------------------
    // ---------- Battle Loop Nested Functions -----------
    // ---------------------------------------------------

    /**
     * Decreases the game time in milliseconds by the time-per-gameloop.
     * If the game time is divisible by 1000, update the view.
     */
    function gameLoopUpdateTime() {
      BATTLE_MODEL.decreaseTime();
      if (BATTLE_MODEL.getTime() % 1000 == 0) {
        BATTLE_VIEW.setTime(BATTLE_MODEL.getTime() / 1000);
      }
    }

    /**
     * If "time-per-warp" time has passed, the aliens attempt to move.
     * Destroyed ships and ships affected by an EMP cannot move.
     */
    function gameLoopAlienShipsAttemptToMove() {
      if (
        (BATTLE_MODEL.getTime() / 1000) %
          CONFIGURATION.BATTLE_TIMING.TIME_PER_WARP ==
        0
      ) {
        BATTLE_MODEL.placeAllShips();
        BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());
        SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_MOVE);
      }
    }

    /**
     * This sets off an annoying alarm that indicates you are either low on time or energy. If you didn't want to hear an annoying alarm, maybe you should have beaten the game faster and with less energy.
     */
    function gameLoopCheckIfTimerOrEnergyLow() {
      if (BATTLE_MODEL.getTime() <= 10000 || BATTLE_MODEL.getEnergy() <= 5) {
        SOUND.playAudio(SOUND.SFX.BATTLE_TIMER_OR_ENERGY_LOW);
      }
    }

    /**
     * Checks for the LOSS condition "is there time left?"
     * If there is no time left, stop the game loop and begin the end game sequence.
     * Note that this only triggers if there are alien ships left, to avoid assigning a player a loss if they destroyed the last ship as time ran out.
     * @param {intervalID} intervalID
     */
    function gameLoopCheckIfGameOverFromTime(intervalID) {
      if (BATTLE_MODEL.getTime() <= 0 && BATTLE_MODEL.getShipsRemaining() > 0) {
        BATTLE_MODEL.setWeaponFireable(false);
        BATTLE_VIEW.revealAllShips(BATTLE_MODEL.getShips());
        BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());
        clearInterval(intervalID);
        setTimeout(() => {
          hideBattleScreen();
          showBattleResultScreen(CONSTANTS.GAME.LOSE);
          setCreditScreenImage(CONSTANTS.GAME.LOSE);
          endGame(CONSTANTS.GAME.LOSE);
        }, CONFIGURATION.BATTLE_TIMING.TIME_UNTIL_RESULTS_SCREEN);
      }
    }

    /**
     * Checks for the LOSS condition "is there energy left?"
     * If there is no energy left, stop the game loop and begin the end game sequence.
     * Note that this only triggers if there are alien ships left, to avoid assigning a player a loss if they destroyed with their final energy.
     * @param {intervalID} intervalID
     */
    function gameLoopCheckIfGameOverFromEnergy(intervalID) {
      if (
        BATTLE_MODEL.getEnergy() <= 0 &&
        BATTLE_MODEL.getShipsRemaining() > 0
      ) {
        BATTLE_MODEL.setWeaponFireable(false);
        BATTLE_VIEW.revealAllShips(BATTLE_MODEL.getShips());
        BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());
        clearInterval(intervalID);
        setTimeout(() => {
          hideBattleScreen();
          showBattleResultScreen(CONSTANTS.GAME.LOSE);
          setCreditScreenImage(CONSTANTS.GAME.LOSE);
          endGame(CONSTANTS.GAME.LOSE);
        }, CONFIGURATION.BATTLE_TIMING.TIME_UNTIL_RESULTS_SCREEN);
      }
    }

    /**
     * Checks for the WIN condition "are all alien ships destroyed?"
     * If yes, stop the game loop and begin the end game sequence.
     * @param {intervalID} intervalID
     */
    function gameLoopCheckIfGameOverFromAlienShipsDestroyed(intervalID) {
      if (BATTLE_MODEL.getShipsRemaining() <= 0) {
        BATTLE_MODEL.setWeaponFireable(false);
        BATTLE_VIEW.revealAllShips(BATTLE_MODEL.getShips());
        BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());
        clearInterval(intervalID);
        setTimeout(() => {
          hideBattleScreen();
          showBattleResultScreen(CONSTANTS.GAME.WIN);
          setCreditScreenImage(CONSTANTS.GAME.WIN);
          endGame(CONSTANTS.GAME.WIN);
        }, CONFIGURATION.BATTLE_TIMING.TIME_UNTIL_RESULTS_SCREEN);
      }
    }

    /**
     * Changes the credit's image depending on the result of the game
     * @param {string} gameResult either win or lose
     */
    function setCreditScreenImage(gameResult) {
      if (gameResult == CONSTANTS.GAME.WIN) {
        CONSTANTS.HTML.CREDITS.SCREEN_CREDITS_GAME_OVER_IMAGE.src =
          CONSTANTS.IMAGES.SCREEN_CREDITS_IMAGE_VICTORYMEDAL;
      } else if (gameResult == CONSTANTS.GAME.LOSE) {
        CONSTANTS.HTML.CREDITS.SCREEN_CREDITS_GAME_OVER_IMAGE.src =
          CONSTANTS.IMAGES.SCREEN_CREDITS_IMAGE_GAMEOVERALTCLEAR;
      } else {
        CONSTANTS.HTML.CREDITS.SCREEN_CREDITS_GAME_OVER_IMAGE.src =
          CONSTANTS.IMAGES.SCREEN_CREDITS_IMAGE_PEWPEWSQUARE;
      }
    }
  }, CONFIGURATION.BATTLE_TIMING.TIME_PER_GAMELOOP);
}

/* *************************************************************************
 * Firing Sequence
 * ************************************************************************/

/**
 * Weapons can only be fired every so often, controlled by BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME.
 * If the weapon is currently not fireable, play an error sound.
 * If the weapon can be fired,
 * 1 Set it to not fireable (it will become fireable again after function fireWeapon's setTimeout sets it back to fireable)
 * 2 Stop all other weapon sounds
 * 3 Determine which weapon to fire (in case a special weapon was armed)
 * 4 Fire that weapon
 * Afterwards update the energy and check if energy is 0 - if energy IS 0 then disable firing and wait for the next game loop to detect the loss.
 * @param {string} cellID
 */
function fireWeaponSequence(cellID) {
  if (BATTLE_MODEL.getEnergy() > 0 && BATTLE_MODEL.isWeaponFireable()) {
    stopWeaponSounds();
    BATTLE_MODEL.setWeaponFireable(false);
    BATTLE_VIEW.setWeaponFireable(false);

    let weapon = BATTLE_MODEL.determineWeaponToBeFired();
    fireWeapon(weapon.weaponSound, weapon.weaponType, cellID);
    updateEnergy(weapon.weaponEnergyCost);

    determineIfEnoughEnergyForSpecialWeapon();
    checkRemainingEnergyForGameOverCondition();
  } else {
    SOUND.playAudio(SOUND.SFX.BATTLE_WEAPON_NOT_READY);
  }

  // ---------------------------------------------------
  // ------ Fire Weapon Sequence Nested Functions ------
  // ---------------------------------------------------

  /**
   * Stop all weapon sounds when firing a weapon, as some weapon sounds are longer than others and may cause conflicts (especially on mobile).
   */
  function stopWeaponSounds() {
    SOUND.stopAudio(SOUND.SFX.BATTLE_BASIC_LASER_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_RADAR_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_EMP_FIRE);
    SOUND.stopAudio(SOUND.SFX.BATTLE_PAUL_FIRE);
  }

  /**
   * Fire weapon actually fires the selected weapon.
   * Weapon projectiles are represented by a newly created DIV with a class.
   * After BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME seconds the DIV is removed.
   * @param {audioFire} weaponSound
   * @param {string} weaponType
   * @param {string} cellID
   */
  function fireWeapon(weaponSound, weaponType, cellID) {
    SOUND.playAudio(weaponSound);
    BATTLE_MODEL.fireWeapon(cellID, weaponType);
    BATTLE_VIEW.fireWeapon(BATTLE_MODEL.getShips(), cellID, weaponType);
    setTimeout(() => {
      if (BATTLE_MODEL.getShipsRemaining() > 0) {
        BATTLE_MODEL.setWeaponFireable(true);
        BATTLE_VIEW.setWeaponFireable(true);
      }
    }, CONFIGURATION.BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME);
  }

  /**
   * To avoid players firing once there is 0 energy and before the game loop detects the losing condition, firing is disabled.
   */
  function checkRemainingEnergyForGameOverCondition() {
    if (BATTLE_MODEL.getEnergy() <= 0) {
      BATTLE_MODEL.setWeaponFireable(false);
    }
  }

  /**
   * If the special weapon costs more energy than remaining energy, disable the special weapon for the remainder of the battle.
   */
  function determineIfEnoughEnergyForSpecialWeapon() {
    let costOfSpecialWeapon =
      CONFIGURATION.BATTLE_ENERGY.GET_SPECIAL_WEAPON_ENERGY_COST(
        BATTLE_MODEL.getSpecialWeaponName()
      );
    if (BATTLE_MODEL.getEnergy() < costOfSpecialWeapon) {
      BATTLE_MODEL.setSpecialWeaponReadyToFire(false);
      BATTLE_VIEW.disableSpecialWeapon();
    }
  }

  /**
   * After firing the weapon, update model and view with the new energy amount.
   * @param {number} weaponEnergyCost
   */
  function updateEnergy(weaponEnergyCost) {
    BATTLE_MODEL.decreaseEnergy(weaponEnergyCost);
    BATTLE_VIEW.setEnergy(BATTLE_MODEL.getEnergy());
  }
}

/**
 * Registers the special weapon button.
 * Arms the special weapon, changes the button color, disables the button, and changes the model's data.
 */
function registerSpecialWeaponButtonEventListener() {
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.addEventListener(
    "click",
    () => {
      SOUND.playAudio(SOUND.SFX.BUTTON_PRESS);
      BATTLE_VIEW.disableSpecialWeapon();
      BATTLE_MODEL.setSpecialWeaponReadyToFire(true);
    }
  );
}

/**
 * Registers all the battlefield's individual grid cells via event delegation.
 * The battlefield itself listens for click events, and determines which cell was clicked by checking the ID of the target (clicked element).
 */
function registerBattleCellsViaEventDelegation() {
  CONSTANTS.HTML.BATTLE.BATTLEFIELD_TABLE.addEventListener("click", (e) => {
    fireWeaponSequence(e.target.id);
  });
}

/**
 * Register the exposed battle events on game startup
 */
function registerInternalBattleEvents() {
  registerSpecialWeaponButtonEventListener();
  registerBattleCellsViaEventDelegation();
}

/**
 * Exported Controller for Battle
 */
const BATTLE_CONTROLLER = {
  showBattleScreen: showBattleScreen,
  hideBattleScreen: hideBattleScreen,
  showBattleResultScreen: showBattleResultScreen,
  hideBattleResultScreen: hideBattleResultScreen,
  registerInternalBattleEvents: registerInternalBattleEvents,
  setSpecialWeaponName: setSpecialWeaponName,
  startBattleLoop: startBattleLoop,
};
export { BATTLE_CONTROLLER };
