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

Any [YubiKey that supports OTP](https://www.yubico.com/products/yubikey-hardware/compare-yubikeys/){:target="_blank"} can be used. This includes all YubiKey 4 and 5 series devices, as well as YubiKey NEO and YubiKey NFC. You can add up to 5 YubiKeys to your account.

## Setup YubiKey

Complete the following steps to enable Two-step Login using Yubikey:

{% callout warning %}
**Losing access to your Yubikey can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place or have an alternate Two-step Login method enabled and available.

[Get your Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}) from the **Two-step Login** screen immediately after enabling any method.
{% endcallout %}

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. Select **Two-step Login** from the left-side menu.
4. Locate the **YubiKey OTP Security Key** option and select the **Manage** button.

   {% image two-step/twostep-options-yubioverlay.png Select the Manage button %}

   You will be prompted to enter your Master Password to continue.
5. Plug the YubiKey into your computer's USB port.
6. Select the first empty YubiKey input field in the dialog in your Web Vault.
7. Touch the Yubikey's button.

   If you will be using the YubiKey for a NFC-enabled mobile device, check the **One of my keys supports NFC** checkbox.
8. Select **Save**. A green `Enabled` message will indicate that Two-step Login using YubiKey has been enabled.
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

   {% callout success %}Check the **Remember Me** box to remember your device for 30 days. Remembering your device will mean you won't be required to complete your Two-step Login step.{% endcallout %}

   **If you're using a non-NFC YubiKey on a Mobile Device:**
     1. Plug your YubiKey into the device.
     2. Tap **Cancel** to end the NFC prompt.

        {% image two-step/yubikey/nonfc.png %}
     3. Tap the text input field, denoted by a gray underline.
     4. Tap or press your YubiKey button to insert your code.

2. Select or tap **Continue** to finish logging in.

You will not be required to complete your secondary Two-step Login step to **Unlock** your Vault once logged in. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).

## NFC Troubleshooting

If your YubiKey's NFC functionality isn't working properly:

##### Check that NFC is enabled:
1. Download [YubiKey Manager](https://www.yubico.com/products/services-software/download/yubikey-manager/){:target="\_blank"}.
2. Plug the YubiKey into your device.
3. Select the **Interfaces** tab, and check that all boxes in the NFC section are checked.

##### Check that NFC is configured properly:
1. Download the [YubiKey Personalization Tool](https://www.yubico.com/products/services-software/download/yubikey-personalization-tools/){:target="\_blank"}.
2. Plug the YubiKey into your device.
3. Select the **Tools** tab.
4. Select the **NDEF Programming** button.
5. Select the the configuration slot you would like the YubiKey to use over NFC.
6. Select the **Program** button.

##### (Android-only) Check the following:

- That you checked the **One of my keys supports NFC** checkbox during setup.
- That your Android device supports [NFC](https://en.wikipedia.org/wiki/List_of_NFC-enabled_mobile_devices){:target="_blank"} and is [known to work properly](https://forum.yubico.com/viewtopic1c5f.html?f=26&t=1302){:target="_blank"} with YubiKey NEO or YubiKey 5 NFC.
- That you have NFC enabled on your Android device (**Settings** &rarr; **More**).
- That your keyboard layout/format/mode is set to QWERTY.
