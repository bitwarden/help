---
layout: article
title: Set up two-step login (2FA)
categories: [Getting Started, Account Management]
featured: false
popular: true
tags: [two-step login, 2fa, two factor authentication, account]
---

Two-step login (or two-factor authentication) greatly increases the security of your account by requiring you to enter (in addition to your master password) a verification code generated from another app each time you log in. We recommend that all users activate and use two-step login with their bitwarden account.

bitwarden supports two-step login by using a third-party authenticator app such as [Authy](https://authy.com/) or [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en). Two-step login can only be configured from the [web vault](https://vault.bitwarden.com).

## Enable Two-step Login

{% warning %}
Two-step login can permanently lock you out of your account. It is very important that you write down and keep your two-step login **recovery code** in a safe place in the event that you lose access to your authenticator app (see below for details).
{% endwarning %}

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Settings** on the sidebar 
3. Click **Manage Two-step Log in** under the **Two-step Log In** panel  
4. Type in your current password and click **Continue**
5. Follow the steps that appear
   - Download a two-step verification app (usually on your mobile device). We recommend [Authy](https://authy.com/){:target="_blank"}.
   - Scan the QR code with the verification app.
   - Enter the verification code from the app.
6. Click **Enable Two-step**. Note:
   - A green alert will appear at the top stating that two-step login has been enabled; and
   - **Very Important**: An orange alert will appear at the bottom with a recovery code. DO NOT IGNORE THIS.
7. Print or write down the recovery code and store it in a safe place. This code is **REQUIRED** to restore your account in the event that you lose access to your verification app (ex. your phone is lost). If you lose access to your verification app and do not have your recovery code, bitwarden support will not be able to assist you in recovering your account. The only option will be to delete your account and start over.
8. Click **Close** and then **Log Out**
9. Log in to confirm that two-step verification is enabled and working
10. Log out of and back in to any other bitwarden applications that you are using. You will eventually be logged out automatically.
