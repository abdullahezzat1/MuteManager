let mode = document.querySelector('select');
let whitelist = document.querySelector('textarea#whitelist');
let blacklist = document.querySelector('textarea#blacklist');

getData(function (data) {
  mode.value = data.mode;
  whitelist.value = data.whitelist.join("\n");
  blacklist.value = data.blacklist.join("\n");
})




mode.onchange = function () {
  setData({ mode: mode.value });
  currentBrowser.runtime.sendMessage({ action: "runContentScript" });
};

whitelist.oninput = function () {
  let array = whitelist.value.split("\n");
  setData({ whitelist: array })
  currentBrowser.runtime.sendMessage({ action: "runContentScript" });
};


blacklist.oninput = function () {
  let array = blacklist.value.split("\n");
  setData({ blacklist: array })
  currentBrowser.runtime.sendMessage({ action: "runContentScript" });
};
