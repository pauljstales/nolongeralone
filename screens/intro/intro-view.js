/**
 * @fileoverview The view as part of the MVC design pattern, responsible for dealing with the UI.
 * @summary view object
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

/**
 * Function loadIntroScrollingText() is invoked on launch.
 * This function is responsible for the loading of the introduction text, according to the specific setTimeout timings.
 */
loadIntroScrollingText();

/**
 * Container function for the various effects used in the introduction screen.
 * Timeouts were used rather than animations (or animation frames) because it worked out nicely as far fading the text in in sequence.
 * There are 4 inner, private helper functions for each part of the introduction.
 * Time breakdown as below:
 * -- From 3s-15s the introduction text is shown.
 * -- At 18s the introduction text is hidden.
 * -- At 18s the title text is shown.
 * -- At 21s the "prepare for battle" button is shown
 */
function loadIntroScrollingText() {
  const TIME_PER_INTRO_TEXT = 1000; // testing
  // const TIME_PER_INTRO_TEXT = 2000; // production
  const TIME_UNTIL_TITLE_TEXT = TIME_PER_INTRO_TEXT * 8;
  const TIME_UNTIL_TITLE_LINK_AS_BUTTON = TIME_PER_INTRO_TEXT * 10;

  showIntroText();
  hideIntroText();
  showTitleText();
  showPrepareBattlelinkAsButton();

  function showIntroText() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        document
          .getElementById(`INTRO_TEXT_${i}`)
          .classList.remove("screen__text--opacity--none");
        document
          .getElementById(`INTRO_TEXT_${i}`)
          .classList.add("screen__text--opacity--show");
      }, i * TIME_PER_INTRO_TEXT);
    }
  }

  function hideIntroText() {
    const SCREEN_INTRO_1 = document.getElementById("SCREEN_INTRO_1");
    const SCREEN_INTRO_2 = document.getElementById("SCREEN_INTRO_2");

    setTimeout(() => {
      SCREEN_INTRO_1.classList.add("screen--display--none");
      SCREEN_INTRO_1.classList.remove("screen--display--flexCol");
      SCREEN_INTRO_1.innerHTML = "";
      SCREEN_INTRO_2.classList.add("screen--display--flexCol");
      SCREEN_INTRO_2.classList.remove("screen--display--none");
    }, TIME_UNTIL_TITLE_TEXT);
  }

  function showTitleText() {
    setTimeout(() => {
      document
        .getElementById("INTRO_TEXT_6")
        .classList.remove("screen__text--opacity--none");
      document
        .getElementById("INTRO_TEXT_6")
        .classList.add("screen__text--opacity--show");
    }, TIME_UNTIL_TITLE_TEXT);
  }

  function showPrepareBattlelinkAsButton() {
    setTimeout(() => {
      document
        .getElementById("BUTTON_PREPAREFORBATTLE")
        .classList.remove("button--opacity--none");
      document
        .getElementById("BUTTON_PREPAREFORBATTLE")
        .classList.add("button--opacity--show");
    }, TIME_UNTIL_TITLE_LINK_AS_BUTTON);
  }
}
