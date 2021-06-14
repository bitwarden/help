---
layout: article
title: Account Encryption Key
categories: [security]
featured: false
popular: false
tags: [encryption key, account]
order: 04
redirect_from:
  - /article/update-encryption-key/
---

Each unique Bitwarden account has an encryption key derived from your Master Password, according to the methods defined in [Encryption]({% link _articles/security/what-encryption-is-used.md %}). This encryption key is used to encrypt all Vault data.

## Rotate your Encryption Key

{% callout warning %}
**Rotating your encryption key is a potentially dangerous operation.** Please read this section thoroughly to understand the full ramifications of doing so.
{% endcallout %}

Rotating your account’s encryption key generates a new encryption key that is used to re-encrypt all Vault data. You should consider rotating your encryption key if your account has been compromised such in a way that someone has obtained your encryption key.


After rotating, you should quickly take the following actions to prevent data loss or corruption:

#### Log out of Client Applications

When you rotate an encryption key, you **must immediately** log out of any logged-in sessions on Bitwarden client applications (Desktop App, Browser Extension, Mobile App, etc). Logging out of client applications in this way will shut down sessions using the "stale" (prior-to-rotation) encryption key. After doing so, logging back in as normal will use the new encryption key.

**Making changes in a session with a "stale" encryption key will cause data corruption that will make your data unrecoverable.**

#### Re-create any Encrypted Exports

If you're using [Encrypted Exports]({% link _articles/importing/encrypted-export.md %}) to store long-term secure backups, you should immediately re-create the encrypted export of your Vault data using the new encryption key.

Encrypted Exports use your encryption key to encrypt **and decrypt** your Vault data, meaning that a rotated encryption key will not be able to decrypt an export created with the "stale" (prior-to-rotation) key.

### How to Rotate your Encryption Key

Complete the following steps to rotate your account encryption key:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. On the **My Account** page, locate the **Change Master Password** section.
4. Enter your **Current Master Password** and create/confirm a **New Master Password**.

   {% callout success %}If you don't want to change your Master Password and only rotate your account encryption key, you can enter your current master password in the **New** fields to prevent it from changing.{% endcallout %}
5. Check the **Also rotate my account's encryption key** checkbox and accept the dialog.
6. Select the **Change Master Password** button.
