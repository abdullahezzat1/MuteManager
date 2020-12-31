let mode = document.querySelector('select');
let whitelist = document.querySelector('textarea#whitelist');
let blacklist = document.querySelector('textarea#blacklist');


mode.onchange = function () {
  currentBrowser.storage.local.set({ mode: mode.value });
  currentBrowser.runtime.sendMessage({ action: "runContentScript" });
};

whitelist.oninput = function () {
  let array = whitelist.value.split("\n");
  currentBrowser.storage.local.set({ whitelist: array })
  currentBrowser.runtime.sendMessage({ action: "runContentScript" });
};


blacklist.oninput = function () {
  let array = blacklist.value.split("\n");
  currentBrowser.storage.local.set({ blacklist: array })
  currentBrowser.runtime.sendMessage({ action: "runContentScript" });
};
