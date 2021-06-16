---
layout: article
title: Unlock with PIN
categories: [account-management]
featured: false
popular: false
tags: [unlock, pin]
order: 10
---

Bitwarden can be configured to accept a Personal Identification Number (PIN) as a method to unlock your Vault.

PINs can **only be used to unlock** your Vault, you will still be required to use your Master Password and any enabled [Two-step Login method]({% link _articles/two-step-login/setup-two-step-login.md %}) when you **log in**. If you're not sure of the difference, scroll down to [Understanding Unlock vs. Log In](#understanding-unlock-vs-log-in).

## Enable Unlock with PIN

Unlock with PIN can be enabled for Bitwarden Browser Extensions, Desktop, and Mobile:


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

#### Enable for Browser Extension

To enable Unlock with PIN for your Browser Extension:

1. Open the {% icon fa-cogs %} **Settings** tab.
2. Scroll down to the Security section and check the **Unlock with PIN** checkbox.
3. Enter the desired PIN code in the input box. Your PIN can be any combination of characters (a-z, 0-9, $, #, etc.).

   {% callout success %}The pre-checked option **Lock with master password on browser restart** will require you to enter your Master Password instead of the PIN when your browser restarts. If you want the ability to unlock with a PIN even when the browser restarts, uncheck the option.{% endcallout %}

Your Unlock with PIN settings will persist **until you log out**. When you log out of your Browser Extension, you'll need to re-enable Unlock with PIN.

To change your PIN, disable and re-enable Unlock with PIN. You will be prompted to enter a new PIN.

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

#### Enable for Desktop

To enable Unlock with PIN for your Desktop app:

1. Open your **Settings** (on Windows, **File** &rarr; **Settings**) (on macOS, **Bitwarden** &rarr; **Preferences**).
2. Scroll down to the Security section and check the **Unlock with PIN** checkbox.
3. Enter the desired PIN code in the input box. Your PIN can be any combination of characters (a-z, 0-9, $, #, etc.).

   {% callout success %}The pre-checked option **Lock with master password on restart** will require you to enter your Master Password instead of the PIN when the app restarts. If you want the ability to unlock with a PIN when the app restarts, uncheck this option.{% endcallout %}

Your Unlock with PIN settings will persist **until you log out**. When you log out of your Desktop App, you'll need to re-enable Unlock with PIN.

To change your PIN, disable and re-enable Unlock with PIN. You will be prompted to enter a new PIN.

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

#### Enable for Mobile

To enable Unlock with PIN for your Mobile app:

1. Open the {% icon fa-cogs %} **Settings** tab.
2. Scroll down to the Security section and tap the **Unlock with PIN Code** option.
3. Enter the the desired PIN code in the input box. Your PIN can be any combination of numbers (0-9).

   {% callout success %}A dialog box will appear asking whether you want to require unlocking with your master password when the application is restarted. Tap **Yes** to require your Master Password instead of PIN when the app restarts. Tap **No** for the ability to unlock with the PIN when the app restarts.{% endcallout %}

Your Unlock with PIN settings will persist **until you log out**. When you log out of your Mobile App, you'll need to re-enable Unlock with PIN.

To change your PIN, disable and re-enable Unlock with PIN. You will be prompted to enter a new PIN.

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
</div>

{% callout info %}
When using the **Lock with master password on restart** PIN option, the Bitwarden application may not fully purge sensitive data from application memory when entering a locked state. If you are concerned about your device's local memory being compromised, you should not use this option.
{% endcallout %}

## Understanding Unlock vs. Log In

In order to understand why unlocking and logging in aren't the same, it's important to remember that Bitwarden [never stores unencrypted data]({% link _articles/security/vault-data.md %}) on its servers. **When your Vault is neither unlocked nor logged in**, your Vault data only exists on the server in its [encrypted form]({% link _articles/security/what-encryption-is-used.md %}).

**Logging in** to Bitwarden **decrypts** your Vault data to your device. In practice, that means two things:

1. Logging in will always require your Master Password, because your Master Password is the source of the key needed to decrypt your Vault data. Additionally, because decryption is an operation that needs to be protected, this stage is where [any enabled Two-step Login methods]({% link _articles/two-step-login/setup-two-step-login.md %}) would be required.
2.  Logging in will always require you to be connected to the internet (or, if you're self-hosting, connected to the server), because you need access to the encrypted Vault in order to decrypt it.

**Unlocking** can only be done when you're already logged in. In other words, only when your Vault data is already stored (encrypted) on your device. Because your Vault is already downloaded and your decryption key stored in memory:

1. You don't need the decryption key derived from your Master Password, so you're free to use other access methods, like [PIN codes]({% link _articles/account/unlock-with-pin.md %}) and [biometrics]({% link _articles/account/biometrics.md %}).
2. You don't need to be connected to the internet (or, if you're self-hosting, connected to the server).
