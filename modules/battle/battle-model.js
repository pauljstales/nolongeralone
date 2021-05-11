/**
 * @fileoverview Battle's model (MVC pattern), responsible managing all data related to the battle.
 * Battle's controller is the only access into the model.
 * Battle is THE actual game portion, and most game-related data is here, with one or two exceptions.
 * @summary model object for the battle screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../../configuration/configuration.js";
import { SOUND } from "../../sound/sound-manager.js";
import { CONSTANTS } from "../../constants/constants.js";

/**
 * Encapsulated data for the battle
 */
const battleData = {
  specialWeapon: {
    name: null,
    isReadyToFire: null,
  },
  weapon: {
    isReadyToFire: null,
  },
  gameOverConditions: {
    energy: null,
    time: null,
    shipsRemaining: null,
  },
  ships: [],
};

/**
 * Initializes the game values for a new game.
 * Game values are set to the configuration values, and the weapons are set to the correct values.
 */
function initializeGameValues() {
  // battleData.specialWeapon.name set by another function
  battleData.specialWeapon.isReadyToFire = false;
  battleData.weapon.isReadyToFire = true;
  battleData.gameOverConditions.energy =
    CONFIGURATION.BATTLE_ENERGY.ENERGY_INITIAL;
  battleData.gameOverConditions.time =
    CONFIGURATION.BATTLE_TIMING.BATTLE_TIME_INITIAL;
  battleData.gameOverConditions.shipsRemaining = 3;
  battleData.ships = [];
  initializeShips();

  /**
   * Initialize all 3 alien ships, and sets them onto the BattleData object.
   * The squadronLengths chooses the lengths of the three alien ships, choices being either 3 3 3 or 4 3 2.
   * Alien Ships create their own "cells", a cell being a grid cell.
   * Once ships are created, place them onto the battlefield table.
   */
  function initializeShips() {
    const squadronLengths = Math.random() > 0.5 ? [3, 3, 3] : [2, 3, 4];

    battleData.ships[0] = new AlienShip(0, squadronLengths[0]);
    battleData.ships[1] = new AlienShip(1, squadronLengths[1]);
    battleData.ships[2] = new AlienShip(2, squadronLengths[2]);

    placeAllShips();
  }
}

/**
 * Getter for the name of the special weapon
 * @returns the name of the special weapon
 */
function getSpecialWeaponName() {
  return battleData.specialWeapon.name;
}

/**
 * Setter for the name of the special weapon
 * @param {string} specialWeaponName
 */
function setSpecialWeaponName(specialWeaponName) {
  battleData.specialWeapon.name = specialWeaponName;
}

/**
 * Returns whether or not the special weapon can be armed (null), is armed (true), or can no longer be armed because there is not enough energy or it was already fired (false)
 * @returns boolean concerning special weapon's fireable status
 */
function isSpecialWeaponReadyToFire() {
  return battleData.specialWeapon.isReadyToFire;
}

/**
 * Sets the special weapon to fireable or not.
 * TRUE: Arms the special weapon for firing, and the next click will fire the special weapon (then the special weapon ready-to-fire will be false)
 * FALSE: The special weapon can no longer be fired because there is not enough energy, or it was already fired
 */
function setSpecialWeaponReadyToFire(isFireableBoolean) {
  battleData.specialWeapon.isReadyToFire = isFireableBoolean;
}

/**
 * In order to keep players from spamming the fire key (and messing up the graphics, model, etc.) they can only fire every so often (controlled by configuration's BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME).
 * Before firing, this boolean is checked to determine if they can fire.
 * @returns boolean concerning if any weapon can be fired
 */
function isWeaponFireable() {
  return battleData.weapon.isReadyToFire;
}

/**
 * When a user fires a weapon, this is set to false.
 * A setTimeout for BATTLE_TIMING.BATTLE_FIRE_WEAPON_TIME is executed, and at the end of that time, this will be set to true again, allowing another shot.
 * @param {boolean} weaponFireableStatus
 */
function setWeaponFireable(weaponFireableStatus) {
  battleData.weapon.isReadyToFire = weaponFireableStatus;
}

