var URL = require('url-parse');
let pathOptions;

chrome.browserAction.onClicked.addListener(function(tab) {
    let currentUrl = tab.url;
    let newUrl;
    let url = new URL(currentUrl);

    if (url.host === 'hotpads.com') {
        newUrl = 'http://localhost:3000' + url.pathname + url.hash + url.query;
    } else if (url.host === 'localhost:3000') {
        newUrl = 'https://hotpads.com' + url.pathname + url.hash + url.query;
    } else {
        alert('Not a valid HotPads URL.');
        return;
    }

    chrome.tabs.create({
        url: newUrl
    })
})