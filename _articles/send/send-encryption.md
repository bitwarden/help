---
layout: article
title: Send Encryption
categories: [send]
featured: true
popular: false
tags: [bitwarden send, send, about send, ephemeral sharing]
order: 07
---

## Send Encryption

Sends are a secure and ephemeral mechanism for transmitting sensitive information to anyone, include plaintext and files. As the [About Send]({% link _articles/send/about-send.md %}) article notes, Sends are **end-to-end encrypted**, meaning that encryption (*described below*) and decryption occur client-side. When you create a Send:

1. A new 16-byte secret key is generated for the Send.
2. Using HKDF, the secret key is salted and hashed with SHA-256 to derive an encryption key.
3. The derived key is used to AES-256 encrypt the Send, including its file/text data and metadata (Name, Filename, Notes, etc.).

   {% callout success %}Any [password]({{site.baseurl}}/article/send-privacy/#send-passwords) used to protect a Send **is not involved in encryption** and decryption of a Send. Passwords are purely an authentication method, however password-protected Sends will be [blocked from decrypting](#send-decryption) until password authentication is successful.{% endcallout %}
4. The encrypted Send is uploaded to Bitwarden servers, including a unique Send ID that Bitwarden uses to [identify the Send for decryption](#send-decryption) but **not including** the encryption key.

## Send Decryption

Sends are decrypted by opening the [Send link]({% link _articles/send/receive-send.md %}), which are constructed from a unique Send ID and the derived encryption key:

`https://vault.bitwarden.com/#/send/send_id/encryption_key`

When you access a Send link:

1. The client requests a Send access page from Bitwarden servers.
2. Bitwarden servers return the Send access page to the client.
3. The Send access page locally parses the URL fragment containing the Send ID and encryption key.
4. The client requests data from the server based on the parsed Send ID. The encryption key is **never** included in network requests.
5. Bitwarden servers return the encrypted Send to the client.
6. The Send access page locally decrypts the Send using the encryption key.

   {% callout success %}If your send is [password-protected]({{site.baseurl}}/article/send-privacy/#send-passwords), decryption of the Send will be **blocked by authentication**, however this should not be confused with the password being used for decryption.{% endcallout %}
