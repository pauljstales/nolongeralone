/**
 * Class for the alien ship.
 */
class AlienShip {
  /**
   * Private field cells; length is the number of cells
   */
  _cells = [];
  _health = null;
  /**
   * Constructor for the alien ship.
   * @param {number} ID unique ID of this alien ship
   * @param {boolean} isMovable whether or not this ship can move
   * @param {string} orientation returns either horizontal or vertical
   * @param {number} health the health of the ship (undamaged cells)
   * @param {array} cells the "cell" of the ship is one part of the battlefield
   */
  constructor(ID, isMovable, length) {
    this.ID = ID;
    this.isMovable = isMovable;
    this.length = length;
    this.generateCells(length);
  }

  /**
   * Getter for the ship ID
   * @returns number ID of the ship
   */
  getShipID() {
    return this.ID;
  }

  /**
   * @param {number} id
   */
  setShipID(id) {
    this.ID = id;
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
  setIsMovable(booleanMovable) {
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
   * A "cell" is part of the ship, one battlefield grid box is one cell.
   * @param {number} length number of cells to create
   */
  generateCells(length) {
    for (let i = 0; i < length; i++) {
      const cell = {
        cellID: this.ID + "-" + i,
        gridLocationID: null,
        isVisible: false,
        isDamaged: false,
      };
      this._cells.push(cell);
    }
    //console.log("Let us see those cells!");
    //console.log(this._cells);
  }

  // todooooooooooo
  shipPlacement() {
    /* placing a ship means finding a spot
    that doesnt go off screen
    and does hit another ship
    and then updates the cell's grid locations
    this affects orientation, also
    */
  }

  didShotHit(battlefieldGridLocationID, typeOfProjectile) {
    /* go through the cells and see if anyone was hit */
    console.log("user fired a " + typeOfProjectile);
    console.log("user shot at " + battlefieldGridLocationID);
    _cells.forEach((currentCell) => {
      console.log("current cell " + gridLocationID);
      if (battlefieldGridLocationID == gridLocationID) {
        console.log("looks like a hit");
        console.log("by a " + typeOfProjectile);
      } else {
        console.log("looks like a miss");
      }
    });
  }

  shipHit(battlefieldGridLocationID, typeOfProjectile) {
    /* what was it hit by */
    /*
    radar means all cells are visible
    emp means ship cannot move
    paulnuke means all cells hit
    */
    // ------------------------------------------
    /* if the ship was hit, a cell was hit
    update the cell
    see if all cells are damaged, if so, this ship is destroyed
    and then if a ship is destroyed we need to check if all ships are destroyed
    */
  }
}

export { AlienShip };
