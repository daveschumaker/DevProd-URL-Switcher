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
