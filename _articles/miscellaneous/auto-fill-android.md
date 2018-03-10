---
layout: article
title: Auto-fill logins on Android
categories: [miscellaneous]
featured: false
popular: false
tags: [android, autofill, auto-fill]
---

You can use the Bitwarden Android app to add new and auto-fill existing logins on the web and in other apps. Bitwarden provides two auto-fill services: 

1. The **Autofill Framework Service** for Android users on Oreo (8.0) and greater.
2. The **Auto-fill Accessibility Service** for all Android versions.

--------------

## Autofill Framework Service

{% note %}The Autofill Framework Service is only available to users on Android Oreo (8.0) and greater. If you are on a version of  Android prior to Oreo (8.0) you should use the **Auto-fill Accessibility Service** as explained further down in this article.{% endnote %}

1. Open the Bitwarden Android app.
2. Tap the **Tools** page.
3. Tap **Bitwarden Auto-fill Service**. Status *Disabled* will appear in red.
4. Tap the **Open Autofill Settings** button.
5. Locate **Bitwarden** from the list and enable it.

The Autofill Framework Service is now enabled.

The Autofill Framework Service is context-sensitive and will appear whenever you encounter a form that can be auto-filled on your device. You can read more about the Autofill Framework service from [this posting on our blog](https://blog.bitwarden.com/bitwarden-the-oreo-autofill-framework-2a8b2e04f29e){:target="_blank"}.

### Testing the Auto-fill Framework Service

1. Open an app that has not been signed in to.
2. View the login page for the app and focus the username or password field. A Bitwarden pop-up will appear below the input field.
3. Select the appropriate login from the list or select the option to open Bitwarden to search for the correct login. Your username and password will be auto-filled.

------------

## Auto-fill Accessibility Service

1. Open the Bitwarden Android app.
2. Tap the **Tools** page.
3. For users on Android versions prior to Oreo (8.0), tap **Bitwarden Auto-fill Accessibility Service**. For users on Android versions Oreo (8.0) or greater, tap **Bitwarden Auto-fill Service** and then select **Auto-fill Accessibility Service** at the bottom. Status *Disabled* will appear in red.
4. Tap the **Open Accessibility Settings** button.
5. Locate **Bitwarden** from the list and enable it.

The Auto-fill Accessibility Service is now enabled.

The Auto-fill Accessibility Service is context-sensitive. This means that the Bitwarden auto-fill icon, and notification will only appear when the app detects a login form. You can change the way auto-fill behaves by navigating to **Settings** &rarr; **Options** &rarr; **Auto-fill Accessibility Service**.

### Testing the Auto-fill Accessibility Service

1. Open an app that has not been signed in to.
2. View the login page for the app. A Bitwarden auto-fill notification will appear in the notification bar.
3. Open the notification drawer and tap the **Bitwarden Auto-fill Service** notification. Your vault will display all possible matching logins. If you do not see the login you are looking for you may need to manually search for it by tapping the search icon. {% icon fa-search %}
4. Tap the appropriate login from the list. Your username and password will be auto-filled.

### Troubleshooting the Auto-fill Accessibility Service

<u>The Bitwarden Auto-fill Service keeps getting disabled</u>

Android may turn off the Bitwarden Auto-fill Service to optimize battery life. To resolve this you can either:
- Tell Android to ignore battery optimization for the Bitwarden app; or
- Manually turn on the Bitwarden Auto-fill Service each time

<u>The auto-fill notification does not appear when I visit a login page in my web browser.</u>

This is a currently a known issue with the following browsers, which do not support accessibility services:

- Firefox for Android - As a workaround you can use the Bitwarden Firefox addon instead. Navigate to Firefox Settings &rarr; Addons and search for "bitwarden".
- Samsung Internet Browser

Android has many web browsers. It can be hard to keep up with them all. We have to add support for each browser individually. If auto-fill does not work and your browser is not listed above please report it at <https://github.com/bitwarden/mobile/issues> so that we can add support.

<u>Bitwarden is using a lot of my device's battery power.</u>

Unfortunately Android accessibility services can be fairly resource intensive on certain devices. We provide a few alternative auto-fill modes that can help reduce battery consumption. You can find these under Bitwarden's Settings &rarr; Options menu.
