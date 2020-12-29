---
layout: article
title: Security FAQs
categories: [security, faqs]
featured: false
popular: false
hidden: false
tags: []
order: 08
redirect_from:
  - /article/why-should-i-trust-bitwarden/
  - /article/what-happens-if-bitwarden-is-hacked/
  - /article/can-bitwarden-see-my-passwords/
---

This article contains Frequently Asked Questions (FAQs) regarding **Security**.

### Q: Why should I trust Bitwarden with my passwords?

**A:** You can trust us for a few reasons:

1. Bitwarden is **open source** software. All of our source code is hosted on [GitHub](https://github.com/bitwarden){:target="_blank"} and is free for anyone to review. Thousands of software developers follow Bitwarden's source code projects (and you should too!).
2. Bitwarden [is **audited**]({% link _articles/security/is-bitwarden-audited.md %}) **by reputable third-party security firms** as well as independent security researchers.
3. Bitwarden **does not store your passwords**. Bitwarden stores encrypted versions of your passwords [that only you can unlock]({% link _articles/security/what-encryption-is-used.md %}). Your sensitive information is encrypted locally on your personal device before ever being sent to our cloud servers.
4. **Bitwarden has a reputation.** Bitwarden is used by millions of individuals and businesses. If we did anything questionable or risky, we'd be out of business!

Still don't trust us? You don't have to. Open source is beautiful. You can easily host the entire Bitwarden stack yourself. You control your data. Learn more [here]({% link _articles/hosting/install-on-premise.md %}).

### Q: What happens if Bitwarden gets hacked?

**A:** Bitwarden takes extreme measures to ensure that its websites, applications, and cloud servers are secure. Bitwarden uses Microsoft Azure managed services to manage server infrastructure and security, rather than doing so directly.

If for some reason Bitwarden were to get hacked and data be leaked despite this, your information is still protected due to [strong encryption and one-way salted hashing]({% link _articles/security/what-encryption-is-used.md %}) measures taken on your Vault data and master password.

### Q: Can Bitwarden see my passwords?

**A:** No.

Your data is fully encrypted and/or hashed before ever leaving **your** local device, so no one from the Bitwarden team can ever see, read, or reverse engineer to get to your real data. Bitwarden servers only store encrypted and hashed data. For more information about how your data is encrypted, see [Encryption]({% link _articles/security/what-encryption-is-used.md %}).

### Q: Is my master password stored locally?

**A:** No.

We do not keep the master password stored locally or in memory. Your encryption key (derived from the master password) is kept in memory only while the app is unlocked, which is required to decrypt data in your vault. When the vault is locked, this data is purged from memory.

We also reload the application's renderer process after 10 seconds of inactivity on the lock screen to make sure any managed memory addresses which have not yet been garbage collected are purged. We do our best to ensure that any data that may be in memory for the application to function is only held in memory for as long as you need it and that memory is cleaned up whenever the application is locked. We consider the application to be completely safe while in a locked state.

### Q: What do I do if I don't recognize a new device logging in?

**A:** If the IP address of a new device doesn't match any known IP addresses (home network, work network, mobile network, etc.), change your master password and make sure Two-step Login is enabled for your account. You should also Deactivate All Sessions from the **Settings** page of your Web Vault to force logout on all devices. If you think your Vault items might be compromised, you should change your passwords.

### Q: What is Bitwarden compliant with? What certifications do you have?

**A:** Bitwarden is compliant with the following policies:

- **GDPR.** Read more [here](https://bitwarden.com/privacy).
- **CCPA.** Read more [here](https://bitwarden.com/compliance).
- **HIPAA.** Read more [here](https://bitwarden.com/blog/post/why-use-a-hippa-compliant-password-manager/).
- **SOC 2 Type 2.** Read more [here](https://bitwarden.com/blog/post/bitwarden-achieves-soc-2-certification/).
- **SOC 3.** Read more [here](https://bitwarden.com/blog/post/bitwarden-achieves-soc-2-certification/).

For more information, please visit our [Security and Compliance](https://bitwarden.com/compliance) page.

### Q: What third-party scripts, libraries, and services are used?

**A:** Currently, we load third-party payment scripts from Stripe and PayPal on payment pages in the Web Vault. In the mobile app, the Firebase script is used for push notifications. The HockeyApp is used for crash reporting. Please note, Firebase and HockeyApp are removed completely from the F-Droid build if you are interested in using that option. Turning off push notifications on a Bitwarden server will disable using the push relay server if you want to self-host.

### Q: How do I require Two-step Login for my Organization?

**A:** Use an [Enterprise Policy]({% link _articles/organizations/policies.md %}), included with an Enterprise Organization subscription. You can also enable Duo MFA integration to enforce 2FA/MFA for your Organization. For more information, see [Two-step Login via Duo]({% link _articles/two-step-login/setup-two-step-login-duo.md %}).

### Q: What are the certificate options for a self-hosted instance of Bitwarden?

**A:** See [Certificate Options]({% link _articles/hosting/certificates.md %}) for a complete list and instructions.

### Questions Regarding Specific Client Apps

#### Q: Are Electron apps safe?

**A:** An often shared article suggests a flaw with Electron apps, however the referenced attack requires a user to have a compromised machine, which of course would allow a malicious attacker to compromise data on that machine. As long as you have no reason to believe the device you are using has been compromised, your data is safe.

#### Q: Are Browser Extensions safe?

Extensions are safe to use if they are developed correctly. Due to the nature of how browser extensions work there is always a chance for a bug to arise. We take extreme care and caution when we are developing our extensions and add-ons, we keep our eyes and ears out for anything going on in the industry, and we conduct security audits to keep many eyes on everything.

### Q: What is the Browser Extension asking permission for?

**A:** On installation, the Browser Extension will ask permission to access your clipboard in order to use the scheduled clipboard clear function (accessed in the **Options** menu).

When this **optional feature** is enabled, clipboard clear will clear any Bitwarden entries made by or filled on a configurable interval. Access to the clipboard allows Bitwarden to do this *without* removing a clipboard item not associated from the Bitwarden application by checking the last-copied item again the last-copied item from your Vault. Please note, this feature is **off by default**.
