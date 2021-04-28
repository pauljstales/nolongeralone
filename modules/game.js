/**
 * @fileoverview This file is for application-wide JavaScript.
 * @summary application-wide JavaScript
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";
import { LANDING_VIEW } from "/modules/landing/landing-view.js";
import { LANDING_CONTROLLER } from "/modules/landing/landing-controller.js";
import { INTRO_CONTROLLER } from "/modules/intro/intro-controller.js";
import { MENU_CONTROLLER } from "/modules/menu/menu-controller.js";
import { TUTORIAL_CONTROLLER } from "/modules/tutorial/tutorial-controller.js";
import { BATTLE_CONTROLLER } from "/modules/battle/battle-controller.js";
import { CREDITS_CONTROLLER } from "/modules/credits/credits-controller.js";

window.onload = gameStartup;

function gameStartup() {
  LANDING_VIEW.loadProgressBar();
  LANDING_CONTROLLER.registerEventListeners();
  INTRO_CONTROLLER.registerEventListeners();
  MENU_CONTROLLER.registerEventListeners();
  TUTORIAL_CONTROLLER.registerEventListeners();
  BATTLE_CONTROLLER.registerEventListeners();
  CREDITS_CONTROLLER.registerEventListeners();
}
