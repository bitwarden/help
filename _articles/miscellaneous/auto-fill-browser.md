---
layout: article
title: Auto-fill logins using the browser extension
categories: [miscellaneous]
featured: false
popular: false
tags: [browser, auto-fill]
---

You can use the bitwarden browser extension to easily auto-fill login forms on websites with your username/email and password credentials. There are a variety of ways to perform auto-fill operations with bitwarden.

## Popup window

The bitwarden icon in the toolbar of your browser will show the number of logins in your vault that match the current website you are viewing. Selecting the bitwarden icon will open the bitwarden popup window, defaulting to the "Current Tab" page. The "Current Tab" page shows a listing of these matching logins.

If you are currently viewing a login form on a website, selecting a login from the "Current Tab" list will result in the login credentials being auto-filled into the login form.

{% image autofill-popup.png %}

## Right-click context menu

The same list of logins that are available when using the popup window are also available from the convenience of the right-click context menu in your browser.

{% image autofill-context-menu.png %}

## Keyboard shortcuts (hot keys)

You can use a set of keyboard shortcuts (hot keys) to quickly auto-fill a login form. When viewing the login form press `Ctrl + Shift + L` (`Cmd + Shift + L` on macOS) and the last used login for that website will be auto-filled.

Another option is to open the popup window using the shortcut `Ctrl + Shift + Y` (`Cmd + Shift + Y` on macOS). You can then `TAB` to the login that you would like to auto-fill and then press `ENTER` to select.

You can easily customize these keyboard shortcuts in Chrome, Opera, and Vivaldi browsers. In the address bar navigate to `chrome://extensions` and locate the "Keyboard shortcuts" button (you may need to scroll to the bottom). Other browsers such as Firefox, Brave, and Edge do not currently support changing the default keyboard shortcuts for extensions.

## Auto-fill on page load

bitwarden includes an experimental feature to auto-fill logins immediately after a webpage containing a login form loads in your browser. This feature requires you to opt-in to use it. You can enable "Auto-fill On Page Load" under **Settings** &rarr; **Features**.

In the case of multiple logins matching the current website, the last used login will be used for the auto-fill operation. If the wrong login is auto-filled, you can auto-fill again using the popup window and reset the last used login.
