---
layout: article
title: Get Started with iOS
categories: [getting-started]
featured: false
popular: false
hidden: false
tags: [tutorial, ios]
order: 03
---

Bitwarden for iOS lets you take your password manager on the go. Download Bitwarden from the App Store, or by opening [get.bitwarden.com](https://get.bitwarden.com) on your device. For help creating your Bitwarden account, see [Create Your Bitwarden Account](https://bitwarden.com/help/article/create-bitwarden-account/).

When you login to Bitwarden on your iOS device, you'll land on the {% icon fa-lock %} **My Vault** tab:

{% image /getting-started/bitwarden-ios.png Bitwarden iOS %}

## Explore Your Vault
From the {% icon fa-lock %} **My Vault** tab, you can browse all items in your Bitwarden Vault.

When you **Favorite** an item, it'll appear at the top of your Vault for easy access. Items are also sorted into **Types** (*Login*, *Card*, *Identity*, or *Secure Note*) and **Folders**. If you're a member of an Organization, **Collections** will also appear in your iOS Vault.

## Get Organized with Favorites and Folders

Organizing your Vault into **Favorites** and **Folders** makes navigating your Vault a breeze:

1. Tap the item you want to edit.
2. Tap **Edit** in the top-right corner of your screen.
3. Tap **Folder** to select a folder for this item, or toggle the **Favorite** switch to add it to your Favorites.
3. Tap **Save** in the top-right corner of your screen.

## Create New Items

You can create new Logins, Cards, Identities, and Secure Notes directly from any iOS device.

1. Tap the {% icon fa-plus %} Add icon in the top-right corner.
2. Choose which **Type** of item to create (for example, *Login*).
3. Enter all the information for the item (for example, *Username* and *Password*).
4. For Logins, enter the website the login is used for in the **URI** field (for example, [www.amazon.com](#)).
5. Tap **Folder** or toggle the **Favorite** switch to organize the item in your Vault.
6. When you're finished, tap **Save** in the top-right corner of your screen.

Go back and edit this item at any time by opening it and tapping **Edit**.

Send an item to the **Trash** by opening it, tapping the menu ( {% icon fa-ellipsis-v %} ), and tapping **Delete**. Items in the Trash will remain there for 30 days before being permanently deleted.

## Setup Auto-fill

Setup Auto-fill to automatically enter logins from your iOS device to a Web Browser (like Safari) or other app.

1. On the iOS home screen, tap the {% icon fa-cog %} **Settings** app.
2. From the Settings menu, tap **Passwords**.
3. Tap **AutoFill Passwords**.
4. Tap the **AutoFill Passwords** toggle. Green indicates that AutoFill is active.
5. From the **Allow Filling From** list, select **Bitwarden**. A check-mark ( {% icon fa-check %} ) indicates that Bitwarden is selected.

When you create new logins, make sure you enter a website in the [URI field](#create-items) to surface them for Auto-fill.

## Unlock with Biometrics

Unlocking Bitwarden with biometrics allows for seamless access to your Vault. If you haven't setup Touch ID or Face ID on your iOS device, you'll need to do that first from the iOS {% icon fa-cog %} **Settings** app.

1. In your Bitwarden iOS app, tap the {% icon fa-cogs %} **Settings** tab located at the bottom of your screen.
2. Depending on what your device has available, tap:
   - **Unlock with Touch ID**
   - **Unlock with Face ID**
3. You'll be asked to verify with your fingerprint or face depending on your selection. A green `Enabled` label will indicate that an option is active.

Once Enabled, you'll be able to open your Bitwarden app or Auto-fill logins using just your biometric method of choice.

## Login using Auto-fill

Once you've setup [Auto-fill](#setup-auto-fill) and [Biometrics](#unlock-with-biometrics), logging into an app or website using Bitwarden is simple.

1. Tap the Email/Username or Password input box in the app or website.
2. Above your keyboard, tap **Passwords**.

   {% image /getting-started/autofill-ios.png %}
3. You'll be prompted for your Face ID or Touch ID. If you aren't using [Biometrics](#unlock-with-biometrics), enter your Master Password.
4. If you've connected a login to this website or app using the [URI field](#create-items), that login will appear in this window. If you haven't, tap {% icon fa-search %} **Search** to find it.

   Tap the login to automatically your email/username and password into the boxes, and sign in!

## Bitwarden 101: Get Started with iOS

Use this following Video or Slideshow for help getting started using Bitwarden for iOS:

<iframe width="800" height="450" src="https://www.youtube.com/embed/LrhMmNTmOno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
<br>
<iframe src="https://docs.google.com/presentation/d/1ODMT96657H61qhYm1y-Evz2gzStM8zGx_ewKRtTX7u8/embed?start=false&loop=false&delayms=3000" frameborder="0" width="800" height="498" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

[Download slideshow](https://docs.google.com/presentation/d/1ODMT96657H61qhYm1y-Evz2gzStM8zGx_ewKRtTX7u8){:target="_blank"}
