// content.js
alert("Hello from your Chrome extension!")

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}