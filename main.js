'use strict';

chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "plot.html";
  chrome.tabs.create({ url: newURL });
});
