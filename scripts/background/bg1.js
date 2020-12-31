currentBrowser.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    currentBrowser.storage.local.set({
      mode: 0,
      whitelist: [],
      blacklist: []
    }, function () {
      runContentScript();
    });
  }
  // toggleAllTabs();
})
// console.log("hello from background");
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
  // console.log("Message:");
  // console.log(message);
  // console.log("Sender:");
  // console.log(sender);
  // console.log("sendResponse:");
  // console.log(sendResponse);
});




function toggleTab(tabId, mute = true) {
  currentBrowser.tabs.update(tabId, { muted: mute })
}
