---
layout: article
title: Stored Data
categories: [security]
featured: true
popular: false
tags: []
redirect_from:
  - /article/what-information-is-encrypted/
---

Bitwarden takes privacy and transparency seriously. This article describes what data is stored by Bitwarden.

## Vault Data

All information associated with your stored Vault Data is protected with end-to-end encryption, including:

- Names of Folders, Collections, Items, & Attachments
- All Login information (including usernames, passwords, URIs, TOTPs, etc.)
- All Card information (including cardholder name, number, brand, expiration, security codes, etc.)
- All Identity information (including names, email, phone, passport numbers, license numbers, SSNs, addresses, etc.)
- All Secure Notes and notes connected to a Login, Card, or Identity
- All Custom Field name/value combinations

For more information about how Bitwarden encrypts your Vault data, see [What encryption is being used?]({% link _articles/security/what-encryption-is-used.md %})

## Personal Data

For all accounts, Bitwarden stores the following information unencrypted:

- Your Name

  (*Only if provided during account creation*)
- Your Email Address

  Your Email Address is used to for Email Verification, Account Administration, and communication between you and Bitwarden.
- A **Bitwarden-generated** device-specific GUID (sometimes called a *Device ID*)

  This GUID is used to alert you when a new device logs into your Vault.

For Organizations, Bitwarden stores the following information unencrypted:

- Equivalent Domains
- Organization Name
- Organization Business Name
- Organization Billing Email Address
- Collection External IDs
- Group Names and External IDs

For more information about Cloud data storage, see [Where is my data stored in the cloud?]({% link _articles/security/where-is-data-stored-cloud.md %})
