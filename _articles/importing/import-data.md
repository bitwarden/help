---
layout: article
title: Import your data from another application
categories: [Getting Started]
featured: true
popular: true
tags: [import]
---

You can very easily import your data from an array of different password manager applications. bitwarden supports importing data from the following sources:

- bitwarden (csv)
- [1Password (1pif)]({% link _articles/importing/import-from-1password.md %})
- [1Password 6 Windows (csv)]({% link _articles/importing/import-from-1password.md %})
- Ascendo DataVault (csv)
- Avira (json)
- [Chrome (csv)]({% link _articles/importing/import-from-chrome.md %})
- Clipperz (html)
- Dashlane (csv)
- Enpass (csv)
- Firefox Password Exporter (xml)
- GNOME Passwords and Keys/Seahorse (json)
- KeePass 2 (xml)
- KeePassX (csv)
- Keeper (csv)
- [LastPass (csv)]({% link _articles/importing/import-from-lastpass.md %})
- Meldium (csv)
- mSecure (csv)
- [Opera (csv)]({% link _articles/importing/import-from-chrome.md %})
- Padlock (csv)
- PassKeep (csv)
- Password Boss (json)
- Password Dragon (xml)
- Password Safe (xml)
- RoboForm (html)
- SafeInCloud (xml)
- SaferPass (csv)
- SplashID (csv)
- Sticky Password (xml)
- True Key (csv)
- Universal Password Manager (csv)
- [Vivaldi (csv)]({% link _articles/importing/import-from-chrome.md %})
- Zoho Vault (csv)

To import your data, log into the web vault at <https://vault.bitwarden.com> and navigate to **Tools** > **Import Data**. Instructions for importing from each source are available after selecting the desired file format from the dropdown menu.

## Generic CSV Format

Alternatively you can manually condition a [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) file using the generic bitwarden format. Create a UTF-8 encoded plaintext file with the following format:

```
name,uri,username,password,notes,folder,favorite
```

The above header must be the first line in the file. An example file may look like the following:

```
name,uri,username,password,notes,folder,favorite
Twitter,https://twitter.com,hello@bitwarden.com,password123,,Social,1
EVGA,https://www.evga.com/support/login.asp,hello@bitwarden.com,fakepassword,,,
My Bank,https://www.wellsfargo.com/home.jhtml,john.smith,password123,Bank PIN is 1234,,
```

[{% icon fa-download %} Download example](/files/bitwarden_export.csv)

When importing from this format, select the **bitwarden (csv)** file format option from the dropdown menu.

