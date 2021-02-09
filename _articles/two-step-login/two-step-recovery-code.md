---
layout: article
title: Two-step Recovery Code
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account]
order: 08
---

Your Two-step Login Recovery Code is a 32 character alpha-numeric code that, when used, will deactivate all Two-step Login methods from your account. Recovery Codes are designed for scenarios where you have lost your Two-step Login Device.

{% callout success %}
Without your Recovery Code, losing access to your device or method will permanently lock you out of your Vault. Bitwarden highly recommends downloading your Recovery Code from the Two-step Login screen **immediately after enabling any method**.
{% endcallout %}

## Get Your Recovery Code

Complete the following steps to retrieve your Recovery Code:

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

To use your Two-step Login Recovery Code, navigate to [https://vault.bitwarden.com/#/recover-2fa](https://vault.bitwarden.com/#/recover-2fa){:target="\_blank"} or, for self-hosted installations navigate to [https://your.vault.domain.com/#/recover-2fa](#).

Once you use your Recovery Code, you will be required to manually re-activate any Two-step Login methods. Using your Recovery code will also **reset your Recovery Code**. We recommend re-printing your code and to replace the previous one before re-activating any Two-step Login methods.
