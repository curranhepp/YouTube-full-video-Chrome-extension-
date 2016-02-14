// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {

    var vidId = info.linkUrl.split('?v=')[1]; // get unique vid id
    var redirectUrl = "https://youtube.com/v/" + vidId; // create direct link to vid
    chrome.tabs.update (tab.id, {url: redirectUrl}); // navigate current tab to direct vid page
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {

  var contexts = ["link"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Open '" + context + "' to direct video";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
  }

});
