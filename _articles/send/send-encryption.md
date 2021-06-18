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

1. A new 128-bit secret key is generated for the Send.
2. Using HKDF-SHA256, a 512-bit encryption key is derived from the secret key.
3. The derived key is used to AES-256 encrypt the Send, including its file/text data and metadata (Name, Filename, Notes, etc.).

   {% callout success %}Any [password]({{site.baseurl}}/article/send-privacy/#send-passwords) used to protect a Send **is not involved in encryption** and decryption of a Send. Passwords are purely an authentication method, however password-protected Sends will be [blocked from decrypting](#send-decryption) until password authentication is successful.{% endcallout %}
4. The encrypted Send is uploaded to Bitwarden servers, including a unique Send ID that Bitwarden uses to [identify the Send for decryption](#send-decryption) but **not including** the encryption key.

## Send Decryption

Sends are decrypted by opening the [Send link]({% link _articles/send/receive-send.md %}), which are constructed from a unique Send ID and the derived encryption key:

`https://vault.bitwarden.com/#/send/send_id/encryption_key`

When you access a Send link:

1. The web browser requests a Send access page from Bitwarden servers.
2. Bitwarden servers return the Send access page as a Web Vault client.
3. The Web Vault client locally parses the URL fragment containing the Send ID and encryption key.
4. The Web Vault client requests data from the server based on the parsed Send ID. The encryption key is **never** included in network requests.
5. Bitwarden servers return the encrypted Send to the Web Vault client.
6. The Web Vault client locally decrypts the Send using the encryption key.

   {% callout success %}If your send is [password-protected]({{site.baseurl}}/article/send-privacy/#send-passwords), decryption of the Send will be **blocked by authentication**. The server validates the password and only returns the Send if the password is correct. This should not be confused with the password being used for decryption.{% endcallout %}

## Send Security

When transmitting a Bitwarden Send link, there are optional steps you can take for additional security:

1. Add a password to the Send and share the password via a separate channel.
2. Send the link without the key (everything before the last forward slash) and send the key via a separate channel.
3. Leverage both of the above options.

{%callout success%}

When reassembling a Send URL, be sure to include both the Send ID and the encryption key.

Example: `https://vault.bitwarden.com/#/send/send_id/encryption_key`
{%endcallout%}
