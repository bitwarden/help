---
layout: article
title: Browser Extension Auto-fill Options
categories: [miscellaneous]
featured: false
popular: false
tags: [browser, auto-fill, autofill]
---

{% callout success %}
Most auto-fill functionality relies on the attribution of URIs to Login items. If you're unfamiliar with using URIs, see [URIs for Vault Items]({% link _articles/features/uri-match-detection.md %}).
{% endcallout %}

Bitwarden Browser Extensions have a unique **Tab** view, which automatically detects the URI (e.g. `myturbotax.intuit.com`) of the page displayed in the open tab and surfaces any Vault items with corresponding URIs.

When a Vault item has a corresponding URI, the Bitwarden icon will overlay a notification bubble reporting the number of Vault items for that web page (*pictured below*).

{% image /getting-started/browserext/browserext-tab.png %}

Simply clicking on the Vault item inside the Browser Extension will auto-fill login information to the detected input fields.

There are a few alternative auto-fill options for Browser Extensions. In all cases (except [manually](#manually-auto-fill)):
- The Browser Extension must be unlocked for the auto-fill functionality to operate.
- In cases where a web page or service has **multiple** Login items with relevant URIs, it will auto-fill the last-used Login.

## Using the Context-Menu

{% callout info %}
Currently unavailable in the Safari Browser Extension.
{% endcallout %}

Without opening your Browser Extension, you can right-click on the username or password input field and use the **Bitwarden** &rarr; **Auto-fill** option. Your Vault must be unlocked for this option to be available.

{% image /getting-started/browserext/browserext-context.png %}

## Using Keyboard Shortcuts

Bitwarden Browser Extensions provide a set of keyboard shortcuts (a.k.a *hot keys*) to auto-fill login information. Your Vault must be unlocked for these options to be available.

To auto-fill login information, use the following **default** shortcuts. If there are multiple Login items with the detected URI, the last-used login will be used for the auto-fill operation. You can cycle through multiple Logins by repeatedly using the keyboard shortcut:

- On Windows: `Ctrl + Shift + L`
- On macOS: `Cmd + Shift + L`
- On Linux: `Ctrl + Shift + L`
- Safari: `Cmd + \` or `Cmd + 8` or `Cmd + Shift + P`

{% callout success %}
If a login uses the [Bitwarden Authenticator]({% link _articles/features/authenticator-keys.md %}) for TOTPs, using the `Cmd/Ctrl + Shift + L` will automatically copy your TOTP to your clipboard after auto-filling. All you have to do is `Cmd/Ctrl + V` to paste!
{% endcallout %}

If any given shortcut doesn't work, it's likely because another application on your device is already registered to use it. For example, the auto-fill shortcut on Windows is commonly claimed by the AMD Radeon Adrenaline software (AMD graphic drivers) and therefore cannot be used by Bitwarden. In these instances, you should free up the shortcut or configure Bitwarden to use a different shortcut.

### Configuring Keyboard Shortcuts

Configuring the keyboard shortcuts used by a Bitwarden Browser Extension differs based on which browser you're using. To access the configuration menu:

- **In Chrome**, enter `chrome://extensions/shortcuts` in the address bar.

   In Chromium-based browsers like **Brave**, substitute `chrome` for the relevant browser name (e.g. `brave://extensions/shortcuts`).
- **In Firefox**, enter `about:addons` in the address bar, select the {% icon fa-cog %} **Gear** icon next to **Manage Your Extensions**, and select **Manage Extension Shortcuts** from the dropdown.

Some browsers, including **Safari** and legacy **Edge** do not currently support changing the default keyboard shortcuts for extensions.

## On Page Load

Auto-fill on Page Load is an **experimental and opt-in** feature offered by Bitwarden Browser Extensions. When enabled, Bitwarden will auto-fill login information when a web page corresponding to a Login item's URI value loads.

If there are multiple Login items with the detected URI, the last-used login will be used for the auto-fill operation.

To enable this feature, navigate to **Settings** &rarr; **Options** in your Browser Extension, and select the **Enable Auto-fill On Page Load** option.

## Manually Auto-fill

You can auto-fill items manually that don't have saved URIs by opening them in the {% icon fa-lock %} **My Vault** view, and selecting the **Auto-fill** button.
