---
layout: article
title: Auto-fill logins using the browser extension
categories: [features]
featured: false
popular: false
tags: [browser, auto-fill, autofill]
---

You can use the Bitwarden browser extension to easily auto-fill login forms on websites with your username/email and password credentials.

## How to add a website to a saved login

To use most auto-fill features, you need to add the website URL to the login details you have saved in Bitwarden.

You can manually edit the websites associated with a login in the "Edit" page for that login. The URI list shows the websites currently associated with the login. If you create a new login while you have the website open, the website will automatically appear in the URI list.

{% image autofill-uri-list.png %}

Alternatively, you can auto-fill the login for the current website and add the website to that login by clicking the **Auto-fill and Save** button on the "View Item" screen for that login.

{% image autofill-autofill-and-save.png %}

## How to auto-fill

There are a variety of ways to perform auto-fill operations with Bitwarden.

### Popup window

The Bitwarden icon in the toolbar of your browser will show the number of logins in your vault that match the current website you are viewing. Selecting the Bitwarden icon will open the Bitwarden popup window, defaulting to the "Current Tab" page. The "Current Tab" page shows a listing of these matching logins.

If you are currently viewing a login form on a website, selecting a login from the "Current Tab" list will result in the login credentials being auto-filled into the login form.

{% image autofill-popup.png %}

If the login does not appear in the "Current Tab" page, you can open the login from your Vault and click the **Auto-fill** button. This will auto-fill the current website even if that website is not associated with the login.

### Right-click context menu

{% callout info %}This feature is currently unavailable in Safari browser.{% endcallout %}

The same list of logins that are available when using the popup window are also available from the convenience of the right-click context menu in your browser.

{% image autofill-context-menu.png %}

### Keyboard shortcuts (hot keys)

You can use a set of keyboard shortcuts (hot keys) to quickly auto-fill a login form. When viewing the login form press the keyboard shortcut (see below) and the last used login for that website will be auto-filled.

- Windows: `Ctrl + Shift + L`
- Linux: `Ctrl + Shift + L`
- macOS: `Cmd + Shift + L`
  - Safari: `Cmd + \` or `Cmd + 8` or `Cmd + Shift + P`

{% callout info %}If a shortcut does not work, it may be because another application on your device is already using it. For example, the auto-fill shortcut on Windows is commonly claimed by the AMD Radeon Adrenaline software (AMD graphic drivers) and therefore cannot be used by Bitwarden. You can free up this shortcut by changing it in the AMD Radeon software under Gaming &rarr; Global Settings &rarr; Performance Monitoring: "Toggle Performance Logging Hotkey".{% endcallout %}

Another option is to open the popup window using the keyboard shortcut (see below). You can then `TAB` to the login that you would like to auto-fill and then press `ENTER` to select.

- Windows: `Ctrl + Shift + Y`
- Linux: `Ctrl + Shift + U`
- macOS: `Cmd + Shift + Y`

You can easily customize these keyboard shortcuts in Chrome, Opera, Edge, and Brave browsers. In the address bar navigate to `chrome://extensions` and locate the "Keyboard shortcuts" button (you may need to scroll to the bottom).

In Firefox, you need can go to the addons preference page. Under the gears icon click the "Manage Extension Shortcuts" as explained [here](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox).

Other browsers such as Safari and legacy Edge do not currently support changing the default keyboard shortcuts for extensions.

### Auto-fill on page load

Bitwarden includes an experimental feature to auto-fill logins immediately after a webpage containing a login form loads in your browser. This feature requires you to opt-in to use it. You can enable "Auto-fill On Page Load" under **Settings** &rarr; **Options**.

{% image autofill-extension-option.png %}

In the case of multiple logins matching the current website, the last used login will be used for the auto-fill operation. If the wrong login is auto-filled, you can auto-fill again using the popup window and reset the last used login.
