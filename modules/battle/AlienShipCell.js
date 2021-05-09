import { CONSTANTS } from "../../constants/constants.js";
import { CONFIGURATION } from "../../configuration/configuration.js";

/**
 * Class for the alien ship cells.
 */
class AlienShipCell {
  /**
   * Each part of the battlefield grid is a "cell"
   * The length of a ship is the number of its cells
   * @param {string} cellID the unique ID of this cell
   */
  constructor(cellID) {
    this.cellID = cellID;
    this.location = null;
    this.isVisible = false;
    this.isDamaged = false;
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

  getIsVisible() {
    return this.isVisible;
  }

  setIsVisible(isVisible, typeOfProjectile) {
    // radar makes this temporarily visible, not permanent
    if (this.isVisible == false && typeOfProjectile == CONSTANTS.GAME.RADAR) {
      setTimeout(() => {
        this.isVisible = false;
      }, CONFIGURATION.BATTLE_WEAPONS.RADAR_DURATION);
    }
    this.isVisible = isVisible;
  }

  getIsDamaged() {
    return this.isDamaged;
  }

  setIsDamaged(isDamaged) {
    this.isDamaged = isDamaged;
  }

  getImage() {
    return this.isDamaged;
  }

  setImage(image) {
    this.image = image;
  }
}

export { AlienShipCell };
