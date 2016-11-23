/**
 * @author T. Scott Barnes
 */

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	var redirectTo = details.url.replace(/:\/\/.*\.amazon/, '://smile.amazon');
	console.log(details);
	console.log(redirectTo);
	return {
		redirectUrl: redirectTo
	};
}, {
	urls: ["*://amazon.com/", "*://amazon.com/*/product/*",
			"*://amazon.com/s/*", "*://www.amazon.com/",
			"*://www.amazon.com/*/product/*", "*://www.amazon.com/s/*",
			"*://amazon.de/", "*://amazon.de/*/product/*",
			"*://amazon.de/s/*", "*://www.amazon.de/",
			"*://www.amazon.de/*/product/*", "*://www.amazon.de/s/*",
			"*://www.amazon.de/*/dp/*"],
	types: ["main_frame"]
}, ['blocking']);
