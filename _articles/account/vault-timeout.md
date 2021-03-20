---
layout: article
title: Vault Timeout Options
categories: [account-management]
featured: false
popular: false
tags: [account, vault, timeout, 2FA, two-step]
order: 14
---

Vault Timeout behavior will determine how your Vault will behave after a customizable period of inactivity. Timeout is configured individually from and for each Bitwarden client application that you use (Mobile, Web, Desktop, Browser Extension, etc.).

{% callout warning %}
Regardless of Vault Timeout settings, **closing the Browser or Browser Tab will end your Web Vault or Browser Extension session**, meaning you'll be required to log in to access your Vault.

If you're using a Browser Extension, you can bypass this by enabling the **Unlock with PIN** option and unchecking the **Lock with master password on browser restart** checkbox.
{% endcallout %}

## Options

You can configure the following options from the **Settings** menu of any Bitwarden client application:

### Vault Timeout (time-constraint)

Configuring this option will dictate how long Bitwarden can be inactive before timing-out. "Inactivity" is determined by the time since interacting with Bitwarden, not system idle time.

Each client application will have unique options (e.g. On System Idle, or On App Restart), however all applications include standard time-based options (e.g. 1 minute, 15 minutes, 1 hour).

### Vault Timeout Action

Configuring this option will dictate what Bitwarden will do once the Vault Timeout time-constraint has lapsed. Bitwarden can either:

- **Lock** (*default*).

  Locking your Vault will maintain Vault data on the device. You will only be prompted to enter your Master Password to decrypt your Vault, however no [Two-step Login]({% link _articles/two-step-login/setup-two-step-login.md %}) method will be required to unlock your Vault.

  Bitwarden client applications don't need to be online to unlock.

{% callout warning %}
Due to the storage and reference of your decryption keys within the Web Vault, using the Browser refresh button on the Web Vault will cause it to lock.
{% endcallout %}

- **Log Out**.

  Logging Out of your Vault completely removes all Vault data from your device, and will therefore require you to re-authenticate to access your Vault. You will be required to enter your Email Address, Master Password, and any enabled [Two-step Login]({% link _articles/two-step-login/setup-two-step-login.md %}) method in order to access your Vault.

  Bitwarden client applications must be online to log in.
