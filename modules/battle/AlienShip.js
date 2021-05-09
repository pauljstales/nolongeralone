import { AlienShipCell } from "./AlienShipCell.js";

/**
 * Class for the alien ship.
 */
class AlienShip {
  /**
   * Constructor for the alien ship.
   * @param {number} ID unique ID of this alien ship
   * @param {number} length number of grid cells this ship takes up
   */
  constructor(shipID, length) {
    this.shipID = shipID;
    this.length = length;
    this.orientation = null;
    this.isMovable = true;
    this.cells = [];
    this.generateCells(this.length);
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

  getIsDestroyed() {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i].getIsDamaged() == false) {
        console.log("undamaged cell found, this ship is not destroyed");
        return false;
      }
    }
    console.log("only damaged cells found, this ship is destroyed");
    return true;
  }

  /**
   * A "cell" is part of the ship, one battlefield grid box is one cell.
   * @param {number} length number of cells to create
   */
  generateCells(length) {
    for (let i = 0; i < length; i++) {
      const cell = new AlienShipCell(this.shipID + "-" + i);
      this.cells.push(cell);
    }
    ////console.log("Let us see those cells!");
    ////console.log(this.cells);
  }

  /**
   * Ships cannot extend past the grid border, or collide with other ships.
   * The start of the ship must be within "6-length" to stay in borders.
   * The ship cannot exist in any cell where there is already a ship cell.
   * @param {*} occupiedCells array of all cells where other ships exist
   * @returns
   */
  placeShip(occupiedCells) {
    let failedToPlaceShip = null;
    do {
      // 1 get ship orientation
      this.orientation = Math.random() > 0.5 ? "horizontal" : "vertical";
      //console.log("ship orientation: " + this.orientation);

      // 2 ensuring we remain in borders
      let tempCells = [];
      let row = Math.ceil(Math.random() * (7 - this.length));
      let col = Math.ceil(Math.random() * (7 - this.length));

      // 3 get cells
      for (let i = 0; i < this.length; i++) {
        if (this.orientation == "horizontal") {
          tempCells.push("R" + row + "_C" + parseInt(col + i));
        } else {
          tempCells.push("R" + parseInt(row + i) + "_C" + col);
        }
        //console.log("Ship " +this.shipID +", cell " +i +" is located at: " +tempCells[i]);
      }
      ////console.log("ships total cells");
      ////console.log(tempCells);

      // 3 make sure we do not collide with other ships
      for (let i = 0; i < tempCells.length; i++) {
        //console.log("checking for collisions");
        if (occupiedCells.includes(tempCells[i])) {
          //console.log("collision at: " + tempCells[i]);
          failedToPlaceShip = true;
          break; // out of for loop
        }
        failedToPlaceShip = false;
      }

      // 4 if we found no collisions, then add the locations
      if (failedToPlaceShip) {
        //console.log("Because of the collision, we need to try again.");
      } else {
        //console.log("if you see this, the ship placed successfully");
        failedToPlaceShip = false;
        for (let i = 0; i < this.cells.length; i++) {
          this.cells[i].location = tempCells[i];
          if (this.length == 2) {
            if (i == 0) {
              this.cells[i].image = "./images/ship-head-shaded.png";
            } else {
              this.cells[i].image = "./images/ship-tail-shaded.png";
            }
          } else if (this.length == 3) {
            if (i == 0) {
              this.cells[i].image = "./images/ship-head-shaded.png";
            } else if (i == 1) {
              this.cells[i].image = "./images/ship-body-shaded.png";
            } else if (i == 2) {
              this.cells[i].image = "./images/ship-tail-shaded.png";
            }
          } else if (this.length == 4) {
            if (i == 0) {
              this.cells[i].image = "./images/ship-head-shaded.png";
            } else if (i == 1 || i == 2) {
              this.cells[i].image = "./images/ship-body-shaded.png";
            } else if (i == 3) {
              this.cells[i].image = "./images/ship-tail-shaded.png";
            }
          }
        }
        //console.log("tempCells:");
        //console.log(tempCells);
        //console.log("ship cells:");
        //console.log(this.getCells());
        //console.log("**************************************************");
      }
    } while (failedToPlaceShip);
  }
}

export { AlienShip };
