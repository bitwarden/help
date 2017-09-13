---
layout: article
title: Where is my data stored on my computer/device?
categories: [security]
featured: true
popular: false
tags: []
---

You data is also automatically synced to our [cloud servers]({% link _articles/security/where-is-data-stored-cloud.md %}). In the event that you need to recover your data due to a device crash, simply reinstall the bitwarden application and log in and your data will be re-synced.

All sensitive data stored on your computer/device is encrypted. The data can be found in the following locations:

- Windows
  - Chrome Extension: `%AppData%\Local\Google\Chrome\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Firefox Extension: `%AppData%\Roaming\Mozilla\Firefox\Profiles\your_profile\browser-extension-data\{446900e4-71c2-419f-a6a7-df9c091e268b}`
  - Opera Extension: `%AppData%\Roaming\Opera Software\Opera Stable\Local Extension Settings\ccnckbpmaceehanjmeomladnmlffdjgn`
  - Vivaldi Extension: `%AppData%\Local\Vivaldi\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Brave Extension: `%AppData%\Roaming\brave\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Edge Extension: `%AppData%\Local\Packages\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\AC\MicrosoftEdge\Extensions\Storage`
- Linux
  - Chrome Extension: `~/.config/google-chrome/Default/Local Extension Settings/nngceckbapebfimnlniiiahkandclblb`
- Mac
  - Chrome Extension: `~/Library/Application Support/Google/Chrome/Default/Local App Settings/nngceckbapebfimnlniiiahkandclblb`
- iOS
  - App group for `group.com.8bit.bitwarden`
- Android
  - `/data/data/com.x8bit.bitwarden/`

