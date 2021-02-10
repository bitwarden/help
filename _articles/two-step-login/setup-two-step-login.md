---
layout: article
title: Two-step Login Methods
categories: [two-step-login]
featured: false
popular: true
order: 02
tags: [two-step login, 2fa, two factor authentication, account]
---

Using Two-step Login (also called *Two-factor Authentication*, or *2FA*) to access your Bitwarden Vault protects *all* your logins by preventing a malicious actor from accessing Vault items, even if they discover your Master Password. Since your Password Manager stores all your logins, we highly recommend that you secure it with Two-step Login.

Enabling Two-step Login will require you to complete a secondary step each time you **Log In**, in addition to entering your Master Password. You will not be required to complete the secondary step to **Unlock** your Vault. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).

## Available Methods

In the [Web Vault](https://vault.bitwarden.com/){:target="\_blank"}, enable Two-step Login methods from the **Settings** menu.

### Free Methods

Bitwarden offers several Two-step Login methods for free, including:

|Method|Setup Instructions|
|------|------------------|
|via an Authenticator app (for example, [Authy](https://authy.com/){:target="_blank"} or [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en){:target="_blank"})|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-authenticator.md %}).|
|via Email|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-email.md %}).|

### Premium Methods

For Premium users (including members of Paid Organizations), Bitwarden offers several advanced Two-step Login methods:

|Method|Setup Instructions|
|------|------------------|
|via Duo Security with Duo Push, SMS, phone call, and U2F security keys|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-duo.md %}).|
|via YubiKey (any 4/5 series device or YubiKey NEO/NFC)|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-yubikey.md %}).|
|via FIDO U2F (any FIDO U2F certified key)|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-u2f.md %}).|

## Using Multiple Methods

You can choose to enable multiple Two-step Login methods. Logging in to Bitwarden will prompt for your highest-priority enabled Two-step Login method, according to the following order of preference:
1. FIDO U2F
2. YubiKey
3. Duo
4. Authenticator App
5. Email

You can swap to a lower-preference method by selecting the **Use another two-step login method** button:

{% image two-step/twostep-diffmethod.png Use another two-step login method %}
