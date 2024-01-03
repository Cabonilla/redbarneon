chrome.runtime.onInstalled.addListener(function () {
  // Set default value on installation
  chrome.storage.sync.set({ sign: "scarsclub" });
});
