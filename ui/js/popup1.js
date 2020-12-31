document.querySelector(".options").href = currentBrowser.runtime.getURL("/ui/pages/options_tab.html");
let whitelistBtn = document.querySelector("button.whitelist");
let blacklistBtn = document.querySelector("button.blacklist");

getData(function (data) {
  console.log(data);
  currentBrowser.tabs.query({ active: true }, function (tab) {
    let hostname = (new URL(tab[0].url)).hostname;
    let whitelist = data.whitelist;
    let blacklist = data.blacklist;
    changeWhitelistBtnState(whitelist.includes(hostname) ? 1 : 0);
    changeBlacklistBtnState(blacklist.includes(hostname) ? 1 : 0);
    whitelistBtn.addEventListener('click', function (e) {
      switch (parseInt(e.target.value)) {
        case 0:
          whitelist.push(hostname);
          setData({ whitelist: whitelist });
          runContentScript();
          changeWhitelistBtnState(1);
          break;
        case 1:
          whitelist.splice(whitelist.indexOf(hostname), 1)
          setData({ whitelist: whitelist });
          runContentScript();
          changeWhitelistBtnState(0);
          break;
      }
    });
    blacklistBtn.addEventListener('click', function (e) {
      console.log("black event working");
      switch (parseInt(e.target.value)) {
        case 0:
          console.log("case 0");
          blacklist.push(hostname);
          setData({ blacklist: blacklist });
          runContentScript();
          changeBlacklistBtnState(1);
          break;
        case 1:
          blacklist.splice(blacklist.indexOf(hostname), 1);
          setData({ blacklist: blacklist });
          runContentScript();
          changeBlacklistBtnState(0);
          break;
      }
    });
  });

});

function changeWhitelistBtnState(to) {
  whitelistBtn.value = to;
  whitelistBtn.innerHTML = to ? "Remove from whitelisted domains" : "Add to whitelisted domains";
}
function changeBlacklistBtnState(to) {
  blacklistBtn.value = to;
  blacklistBtn.innerHTML = to ? "Remove from blacklisted domains" : "Add to blacklisted domains";
}


