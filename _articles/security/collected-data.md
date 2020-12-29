---
layout: article
title: Collected Data
categories: [security]
featured: true
popular: false
tags: []
order: 01
redirect_from:
  - /article/what-information-is-encrypted/
---

Bitwarden takes privacy and transparency seriously. This article describes **what** data is collected by Bitwarden; [Vault Data](#vault-data) and [Administrative Data](#administrative-data).

{% callout success %}
We encourage you to review our [Privacy Policy](https://bitwarden.com/privacy){:target="\_blank"} for more information.
{% endcallout %}

## Vault Data

All Vault data is encrypted by Bitwarden before being stored anywhere. To learn how, see [Encryption]({% link _articles/security/what-encryption-is-used.md %}).

Vault data can only be decrypted using a key derived from your master password. Bitwarden is a zero knowledge solution, meaning you are the only party with access to your key and the ability to decrypt your Vault data.

Vault data includes:

- Names of Folders, Collections, Items, & Attachments
- All Login information (including usernames, passwords, URIs, TOTPs, etc.)
- All Card information (including cardholder name, number, brand, expiration, security codes, etc.)
- All Identity information (including names, email, phone, passport numbers, license numbers, SSNs, addresses, etc.)
- All Secure Notes and notes connected to a Login, Card, or Identity
- All Custom Field name/value combinations

## Administrative Data

Bitwarden collects personal information in connection with your account creation, usage of the Bitwarden Service and support, and payments for the Bitwarden Service. Bitwarden uses Administrative Data to provide the Bitwarden Service to you. We retain Administrative Data for as long as you are a customer of Bitwarden and as required by law. If you terminate your relationship with Bitwarden, we will delete your Personal Information in accordance with our data retention policies. Review our [Privacy Policy](https://bitwarden.com/privacy){:target="\_blank"} for more information.

These data include:

- Your Name (*Only if provided during account creation*).
- Your Email Address (used for Email Verification, Account Administration, and communication between you and Bitwarden).
- A **Bitwarden-generated** device-specific GUID (sometimes referred to as a *Device ID*, and used to alert you when a new device logs into your Vault.)

For Organizations, these data also include:

- Equivalent Domains
- Organization Name
- Organization Business Name
- Organization Billing Email Address
- Collection External IDs
- Group Names and External IDs
