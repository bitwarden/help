---
layout: article
title: Encryption
categories: [security]
featured: true
popular: false
tags: [encryption]
order: 03
redirect_from:
  - /article/password-salt-hash/
  - /article/how-is-data-securely-transmitted-and-stored/
---

Bitwarden uses [AES-CBC](#aes-cbc) 256-bit encryption for your Vault data, and [PBKDF2](#pbkdf2) SHA-256 to derive your encryption key.

Bitwarden **always** encrypts and/or hashes your data on your local device before anything is sent to cloud servers for storage. **Bitwarden servers are only used for storing encrypted data.** For more information, see [Storage]({% link _articles/security/data-storage.md %}).

Vault data can only be decrypted using the key derived from your master password. Bitwarden is a zero knowledge solution, meaning you are the only party with access to your key and the ability to decrypt your Vault data.

{% callout success %}
We encourage you to visit our [Interactive Cryptography Page](https://bitwarden.com/help/crypto.html){:target="\_blank"} to see for yourself how Bitwarden encrypts your data.

If you'd like to learn more about how these encryption keys are used to protect your Vault, you can also check out our [Security Whitepaper](https://bitwarden.com/images/resources/security-white-paper-download.pdf).
{% endcallout %}

## AES-CBC

[AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard){:target="\_blank"}-CBC [(Cipher Block Chaining)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_(CBC)){:target="blank"}, used to encrypt Vault data, is a standard in cryptography and used by the US government and other government agencies around the world for protecting top-secret data. With proper implementation and a strong encryption key (your master password), AES is considered unbreakable.

## PBKDF2

[PBKDF2][pbkdf2]{:target="blank"} SHA-256 is used to derive the encryption key from your master password. Bitwarden [salts and hashes](https://www.okta.com/blog/2019/03/what-are-salted-passwords-and-password-hashing/){:target="\_blank"} your master password with your email address **locally**, before transmission to our servers. Once a Bitwarden server receives the hashed password, it is salted again with a cryptographically secure random value, hashed again, and stored in our database.

The default iteration count used with PBKDF2 is 100,001 iterations on the client (*client-side iteration count is configurable from your account settings*), and then an additional 100,000 iterations when stored on our servers (for a total of 200,001 iterations by default). The Organization key is shared via [RSA-2048][rsa]{:target="blank"}.

The utilized hash functions are one-way hashes, meaning they **cannot be reverse engineered** by anyone at Bitwarden to reveal your master password. Even if Bitwarden were to be hacked, there would be no method by which your master password could be obtained.

## Invoked Crypto Libraries

**Bitwarden does not write any cryptographic code.** Bitwarden only invokes crypto from popular and reputable crypto libraries that are written and maintained by cryptography experts. The following crypto libraries are used:

- JavaScript (Web Vault, Browser Extension, Desktop, and CLI)
  - [Web Crypto][webcrypto]{:target="blank"}
  - [Node.js Crypto][nodecrypto]{:target="blank"}
  - [Forge][forge]{:target="blank"}
- C# (Mobile)
  - CommonCrypto (iOS, Apple)
  - Javax.Crypto (Android, Oracle)
  - [BouncyCastle][bouncy]{:target="blank"} (Android)

[aes]: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard
[pbkdf2]: https://en.wikipedia.org/wiki/PBKDF2
[rsa]: https://en.wikipedia.org/wiki/RSA_numbers#RSA-2048
[forge]: https://github.com/digitalbazaar/forge
[webcrypto]: https://w3c.github.io/webcrypto/Overview.html
[bouncy]: http://www.bouncycastle.org/csharp/
[nodecrypto]: https://nodejs.org/api/crypto.html
