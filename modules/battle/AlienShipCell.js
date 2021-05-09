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
    this.isVisible = null;
    this.isDamaged = null;
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

  setIsVisible(isVisible) {
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
