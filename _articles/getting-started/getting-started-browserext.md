---
layout: article
title: Get Started with Browser Extensions
categories: [getting-started]
featured: false
popular: false
hidden: false
tags: [tutorial, getting started, browser extensions]
order: 03
---

Bitwarden Browser Extensions integrate password management directly into your favorite browser. Download a Bitwarden Browser Extension from your browser's marketplace or app store, or from the [Bitwarden Downloads](https://bitwarden.com/download){:target="\_blank"} page. Browser Extensions are available for:

- Google Chrome
- Mozilla Firefox
- Opera
- Microsoft Edge
- Vivaldi
- Brave
- Tor Browser
- Safari

{% callout success %}
**The Safari Browser Extension is packaged with the Desktop Application**, available for download from the App Store. For more information, see [Safari App Extension]({% link _articles/account/install-safari-app-extension.md %}).
{% endcallout %}

{% image getting-started/browserext/browserext-vault.png Bitwarden Browser Extension in Google Chrome %}

## Explore your Vault

In the {% icon fa-lock %} **My Vault** view, you can browse all items in your Bitwarden Vault.

When you **Favorite** an item, it'll appear at the top of your Vault for easy access. Items are also sorted into **Types** (*Login, Card, Identity, or Secure Note*) and **Folders**. If you're a member of an Organization, **Collections** will also appear in your Vault.

### Get Organized with Favorites and Folders

Organizing your Vault into **Favorites** and **Folders** makes navigating your Vault a breeze.

**To add a Folder:**

1. Select the {% icon fa-cogs %} **Settings** tab.
2. Select the **Folders** option.
3. Select the {% icon fa-plus %} **Add** icon.
4. Give your new folder a name and select **Save**.

**To add a Vault item to a Folder or your Favorites:**

1. Select the item you want to edit.
2. Select **Edit** in the top-right corner of the Browser Extension.
3. Select a **Folder** from the dropdown to add this item to a folder, or check the **Favorite** checkbox to add it to your Favorites.
4. Select **Save** in the top-right corner of the Browser Extension.

For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

## Add a Login

Any time you log in to a website that doesn't already have a Login item saved for it, Bitwarden will offer to remember the login information for you:

{% image getting-started/browserext/browserext-add.png %}

Selecting **Yes, Save Now** will automatically add a Login item to your Vault with the entered username, password, and URI. If you're unfamiliar with using URIs, see [Using URIs]({% link _articles/features/uri-match-detection.md %}).

{% callout success %}
You can disable this banner by selecting the **Disable Add Login Notification** option from the **Options** menu in your Browser Extension.
{% endcallout %}

## Launch a Website

You can launch a website directly from the Bitwarden Browser Extension by selecting the {% icon fa-share-square %} **Launch** button in any Vault item with a valid URI. If you're unfamiliar with using URIs, see [Using URIs]({% link _articles/features/uri-match-detection.md %}).

{% image getting-started/browserext/browserext-launch.png %}

## Auto-fill Login Information

Bitwarden Browser Extensions have a unique **Tab** view, which automatically detects the URI (e.g. `myturbotax.intuit.com`) of the page displayed in the open tab and surfaces any Vault items with corresponding URIs.

When a Vault item has a corresponding URI, the Bitwarden icon will overlay a notification bubble reporting the number of Vault items for that web page (*pictured below*).

{% image getting-started/browserext/browserext-tab.png %}

Simply clicking on the Vault item inside the Browser Extension will auto-fill login information to the detected input fields.

There are a few other methods of auto-filling login information from your Browser Extension, including context menus and keyboard shortcuts. To learn about them, see [Browser Extension Auto-fill Options]({% link _articles/features/auto-fill-browser.md %}).

## Unlock with PIN / Biometrics

For lightening fast access to your credentials, setup a PIN or Biometrics to unlock you Vault. To setup a PIN:

1. In your Browser Extension, open the {% icon fa-cogs %} **Settings** tab.
2. In the Security section, check the **Unlock with PIN** checkbox.
3. Enter the desired PIN code in the input box. PIN codes can be any combination of characters (a-z, 0-9, $, #, etc.)

   {% callout success%}**Optional:** The pre-check option **Lock with master password on browser restart** will require you to enter your Master Password instead of a PIN when your browser restarts. If you want to be able to unlock with a PIN when you browser restarts, uncheck this option.{% endcallout %}

For more information, see [Unlock with PIN]({% link _articles/account/unlock-with-pin.md %}) or [Unlock with Biometrics]({% link _articles/account/biometrics.md %}).

## Pin an Extension

Pinning the Browser Extension will ensure that it's easily accessible each time you open your Browser. The procedure differs based on which browser you're using:

- **For Chrome**, select the {% icon fa-puzzle-piece %} **Extensions** icon to the right of the address bar and select the **Pin** icon next to Bitwarden in your Extensions list.

   {% image chrome-pin.png %}
- **For Firefox**, enter `about:addons` in the address bar and toggle the Bitwarden Extension on. To customize *where* it appears in your browser, right-click the Bitwarden Browser Extension icon and select **Customize...** to open a drag-and-drop interface that lets you move or remove icons in your toolbar. You can also use the **Pin to Overflow Menu** option to pin Bitwarden to an overflow (**>>**) menu:

   {% image ff-overflowpin.png %}
- For Safari, right-click anywhere in the tool bar and select **Customize Toolbar** to open a drag-and-drop interface that lets you move or remove icons in your toolbar.

   {% image safari-pin.png %}

## Bitwarden 101: Getting Started with Browser Extensions

Use the following video for help getting started using Bitwarden Browser Extensions:

<iframe class="embed-responsive" width="800" height="450" src="https://www.youtube.com/embed/Epx6bLBsYlI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
