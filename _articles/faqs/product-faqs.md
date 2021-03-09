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

**A:** As a Zero Trust solution, Bitwarden and its systems have no knowledge of, way to retrieve, or way to reset your Master Password. If you've already lost your Master Password, there is unfortunately no way for the team to recover the account. For help understanding what to do next, or what to do proactively to protect yourself from such a scenario, refer to the article on [Your Master Password]({% link _articles/account/master-password.md %}).

### Q: Is there a way for someone to access my Vault items in case of emergency?

**A:** There is! Users with a Premium subscription can proactively setup trusted emergency contacts who can access your Vault in case of emergency. For more information, see [Emergency Access]({% link _articles/security/emergency-access.md %}).

### Q: How do I change my email address?

**A:** You can change the email address attached to your account from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}:

1. In the Web Vault, select **Settings** from the top navigation bar.
2. On the **My Account** page, find the **Change Email** section.
3. Enter your current **Master Password** to prove you have the authority to take this action, and specify the **New Email** you'd like to change to.
4. Select the **Change Email** button.

   Bitwarden will email a verification code to the specified email address. Check your inbox for the code and enter it into the **Code** text input displayed in your Web Vault to finalize the change.

   {% callout success %}If you don't receive the verification code from Bitwarden, check your Spam folder. You can also whitelist `no-reply@bitwarden.com` to help ensure delivery in the future.{% endcallout %}

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

### Q: How do I change a collection via the CLI?

**A:** In order to change a Collection, you will use a dedicated command (bw edit item-collections).

For example:
```
$ echo '["a17a5b7f-66b8-4980-91a1-aaac005df696"]' | bw encode | bw edit item-collections ee9f9dc2-ec29-4b7f-9afb-aac8010631a1
```
You can add multiple Collection IDs at the same time by using a comma to separate them.

### Q: Can I install Bitwarden without Google Play?

**A:** Yes! You can download directly from GitHub <https://github.com/bitwarden/mobile/releases> or via F-Droid by adding our repo <https://mobileapp.bitwarden.com/fdroid/>

### Q: How do I enable Autofill in Android?

**A:** There are two services that need to be enabled on Android to cover all Auto-fill scenarios, AUTO-FILL SERVICE and AUTO-FILL ACCESSIBILITY SERVICE. These services can be enabled from within the Bitwarden App under Settings.

When configured, you should see "Enabled" in green text. Double-check under the AUTO-FILL ACCESSIBILITY SERVICE that the Permission shows "Granted" in green text as well.     https://help.bitwarden.com/article/auto-fill-android/

One last thing you will want to check is the battery optimization settings on your phone and make sure it is turned off for Bitwarden. Often, Android Battery Optimization will turn off services to save battery and in turn kill the auto-fill services.

### Q: Can I use Directory connector to sign into Bitwarden?

**A:** The Directory Connector tool provides the functions to automatically provision and deprovision users, groups, and group associations from your user directory (LDAP, Active Directory, G Suite, Azure AD, or Okta).

To use an existing identity provider for authentication, you’ll need to subscribe to our enterprise plan and configure it.

### Q: How can I disable Firefox Autofill?

1. Navigate to `about:preferences#privacy` in Firefox.
2. Scroll down and uncheck **Autofill logins and passwords**.

**On Android**
1. Open Firefox
2. Tap on the three dot menu.
3. Tap on Settings.
4. Locate **Logins and passwords**.
5. Tap on **Autofill** and turn it off.

### Q: How can I disable Google Auto-fill in my Android Device?

1. Open Settings in your Android device.
2. Scroll down and tap on Google.
3. Locate Auto-fill
4. Tap on Auto-fill with Google and turn it off.


### Q: How can I enable Auto-fill On Page Load?

**A:** In order to perform an autofill when a website or page loads, you will want to go to Settings > Options and select  "Enable Auto-fill On Page Load".

If you do not want to enable autofill when a page loads and still want the ability to autofill easily and quickly then you may want to try using the keyboard shortcuts or one of the other autofill methods shown here:  <https://help.bitwarden.com/article/auto-fill-browser/>

