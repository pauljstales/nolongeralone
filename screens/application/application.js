/**
 * @fileoverview This file is for application-wide JavaScript.
 * @summary application-wide JavaScript
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

const SCREEN_CONTAINER_LANDING = document.getElementById(
  "SCREEN-CONTAINER-LANDING"
);
const SCREEN_CONTAINER_INTRO = document.getElementById(
  "SCREEN-CONTAINER-INTRO"
);
const SCREEN_CONTAINER_MENU = document.getElementById("SCREEN-CONTAINER-MENU");
const SCREEN_CONTAINER_TUTORIAL = document.getElementById(
  "SCREEN-CONTAINER-TUTORIAL"
);
const SCREEN_CONTAINER_BATTLE = document.getElementById(
  "SCREEN-CONTAINER-BATTLE"
);
const SCREEN_CONTAINER_CREDITS = document.getElementById(
  "SCREEN-CONTAINER-CREDITS"
);
const ALL_SCREEN_CONTAINERS = [
  SCREEN_CONTAINER_LANDING,
  SCREEN_CONTAINER_INTRO,
  SCREEN_CONTAINER_MENU,
  SCREEN_CONTAINER_TUTORIAL,
  SCREEN_CONTAINER_BATTLE,
  SCREEN_CONTAINER_CREDITS,
];

const SOUNDTRACK_INTRO = new Audio("../../resources/music/NLA-01-Title.mp3");
const SOUNDTRACK_MENU = new Audio("../../resources/music/NLA-02-Briefing.mp3");
const SOUNDTRACK_BATTLE = new Audio("../../resources/music/NLA-03-Battle.mp3");
const SOUNDTRACK_CREDITS = new Audio(
  "../../resources/music/NLA-04-Game_Over.mp3"
);

const SFX_EMP = new Audio("../../resources/sfx/emp.mp3");
const SFX_PLASMA = new Audio("../../resources/sfx/plasma.mp3");
const SFX_RADAR = new Audio("../../resources/sfx/radar.mp3");
const SFX_WARP = new Audio("../../resources/sfx/warp.mp3");
