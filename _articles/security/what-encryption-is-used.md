---
layout: article
title: What encryption is being used?
categories: [Security]
featured: true
popular: false
tags: [encryption]
---

bitwarden uses [AES][aes] 256 bit encryption as well as [PBKDF2][pbkdf2] to secure your data.

[AES][aes] is used by the US government and other government agencies around the world for protecting top secret data. With
proper implementation and a strong encryption key (your master password), AES is considered unbreakable.

[PBKDF2][pbkdf2] is used to derive the encryption key from your master password. This key is then salted and hashed.

bitwarden does not write any crypto code. bitwarden only invokes crypto from popular and reputable crypto libraries that are
written and maintained by cryptography experts. The following crypto libraries are used:

- Javascript (web and browser extension vaults)
  - [Forge][forge]
  - [Web Crypto][webcrypto]
- C# (mobile vault)
  - CommonCrypto (iOS, Apple)
  - Javax.Crypto (Android, Oracle)
  - [BouncyCastle][bouncy] (Android)

bitwarden **always** encrypts and/or hashes your data on your local device before it is ever sent to the cloud servers for
syncing. The bitwarden servers are only used for storing encrypted data. It is not possible to get your unencrypted data from
the bitwarden cloud servers.

[aes]: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard
[pbkdf2]: https://en.wikipedia.org/wiki/PBKDF2
[forge]: https://github.com/digitalbazaar/forge
[webcrypto]: https://w3c.github.io/webcrypto/Overview.html
[bouncy]: http://www.bouncycastle.org/csharp/
