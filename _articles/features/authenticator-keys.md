---
layout: article
title: Authenticator key (TOTP) storage and use
categories: [features]
featured: true
popular: false
tags: [autofill, auto-fill, totp, 2fa, two-step login, two factor authentication, authenticator]
---

{% callout info %}Authenticator key (TOTP) storage is available to all accounts. TOTP code generation requires a premium membership or paid organization account.{% endcallout %}

Each website that supports [Time-based One-time Password](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (TOTP) or [Two-factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) (2FA) with an "Authenticator" handles configuration slightly differently. You will need to start the setup from each individual website or service that you are accessing (e.g. google.com, github.com). The option to configure this will commonly be found under the "Security" options of your account.

The Bitwarden [Android](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden) and [iOS](https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744) applications can make adding your TOTP key's easy by scanning a [QR code](https://en.wikipedia.org/wiki/QR_code) to populate the field automatically.

## Web Vault & Other Applications

Create or edit a login item you wish to store your TOTP key with. In the field labeled "**Authenticator Key (TOTP)**", input the secret key that you are provided with and select save.

## Mobile Applications

Create or edit a login item you wish to store your TOTP key with. In the field labeled "**Authenticator Key (TOTP)**", select the "camera" icon. Scan the QR code you have been presented with and the field will be automatically populated. You can then save the changes.

## Using Generated Codes

The Bitwarden mobile applications and browser extension have the ability to automatically copy a TOTP code to your device clipboard after auto-fill. Auto-fill any item that has a TOTP key stored and submit the information. The service you are logging into will ask for a verification code. Use the paste function of your device to input the code and submit it.

{% callout success %}This feature can be toggled off under Settings &rarr; Options &rarr; Disable Automatic TOTP Copy.{% endcallout %}

{% callout warning %} TOTP codes will not automatically copy to the system clipboard when "Enable Auto-fill On Page Load" is enabled in the browser extension.{% endcallout %}

## Support for More Parameters

Some services will use different parameters for their TOTP codes. Bitwarden will generate 6-digit codes using SHA-1 and rotate them every 30 seconds by default. Bitwarden can suport parameters digits (1-10), algorithm (SHA-1, SHA-256, and SHA-512), period (> 0) and secret (base32 key).

Example:

`otpauth://totp/Test:me?secret=JBSWY3DPEHPK3PXP&algorithm=sha256&digits=8&period=60`

Learn more about using otpauth:// uri's here: <https://github.com/google/google-authenticator/wiki/Key-Uri-Format>