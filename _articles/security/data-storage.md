---
layout: article
title: Storage
categories: [security]
featured: true
popular: false
tags: [cloud]
order: 06
redirect_from:
  - /article/where-is-data-stored-cloud/
  - /article/where-is-data-stored-computer/
  - /article/cloud-server-security/
---

This articles describes **where** Bitwarden stores your Vault Data and Administrative Data.

Bitwarden **always** encrypts and/or hashes your data on your local device before anything is sent to cloud servers for storage. **Bitwarden servers are only used for storing encrypted data.** For more information, see [Encryption]({% link _articles/security/what-encryption-is-used.md %}).

## On Bitwarden Servers

Bitwarden processes and stores all data securely in the [Microsoft Azure Cloud](https://en.wikipedia.org/wiki/Microsoft_Azure){:target="\_blank"} in the US using services that are managed by the team at Microsoft. Since Bitwarden only uses service offerings provided by Azure, there is no server infrastructure to manage and maintain. All uptime, scalability, security updates, and guarantees are backed by Microsoft and their cloud infrastructure. Review the [Microsoft Azure Compliance Offerings](https://azure.microsoft.com/en-us/resources/microsoft-azure-compliance-offerings/) documentation for more detail.

Don't trust Bitwarden Servers? You don't have to. Open source is beautiful. You can easily host the entire Bitwarden stack yourself. You control your data. Learn more [here]({% link _articles/hosting/install-on-premise.md %}).
## On your Local Machine

Data that is stored on your computer/device is also encrypted and only decrypted when you unlock your Vault. Decrypted data is stored **in memory** in the following locations and is **never written to persistent storage**:

#### Desktop App

- Windows
  - Standard Installation: `%AppData%\Bitwarden`
  - Microsoft Store Installation: `%LocalAppData%\Packages\8bitSolutionsLLC.bitwardendesktop_h4e712dmw3xyy\LocalCache\Roaming\Bitwarden`
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
  - Firefox: `%AppData%\Roaming\Mozilla\Firefox\Profiles\your_profile\storage\default\moz-extension+++[UUID]^userContextId=[integer]`
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
