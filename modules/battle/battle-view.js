/**
 * @fileoverview Battle's view (MVC pattern), responsible for the view/ui.
 * Battle's controller is the only access into the view.
 * @summary view object for battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../../configuration/configuration.js";
import { CONSTANTS } from "../../constants/constants.js";

// Used by renderShips to clear cells where ships used to be
let previousShipLocations = [];

/**
 * Shows the battle screen
 */
function showBattleScreen() {
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

/**
 * Hides the battle screen
 */
function hideBattleScreen() {
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

/**
 * Setter for energy in the view
 */
function setEnergy(currentEnergy) {
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_ENERGY_TEXT.innerText = currentEnergy;
}

/**
 * Setter for time in the view
 */
function setTime(currentTime) {
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_TIMER_TEXT.innerText = currentTime;
}

/**
 * Initialize the game values for the view; setting the time and energy, and making the special weapon button available
 */
function initializeGameValues(ships) {
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_ENERGY_TEXT.innerText =
    CONFIGURATION.BATTLE_ENERGY.ENERGY_INITIAL;
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_TIMER_TEXT.innerText =
    CONFIGURATION.BATTLE_TIMING.BATTLE_TIME_INITIAL / 1000;
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.remove(
    CONSTANTS.CSS.BUTTON_COLOR_DISABLED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.add(
    CONSTANTS.CSS.BUTTON_COLOR_RED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.removeAttribute("disabled");
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.add(
    CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_GREEN
  );

  //console.log("did we get any ships here at view");
  console.log(ships);
  renderShips(ships);
}

function renderShips(ships) {
  previousShipLocations.forEach((previousShipLocation) => {
    previousShipLocation.style.transform = null;
    previousShipLocation.style.backgroundSize = null;
    previousShipLocation.style.backgroundImage = null;
    previousShipLocation.style.backgroundImage = null;
    previousShipLocation.style.backgroundColor = null;
  });

  previousShipLocations = [];

  ships.forEach((ship) => {
    ship.getCells().forEach((cell) => {
      /*console.log("What is ship?");
    console.log(ship);
    console.log("What is cells?");
    console.log(ship.cells);
    console.log("What is cell?");
    console.log(ship.cells[0]);*/
      //let cell = document.getElementById(ship.cells[i].location);
      //cell.style.backgroundColor = ship.testColor;

      let gridCellDOM = document.getElementById(cell.getLocation());
      previousShipLocations.push(gridCellDOM);

      if (ship.getOrientation() == "horizontal") {
        gridCellDOM.style.transform = "rotate(-90deg)";
      }

      let shipPart = cell.getShipPart();
      let shipStatus = cell.isDamaged() ? "damage" : "shaded";
      cell.setImage("../images/ship-" + shipPart + "-" + shipStatus + ".png");
      gridCellDOM.style.backgroundSize = "contain";
      if (cell.isVisible()) {
        gridCellDOM.style.backgroundImage = "url(" + cell.getImage() + ")";
      } else {
        gridCellDOM.style.backgroundImage = null;
        if (ship.getShipID() == 0) {
          gridCellDOM.style.backgroundColor = "green";
        } else if (ship.getShipID() == 1) {
          gridCellDOM.style.backgroundColor = "yellow";
        } else if (ship.getShipID() == 2) {
          gridCellDOM.style.backgroundColor = "blue";
        }
      }
    });
  });
}

/**
 * Changes the special weapon button from red to gray, and disables it
 */
function disableSpecialWeapon() {
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.add(
    CONSTANTS.CSS.BUTTON_COLOR_DISABLED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.classList.remove(
    CONSTANTS.CSS.BUTTON_COLOR_RED
  );
  CONSTANTS.HTML.BATTLE.BUTTON_ARM_SPECIAL_WEAPON.setAttribute(
    "disabled",
    true
  );
}

/**
 * When a user fires a weapon, there is a cooldown before the user can fire again. This sets the WEAPON READY indicator to red, a visual cue the weapon cannot be fired again.
 */
function setWeaponFireable(weaponFireableStatus) {
  if (weaponFireableStatus) {
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.add(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_GREEN
    );
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.remove(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_RED
    );
  } else {
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.add(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_RED
    );
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.remove(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_GREEN
    );
  }
}

/**
 * Fire weapon actually fires the selected weapon.
 * The sound of the weapon is played, a DIV is created and given a class to represent the weapon, after BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME seconds the DIV is removed.
 * @param {string} cellID
 * @param {string} weaponType
 */
function fireWeapon(ships, cellID, weaponType) {
  const weaponProjectile = document.createElement("div");
  weaponProjectile.classList.add(weaponType);
  document.getElementById(cellID).appendChild(weaponProjectile);

  setTimeout(() => {
    document.getElementById(cellID).removeChild(weaponProjectile);
  }, CONFIGURATION.BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME);
}

/**
 * Exported View for Battle
 */
const BATTLE_VIEW = {
  showBattleScreen: showBattleScreen,
  hideBattleScreen: hideBattleScreen,
  disableSpecialWeapon: disableSpecialWeapon,
  setEnergy: setEnergy,
  setTime: setTime,
  initializeGameValues: initializeGameValues,
  fireWeapon: fireWeapon,
  setWeaponFireable: setWeaponFireable,
  renderShips: renderShips,
};
export { BATTLE_VIEW };
