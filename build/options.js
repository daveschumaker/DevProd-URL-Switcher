(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    defaultProdUrl: 'https://hotpads.com',
    defaultDevUrl: 'http://local.hotpads.com:3000'
};

},{}],2:[function(require,module,exports){
const config = require('./config');

// Saves options to chrome.storage.sync.
function save_options() {
  var prodUrl = document.getElementById('prod-url').value;
  var devUrl = document.getElementById('dev-url').value;
  chrome.storage.sync.set({
    devUrl: devUrl,
    prodUrl: prodUrl
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    devUrl: config.defaultDevUrl,
    prodUrl: config.defaultProdUrl,
  }, function(items) {
    document.getElementById('prod-url').value = items.prodUrl;
    document.getElementById('dev-url').value = items.devUrl;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

},{"./config":1}]},{},[2]);
