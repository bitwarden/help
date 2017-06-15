---
layout: article
title: Auto-fill logins on Android
categories: [Miscellaneous]
featured: false
popular: false
tags: [android, autofill, auto-fill]
---

You can use the bitwarden Android app to add new and auto-fill existing logins on the web and in other apps.

## Enabling the service

1. Open the bitwarden Android app.
2. Tap **Tools** -> **bitwarden Auto-fill Service**. Status *Disabled* will appear.
3. Tap **Open Accessibility Settings**.
4. Locate **bitwarden** from the list and enable it.

Auto-fill is context-sensitive. This means that the bitwarden auto-fill icon, and notification will only appear when the app detects a login form. You can change the way auto-fill behaves by navigating to **Settings** -> **Features** -> **Auto-fill**.

## Testing auto-fill

1. Open an app that has not been signed in to.
2. View the login page for the app. A bitwarden auto-fill notification will appear in the notification bar.
3. Open the notification drawer and tap the **bitwarden Auto-fill Service** notification. Your vault will display all possible matching logins. If you do not see the login you are looking for you may need to manually search for it by tapping the search icon. {% icon fa-search %}
4. Tap the appropriate login from the list. Your username and password will be auto-filled.

## Troubleshooting

**1. The bitwarden Auto-fill Service keeps getting disabled**

Android may turn off the bitwarden Auto-fill Service to optimize battery life. To resolve this you can either:
- Tell Android to ignore battery optimization for the bitwarden app; or
- Manually turn on the bitwarden Auto-fill Service each time

**2. The auto-fill notification does not appear when I visit a login page in my web browser.**

This is a currently a known issue with the following browsers:

- Firefox for Android
- Samsung Internet Browser

Android has many web browsers. It can be hard to keep up with them all. We have to add support for each browser individually. If auto-fill does not work and your browser is not listed above please report it at <https://github.com/bitwarden/mobile/issues> so that we can add support.
