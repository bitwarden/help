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
