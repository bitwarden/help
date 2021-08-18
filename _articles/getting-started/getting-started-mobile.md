---
layout: article
title: Get Started with Mobile Apps
categories: [getting-started]
featured: false
popular: false
hidden: false
tags: [tutorial, getting started, mobile, android, ios]
order: 04
redirect_from:
  - /article/getting-started-android/
  - /article/getting-started-ios/
---

Bitwarden's Mobile App lets you take your password manager on the go. Download Bitwarden from the App Store or Google Play Store, or by navigating to [get.bitwarden.com](https://get.bitwarden.com) on any device.

{% image getting-started/bitwarden-ios-trio.png Bitwarden on Android and iOS%}

Bitwarden's Mobile App is available for iOS and Android. For help getting started, select which device you use:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="andtab" data-bs-toggle="tab" data-target="#android" role="tab" aria-controls="android" aria-selected="true"><i class="fa fa-android"></i> Android</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="iostab" data-bs-toggle="tab" data-target="#ios" role="tab" aria-controls="ios" aria-selected="false"><i class="fa fa-apple"></i> iOS</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="android" role="tabpanel" aria-labelledby="andtab">
{% capture and_gs %}
## Bitwarden on Android

### Explore your Vault

When you log in to Bitwarden on your Android device, you'll land on the {% icon fa-lock %} **My Vault** tab. From this tab, you can browse all items in your Bitwarden Vault.

When you **Favorite** an item, it'll appear at the top of your Vault for easy access. Items are also sorted into **Types** (*Login*, *Card*, *Identity*, or *Secure Note*) and **Folders**. If you're a member of an Organization, **Collections** will also appear here.

### Get Organized with Favorites and Folders

Organizing your Vault into **Favorites** and **Folders** makes navigating your Vault a breeze.

**To add a Folder:**

1. Select the {% icon fa-cogs %} **Settings** tab.
2. Select the **Folders** option.
3. Select the {% icon fa-plus %} **Add** icon.
4. Give your new folder a name and select **Save**.

**To add a Vault item to a Folder or your Favorites:**

1. Tap the item you want to edit.
2. Tap the {% icon fa-pencil %} Pencil icon in the bottom-right corner of your screen.
3. Tap **Folder** to select a folder for this item, or toggle the **Favorite** switch to add it to your Favorites.
3. Tap **Save** in the top-right corner of your screen.

For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

### Create New Logins

You can create new Logins, Cards, Identities, and Secure Notes directly from any Android device.

