function runContentScript() {
  currentBrowser.tabs.query({}, function (tabs, errors) {
    tabs.forEach(function (tab) {
      currentBrowser.tabs.executeScript(tab.id, { file: "/scripts/content/c1.js" });
    })
  });
}
