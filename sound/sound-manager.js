/**
 * @fileoverview Sound manager acts an an API for the soundtrack and sound effects.
 * @summary module to play sound
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../constants/constants.js";

const SOUND = {
  MUSIC: {
    INTRO: new Audio("sound/music/NLA-01-Title.mp3"),
    MENU: new Audio("sound/music/NLA-02-Briefing.mp3"),
    BATTLE: new Audio("sound/music/NLA-03-Battle.mp3"),
    CREDITS_LOSE: new Audio("sound/music/NLA-04-Game_Over.mp3"),
    CREDITS_WIN: new Audio("sound/music/NLA-05-Victory-March.mp3"),
  },
  SFX: {
    //BUTTON_HOVER: new Audio("sound/sfx/fire.mp3"),
    //BUTTON_PRESS: new Audio("sound/sfx/fire.mp3"),
    SPECIAL_WEAPON_SELECTED: new Audio("sound/sfx/weapon-swap.mp3"),
    BATTLE_BASIC_LASER_FIRE: new Audio("sound/sfx/fire.mp3"),
    BATTLE_RADAR_FIRE: new Audio("sound/sfx/radar.mp3"),
    BATTLE_EMP_FIRE: new Audio("sound/sfx/emp.mp3"),
    BATTLE_PAUL_FIRE: new Audio("sound/sfx/plasma.mp3"),
    BATTLE_SHIP_MOVE: new Audio("sound/sfx/warp.mp3"),
    BATTLE_SHIP_HIT: new Audio("sound/sfx/hit.mp3"),
    BATTLE_WEAPON_NOT_READY: new Audio("sound/sfx/weaponNotReady.mp3"),
    BATTLE_TIMER_LOW: new Audio("sound/sfx/timerLow.mp3"),
    BATTLE_ALIEN_WEAPON_CHARGE: new Audio("sound/sfx/alienWeaponCharge.mp3"),
    //BATTLE_EASTEREGG_LANDING: new Audio("sound/sfx/fire.mp3"),
    //BATTLE_EASTEREGG_ADMIRAL: new Audio("sound/sfx/fire.mp3"),
    //BATTLE_EASTEREGG_EARTH: new Audio("sound/sfx/fire.mp3"),
  },
  playAudio: playAudio,
  stopAudio: stopAudio,
};

function playAudio(audioFile) {
  audioFile.play();
}

function stopAudio(audioFile) {
  audioFile.pause();
  audioFile.currentTime = 0;
}

export { SOUND };
