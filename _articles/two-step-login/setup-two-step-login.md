---
layout: article
title: Two-step Login Methods
categories: [two-step-login]
featured: false
popular: true
order: 02
tags: [two-step login, 2fa, two factor authentication, account]
---

Using Two-step Login (also called *Two-factor Authentication*, or *2FA*) to protect your Bitwarden Vault prevents a malicious actor from accessing your Vault even if they discover your Master Password by requiring authentication from a secondary device when you log in. If you're unfamiliar with the basics of 2FA, check out our [Field Guide]({% link _articles/two-step-login/bitwarden-field-guide-two-step-login.md %}).

There are lots of different methods for Two-step Login, ranging from dedicated Authenticator Apps to Hardware Security Keys. Whatever you choose, Bitwarden highly recommends that you secure your Vault using Two-step Login. In fact, we think it's so important that we're happy to offer a few methods [for free](#free-methods).

## Two-step Login for Individuals

The following Two-step Login methods can be enabled on an individual-by-individual basis from the [Web Vault's](https://vault.bitwarden.com/){:target="\_blank"} **Settings** menu.

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
|via Duo Security with Duo Push, SMS, phone call, and security keys|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-duo.md %}).|
|via YubiKey (any 4/5 series device or YubiKey NEO/NFC)|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-yubikey.md %}).|
|via FIDO2 WebAuthn (any FIDO2 WebAuthn Certified authenticator)|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-fido.md %}).|

## Two-step Login for Teams and Enterprise

While all of the above methods can be enabled on an individual-by-individual basis, Teams and Enterprise Organizations can enable the following methods **Organization-wide** from the **Organization's Settings** menu.

|Method|Setup Instructions|
|------|------------------|
|via Duo Security with Duo Push, SMS, phone call, and security keys|Click [**here**]({% link _articles/two-step-login/setup-two-step-login-duo.md %}).|

## Using Multiple Methods

You can choose to enable multiple Two-step Login methods. When you log in to a Vault with multiple enabled methods, Bitwarden will first prompt you for the highest-priority method according to the following order of preference:

1. Duo (Organizations)
2. FIDO2 WebAuthn
3. YubiKey
4. Duo (Individual)
5. Authenticator App
6. Email

Any option will work, though. Authenticate with a lower-preference method by selecting the **Use another two-step login method** button:

{% image two-step/twostep-diffmethod.png Use another two-step login method %}
