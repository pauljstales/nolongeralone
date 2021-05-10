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
 * Initializes the game values for a new game, setting energy and time to the configured values and allowing the user to fire the weapons.
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
   */
  function initializeShips() {
    // get ship lengths
    const squadronLengths = Math.random() > 0.5 ? [3, 3, 3] : [2, 3, 4];

    // create ships with id and length (ships make their own cells)
    battleData.ships[0] = new AlienShip(0, squadronLengths[0]);
    battleData.ships[1] = new AlienShip(1, squadronLengths[1]);
    battleData.ships[2] = new AlienShip(2, squadronLengths[2]);

    // place all the ships
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
  //////console.log("battleData.isWeaponFireable: " + battleData.weapon.isReadyToFire);
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
 * @param {number} timePassed
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

function fireWeapon(gridLocationID, typeOfProjectile) {
  //console.log("user fired a " + typeOfProjectile);
  //console.log("user shot at " + gridLocationID);

  battleData.ships.forEach((ship) => {
    ship.cells.forEach((cell) => {
      if (cell.location == gridLocationID) {
        if (cell.damaged == false && typeOfProjectile == CONSTANTS.GAME.LASER) {
          //console.log("Undamaged ship hit by laser");
          updateCell(ship, cell, typeOfProjectile);
        } else if (typeOfProjectile == CONSTANTS.GAME.PAUL) {
          //console.log("Paul destroys any ship, even if it hits a damaged part");
          updateCell(ship, cell, typeOfProjectile);
        }
      }
    });
  });

  if (
    typeOfProjectile == CONSTANTS.GAME.RADAR ||
    typeOfProjectile == CONSTANTS.GAME.EMP
  ) {
    //console.log("Radar and EMP work all the time.");
    updateCell(null, null, typeOfProjectile);
  }
}

function updateCell(ship, cell, typeOfProjectile) {
  //console.log("Updating ship");
  //console.log(ship);
  //console.log("Updating cell");
  //console.log(cell);
  //console.log("for typeOfProjectile " + typeOfProjectile);
  if (typeOfProjectile == CONSTANTS.GAME.LASER) {
    cell.setDamaged(true);
    cell.setVisible(true, typeOfProjectile);
    ship.setHealth(ship.getHealth() - 1);
    SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_HIT);
    if (ship.getHealth() == 0) {
      ship.setMovable(false, typeOfProjectile);
      SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_DESTROYED);
    }
  } else if (typeOfProjectile == CONSTANTS.GAME.RADAR) {
    battleData.ships.forEach((ship) => {
      ship.cells.forEach((cell) => {
        cell.setVisible(true, typeOfProjectile);
      });
    });
  } else if (typeOfProjectile == CONSTANTS.GAME.EMP) {
    battleData.ships.forEach((ship) => {
      ship.setMovable(false, typeOfProjectile);
    });
  } else if (typeOfProjectile == CONSTANTS.GAME.PAUL) {
    // The Plasma Arc Ultra Laser is nothing more than a more powerful
    // laser that can destroy the entire ship
    ship.setHealth(0);
    ship.setMovable(false, CONSTANTS.GAME.LASER);
    ship.cells.forEach((cell) => {
      cell.setDamaged(true);
      cell.setVisible(true, CONSTANTS.GAME.LASER);
      SOUND.playAudio(SOUND.SFX.BATTLE_SHIP_DESTROYED);
    });
  } else {
    //console.log("Updating cell failed.");
  }

  if (ship !== null) {
    //console.log("IMPORTANT, THIS SHIP's HEALTH IS: " + ship.getHealth());
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
 * ******* Ship Placement *******
 * ******************************************/

// place the ships on the grid (csi = current ship index)
function placeAllShips() {
  for (let csi = 0; csi < battleData.ships.length; csi++) {
    ////console.log("Working with ship number: " + csi);
    let occupiedCells = getCellsOccupiedByOtherShips(csi);
    placeShip(occupiedCells, battleData.ships[csi]);
  }
}

/**
 * Gets all of the cells occupied by other ships
 * For reference:
 * -- CSI = current ship's index
 * -- OSI = other ship's index
 * -- CCI = current cell's index
 * @returns array[string] cells occupied by other ships
 */
function getCellsOccupiedByOtherShips(csi) {
  //////console.log("starting to get cells occupied by other ships");
  let occupiedCells = [];
  for (let osi = 0; osi < battleData.ships.length; osi++) {
    if (csi != osi) {
      //////console.log("We need the cells of every OTHER ship, such as: " + osi);
      for (let cci = 0; cci < battleData.ships[osi].length; cci++) {
        if (battleData.ships[osi].cells[cci].location != null) {
          //////console.log("Adding occupied cell: " +battleData.ships[osi].cells[cci].location);
          occupiedCells.push(battleData.ships[osi].cells[cci].location);
        }
      } // end cci
    }
  } // end osi
  ////console.log("done getting occupied cells, here they are");
  ////console.log(occupiedCells);
  return occupiedCells;
}

/**
 * Ships cannot extend past the grid border, or collide with other ships.
 * The start of the ship must be within "6-length" to stay in borders.
 * The ship cannot exist in any cell where there is already a ship cell.
 * @param {array[Object]} occupiedCells - array of all battlefield cells with an alien ship cell present
 * @returns
 */
function placeShip(occupiedCells, ship) {
  // dead ships dont move
  if (!ship.isMovable) {
    return;
  }

  let failedToPlaceShip = null;
  do {
    // 1 get ship orientation
    ship.orientation = Math.random() > 0.5 ? "horizontal" : "vertical";
    ////console.log("ship orientation: " + ship.orientation);

    // 2 ensuring we remain in borders
    let row = Math.ceil(Math.random() * (7 - ship.length));
    let col = Math.ceil(Math.random() * (7 - ship.length));

    // 3 get temporary, possible cell locations
    let possibleCellLocations = [];
    for (let i = 0; i < ship.length; i++) {
      if (ship.orientation == "horizontal") {
        possibleCellLocations.push("R" + row + "_C" + parseInt(col + i));
      } else {
        possibleCellLocations.push("R" + parseInt(row + i) + "_C" + col);
      }
      ////console.log("Ship " +ship.shipID +", cell " +i +" is located at: " +possibleCellLocations[i]);
    }
    //////console.log("ships total cells");
    //////console.log(possibleCellLocations);

    // 4 make sure we do not collide with other ships
    for (let i = 0; i < possibleCellLocations.length; i++) {
      ////console.log("checking for collisions");
      if (occupiedCells.includes(possibleCellLocations[i])) {
        ////console.log("collision at: " + possibleCellLocations[i]);
        failedToPlaceShip = true;
        break; // out of for loop
      }
      failedToPlaceShip = false;
    }

    // 5 if we found no collisions, then add the locations
    if (failedToPlaceShip) {
      ////console.log("Because of the collision, we need to try again.");
    } else {
      ////console.log("if you see this, the ship placed successfully");
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
 * This class is NOT available oucside of BATTLE_MODEL.
 */
class AlienShip {
  /**
   * Constructor for Alien Ship
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
   * Getter for the ship ID
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
   * Alien ships are moveable UNLESS they are under the effects of an EMP or completely destroyed.
   * @returns boolean whether or not the ship is moveable
   */
  isMovable() {
    return this.isMovable;
  }

  /**
   * Setter for isMovable
   * @param {boolean} booleanMovable boolean value that determines ship mobility
   */
  setMovable(booleanMovable, typeOfProjectile) {
    // EMP makes this temporarily not moveable, not permanent
    if (this.isMovable == true && typeOfProjectile == CONSTANTS.GAME.EMP) {
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
   * Getter for the orientation
   * @returns string - orientation
   */
  getOrientation() {
    return this.orientation;
  }

  /**
   * Setter for orientation
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
    this.image = null;
  }

  getCellID() {
    return this.cellID;
  }

  setCellID(cellID) {
    this.cellID = cellID;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location) {
    this.location = location;
  }

  isVisible() {
    return this.visible;
  }

  setVisible(visible, typeOfProjectile) {
    // radar makes this temporarily visible, not permanent
    if (this.visible == false && typeOfProjectile == CONSTANTS.GAME.RADAR) {
      setTimeout(() => {
        if (!this.isDamaged()) {
          this.visible = false;
        }
      }, CONFIGURATION.BATTLE_WEAPONS.RADAR_DURATION);
    }
    this.visible = visible;
  }

  isDamaged() {
    return this.damaged;
  }

  setDamaged(damaged) {
    this.damaged = damaged;
  }

  getShipPart() {
    return this.shipPart;
  }

  setShipPart(shipPart) {
    this.shipPart = shipPart;
  }

  getImage() {
    return this.image;
  }

  setImage(image) {
    this.image = image;
  }
}
