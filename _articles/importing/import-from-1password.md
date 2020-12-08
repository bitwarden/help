---
layout: article
title: Import your data from 1Password
categories: [getting-started]
featured: true
popular: false
tags: [import, 1password]
---

To migrate from 1Password to Bitwarden, export your data from 1Password and use the Bitwarden Import Tool to quickly fill your Vault with logins.

Export your data from 1Password as a `.1pif` or `.csv`, depending on which version and operating system you are using:

- `.1pif` files can be exported by **1Password 4 on Windows**, **1Password 6 on macOS**, and **1Password 7 on macOS**.
- `.csv` files can be exported by **1Password 6 on Windows or macOS** and **1Password 7 on Windows or macOS**.

## Export as .1pif

Complete the following steps to export your 1Password data as a `.1pif` from **1Password 4 on Windows**, **1Password 6 on macOS**, or **1Password 7 on macOS**:

1. In the 1Password Desktop App, navigate to the vault you'd like to export.

   1Password does not allow you to export from multiple vaults at once.
2. Select **File** &rarr; **Export**.

   *On macOS, select **File** &rarr; **Export** &arr; **All Items..**.*
3. In the Export Window, specify **1Password Interchange Format** (.1pif) in the File Format field.
4. Specify a filename and location, and select **Save** to complete your export.

## Export as .csv

The steps to export your 1Password data as a `.csv` vary slightly between [Windows](#from-windows) and [macOS](#from-macos):

### From Windows

1. In the 1Password Desktop App, select the items you want to export.

   Select multiple items by holding down the Ctrl key when clicking on them. Select all the items by pressing Ctrl + A after clicking one of the items in the list.
2. Right-click the selected item(s) and select **Export**.
3. Select the **Comma Delimited Text** (.csv) format.
4. Enter a filename and select **Save** to complete your export.

### From macOS

1. In the 1Password Desktop App, navigate to the vault you'd like to export.

   1Password does not allow you to export from multiple vaults at once.
2. Select **File** &rarr; **Export** and choose **All Items..**.
3. In the Export Window, specify **Comma Delimited Text** (.csv) in the File Format field. You must also specify the following:

   - In the Fields to Export radio selection, choose the **All Fields** option.
   - Check the **Include Column Labels** checkbox.
4. Specify a filename and location, and select **Save** to complete your export.

## Import To Bitwarden

Complete the following steps to import your downloaded 1Password data into Bitwarden:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select **Import Data** from the Tools section of the left menu.
4. From the dropdown menu, **select the format of the import file**:
   - 1Password (1pif)
   - 1Password 6 and 7 Windows (csv)
   - 1Password 6 and 7 Mac (csv)
5. Select the **Browse...** button and upload your 1Password export file.
6. Select the **Import Data** button to complete your import.
