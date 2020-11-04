---
layout: article
title: Import Items to an Organization
categories: [organizations]
featured: true
popular: false
tags: [organizations, import]
order: 08
---

Importing data directly into a Bitwarden Organization is a simple procedure:

1. Open your Organization and navigate to the **Tools** tab.
2. From the left menu, select the **Import Data** option.
3. From the first dropdown, **select the format of the import file**.

   Any option that you select will populate instructions for how to obtain the file for import. This article will focus on importing generic `.CSV` files. For information on other file formats, see:
   - [Import your data from 1Password](https://bitwarden.com/help/article/import-from-1password/)
   - [Import your data from Firefox](https://bitwarden.com/help/article/import-from-firefox/)
   - [Import your data from Google Chrome](https://bitwarden.com/help/article/import-from-chrome/)
   - [Import your data from Lastpass](https://bitwarden.com/help/article/import-from-lastpass/)

   When importing a generic `.CSV`, create a UTF-8 encoded plaintext file with the following header to set the format:

   ```
   collections,type,name,notes,fields,login_uri,login_username,login_password,login_totp
   ```
   For example,
   ```
   collections,type,name,notes,fields,login_uri,login_username,login_password,login_totp
   "Social,Marketing",login,Twitter,,,twitter.com,me@example.com,password123,
   "Finance",login,My Bank,Bank PIN is 1234,"PIN: 1234",https://www.wellsfargo.com/home.jhtml,john.smith,password123456,
   ,login,EVGA,,,https://www.evga.com/support/login.asp,hello@bitwarden.com,fakepassword,TOTPSEED123
   ,note,My Note,"This is a secure note.",,,,,
   ```
4. Select the **Browse...** button and select the file for import from your file navigator, or paste the contents of the file for import into the provided text input field.
5. Select the **Import Data** button.

## Troubleshooting

If you get the following error:

`Ciphers[X].Login: The field **yyyy** exceeds the maximum encrypted value of **zzzz** characters.`

An item in your `.CSV` exceeds the size limit allowed for items stored in the Bitwarden Vault. Remove the offending item from your file for import, or reduce its size. You can open the `.CSV` in a text editor or spreadsheet program for easy editing, and locate the offending item at `index[X]` as referenced in the error message.
