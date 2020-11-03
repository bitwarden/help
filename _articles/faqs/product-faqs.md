---
layout: article
title: Feature FAQs
categories: [faqs, features]
featured: true
popular: true
hidden: false
tags: []
---
## Table of contents

- [**Q: How do I change a collection via the CLI?**](#q-how-do-i-change-a-collection-via-the-cli)
- [**Q: Can I install Bitwarden without Google Play?**](#q-can-i-install-bitwarden-without-google-play)
- [**Q: How do I enable Autofill in Android?**](#q-how-do-i-enable-autofill-in-android)
- [**Q: How do I view attachments?**](#q-how-do-i-view-attachments)
- [**Q: What events are audited in my organization?**](#q-what-events-are-audited-in-my-organization)
- [**Q: Can Bitwarden restore my individual vault?**](#q-can-bitwarden-restore-my-individual-vault)
- [**Q: How do I backup my self-hosted server?**](#q-how-do-i-backup-my-self-hosted-server)
- [**Q: I have invited a user to my organization but they cannot see shared items**](#q-i-have-invited-a-user-to-my-organization-but-they-cannot-see-shared-items)
- [**Q: My organization owner is no longer with the company, how can a new owner be created?**](#q-my-organization-owner-is-no-longer-with-the-company-how-can-a-new-owner-be-created)
- [**Q: How do I configure custom fields?**](#q-how-do-i-configure-custom-fields)
- [**Q: How do I import my data if I don’t see my service on the import options?**](#q-how-do-i-import-my-data-if-i-dont-see-my-service-on-the-import-options)
- [**Q: How do I delete an item?**](#q-how-do-i-delete-an-item)
- [**Q: Can I use Directory connector to sign into Bitwarden?**](#q-can-i-use-directory-connector-to-sign-into-bitwarden)
- [**Q: How can I disable Firefox Autofill?**](#q-how-can-i-disable-firefox-autofill)
- [**Q: Does Bitwarden have a way for me to let someone into my account if I am unable to log in?**](#q-does-bitwarden-have-a-way-for-me-to-let-someone-into-my-account-if-i-am-unable-to-log-in)
- [**Q: How can I enable Auto-fill On Page Load?**](#q-how-can-i-enable-auto-fill-on-page-load)
- [**Q: Does Bitwarden have an Encrypted Export File?**](#q-does-bitwarden-have-an-encrypted-export-file)
- [**Q: Can I download Bitwarden on F-Droid? I cannot find it.**](#q-can-i-download-bitwarden-on-f-droid-i-cannot-find-it)
- [**Q: How do I rename a folder?**](#q-how-do-i-rename-a-folder)
- [**Q: I have forgotten my master password, what can I do?**](#q-i-have-forgotten-my-master-password-what-can-i-do)
- [**Q: How do I hide passwords from users?**](#q-how-do-i-hide-passwords-from-users)
- [**Q: How can I see the history of a password that has been changed?**](#q-how-can-i-see-the-history-of-a-password-that-has-been-changed)
- [**Q: Can I see the history of the passwords I have generated?**](#q-can-i-see-the-history-of-the-passwords-i-have-generated)
- [**Q: Can I export/import from iCloud/Mac Keychain?**](#q-can-i-exportimport-from-icloudmac-keychain)
- [**Q: How do I enable iOS AutoFill?**](#q-how-do-i-enable-ios-autofill)
- [**Q: Why does something I shared with the organization stay after I leave?**](#q-why-does-something-i-shared-with-the-organization-stay-after-i-leave)
- [**Q: Why am I getting a ‘New Device’ Email Message?**](#q-why-am-i-getting-a-new-device-email-message)
- [**Q: Can I use SMS 2FA?**](#q-can-i-use-sms-2fa)
- [**Q: How do I install the Safari Extension?**](#q-how-do-i-install-the-safari-extension)
- [**Q: How do I share items with Organization ?**](#q-how-do-i-share-items-with-organization-)
- [**Q: How can I start Bitwarden when Windows starts?**](#q-how-can-i-start-bitwarden-when-windows-starts)
- [**Q: How do I perform a sync on my application?**](#q-how-do-i-perform-a-sync-on-my-application)
- [**Q: What is TOTP and how can I use it?**](#q-what-is-totp-and-how-can-i-use-it)
- [**Q: Why are my TOTP codes incorrect/not working?**](#q-why-are-my-totp-codes-incorrectnot-working)
- [**Q: Why is U2F Not Supported on my iOS or Android App?**](#q-why-is-u2f-not-supported-on-my-ios-or-android-app)
- [**Q: How do I unshare an item?**](#q-how-do-i-unshare-an-item)
- [**Q: How do I use the web browser extension?**](#q-how-do-i-use-the-web-browser-extension)
- [**Q: How do I add attachments?**](#q-how-do-i-add-attachments)
- [**Q: I am asked for my master password even though I have PIN unlock enabled on iOS / Android**](#q-i-am-asked-for-my-master-password-even-though-i-have-pin-unlock-enabled-on-ios--android)
- [**Q: How can I import items directly into collections?**](#q-how-can-i-import-items-directly-to-collections)

### **Q: How do I change a collection via the CLI?**

**A:** In order to change a Collection, you will use a dedicated command (bw edit item-collections).    

For example:
```
$ echo '["a17a5b7f-66b8-4980-91a1-aaac005df696"]' | bw encode | bw edit item-collections ee9f9dc2-ec29-4b7f-9afb-aac8010631a1
```
You can add multiple Collection IDs at the same time by using a comma to separate them.

### **Q: Can I install Bitwarden without Google Play?**   

**A:** Yes! You can download directly from GitHub <https://github.com/bitwarden/mobile/releases> or via F-Droid by adding our repo <https://mobileapp.bitwarden.com/fdroid/>

### **Q: How do I enable Autofill in Android?**

**A:** There are two services that need to be enabled on Android to cover all Auto-fill scenarios, AUTO-FILL SERVICE and AUTO-FILL ACCESSIBILITY SERVICE. These services can be enabled from within the Bitwarden App under Settings.

When configured, you should see "Enabled" in green text. Double-check under the AUTO-FILL ACCESSIBILITY SERVICE that the Permission shows "Granted" in green text as well.     https://help.bitwarden.com/article/auto-fill-android/      

One last thing you will want to check is the battery optimization settings on your phone and make sure it is turned off for Bitwarden. Often, Android Battery Optimization will turn off services to save battery and in turn kill the auto-fill services.

### **Q: How do I view attachments?**

**A:** If you are using the mobile app then you will select an item to view it and then select the "3 dots" menu at the top right of the app window to download and view the attachment.

**A:** Here you can see the ways to attach a file in all other clients: <https://help.bitwarden.com/article/attachments/>

### **Q: What events are audited in my organization?**

**A:** You can check to see what events are captured in this article: <https://bitwarden.com/help/article/event-logs/>

### **Q: Can Bitwarden restore my individual vault?**

Bitwarden is unable to restore user vaults. We recommend everyone make regular backups (via export) of their vault data. You can learn more about backing up your vault here:
<https://bitwarden.com/help/article/export-your-data/>

### **Q: How do I backup my self-hosted server?**

**A:** Please see this helpful article regarding backup procedures for your self-hosted server: <https://help.bitwarden.com/article/backup-on-premise/>

### **Q: I have invited a user to my organization but they cannot see shared items**

**A:** Once a user has accepted the invitation, an Organization Owner or Admin will need to go to the People management page and "Confirm" the user. This is a very important step as it completes the public-key exchange allowing for the sharing of encrypted information.

### **Q: My organization owner is no longer with the company, how can a new owner be created?**

**A:** We recommend having multiple and dedicated owner accounts to prevent this situation, however, if you need assistance with this, please contact customer success here: <https://bitwarden.com/contact>

### **Q: How do I configure custom fields?**

**A:** Here is an example of how to configure a Custom Field:

1. Right-click the field you want to fill and select "Inspect". The HTML element will appear highlighted in a console window.
2. Find the element id. You are looking for what comes after id=" ". Copy what is in between the " ". It needs to be exactly the same.
3. Open the website, login into your vault, and edit it.
4. Select "Hidden" and then press the blue "+" icon
5. In the "Name" field paste the element ID
6. In the "Value" field enter your info you want auto-filled.
7. Save.
Now when you auto-fill, the additional field should be there. Please see this help article for more information:  <https://help.bitwarden.com/article/custom-fields/>

### **Q: How do I import my data if I don’t see my service on the import options?**

**A:** If we do not have support for the service you are using, then you will have the option of creating a generic CSV to fit our format. We have detailed info on this format and a template file you can use located here, <https://help.bitwarden.com/article/import-data/#generic-csv-format-individual-account>.

You can also generate a dummy JSON export file from Bitwarden to use as a template if you prefer working with JSON.

### **Q: How do I delete an item?**

**A:** In order to delete an item, you will first need to edit the item and then go to the bottom of the edit page. You can then select Delete. Once deleted, the item will be in the trash. In order to permanently delete, you will need to remove it from the trash.

To learn more about managing items, check out this article: <https://bitwarden.com/help/article/managing-items/>

### **Q: Can I use Directory connector to sign into Bitwarden?**

**A:** The Directory Connector tool provides the functions to automatically provision and deprovision users, groups, and group associations from your user directory (LDAP, Active Directory, G Suite, Azure AD, or Okta).

To use an existing identity provider for authentication, you’ll need to subscribe to our enterprise plan and configure it.

### **Q: How can I disable Firefox Autofill?**

You will want to check the settings of the browser. First, you will select the Options Menu in the top right corner of the window. It is the 3 line icon or "hamburger button" as some people call it. Then select Logins and Passwords. A small window will open and you will uncheck the box for Autofill logins and passwords. Then you can close the small Logins windows and go back to the Options Menu and select Options. Now find the section in my image provided and uncheck those boxes.

### **Q: Does Bitwarden have a way for me to let someone into my account if I am unable to log in?**

**A:** This is what we call Emergency Access feature, and it is one of our most requested according to our community. We have added this feature to our product road map and intend to bring it into the platform soon.

### **Q: How can I enable Auto-fill On Page Load?**

**A:** In order to perform an autofill when a website or page loads, you will want to go to Settings > Options and select  "Enable Auto-fill On Page Load".

If you do not want to enable autofill when a page loads and still want the ability to autofill easily and quickly then you may want to try using the keyboard shortcuts or one of the other autofill methods shown here:  <https://help.bitwarden.com/article/auto-fill-browser/>

### **Q: Does Bitwarden have an Encrypted Export File?**

**A:** Currently Bitwarden doesn’t have a native encrypted export, but it is on our roadmap for 2020.

Alternatively, we recommend using something like PeaZip to create an encrypted archive of the file after you have exported your data from Bitwarden.

You can learn more about PeaZip here:  
- <http://www.peazip.org/>  
- <https://github.com/giorgiotani/PeaZip >  

{%warning%}
Disclaimer: Please note that PeaZip is a third party program and is not supported by Bitwarden. These links were shared with you as an option for you to use at your own risk.
{%endwarning%}

### **Q: Can I download Bitwarden on F-Droid? I cannot find it.**

**A:** Yes, by adding our official private repo which removes all non-approved libraries: ​<https://mobileapp.bitwarden.com/fdroid/>

Unfortunately,  F-Droid can not compile our app from source as it is based on Xamarin and it is not supported by F-Droid's current compiler methods, so we must use a separate repo.

### **Q: How do I rename a folder?**

**A:** From your Web Vault, in the left-hand column labeled "Filters", find the folder you would like to change and select it. Once the folder is open you will see a "Pencil" icon next to the name that you just selected. Click that icon and a pop-up will appear allowing you to edit the name.

### **Q: I have forgotten my master password, what can I do?**

**A:** Please see our article here:
<https://bitwarden.com/help/article/forgot-master-password/>

### **Q: How do I hide passwords from users?**

**A:** You can enable the hiding of passwords by enabling “hide passwords” on the collection assignment page.

You can learn more about access control here: <https://bitwarden.com/help/article/user-types-access-control>

### **Q: How can I see the history of a password that has been changed?**

The ability to view the password history of a Login Item is available. You can open the item in question and select the "1" next to Password History near the bottom of the window.

{%warning%}
Clicking on the number will expose the historical password values in plain text immediately.
{%endwarning%}

### **Q: Can I see the history of the passwords I have generated?**

**A:** You can view the history of the Password Generator but please note that is a separate history per app/client. This information is not synchronized between devices.

### **Q: Can I export/import from iCloud/Mac Keychain?**

**A:** There isn't an official way to export the data from iCloud, Mac Keychain or Safari as Apple doesn't provide this ability.

Here are some third-party programs available to export this data:
- <https://gist.github.com/rmondello/b933231b1fcc83a7db0b>  
- <https://github.com/lifepillar/CSVKeychain>

{%warning%}
Please note that these 3rd party scripts/programs are unsupported by Bitwarden and Apple and are used at your own risk.
{%endwarning%}

Once you have exported your data, here is a helpful article for importing your data from the two mentioned programs:  <https://help.bitwarden.com/article/import-data/>

### **Q: How do I enable iOS AutoFill?**

**A:** Make sure Bitwarden is set to your AutoFill app by going to your iOS Settings > Passwords & Accounts > AutoFill Passwords > Bitwarden​.

While testing Bitwarden, it is best to only have Bitwarden enabled to avoid any conflicts. You can always set the Keychain or any other app back as an active option at any time if you choose to do so. Once you have that set, you can go to an app or site to log in and when you select the username or password field, the keyboard will display and the Passwords option will be selectable at the top of the keyboard.  ​  

You can see more about Bitwarden for iOS here: <https://bitwarden.com/help/article/getting-started-ios/>

### **Q: Why does something I shared with the organization stay after I leave?**  

**A:** When a user shares an item with an Organization, the Organization takes over ownership of the item. Even if the user account has its association with the Organization removed or if the user account is deleted, the item will remain with the Organization.

### **Q: Why am I getting a ‘New Device’ Email Message?**

**A:** Typically this occurs for users that have a setting on their browser which clears their local storage and/or cookies whenever they close the browser or while they are using the browser. There are extensions that perform these actions. If this happens, you lose the indicator which tells our servers that it is an existing device. New device notification messages are not contingent on the IP address, only the device itself. We use local storage in the browser or client to label the device with an id. If that id has never logged in before then you will get an email. If a user clears this local storage, a new id is generated for that device and it will get a new email.

You may need to make an exception for Bitwarden or configure your whitelist to keep the cookie or local storage from being cleared for Bitwarden. This could also happen if you have your browser set to never remember history.

### **Q: Can I use SMS 2FA?**

**A:** We do not support SMS 2FA due to vulnerabilities including SIM hijacking. We also do not recommend SMS 2FA for other accounts unless it is the only available method, as any second factor is recommended over having none.

**Q Do I need premium and families?**

**A:** The legacy Families plan only provided one user premium features, and the other 4 users would need to upgrade to premium individually, or the family organization owner could upgrade them all.

Currently, the Families plan introduced in September 2020, supports premium features for up to 6 users.

### **Q: How do I install the Safari Extension?**

**A:** The new Safari extension is now packaged with the Bitwarden Desktop App. You can download the latest app here:  https://vault.bitwarden.com/download/?app=desktop&platform=macos. You can also use the App Store version.

Be sure to run the application once. If the extension still does not appear, it may just need to be enabled. In Safari, check under Preferences > Extensions

### **Q: How do I share items with Organization	?**

**A:** You will want to log into the Web Vault (<https://vault.bitwarden.com>) and select the small gear menu that appears to the right of an item when mouse over it and select share.

​After an item is shared, if you want to adjust the Collections the item is shared with then use the same menu and select Collections.

You can bulk share items by checking the box next to multiple items and then selecting the gear menu at the top next to My Vault and then select Share.

### **Q: How can I start Bitwarden when Windows starts?**

In order to set Bitwarden Desktop to startup, please follow these steps:
1. Select the Start (Windows Logo) button, select All apps, and scroll to find the Bitwarden Desktop app/shortcut.  
2. Right-click the Bitwarden Desktop app, select More, and then select Open file location.  
3. With the file location open, press the Windows logo key + R, type shell:startup, then select OK. This opens the Startup folder.  
4. Copy and paste the shortcut to the Bitwarden Desktop app from the file location to the Startup folder.

### **Q: How do I perform a sync on my application?**

**A:** You can find more on vault syncing here: <https://bitwarden.com/help/article/vault-sync/>.

### **Q: What is TOTP and how can I use it?**

**A:** Time-based One-time Password (TOTP) - <https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm>

Each website that supports TOTP or 2FA with an "Authenticator" calls it differently and each handles the procedure of setting up a little differently. You will need to start the set up from each individual web site that you are accessing. (e.g. google.com, amazon.com).      

​1. You will want to edit any item that you wish to use TOTP with.  
2. Populate the "Authenticator Key (TOTP)" field with the seed key you are provided with.  *You can also use the Bitwarden mobile application to directly scan QR codes and it will populate automatically.  
3. Save the changes.

Now, Bitwarden will store and generate the timed code that you will be asked for when logging into services with TOTP 2FA enabled. Here is a handy website that you can use to test this feature: <https://totp.danhersam.com/>

Whenever you auto-fill a website that has TOTP attached, the code will automatically be copied to your device's system clipboard. Now you can quickly paste the code into the field when challenged.

### **Q: Why are my TOTP codes incorrect/not working?**

**A:** TOTP codes are ***time based*** and use device time for generation. A device with the wrong time will generate incorrect codes. Please check your device's system time and try your TOTP code again.

### **Q: Why is U2F Not Supported on my iOS or Android App?**

**A:** At this time, due to platform/OS limitations, FIDO U2F cannot be used with all Bitwarden applications. You should enable another two-step login provider so that you can access your account when FIDO U2F cannot be used. We are expanding our U2F capabilities

### **Q: How do I unshare an item?**

**A:** At this time there isn't an "unshare" option. You will need to manually create or clone the item back into your personal vault and then delete the item from the Organization. You can also use an export/import method if you ever need to move multiple items back to a personal vault.

Alternatively if you want to 'unshare' it just from non-admin users, you can create a collection for admin-owned items and assign the item to *only* that collection.

### **Q: How do I use the web browser extension?**   

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

### **Q: How do I add attachments?**

**A:** Support for attachments require:

- A premium individual membership
- An organization that offers attachments in the organization vault
- Being a member of an enterprise organization that gives premium features to its users

If you have a personal premium membership or are a member of an enterprise organization and receive premium features, you can add attachments by:

1. Create the item in which you wish to save the attachment
2. Once the item is saved, you can then edit the item and add your file attachments

If you are a member of an organization that offers attachments, you’ll need to create the item *within the organization vault* - and then proceed to edit the item and add the attachment. Please note that personal items within this configuration will not support attachments.

### **Q: I am asked for my master password even though I have PIN unlock enabled on iOS / Android**

**A:** When you enable PIN unlock, you are prompted if you’d like to use your Master Password after an application restarted (closed). If you select yes, if the app is closed or backgrounded, the PIN will be prompted.

To reset this:
- Disable PIN Unlock
- Enable PIN Unlock
- Select ‘No’ when prompted about using the Master Password after application restart.

### Q: How can I import items directly to collections?

**A:** To import items directly to collections, you'll want to format your import into a Bitwarden CSV and provide the collection names you'd like to import to. You can read more about the Bitwarden CSV import here: https://bitwarden.com/help/article/import-data/#generic-csv-format-organization-account

{%note%}
Each import will create new records. To prevent duplicates while organizing your data, you will want to use the `Purge Vault` option to clear any existing data before importing it again. The option can be found by logging into the Web Vault (https://vault.bitwarden.com/) and going to Settings > Organizations > {YOUR ORG NAME} > Settings sub-tab (Gears Icon) > My Organization > Danger Zone > Purge Vault.
{%endnote%}
