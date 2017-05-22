---
layout: article
title: Where is my data stored on my computer/device?
categories: [Security]
featured: true
popular: false
tags: []
---

Your encrypted data can be found on your computer/device in the following locations:

- Windows
  - Chrome Extension: `%AppData%\Local\Google\Chrome\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
- Linux
  - Chrome Extension: `~/.config/google-chrome/Default/Local Extension Settings/nngceckbapebfimnlniiiahkandclblb`
- Mac
  - Chrome Extension: `~/Library/Application Support/Google/Chrome/Default/Local App Settings/nngceckbapebfimnlniiiahkandclblb`
- iOS
  - App group for `group.com.8bit.bitwarden`
- Android
  - `/data/data/com.x8bit.bitwarden/`

You data is also automatically synced to our [cloud servers][cloud]. In the event that you need to recover your data due to
a device crash, simply reinstall the bitwarden application and log in and your data will be re-synced.

[cloud]: https://help.bitwarden.com/security/where-is-data-stored-cloud/
