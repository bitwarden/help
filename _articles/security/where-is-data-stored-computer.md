---
layout: article
title: Where is my data stored on my computer/device?
categories: [security]
featured: true
popular: false
tags: []
---

Your data is also automatically synced to our [cloud servers]({% link _articles/security/where-is-data-stored-cloud.md %}). In the event that you need to recover your data due to a device crash, simply reinstall the Bitwarden application and log in and your data will be re-synced.

All sensitive data stored on your computer/device is encrypted. The data can be found in the following locations:

## Desktop

- Windows
  - Standard Installations &amp; Store: `%AppData%\Bitwarden`
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
  - Chrome: `%LocalAppData%\Google\Chrome\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Firefox: `%AppData%\Mozilla\Firefox\Profiles\your_profile\storage\default\moz-extension+++[UUID]^userContextId=[integer]`
  - Opera: `%AppData%\Opera Software\Opera Stable\Local Extension Settings\ccnckbpmaceehanjmeomladnmlffdjgn`
  - Vivaldi: `%LocalAppData%\Vivaldi\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Brave: `%LocalAppData%\BraveSoftware\Brave-browser\User Data\Default\Local Extension Settings\nngceckbapebfimnlniiiahkandclblb`
  - Edge: `%LocalAppData%\Microsoft\Edge\User Data\Default\Extensions\jbkfoedolllekgbhcbcoahefnbanhhlh`
- macOS
  - Chrome: `~/Library/Application Support/Google/Chrome/Default/Local Extension Settings/nngceckbapebfimnlniiiahkandclblb`
  - Firefox: `~/Library/Application Support/Firefox/Profiles/your_profile/storage/default/moz-extension+++[UUID]^userContextID=[integer]`
  - Safari: `~/Library/Safari/Databases`
  - Edge: `~/Library/Application Support/Microsoft Edge/Default/Extensions`
- Linux
  - Chrome: `~/.config/google-chrome/Default/Local Extension Settings/nngceckbapebfimnlniiiahkandclblb`
  - Firefox: `~/.mozilla/firefox/your_profile/storage/default/moz-extension+++[UUID]^userContextID=[integer]`

{% note %}
To enhance security, Firefox uses Universally Unique Identifiers (UUIDs) within extension storage folder names. Use the `about:debugging#/runtime/this-firefox` page (navigate from Firefox's address bar) to locate your Bitwarden extension UUID. Replace [UUID] with that UUID. Note also that Firefox allows users to customize where to store their profiles (and thus local Bitwarden extension data). The location specified above is the default.
{% endnote %}

## Mobile

- iOS: app group for `group.com.8bit.bitwarden`
- Android: `/data/data/com.x8bit.bitwarden/`

## CLI

- Windows: `%AppData%\Bitwarden CLI`
- macOS: `~/Library/Application Support/Bitwarden CLI`
- Linux: `~/.config/Bitwarden CLI`

{% tip %}
You can override the storage location for your Bitwarden CLI application data by setting the `BITWARDENCLI_APPDATA_DIR` environment variable to an absolute path.
{% endtip %}
