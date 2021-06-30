---
layout: article
title: Import & Export FAQs
categories: [import-export]
featured: true
popular: false
hidden: false
tags: []
order: 10
---

This article contains Frequently Asked Questions (FAQs) regarding **Import &amp; Export**.

### Q: How do I import my data if I don’t see my service on the import options list?

**A:** If we don't have official support for the service you are using, manually condition a `.csv` or `.json` for import into Bitwarden. For more information about how to do this, see [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %}).

### Q: Can I import to Bitwarden from iCloud/Mac Keychain?

**A:** Currently, Apple does not provide an official way to export data from iCloud, Mac Keychain, or Safari.

Here are some third-party programs available to export this data:
- <https://gist.github.com/rmondello/b933231b1fcc83a7db0b>
- <https://github.com/lifepillar/CSVKeychain>

{% callout warning %}
**Disclaimer**: These 3rd party scripts/programs are unsupported by Bitwarden or Apple, and should be used at your own risk.
{% endcallout %}

Once exported from iCloud, Mac Keychain, or Safari, see [Import Data to your Vault]({% link _articles/importing/import-data.md %}).

### Q: How do I import items directly to Collections?

**A:** To import items directly to Collections, format your import as a Bitwarden `.csv` (for more information, see [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %})) and specify Collections to import each item to within the file.

### Q: How do I import file attachments to Bitwarden?

**A:** File Attachments must be manually migrated to your Bitwarden Vault, as they are currently not included in bulk import operations.

Please note that storage of File Attachments is available only for Premium users, including members of Paid Organizations (Families, Teams, or Enterprise).

### Q: Why did importing create duplicate Vault items?

**A:** Every import operation creates every new record as an item in your Vault, regardless of whether matching Vault items already exist in your Vault. Prior to import, we recommend either:

- Editing your import file to only include net-new Vault Items.
- Purging your Vault before an import operation.

  Personal Vaults can be purged from the **Settings** &rarr; **My Account** page. Organization Vaults can be purged from the **Organization Settings** &rarr; **My Organization** page.

### Q: What file formats does Bitwarden support for import?

  **A:** The following formats are supported out-of-the-box:

{% callout info %}
If your format is not listed below, manually [condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %}).
{% endcallout %}

  - [1Password (1pif)]({% link _articles/importing/import-from-1password.md %})
  - [1Password 6 &amp; 7 Windows (.sv)]({% link _articles/importing/import-from-1password.md %})
  - [1Password 6 &amp; 7 Mac (csv)]({% link _articles/importing/import-from-1password.md %})
  - Ascendo DataVault (csv)
  - Avast Passwords (csv)
  - Avast Passwords (json)
  - Avira (json)
  - BlackBerry Password Keeper (csv)
  - Blur (csv)
  - [Brave (csv)]({% link _articles/importing/import-from-chrome.md %})
  - Buttercup (csv)
  - [Chrome (csv)]({% link _articles/importing/import-from-chrome.md %})
  - Clipperz (html)
  - Codebook (csv)
  - Dashlane (json)
  - Encryptr (csv)
  - Enpass (csv)
  - Enpass (json)
  - [Firefox (csv)]({% link _articles/importing/import-from-firefox.md %})
  - F-Secure KEY (fsk)
  - GNOME Passwords and Keys/Seahorse (json)
  - Kaspersky Password Manager (txt)
  - KeePass 2 (xml)
  - KeePassX (csv)
  - Keeper (csv)
  - [LastPass (csv)]({% link _articles/importing/import-from-lastpass.md %})
  - LogMeOnce (csv)
  - Meldium (csv)
  - mSecure (csv)
  - Myki (csv)
  - [Microsoft Edge (Chromium) (csv)]({% link _articles/importing/import-from-chrome.md %})
  - Nordpass (csv)
  - [Opera (csv)]({% link _articles/importing/import-from-chrome.md %})
  - Padlock (csv)
  - Passbolt (csv)
  - PassKeep (csv)
  - Passman (json)
  - Passpack (csv)
  - Password Agent (csv)
  - Password Boss (json)
  - Password Dragon (xml)
  - Password Safe (xml)
  - PasswordWallet (txt)
  - RememBear (csv)
  - RoboForm (csv)
  - SafeInCloud (xml)
  - SaferPass (csv)
  - SecureSafe (csv)
  - SplashID (csv)
  - Sticky Password (xml)
  - True Key (csv)
  - Universal Password Manager (csv)
  - [Vivaldi (csv)]({% link _articles/importing/import-from-chrome.md %})
  - Yoti (csv)
  - Zoho Vault (csv)
