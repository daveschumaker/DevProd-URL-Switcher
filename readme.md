# DevProd URL Switcher

A Chrome extension that detects the current URL of our webapp, switches the hostname to either `localhost:3000` or `hotpads.com` depending on which site the user is currently viewing, and then opens this url in a new tab.

Useful when we need to compare map data that's displayed in our production environment vs our development environments (and dealing with copy and paste issues).

## Usage

You can modify the necessary URLs in `src/main.js`.

Then build the bundle by running `npm run build` (requires `browserify` due to importing an npm module).

Lastly, open up `chrome://extensions` -> enable developer mode -> pack extension

Drag extension into your Chrome extensions page and you are good to go. Then click the button in the toolbar to switch between your dev and production environments.

