/**
 * @fileoverview Battle's controller (MVC pattern), responsible for coordinating "user actions, model data, and view ui".
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
 * Sets the special weapon (this is chosen on the menu screen)
 * The GAME coordinates the passing of data from menu to battle
 */
function setSpecialWeaponName(specialWeaponName) {
  BATTLE_MODEL.setSpecialWeaponName(specialWeaponName);
}

/**
 * Battle Loop
 * This is the heart of the "game", the actual battle.
 * Before the loop begins, game values are initialized.
 * The loop runs on a set interval that "ticks" according to the configuration's "time per gameloop".
 * Every gameloop updates the time/energy and checks for game over conditions.
 * Any game over condition ends this set interval.
 */
async function startBattleLoop() {
  await BATTLE_MODEL.initializeGameValues();
  await BATTLE_VIEW.initializeGameValues(BATTLE_MODEL.getShips());

  let intervalID = setInterval(() => {
    //BATTLE_MODEL.DEV_printBattleData();
    gameLoopUpdateTime();
    gameLoopAlienShipsAttemptToMove();
    gameLoopCheckIfTimerOrEnergyLow();
    gameLoopCheckIfGameOverFromAlienShipsDestroyed(intervalID);
    gameLoopCheckIfGameOverFromTime(intervalID);
    gameLoopCheckIfGameOverFromEnergy(intervalID);

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
     * If an EMP bomb has gone off, or another condition, they will not be able to move on this attempt.
     */
    function gameLoopAlienShipsAttemptToMove() {
      if (
        (BATTLE_MODEL.getTime() / 1000) %
          CONFIGURATION.BATTLE_TIMING.TIME_PER_WARP ==
        0
      ) {
        //console.log("ships should warp now");
        BATTLE_MODEL.placeAllShips();
        BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());
        SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_MOVE);
      }
    }

    function gameLoopCheckIfTimerOrEnergyLow() {
      if (BATTLE_MODEL.getTime() <= 10000 || BATTLE_MODEL.getEnergy() <= 5) {
        SOUND.playAudio(SOUND.SFX.BATTLE_TIMER_OR_ENERGY_LOW);
      }
    }

    /**
     * Checks for the LOSS condition "is there time left?"
     * If not, stop the game loop and begin the end game sequence.
     * @param {intervalID} intervalID
     */
    function gameLoopCheckIfGameOverFromTime(intervalID) {
      if (BATTLE_MODEL.getTime() <= 0 && BATTLE_MODEL.getShipsRemaining() > 0) {
        //SOUND.playAudio(SOUND.SFX.BATTLE_ALIEN_WEAPON_CHARGE);
        ////console.log("time is up, end the game on a loss");
        BATTLE_MODEL.setWeaponFireable(false);
        BATTLE_VIEW.revealAllShips(BATTLE_MODEL.getShips());
        BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());
        clearInterval(intervalID);
        setTimeout(() => {
          hideBattleScreen();
          showBattleResultScreen(CONSTANTS.GAME.LOSE);
          endGame(CONSTANTS.GAME.LOSE);
        }, 3000);
      }
    }

    /**
     * Checks for the LOSS condition "is there energy left?"
     * If not, stop the game loop and begin the end game sequence.
     * @param {intervalID} intervalID
     */
    function gameLoopCheckIfGameOverFromEnergy(intervalID) {
      if (
        BATTLE_MODEL.getEnergy() <= 0 &&
        BATTLE_MODEL.getShipsRemaining() > 0
      ) {
        //SOUND.playAudioLooped(SOUND.SFX.BATTLE_ALIEN_WEAPON_CHARGE);
        ////console.log("energy is exhausted, end the game on a loss");
        BATTLE_MODEL.setWeaponFireable(false);
        BATTLE_VIEW.revealAllShips(BATTLE_MODEL.getShips());
        BATTLE_VIEW.renderShips(BATTLE_MODEL.getShips());
        clearInterval(intervalID);
        setTimeout(() => {
          hideBattleScreen();
          showBattleResultScreen(CONSTANTS.GAME.LOSE);
          endGame(CONSTANTS.GAME.LOSE);
        }, 3000);
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
          endGame(CONSTANTS.GAME.WIN);
        }, 3000);
      }
    }
  }, CONFIGURATION.BATTLE_TIMING.TIME_PER_GAMELOOP);
}

/**
 * Check if the weapon is fireable (weapons can only be fired every so often, controlled by BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME), and if not, play an error sound.
 * If the weapon CAN be fired, set it to not fireable (it will become fireable again after function fireWeapon's setTimeout sets it back to fireable).
 * Stop all other weapon sounds, determine which weapon to fire (in case a special weapon was armed), and fire that weapon.
 * Afterwards update the energy and perform different checks on the energy - if we are out of energy disable firing until the game loop registers game over.
 * @param {string} cellID
 */
function fireWeaponSequence(cellID) {
  //console.log("firing sequence");
  //console.log("BATTLE_MODEL.getEnergy() " + BATTLE_MODEL.getEnergy());
  //console.log("BATTLE_MODEL.isWeaponFireable() " + BATTLE_MODEL.isWeaponFireable());
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
    ////console.log("Trying to fire and cannot: \nEither out of energy\nOr firing too soon\nOr time is up");
  }

  // ---------------------------------------------------
  // ----- Prepare to Fire Weapon Nested Functions -----
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
   * The sound of the weapon is played, a DIV is created and given a class to represent the weapon, after BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME seconds the DIV is removed.
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
   * If the energy level reaches 0 (or below in case of a bug), the game ends.
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
    let costOfSpecialWeapon = CONFIGURATION.BATTLE_ENERGY.GET_SPECIAL_WEAPON_ENERGY_COST(
      BATTLE_MODEL.getSpecialWeaponName()
    );
    ////console.log("cost of special weapon? " + costOfSpecialWeapon);
    ////console.log("remaining energy? " + BATTLE_MODEL.getEnergy());
    if (BATTLE_MODEL.getEnergy() < costOfSpecialWeapon) {
      ////console.log("energy is too low to use special weapon, disable it");
      BATTLE_MODEL.setSpecialWeaponReadyToFire(false);
      BATTLE_VIEW.disableSpecialWeapon();
    }
  }

  /**
   * Update the model and view with the new energy amount after firing the weapon.
   * @param {number} weaponEnergyCost
   */
  function updateEnergy(weaponEnergyCost) {
    BATTLE_MODEL.decreaseEnergy(weaponEnergyCost);
    BATTLE_VIEW.setEnergy(BATTLE_MODEL.getEnergy());
  }
}

/**
 * Registers the special weapon button.
 * Fires the weapon, changes the button color, and disables the button.
 * Also changes the model's data.
 */
function registerSpecialWeaponButtonEventListener() {
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.addEventListener(
    "click",
    () => {
      ////console.log("clicked the special weapon button");
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
 * Register the internal battle events on game startup
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
