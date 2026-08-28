(function () {
  "use strict";

  var endpoint =
    "https://firatbarca-page-counter.firatbarca-page-counter.workers.dev";
  var output = document.getElementById("site-pageviews");
  var hasRun = false;

  function display(total) {
    if (!output || !Number.isSafeInteger(total) || total < 0) return;

    output.textContent = "Page views: " + new Intl.NumberFormat("en-GB").format(total);
    output.hidden = false;
  }

  function record() {
    if (hasRun || navigator.webdriver) return;
    hasRun = true;

    fetch(endpoint + "/view", {
      method: "POST",
      body: JSON.stringify({ path: window.location.pathname }),
      cache: "no-store",
      credentials: "omit",
      keepalive: true,
      mode: "cors",
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Counter unavailable");
        return response.json();
      })
      .then(function (data) {
        if (data && data.counted === true) display(data.total);
      })
      .catch(function () {
        // The counter is optional. A network or Worker failure must never affect
        // the page or reveal implementation details to visitors.
      });
  }

  if (document.visibilityState === "prerender") {
    document.addEventListener(
      "visibilitychange",
      function onVisible() {
        if (document.visibilityState !== "visible") return;
        document.removeEventListener("visibilitychange", onVisible);
        record();
      },
      { passive: true }
    );
  } else {
    record();
  }
})();
