/**
 * @fileoverview This file is for controlling the "starfield" effect. The starfield is seen on every screen - the stars in the background are NOT from an animated image, but rather dynamically generated DIVs.
 * @summary starfield file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONSTANTS } from "../../../constants/constants.js";
import { CONFIGURATION } from "../../configuration/configuration.js";

/**
 * Constant values and variable values
 */
const NUM_STARS = calculateStarToPixelDensity();

/**
 * Exportable starfield object
 */
const STARFIELD = {
  activate: activate,
};

/**
 * Determines number of stars based on height*width pixels, to keep all screens looking similar (rather than one size too dense or too sparse).
 * Funnily enough, that is a very subjective call - everyone complained it was too dense or too sparse, anyway.
 * @returns number of stars
 */
function calculateStarToPixelDensity() {
  let pixels = window.innerWidth * window.innerHeight;
  if (pixels < 120000) {
    return 120;
  } else if (pixels < 240000) {
    return 240;
  } else if (pixels < 360000) {
    return 360;
  } else if (pixels < 480000) {
    return 480;
  } else {
    return 600;
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
 * calculateStarToPixelDensity) and finally animates them.
 * The average star's life is determined by constant AVERAGE_STAR_LIFE,
 * which was originally set to 60 (seconds).
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
  star.style.height = Math.ceil(Math.random() * 3) + "px";
  star.style.width = Math.ceil(Math.random() * 3) + "px";
  star.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  star.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  return star;
}

/**
 * Moves a star in the starfield, providing for a nice background effect of moving stars.
 * Each <div> star is placed into its starfield container, given a random value for its lifetime and distance to move, and then eventually removed from the starfield as its motion comes to an end.
 * The hard-coded values were chosen for what looks aesthetically pleasing on most screens, keeping in mind the smallest screen still in use - the iPhone5.
 * @param {<div> element} star a DIV that is a star
 */
function moveStar(star) {
  CONSTANTS.HTML.STARFIELD.appendChild(star);

  let t = Math.random() * 30000 + CONFIGURATION.AVERAGE_STAR_LIFETIME;

  setTimeout(() => {
    let d = Math.random() * 60;
    let x =
      Math.random() * (window.innerWidth / 4) * (Math.random() > 0.5 ? 1 : -1);
    let y =
      Math.random() * (window.innerHeight / 4) * (Math.random() > 0.5 ? 1 : -1);

    star.style.transition = `all ${t / 1000}s`;
    star.style.transform = `rotate(${d}deg) translateX(${x}px) translateY(${y}px) scale(0.1)`;
  }, 1);

  setTimeout(() => {
    try {
      CONSTANTS.HTML.STARFIELD.removeChild(star);
    } catch (e) {
      // Attempted to remove a star was already cleared from starfield via hitting the next screen's button. Suppressing this "error".
    }
  }, t);
}

export { STARFIELD };
