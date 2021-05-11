/**
 * @fileoverview Sound manager acts an an API for the soundtrack and sound effects.
 * @summary module to play sound
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

/**
 * The SOUND object acts as an API for getting both music and sound effects.
 * All of the music and sound effects were created by R.J. Vince.
 * You can see more of his work in links in the credits or on GitHub's README
 */
const SOUND = {
  MUSIC: {
    INTRO: new Audio("sound/music/NLA-01-Title.mp3"),
    MENU: new Audio("sound/music/NLA-02-Briefing.mp3"),
    BATTLE: new Audio("sound/music/NLA-03-Battle.mp3"),
    CREDITS_LOSE: new Audio("sound/music/NLA-04-Game_Over.mp3"),
    CREDITS_WIN: new Audio("sound/music/NLA-05-Victory-March.mp3"),
  },
  SFX: {
    BUTTON_PRESS: new Audio("sound/sfx/button-click.mp3"),
    SPECIAL_WEAPON_SELECTED: new Audio("sound/sfx/weapon-swap.mp3"),
    BATTLE_BASIC_LASER_FIRE: new Audio("sound/sfx/fire.mp3"),
    BATTLE_RADAR_FIRE: new Audio("sound/sfx/radar.mp3"),
    BATTLE_EMP_FIRE: new Audio("sound/sfx/emp.mp3"),
    BATTLE_PAUL_FIRE: new Audio("sound/sfx/plasma.mp3"),
    BATTLE_SHIP_MOVE: new Audio("sound/sfx/warp.mp3"),
    BATTLE_SHIP_HIT: new Audio("sound/sfx/hit.mp3"),
    BATTLE_SHIP_DESTROYED: new Audio("sound/sfx/kaboom.mp3"),
    BATTLE_WEAPON_NOT_READY: new Audio("sound/sfx/weapon-not-ready.mp3"),
    BATTLE_TIMER_OR_ENERGY_LOW: new Audio("sound/sfx/timer-or-energy-low.mp3"),
  },
  playAudio: playAudio,
  stopAudio: stopAudio,
};

/**
 * Plays an audio file object.
 * @param {audioFileObject} audioFile
 */
function playAudio(audioFile) {
  audioFile.play();
}

/**
 * Stops a playing audio file object.
 * @param {audioFileObject} audioFile
 */
function stopAudio(audioFile) {
  audioFile.pause();
  audioFile.currentTime = 0;
}

/**
 * Exported sound object
 */
export { SOUND };
