let mode = document.querySelector('select');
let whitelist = document.querySelector('textarea#whitelist');
let blacklist = document.querySelector('textarea#blacklist');

getData(function (data) {
  mode.value = data.mode;
  whitelist.value = data.whitelist.join("\n");
  blacklist.value = data.blacklist.join("\n");
})

mode.onchange = function () {
  setData({ mode: mode.value }, function () {
    sendActionMessage("runContentScript");
  });
};

whitelist.oninput = function () {
  let array = whitelist.value.split("\n");
  setData({ whitelist: array }, function () {
    sendActionMessage("runContentScript");
  });
};


blacklist.oninput = function () {
  let array = blacklist.value.split("\n");
  setData({ blacklist: array }, function () {
    sendActionMessage("runContentScript");
  });
};
