getData(function (data) {
  let hostname = window.location.hostname;
  let mode = parseInt(data.mode);
  let whitelist = data.whitelist;
  let blacklist = data.blacklist;

  switch (mode) {
    case 0:
      if (whitelist.includes(hostname) === false) {
        sendActionMessage("mute");
      } else {
        sendActionMessage("unmute");
      }
      break;
    case 1:
      if (blacklist.includes(hostname) === true) {
        sendActionMessage("mute");
      } else {
        sendActionMessage("unmute");
      }
      break;
  }
});