/**
 * Getter for energy (there is no setter, energy is initialized with the configuration value)
 * @returns number representing the energy remaining
 */
function getEnergy() {
  return battleData.gameOverConditions.energy;
}

/**
 * After successfully firing a shot, decrease the energy by this amount
 * @param {number} energyUsed
 */
function decreaseEnergy(energyUsed) {
  battleData.gameOverConditions.energy -= energyUsed;
}

/**
 * Getter for time (there is no setter, time is initialized with the configuration value)
 * @returns number representing the time remaining
 */
function getTime() {
  return battleData.gameOverConditions.time;
}
/**
 * As the game loop ticks by configuration's BATTLE_TIMING.TIME_PER_GAMELOOP, each loop decreases the time by that amount.
 */
function decreaseTime() {
  battleData.gameOverConditions.time -=
    CONFIGURATION.BATTLE_TIMING.TIME_PER_GAMELOOP;
}

/**
 * Getter for shipsRemaining (there is no setter, fire weapon updates this)
 * @returns number representing the ships remaining
 */
function getShipsRemaining() {
  return battleData.gameOverConditions.shipsRemaining;
}

/**
 * Checks if the special weapon was selected and is "ready for fire".
 * If YES, then determine which special weapon and adjust the values.
 * Since the special weapon is about to be fired, set its "ready for fire" to be false so it is not fired again for this game.
 * Else NO, the default laser weapon is the weapon to be fired.
 * @returns weapon object consisting of the weapon's type, sound, and cost
 */
function determineWeaponToBeFired() {
  let weapon = {
    weaponType: null,
    weaponSound: null,
    weaponEnergyCost: null,
  };
  weapon.weaponType = CONSTANTS.GAME.LASER;
  weapon.weaponSound = SOUND.SFX.BATTLE_BASIC_LASER_FIRE;
  weapon.weaponEnergyCost = CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_LASER;
  if (BATTLE_MODEL.isSpecialWeaponReadyToFire()) {
    weapon.weaponType = BATTLE_MODEL.getSpecialWeaponName();
    if (weapon.weaponType == CONSTANTS.GAME.RADAR) {
      weapon.weaponSound = SOUND.SFX.BATTLE_RADAR_FIRE;
      weapon.weaponEnergyCost = CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR;
    } else if (weapon.weaponType == CONSTANTS.GAME.EMP) {
      weapon.weaponSound = SOUND.SFX.BATTLE_EMP_FIRE;
      weapon.weaponEnergyCost = CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP;
    } else if (weapon.weaponType == CONSTANTS.GAME.PAUL) {
      weapon.weaponSound = SOUND.SFX.BATTLE_PAUL_FIRE;
      weapon.weaponEnergyCost = CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL;
    }
    BATTLE_MODEL.setSpecialWeaponReadyToFire(false);
  }
  return weapon;
}
/**
 * Getter for ships
 * @returns array[AlienShip] an array of alien ships
 */
function getShips() {
  return battleData.ships;
}

/**
 * Fire weapon actually fires the weapon.
 * Because only the HTML DOM ID is known from the player's click, this determines which cell is located at that DOM ID.
 * Knowing the cell also tells us which ship, so we can update the ship and cell according to the type of weapon fired.
 * Note that only the laser and plasma-arc-ultra-laser PAUL need to actually hit a cell to work; radar and EMP work everywhere even on a miss.
 * @param {string} gridLocationID The HTML DOM ID
 * @param {string} weaponType the type of weapon
 */
function fireWeapon(gridLocationID, weaponType) {
  battleData.ships.forEach((ship) => {
    ship.cells.forEach((cell) => {
      if (cell.location == gridLocationID) {
        if (cell.damaged == false && weaponType == CONSTANTS.GAME.LASER) {
          updateCell(ship, cell, weaponType);
        } else if (weaponType == CONSTANTS.GAME.PAUL) {
          updateCell(ship, cell, weaponType);
        }
      }
    });
  });

  if (weaponType == CONSTANTS.GAME.RADAR || weaponType == CONSTANTS.GAME.EMP) {
    updateCell(null, null, weaponType);
  }
}

