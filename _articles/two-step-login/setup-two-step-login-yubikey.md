---
layout: article
title: Two-step Login via YubiKey
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, yubikey, yubi, yubico]
order: 06
---

Two-step Login using [YubiKey](https://www.yubico.com){:target="\_blank"} is available for Premium users, including members of Paid Organizations (Families, Teams, or Enterprise).

Any YubiKey that supports [OTP](https://www.yubico.com/products/yubikey-hardware/compare-yubikeys/){:target="_blank"} can be used. This includes all YubiKey 4 and 5 series devices, as well as YubiKey NEO and YubiKey NFC. You can add up to 5 YubiKeys to your account.

## Setup YubiKey

Complete the following steps to enable Two-step Login via Yubikey:

{% callout warning %}
**Losing access to your Yubikey can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place.

[Get your Recovery Code]({% link _articles/two-step-login/lost-two-step-device.md %}) from the **Two-step Login** screen before enabling any method.
{% endcallout %}

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. Select **Two-step Login** from the left-side menu.
4. Locate the **YubiKey OTP Security Key** option and select the **Manage** button.

   {% image two-step/twostep-options-yubioverlay.png Two-step Login Options %}

   You will be prompted to enter your Master Password to continue.
5. Plug the YubiKey into your computer's USB port.
6. Select the first empty YubiKey input field in the dialog in your Web Vault.
7. Touch the Yubikey's button.

   If you will be using the YubiKey for a NFC-enabled mobile device, check the **One of my keys supports NFC** checkbox.
8. Select **Save**. A green `Enabled` message will indicate that Two-step Login via YubiKey has been enabled.
9. Select the **Close** button and confirm that the **YubiKey OTP Security Key** option is now enabled, as indicated by a green checkbox ( {% icon fa-check %} ).

Repeat this process to add up to 5 YubiKeys to your account.

{% callout info %}
When you setup Two-step Login, you should logout of all your Bitwarden apps to immediately activate Two-step Login for each app. You will eventually be logged out automatically.
{% endcallout %}

## Use YubiKey

The following assumes that **YubiKey** is your [highest-priority enabled method](https://bitwarden.com/help/article/setup-two-step-login/#using-multiple-methods). Complete the following steps to access your Vault using Two-step Login:

1. Log in to your Bitwarden Vault on any app and enter your Email Address and Master Password.

   You will be prompted to insert your YubiKey into your computer's USB port or hold your YubiKey against the back of your NFC-enabled device:

   {% image two-step/yubikey/using-yubi.png %}

2. Select or tap **Continue** to finish logging in.

You will not be required to complete your secondary Two-step Login step to **Unlock** your Vault once timed-out. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).

### Troubleshooting Android

If you do not know where your NFC receiver is located, you may need to move it around some, trying different areas. Once Bitwarden detects the YubiKey it will automatically validate and log you in. If YubiKey NEO or YubiKey 5 NFC continue to not work on your Android device, try the following:

- That you checked the **One of my keys supports NFC** checkbox during setup.
- That your Android device supports [NFC](https://en.wikipedia.org/wiki/List_of_NFC-enabled_mobile_devices){:target="_blank"} and is [known to work properly](https://forum.yubico.com/viewtopic1c5f.html?f=26&t=1302){:target="_blank"} with YubiKey NEO or YubiKey 5 NFC.
- That you have NFC enabled on your Android device (**Settings** &rarr; **More**).
- That your keyboard layout/format/mode is set to QWERTY.
