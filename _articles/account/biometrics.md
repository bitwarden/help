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

## Browser Extensions

Biometric Unlock is supported for **Chromium-based** (e.g. Chrome, Edge) Bitwarden Browser Extensions by integration with a native Bitwarden Desktop App (the Desktop App must also be running the latest version). Through the Desktop App's access to Biometric APIs, Browser Extensions support Biometric Unlock:
- For **Windows**, via [Windows Hello](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello){:target="\_blank"} using PIN, Facial Recognition, or [other hardware that meets Windows Hello biometric requirements](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-biometric-requirements){:target="\_blank"}.
- For **macOS**, via [Touch ID](https://support.apple.com/en-us/HT207054){:target="\_blank"}.

{% callout note %}
**Biometric Unlock is currently not available for:**

- Firefox Browser Extensions (keep an eye on the required up-stream enhancement to make `nativeMessaging` optional [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1630415){:target="\_blank"}).
- Safari Browser Extensions.
- Microsoft App Store Desktop Apps (a side-loaded Windows Desktop App, available at [bitwarden.com/download](https://bitwarden.com/download){:target="\_blank"} will work fine).
- Side-loaded MacOS Desktop Apps (an App Store Desktop app will work fine).

In the cases of FireFox and the Microsoft App Store, this is due to native messaging limitations (see [Native Messaging Permissions](#native-messaging-permissions)). In all cases, Bitwarden team is investigating and will provide updates as things progress.
{% endcallout %}

The Bitwarden Desktop Application must be installed, logged in, and running in order to use Biometric Unlock in a Browser Extension. Additionally, you will need to [enable Biometric Unlock in the desktop app](#enable-biometric-unlock-in-desktop) before proceeding.

### Native Messaging Permissions

When your Chromium-based Browser Extension updates to the version that supports Biometric Unlock (v1.48.0), you may be asked to accept a new permission for Bitwarden to `Communicate with cooperating native applications`. This permission is safe, but **optional**, and will enable the Browser Extension to communicate with the Bitwarden Desktop App, which is required to enable Biometric Unlock, as described above.

Declining this permission will allow you to use v1.48.0 as normal, without Biometric Unlock functionality.

### Enable Biometric Unlock for Browser Extensions

Complete the following steps to enable Biometric Unlock in your Browser Extension:

1. In the Desktop App, navigate to **Settings** (on Windows, **File** &rarr; **Settings**) (on macOS, **Bitwarden** &rarr; **Preferences**).
2. Check the **Enable Browser Integration** checkbox.

   Optionally, enable the **Require verification for browser integration** option to require [account fingerprint]({% link _articles/features/fingerprint-phrase.md %}) verification when activating the integration between Browser Extension and Desktop App.
3. In the Browser Extension, open the **Settings** tab.
4. Check the **Unlock with biometrics** checkbox to activate the integration. You will be prompted by your Desktop App to input your biometric authentication method to complete the setup.

   If you've opted to **Require verification for browser integration**, a `Desktop sync verification` dialog box will appear in your Browser Extension and a `Verify browser connection` dialog box will appear in your Desktop Application. Validate that the displayed [account fingerprint]({% link _articles/features/fingerprint-phrase.md %}) matches in both locations. If they match, select the **Approve** button and input your Biometric authentication method.
   
   {% callout success %}In either case, you'll need to redo this "activation" step each time the Desktop App or Browser Extension is restarted.{% endcallout %}

Once Biometric Unlock is enabled, a new button will be presented on the Unlock screen. Selecting the **Unlock biometrics** button will initiate unlock via the Desktop App.

{% callout warning %}
If you attempt to use Biometric Unlock when the Desktop App is closed, you will be prompted to open the Desktop App. If you've opted to **Require verification for browser integration**, you'll also be prompted to recomplete fingerprint verification.
{% endcallout %}
