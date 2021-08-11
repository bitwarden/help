---
layout: article
title: Bitwarden Authenticator (TOTP)
categories: [account-management]
featured: true
popular: false
tags: [autofill, auto-fill, totp, 2fa, two-step login, two factor authentication, authenticator]
order: 12
---

The Bitwarden Authenticator is an alternative solution to dedicated authentication apps like Authy, which you can use to verify your identity for websites and apps that use Two-step Login. The Bitwarden Authenticator generates 6-digit [Time-based One-time Passwords](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (TOTPs) using SHA-1 and rotates them every 30 seconds.

{% callout info %}Authenticator key (TOTP) storage is available to all accounts. TOTP code generation requires Premium or membership to a Paid Organization (Families, Teams, or Enterprise).{% endcallout %}

If you're new to using TOTPs for Two-step Login, refer to the [Field Guide to Two-step Login](https://bitwarden.com/help/article/bitwarden-field-guide-two-step-login/#securing-important-websites) for more information.

## Generate TOTP Codes

Each website that supports TOTPs or [Two-factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) (2FA) with an authenticator handles configuration differently. Start the setup from each individual website or service that you are accessing (e.g. google.com, github.com).

In Bitwarden, you can generate TOTPs using two methods:

- From a Bitwarden mobile app by [**Scanning a QR Code**](#scan-a-qr-code)
- From any Bitwarden app by [**Manually Entering a Secret**](#manually-enter-a-secret)

{% callout success %}
TOTPs rely on *time-based* code generation. If your device has an incorrect time compared to the server, it'll generate codes that don't work.
{% endcallout %}

### Scan a QR Code

Complete the following steps to setup the Bitwarden Authenticator from the iOS or Android app:

1. **Edit** the Vault item for which you want to generate TOTPs.
2. Tap the {% icon fa-camera %} camera icon in the **Authenticator Key (TOTP)** field.
3. Scan the QR code and tap **Save** to begin generating TOTPs.

Once setup, Bitwarden Authenticator will continuously generate 6-digit TOTPs rotated every 30 seconds, which you can use as a secondary step for Two-step Login to connected websites or apps.

### Manually Enter a Secret

Setup the Bitwarden Authenticator from any Bitwarden app by copying the secret key (*typically available as an alternative to a QR Code*) from the website or app and pasting it into the **Authenticator Key (TOTP)** field for the corresponding Vault item.

Once setup, Bitwarden Authenticator will continuously generate 6-digit TOTPs rotated every 30 seconds, which you can use as a secondary step for Two-step Login to connected websites or apps.

## Use Generated Codes

Bitwarden Mobile applications and Browser Extensions will automatically copy the TOTP code to your device's clipboard after Auto-fill, unless the **Enable Auto-fill on Page Load** option is active. Paste from your clipboard immediately after successful Auto-fill to use your TOTP or (if you're using a Browser Extension) use the context menu:

{% image two-step/be-totpcopy.png Browser Extension Context Menu %}

{% callout success %}Automatic TOTP copying can be toggled off under **Settings** &rarr; **Options** &rarr; **Disable Automatic TOTP Copy**.{% endcallout %}

All Bitwarden applications display your rotating TOTP code inside the Vault item, which can be copied and pasted just like a Username or Password.

{% image two-step/totpcode.png Copy a TOTP code %}

## Support for More Parameters

By default, Bitwarden will generate 6-digit TOTPs using SHA-1 and rotate them every 30 seconds, however some websites or services will expect different parameters. Parameters can be customized in Bitwarden by manually editing the `otpauth://totp/` URI for your Vault item.

|Parameter|Description|Values|Sample Query|
|---------|-----------|------|------------|
|Algorithm|Cryptographic algorithm used to generate TOTPs.|-sha1<br>-sha256<br>-sha512|`algorithm=sha256`|
|Digits|Number of digits in the generated TOTP.|1-10|`digits=8`|
|Period|Number of seconds with which to rotate the TOTP.|Must be > 0|`period=60`|

For example:

`otpauth://totp/Test:me?secret=JBSWY3DPEHPK3PXP&algorithm=sha256&digits=8&period=60`

Learn more about using `otpauth://` URIs [here](https://github.com/google/google-authenticator/wiki/Key-Uri-Format).

## Steam Guard TOTPs

The Bitwarden Authenticator (TOTP) can be used as an alternative means of TOTP generation for Steam using a `steam://` prefix followed by your secret key:

{% image steam-totp.png Steam TOTP generation%}

Generated `steam://` TOTPs are by default alphanumeric and 5 digits, as opposed to traditional 6-digit numeric TOTPs.

{% callout warning %}
To use this functionality, you'll need to manually extract your Steam account's secret using a third-party tool. There are tools like [SteamTimeIdler](https://github.com/SteamTimeIdler/stidler/wiki/Getting-your-%27shared_secret%27-code-for-use-with-Auto-Restarter-on-Mobile-Authentication#getting-shared-secret-from-ios-windows){:target="\_blank"} and [Steam Desktop Authenticator](https://github.com/Jessecar96/SteamDesktopAuthenticator){:target="\_blank"} that can help you accomplish this, however such **extraction tools are not officially supported by Bitwarden or Steam**. Use these tools at your own risk.
{% endcallout%}
