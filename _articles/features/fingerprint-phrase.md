---
layout: article
title: Account Fingerprint Phrase
categories: [security]
featured: false
popular: false
tags: [fingerprint]
order: "05"
description: "Your fingerprint phrase in the Bitwarden password manager uniquely and securely identifies a user account when encryption-related operations and performed."
---

Each Bitwarden account has a public "fingerprint phrase" associated with it. Your account's fingerprint phrase is permanent and composed of five random english words that appear in a specific order, for example:

```
alligator-transfer-laziness-macaroni-blue
```

## What is my fingerprint phrase used for?

Your fingerprint phrase is an important security feature that assists in uniquely and securely identifying a Bitwarden user account when important encryption-related operations are performed (such as sharing).

Some Bitwarden procedures (e.g. adding a new user to an Organization, enabling Biometric Unlock for Browser Extensions) may ask you to verify that the fingerprint phrase matches your own or another user's.

Validating fingerprint phrases ensures that end-to-end encryption is securely initiated and that the Bitwarden server you are communicating with (and your connection) has not been maliciously tampered with.

## Where can I find my fingerprint phrase?

You can find your account's fingerprint phrase from any Bitwarden client application:

- **Web Vault**: Settings &rarr; My Account
- **Desktop Apps**: Account &rarr; Fingerprint Phrase
- **Browser Extensions**: Settings &rarr; Account &rarr; Fingerprint Phrase
- **Mobile Apps**: Settings &rarr; Account &rarr; Fingerprint Phrase
- **CLI**: Using the command `bw get fingerprint me`

## Do I need to write down my fingerprint phrase?

Not knowing your fingerprint phrase will never result in you being locked out of your Vault. As a result, it's not critical to write down and store your fingerprint phrase in a secure location, however some users may choose to do so.

{% callout success %}
[Recovery Codes]({{site.baseurl}}/article/two-step-recovery-code/), on the other hand, are used for Two-step Login and should **always** be stored outside of Bitwarden in a way that makes sense for you. This will ensure that you're not locked out of your account in the event that you [lose your Two-step Login secondary device]({{site.baseurl}}/article/lost-two-step-device/).
{% endcallout %}
