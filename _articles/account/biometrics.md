---
layout: article
title: Unlock with Biometrics
categories: [account-management]
featured: false
popular: false
tags: [unlock, face id, touch id, hello, windows, mac, ios, android]
order: 11
---

Bitwarden can be configured to accept biometrics as a method to unlock your Vault.

Biometrics can **only be used to unlock** your Vault, you will still be required to use your Master Password and any enabled [Two-step Login method]({% link _articles/two-step-login/setup-two-step-login.md %}) when you **log in**. If you're not sure of the difference, scroll down to [Understanding Unlock vs. Log In](#understanding-unlock-vs-log-in).

{% callout success %}
Biometric features are part of the built-in security in your device and/or operating system. Bitwarden leverages native APIs to perform this validation, and therefore **Bitwarden does not receive any biometrics information** from the device.
{% endcallout %}

## Enable Unlock with Biometrics

Unlock with Biometrics can be enabled for Bitwarden on Mobile, Desktop, and Browser Extensions:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

#### Enable for Mobile

Unlock with Biometrics is supported for Android (Google Play or FDroid) via [fingerprint unlock](https://support.google.com/nexus/answer/6285273?hl=en){:target="\_blank"} or [face unlock](https://support.google.com/pixelphone/answer/9517039?hl=en){:target="\_blank"}, and for iOS via [Touch ID](https://support.apple.com/en-us/HT201371){:target="\_blank"} and [Face ID](https://support.apple.com/en-us/HT208109){:target="\_blank"}.

To enable Unlock with Biometrics for your Mobile device:

1. In your device's native settings (e.g. the iOS {% icon fa-cog %} **Settings** app), make sure your biometric method is turned on.
2. In your Bitwarden app, open the {% icon fa-cogs %} **Settings** tab.
3. Scroll down to the Security section and tap the biometrics option you want to enable. What's available on this screen is determined by your device's hardware capabilities and what you've enabled (**Step 1**), for example:

 {% image biometrics/ios_faceid.jpeg Enable Face ID in iOS%}

Tapping the option should prompt you to input your biometric (i.e. face or thumb-print). A green `Enabled` status indicator (pictured above) will indicate when Unlock with Biometrics is successfully enabled.

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

#### Enable for Desktop

Unlock with Biometrics is supported for Windows via [Windows Hello](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello){:target="\_blank"} using PIN, Facial Recognition, or [other hardware that meets Windows Hello biometric requirements](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-biometric-requirements){:target="\_blank"} and for macOS via [Touch ID](https://support.apple.com/en-us/HT207054){:target="\_blank"}.

To enable Unlock with Biometrics for your Desktop app:

1. In your device's native settings (e.g. the macOS {% icon fa-cog %} **System Preferences** app), make sure your biometric method is turned on.

   {% callout success%}Windows Users may need to install the [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads){:target="\_blank"} before Windows Hello can be turned on in Desktop Preferences.{% endcallout %}
2. In your Bitwarden app, open your Settings (on Windows, **File** &rarr; **Settings**) (on macOS, **Bitwarden** &rarr; **Preferences**).
3. Scroll down to the Security section and select the biometrics option you want to enable. What's available on this screen is determined by your device's hardware capabilities and what you've turned on (**Step 1**), for example:

   {% image biometrics/windows.png Unlock with Windows Hello %}

Once enabled, the Desktop app will automatically prompt for your biometric method to unlock your Vault. You can turn off automatic-prompting from the same menu using the **Do not prompt...** option:

{% image biometrics/auto-off.png Unlock with Windows Hello %}

Regardless of your auto-prompt selection, a new button will be presented on the Unlock screen for unlocking your Vault:

{% image biometrics/hello-unlock.png Unlock with Windows Hello %}

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

#### About Biometrics in Browser Extensions

Unlock with Biometrics is supported for Extensions through an integration with the Bitwarden Desktop app. In practical terms, this means:

1. **For all Browser Extensions**, you will need to enable Unlock with Biometrics in Desktop before proceeding. **For all except Safari**, the Bitwarden Desktop app must be logged in and running in order to use Unlock with Biometrics for a Browser Extension.
2. Browser Extensions support the same biometrics options as Desktop; for Windows via [Windows Hello](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello){:target="\_blank"} using PIN, Facial Recognition, or [other hardware that meets Windows Hello biometric requirements](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-biometric-requirements){:target="\_blank"} and for macOS via [Touch ID](https://support.apple.com/en-us/HT207054){:target="\_blank"}.

Two things to bear in mind before enabling the integration are **Permissions** and **Supportability**, documented below:

##### Permissions

To facilitate this integration, browser extensions **except Safari** will ask you to accept a new permission for Bitwarden to `communicate with cooperating native applications`. This permission is safe, but **optional**, and will enable the integration that is required to enable Unlock with Biometrics.

Declining this permission will allow you to use the Browser Extension as normal, without Unlock with Biometrics functionality.

##### Supportability

Unlock with Biometrics is supported for Extensions on **Chromium-based** browsers (Chrome, Edge, Opera, Brave, etc.), Firefox 87+, and Safari 14+. Unlock with Biometrics is **currently not supported for**:

- Firefox ESR (Firefox v87+ will work).
- Microsoft App Store Desktop Apps (a side-loaded Windows Desktop App, available at [bitwarden.com/download](https://bitwarden.com/download){:target="\_blank"} will work fine).
- Side-loaded MacOS Desktop Apps (an App Store Desktop app will work fine).

#### Enable for Browser Extensions

To enable Unlock with Biometrics for your Browser Extension:

{% callout success %}Biometrics (Windows Hello or Touch Id) must be enabled in your Desktop App before proceeding. IIf you don't see the Windows Hello option in your Desktop app, you may need to [install the Microsoft Visual C++ Redistributable.](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0){:target="\_blank} Additionally, **if you're using Safari**, you can skip straight to **Step 4**.{% endcallout %}

1. In your Bitwarden Desktop app, navigate to Settings (on Windows, **File** &rarr; **Settings**) (on macOS, **Bitwarden** &rarr; **Preferences**).
2. Scroll down to the Options section, and check the **Enable Browser Integration** box.

   {% callout info %}Optionally, check the **Require verification for browser integration** option to require [account fingerprint]({% link _articles/features/fingerprint-phrase.md %}) verification when you activate the integration.{% endcallout %}
3. In your Browser, navigate to the Extensions manager (e.g. `chrome://extensions` or `brave://extensions`), open Bitwarden, and toggle the **Allow access to file URLs** option.


   Not all browsers will require this to be toggled on, so feel free to skip this step and circle back to it only if the remaining procedure doesn't work.
4. In your Browser Extension, open the {% icon fa-cogs %} **Settings** tab.
5. Scroll down to the Security section and check the **Unlock with biometrics** box.

   {% callout success %}You may be prompted at this stage to allow Bitwarden to `communicate with cooperating native applications`. This permission is safe, but **optional** and solely enables the Browser Extension to communicate with Desktop as described above.{% endcallout %}

   You should be prompted by your Desktop app to input your biometric. Doing so will complete the initial setup procedure. If you've opted to require verification (**Step 2**), you'll need to approve a fingerprint validation check.

Once enabled, a new button will be presented on the Unlock screen:

{% image biometrics/be-bio-unlock.png Unlock with Biometrics %}

{% callout success %}
Your Desktop app needs to be **Logged In** but does not need to be **Unlocked** to unlock a Browser Extension with biometrics.
{% endcallout %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
</div>

## Understanding Unlock vs. Log In

In order to understand why unlocking and logging in aren't the same, it's important to remember that Bitwarden [never stores unencrypted data]({% link _articles/security/vault-data.md %}) on its servers. **When your Vault is neither unlocked nor logged in**, your Vault data only exists on the server in its [encrypted form]({% link _articles/security/what-encryption-is-used.md %}).

**Logging in** to Bitwarden **decrypts** your Vault data to your device. In practice, that means two things:

1. Logging in will always require your Master Password, because your Master Password is the source of the key needed to decrypt your Vault data. Additionally, because decryption is an operation that needs to be protected, this stage is where [any enabled Two-step Login methods]({% link _articles/two-step-login/setup-two-step-login.md %}) would be required.
2.  Logging in will always require you to be connected to the internet (or, if you're self-hosting, connected to the server), because you need access to the encrypted Vault in order to decrypt it.

**Unlocking** can only be done when you're already logged in. In other words, only when your Vault data is already stored (encrypted) on your device. Because your Vault is already downloaded and your decryption key stored in memory:

1. You don't need the decryption key derived from your Master Password, so you're free to use other access methods, like [PIN codes]({% link _articles/account/unlock-with-pin.md %}) and [biometrics]({% link _articles/account/biometrics.md %}).
2. You don't need to be connected to the internet (or, if you're self-hosting, connected to the server).
