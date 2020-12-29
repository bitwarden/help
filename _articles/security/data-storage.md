---
layout: article
title: Storage
categories: [security]
featured: true
popular: false
tags: [cloud]
order: 03
redirect_from:
  - /article/where-is-data-stored-cloud/
  - /article/where-is-data-stored-computer/
  - /article/cloud-server-security/
---

This articles describes **where** Bitwarden stores your Vault Data and Administrative Data.

Bitwarden **always** encrypts and/or hashes your data on your local device before anything is sent to cloud servers for storage. **Bitwarden servers are only used for storing encrypted data.** For more information, see [Encryption]({% link _articles/security/what-encryption-is-used.md %}).

## On Bitwarden Servers

Data are securely stored after encryption in the [Microsoft Azure Cloud](https://azure.microsoft.com/en-us/overview){:target="_blank"} using the Microsoft SQL Server (MsSQL) service managed by the team at Microsoft. Bitwarden does not manage **any** server infrastructure or security directly. All data is backed up multiple times over using services provided by Microsoft Azure. Uptime, scalability, and security updates and guarantees are backed by Microsoft and their cloud infrastructure. Review the [Microsoft Azure Compliance Offerings](https://azure.microsoft.com/en-us/resources/microsoft-azure-compliance-offerings/) documentation for more detail.

Don't trust Bitwarden Servers? Host the entire Bitwarden stack yourself, learn how [here]({% link _articles/hosting/install-on-premise.md %}).

## On your Local Machine

Data that is stored on your computer/device is also encrypted and only decrypted when you unlock your Vault. Vault data can be found in the following locations based on the client application in use:

#### Desktop App

- Windows
  - Standard Installations &amp; Store: `%AppData%\Bitwarden`
  - Portable: `.\bitwarden-appdata`
- macOS
  - Standard Installations: `~/Library/Application Support/Bitwarden`
  - Mac App Store: `~/Library/Containers/com.bitwarden.desktop/Data/Library/Application Support/Bitwarden`
- Linux
  - Standard Installations: `~/.config/Bitwarden`
  - Snap: `~/snap/bitwarden/current/.config/Bitwarden`

{% callout success %}
You can override the storage location for your Bitwarden desktop application data by setting the `BITWARDEN_APPDATA_DIR` environment variable to an absolute path.
{% endcallout %}

#### Browser Extension

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

{% callout info %}
To enhance security, Firefox uses Universally Unique Identifiers (UUIDs) within extension storage folder names. In the address bar, navigate to `about:debugging#/runtime/this-firefox` to locate your Bitwarden extension UUID. Replace [UUID] with that UUID.

Firefox also allows users to customize where to store their profiles (and thus local Bitwarden extension data). The location specified above is the default.
{% endcallout %}

#### Mobile

- iOS: app group for `group.com.8bit.bitwarden`
- Android: `/data/data/com.x8bit.bitwarden/`

#### CLI

- Windows: `%AppData%\Bitwarden CLI`
- macOS: `~/Library/Application Support/Bitwarden CLI`
- Linux: `~/.config/Bitwarden CLI`

{% callout success %}
You can override the storage location for your Bitwarden CLI application data by setting the `BITWARDENCLI_APPDATA_DIR` environment variable to an absolute path.
{% endcallout %}