/**
 * If a cell is hit, OR if a weapon that affects all cells is fired, we must update the appropriate cell(s).
 * -- LASER will damage any non-damaged cell, make it visible, and decrease the ship's health.
 * -- RADAR makes all ships and all cells temporarily visible.
 * -- EMP will disable movement/warping for all ships for a short time.
 * -- PAUL, the Plasma-Arc-Ultra-Laser, is simply a laser that passes through the entire alien ship, so it is treated as a laser hit on every cell of a ship.
 * At the end, check if the ship is dead, and update the gameover condition.
 * @param {AlienShip} ship alien ship object
 * @param {AlienShipCell} cell a cell of an alien ship
 * @param {string} weaponType the type of weapon
 */
function updateCell(ship, cell, weaponType) {
  if (weaponType == CONSTANTS.GAME.LASER) {
    cell.setDamaged(true);
    cell.setVisible(true, weaponType);
    ship.setHealth(ship.getHealth() - 1);
    SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_HIT);
    if (ship.getHealth() == 0) {
      ship.setMovable(false, weaponType);
      SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_DESTROYED);
    }
  } else if (weaponType == CONSTANTS.GAME.RADAR) {
    battleData.ships.forEach((ship) => {
      ship.cells.forEach((cell) => {
        cell.setVisible(true, weaponType);
      });
    });
  } else if (weaponType == CONSTANTS.GAME.EMP) {
    battleData.ships.forEach((ship) => {
      ship.setMovable(false, weaponType);
    });
  } else if (weaponType == CONSTANTS.GAME.PAUL) {
    ship.setHealth(0);
    ship.setMovable(false, CONSTANTS.GAME.LASER);
    ship.cells.forEach((cell) => {
      cell.setDamaged(true);
      cell.setVisible(true, CONSTANTS.GAME.LASER);
      SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_DESTROYED);
    });
  }

  if (ship !== null) {
    if (ship.getHealth() == 0) {
      battleData.gameOverConditions.shipsRemaining -= 1;
    }
  }
}

/**
 * Exportable model for battle
 */
const BATTLE_MODEL = {
  initializeGameValues: initializeGameValues,
  getSpecialWeaponName: getSpecialWeaponName,
  setSpecialWeaponName: setSpecialWeaponName,
  isSpecialWeaponReadyToFire: isSpecialWeaponReadyToFire,
  setSpecialWeaponReadyToFire: setSpecialWeaponReadyToFire,
  isWeaponFireable: isWeaponFireable,
  setWeaponFireable: setWeaponFireable,
  getEnergy: getEnergy,
  decreaseEnergy: decreaseEnergy,
  getTime: getTime,
  decreaseTime: decreaseTime,
  determineWeaponToBeFired: determineWeaponToBeFired,
  getShips: getShips,
  getShipsRemaining: getShipsRemaining,
  fireWeapon: fireWeapon,
  placeAllShips: placeAllShips,
};
export { BATTLE_MODEL };

/* ******************************************
 * ************* Ship Placement *************
 * ******************************************/

/**
 * This begins to place all 3 of the alien ships.
 * Because this is a complicated process, it has several steps and helper functions.
 * First, it calls getCellsOccupiedByOtherShips to get all of the cells that have ships in them.
 * Second, it tries to place a ship via placeShip, avoiding any currently taken cell and staying within the boundaries of the game.
 */
function placeAllShips() {
  for (let csi = 0; csi < battleData.ships.length; csi++) {
    let occupiedCells = getCellsOccupiedByOtherShips(csi);
    placeShip(occupiedCells, battleData.ships[csi]);
  }
}

/**
 * Gets all of the cells occupied by other ships
 *
 * @returns array[string] cells occupied by other ships
 */

/**
 * This goes through every ship and every ship's cell to gather all of the locations that currently have a ship.
 * This "occupiedCells" awway is used to ensure a ship is not placed on top of another ship.
 * For reference:
 * -- CSI = current ship's index
 * -- OSI = other ship's index
 * -- CCI = current cell's index
 * @param {number} csi the "current ship index"
 * @returns array of locations currently holding a ship
 */
