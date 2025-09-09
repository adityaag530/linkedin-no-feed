document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleFeed");

  // Load current state
  chrome.storage.sync.get("feedEnabled", (data) => {
    const enabled = data.feedEnabled !== false; // default true
    toggle.checked = enabled;
    updateButton(enabled);
  });

  toggle.addEventListener("change", () => {
    const newState = toggle.checked;

    // Save state
    chrome.storage.sync.set({ feedEnabled: newState });

    // Update UI
    updateButton(newState);

    // Ask background to reload tab
    chrome.runtime.sendMessage({ action: "reloadTab" });
  });

  function updateButton(enabled) {
    const status = document.getElementById("status");
    status.textContent = enabled ? "Feed is ON" : "Feed is OFF";
  }
});
