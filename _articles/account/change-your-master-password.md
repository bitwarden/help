---
layout: article
title: Change your master password
categories: [getting-started, account-management]
featured: false
popular: false
tags: [password, account]
---

Your master password can only be changed from the [web vault](https://vault.bitwarden.com).

{% warning %}
Changing your master password will log you out of all Bitwarden applications.
{% endwarning %}

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Settings** in the top navigation bar
3. Locate the **Change Master Password** section under **My Account**
4. Type in your current password, the new password you want, and then re-type to confirm
5. Click the **Change Master Password** button
6. Log back in to confirm that your new password is working
7. Log out and back in any other Bitwarden applications that you are using. You will eventually be logged out automatically.

## Rotating your account's encryption key

During a password change operation you also have the option to rotate (change) your account's encryption key. Rotating the encryption key is a good idea if you believe that your previous master password was compromised or that your Bitwarden vault's data was stolen from one of your devices.

{% warning %}
Rotating your account's encryption key is a sensitive operation, which is why it is not a default option. A key rotation involves generating a new, random encryption key for your account and re-encrypting all vault data using this new key.

Because your account's encryption key changes, any old sessions with a Bitwarden application that you may be logged into with your account will still have the old, incorrect encryption key. If you make any changes to your account's vault data with an old encryption key, that data will become corrupted and unrecoverable. After rotating your account's encryption key it is very important that you completely log out and back in to all Bitwarden applications where you are using that account. Logging out and back in will ensure that your account has downloaded its new encryption key. We will attempt to log you out of all Bitwarden applications automatically, but it may not happen immediately.
{% endwarning %}
