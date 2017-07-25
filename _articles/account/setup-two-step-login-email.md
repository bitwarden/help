---
layout: article
title: Set up two-step login with email
categories: [Account Management]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, email, totp]
---

bitwarden supports two-step login via email. A verification code will be emailed to you during login.

## Enable Two-step Login with Email

{% warning %}
Two-step login can permanently lock you out of your account. It is very important that you write down and keep your [two-step login recovery code]({% link _articles/account/lost-two-step-device.md %}) in a safe place in the event that you lose access to your email.
{% endwarning %}

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Settings** on the sidebar. Click **Two-step Login** in the sub-menu that opens under **Settings**.  
3. Select the **Email** option and then type in your master password to continue.
4. Enter an email address that you would like to use that will receive verification codes during login. You can use the same email address that you use for your bitwarden account or any other email address. Click the **Send Email** button to send a test verification code to that email address.
5. Check your email inbox for the verification code and then enter it into bitwarden for confirmation.
6. Click the **Enable** button. A green alert will appear at the top stating that two-step login has been enabled.
7. Click the **Close** button and confirm that the **Email** option now shows as **Enabled**.

## Test

1. **IMPORTANT:** Ensure that you have copied down your [two-step login recovery code]({% link _articles/account/lost-two-step-device.md %}) in case something goes wrong.
2. Log out of the bitwarden web vault.
3. Log back into the bitwarden web vault. You should now be prompted with an email two-step login option.
4. Email protection works with all bitwarden applications (web, mobile, desktop, browser). Log out of and back in to any other bitwarden applications that you are using to confirm that two-step login via email is properly working. You will eventually be logged out automatically.
