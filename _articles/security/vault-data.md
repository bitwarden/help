---
layout: article
title: Vault Data
categories: [security]
featured: true
popular: false
tags: []
order: 01
redirect_from:
  - /article/what-information-is-encrypted/
---

All Vault data is encrypted by Bitwarden before being stored anywhere. To learn how, see [Encryption]({% link _articles/security/what-encryption-is-used.md %}).

Vault data can only be decrypted using a key derived from your master password. Bitwarden is a zero knowledge solution, meaning you are the only party with access to your key and the ability to decrypt your Vault data.

{% callout success %}
We encourage you to review our [Privacy Policy](https://bitwarden.com/privacy){:target="\_blank"} for more information.
{% endcallout %}

Vault data that is encrypted includes, but is not limited to:

- Names of Folders, Collections, Items, & Attachments
- All Login information (including usernames, passwords, URIs, TOTPs, etc.)
- All Card information (including cardholder name, number, brand, expiration, security codes, etc.)
- All Identity information (including names, email, phone, passport numbers, license numbers, SSNs, addresses, etc.)
- All Secure Notes and notes connected to a Login, Card, or Identity
- All Custom Field name/value combinations
