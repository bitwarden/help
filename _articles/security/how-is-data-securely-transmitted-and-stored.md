---
layout: article
title: How is my data securely trasmitted and stored on bitwarden servers?
categories: [Security]
featured: true
popular: false
tags: [encryption]
---

bitwarden takes security very seriously when it comes to handling your sensitive data. Your data is never sent to the bitwarden cloud servers without first being encrypted on your local device using [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard){:target="blank"} 256 bit encryption. You can read more about bitwarden encryption [here]({% link _articles/security/what-encryption-is-used.md %}). bitwarden never stores meaningful data on its servers.

When your devices sync with the bitwarden cloud servers, a copy of the encrypted data is downloaded and securely stored to your local device. Whenever you use the bitwarden apps or extensions your data is decrypted only in memory as needed. Data is never stored in its decrypted form on the remote bitwarden servers or on your local device.

bitwarden servers are securely hosted and managed in the [Microsoft Azure cloud](https://en.wikipedia.org/wiki/Microsoft_Azure){:target="_blank"}.
