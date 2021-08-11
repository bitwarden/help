---
layout: article
title: Two-step Login via Authenticator
categories: [two-step-login]
featured: false
popular: false
order: 03
tags: [two-step login, 2fa, two factor authentication, account, google authenticator, authy]
---

Two-step Login using a third-party authenticator app (for example, [Authy](https://authy.com/){:target="_blank"}, [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en){:target="_blank"}, or [FreeOTP](https://freeotp.github.io/){:target="_blank"}) is available for free to all Bitwarden users.

{% callout info %}
Some authenticator apps, like Google Authenticator, do not automatically backup your 2FA tokens for easy migration to a new mobile device. In these cases, you should manually save the each token's authenticator recovery codes.

Other apps, like Authy, do support backup and sync across devices. In these cases, be sure to set a strong backup password and keep a record of it in your Bitwarden Vault.
{% endcallout %}

## Setup an Authenticator

Complete the following steps to enable Two-step Login using an authenticator app:

{% callout warning %}
**Losing access to your authenticator app can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place or have an alternate Two-step Login method enabled and available.

[Get your Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}) from the **Two-step Login** screen immediately after enabling any method.
{% endcallout %}

1. Log in to your [Web Vault](https://vault.bitwarden.com/){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. Select **Two-step Login** from the left-side menu.
4. Locate the **Authenticator App** option and select the **Manage** button:

   {% image two-step/twostep-options-authoverlay.png Select the Manage button %}
   You will be prompted to enter your Master Password to continue.
5. Scan the QR code with your authenticator app of choice.

   If you don't have an authenticator app on your mobile device yet, download one and scan the QR code. We recommend [Authy](https://authy.com/){:target="_blank"}.
6. Once scanned, your authenticator app will return a 6-digit verification code. Enter the code in the dialog box in your Web Vault and select the **Enable** button.

   A green `Enabled` message will indicate that Two-step Login via Authenticator App has been enabled.
6. Select the **Close** button and confirm that the **Authenticator App** option now is enabled, as indicated by a green checkbox ( {% icon fa-check %} ).

{% callout info %}
When you setup Two-step Login, you should logout of all your Bitwarden apps to immediately activate Two-step Login for each app. You will eventually be logged out automatically.
{% endcallout %}

## Use an Authenticator

The following assumes that **Authenticator** is your [highest-priority enabled method](https://bitwarden.com/help/article/setup-two-step-login/#using-multiple-methods). Complete the following steps to access your Vault using Two-step Login:

1. Log in to your Bitwarden Vault on any app and enter your Email Address and Master Password.

   You will be prompted to **Enter the 6 digit verification code from your authenticator app**.
2. Open your authenticator app and find the 6 digit verification code for your Bitwarden Vault. Enter this code on the Vault login screen. Typically, verification codes will change every 30 seconds.

   {% callout success %}Check the **Remember Me** box to remember your device for 30 days. Remembering your device will mean you won't be required to complete your Two-step Login step.{% endcallout %}
3. Select **Continue** to finish logging in.

You will not be required to complete your secondary Two-step Login step to **Unlock** your Vault once logged in. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).
