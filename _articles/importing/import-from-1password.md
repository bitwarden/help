---
layout: article
title: Import Data from 1Password
categories: [import-export]
featured: true
popular: false
tags: [import, 1password]
order: 03
---

Use this article for help exporting data from 1Passwords and importing into Bitwarden. 1Password data exports are available as `.1pif` or `.csv` files, depending on which client version and operating system you are using.

## Export from 1Password

Complete the following steps to export data from the 1Password Desktop App:

1. Navigate to the Vault you'd like to export.

   Currently, 1Password will not allow you to to export from multiple Vaults at once.
2. In your Vault, select the items you would like to export.

   Hold Ctrl/Cmd to select multiple Vault items, or select everything by pressing Ctrl/Cmd + A.
3. On Windows, select **File** &rarr; **Export** or right-click and select **Export**.

   On macOS, select **File** &rarr; **Export** &rarr; **All Items..**.
4. In the Export window, specify a location and file format.

   You may choose between **1Password Interchange Format** (`.1pif`) and **Comma Delimited Text** (`.csv`) depending on your client version and operating system.

   {% callout info %}**If you're exporting a `.csv` from macOS,** you must also select the **All Fields** radio button and check the **Include Column Labels** checkbox.{% endcallout %}

## Import to Bitwarden

Complete the following steps to import data to your Bitwarden personal Vault (for help importing to an Organization Vault, see [Import Items to an Organization]({% link _articles/organizations/import-to-org.md %})):

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select **Import Data** from the left Tools menu.
4. Select one of the following from the format dropdown:

   - 1Password (1pif)
   - 1Password 6 and 7 Windows (csv)
   - 1Password 6 and 7 Mac (csv)
5. Select the **Browse...** button and add the file exported from 1Password.
6. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}

Congratulations! You have just transferred your data from 1Password into Bitwarden.
