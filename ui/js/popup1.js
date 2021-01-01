document.querySelector(".options").href = currentBrowser.runtime.getURL("/ui/pages/options_tab.html");
let whitelistBtn = document.querySelector("button.whitelist");
let blacklistBtn = document.querySelector("button.blacklist");

getData(function (data) {
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
          setData({ whitelist: whitelist }, function () {
            runContentScript();
            changeWhitelistBtnState(1);
          });
          break;
        case 1:
          whitelist.splice(whitelist.indexOf(hostname), 1)
          setData({ whitelist: whitelist }, function () {
            runContentScript();
            changeWhitelistBtnState(0);
          });
          break;
      }
    });
    blacklistBtn.addEventListener('click', function (e) {
      switch (parseInt(e.target.value)) {
        case 0:
          blacklist.push(hostname);
          setData({ blacklist: blacklist }, function () {
            runContentScript();
            changeBlacklistBtnState(1);
          });
          break;
        case 1:
          blacklist.splice(blacklist.indexOf(hostname), 1);
          setData({ blacklist: blacklist }, function () {
            runContentScript();
            changeBlacklistBtnState(0);
          });
          break;
      }
    });
  });

});

function changeWhitelistBtnState(to) {
  whitelistBtn.value = to;
  let classlist = whitelistBtn.classList;
  switch (to) {
    case 1:
      whitelistBtn.innerHTML = "Remove from whitelisted domains";
      if (classlist.contains("remove") === false) {
        classlist.add("remove");
      }
      classlist.remove("add");
      break;
    case 0:
      whitelistBtn.innerHTML = "Add to whitelisted domains";
      if (classlist.contains("add") === false) {
        classlist.add("add");
      }
      classlist.remove("remove");
      break;
  }
}
function changeBlacklistBtnState(to) {
  blacklistBtn.value = to;
  let classlist = blacklistBtn.classList;
  switch (to) {
    case 1:
      blacklistBtn.innerHTML = "Remove from blacklisted domains";
      if (classlist.contains("remove") === false) {
        classlist.add("remove");
      }
      classlist.remove("add");
      break;
    case 0:
      blacklistBtn.innerHTML = "Add to blacklisted domains";
      if (classlist.contains("add") === false) {
        classlist.add("add");
      }
      classlist.remove("remove");
      break;
  }
}


