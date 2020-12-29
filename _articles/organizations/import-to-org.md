---
layout: article
title: Import Data to an Organization
categories: [organizations]
featured: true
popular: false
tags: [organizations, import]
order: 08
---

Bitwarden provides a data import tool for easy migration from any password management solution to your Organization Vault. You may also import data directly to your personal Vault, for more information see [Import Data to your Vault]({% link _articles/importing/import-data.md %}).

Bitwarden supports a large array of import formats, including those used by the most popular password management solutions:

- [Import from LastPass]({% link _articles/importing/import-from-lastpass.md %})
- [Import from 1Password]({% link _articles/importing/import-from-1password.md %})
- [Import from Firefox]({% link _articles/importing/import-from-firefox.md %})
- [Import from Google Chrome]({% link _articles/importing/import-from-chrome.md %})

For a full list of supported formats, see [Supported Formats](https://bitwarden.com/help/article/import-to-org/#supported-formats).

{% callout info %}
If you're importing from one Bitwarden Vault to another Bitwarden Vault, or if your format is not listed, [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md#for-your-organization %}).
{% endcallout %}

## Import to your Organization

To import data to an Organization Vault:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Tools** tab and select **Import Data** from the left menu.
3. Select the format of your file to import from the dropdown menu.
4. Select the **Browse...** button and add your file.
5. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}

## Troubleshooting Import Errors

If you get the following error:

`Ciphers[X].Login: The field **yyyy** exceeds the maximum encrypted value of **zzzz** characters.`

An item in your `.CSV` exceeds the size limit allowed for items stored in the Bitwarden Vault. Remove the offending item from your file for import, or reduce its size. You can open the `.CSV` in a text editor or spreadsheet program for easy editing, and locate the offending item at `index[X]` as referenced in the error message.

## Supported Formats

The following formats are supported out-of-the-box:

- [1Password (1pif)]({% link _articles/importing/import-from-1password.md %})
- [1Password 6 &amp; 7 Windows (.sv)]({% link _articles/importing/import-from-1password.md %})
- [1Password 6 &amp; 7 Mac (csv)]({% link _articles/importing/import-from-1password.md %})
- Ascendo DataVault (csv)
- Avast Passwords (csv)
- Avira (json)
- BlackBerry Password Keeper (csv)
- Blur (csv)
- [Brave (csv)]({% link _articles/importing/import-from-chrome.md %})
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
