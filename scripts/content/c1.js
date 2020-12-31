console.log("content script working!!");
currentBrowser.storage.local.get(["mode", "whitelist", "blacklist"], function (data) {
  let hostname = window.location.hostname;
  let mode = data.mode;
  let whitelist = data.whitelist;
  let blacklist = data.blacklist;
  switch (mode) {
    case 0:
      if (whitelist.includes(hostname) === false) {
        currentBrowser.runtime.sendMessage({ action: "mute" });
      } else {
        currentBrowser.runtime.sendMessage({ action: "unmute" });
      }
      break;
    case 1:
      if (blacklist.includes(hostname) === true) {
        currentBrowser.runtime.sendMessage({ action: "mute" });
      } else {
        currentBrowser.runtime.sendMessage({ action: "unmute" });
      }
      break;
  }
});
