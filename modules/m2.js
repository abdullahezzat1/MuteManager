function getData(callback) {
  currentBrowser.storage.local.get(["mode", "whitelist", "blacklist"], function (data) {
    callback(data);
  })
}

function setData(object) {
  currentBrowser.storage.local.set(object);
}

function sendMessage(object) {
  currentBrowser.runtime.sendMessage(object);
}
