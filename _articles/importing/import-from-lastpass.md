---
layout: article
title: Import Data from LastPass
categories: [import-export]
featured: true
popular: true
tags: [import, lastpass]
order: 02
---

Use this article for help exporting data from LastPass and importing into Bitwarden.

## Export from LastPass

Complete the following steps to export data from the [LastPass Web Vault](https://lastpass.com/){:target="\_blank"}:

1. Select the {% icon fa-rocket %} **Advanced Options** option on the left sidebar:

   {% image /importing/lastpassadvancedoptions.png Export from Web Vault %}
2. From the Manage Your Vault section, select the **Export** option.
3. Enter your Master Password to validate the export attempt.

   Depending on your browser, your Vault data will either be automatically saved as a `.csv` or printed to the screen in a `.csv` format:

   {% image lastpass-copy.png LastPass Export %}
4. If your Vault data was printed to the screen, highlight the text and copy and paste it into a new `export.csv` file.

{% callout warning %}
**Some users have reported a bug** which changes special characters in your passwords (`&`, `<`, `>`, etc.) to their HTML-encoded values (for example, `&amp;`) in the printed export.

If you observe this bug in your exported data, use a text editor to find and replace all altered values before importing into Bitwarden.
{% endcallout %}

### Export with Form Fills

**Exports from the Web Vault will not include form fills.** To export form fill data from LastPass, you must do so from the Browser Extension:

1. In the Browser Extension, navigate to **Account Options** &rarr; **Advanced** &rarr; **Export** &rarr; **Form Fills**:

   {% image /importing/lp-be.png Export from Browser Extension %}
2. Enter your Master Password to validate the export attempt.

   Depending on your browser, your Vault data will either be automatically saved as a `.csv` or printed to the screen in a `.csv` format:
   {% image lastpass-copy.png LastPass Export %}
4. If your Vault data was printed to the screen, highlight the text and copy and paste it into a new `export.csv` file.

## Import to Bitwarden

Complete the following steps to import data to your Bitwarden personal Vault. For help importing to an Organization Vault, see [Import Items to an Organization]({% link _articles/organizations/import-to-org.md %}).

If you want to store File Attachments in your Bitwarden Vault, please be aware that these are currently not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({% link _articles/features/attachments.md %}).

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select **Import Data** from the left Tools menu.
4. Select **LastPass (csv)** from the format dropdown.
5. Select the **Browse...** button and add the file exported from LastPass.
6. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}

Congratulations! You have just transferred your data from LastPass into Bitwarden.

## Import Troubleshooting

### Length-related Import Errors

The following error messages, typically received when attempting to import a `.csv`, indicate that an item in your import file has a specified value that exceeds the allowed **encrypted** character limit for its field type:

{% image /importing/ciphererror_2021.png Cipher errors in the Web Vault%}

To solve this issue, open the `.csv` file in a text editor or spreadsheet program and **remove** or **reduce the character count** of the offending item. Bitwarden won't import your `.csv` file until it is free of offenses. The contents of the error messages contain several pieces of pertinent data to help you identify the offending item. For example, in the above example:

- `[1]` identifies the index number where the offending item is located, adjusted to match row numbering in *most* spreadsheet programs.
- `[Login]` identifies the Vault item `type` of the offending item.
- `"Facebook"` identifies the `name` of the offending item.
- `Notes` indicates the field (column) where the character limit is exceeded.
- `10000` indicates the character limit allowed for that field (column).

   {% callout success %}On import to Bitwarden, the character count of any given field is increased due to encryption, meaning that an 8000-character `Notes` field in your `.csv` will scale to 10,000+ characters when it comes into contact with Bitwarden, triggering this error. As a rule of thumb, character counts will grow between 30-50% when encrypted.{% endcallout %}

If you continue to have trouble locating the offending item using the data provided in the error, it may help to focus first on notes as these are frequently the cause of this error.

### Maximum Collections Error

When importing Lastpass `.csv` exports to a [Free Organization]({% link _articles/plans-and-pricing/about-bitwarden-plans.md %}), you may observe the following error:

{% image /importing/lpcollectionserror.png Free Organization Max Collections Error%}

This error occurs when the Lastpass export contains 3 or more `grouping` values. The values in the `grouping` field are interpreted by Bitwarden as [Collections]({% link _articles/organizations/about-collections.md %}), however [Free Organizations]({% link _articles/plans-and-pricing/about-bitwarden-plans.md %}) are limited to only two Collections. The following `.csv`, for example, would cause this error:

```
url,username,password,totp,extra,name,grouping,fav
https://www.facebook.com/login.php,login,password,,,Facebook,Social,0
https://twitter.com/login,login,password,,,Twitter,Social,0
https://asana.com/,login,password,,,Asana,Productivity Tools,0
https://github.com/login,login,password,,,Github,Productivity Tools,0
https://www.paypal.com/login,login,password,,,Paypal,Finance,0
https://www.bankofamerica.com/,login,password,,,Bankofamerica,Finance,0
```

**To solve this issue**, delete the `grouping` column and the `grouping` datum for each item, including the trailing comma, for example edit:

```
https://github.com/login,login,password,,,Github,Productivity Tools,0
```
down to:
```
https://github.com/login,test,test,,,Github,0`
```
