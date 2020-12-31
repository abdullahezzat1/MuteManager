currentBrowser.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    currentBrowser.storage.local.set({
      mode: 0,
      whitelist: [],
      blacklist: []
    });
  }
  currentBrowser.tabs.query({}, function (tabs, errors) {
    console.log(tabs);
    tabs.forEach(function (tab) {
      currentBrowser.tabs.update(tab.id, { muted: true })
    })
  });
})
// console.log("hello from background");
currentBrowser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  let tabId = sender.tab.id;
  if (message.action === "mute") {
    currentBrowser.tabs.update(tabId, { muted: true });
  } else {
    currentBrowser.tabs.update(tabId, { muted: false });
  }
  // console.log("Message:");
  // console.log(message);
  // console.log("Sender:");
  // console.log(sender);
  // console.log("sendResponse:");
  // console.log(sendResponse);
});
