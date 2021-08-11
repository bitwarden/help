---
layout: article
title: Import Data from Password Safe
categories: [import-export]
featured: true
popular: false
tags: [import, passwordsafe]
order: 06
---

Use this article for help exporting data from Password Safe and importing into Bitwarden. Password Safe (V8) currently only supports exporting as `.csv` file. Older versions also supported `.xml`.

## Export from Password Safe

Complete the following steps to export data from the Password Safe Desktop App:

1. Open Password Safe 8 and open the **Extras** menu from the upper left corner.

2. Locate the **Export** option on the left-hand side and then choose **Passwords**.

3. For the type please select `CSV` and enter a path to save the exported file. Leave the encoding at UTF-8.
   {% image importing/passwordsafeV8-export.png Export from Desktop App %}

4. Click on the big gray arrow on the right to proceed to the export settings screen

5. Set the separating character to **Semicolon**
6. Set the text qualifier to **`"`**(double quote)
7. Check the checkbox to keep the column headers
   {% image importing/passwordsafeV8-exportsettings.png Export settings screen from Desktop App %}

8. Click **Finish** to start the export.
   {% callout warning %}Please note that Password Safe will export a `.csv` for **every** category you have and not just a single `.csv`.
   {% endcallout %}

## Prepare exported file before import
Currently we do not offer a specific importer for this type of file.

To prepare the exported file for import, please follow the instructions in this guide: [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %})

## Import to Bitwarden

Importing data to Bitwarden **can only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank"} or [CLI]({{site.baseurl}}/article/cli/#import). Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import your data:

 1. In the Web Vault, select **Tools** from the top navigation bar.
 2. Select **Import Data** from the left-hand Tools menu.
 3. From the format dropdown, choose a **Bitwarden (csv)**.

 5. Select the **Choose File** button and add the file to import or **copy/paste** the contents of your file into the input box.

    {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
 6. Select the **Import Data** button to complete your import.
 7. After successful import, delete the import source file from your computer. This will protect you in the event your computer is compromised.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/#attach-a-file).
