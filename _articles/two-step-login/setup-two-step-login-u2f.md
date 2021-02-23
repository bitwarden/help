---
layout: article
title: Two-step Login via FIDO U2F
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, u2f, fido]
order: 07
---

Two-step Login using [FIDO U2F](https://www.yubico.com/solutions/fido-u2f/){:target="_blank"} is available for Premium users, including members of Paid Organizations (Families, Teams, or Enterprise).

Any FIDO U2F certified device can be used, including YubiKeys, SoloKeys, Google Titan, Nitrokeys, and more.

{% callout info %}
**FIDO U2F cannot be used on all Bitwarden applications.** Enable another Two-step Login method in order to access your vault on unsupported applications.

Supported applications:

- Web Vault on a computer with a U2F-enabled Browser (Chrome, Opera, Vivaldi, or [Firefox with FIDO U2F enabled](https://www.yubico.com/2017/11/how-to-navigate-fido-u2f-in-firefox-quantum/){:target="_blank"}).
- Browser Extensions for a U2F-enabled Browser (Chrome, Opera, Vivaldi, or [Firefox with FIDO U2F enabled](https://www.yubico.com/2017/11/how-to-navigate-fido-u2f-in-firefox-quantum/){:target="_blank"}).
{% endcallout %}

## Setup FIDO U2F

Complete the following steps to enable Two-step Login using FIDO U2F:

{% callout warning %}
**Losing access to your FIDO U2F device can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place.

[Get Your Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}) from the **Two-step Login** screen immediately after enabling any method.
{% endcallout %}

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. Select **Two-step Login** from the left-side menu.
4. Locate the **FIDO U2F Security Key** option and select the **Manage** button.

   {% image two-step/twostep-options-u2foverlay.png Select the Manage button %}

   You will be prompted to enter your Master Password to continue.

5. Give your security key a friendly **Name**.
6. Plug the security key into your computer's USB port and select **Read Key**.

   If your security key has a button, touch it.

7. Select **Save**. A green `Enabled` message will indicate that Two-step Login using FIDO U2F has been successfully enabled and your key will appear with a green checkbox ( {% icon fa-check %} ).
8. Select the **Close** button and confirm that the **FIDO U2F Security Key** option is now enabled, as indicated by a green checkbox ( {% icon fa-check %} ).

Repeat this process to add up to 5 FIDO U2F security keys to your account.

{% callout info %}
When you setup Two-step Login, you should logout of all your Bitwarden apps to immediately activate Two-step Login for each app. You will eventually be logged out automatically.
{% endcallout %}

## Use FIDO U2F

The following assumes that **FIDO U2F** is your [highest-priority enabled method](https://bitwarden.com/help/article/setup-two-step-login/#using-multiple-methods). Complete the following steps to access your Vault using Two-step Login:

1. Log in to your Bitwarden Vault (*Web Vault* or *Browser Extension*) and enter your Email Address and Master Password.

   You will be prompted to insert your security key into your computer's USB port. If it has a button, touch it.

   {% image two-step/u2f/web.png %}

You will not be required to complete your secondary Two-step Login setup to **Unlock** your Vault once logged in. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).
