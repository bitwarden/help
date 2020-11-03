---
layout: article
title: Auto-fill logins on Android
categories: [features]
featured: false
popular: false
tags: [android, autofill, auto-fill]
---

You can use the Bitwarden Android app to add new and auto-fill existing logins on the web and in other apps. There are two services which need to be enabled on Android to cover all Auto-fill scenarios, AUTO-FILL FRAMEWORK SERVICE and AUTO-FILL ACCESSIBILITY SERVICE. These services can be enabled from within the Bitwarden App under **{% icon fa-cog %} Settings**. When configured, you should see "Enabled" in green text. Double-check under the AUTO-FILL ACCESSIBILITY SERVICE that the Permission shows "Granted" in green text as well.

Supported Versions:
1. The **Autofill Framework Service** for Android users on Oreo (8.0) and greater.
2. The **Auto-fill Accessibility Service** for all Android versions.

## Autofill Framework Service

{% note %}The Autofill Framework Service is only available to users on Android Oreo (8.0) and greater. If you are on a version of  Android prior to Oreo (8.0) you should only use the **Auto-fill Accessibility Service** as explained further down in this article. Otherwise, you should use both services for optimal functionality.{% endnote %}

1. Open the Bitwarden Android app.
2. Tap **{% icon fa-cog %} Settings**.
3. Tap **Auto-fill Service**. Status *Disabled* will appear in red.
4. Tap **Open Autofill Settings**.
5. Locate **Bitwarden** from the list and enable it.

The Autofill Framework Service is now enabled.

The Autofill Framework Service is context-sensitive and will appear whenever you encounter a form that can be auto-filled on your device. You can read more about the Autofill Framework service from [this posting on our blog](https://bitwarden.com/blog/post/the-oreo-autofill-framework){:target="_blank"}.

### Testing the Auto-fill Framework Service

1. Open an app that has not been signed in to.
2. View the login page for the app and focus the username or password field. A Bitwarden pop-up will appear below the input field.
3. Select the appropriate login from the list or select the option to open Bitwarden to search for the correct login. Your username and password will be auto-filled.

## Auto-fill Accessibility Service

1. Open the Bitwarden Android app.
2. Tap the **{% icon fa-cog %} Settings** page.
3. Tap **Auto-fill Accessibility Service**. Status *Disabled* will appear in red.
4. Tap the **OPEN ACCESSIBILITY SETTINGS** button.
5. Locate **Bitwarden** from the list and enable it.
6. You will now see Permission is still *Denied* and appears in red.
7. Tap the **OPEN OVERLAY PERMISSION SETTINGS** button.
8. Tap **Allow permission** and go back.

The Auto-fill Accessibility Service is now enabled.

The Auto-fill Accessibility Service is context-sensitive and will appear whenever you encounter a form that can be auto-filled on your device.

### Testing the Auto-fill Accessibility Service

1. Open an app that has not been signed in to.
2. View the login page for the app and focus the username or password field. A Bitwarden pop-up will appear below the input field.
3. Select the appropriate login from the list or select the option to open Bitwarden to search for the correct login. Your username and password will be auto-filled.

### Troubleshooting the Auto-fill Accessibility Service

You will want to check the battery optimization settings on your phone and make sure it is turned off for Bitwarden. Often, Android Battery Optimization will turn off services to save battery and in turn kill the auto-fill services.

If you keep experiencing the AUTO-FILL ACCESSIBILITY SERVICE becoming disabled or not functioning as expected, check these settings in this order.
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

{% note %}
Android has many web browsers. It can be hard to keep up with them all. We have to add support for each browser individually. 

If auto-fill does not work on your browser, please report it at <https://github.com/bitwarden/mobile/issues> so that we can add support.
{% endnote %}

