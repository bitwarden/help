---
layout: article
title: Account Fingerprint Phrase
categories: [security]
featured: false
popular: false
tags: [fingerprint]
order: 05
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
