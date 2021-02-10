---
layout: article
title: Auto-fill logins on Android
categories: [miscellaneous]
featured: false
popular: false
tags: [android, autofill, auto-fill]
---

You can use the Bitwarden Android app to add new and auto-fill existing logins on the web and in other apps. Depending on your version of Android, there are multiple options which can be enabled to cover all Auto-fill scenarios.  These options can be enabled from within the Bitwarden App under **{% icon fa-cog %} Settings**. When configured, you should see "Enabled" in green text.

Supported Options:
1. **Autofill Service** available on Android 8 and greater.
2. **Inline Autofill** available on Android 11 and greater.
3. **Use Accessibility** available on all Android versions.
4. **Use Draw-Over** available on Android 6 and greater.

## Autofill Service

{% callout info %}The Autofill Service is only available to users on Android 8 and greater. If you are on a version of Android prior to 8 you can only enable **Use Accessibility** as explained further down in this article. Otherwise, you can use both services depending on your needs.{% endcallout %}

1. Open the Bitwarden Android app.
2. Tap **{% icon fa-cog %} Settings**.
3. Tap **Auto-fill Services**.
4. Tap the **Autofill Service** switch.
5. Locate **Bitwarden** from the list and enable it.

The Autofill Service is now enabled.

The Autofill Service is context-sensitive and will appear whenever you encounter a form that can be auto-filled on your device. You can read more about the Autofill Service from [this posting on our blog](https://bitwarden.com/blog/post/the-oreo-autofill-framework){:target="_blank"}.

### Inline Autofill

When enabled on an Android 11 or greater device with a supported keyboard, Inline Autofill changes the autofill presentation from a pop-up to a list embedded  within the keyboard.

1. Open the Bitwarden Android app.
2. Tap the **{% icon fa-cog %} Settings** page.
3. Tap **Auto-fill Services**.
4. Tap the **Use Inline Autofill** switch (**Auto-fill Service** must be enabled).

The same options that were available from the pop-up are available from the inline presentation, but the presentation itself can vary based on the keyboard (GBoard for example renders the options as a horizontally scrollable list).

### Testing the Auto-fill Service

1. Open an app that has not been signed in to.
2. View the login page for the app and focus the username or password field. A Bitwarden pop-up (or inline list if enabled) will appear.
3. Select the appropriate login from the list or select the option to open Bitwarden to search for the correct login. Your username and password will be auto-filled.

## Use Accessibility

1. Open the Bitwarden Android app.
2. Tap the **{% icon fa-cog %} Settings** page.
3. Tap **Auto-fill Services**.
4. Tap the **Use Accessibility** switch.
5. Locate **Bitwarden** from the list and enable it.
6. If you are using Android 6, enabling **Use Draw-Over** is required (see below)

The Accessibility service is now enabled.

The Accessibility service is context-sensitive and will be visible and/or available whenever you encounter a form that can be auto-filled on your device.

### Use Draw-Over

When enabled, allows the Bitwarden app to draw a popup over other apps that simulates some of the functionality of the Autofill Service.  

1. Open the Bitwarden Android app.
2. Tap the **{% icon fa-cog %} Settings** page.
3. Tap **Auto-fill Services**.
4. Tap the **Use Draw-Over** switch (**Use Accessibility** must be enabled).
5. If using Android 11 or greater, locate **Bitwarden** from the list and select it.
6. Tap the **Allow display over other apps** switch and go back.

Depending on your version of Android, this option may be required:

1. Android 7 or greater: **Optional** if you only want to use the Auto-fill quick action tile without a pop-up.
2. Android 6: **Required** to use Accessibility since the pop-up is the only available option.
3. Android 5: **Not Available** since permission is already granted by default.

### Testing the Accessibility Service

1. Open an app that has not been signed in to.
2. View the login page for the app and focus the username or password field. A Bitwarden pop-up will appear below the input field (if **Use Draw-Over** is enabled).
3. Select the appropriate login from the list or select the option to open Bitwarden to search for the correct login. Your username and password will be auto-filled.

### Troubleshooting the Auto-fill Accessibility Service

You will want to check the battery optimization settings on your phone and make sure it is turned off for Bitwarden. Often, Android Battery Optimization will turn off services to save battery and in turn kill the auto-fill services.

If you keep experiencing Accessibility becoming disabled or not functioning as expected, check these settings in this order:

1. Double-check your Battery Optimization settings, you will want to make sure it is turned off for Bitwarden.
2. If you use a Battery Saver or Task Manager app then you may try to disable it to see if it makes any difference. If disabling the app makes a difference, add Bitwarden to the exception list.
3. Check the built-in Task Manager. You will need to bring up the running apps view and then hold down the app icon or swipe up on the Bitwarden app and then select Lock.

Please note, the service can also halt if you ever "Force stop" the Bitwarden app.

Here is an interesting site regarding devices and their battery optimization default configurations:
[https://dontkillmyapp.com/](https://dontkillmyapp.com/this){:target="_blank"}

### Troubleshooting the Bitwarden Auto-Fill Overlay

A **floating window** or **Dropzone** is a feature that allows certain apps to float anywhere on your screen. If the Bitwarden Auto-fill overlay is not visible when tapping on a password field, please enable **Dropzone**(Huawei/Honor devices) or **Floating window**(Oppo,etc.) for Bitwarden.

To enable Dropzone:

1. Open Huawei/Honor Optimizer app (also known as Phone Manager)
2. Tap **Dropzone** in the middle of the bottom row.
3. Slide the toggle to the right to allow Dropzone for Bitwarden.

To enable floating window:

1. Go to Settings
2. Then Privacy/Security
3. Find **floating windows** or **App Management**
4. Enable floating window for Bitwarden by sliding the toggle to the right.

{% callout info %}
Android has many web browsers. It can be hard to keep up with them all. We have to add support for each browser individually.

If auto-fill does not work on your browser, please report it at <https://github.com/bitwarden/mobile/issues> so that we can add support.
{% endcallout %}
