---
layout: article
title: I lost my two-step login (2FA) device
categories: [Account Management]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account]
---

If you have lost access to the device that you use for two-step login (2FA) you can recover your account using your two-step login **recovery code**. The recovery code is a 32 character alpha-numeric code that was given to you when you activated two-step login in the web vault. Visit <https://vault.bitwarden.com/#/recover> to complete the recovery process.

The recovery process will deactivate two-step login on the account so that you can log in without requiring the normal two-step login verification code. You will need to re-enable two-step login in the web vault if you wish to continue using it after recovering the account.

If you do not have your recovery code, unfortunately there is no way to fully recover the account. The only option to gain access to the account again is to have the account deleted by [contacting bitwarden support](https://bitwarden.com/contact) so that you can register again and start over. Note that deleting the account will also delete all of your stored login data associated with the account. If you still have an active login session open in the browser extension you can export your data from **Tools** -> **Export Vault** so that you can import it back in after the account has been deleted and you have registered again.