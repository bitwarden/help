---
layout: article
title: Set up two-step login with an authenticator app
categories: [account-management]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, google authenticator, authy, totp]
---

Bitwarden supports two-step login by using a third-party authenticator app such as [Authy](https://authy.com/){:target="_blank"}, [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en){:target="_blank"}, or [FreeOTP](https://freeotp.github.io/){:target="_blank"}.

## Enable Two-step Login with Authenticator App

{% warning %}
Two-step login can permanently lock you out of your account. It is very important that you write down and keep your [two-step login recovery code]({% link _articles/account/lost-two-step-device.md %}) in a safe place in the event that you lose access to your authenticator app.
{% endwarning %}

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Settings** in the top navigation bar, then click **Two-step Login** from the side menu.
3. Select the **Manage** button for the **Authenticator** option and then type in your master password to continue.
4. Follow the steps that appear
   - Download an authenticator app (usually on your mobile device). We recommend [Authy](https://authy.com/){:target="_blank"}.
   - Scan the QR code with the app.
   - Enter the verification code from the app.
5. Click the **Enable** button. A green alert will appear at the top stating that two-step login has been enabled.
6. Click the **Close** button and confirm that the **Authenticator** option now shows as **Enabled**.

## Test

1. **IMPORTANT:** Ensure that you have copied down your [two-step login recovery code]({% link _articles/account/lost-two-step-device.md %}) in case something goes wrong.
2. Log out of the Bitwarden web vault.
3. Log back into the Bitwarden web vault. You should now be prompted with an authenticator two-step login option.
4. Authenticator protection works with all Bitwarden applications (web, mobile, desktop, browser). Log out of and back in to any other Bitwarden applications that you are using to confirm that two-step login via authenticator app is properly working. You will eventually be logged out automatically.
