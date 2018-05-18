---
layout: article
title: Where is my data stored on my computer/device?
categories: [security]
featured: true
popular: false
tags: []
---

You data is also automatically synced to our [cloud servers]({% link _articles/security/where-is-data-stored-cloud.md %}). In the event that you need to recover your data due to a device crash, simply reinstall the Bitwarden application and log in and your data will be re-synced.

All sensitive data stored on your computer/device is encrypted. The data can be found in the following locations:

## Desktop

- Windows
  - Standard Installations &amp; Store: `%AppData%\Roaming\Bitwarden`
  - Portable: `.\bitwarden-appdata`
- macOS
  - Standard Installations: `~/Library/Application Support/Bitwarden`
  - Mac App Store: `~/Library/Containers/com.bitwarden.desktop/Data/Library/Application Support/Bitwarden`
- Linux
  - Standard Installations: `~/.config/Bitwarden`
  - Snap: `~/snap/bitwarden/current/.config/Bitwarden`

{% tip %}
You can override the storage location for your Bitwarden desktop application data by setting the `BITWARDEN_APPDATA_DIR` environment variable to an absolute path.
{% endtip %}

## Browser Extension

- Windows
  - Chrome: `%AppData%\Local\Google\Chrome\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Firefox: `%AppData%\Roaming\Mozilla\Firefox\Profiles\your_profile\browser-extension-data\{446900e4-71c2-419f-a6a7-df9c091e268b}`
  - Opera: `%AppData%\Roaming\Opera Software\Opera Stable\Local Extension Settings\ccnckbpmaceehanjmeomladnmlffdjgn`
  - Vivaldi: `%AppData%\Local\Vivaldi\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Brave: `%AppData%\Roaming\brave\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Edge: `%AppData%\Local\Packages\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\AC\MicrosoftEdge\Extensions\Storage`
- Linux
  - Chrome: `~/.config/google-chrome/Default/Local Extension Settings/nngceckbapebfimnlniiiahkandclblb`
- macOS
  - Chrome: `~/Library/Application Support/Google/Chrome/Default/Local App Settings/nngceckbapebfimnlniiiahkandclblb`
  - Safari: `~/Library/Safari/Databases`

## Mobile

- iOS: app group for `group.com.8bit.bitwarden`
- Android: `/data/data/com.x8bit.bitwarden/`

## CLI

- Windows: `%AppData%\Roaming\Bitwarden CLI`
- macOS: `~/Library/Application Support/Bitwarden CLI`
- Linux: `~/.config/Bitwarden CLI`

{% tip %}
You can override the storage location for your Bitwarden CLI application data by setting the `BITWARDENCLI_APPDATA_DIR` environment variable to an absolute path.
{% endtip %}
