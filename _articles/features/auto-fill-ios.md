---
layout: article
title: Auto-fill logins on iOS
categories: [features]
featured: true
popular: false
tags: [iOS, Auto-fill, autofill]
---

You can use the Bitwarden iOS app to add new and auto-fill existing logins on the web and in other apps. There are two settings which need to be enabled on iOS to cover all Auto-fill scenarios, Password Auto-fill and App Extension. These settings can be enabled from within the Bitwarden App under **{% icon fa-cog %} Settings**.

### Enabling Auto-fill in Settings

1. Tap **{% icon fa-cog %} Settings** on your iOS device.
2. Tap **Passwords and Accounts**
3. Tap **Auto-fill Passwords**.
4. Turn on Auto-fill.
5. Locate **Bitwarden** from the list and enable it.
6. It's considered good practice to disable any other Auto-fill services.

The Auto-fill Setting is now enabled.

## Testing the Auto-fill Feature

1. Open an app that has not been signed in to.
2. View the login page for the app and focus the username or password field. Your keyboard will appear with "Passwords" at the top of the keyboard.
3. Tap Passwords.
4. This will launch the Bitwarden application.
5. Select the appropriate login from the list or search Bitwarden for the correct login.
6. Your username and password will be auto-filled.

### Enabling App Extension in Settings

1. Open the Bitwarden iOS app.
2. Tap the **{% icon fa-cog %} Settings** page.
3. Tap **App Extension**. 
4. Tap the **Enable App Extension** button.
5. Locate **Bitwarden** from the list and enable it by tapping it.
6. You will now see "Extension Activated!" in green. 
7. Tap back.

The App Extension feature is now enabled.

## Testing the App Extension Feature

1. Open the browser of your choice.
2. View the login page for the website you'd like to enter. 
3. Tap the <img src="../../images/features/auto-fill-ios/ios_share_icon.png" style="margin-top:0px"> share icon.
4. Scroll down until you see **Bitwarden** and tap on it.
5. This will launch the Bitwarden application.
6. Select the appropriate login from the list or search Bitwarden for the correct login.
7. Your username and password will be auto-filled.

{% callout info %}Please make sure iCloud Keychain is getting disabled during these process to avoid any interference with Bitwarden's autofill capabilities. You can verify it by going to your Settings app > tap on Apple ID > iCloud > Keychain > Off{% endcallout %}
