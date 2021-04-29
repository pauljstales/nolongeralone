/**
 * @fileoverview View of the MVC pattern, responsible for dealing with the UI. This particular controller is responsible for the menu screen's UI.
 * @summary view object for menu screen
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { MENU_MODEL } from "/modules/menu/menu-model.js";
import { MENU_CONTROLLER } from "/modules/menu/menu-controller.js";

/** Exportable view object for the menu screen */
const MENU_VIEW = {
  hideMenu: hideMenu,
  showTutorial: showTutorial,
  showBattle: showBattle,
  highlightWeaponSelectedButton: highlightWeaponSelectedButton,
};

function hideMenu() {
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
  CONSTANTS.HTML.MENU.SCREEN_MENU.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
}

function showTutorial() {
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.TUTORIAL.SCREEN_TUTORIAL.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

function showBattle() {
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.add(
    CONSTANTS.CSS.SCREEN_DISPLAY_BLOCK
  );
  CONSTANTS.HTML.BATTLE.SCREEN_BATTLE.classList.remove(
    CONSTANTS.CSS.SCREEN_DISPLAY_NONE
  );
}

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

export { MENU_VIEW };