function getCellsOccupiedByOtherShips(csi) {
  let occupiedCells = [];
  for (let osi = 0; osi < battleData.ships.length; osi++) {
    if (csi != osi) {
      for (let cci = 0; cci < battleData.ships[osi].length; cci++) {
        if (battleData.ships[osi].cells[cci].location != null) {
          occupiedCells.push(battleData.ships[osi].cells[cci].location);
        }
      } // end cci
    }
  } // end osi
  return occupiedCells;
}

/**
 * Once a ship is given an orientation and a starting point (chosen to avoid being out-of-bounds) the rest of its cells are determined based on its length.
 * These are "possible cell locations" because we need to ensure there are no collisions with other ships before actually placing the ship.
 * If a collision is found, the loop with try again until it successfully places the ship onto the grid.
 * A successfully placed ship has its cells assigned to those locations, and each cell is assigned its corresponding part of the ship: head, body, or tail.
 * @param {array[string]} occupiedCells strings of locations with ship cells
 * @param {AlienShip} ship alien ship object
 * @returns early return if the ship is dead, so undefined
 */
function placeShip(occupiedCells, ship) {
  if (!ship.isMovable) {
    return; // dead ships don't move
  }

  let failedToPlaceShip = null;
  do {
    ship.orientation = Math.random() > 0.5 ? "horizontal" : "vertical";

    let row = Math.ceil(Math.random() * (7 - ship.length));
    let col = Math.ceil(Math.random() * (7 - ship.length));

    let possibleCellLocations = [];
    for (let i = 0; i < ship.length; i++) {
      if (ship.orientation == "horizontal") {
        possibleCellLocations.push("R" + row + "_C" + parseInt(col + i));
      } else {
        possibleCellLocations.push("R" + parseInt(row + i) + "_C" + col);
      }
    }

    for (let i = 0; i < possibleCellLocations.length; i++) {
      if (occupiedCells.includes(possibleCellLocations[i])) {
        failedToPlaceShip = true;
        break; // stop searching, we found a collision
      }
      failedToPlaceShip = false;
    }

    if (!failedToPlaceShip) {
      for (let i = 0; i < ship.cells.length; i++) {
        ship.cells[i].setLocation(possibleCellLocations[i]);
        if (i == 0) {
          ship.cells[i].setShipPart(CONSTANTS.SHIP_PART.HEAD);
        } else if (i == ship.cells.length - 1) {
          ship.cells[i].setShipPart(CONSTANTS.SHIP_PART.TAIL);
        } else {
          ship.cells[i].setShipPart(CONSTANTS.SHIP_PART.BODY);
        }
      }
    }
  } while (failedToPlaceShip);
}

/* ******************************************
 * ******* Ship and Ship Cell Objects *******
 * ******************************************/

/**
 * Class for Alien Ship.
 * This class is NOT available outside of BATTLE_MODEL.
 */
class AlienShip {
  /**
   * Constructor for Alien Ship
   * The call to the constructor will generate the Alien Ship AND the Alien Ship's cells (AlienShipCell).
   * @param {string} shipID unique ID for a ship
   * @param {number} length the length/size of a ship
   */
  constructor(shipID, length) {
    this.shipID = shipID;
    this.length = length;
    this.health = length;
    this.orientation = null;
    this.isMovable = true;
    this.cells = [];
    this.generateCells(this.length);
  }

  /**
   * A "cell" is part of the ship, one battlefield grid box is one cell.
   * @param {number} length - number of cells to create
   */
  generateCells(length) {
    for (let i = 0; i < length; i++) {
      const cell = new AlienShipCell(this.shipID + "-" + i);
      this.cells.push(cell);
    }
  }

  /**
   * Getter for the ship ID, which is its index position
   * @returns number ID of the ship
   */
  getShipID() {
    return this.shipID;
  }

  /**
   * Setter for ID
   * @param {number} id
   */
  setShipID(id) {
    this.shipID = id;
  }

  /**
   * Getter for isMovable
   * Alien ships are moveable UNLESS under the effects of an EMP or destroyed.
   * @returns boolean whether or not the ship is moveable
   */
  isMovable() {
    return this.isMovable;
  }

