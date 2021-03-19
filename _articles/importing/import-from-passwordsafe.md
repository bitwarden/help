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
   {% image /importing/passwordsafeV8-export.png Export from Desktop App %}

4. Click on the big gray arrow on the right to proceed to the export settings screen

5. Set the separating character to **Semicolon**
6. Set the text qualifier to **`"`**(double quote)
7. Check the checkbox to keep the column headers
   {% image /importing/passwordsafeV8-exportsettings.png Export settings screen from Desktop App %}

8. Click **Finish** to start the export.
   {% callout warning %}Please note that Password Safe will export a `.csv` for **every** category you have and not just a single `.csv`.
   {% endcallout %}

## Prepare exported file before import
Currently we do not offer a specific importer for this type of file.

To prepare the exported file for import, please follow the instructions in this guide: [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %})

## Import to Bitwarden

Complete the following steps to import data to your Bitwarden personal Vault (for help importing to an Organization Vault, see [Import Items to an Organization]({% link _articles/organizations/import-to-org.md %})):

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select **Import Data** from the left Tools menu.
4. Select **Bitwarden (csv)** from the format dropdown.
5. Select the **Browse...** button and select the file you prepared in a previous step.
6. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}

Congratulations! You have just transferred your data from Password Safe into Bitwarden.
