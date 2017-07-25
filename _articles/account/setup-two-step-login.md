---
layout: article
title: Set up two-step login (2FA)
categories: [Getting Started, Account Management]
featured: false
popular: true
tags: [two-step login, 2fa, two factor authentication, account]
---

Two-step login (or two-factor authentication) greatly increases the security of your account by requiring you to complete a secondary step while logging into bitwarden (in addition to your master password). Even if someone were to discover your master password, they could not log into your bitwarden account without access to the secondary step. You can read more about [two-step login here](https://en.wikipedia.org/wiki/Multi-factor_authentication){:target="_blank"}. We recommend that all users activate and use two-step login with their bitwarden account.

bitwarden supports two-step login using the following methods:

- Authenticator app such as [Authy](https://authy.com/){:target="_blank"} or [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en){:target="_blank"}, [&rarr; setup]({% link _articles/account/setup-two-step-login-authenticator.md %})
- Email, [&rarr; setup]({% link _articles/account/setup-two-step-login-email.md %})
- Duo Security with Duo Push, SMS, phone call, and U2F security keys, [&rarr; setup]({% link _articles/account/setup-two-step-login-duo.md %})
- YubiKey (any 4 series device or YubiKey NEO), [&rarr; setup]({% link _articles/account/setup-two-step-login-yubikey.md %})
- FIDO U2F (any FIDO U2F certified key), [&rarr; setup]({% link _articles/account/setup-two-step-login-u2f.md %})
