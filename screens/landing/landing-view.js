/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

/**
 * This function expression is immediately invoked (IIFE!) to load the progress bar and give some resources time to pre-load.
 */
function showLandingText() {
  const SCREEN_LANDING_1 = document.getElementById("SCREEN_LANDING_1");
  const PROGRESS_BAR = document.getElementById("SCREEN_PROGRESS_BAR");
  const SCREEN_LANDING_2 = document.getElementById("SCREEN_LANDING_2");

  const TIME_PER_INTERVAL = 5; // testing 1-5, production 20-25
  let processBarPercentage = 0;

  let processBarPercentageInterval = setInterval(() => {
    PROGRESS_BAR.value = processBarPercentage;
    processBarPercentage++;
    if (processBarPercentage >= 101) {
      SCREEN_LANDING_1.style.display = "none";
      SCREEN_LANDING_2.classList.add("screen--display--flexCol");
      SCREEN_LANDING_2.classList.remove("screen--display--none");
      clearInterval(processBarPercentageInterval);
    }
  }, TIME_PER_INTERVAL);
}

showLandingText();
