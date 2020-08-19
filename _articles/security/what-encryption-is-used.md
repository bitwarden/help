---
layout: article
title: What encryption is being used?
categories: [security]
featured: true
popular: false
tags: [encryption]
---

Bitwarden uses [AES-CBC][aes]{:target="blank"} 256 bit encryption as well as [PBKDF2][pbkdf2]{:target="blank"} to secure your data.

[AES-CBC][aes]{:target="blank"} is a standard in cryptography and used by the US government and other government agencies around the world for protecting top secret data. With proper implementation and a strong encryption key (your master password), AES is considered unbreakable.

[PBKDF2][pbkdf2]{:target="blank"} SHA-256 is used to derive the encryption key from your master password. This key is then salted and hashed. The default iteration count used with PBKDF2 is 100,001 iterations on the client (this client-side iteration count is configurable from your account settings), and then an additional 100,000 iterations when stored on our servers (for a total of 200,001 iterations by default). Organization and Collection keys are encrypted via [RSA-2048][rsa]{:target="blank"}.

Bitwarden does not write any cryptographic code. Bitwarden only invokes crypto from popular and reputable crypto libraries that are written and maintained by cryptography experts. The following crypto libraries are used:

- JavaScript (web, browser extension, desktop, and CLI vaults)
  - [Web Crypto][webcrypto]{:target="blank"}
  - [Node.js Crypto][nodecrypto]{:target="blank"}
  - [Forge][forge]{:target="blank"}
- C# (mobile vault)
  - CommonCrypto (iOS, Apple)
  - Javax.Crypto (Android, Oracle)
  - [BouncyCastle][bouncy]{:target="blank"} (Android)

Bitwarden **always** encrypts and/or hashes your data on your local device before it is ever sent to the cloud servers for syncing. The Bitwarden servers are only used for storing encrypted data. It is not possible to get your unencrypted data from the Bitwarden cloud servers.

For examples of how this encryption is used, please visit our [cryptography example page.](https://bitwarden.com/help/crypto.html)

[aes]: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard
[pbkdf2]: https://en.wikipedia.org/wiki/PBKDF2
[rsa]: https://en.wikipedia.org/wiki/RSA_numbers#RSA-2048
[forge]: https://github.com/digitalbazaar/forge
[webcrypto]: https://w3c.github.io/webcrypto/Overview.html
[bouncy]: http://www.bouncycastle.org/csharp/
[nodecrypto]: https://nodejs.org/api/crypto.html
