/**
 * This function is immediately invoked to progress the loading bar.
 * The loading allows for any resources to be pre-loaded for better performance.
 */
(function () {
  let loadProgress = 0;
  const TIME_PER_INTERVAL = 1; // for production, 20
  let loadProgressInterval = setInterval(() => {
    document.getElementById("progress-bar").value = loadProgress;
    loadProgress++;
    if (loadProgress >= 101) {
      document.getElementById("progress-bar-container").style.display = "none";
      document
        .getElementById("screen_landing")
        .classList.add("screen--displayAsFlexCol");
      document
        .getElementById("screen_landing")
        .classList.remove("screen--displayAsNone");
      clearInterval(loadProgressInterval);
    }
  }, TIME_PER_INTERVAL);
})();
