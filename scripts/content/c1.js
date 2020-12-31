console.log("content script working!!");
getData(function (data) {
  let hostname = window.location.hostname;
  let mode = parseInt(data.mode);
  let whitelist = data.whitelist;
  let blacklist = data.blacklist;
  console.log(blacklist);
  console.log(typeof mode);
  switch (mode) {
    case 0:
      if (whitelist.includes(hostname) === false) {

        console.log("it's not whitelisted");
        sendMessage({ action: "mute" });
      } else {
        console.log("it's whitelisted");
        sendMessage({ action: "unmute" });
      }
      break;
    case 1:
      if (blacklist.includes(hostname) === true) {
        console.log("it's blacklisted");
        sendMessage({ action: "mute" });
      } else {
        console.log("it's not not blacklisted");
        sendMessage({ action: "unmute" });
      }
      break;
  }
});
