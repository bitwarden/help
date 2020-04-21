---
layout: article
title: Field Guide for Two-Step Login
categories: [account-management]
featured: false
popular: false
hidden: true
tags: [tutorial, two-step login, 2fa, two factor authentication]
---

## Introducing Two-Step Login
Two-step Login, a type of two-factor authentication, is a technique used to increase the security of websites and apps that contain sensitive data. During the login process, when a user accesses an application or website, they are required to enter another credential beyond just a username and password, usually from a different device, to verify their identity.

{% image two-step/field-guide/two-step-login-basic-setup.png %} 

A common consumer example is adding a payee to your online bank account. Here the bank will often send you a text message code to ensure it is actually you adding the new payee.  Alternatively, sometimes the verification might be to confirm the change via the bank’s app on your phone.

Another example is signing in to websites where having a 2nd touchpoint can offer an additional layer of security and protect from unwanted attacks. GitHub offers several two-step login mechanisms for their accounts including:

- SMS number - a text message to your mobile phone
- Authenticator app - linking with an app such as Authy or FreeOTP
- Security keys - using a physical security key such as a YubiKey

Every day, these two-step login options become more common across consumer and business websites.

Password managers can help with two-step login, including sharing login credentials that have two-step login enabled. 

In this post, we’ll examine how to use Bitwarden with different implementations of two-step login.

Keep in mind that security often involves a tradeoff between protection and convenience. While we will share different approaches, you can always choose only the ones that are appropriate for you.

### Securing Your Password Manager with Two-step Login
Of course, we recommend that you secure your password manager itself with two-step login.

Two-step login (or two-factor authentication, sometimes abbreviated 2FA) greatly increases the security of your account by requiring you to complete a secondary step while logging into Bitwarden (in addition to your master password). Even if someone were to discover your master password, they could not log into your Bitwarden account without access to the secondary step. 

We recommend that all users activate and use two-step login with their Bitwarden account.

Bitwarden supports two-step login using the following methods:

Within the Bitwarden free account

- Authenticator app such as Authy or Google Authenticator
- Email

Within the Bitwarden Premium account

- Duo Security with Duo Push, SMS, phone call, and U2F security keys
- YubiKey (any 4/5 series device or YubiKey NEO/NFC)
- FIDO U2F (any FIDO U2F certified key)

