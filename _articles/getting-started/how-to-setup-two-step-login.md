---
layout: article
title: How to set up two-step login (2FA)
categories: [Getting Started]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account]
---

Two-step login (or two-factor authentication) can only be configured from the [web vault](https://vault.bitwarden.com).

1. Log in to the [web vault](https://vault.bitwarden.com) at https://vault.bitwarden.com
2. Click **Settings** on the sidebar 
3. Click **Manage Two-step Log in** under the **Two-step Log In** panel  
4. Type in your current password and click **Continue**
5. Follow the steps that appear
   - Download a two-step verification app (usually on your mobile device). We recommend [Authy](https://authy.com/).
   - Scan the QR code with the verification app.
   - Enter the verification code from the app.
6. Click **Enable Two-step**. Note:
   - A green alert will appear at the top stating that two-step login has been enabled; and
   - **Very Important**: An orange alert will appear at the bottom with a recovery code
7. Print or write down the recovery code and store in a safe place. This code is **REQUIRED** to restore your account in the event that you lose access to your verification app (ex. your phone is lost). If you lose access to your verification app and do not have your recovery code, bitwarden support will not be able to assist you in recovering your account. The only option will be to delete your account and start over.
8. Click **Close** and then **Log Out**
9. Log in to confirm that two-step verification is enabled and working
10. Log out of and back in to any other bitwarden applications that you are using. You will eventually be logged out automatically.
