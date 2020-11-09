---
layout: article
title: Set up two-step login with FIDO U2F
categories: [account-management]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, u2f, fido]
---

Bitwarden supports two-step login via [FIDO U2F](https://www.yubico.com/solutions/fido-u2f/){:target="_blank"}. Any FIDO U2F certified device will work. We recommend a [YubiKey](https://www.yubico.com/products/yubikey-hardware/){:target="_blank"}.

{% callout info %}
Due to platform limitations, FIDO U2F cannot be used on all Bitwarden applications. You should enable another two-step login provider so that you can access your account when FIDO U2F cannot be used.

Supported platforms:

- Web vault on a desktop/laptop with a U2F enabled browser (Chrome, Opera, Vivaldi, or [Firefox with FIDO U2F enabled](https://www.yubico.com/2017/11/how-to-navigate-fido-u2f-in-firefox-quantum/){:target="_blank"}).
- Browser extensions on Chrome, Opera, Vivaldi, or [Firefox with FIDO U2F enabled](https://www.yubico.com/2017/11/how-to-navigate-fido-u2f-in-firefox-quantum/){:target="_blank"}.
{% endcallout %}

## Enable Two-step Login with FIDO U2F

{% callout warning %}
Two-step login can permanently lock you out of your account. It is very important that you write down and keep your [two-step login recovery code]({% link _articles/account/lost-two-step-device.md %}) in a safe place in the event that you lose access to your FIDO U2F security key.
{% endcallout %}

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Settings** in the top navigation bar, then click **Two-step Login** from the side menu.
3. Select the **Manage** button for the **FIDO U2F Security Key** option and then type in your master password to continue.
   {% image two-step/u2f/select.png %}
4. Follow the instructions shown:
   - Give the security key a friendly name to identify it.
   - Plug the security key into your computer's USB port and click the **Read Key** button.
   - If the security key has a button, touch it. You will receive a success message when your key has been properly read. Click the **Read Key** button to try again if it fails.
   {% image two-step/u2f/config.png %}
5. Click the **Save** button. A green alert will appear at the top stating that two-step login has been enabled. You can add up to five security keys to your account.
6. Click the **Close** button and confirm that the **FIDO U2F Security Key** option now shows as **Enabled**.
   {% image two-step/u2f/enabled.png %}

## Test

1. **IMPORTANT:** Ensure that you have copied down your [two-step login recovery code]({% link _articles/account/lost-two-step-device.md %}) in case something goes wrong.
2. Log out of the Bitwarden web vault.
3. Log back into the Bitwarden web vault. You should now be prompted with a FIDO U2F two-step login option. Insert your FIDO U2F security key (if it has a button, touch it) to complete logging in.
4. Log out of and back in to any other Bitwarden applications that you are using to confirm that two-step login via FIDO U2F is properly working. You will eventually be logged out automatically. If the application (or device) your are using does not support FIDO U2F you will be presented with other two-step login options that you have configured (if any).

   Web
   {% image two-step/u2f/web.png %}

   Browser extension
   {% image two-step/u2f/browser.png %}
