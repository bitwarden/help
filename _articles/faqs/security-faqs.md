---
layout: article
title: Security FAQs
categories: [faqs, security]
featured: false
popular: false
hidden: false
tags: []
---

## Table of Contents

- [Compliance General](#compliance-general)
  * [Current Certifications](#current-certifications)
  * [GDPR](#gdpr)
  * [SOC Certifications](#soc-certifications)
- [Desktop Electron Backdoor Concern](#desktop-electron-backdoor-concern)
- [Duo MFA / 2FA / Two-step Login Requirement](#duo-mfa-2fa-two-step-login-requirement)
- [New Device Not Recognized](#new-device-not-recognized)
- [Master Password Stored Locally?](#master-password-stored-locally)
- [Third party scripts, libraries, and services](#third-party-scripts-libraries-and-services)
- [Security General (Whitepaper, Audit report, etc.)](#security-general-whitepaper-audit-report-etc)
- [Self-signed Certificate Setup, On-premises/self-hosted](#self-signed-certificate-setup-on-premisesself-hosted)
- [Web Browser Extension Security/Safety Concern](#web-browser-extension-securitysafety-concern)
- [Web Browser Permission Request](#web-browser-permission-request)

## Compliance General

### Current Certifications

- GDPR
- CCPA
- SOC 2 Type 2
- SOC 3

### GDPR

You can read more about Bitwarden’s data protection and privacy policies here:
<https://bitwarden.com/privacy/>

### SOC Certifications

You can find more about our SOC certifications on our blog [here.](https://bitwarden.com/blog/post/bitwarden-achieves-soc-2-certification/)

## Desktop Electron Backdoor Concern

The often shared article suggests an attack that requires a user to have a compromised machine, which of course would allow a malicious attacker to compromise data on that machine. As long as you have no reason to believe the device you are using has been compromised, your data is safe.

## Duo MFA / 2FA / Two-step Login Requirement

The ability to enforce 2FA is made possible using an [Enterprise Policy](https://bitwarden.com/help/article/policies/) included with an Enterprise Organization subscription. As an additional option, you can enable Duo MFA integration to enforce 2FA/MFA for your Organization.


## New Device Not Recognized

Do you recognize the IP address as a home or work IP address? If you Google "my ip" it will show the current IP address of your current connection. Make sure you check the IP of your mobile network as well. You will want to check if the IP shown in the notification is similar or not. If the IP isn't recognizable then it is recommended for you to change your password and make sure Two-step Login is configured on your Bitwarden account. You will also want to log into the Web Vault (https://vault.bitwarden.com) and go to Settings > My Account. Scroll to the bottom of the page and select Deauthorize Sessions. After Bitwarden has been updated with the new password and sessions have been reauthorized, you may want to change any accounts you have configured in Bitwarden. This is mainly precautionary steps, it doesn't mean someone has definitely logged into your account without permission. Are you sure the email on the message was to the right email address and not another account you may have? This notification could be a false positive or a fake/joke message but if you cannot determine why it was sent then you may want to be sure you are safe. It is better safe than sorry. Remember, access only is possible with your username, password, and alongside your Two-step Login if configured. The only way someone could access your account is if you do not have a Two-step Login configured and they guess your password if it doesn’t happen to be strong enough or a simple phrase.

## Master Password Stored Locally?

We do not keep the master password stored locally or in memory. Your encryption key (which is derived from the master password) is kept in memory while the app is unlocked. This is needed to decrypt data in your vault. When the vault is locked, this data is purged from memory. We also reload the application's renderer process after 10 seconds of inactivity on the lock screen to make sure any managed memory addresses which have not yet been garbage collected are also purged. We do our best to ensure that any data that may be in memory for the application to function is only held in memory for as long as you need it and that memory is cleaned up whenever the application is locked. We consider the application to be completely safe while in a locked state.

## Third party scripts, libraries, and services

Currently, we load third-party payment scripts from Stripe and PayPal on payment pages in the Web Vault. In the mobile app, the Firebase script is used for push notifications. The HockeyApp is used for crash reporting. Please note, Firebase and HockeyApp are removed completely from the F-Droid build if you are interested in using that option. Turning off push notifications on a Bitwarden server will disable using the push relay server if you want to self-host.

## Security General (Whitepaper, Audit report, etc.)

- Assessment Report: [Available here](https://cdn.bitwarden.net/misc/Bitwarden%20Security%20Assessment%20Report.pdf)     
- Additional Reading (Security):  <https://help.bitwarden.com/security/>     
- HackerOne:   <https://hackerone.com/bitwarden>
- GitHub Project:  <https://github.com/bitwarden>

## Self-signed Certificate Setup, On-premises/self-hosted

When configuring your server with a self-signed certificate you will need to have two files, a private key and a server cert, then you will configure their path in the config.yml file in the Bitwarden installation directory. You can see an example of how to create a self-signed cert by referring to #6 here:  https://help.bitwarden.com/article/install-on-premise/#manual-docker-installations     The path that is defined in the config.yml is actually the location inside the NGINX container. The directory on the host is mapped to the container so you will actually want to make sure your correct certificate related files are under the ./bwdata/ssl/ directory. You should only ever need to work with the files under ./bwdata/ssl/, you do not want to work with files directly inside any container. It should line up like this (bitwarden.domain.local is only an example):

```
{ ./bwdata/config.yml }
ssl_certificate_path: /etc/ssl/bitwarden.domain.local/certificate.crt
ssl_key_path: /etc/ssl/bitwarden.domain.local/private.key
Ssl_ca_path:
```

```
{ ./bwdata/ssl/bitwarden.domain.local }
certificate.crt
Private.key
```

## Web Browser Extension Security/Safety Concern

Extensions are safe to use if they are developed correctly. Due to the nature of how browser extensions work there is always a chance for a bug to arise. We take extreme care and caution when we are developing our extensions and add-ons, we keep our eyes and ears out for anything going on in the industry, and we conduct security audits for many more eyes on everything.

## Web Browser Permission Request

Users now have the ability to schedule their clipboard to be cleared of any Bitwarden entries made when filling forms or any other activity they may perform with Bitwarden which uses the clipboard. The permission requested by the extension is asking for an allowance for the app to do this. We need to read the clipboard value to ensure that we don't clear it out if it isn't a value you copied from the Bitwarden app itself. We keep track of the last copied Bitwarden value when we go to clear the clipboard N seconds later, we read the clipboard and then check it against the last copied value from Bitwarden, if it is the same, we clear it, if not, we leave it alone. This way we don't overwrite any important information you may have in your clipboard. This option is disabled by default and will only become active if you choose to set a schedule.
