function runContentScript() {
  currentBrowser.tabs.query({}, function (tabs, errors) {
    // console.log(tabs);
    tabs.forEach(function (tab) {
      currentBrowser.tabs.executeScript(tab.id, { file: "/scripts/content/c1.js" });
    })
  });
}
