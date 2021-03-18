---
layout: article
title: Auto-fill Logins
categories: [account-management]
order: 07
featured: false
popular: false
tags: [autofill, auto-fill]
redirect_from:
  - /article/auto-fill-android/
  - /article/auto-fill-ios/
  - /article/auto-fill-browser/
---

Bitwarden makes your passwords available for auto-fill so that you can seamlessly log in to websites and apps while also maintaining strong and secure passwords. Auto-fill cuts the copying and pasting out of your login routine by detecting Vault items that match the service you're logging in to.

{% callout success %}
*Most* auto-fill scenarios rely on the attribution of URIs to Login items. If you're unfamiliar with using URIs, brush up using our [URIs for Vault Items]({% link _articles/features/uri-match-detection.md %}) article.
{% endcallout %}

Auto-fill is available for Bitwarden **Browser Extensions**, **Android**, and **iOS**:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="betab" data-bs-toggle="tab" href="#browser-extension" role="tab" aria-controls="be" aria-selected="true">Browser Extensions</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="andtab" data-bs-toggle="tab" href="#android" role="tab" aria-controls="and" aria-selected="false"><i class="fa fa-android"></i> Android</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="iotab" data-bs-toggle="tab" href="#ios" role="tab" aria-controls="ios" aria-selected="false"><i class="fa fa-apple"></i> iOS</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="browser-extension" role="tabpanel" aria-labelledby="betab" markdown="1">

## Auto-fill from Browser Extensions

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

  </div>
  <div class="tab-pane" id="android" role="tabpanel" aria-labelledby="andtab" markdown="1">

## Auto-fill on Android

Depending on the version of Android your device is running, there are a few different ways to enable auto-fill from Bitwarden:

|Option|Requires version...|Requires you to also enable...|
|------|-------------------|-------------------------|
|Autofill Service|Android 8+|-|
|Inline Autofill|Android 11+|Autofill Service, IME that supports Inline|
|Draw-Over|Android 6+|Accessibility|
|Accessibility|All Android Versions|-|

#### Autofill Service

The Autofill Service (*requires Android 8+*) will overlay a popup when the device is focused on an input that has a [matching Login item]({% link _articles/features/uri-match-detection.md %}). When your Vault is unlocked, you'll be provided the options to immediately auto-fill or to open your Vault:

{% image features/auto-fill-android/only-autofill-service.png Android Autofill Service%}

To enable the autofill service:

1. Open your Bitwarden Android app and tap the {% icon fa-cog %} **Settings** tab.
2. Tap the **Auto-fill Services** option.
3. Toggle the **Auto-fill Service** option. You'll be automatically redirected to an Android Settings screen.
4. From the Autofill service list, tap **Bitwarden**.

You'll be prompted to confirm you trust Bitwarden. Tapping **OK** will let Bitwarden read content on the screen to know when to offer auto-fill. Learn more from [our blog post](https://bitwarden.com/blog/post/the-oreo-autofill-framework){:target="_blank"}.

