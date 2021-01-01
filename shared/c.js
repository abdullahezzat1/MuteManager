function sendActionMessage(action) {
  currentBrowser.runtime.sendMessage({ action: action });
}
