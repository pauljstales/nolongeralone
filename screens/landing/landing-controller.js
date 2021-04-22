(function () {
  let loadProgress = 0;
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
  }, 10);
})();
