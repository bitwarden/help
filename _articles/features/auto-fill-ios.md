---
layout: article
title: Auto-fill Logins on iOS
categories: [auto-fill]
featured: true
popular: false
order: 03
tags: [iOS, Auto-fill, autofill]
---

Bitwarden makes your passwords available for auto-fill so that you can seamlessly log in to websites and apps while also maintaining strong and secure passwords. Auto-fill cuts the copying and pasting out of your login routine by detecting Vault items that match the service you're logging in to.

{% callout success %}
*Most* auto-fill scenarios rely on the attribution of URIs to Login items. If you're unfamiliar with using URIs, brush up using our [Using URIs]({% link _articles/features/uri-match-detection.md %}) article.

Please note that custom fields are not currently supported in Mobile auto-fill.
{% endcallout %}

## Auto-fill on iOS

Auto-fill on iOS comes in two flavors:

- **Keyboard Auto-fill**: (*Recommended*) Use this option to make Bitwarden auto-fill accessible in any iOS app (including Web Browsers) through a keyboard button.
- **Browser App Extension**: Use this option to make Bitwarden auto-fill accessible *only* in Web Browser apps, like Safari, through the Share menu.

{% callout success %}
It is currently not possible to use auto-fill on iOS if the [Vault Timeout Action]({{site.baseurl}}/article/vault-timeout/#vault-timeout-action) for the device is set to **Log Out** and your *only* enabled [Two-step Login Method]({{site.baseurl}}/article/setup-two-step-login) requires NFC (e.g. an NFC YubiKey), as iOS will not allow NFC inputs to interrupt auto-fill workflows.

Either change your Vault Timeout Action to **Lock**, or enable another Two-step Login Method.
{% endcallout %}

### Keyboard Auto-fill

To enable keyboard auto-fill on iOS:

1. Open the iOS {% icon fa-cog %} **Settings** app on your device.
2. Tap **Passwords**.
3. Tap **AutoFill Passwords**.
4. Toggle AutoFill Passwords on and tap **Bitwarden** in the Allow Filling From list:

   {% image features/auto-fill-ios/autofill-ios-enable.png iOS AutoFill Screen %}

   {% callout success %}We highly recommend disabling any other Auto-fill service (like Keychain) in the Allow Filling From list before proceeding.{% endcallout %}

   **Let's test auto-fill to make sure it's working properly:**
6. Open an app or website that you're not currently signed in to.
7. Tap the username or password field on the login screen. A keyboard will slide up with a matching Login (`my_username`), or with a {% icon fa-key %} **Passwords** button:

   {% image features/auto-fill-ios/autofill-ios.jpeg AutoFill on iOS %}

   If a [matching Login]({% link _articles/features/uri-match-detection.md %}) is displayed, tap it to auto-fill. If the {% icon fa-key %} **Passwords** button is displayed, tap it to browse your Vault for the Login item to use. In cases where the {% icon fa-key %} **Passwords** button is displayed, it's probably because there isn't an item in your Vault with a [matching URI]({% link _articles/features/uri-match-detection.md %}).

   {% callout info %}Are you getting a `Biometric unlock disabled pending verification of master password` message? [Learn what to do]({{site.baseurl}}/article/autofill-faqs/#q-what-do-i-do-about-biometric-unlock-disabled-pending-verification-of-master-password).{% endcallout%}

### Browser App Extension Auto-fill

To enable Browser App Extension auto-fill on iOS:

1. Open your Bitwarden app and tap {% icon fa-cogs %} **Settings**.
2. Tap the **App Extension** option in the Auto-fill section.
3. Tap the **Enable App Extension** button.
4. From the share menu that slides up, tap **Bitwarden**.

   A green `Extension Activated!` message will indicate success.

   **Let's test the App Extension to make sure it's working properly:**
5. Open your device's web browser and navigate to a website that you're not currently signed in to.
6. Tap the <img src="../../images/features/auto-fill-ios/ios_share_icon.png" style="margin-top:0px"> **Share** icon.
7. Scroll down and tap the **Bitwarden** option:

   {% image features/auto-fill-ios/extension.png Bitwarden in the Share menu %}

   {% callout info %}If you have [Unlock with Biometrics]({% link _articles/account/biometrics.md %}) enabled, the first time you tap this option you will be prompted to verify your Master Password.{% endcallout %}
8. A Bitwarden screen will slide up on your device and will list [matching Login items]({% link _articles/features/uri-match-detection.md %}) for the website. Tap the item to auto-fill.

   {% callout success %}If there are no Login items listed, it's probably because there isn't an item in your Vault with a [matching URI]({% link _articles/features/uri-match-detection.md %}).{% endcallout %}