  /**
   * Setter for isMovable
   * @param {boolean} booleanMovable boolean value that determines ship mobility
   */
  setMovable(booleanMovable, weaponType) {
    // EMP only *temporarily* stops movement
    if (this.isMovable == true && weaponType == CONSTANTS.GAME.EMP) {
      setTimeout(() => {
        this.isMovable = true;
      }, CONFIGURATION.BATTLE_WEAPONS.EMP_DURATION);
    }
    this.isMovable = booleanMovable;
  }

  /**
   * Getter for length (number of cells)
   * @returns number, number of cells AKA "length"
   */
  getLength() {
    return this.length;
  }

  /**
   * Setter for length (number of cells)
   * @param {number} length is the number of cells of the ship
   */
  setLength(length) {
    this.length = length;
  }

  /**
   * Getter for the ship health
   * @returns number of health remaining for the ship
   */
  getHealth() {
    return this.health;
  }

  /**
   *  Getter for the ship health
   * @param {number} health - numeric representation of ship health
   */
  setHealth(health) {
    this.health = health;
  }

  /**
   * Getter for the orientation of the ship (vertical or horizontal)
   * @returns string - orientation
   */
  getOrientation() {
    return this.orientation;
  }

  /**
   * Setter for orientation of the ship (vertical or horizontal)
   * @param {string} orientation
   */
  setOrientation(orientation) {
    this.orientation = orientation;
  }

  /**
   * Getter for an individual cell by cellID
   * @returns object AlienShipCell
   */
  getCell(cellID) {
    return this.cells[cellID];
  }

  /**
   * Getter for cells
   * @returns array
   */
  getCells() {
    return this.cells;
  }

  /**
   * Setter for cells
   * @param {number} length is the number of cells of the ship
   */
  setCells(cells) {
    this.cells = cells;
  }
}

/**
 * Class for Alien Ship Cells.
 * This class is NOT available oucside of BATTLE_MODEL.
 */
class AlienShipCell {
  constructor(cellID) {
    this.cellID = cellID;
    this.location = null;
    this.visible = false;
    this.damaged = false;
    this.shipPart = null;
  }

  /**
   * Gets the cellID
   * @returns the unique cell ID, shipID-cellID
   */
  getCellID() {
    return this.cellID;
  }

  /**
   * Sets the cellID
   * @param {string} cellID the unique cell ID
   */
  setCellID(cellID) {
    this.cellID = cellID;
  }

  /**
   * Gets the location of this cell on the battlefield table
   * @returns string representing the HTML DOM ID
   */
  getLocation() {
    return this.location;
  }

  /**
   * Sets the location of this cell on the battlefield table
   * @param {string} location the HTML DOM ID this cell will exist at
   */
  setLocation(location) {
    this.location = location;
  }

  /**
   * Getter for whether or not the cell is visible
   * Cells are visible under the effects of radar or when damaged
   * @returns boolean
   */
  isVisible() {
    return this.visible;
  }

  /**
   * Setter for cell's visibility
   * @param {boolean} visible whether or not the cell is visible
   * @param {string} weaponType the type of weapon used to hit the cell
   */
  setVisible(visible, weaponType) {
    // RADAR only *temporarily* makes this cell visible
    if (this.visible == false && weaponType == CONSTANTS.GAME.RADAR) {
      setTimeout(() => {
        if (!this.isDamaged()) {
          this.visible = false;
        }
      }, CONFIGURATION.BATTLE_WEAPONS.RADAR_DURATION);
    }
    this.visible = visible;
  }

  /**
   * Getter for cell's damaged status
   */
  isDamaged() {
    return this.damaged;
  }

  /**
   * Setter for cell's damaged status
   * @param {boolean} damaged whether or not the cell is damaged
   */
  setDamaged(damaged) {
    this.damaged = damaged;
  }

  /**
   * Getter for ship part: either head, body, or tail
   * @returns string which part of the ship this cell is
   */
  getShipPart() {
    return this.shipPart;
  }

  /**
   * Setter for ship part: either head, body, or tail
   * @param {string} shipPart string which part of the ship this cell is
   */
  setShipPart(shipPart) {
    this.shipPart = shipPart;
  }
}
