currentBrowser.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    setData({
      mode: 0,
      whitelist: [],
      blacklist: []
    }, runContentScript);
  }
});
currentBrowser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  let tabId = sender.tab.id;
  switch (message.action) {
    case "mute":
      toggleTab(tabId, true);
      break;
    case "unmute":
      toggleTab(tabId, false);
      break;
    case "runContentScript":
      runContentScript();
      break;
  }
});

function toggleTab(tabId, mute = true) {
  currentBrowser.tabs.update(tabId, { muted: mute })
}
