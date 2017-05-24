chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url":"http://youtube.com"});
    }
  }
);
body {
  background: url('https://media.giphy.com/media/3o7WTDJQVuYwhhuLhC/giphy.gif') !important;
}
 
#masthead,
#primary {
  -webkit-filter: invert(100%);
  filter: invert(100%);
  background-color: #fff;
  padding: 20px !important;
}
#masthead {
  background: none;
}
#masthead img, #primary img {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}