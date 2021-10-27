---
layout: article
title: Import & Export FAQs
categories: [import-export]
featured: true
popular: false
hidden: false
tags: []
order: "10"
description: "This article contains FAQs regarding importing and exporting data to and from the Bitwarden password manager."
---

This article contains Frequently Asked Questions (FAQs) regarding **Import &amp; Export**.

### Q: How do I import my data if I don’t see my service on the import options list?

**A:** If we don't have official support for the service you are using, manually condition a `.csv` or `.json` for import into Bitwarden. For more information about how to do this, see [Condition a Bitwarden .csv or .json]({{site.baseurl}}/article/condition-bitwarden-import/).

### Q: Can I import to Bitwarden from iCloud/Mac Keychain/Safari?

**A:** As of Safari 15.0, you can export passwords from Safari in a `.csv` file. Once you do, [condition your .csv]({{site.baseurl}}/article/condition-bitwarden-import/) to meet Bitwarden's format and [import your data]({{site.baseurl/article/import-data/}}).

### Q: How do I import items directly to Collections?

**A:** To import items directly to Collections, format your import as a Bitwarden `.csv` (for more information, see [Condition a Bitwarden .csv or .json]({{site.baseurl}}/article/condition-bitwarden-import/)) and specify Collections to import each item to within the file.

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
If your format is not listed below, manually [condition a Bitwarden .csv or .json]({{site.baseurl}}/article/condition-bitwarden-import/).
{% endcallout %}

  - [1Password (1pif)]({{site.baseurl}}/article/import-from-1password/)
  - [1Password 6 &amp; 7 Windows (.sv)]({{site.baseurl}}/article/import-from-1password/)
  - [1Password 6 &amp; 7 Mac (csv)]({{site.baseurl}}/article/import-from-1password/)
  - Ascendo DataVault (csv)
  - Avast Passwords (csv)
  - Avast Passwords (json)
  - Avira (json)
  - BlackBerry Password Keeper (csv)
  - Blur (csv)
  - [Brave (csv)]({{site.baseurl}}/article/import-from-chrome/)
  - Buttercup (csv)
  - [Chrome (csv)]({{site.baseurl}}/article/import-from-chrome/)
  - Clipperz (html)
  - Codebook (csv)
  - Dashlane (json)
  - Encryptr (csv)
  - Enpass (csv)
  - Enpass (json)
  - [Firefox (csv)]({{site.baseurl}}/article/import-from-firefox/)
  - F-Secure KEY (fsk)
  - GNOME Passwords and Keys/Seahorse (json)
  - Kaspersky Password Manager (txt)
  - KeePass 2 (xml)
  - KeePassX (csv)
  - Keeper (csv)
  - [LastPass (csv)]({{site.baseurl}}/article/import-from-lastpass/)
  - LogMeOnce (csv)
  - Meldium (csv)
  - mSecure (csv)
  - Myki (csv)
  - [Microsoft Edge (Chromium) (csv)]({{site.baseurl}}/article/import-from-chrome/)
  - Nordpass (csv)
  - [Opera (csv)]({{site.baseurl}}/article/import-from-chrome/)
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
  - [Vivaldi (csv)]({{site.baseurl}}/article/import-from-chrome/)
  - Yoti (csv)
  - Zoho Vault (csv)
