(() => {
  const tabList = document.querySelector(".preview-tabs");
  const tabs = [...document.querySelectorAll("[data-view]")];
  const panels = [...document.querySelectorAll("[data-panel]")];
  const dialog = document.querySelector(".image-dialog");
  const dialogImage = dialog.querySelector("img");
  const dialogTitle = dialog.querySelector("h2");
  let returnFocus;

  function selectView(view, focus = false) {
    tabs.forEach((tab) => {
      const selected = tab.dataset.view === view;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== view;
    });
  }

  tabList.setAttribute("role", "tablist");
  tabs.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `panel-${tab.dataset.view}`);
    tab.addEventListener("click", () => selectView(tab.dataset.view));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        selectView(tabs[next].dataset.view, true);
      }
    });
  });
  panels.forEach((panel) => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", `tab-${panel.dataset.panel}`);
  });
  selectView("readings");
  tabList.hidden = false;

  if (typeof dialog.showModal === "function") {
    document.querySelectorAll("[data-zoom]").forEach((button) => {
      button.hidden = false;
      button.addEventListener("click", () => {
        const panel = panels.find(
          (item) => item.dataset.panel === button.dataset.zoom,
        );
        const source = panel.querySelector("img");
        dialogImage.src = source.src;
        dialogImage.alt = source.alt;
        dialogTitle.textContent = `Bragi · ${tabs
          .find((tab) => tab.dataset.view === button.dataset.zoom)
          .textContent.replace(/^\s*\d+\s*/, "")
          .trim()}`;
        returnFocus = button;
        dialog.showModal();
      });
    });
    dialog
      .querySelector(".dialog-close")
      .addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    });
    dialog.addEventListener("close", () => returnFocus?.focus());
  }
})();
