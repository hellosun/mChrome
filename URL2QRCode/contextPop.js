function genericOnClick(info, tab) {
  console.log(info.linkUrl);
}

function selectionOnClick(info, tab) {
  var str = info.selectionText;
  console.log(info);
}

var link = chrome.contextMenus.create({"title": "链接地址","contexts":["link"],"onclick":genericOnClick});
var selection = chrome.contextMenus.create({"title": "选中文字","contexts":["selection"],"onclick":selectionOnClick});