Visit [bitwarden.com/article/setup-two-step-login](https://help.bitwarden.com/article/setup-two-step-login/){:target="_blank"} for direct links to all of the above two-step login setup methods.

You can also enable multiple two-step login methods.

If you have multiple two-step login methods enabled, the order of preference for the default method that is displayed while logging in is as follows:

FIDO U2F > YubiKey > Duo > Authenticator app > Email.

You can manually switch to and use any method during login, however.

## Using your Password Manager with Websites supporting Two-step Login
As you add more and more applications and websites to your password manager, you have a couple of options for how you implement two-step login.

One option is to use SMS or an authenticator app like Authy or Google Authenticator.

Another option is to use the built in authenticator application within Bitwarden.

### Two-step Login with a third party application
Let’s use an example with Reddit. Under the profile icon, you can choose

User Settings > Privacy and Security > Advanced Security > Use two-factor authentication

Reddit will prompt you for your password, and then present this dialog

{% image two-step/field-guide/reddit-2fa-setup.png %} 

{% note %}
**About Authy and Google Authenticator**<br>
Both of these applications serve the authenticator function well. However, ONLY Authy has the ability to backup your two-factor authentication pairings.
This means that if you rely on Google Authenticator and you lose your phone, you may end up locked out of accounts if you do not have recovery codes for each account.
With Authy, as long as you have your Authy password, you can install Authy on a new device and recover all of your two-step login pairings.
{% endnote %}

In this case, we’ll use the Authy application as the authenticator. We open it, add an account, scan the barcode and then Authy presents a 6 digit token.

{% image two-step/field-guide/reddit-token.png %} 

With that token, we can complete the two-factor authentication setup for Reddit!

{% warning %}
Reddit will now offer an option next to the two-factor authentication setting to ‘Get your backup codes.’ This is a critical step. Should you ever lose the ability to complete two-factor authentication with Authy, you can use one of your backup codes to access Reddit.
{% endwarning %}

While two-factor authentication adds an extra layer of protection to our accounts, it also makes it harder to recover should things go awry. Therefore always approach with attention and secure your backup codes in a place you will remember...maybe even in Bitwarden, unless the 2FA is being used to get into Bitwarden itself.

{% image two-step/field-guide/two-step-login-bitwarden-authy-reddit.png %} 

{% note %}
**How Authenticators Work**<br>
Authy, Google Authenticator, and Bitwarden all operate similarly for authentication using TOTP which stands for Time-based One-Time Password algorithm. At the initiation such as the QR code scan, both the website and the authenticator app share an authentication key. That key is then used to generate time-based tokens which change every several seconds. Without that original authentication key, it is not possible to create the right token at the right time, thereby providing extra protection.
{% endnote %}

### Two-step Login with the Bitwarden Authenticator Application
Another option to simplify the use of two-factor authentication is to use the built in authenticator application within Bitwarden.

Understandably, some might ask, “why would I use my password manager for both the main login, and the two-step login? Doesn’t that defeat the purpose of having a separate device?”

The answer is nuanced but in the end it’s up to you - you can choose. Here’s why some people choose to incorporate this function directly into Bitwarden:

- It provides a convenience of having extra protection at the website account level without a large inconvenience to a user who needs to regularly login
- It allows for sharing an account with two-factor authentication turned on, which would not be possible otherwise

Of course, some people think that the two-step login process should be kept completely separate, and that is always an option.

The process for setting up Reddit to use Bitwarden for two-step login is similar to the earlier steps.

#### Bitwarden mobile app and QR code scan
Using the Bitwarden mobile app, you can scan the same QR code Reddit presented.

Select the login for Reddit in your Bitwarden Vault, then Edit, then use the camera icon next to the item Authenticator Key (TOTP) to scan the Reddit-presented QR code.

Once you save the item, you now have an entry within your Reddit Login in Bitwarden for Verification Code (TOTP). This is the 6 digit number Reddit needs to complete the two-factor authentication setup.

#### Bitwarden browser extension and manual Authentication key
Directly within the browser extension, you can manually add an Authentication Key to enable two-step login.

When Reddit displays the dialogue with the barcode, it offers two options:

> Step 2: Use your authenticator app to scan the barcode below or **get a token to enter manually instead**.

You can click ‘get a token to enter manually instead’ to copy the long string of numbers and digits.

Within your browser extension, you can view and edit the Reddit Login, and manually enter the Authenticator Key (TOTP).

- Click the checkmark
- Save the item
- Hit the copy icon next to the Verification Code (TOTP)
- Paste that into the Reddit dialogue

{% image two-step/field-guide/two-step-login-bitwarden-authenticator.png %}

### Using Keyboard Shortcuts with Two-step Login
Once you have your Verification Code within your Reddit login, you can use keyboard shortcuts to smooth the login process.

When you approach the Reddit Login dialogue, use Windows:`Ctrl + Shift + L` or macOS: `Cmd + Shift + L` to enter your username and password. Following that, the Verification Code (TOTP) is automatically added to your clipboard. Use Windows: `Ctrl + V` or macOS: `Cmd + V` to paste it in! 

While one can debate whether this process has a different security profile compared to sending a code to a separate physical device, it does offer more protection while also being fast and convenient.

### Sharing Credentials with Two-Step Login Enabled
One benefit of coupling two-step login within Bitwarden is the ability to share that credential with other team members while keeping the two-step login intact.

You can imagine a scenario where two-step login was enabled to the primary user’s mobile phone. Then if a second user wanted to share that credential, it would require coordinating with the first user via a phone call or text message to share the Verification Code on each login, and doing so within a few seconds.

Through the Bitwarden sharing capabilities, two users can be part of the same organization, and within a collection they can share any number of logins, including those that have two-step login enabled.

As an example, this capability can be extremely useful in cases where two-step login provides extra protection, such as the primary login for a social media site, and you still want to be able to share that login across multiple social media managers.

## Stay safe with Two-step Login
Whichever path you choose, remember the basics
- Use two-step login for your password manager
- Use two-step login for your critical website logins
	- With a 3rd party app like Authy or FreeOTP; or
	- Within your password manager such as Bitwarden

Here’s to happy logins!

To get your own personal Bitwarden Vault visit [bitwarden.com](https://bitwarden.com). Add Premium Features for full access to the Authenticator built into Bitwarden.