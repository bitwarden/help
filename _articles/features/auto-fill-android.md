---
layout: article
title: Auto-fill Logins on Android
categories: [auto-fill]
featured: false
popular: false
order: 02
tags: [android, autofill, auto-fill]
---

Bitwarden makes your passwords available for auto-fill so that you can seamlessly log in to websites and apps while also maintaining strong and secure passwords. Auto-fill cuts the copying and pasting out of your login routine by detecting Vault items that match the service you're logging in to.

{% callout success %}
*Most* auto-fill scenarios rely on the attribution of URIs to Login items. If you're unfamiliar with using URIs, brush up using our [Using URIs]({% link _articles/features/uri-match-detection.md %}) article.

Please note that custom fields are not currently supported in Mobile auto-fill.
{% endcallout %}

## Auto-fill on Android

Depending on the version of Android your device is running, there are a few different ways to enable auto-fill from Bitwarden:

|Option|Requires version...|Requires you to also enable...|
|------|-------------------|-------------------------|
|Autofill Service|Android 8+|-|
|Inline Autofill|Android 11+|Autofill Service, IME (Input Method Editor) that supports Inline|
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

Inline Autofill (*requires Android 11+, a compatible IME (Input Method Editor), and **Autofill Service** to be enabled*) moves the Auto-fill Service overlay into the keyboard:

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
**Still having problems?** Refer to our break-out guide on [Troubleshooting Android Auto-fill]({% link _articles/miscellaneous/auto-fill-android-troubleshooting.md %}).

If you're still not able to get Android auto-fill working, [Contact Us](https://bitwarden.com/contact){:target="\_blank"}.
{% endcallout %}
