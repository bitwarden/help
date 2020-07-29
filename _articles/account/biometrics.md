---
layout: article
title: Authentication with biometrics
categories: [account-management, organizations]
featured: false
popular: false
tags: [authentication, face id, touch id, hello, windows, mac, ios, android]
---

## Authentication

After logging into your Bitwarden account using your Master Password and any two-step login (if enabled) - you can leverage your device’s biometrics capabilities to unlock your vault faster.

These biometric features are part of the built-in security in your device and/or operating system.

Bitwarden is leveraging native APIs to perform this validation, and as such does not receive any biometrics information from the device.

## Windows

### Supported Authentication:
- Hello (includes below options)
  - PIN
  - Facial Recognition
  - [Other Windows Hello supported hardware](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-biometric-requirements)

&rarr; [Enabling up Windows Hello](https://support.microsoft.com/en-us/help/4028017/windows-learn-about-windows-hello-and-set-it-up)

### Supported clients

- Desktop

## macOS

### Supported authentication methods

- Touch ID

&rarr; [Enabling Touch ID on macOS](https://support.apple.com/en-us/HT207054)

### Supported clients

- Desktop

## Android

### Supported authentication methods

- Fingerprint unlock
- Face Unlock

&rarr; [Enabling fingerprint unlock](https://support.google.com/nexus/answer/6285273?hl=en)

&rarr; [Enabling face unlock](https://support.google.com/pixelphone/answer/9517039?hl=en)

### Supported clients

- Bitwarden on Google Play
- Bitwarden on FDroid

## iOS

### Supported authentication methods
- Touch ID
- Face ID

&rarr; [Enabling Touch ID on iOS](https://support.apple.com/en-us/HT201371)

&rarr; [Enabling Face ID on iOS](https://support.apple.com/en-us/HT208109)

### Supported clients

- Bitwarden on the App Store

## Enabling Biometrics in Bitwarden

### Mobile Apps

To enable this in Bitwarden, simply navigate to settings and under the Security section, click enable Face ID, Touch ID, Face Unlock or Fingerprint unlock. The option presented will be based on your device and what biometric security features are available.

{% image /biometrics/ios.png Configuring Face ID and Touch ID in iOS%}

### Desktop Apps

Enabling the desktop client is performed in much the same way. Navigate to the settings tab and you’ll see the option to enable Windows Hello or Touch ID for unlocking your vault.

When biometrics are configured and your vault is locked, you will have a new button presented in the desktop application, either “Unlock with Windows Hello”, or “Unlock with Touch ID”. Clicking this button will initiate the unlocking sequence. Alternatively, you can still opt to unlock with your Master Password if you would like.

{% image /biometrics/macos.png Configuring Touch ID in macOS %}

{% image /biometrics/touchid-unlock.png Prompt to unlock with Touch ID in macOS %}

{% image /biometrics/windows.png Configuring Hello in Windows %}

{% image /biometrics/hello-unlock.png Prompt to unlock with Windows Hello %}

### Browser Extensions

Biometrics are not currently supported on our Browser extensions. However, we understand that it is incredibly important and this functionality is on our near-term roadmap.
