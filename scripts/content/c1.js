console.log("content script working!!");
currentBrowser.storage.local.get(["mode", "whitelist", "blacklist"], function (data) {
  let hostname = window.location.hostname;
  let mode = parseInt(data.mode);
  let whitelist = data.whitelist;
  let blacklist = data.blacklist;
  console.log(blacklist);
  console.log(typeof mode);
  switch (mode) {
    case 0:
      if (whitelist.includes(hostname) === false) {

        console.log("it's not whitelisted");
        currentBrowser.runtime.sendMessage({ action: "mute" });
      } else {
        console.log("it's whitelisted");
        currentBrowser.runtime.sendMessage({ action: "unmute" });
      }
      break;
    case 1:
      if (blacklist.includes(hostname) === true) {
        console.log("it's blacklisted");
        currentBrowser.runtime.sendMessage({ action: "mute" });
      } else {
        console.log("it's not not blacklisted");
        currentBrowser.runtime.sendMessage({ action: "unmute" });
      }
      break;
  }
});
