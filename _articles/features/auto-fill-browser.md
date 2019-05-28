---
layout: article
title: Auto-fill logins using the browser extension
categories: [features]
featured: false
popular: false
tags: [browser, auto-fill, autofill]
---

You can use the Bitwarden browser extension to easily auto-fill login forms on websites with your username/email and password credentials. There are a variety of ways to perform auto-fill operations with Bitwarden.

## Popup window

The Bitwarden icon in the toolbar of your browser will show the number of logins in your vault that match the current website you are viewing. Selecting the Bitwarden icon will open the Bitwarden popup window, defaulting to the "Current Tab" page. The "Current Tab" page shows a listing of these matching logins.

If you are currently viewing a login form on a website, selecting a login from the "Current Tab" list will result in the login credentials being auto-filled into the login form.

{% image autofill-popup.png %}

## Right-click context menu

{% note %}This feature is currently unavailable in Safari browser.{% endnote %}

The same list of logins that are available when using the popup window are also available from the convenience of the right-click context menu in your browser.

{% image autofill-context-menu.png %}

## Keyboard shortcuts (hot keys)

You can use a set of keyboard shortcuts (hot keys) to quickly auto-fill a login form. When viewing the login form press the keyboard shortcut (see below) and the last used login for that website will be auto-filled.

- Windows: `Ctrl + Shift + L`
  - Edge: `Ctrl + \`
- Linux: `Ctrl + Shift + L`
- macOS: `Cmd + Shift + L`
  - Safari: `Cmd + \`
  
{% note %}If a shortcut does not work, it may be because another program is using it. The auto-fill shortcut is commonly claimed by the AMD Radeon Adrenaline software (AMD graphic drivers) and therefore can not be used by Bitwarden. You can free up this shortcut by changing it in the AMD Radeon software under Gaming > Global Settings > Performance Monitoring: "Toggle Performance Logging Hotkey".{% endnote %}

Another option is to open the popup window using the keyboard shortcut (see below). You can then `TAB` to the login that you would like to auto-fill and then press `ENTER` to select.

- Windows: `Ctrl + Shift + Y`
- Linux: `Ctrl + Shift + U`
- macOS: `Cmd + Shift + Y`

You can easily customize these keyboard shortcuts in Chrome and Opera browsers. In the address bar navigate to `chrome://extensions` and locate the "Keyboard shortcuts" button (you may need to scroll to the bottom). Other browsers such as Firefox, Safari, Brave, and Edge do not currently support changing the default keyboard shortcuts for extensions.

## Auto-fill on page load

Bitwarden includes an experimental feature to auto-fill logins immediately after a webpage containing a login form loads in your browser. This feature requires you to opt-in to use it. You can enable "Auto-fill On Page Load" under **Settings** &rarr; **Options**.

In the case of multiple logins matching the current website, the last used login will be used for the auto-fill operation. If the wrong login is auto-filled, you can auto-fill again using the popup window and reset the last used login.
