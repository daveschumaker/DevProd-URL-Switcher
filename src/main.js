const ChromePromise = require('chrome-promise');
const URL = require('url-parse');
const config = require('./config');
chrome.promise = new ChromePromise();

chrome.browserAction.onClicked.addListener((tab) => {
    let newUrl;
    let url = new URL(tab.url);

    let prodUrl;
    let devUrl;

    chrome.promise.storage.sync.get('prodUrl')
        .then((result) => {
            prodUrl = result.prodUrl || config.defaultProdUrl;
            return chrome.promise.storage.sync.get('devUrl')
        })
        .then((result) => {
            devUrl = result.devUrl || config.defaultDevUrl;
        })
        .then(() => {
            let urlHost = url.protocol + '//' + url.host;
            let invalidUrl = false;
            if (urlHost === prodUrl) {
                newUrl = devUrl + url.pathname + url.hash + url.query;
            } else if (urlHost === devUrl) {
                newUrl = prodUrl + url.pathname + url.hash + url.query;
            } else {
                alert('Invalid URL host detected.');
                invalidUrl = true;
            }

            // console.log('url stufffff', url, prodUrl, devUrl);
            // console.log('Navigating to:', newUrl);
            if (invalidUrl) {
                return;
            }
            chrome.tabs.create({
                url: newUrl
            })
        })
})
