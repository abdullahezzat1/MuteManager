var currentBrowser = typeof chrome === "undefined" ? browser : chrome;

function getData(callback) {
  currentBrowser.storage.local.get(["mode", "whitelist", "blacklist"], function (data) {
    callback(data);
  });
}

function setData(object, callback) {
  currentBrowser.storage.local.set(object, function () {
    callback();
  });
}
