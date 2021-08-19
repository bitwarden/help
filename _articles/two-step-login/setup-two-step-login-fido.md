---
layout: article
title: Two-step Login via FIDO2 WebAuthn
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, u2f, fido]
order: 07
redirect_from:
  - /article/setup-two-step-login-u2f/
---

Two-step Login using FIDO2 WebAuthn authenticators is available for Premium users, including members of Paid Organizations (Families, Teams, or Enterprise).

Any FIDO2 WebAuthn Certified authenticator can be used, including Security Keys like YubiKeys, SoloKeys, and Nitrokeys, as well as native biometrics options like Windows Hello and Touch ID.

{% callout success %}
Existing FIDO U2F security keys will still be usable and will be marked **(Migrated from FIDO)** on the Two-step Login &rarr; Manage FIDO2 WebAuthn dialog.
{% endcallout %}

FIDO2 WebAuthn cannot be used on all Bitwarden applications. Enable another Two-step Login method in order to access your vault on unsupported applications. Supported applications include:

- **Web Vault** on a device with a [FIDO2-supported Browser](https://fidoalliance.org/fido2/fido2-web-authentication-webauthn/){:target="\_blank"}.
- **Browser Extensions** for a [FIDO2-supported Browser](https://fidoalliance.org/fido2/fido2-web-authentication-webauthn/){:target="\_blank"}.
- **Desktop Application** on Windows 10 and above.

## Setup FIDO2 WebAuthn

Complete the following steps to enable Two-step Login using FIDO2 WebAuthn:

{% callout warning %}
**Losing access to your authenticator can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place or have an alternate Two-step Login method enabled and available.

[Get Your Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}) from the **Two-step Login** screen immediately after enabling any method.
{% endcallout %}

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. Select **Two-step Login** from the left-side menu.
4. Locate the **FIDO2 WebAuthn** option and select the **Manage** button.

   {% image two-step/twostep-options-fido2.png Select the Manage button %}

   You will be prompted to enter your Master Password to continue.

5. Give your security key a friendly **Name**.
6. Plug the security key into your device's USB port and select **Read Key**.

   If your security key has a button, touch it.

7. Select **Save**. A green `Enabled` message will indicate that Two-step Login using FIDO2 WebAuthn has been successfully enabled and your key will appear with a green checkbox ( {% icon fa-check %} ).
8. Select the **Close** button and confirm that the **FIDO2 WebAuthn** option is now enabled, as indicated by a green checkbox ( {% icon fa-check %} ).

Repeat this process to add up to 5 FIDO2 WebAuthn security keys to your account.

{% callout info %}
When you setup Two-step Login, you should logout of all your Bitwarden apps to immediately activate Two-step Login for each app. You will eventually be logged out automatically.
{% endcallout %}

## Use FIDO2 WebAuthn

The following assumes that **FIDO2 WebAuthn** is your [highest-priority enabled method](https://bitwarden.com/help/article/setup-two-step-login/#using-multiple-methods). Complete the following steps to access your Vault using Two-step Login:

1. Log in to your Bitwarden Vault (*Web Vault* or *Browser Extension*) and enter your Email Address and Master Password.

   You will be prompted to insert your security key into your device's USB port. If it has a button, touch it.

   {% image two-step/u2f/fido2.png %}

{% callout success %}
Check the **Remember Me** box to remember your device for 30 days. Remembering your device will mean you won't be required to complete your Two-step Login step.
{% endcallout %}

You will not be required to complete your secondary Two-step Login setup to **Unlock** your Vault once logged in. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).
