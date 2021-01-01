function runContentScript() {
  currentBrowser.tabs.query({}, function (tabs, errors) {
    tabs.forEach(function (tab) {
      currentBrowser.tabs.executeScript(tab.id, { file: "/scripts/content/c1.js" }, function () {
        if (currentBrowser.runtime.lastError) {
          let errorMsg = currentBrowser.runtime.lastError.message;
          console.log(errorMsg);
        }
      });
    });
  });
}