**Autofill Service not working?** See [Troubleshooting the Autofill Service]({{site.baseurl}}/article/auto-fill-android-troubleshooting/#troubleshooting-the-autofill-service).

#### Inline Autofill

{% callout info %}
Before you can enable Inline Autofill, enable **Autofill Service**.
{% endcallout %}

Inline Autofill (*requires Android 11+, a compatible IME, and **Autofill Service** to be enabled*) moves the Auto-fill Service overlay into the keyboard:

{% image features/auto-fill-android/inline.png Inline Autofill in GBoard %}

To enable inline autofill:

1. Open your Bitwarden Android app and tap the {% icon fa-cog %} **Settings** tab.
2. Tap the **Auto-fill Services** option.
3. Toggle the **Use Inline Autofill** option.

If your auto-fill overlay doesn't move into your keyboard, check whether the IME you're using supports Inline.

#### Accessibility

The Accessibility method will overlap a popup offering to open your Vault to browse [matching Login items]({% link _articles/features/uri-match-detection.md %}) when the device is focused on an input:

{% image features/auto-fill-android/drawover.png Accessiblity Popup %}

To enable the accessibility method:

1. Open your Bitwarden Android app and tap the {% icon fa-cog %} **Settings** tab.
2. Tap the **Auto-fill Services** option.
3. Toggle the **Use Accessibility** option. You'll be automatically redirected to an Android Settings screen.
4. In the Services or Downloaded Apps list, tap **Bitwarden** and toggle **Use Bitwarden** from Off &rarr; On.

   You'll be prompted to accept allow Bitwarden permissions on your device. Tapping **Allow** will let Bitwarden read content on the screen to know when to offer auto-fill.

{% callout warning %}
If you're using Android 6+, you must also enable **Draw-Over**.

**Accessibility not working?** See [Troubleshooting the Accessibility Service]({{site.baseurl}}/article/auto-fill-android-troubleshooting/#troubleshooting-the-accessibility-service).
{% endcallout %}

#### Draw-Over

{% callout info %}
Before you can enable Draw-Over, enable **Accessibility**.
{% endcallout %}

Draw-Over (*required to use Accesibility on Android 6+*) will overlap a popup offering to open your Vault to browse [matching Login items]({% link _articles/features/uri-match-detection.md %}) when the device is focused on an input:

{% image features/auto-fill-android/drawover.png Accessiblity Popup %}
To enable the Draw-Over method:

1. Open your Bitwarden Android app and tap the {% icon fa-cog %} **Settings** tab.
2. Tap the **Auto-fill Services** option.
3. Toggle the **Use Draw-Over** option. You'll be automatically redirected to an Android Settings screen.
4. Tap Bitwarden from the list and toggle the **Permit drawing over other apps** option.

{% callout success %}
**Still having problems?** Refer to our break-out guide on [Troubleshooting Android Auto-fill]({% link _articles/features/auto-fill-android-troubleshooting.md %}).

If you're still not able to get Android auto-fill working, [Contact Us](https://bitwarden.com/contact){:target="\_blank"}.
{% endcallout %}

  </div>
  <div class="tab-pane" id="ios" role="tabpanel" aria-labelledby="iostab" markdown="1">

## Auto-fill on iOS

Auto-fill on iOS comes in two flavors:

- **Keyboard Auto-fill**: (*Recommended*) Use this option to make Bitwarden auto-fill accessible in any iOS app (including Web Browsers) through a keyboard button.
- **Browser App Extension**: Use this option to make Bitwarden auto-fill accessible *only* in Web Browser apps, like Safari, through the Share menu.

{% callout success %}
It is currently not possible to use auto-fill on iOS if the [Vault Timeout Action]({{site.baseurl}}/article/vault-timeout/#vault-timeout-action) for the device is set to **Log Out** and your *only* enabled [Two-step Login Method]({{site.baseurl}}/article/setup-two-step-login) requires NFC (e.g. an NFC YubiKey), as iOS will not allow NFC inputs to interrupt auto-fill workflows.

Either change your Vault Timeout Action to **Unlock**, or enable another Two-step Login Method.
{% endcallout %}

### Keyboard Auto-fill

To enable keyboard auto-fill on iOS:

1. Open the iOS {% icon fa-cog %} **Settings** app on your device.
2. Tap **Passwords**.
3. Tap **AutoFill Passwords**.
4. Toggle AutoFill Passwords on and tap **Bitwarden** in the Allow Filling From list:

   {% image features/auto-fill-ios/autofill-ios-enable.png iOS AutoFill Screen %}

   We recommend disabling any other Auto-fill service in the Allow Filling From list, but that's not required. **In either case, let's test auto-fill to make sure it's working properly:**
6. Open an app or website that you're not currently signed in to.
7. Tap the username or password field on the login screen. A keyboard will slide up with a matching Login (`my_username`), or with a {% icon fa-key %} **Passwords** button:

   {% image features/auto-fill-ios/autofill-ios.jpeg AutoFill on iOS %}

   If a [matching Login]({% link _articles/features/uri-match-detection.md %}) is displayed, tap it to auto-fill. If the {% icon fa-key %} **Passwords** button is displayed, tap it to browse your Vault for the Login item to use.

   {% callout success %}If the {% icon fa-key %} **Passwords** button is displayed, it's probably because there isn't an item in your Vault with a [matching URI]({% link _articles/features/uri-match-detection.md %}).{% endcallout %}

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

  </div>
</div>