### Q: Can I download Bitwarden on F-Droid? I cannot find it.

**A:** Yes, by adding our official private repo which removes all non-approved libraries: ​<https://mobileapp.bitwarden.com/fdroid/>

Unfortunately,  F-Droid can not compile our app from source as it is based on Xamarin and it is not supported by F-Droid's current compiler methods, so we must use a separate repo.

### Q: How can I see the history of a password that has been changed?

The ability to view the password history of a Login Item is available. You can open the item in question and select the "1" next to Password History near the bottom of the window.

{% callout warning %}
Clicking on the number will expose the historical password values in plain text immediately.
{% endcallout %}

### Q: Can I see the history of the passwords I have generated?

**A:** You can view the history of the Password Generator but please note that is a separate history per app/client. This information is not synchronized between devices.

### Q: How do I enable iOS AutoFill?

**A:** Make sure Bitwarden is set to your AutoFill app by going to your iOS Settings > Passwords & Accounts > AutoFill Passwords > Bitwarden​.

While testing Bitwarden, it is best to only have Bitwarden enabled to avoid any conflicts. You can always set the Keychain or any other app back as an active option at any time if you choose to do so. Once you have that set, you can go to an app or site to log in and when you select the username or password field, the keyboard will display and the Passwords option will be selectable at the top of the keyboard.  ​

You can see more about Bitwarden for iOS here: <https://bitwarden.com/help/article/getting-started-ios/>

### Q: Do I need premium and families?

**A:** The legacy Families plan does not include premium for its users. Users would need to upgrade to premium individually, or the family organization owner could upgrade the organization.

Currently, the Families plan introduced in September 2020, supports premium features for up to 6 users.


### Q: What is TOTP and how can I use it?

**A:** Time-based One-time Password (TOTP) - <https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm>

Each website that supports TOTP or 2FA with an "Authenticator" calls it differently and each handles the procedure of setting up a little differently. You will need to start the set up from each individual web site that you are accessing. (e.g. google.com, amazon.com).

1. You will want to edit any item that you wish to use TOTP with.
2. Populate the "Authenticator Key (TOTP)" field with the seed key you are provided with.  *You can also use the Bitwarden mobile application to directly scan QR codes and it will populate automatically.
3. Save the changes.

Now, Bitwarden will store and generate the timed code that you will be asked for when logging into services with TOTP 2FA enabled. Here is a handy website that you can use to test this feature: <https://totp.danhersam.com/>

Whenever you auto-fill a website that has TOTP attached, the code will automatically be copied to your device's system clipboard. Now you can quickly paste the code into the field when challenged.

### Q: Why are my TOTP codes incorrect/not working?

**A:** TOTP codes are ***time based*** and use device time for generation. A device with the wrong time will generate incorrect codes. Please check your device's system time and try your TOTP code again.

### Q: How do I use the web browser extension?

**A:** Using the Bitwarden Web Browser Extension is a good way to add your passwords to your vault. Anytime it detects a password field on a website that it doesn't have in its database, it will ask to save.

For updating, anytime there is a password field detected, when you enter a password if it doesn't detect the same password as what it has in its database then it will ask you to update it. You will see a banner at the top of the web page that will prompt you to save or update.

Please see this helpful article regarding interacting with a web page to fill your Login Item information:
- <https://help.bitwarden.com/article/auto-fill-browser/>

Bitwarden Web Browser Extension video on YouTube:
- <https://youtu.be/dBPfr7Jiddw>

More helpful videos from the Bitwarden Community on YouTube:

- <https://youtu.be/L1BNrVrvWw4>
- <https://youtu.be/TREdS8iq6Qg>
- <https://youtu.be/uF6tzGYaIxg>

### Q: I am asked for my master password even though I have PIN unlock enabled on iOS / Android

**A:** When you enable PIN unlock, you are prompted if you’d like to use your Master Password after an application restarted (closed). If you select yes, if the app is closed or backgrounded, you will be prompted for your Master Password instead of the PIN.

To reset this:
- Disable PIN Unlock
- Enable PIN Unlock
- Select ‘No’ when prompted about using the Master Password after application restart.
