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

Importing data to Bitwarden **can only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank"} or [CLI]({{site.baseurl}}/article/cli/#import). Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import your data:

1. In the Web Vault, select **Tools** from the top navigation bar.
2. Select **Import Data** from the left-hand Tools menu.
3. From the format dropdown, choose one of the following **File Formats**:

   - 1Password (1pif)
   - 1Password 6 and 7 Windows (csv)
   - 1Password 6 and 7 Mac (csv)
5. Select the **Choose File** button and add the file to import or **copy/paste** the contents of your file into the input box.

   {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
6. Select the **Import Data** button to complete your import.
7. After successful import, delete the import source file from your computer. This will protect you in the event your computer is compromised.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/#attach-a-file).
