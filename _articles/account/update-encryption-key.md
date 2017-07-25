---
layout: article
title: Updating an old encryption key
categories: [Account Management]
featured: false
popular: false
hidden: true
tags: [encryption key, account]
---

You may find a notice in your account regarding the need to update your encryption key. Rest assured that this does **NOT** mean that your account has been compromised or is in danger or being compromised. This notice appears on accounts that registered when bitwarden was using an older encryption scheme.

bitwarden has moved to a new encryption key implementation that requires a new key to be generated. This new encryption key allows the use of new features in bitwarden. Normally we are able to handle these type of updates automatically, however, since bitwarden has no knowledge of your encryption key you must initiate this update yourself.

Updating your encryption key is simple:

1. Log into the web vault at <https://vault.bitwarden.com>
2. If your encryption key needs to be updated you will find a notice at the top of the page that states so. Click this notification.
3. A page will pop up that explains why you need to update your encryption key. Enter your master password to verify and your encryption key will be updated. Additionally, all of your data be re-encrypted with this new key.
4. **VERY IMPORTANT:** Log out of and back in to **ALL** bitwarden applications that you are using. This will download your new encryption key. Failure to complete this last step may result in data corruption in your vault.
