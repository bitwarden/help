---
layout: article
title: Export your vault data
categories: [Account Management]
featured: false
popular: false
tags: [export, accounts, csv]
---

bitwarden allows you to export all of your vault data at any time.

{% warning %}
Data exports contain your unencrypted data in `.csv` format. You should not store or send the file over unsecure channels (such as email). Delete it immediately after you are done using it.
{% endwarning %}

## From the web vault

1. Log in to the web vault at <https://vault.bitwarden.com>
2. Click **Tools** on the sidebar 
3. Click **Export Data** under the **Import/Export** panel
4. Type in your master password and click **Export**. Your browser will either automatically download the `.csv` file or prompt you to save it

## From the browser extension

1. Open the browser extension and click the **Tools** tab
2. Scroll down and click **Export Vault**
3. Type in your master password and click **Submit**. Your browser will either automatically download the `.csv` file or prompt you to save it

The downloaded `.csv` file can be opened, read, and modified in spreadsheet programs such as Microsoft Excel or a simple text editor like Notepad.
