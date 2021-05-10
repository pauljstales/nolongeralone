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
 * Shows the battle result screen
 */
function showBattleResultScreen(result) {
  if (result == CONSTANTS.GAME.WIN) {
    CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_VICTORY.classList.add(
      CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
    );
    CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_VICTORY.classList.remove(
      CONSTANTS.CSS.SCREEN_DISPLAY_NONE
    );
  } else if (result == CONSTANTS.GAME.LOSE) {
    CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_DEFEAT.classList.add(
      CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
    );
    CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_DEFEAT.classList.remove(
      CONSTANTS.CSS.SCREEN_DISPLAY_NONE
    );
  } else {
    //console.log("Error in ending game.");
  }
}

/**
 * Hides the battle result screen
 */
function hideBattleResultScreen() {
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_VICTORY.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_VICTORY.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_DEFEAT.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE_DEFEAT.classList.remove(
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

  ////console.log("did we get any ships here at view");
  //console.log(ships);
  renderShips(ships);
}

function renderShips(ships) {
  for (let i = 0; i < previousShipLocations.length; i++) {
    previousShipLocations[i].style.transform = null;
    previousShipLocations[i].style.backgroundSize = null;
    previousShipLocations[i].style.backgroundImage = null;
    previousShipLocations[i].style.backgroundImage = null;
    previousShipLocations[i].style.backgroundColor = null;
  }

  previousShipLocations = [];

  for (let i = 0; i < ships.length; i++) {
    if (ships[i].getHealth() == 0) {
      console.log("don't render dead ships.");
      continue;
    }
    for (let j = 0; j < ships[i].length; j++) {
      let gridCellDOM = document.getElementById(
        ships[i].cells[j].getLocation()
      );
      previousShipLocations.push(gridCellDOM);

      gridCellDOM.style.backgroundSize = "contain";

      let horizontalFix = "";
      if (ships[i].getOrientation() == "horizontal") {
        horizontalFix = "-H";
      }

      let shipStatus = ships[i].cells[j].isDamaged() ? "damage" : "shaded";
      ships[i].cells[j].setImage(
        "../images/ship-" +
          ships[i].cells[j].shipPart +
          "-" +
          shipStatus +
          horizontalFix +
          ".png"
      );

      if (ships[i].cells[j].isVisible()) {
        gridCellDOM.style.backgroundImage =
          "url(" + ships[i].cells[j].getImage() + ")";
      } else {
        gridCellDOM.style.backgroundImage = null;
        //if (ship.getShipID() == 0) {
        //gridCellDOM.style.backgroundColor = "green";
        //} else if (ship.getShipID() == 1) {
        //gridCellDOM.style.backgroundColor = "yellow";
        //} else if (ship.getShipID() == 2) {
        //gridCellDOM.style.backgroundColor = "blue";
        //}
      }
    }
  }
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
  renderShips(ships);
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
  showBattleResultScreen: showBattleResultScreen,
  hideBattleResultScreen: hideBattleResultScreen,
};
export { BATTLE_VIEW };
