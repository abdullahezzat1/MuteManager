document.querySelector(".options").href = currentBrowser.runtime.getURL("/ui/pages/options_tab.html");
let whitelistBox = document.querySelector(".whitelist");
let blacklistBox = document.querySelector(".blacklist");

getData(function (data) {
  currentBrowser.tabs.query({ active: true }, function (tab) {
    let hostname = (new URL(tab[0].url)).hostname;
    let whitelist = data.whitelist;
    let blacklist = data.blacklist;
    whitelistBox.checked = whitelist.includes(hostname);
    blacklistBox.checked = blacklist.includes(hostname);
    whitelistBox.addEventListener('change', function (e) {
      // The checked state is AFTER the user's choice -_-
      switch (e.target.checked) {
        case true:
          whitelist.push(hostname);
          setData({ whitelist: whitelist }, function () {
            runContentScript();
          });
          break;
        case false:
          whitelist.splice(whitelist.indexOf(hostname), 1)
          setData({ whitelist: whitelist }, function () {
            runContentScript();
          });
          break;
      }
    });
    blacklistBox.addEventListener('change', function (e) {
      // The checked state is AFTER the user's choice -_-
      switch (e.target.checked) {
        case true:
          blacklist.push(hostname);
          setData({ blacklist: blacklist }, function () {
            runContentScript();
          });
          break;
        case false:
          blacklist.splice(blacklist.indexOf(hostname), 1);
          setData({ blacklist: blacklist }, function () {
            runContentScript();
          });
          break;
      }
    });
  });

});

