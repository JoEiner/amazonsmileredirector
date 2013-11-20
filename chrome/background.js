/**
 * @author T. Scott Barnes
 */

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  var redirectTo = details.url.replace(/:\/\/.*\.amazon/, '://smile.amazon');
  console.log(redirectTo);
  return {
    redirectUrl: redirectTo
  };
}, {
  urls: ["*://*.amazon.com/*", "*://*.amazon.co.uk/*", "*://*.amazon.co.jp"],
  types: ["main_frame"]
}, ['blocking']);
