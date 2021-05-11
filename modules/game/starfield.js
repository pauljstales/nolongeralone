/**
 * @fileoverview This file is for controlling the "starfield" effect. The starfield is seen on every screen - the stars in the background are NOT from an animated image, but rather dynamically generated DIVs and CSS.
 * I (PJS) spent a lot of time on this - I hope you love it as much as I do!
 * @summary starfield file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../../constants/constants.js";
import { CONFIGURATION } from "../../configuration/configuration.js";

/**
 * The number of stars for this particular screen size.
 */
const NUM_STARS = calculateStarToPixelDensity();

/**
 * Determines number of stars based on height*width pixels, to keep all screens looking similar (rather than one size too dense or too sparse).
 * Funnily enough, that is a very subjective call - everyone complained it was too dense or too sparse, anyway.
 * @returns number of stars
 */
function calculateStarToPixelDensity() {
  let pixels = window.innerWidth * window.innerHeight;
  if (pixels >= CONSTANTS.SCREEN_SIZE_PIXELS.DESKTOP_1800K) {
    return 600;
  } else if (pixels >= CONSTANTS.SCREEN_SIZE_PIXELS.LAPTOP_1200K) {
    return 480;
  } else if (pixels >= CONSTANTS.SCREEN_SIZE_PIXELS.IPAD_775K) {
    return 360;
  } else if (pixels >= CONSTANTS.SCREEN_SIZE_PIXELS.IPHONE_6PLUS_300K) {
    return 240;
  } else if (pixels >= CONSTANTS.SCREEN_SIZE_PIXELS.IPHONE_6_250K) {
    return 180;
  } else {
    return 120;
  }
}

/**
 * Publicly available function to activate the starfield, all other functions are private to this module.
 */
function activate() {
  generateStarfield();
}

/**
 * Generate starfield clears all stars on every call.
 * It then creates a pre-determined number of stars (calculated by
 * calculateStarToPixelDensity) and animates them.
 * The average star's life is determined by constant AVERAGE_STAR_LIFE,
 * which was originally set to 90000 (90 seconds), and an additional 1-30 seconds to make stars have different lifetimes.
 */
function generateStarfield() {
  CONSTANTS.HTML.STARFIELD.innerHTML = "";
  const stars = [];

  for (let i = 0; i < NUM_STARS; i++) {
    stars.push(createStar());
  }

  stars.forEach((star) => {
    moveStar(star);
  });
}

/**
 * Create star creates a <div> element that is given styling to look like a star and be absolutely placed onto the "starfield" <div>.
 * Each star is given a random height and width, and placed top/left because it is absolutely positioned, relative to its container, starfield.
 * @returns A <div> that represents a star
 */
function createStar() {
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.backgroundColor = Math.random() > 0.5 ? "white" : "yellow";
  star.style.height =
    Math.ceil(Math.random() * CONFIGURATION.STAR.STAR_MAX_HEIGHT) + "px";
  star.style.width =
    Math.ceil(Math.random() * CONFIGURATION.STAR.STAR_MAX_WIDTH) + "px";
  star.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  star.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  return star;
}

/**
 * Moves a star in the starfield, providing for a nice background effect of moving stars.
 * Each <div> star is placed into its starfield container, given a random value for its lifetime and distance to move, and then eventually removed from the starfield as its life comes to an end.
 * The hard-coded values were chosen for what looks aesthetically pleasing on most screens, keeping in mind the smallest screen still in use - the iPhone6.
 * @param {<div> element} star a DIV that is a star
 */
function moveStar(star) {
  CONSTANTS.HTML.STARFIELD.appendChild(star);

  let t = Math.floor(
    Math.random() * CONFIGURATION.STAR.VARIABLE_ADDITIONAL_STAR_LIFETIME +
      CONFIGURATION.STAR.AVERAGE_STAR_LIFETIME
  );

  setTimeout(() => {
    let d = Math.random() * CONFIGURATION.STAR.STAR_ROTATE_DEGREES;
    let x =
      Math.random() * (window.innerWidth / 4) * (Math.random() > 0.5 ? 1 : -1);
    let y =
      Math.random() * (window.innerHeight / 4) * (Math.random() > 0.5 ? 1 : -1);

    star.style.transition = `all ${t / 1000}s`;
    star.style.transform = `rotate(${d}deg) translateX(${x}px) translateY(${y}px) scale(0.2)`;
  }, 1);

  setTimeout(() => {
    try {
      CONSTANTS.HTML.STARFIELD.removeChild(star);
    } catch (e) {
      /* When a new screen is selected, the starfield is reset. The setTimeouts still fire, attempting to remove stars that are no longer there. This is an error (trying to remove a non-existent element). This error is being suppressed because it is expected behavior. */
    }
  }, t);
}

/**
 * Exportable starfield object
 */
const STARFIELD = {
  activate: activate,
};
export { STARFIELD };