1. In your Bitwarden Android app, tap the {% icon fa-plus %} Add icon in the bottom-right corner.
2. Choose which **Type** of item to create (for example, *Login*).
3. Enter all the information for the item (for example, *Username* and *Password*).
4. For Logins, enter the website the login is used for in the **URI** field (for example, [www.amazon.com](##create-items)).
5. Tap **Folder** or toggle the **Favorite** switch to sort the item in your Vault.
6. When you're finished, tap **Save** in the top-right corner of your screen.

Go back and edit this item at any time by opening it and tapping the {% icon fa-pencil %} Pencil icon.

Send an item to the **Trash** by opening it, tapping the menu ( {% icon fa-ellipsis-v %} ), and tapping **Delete**. Items in the Trash will remain there for 30 days before being permanently deleted.

### Setup Auto-Fill

Setup Auto-fill to automatically enter logins from your Android device to a Web Browser (like Chrome) or other app.

1. In your Bitwarden Android app, tap the {% icon fa-cog %} **Settings** tab located at the bottom of your screen.

   Depending on which version of Android you're using, a number of Auto-fill options could be listed.
2. Tap your available Auto-fill option, and toggle it on. A green `Enabled` message will indicate that Auto-fill is active.

   Once toggled, you might be required to change some Android-native settings, depending on your available or enabled Auto-fill options. For more information, see [Auto-fill logins on Android]({% link _articles/features/auto-fill-android.md %}).

### Launch from Mobile Apps

You can launch a website directly from the Bitwarden Mobile App by selecting the {% icon fa-share-square %} **Launch** button in any Vault item with a valid URI. If you're unfamiliar with using URIs, see [Using URIs]({% link _articles/features/uri-match-detection.md %}).

{% image getting-started/mobile-launch.png %}

### Unlock with Biometrics

Unlocking Bitwarden with biometrics allows for seamless access to your Vault. If you haven't setup [fingerprint unlock](https://support.google.com/nexus/answer/6285273?hl=en) or [face unlock](https://support.google.com/pixelphone/answer/9517039?hl=en) on your Android device, you'll need to do that first from the Android {% icon fa-cog %} **Settings** app.

1. In your Bitwarden Android app, tap the {% icon fa-cog %} **Settings** tab located at the bottom of your screen.
2. Depending on what your device has available, tap:
   - **Unlock with Fingerprint**
   - **Unlock with Face ID**
3. You'll be asked to verify with your fingerprint or face depending on your selection. A green `Enabled` label will indicate that an option is active.

Once Enabled, you'll be able to open your Bitwarden app or Auto-fill logins using just your biometric method of choice.

### Login Using Auto-fill

Once you've setup [Auto-fill](#setup-auto-fill) and [Biometrics](#unlock-with-biometrics), logging into an app or website using Bitwarden is simple.

1. Tap the Email/Username or Password input box in the app or website.
2. Depending on which auto-fill option your device uses, tap the available overlay:

   {% image getting-started/autofill-android-2.png Android Auto-fill varieties %}
3. You'll be prompted for your Face ID or Fingerprint. If you aren't using [Biometrics](#unlock-with-biometrics), enter your Master Password.
4. If you've connected a login to this website or app using the [URI field](#create-items), that login will appear in this window. If you haven't, tap {% icon fa-search %} **Search** to find it.

   Tap the login to automatically your email/username and password into the boxes, and sign in.

### Bitwarden 101: Get Started with Android

Use the following Bitwarden 101 video if you want us to walk you through using Bitwarden on Android. You can also [download the slideshow](https://drive.google.com/open?id=1RvkGbgP4MnJnRhHkmXwmmnVNsYNR_ZvcS65UURexBak){:target="_blank"} to use later.

<iframe width="800" height="450" src="https://www.youtube.com/embed/qyFeEZMZpEY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{% endcapture %}
{{ and_gs | markdownify }}
  </div>
  <div class="tab-pane" id="ios" role="tabpanel" aria-labelledby="iostab">
{% capture ios_gs %}
## Bitwarden on iOS

### Explore your Vault

When you log in to Bitwarden on your iOS device, you'll land on the {% icon fa-lock %} **My Vault** tab. From this tab, you can browse all items in your Bitwarden Vault.

When you **Favorite** an item, it'll appear at the top of your Vault for easy access. Items are also sorted into **Types** (*Login*, *Card*, *Identity*, or *Secure Note*) and **Folders**. If you're a member of an Organization, **Collections** will also appear here.

### Get Organized with Favorites and Folders

Organizing your Vault into **Favorites** and **Folders** makes navigating your Vault a breeze.

**To add a Folder:**

1. Select the {% icon fa-cogs %} **Settings** tab.
2. Select the **Folders** option.
3. Select the {% icon fa-plus %} **Add** icon.
4. Give your new folder a name and select **Save**.

**To add a Vault item to a Folder or your Favorites:**

1. Tap the item you want to edit.
2. Tap **Edit** in the top-right corner of your screen.
3. Tap **Folder** to select a folder for this item, or toggle the **Favorite** switch to add it to your Favorites.
3. Tap **Save** in the top-right corner of your screen.

For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

### Create New Logins

You can create new Logins, Cards, Identities, and Secure Notes directly from any iOS device.

1. Tap the {% icon fa-plus %} Add icon in the top-right corner.
2. Choose which **Type** of item to create (for example, *Login*).
3. Enter all the information for the item (for example, *Username* and *Password*).
4. For Logins, enter the website the login is used for in the **URI** field (for example, [www.amazon.com](#)).
5. Tap **Folder** or toggle the **Favorite** switch to organize the item in your Vault.
6. When you're finished, tap **Save** in the top-right corner of your screen.

Go back and edit this item at any time by opening it and tapping **Edit**.

Send an item to the **Trash** by opening it, tapping the menu ( {% icon fa-ellipsis-v %} ), and tapping **Delete**. Items in the Trash will remain there for 30 days before being permanently deleted.

### Setup Auto-fill

Setup Auto-fill to automatically enter logins from your iOS device to a Web Browser (like Safari) or other app.

1. On the iOS home screen, tap the {% icon fa-cog %} **Settings** app.
2. From the Settings menu, tap **Passwords**.
3. Tap **AutoFill Passwords**.
4. Tap the **AutoFill Passwords** toggle. Green indicates that AutoFill is active.
5. From the **Allow Filling From** list, select **Bitwarden**. A check-mark ( {% icon fa-check %} ) indicates that Bitwarden is selected.

When you create new logins, make sure you enter a website in the [URI field](#create-items) to surface them for Auto-fill.

### Launch from Mobile Apps

You can launch a website directly from the Bitwarden Mobile App by selecting the {% icon fa-share-square %} **Launch** button in any Vault item with a valid URI. If you're unfamiliar with using URIs, see [Using URIs]({% link _articles/features/uri-match-detection.md %}).

{% image getting-started/mobile-launch.png %}

### Unlock with Biometrics

Unlocking Bitwarden with biometrics allows for seamless access to your Vault. If you haven't setup Touch ID or Face ID on your iOS device, you'll need to do that first from the iOS {% icon fa-cog %} **Settings** app.

1. In your Bitwarden iOS app, tap the {% icon fa-cogs %} **Settings** tab located at the bottom of your screen.
2. Depending on what your device has available, tap:
   - **Unlock with Touch ID**
   - **Unlock with Face ID**
3. You'll be asked to verify with your fingerprint or face depending on your selection. A green `Enabled` label will indicate that an option is active.

Once Enabled, you'll be able to open your Bitwarden app or Auto-fill logins using just your biometric method of choice.

### Login using Auto-fill

Once you've setup [Auto-fill](#setup-auto-fill) and [Biometrics](#unlock-with-biometrics), logging into an app or website using Bitwarden is simple.

1. Tap the Email/Username or Password input box in the app or website.
2. Above your keyboard, tap **Passwords**.

   {% image getting-started/autofill-ios.png %}
3. You'll be prompted for your Face ID or Touch ID. If you aren't using [Biometrics](#unlock-with-biometrics), enter your Master Password.
4. If you've connected a login to this website or app using the [URI field](#create-items), that login will appear in this window. If you haven't, tap {% icon fa-search %} **Search** to find it.

   Tap the login to automatically your email/username and password into the boxes, and sign in.

### Bitwarden 101: Get Started with iOS

Use the following Bitwarden 101 video if you want us to walk you through using Bitwarden on iOS. You can also [download the slideshow](https://docs.google.com/presentation/d/1ODMT96657H61qhYm1y-Evz2gzStM8zGx_ewKRtTX7u8){:target="_blank"} to use later.

<iframe width="800" height="450" src="https://www.youtube.com/embed/LrhMmNTmOno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{% endcapture %}
{{ ios_gs | markdownify }}
  </div>
</div>
