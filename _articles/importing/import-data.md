---
layout: article
title: Import your data from another application
categories: [getting-started]
featured: true
popular: true
tags: [import]
---

You can very easily import your data from an array of different password manager applications. Bitwarden supports importing data into your individual account from the following sources:

- Bitwarden (csv)
- [1Password (1pif)]({% link _articles/importing/import-from-1password.md %})
- [1Password 6 &amp; 7 Windows (csv)]({% link _articles/importing/import-from-1password.md %})
- Ascendo DataVault (csv)
- Avira (json)
- Blur (csv)
- [Chrome (csv)]({% link _articles/importing/import-from-chrome.md %})
- Clipperz (html)
- Dashlane (csv)
- Enpass (csv)
- Firefox (csv)
- GNOME Passwords and Keys/Seahorse (json)
- KeePass 2 (xml)
- KeePassX (csv)
- Keeper (csv)
- [LastPass (csv)]({% link _articles/importing/import-from-lastpass.md %})
- Meldium (csv)
- mSecure (csv)
- [Opera (csv)]({% link _articles/importing/import-from-chrome.md %})
- Padlock (csv)
- Passbolt (csv)
- PassKeep (csv)
- Password Agent (csv)
- Password Boss (json)
- Password Dragon (xml)
- Password Safe (xml)
- RoboForm (csv)
- SafeInCloud (xml)
- SaferPass (csv)
- SplashID (csv)
- Sticky Password (xml)
- True Key (csv)
- Universal Password Manager (csv)
- [Vivaldi (csv)]({% link _articles/importing/import-from-chrome.md %})
- Zoho Vault (csv)

**Personal Accounts**

To import your data, log into the web vault at <https://vault.bitwarden.com> and navigate to **Tools** &rarr; **Import Data**. Instructions for importing from each source are available after selecting the desired file format from the dropdown menu.

**Organization Accounts**

You can also import data directly into an organization account for sharing. To import your data, log into the web vault at <https://vault.bitwarden.com> and navigate to your organization admin area. Then navigate to **Tools** &rarr; **Import Data**. Instructions for importing from each source are available after selecting the desired file format from the dropdown menu.

## Generic CSV Format (individual account)

You can manually condition a [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) file for your individual account import using the generic Bitwarden format. Create a UTF-8 encoded plaintext file with the following format:

```
folder,favorite,type,name,notes,fields,login_uri,login_username,login_password,login_totp
```

The above header must be the first line in the file. An example file may look like the following:

```
folder,favorite,type,name,notes,fields,login_uri,login_username,login_password,login_totp
Social,1,login,Twitter,,,twitter.com,me@example.com,password123,
,,login,EVGA,,,https://www.evga.com/support/login.asp,hello@bitwarden.com,fakepassword,TOTPSEED123
,,login,My Bank,Bank PIN is 1234,"PIN: 1234",https://www.wellsfargo.com/home.jhtml,john.smith,password123456,
,,note,My Note,"This is a secure note.",,,,,
```

[{% icon fa-download %} Download example](/files/bitwarden_export.csv)

When importing from this format, select the **Bitwarden (csv)** file format option from the dropdown menu.

## Generic CSV Format (organization account)

You can manually condition a [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) file for your organization account import using the generic Bitwarden format. The format is almost the same as the individual account format above, however, organizations have "collections" instead of a "folder" and no "favorite". Create a UTF-8 encoded plaintext file with the following format:

```
collections,type,name,notes,fields,login_uri,login_username,login_password,login_totp
```

The above header must be the first line in the file. An example file may look like the following:

```
collections,type,name,notes,fields,login_uri,login_username,login_password,login_totp
"Social,Marketing",login,Twitter,,,twitter.com,me@example.com,password123,
"Finance",login,My Bank,Bank PIN is 1234,"PIN: 1234",https://www.wellsfargo.com/home.jhtml,john.smith,password123456,
,login,EVGA,,,https://www.evga.com/support/login.asp,hello@bitwarden.com,fakepassword,TOTPSEED123
,note,My Note,"This is a secure note.",,,,,
```

[{% icon fa-download %} Download example](/files/bitwarden_export_org.csv)

When importing from this format, select the **Bitwarden (csv)** file format option from the dropdown menu.
