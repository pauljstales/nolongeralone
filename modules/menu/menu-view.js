/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the menu screen's UI.
 * @summary view object for menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";

/**
 * Show the menu screen
 */
function showMenuScreen() {
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

/**
 * Hide the menu screen
 */
function hideMenuScreen() {
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

/**
 * Highlights the weapon button pressed by the user.
 * De-highlights the other weapon buttons.
 */
function highlightWeaponSelectedButton(selectedWeapon) {
  const ALL_WEAPON_BUTTONS = [
    CONSTANTS.HTML.MENU.BUTTON_SELECT_RADAR,
    CONSTANTS.HTML.MENU.BUTTON_SELECT_EMP,
    CONSTANTS.HTML.MENU.BUTTON_SELECT_PAUL,
  ];

  ALL_WEAPON_BUTTONS.forEach((currentWeaponButton) => {
    if (currentWeaponButton != selectedWeapon) {
      currentWeaponButton.classList.remove(
        CONSTANTS.CSS.BUTTON_COLOR_DEFAULT_SELECTED
      );
      currentWeaponButton.classList.add(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT);
    }
    selectedWeapon.classList.add(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT_SELECTED);
    selectedWeapon.classList.remove(CONSTANTS.CSS.BUTTON_COLOR_DEFAULT);
  });
}

/**
 * Exportable view object for the menu
 */
const MENU_VIEW = {
  showMenuScreen: showMenuScreen,
  hideMenuScreen: hideMenuScreen,
  highlightWeaponSelectedButton: highlightWeaponSelectedButton,
};
export { MENU_VIEW };
