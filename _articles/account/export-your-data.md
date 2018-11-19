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
Data exports contain your unencrypted data in `.csv` format. You should not store or send the file over unsecure channels (such as email). Delete it immediately after you are done using it.
{% endwarning %}

{% note %}
The downloaded `.csv` file can be opened, read, and modified in spreadsheet programs such as Microsoft Excel or a simple text editor like Notepad.
{% endnote %}

## From the web vault

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Tools** in the top navigation bar 
3. Click **Export Vault** under the **Tools** side navigation
4. Type in your master password and click **Export Vault**. Your browser will either automatically download the `.csv` file or prompt you to save it

{% note %}
Exporting your vault will not include items that belong to an organization. Organization admins can export their organization's vault from the web vault under the organization's admin area in the **Tools** section. Then click **Export Vault** under the **Tools** side navigation.
{% endnote %}

## From the browser extension

1. Open the browser extension and click the **Tools** tab
2. Scroll down and click **Export Vault**
3. Type in your master password and click **Submit**. Your browser will either automatically download the `.csv` file or prompt you to save it

## From the desktop app

1. Open the desktop application and navigate to **File** &rarr; **Export Vault**
2. Type in your master password and click the Submit button. You will be prompted to download the `.csv` file.

## From the CLI

In the CLI application, you can use the `bw export` command to export your data to a `.csv` file in the current working directory. Or pass the `--output` option to specify a location of your choice.
