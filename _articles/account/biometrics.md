---
layout: article
title: Unlock with Biometrics
categories: [getting-started]
featured: false
popular: false
tags: [unlock, face id, touch id, hello, windows, mac, ios, android]
order: 06
---

Bitwarden can be configured to accept biometrics as a method to unlock your Vault. Biometrics can **only be used to unlock** your Vault, you will still be required to log in to your Vault with your Master Password and any enabled [Two-step Login method]({% link _articles/two-step-login/setup-two-step-login.md %}).

Biometric features are part of the built-in security in your device and/or operating system. Bitwarden leverages native APIs to perform this validation, and as such **does not receive any biometrics information** from the device.

## Mobile Applications

Biometric Unlock is supported for both the Android (Google Play or FDroid) and iOS Mobile Applications:
- For **Android**, via [fingerprint unlock](https://support.google.com/nexus/answer/6285273?hl=en){:target="\_blank"} or [face unlock](https://support.google.com/pixelphone/answer/9517039?hl=en){:target="\_blank"}.
- For **iOS**, via [Touch ID](https://support.apple.com/en-us/HT201371){:target="\_blank"} and [Face ID](https://support.apple.com/en-us/HT208109){:target="\_blank"}.

### Enable Biometric Unlock in Mobile

Complete the following steps to enable Biometric Unlock in your Mobile App:

{% callout info %}
Your Biometric method of choice must be enabled on your device or operating system **before** it can be enabled in Bitwarden.
{% endcallout %}

1. Open your **Settings** tab.
2. In the Security section, your available Biometrics options will be listed. Tap the Biometric method you would like to enable:

{% image /biometrics/ios_faceid.jpeg Enable Face ID in iOS%}

A green `Enabled` status will appear when activated. Once Biometric Unlock is enabled, your device will automatically prompt for your biometric data when unlocking the app.

## Desktop Applications

Biometric Unlock is supported for both the Windows and macOS Desktop Applications:
- For **Windows**, via [Windows Hello](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello){:target="\_blank"} using PIN, Facial Recognition, or [other hardware that meets Windows Hello biometric requirements](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-biometric-requirements){:target="\_blank"}.
- For **macOS**, via [Touch ID](https://support.apple.com/en-us/HT207054){:target="\_blank"}.

### Enable Biometric Unlock in Desktop

Complete the following steps to enable Biometric Unlock in your Desktop App:

{% callout info %}
Your Biometric method of choice must be enabled on your device or operating system **before** it can be enabled in Bitwarden.
{% endcallout %}

1. Open your **Settings** (on Windows, **File** &rarr; **Settings**) (on macOS, **Bitwarden** &rarr; **Preferences**).
2. In the Security section, your available Biometrics options will be listed as checkbox items. Check the Biometric method you would like to enable:

   {% image /biometrics/windows.png Configuring Hello in Windows %}

{% callout info %}
If you do not see the option to enable Windows Hello within the Desktop preferences, you may need to install the [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads).
{% endcallout %}

Once Biometric Unlock is enabled, a new button will be presented on the Unlock screen. Selecting this button (for example, **Unlock with Windows Hello**) will initiate unlock. You may at any time choose to unlock your Vault with your Master Password instead.

{% image /biometrics/hello-unlock.png Unlock with Windows Hello %}
