---
layout: article
title: Lost Two-step Login Device
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account]
order: 08
---

If you lose access to the device or method that you use for Two-step Login, you can recover your account using a Two-step Login **Recovery Code**.

{% callout warning %}
**Without your Recovery Code, losing access to your device or method will permanently lock you out of your Vault.**

Get your Recovery Code from the Two-step Login screen before enabling any method.
{% endcallout %}

## Get Your Recovery Code

The Recovery Code is a 32 character alpha-numeric code. To retrieve your Recovery Code:

1. Log in to your [Web Vault](https://vault.bitwarden.com/){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.
3. Select **Two-step Login** from the left-side menu.
4. Select the **View Recovery Code** button at the top of the screen.

   You will be prompted to enter your Master Password in order to retrieve your Recovery Code.
5. Print your Recovery Code and put it somewhere safe.

## Use your Recovery Code

Using your Recovery will deactivate all Two-step Login methods from your account. You will be required to enter all of the following to use your Recovery Code:

- Email Address
- Master Password
- Recovery Code

Once you use your Recovery Code, you will be required to manually re-activate any Two-step Login methods. Using your Recovery code will also **reset your Recovery Code**. We recommend re-printing your code and to replace the previous one before re-activating any Two-step Login methods.

Follow this link to use your Recovery Code: [https://vault.bitwarden.com/#/recover-2fa](https://vault.bitwarden.com/#/recover-2fa){:target="\_blank"}.

### If you don't have your Recovery Code

If you don't have your Recovery Code, there is no way to fully recover the account. To access Bitwarden with that email address, you will need to delete the account and re-register.

Before deleting your account, check to see whether you have an active **Locked** session (for example, in a Browser Extension or Mobile app). Sessions that are Locked will not require your Two-step Login method. If you do have an active session, export your vault data before deleting the account.

{% callout warning %}
Deleting your account will delete all stored Logins, Identities, Cards, and Secure Notes.
{% endcallout %}

Complete the following steps to delete your account:

1. Navigate to [https://vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete){:target="\_blank"}.
2. Enter your account's Email Address.
3. Open your inbox and click the verification link that was sent to you.
4. Confirm the deletion of your account.

You can now register a new account using the same email address. If you had an active subscription at the time of deletion, [Contact Us](https://bitwarden.com/contact/) and we will re-instate it to your newly created account.
