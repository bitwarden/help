---
layout: article
title: Export your vault data
categories: [account-management]
featured: false
popular: false
tags: [export, accounts, csv]
---

Bitwarden allows you to export your vault data at any time.

{% warning %}
Exports contain your vault data in an unencrypted format. You should not store or send the exported file over unsecure channels (such as email). Delete it immediately after you are done using it.
{% endwarning %}

{% note %}
The `.json` file format offers a more complete export of your data and should be used for standard backup procedures. Some non-critical information is not included with the export when using the `.csv` file format.

An exported `.json` file can be opened, read, and modified in a simple text editor like Notepad.

An exported `.csv` file can be opened, read, and modified in spreadsheet programs such as Microsoft Excel (preferred) or a simple text editor like Notepad.
{% endnote %}

## From the web vault

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Tools** in the top navigation bar 
3. Click **Export Vault** under the **Tools** side navigation
4. Choose your exported file format, type in your master password, and click **Export Vault**. Your browser will either automatically download the exported file or prompt you to save it

{% note %}
Exporting your vault will not include items that belong to an organization. Organization admins can export their organization's vault from the web vault under the organization's admin area in the **Tools** section. Then click **Export Vault** under the **Tools** side navigation.
{% endnote %}

## From the browser extension

1. Open the browser extension and click the **Tools** tab
2. Scroll down and click **Export Vault**
3. Choose your exported file format, type in your master password, and click **Submit**. Your browser will either automatically download the exported file or prompt you to save it

## From the desktop app

1. Open the desktop application and navigate to **File** &rarr; **Export Vault**
2. Choose your exported file format, type in your master password, and click the Submit button. You will be prompted to download the exported file

## From the CLI

In the CLI application, you can use the `bw export` command to export your data to a `.csv` or `.json` file in the current working directory. You can also pass the `--output` option to specify a saving location of your choice. Using the `--format` option will allow you to specify the file format as `csv` or `json`. The file format defaults to `csv` if not specified.
