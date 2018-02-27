---
layout: article
title: Set up two-step login (2FA)
categories: [getting-started, account-management]
featured: false
popular: true
tags: [two-step login, 2fa, two factor authentication, account]
---

Two-step login (or two-factor authentication) greatly increases the security of your account by requiring you to complete a secondary step while logging into Bitwarden (in addition to your master password). Even if someone were to discover your master password, they could not log into your Bitwarden account without access to the secondary step. You can read more about [two-step login here](https://en.wikipedia.org/wiki/Multi-factor_authentication){:target="_blank"}. We recommend that all users activate and use two-step login with their Bitwarden account.

Bitwarden supports two-step login using the following methods:

**Free**

- Authenticator app such as [Authy](https://authy.com/){:target="_blank"} or [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en){:target="_blank"}, [&rarr; setup]({% link _articles/account/setup-two-step-login-authenticator.md %})
- Email, [&rarr; setup]({% link _articles/account/setup-two-step-login-email.md %})

**Premium**

- Duo Security with Duo Push, SMS, phone call, and U2F security keys, [&rarr; setup]({% link _articles/account/setup-two-step-login-duo.md %})
- YubiKey (any 4 series device or YubiKey NEO), [&rarr; setup]({% link _articles/account/setup-two-step-login-yubikey.md %})
- FIDO U2F (any FIDO U2F certified key), [&rarr; setup]({% link _articles/account/setup-two-step-login-u2f.md %})

You can enable multiple two-step login methods. If you have multiple two-step login methods enabled, the order of preference for the default method that is displayed while logging in is as follows: FIDO U2F &rarr; YubiKey &rarr; Duo &rarr; Authenticator app &rarr; Email. You can manually switch to and use any method during login, however.
