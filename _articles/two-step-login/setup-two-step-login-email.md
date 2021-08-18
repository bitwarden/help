---
layout: article
title: Two-step Login via Email
categories: [two-step-login]
featured: false
popular: false
order: 04
tags: [two-step login, 2fa, two factor authentication, account, email]
---

Two-step Login using email is available for free to all Bitwarden users.

## Setup Email Verification

Complete the following steps to enable Two-step Login using email:

{% callout warning %}
**Losing access to your Two-step Login linked email can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place or have an alternate Two-step Login method enabled and available.

[Get your Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}) from the **Two-step Login** screen immediately after enabling any method.
{% endcallout %}

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. Select **Two-step Login** from the left-side menu.
4. Locate the **Email** option and select the **Manage** button:

   {% image two-step/twostep-options-emailoverlay.png Select the Manage button %}
   You will be prompted to enter your Master Password to continue.
5. Enter the email that you wish you receive verification codes and click the **Send Email** button.
6. Check your inbox for the 6 digit verification code. Enter the code in the dialog box in your Web Vault and select the **Enable** button.

   A green `Enabled` message will indicate that Two-step Login via Email has been enabled.
7. Select the **Close** button and confirm that the **Email** option is enabled, as indicated by a green checkbox ( {% icon fa-check %} ).

{% callout info %}
When you setup Two-step Login, you should logout of all your Bitwarden apps to immediately activate Two-step Login for each app. You will eventually be logged out automatically.
{% endcallout %}

## Use Email Verification

The following assumes that **Email** is your [highest-priority enabled method](https://bitwarden.com/help/article/setup-two-step-login/#using-multiple-methods). Complete the following steps to access your Vault using Two-step Login:

1. Log in to your Bitwarden Vault on any any app and enter your Email Address and Master Password.

   You will be prompted to **Enter the 6 digit verification code that was emailed to your configured email**.
2. Check your inbox for the 6 digit verification code. Enter this code on the Vault login screen.

   {% callout success %}Check the **Remember Me** box to remember your device for 30 days. Remembering your device will mean you won't be required to complete your Two-step Login step.{% endcallout %}
3. Select **Continue** to finish logging in.

You will not be required to complete your secondary Two-step Login step to **Unlock** your Vault once logged in. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).
