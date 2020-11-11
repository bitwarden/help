---
layout: article
title: Vault timeout options
categories: [account-management]
featured: false
popular: false
tags: [account, vault, timeout, 2FA, two-step]
---

## Vault timeout

Vault timeout is an option within your Bitwarden client (mobile, web, desktop, browser, etc) that allows you to stop your vault from being accessed on that client after a configured event or time.

All clients will support basic time-bound options such as:
- Immediately
- 15 minutes
- 30 minutes
- 1 hour, etc.

Some clients may support specific functions, such as:
- On system idle
- On browser refresh, etc.

There are **two options** available to configure what occurs when those time limits or events occur.

 {% image /vault-timeout/timeout-options.png %}

## Lock

Locking your vault is the default behavior. This will maintain vault data on the device and will only prompt for your master password to decrypt and re-allow access to your vault. Two-factor authentication (2FA) is **not** required when unlocking.

This is the option most users prefer, as it is usually the fastest and does **not** require the Bitwarden client to be online or able to connect to a Bitwarden server.

## Log Out

Logging out is the most secure option. This completely removes the Bitwarden data from the device and requires reauthentication to access your vault.

This option will prompt a user for their email and master password, as well as any two-step authentication tokens that may be configured. The Bitwarden client **must** be online to accommodate access to your vault when this option is selected.
