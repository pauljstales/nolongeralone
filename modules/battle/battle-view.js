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
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.remove(
    CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_RED
  );
  CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.add(
    CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_GREEN
  );

  ////console.log("did we get any ships here at view");
  //console.log(ships);
  renderShips(ships);
}

function revealAllShips(ships) {
  ships.forEach((ship) => {
    ship.getCells().forEach((cell) => {
      cell.setVisible(true, CONSTANTS.GAME.LASER);
    });
  });
}

function renderShips(ships) {
  let currentShipLocations = [];
  for (let i = 0; i < ships.length; i++) {
    for (let j = 0; j < ships[i].length; j++) {
      let cellLocationID = ships[i].cells[j].getLocation();
      let gridCellDOM = document.getElementById(cellLocationID);
      currentShipLocations.push(cellLocationID);
      gridCellDOM.style.backgroundImage = imageUrlBuilder(
        ships[i],
        ships[i].cells[j]
      );
    }
  }

  if (previousShipLocations.length > 0) {
    for (let i = 0; i < previousShipLocations.length; i++) {
      if (!currentShipLocations.includes(previousShipLocations[i])) {
        document.getElementById(
          previousShipLocations[i]
        ).style.backgroundImage = null;
        document.getElementById(
          previousShipLocations[i]
        ).style.backgroundColor = null;
      } else {
        //console.log("don't render dead ships");
      }
    }
  }

  previousShipLocations = currentShipLocations;
}

function imageUrlBuilder(ship, cell) {
  const URL_1 = "url(../images/ship-";
  const URL_2 = cell.getShipPart();
  const URL_3 = "-";
  const URL_4 = cell.isDamaged() ? "damage" : "shaded";
  const URL_5 = ship.getOrientation() == "horizontal" ? "-H" : "";
  const URL_6 = ".png)";
  const FULL_URL = URL_1 + URL_2 + URL_3 + URL_4 + URL_5 + URL_6;

  let imageURL;
  if (!cell.isVisible()) {
    imageURL = null;
  } else if (cell.isDamaged() && ship.getHealth() > 0) {
    imageURL = "url(../images/cell-damaged-ship-alive.png)";
  } else {
    imageURL = FULL_URL;
  }
  return imageURL;
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
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_IS_WEAPON_READY.classList.add(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_TEXT_SHOW
    );
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_IS_WEAPON_READY.classList.remove(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_TEXT_HIDE
    );
  } else {
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.add(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_RED
    );
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_WEAPON_READY_INDICATOR.classList.remove(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_READY_GREEN
    );
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_IS_WEAPON_READY.classList.add(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_TEXT_HIDE
    );
    CONSTANTS.HTML.BATTLE.BATTLE_TEXT_IS_WEAPON_READY.classList.remove(
      CONSTANTS.CSS.SCREEN_BATTLE_WEAPON_TEXT_SHOW
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
  revealAllShips: revealAllShips,
};
export { BATTLE_VIEW };
