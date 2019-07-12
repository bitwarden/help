---
layout: article
title: What is my account's fingerprint phrase?
categories: [features]
featured: false
popular: false
tags: [fingerprint]
---

Every Bitwarden user account has a public "fingerprint phrase" associated with it. Your account's fingerprint phrase never changes and is composed of five random english words that appear in a specific order.

**Example fingerprint phrase**

```
alligator-transfer-laziness-macaroni-blue
```

The fingerprint phrase is an important security feature that assists in uniquely and securely identifying a Bitwarden user account when important encryption-related operations are performed (such as sharing). For example, when adding a new user to an organization you should ask the user to verify their fingerprint phrase via email, over the phone, in person, etc. By verifying the fingerprint phrase with the user outside of Bitwarden you ensure that end-to-end encryption is securely initiated and that the Bitwarden server you are communicating with (and your connection) has not been maliciously tampered with. If you trust the server you are communicating with (and the connection that you are using), you can choose to ignore fingerprint phrase verification.

## Where do I find my fingerprint phrase?

You can find your account's fingerprint phrase using Bitwarden applications in the following locations:

- Web vault: Settings &rarr; My Account
- Desktop apps: Account &rarr; Fingerprint Phrase
- Browser extensions: Settings &rarr; Account &rarr; Fingerprint Phrase
- Mobile: Settings &rarr; Account &rarr; Fingerprint Phrase
- CLI: `bw get fingerprint me`
