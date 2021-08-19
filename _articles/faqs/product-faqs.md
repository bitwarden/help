---
layout: article
title: General FAQs
categories: [account-management]
featured: true
popular: true
hidden: false
tags: []
order: 16
redirect_from:
  - /article/change-your-email/
---

This article contains Frequently Asked Questions (FAQs) about general Vault Management and Bitwarden functionality.

## Most Asked Questions

### Q: What do I do if I forgot my Master Password?

**A:** As a zero knowledge solution, Bitwarden and its systems have no knowledge of, way to retrieve, or way to reset your Master Password. If you've already lost your Master Password, there is unfortunately no way for the team to recover the account. For help understanding what to do next, or what to do proactively to protect yourself from such a scenario, refer to the article on [Your Master Password]({% link _articles/account/master-password.md %}).

### Q: Is there a way for someone to access my Vault items in case of emergency?

**A:** There is! Users with a Premium subscription can proactively setup trusted emergency contacts who can access your Vault in case of emergency. For more information, see [Emergency Access]({% link _articles/security/emergency-access.md %}).

### Q: How do I change my Master Password hint?

**A:** To change your Master Password hint:

1. Open the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Settings** from the top navigation bar.
2. On the **My Account** page, find the **Master Password Hint** input box.
3. Enter a hint and select the **Save** button.

### Q: How do I change my email address?

**A:** To change the email address attached to your account:

1. Open the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Settings** from the top navigation bar.
2. On the **My Account** page, find the **Change Email** section.
3. Enter your current **Master Password** to prove you have the authority to take this action, and specify the **New Email** you'd like to change to.
4. Select the **Change Email** button.

   Bitwarden will email a verification code to the specified email address. Check your inbox for the code and enter it into the **Code** text input displayed in your Web Vault to finalize the change. If you don't receive the verification code, check your Spam folder. You can also whitelist `no-reply@bitwarden.com` to help ensure delivery in the future.

   {% callout success %}**If you have a paid subscription,** also [Contact Us](https://bitwarden.com/contact){:target="\_blank"} to let us know about the change so that we change your billing information.{% endcallout %}

When you change your email address, you should immediately logout of all Bitwarden client applications you use, and log back in with the new credentials. Sessions using a "stale" email address will eventually be logged out eventually.

### Q: Why is a Vault item missing from my Mobile App, Desktop App, or Browser Extension?

**A:** Typically, this is because client application's Vault data has fallen behind a Web Vault or other client application's. Performing a Vault Sync should bring everything up to date. For more information, see [Sync Your Vault]({% link _articles/miscellaneous/vault-sync.md %}).

### Q: What's the safest way to make a backup of my Vault data?

**A:** You can use [Encrypted Exports]({% link _articles/importing/encrypted-export.md %}) to make secure long-term backups of your Vault data that are encrypted with your [Account Encryption Key]({% link _articles/account/account-encryption-key.md %}).

Alternatively, you can use something like PeaZip to create an encrypted archive of the file after exporting a plaintext file from Bitwarden.

You can learn more about PeaZip here:
- <http://www.peazip.org/>
- <https://github.com/giorgiotani/PeaZip >

{% callout warning %}
**Disclaimer**: PeaZip is a third-party program and is not supported by Bitwarden. These links were shared with you as an alternative for use at your own risk.
{% endcallout %}

### Q: Can I set Bitwarden to automatically start when my computer starts?

**A:** You can  set the Bitwarden Desktop App to automatically open on startup

1. Select the Start (Windows Logo) button, select All apps, and scroll to find the Bitwarden Desktop app/shortcut.
2. Right-click the Bitwarden Desktop app, select More, and then select Open file location.
3. With the file location open, press the Windows logo key + R, type shell:startup, then select OK. This opens the Startup folder.
4. Copy and paste the shortcut to the Bitwarden Desktop app from the file location to the Startup folder.

### Q: Why am I getting a ‘New Device’ email?

**A:** Typically this occurs for users that have a setting on their browser which clears their local storage and/or cookies whenever they close the browser or while they are using the browser. There are extensions that perform these actions. If this happens, you lose the indicator which tells our servers that it is an existing device. New device notification messages are not contingent on the IP address, only the device itself. We use local storage in the browser or client to label the device with an id. If that id has never logged in before then you will get an email. If a user clears this local storage, a new id is generated for that device and it will get a new email.

You may need to make an exception for Bitwarden or configure your whitelist to keep the cookie or local storage from being cleared for Bitwarden. This could also happen if you have your browser set to never remember history.

## Other Questions

### Q: Can I install Bitwarden without Google Play, for instance on F-Droid?

**A:** Yes! You can download directly from GitHub <https://github.com/bitwarden/mobile/releases> or via F-Droid by adding our repo <https://mobileapp.bitwarden.com/fdroid/>, which removes all non-approved libraries.

Unfortunately, F-Droid can not compile our app from source as it is based on Xamarin and it is not supported by F-Droid's current compiler methods, so we must use a separate repo.

### Q: I need an old password! Can I view the history of a password that I changed in Bitwarden?

**A:** Yes! You can view the last 5 passwords for any Login Item. Open the item in question and select the "1" next to Password History near the bottom of the window.

{% callout warning %}
Clicking on the number will expose the historical password values in plain text immediately.
{% endcallout %}

### Q: I forgot to save a generated password! Can I view the history of generated passwords?

**A:** Yes, you can view the history of the Password Generator from that client application's generator screen. **Please note** this history is separate per app/client and is not synchronized between devices.

### Q: What happens when I purge my Vault?

**A:** When you purge a **Personal Vault**, all Vault items and Folders will be deleted. When you purge an **Organization Vault**, all shared (i.e. owned by the Organization) Vault items will be deleted however existing users, Collections, and Groups will remain in place.

### Q: Can I print my Vault data?

**A:** Not directly from Bitwarden, however you can [export your Vault data]({{site.baseurl}}/article/export-your-data/) as a `.csv` or `.json` file and print it out from your text editor.
