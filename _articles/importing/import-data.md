---
layout: article
title: Import Data to your Vault
categories: [import-export]
featured: true
popular: true
tags: [import]
order: 01
---

Bitwarden provides a data import tool for easy migration from any password management solution to your personal Vault or Organization Vault (see [Import Data to an Organization]({% link _articles/organizations/import-to-org.md %})).

You can also use the data import tool to import from one Bitwarden Vault to another, or to import a backup [Encrypted Export]({% link _articles/importing/encrypted-export.md %}).

Bitwarden supports a large array of formats for import, including those used by the most popular password management solutions:

- [Import from LastPass]({% link _articles/importing/import-from-lastpass.md %})
- [Import from 1Password]({% link _articles/importing/import-from-1password.md %})
- [Import from Firefox]({% link _articles/importing/import-from-firefox.md %})
- [Import from Google Chrome]({% link _articles/importing/import-from-chrome.md %})

For a full list of supported formats, see [Supported Formats](#supported-formats).

## Import to your Personal Vault

To import your data into a personal Vault:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select **Import Data** from the left Tools menu.
4. Select the format of your file to import from the dropdown menu.

   {% callout success%}If you're importing an [Encrypted Export]({% link _articles/importing/encrypted-export.md %}), select `.json` as you would if it were plaintext. A handler will determine that the file is encrypted and decrypt using your [account encryption key](https://bitwarden.com/help/article//change-your-master-password/#rotating-your-accounts-encryption-key).{% endcallout %}
5. Select the **Browse** button and add your file.
6. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}

## Length-related Import Errors

The following error messages, typically received when attempting to import a `.csv`, indicate that a field in your import file exceeds the allowed **encrypted** character limit for that field type:

{% image /importing/ciphererrors.png Cipher errors in the Web Vault%}

These error messages contain 3 pieces of pertinent data:
- `Ciphers[X]` indicates the index number where the offending item is located.
- `The field <field>` indicates the field name which is causing the offense.
- `length of <limit> characters` indicates the character limit allowed for that field.

   {% callout note %}On import to Bitwarden, the character count of any given field is increased due to encryption, meaning that an 8000-character `note` field in your `.csv` will scale to 10,000+ characters when it comes into contact with Bitwarden, triggering this error. As a rule of thumb, character counts will grow between 30-50% when encrypted.{% endcallout %}

To solve this issue:

1. Open the `.csv` file you're attempting to import in a text editor or spreadsheet program.
2. Locate the offending item at `index[X]`. The value of `X` references a `.csv` index number, so depending on the program you use to edit your file it may not map perfectly to a spreadsheet Row or Line number.

    In many cases, you'll need to adjust for `.csv` header rows, which are not counted in many spreadsheet programs. It can also help to use field name (`yyyy`) and perceived character length as context clues.

   {% callout success %}If you've having trouble locating the offending item using the data provided in the error, it may help to focus first on notes as these are frequently the cause of this error.{% endcallout %}
3. Remove the offending item from your import file, or reduce the character count. When reducing the character count, remember that limits are placed on **encrypted** counts, not pre-encryption counts.  As a rule of thumb, character counts will grow between 30-50% when Bitwarden attempts to encrypt a field on import.

## Supported Formats

The following formats are supported out-of-the-box:

{% callout info %}
If your format is not listed below, manually [condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %}).
{% endcallout %}

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
