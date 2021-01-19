---
layout: article
title: Export Vault Data
categories: [import-export]
featured: false
popular: false
tags: [export, accounts, csv]
order: 06
---

Bitwarden allows you to export your personal Vault data from any client application, or an Organization Vault from the Web Vault or CLI. Exports can be downloaded as plaintext `.json` or `.csv` files, or as a `.json` [Encrypted Export]({% link _articles/importing/encrypted-export.md %}).

Bitwarden recommends using `.json` for a more complete option for standard backup procedures as `.csv` exports will not export Cards or Identities. For information on the format of Bitwarden `.csv` and `.json` exports, see [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %}).

Vault Exports **will not include** File Attachments or Items in the Trash.

{% callout warning %}
Unless you're using an [Encrypted Export]({% link _articles/importing/encrypted-export.md %}), do not store or send the exported file over insecure channels, like email, and delete the file immediately after use.
{% endcallout %}

## Export a Personal Vault

Export your Personal Vault data from any client application:

### From the Web Vault

1. Select **Tools** from the top navigation bar.
3. Select **Export Vault** from the left-hand Tools menu.
4. On the Export Vault page:
   - Select a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
   - Enter your **Master Password**.
5. Select the **Export Vault** button to download your Vault Export. You will be prompted to specify a location for download.

### From the Mobile App

1. Tap the **Settings** tab.
2. Scroll down to the **Tools** section, and tap **Export Vault**.
3. On the Export Vault page:
   - Select a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
   - Enter your **Master Password**.
4. Select the **Export Vault** button to download your Vault Export. You will be prompted to specify a location for download.

### From the Browser Extension

1. Open the **Settings** tab.
2. Scroll down to the **Tools** section, and select **Export Vault**.
4. On the Export Vault page:
   - Select a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
   - Enter your **Master Password**.
5. Select the **Export Vault** button to download your Vault Export. You will be prompted to specify a location for download.

### From the Desktop App

1. Navigate to **File** &rarr; **Export Vault**.
2. In the Export Vault window:
   - Select a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
   - Enter your **Master Password**.
3. Select the **Submit** button to download your Vault Export. You will be prompted to specify a location for download.

### From the CLI

Use the `bw export` command to export your Vault data. By default, `bw export` will create a `.csv` export in the current working directory.

You may pass the following options with the `bw export` command:
- `--output <filePath>` to specify a saving location of your choice.
- `--format <format>` to specify the file format as `csv` (*default*), `json`, or `encrypted_json`.

## Export an Organization Vault

Admins and Owners may export their Organization Vault from the Web Vault or CLI:

### From the Web Vault

1. Open your Organization and select the **Tools** tab.

   {% image organizations/org-export.png Export Organization Vault %}
2. Select **Export Vault** from the left-hand Tools menu.
4. On the Export Vault page:
   - Select a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
   - Enter your **Master Password**.
5. Select the **Export Vault** button to download your Vault Export. You will be prompted to specify a location for download.

### From the CLI

From the Bitwarden CLI application, use the `bw export` command with the `--organizationid <orgId>` option to export your Organization Vault.

{% callout info %}
Retrieve your `<orgId>` value using the command: `bw list organizations`.
{% endcallout %}

By default, `bw export` will create a `.csv` export in the current working directory, however you may pass the following options with the command:
- `--output <filePath>` to specify a saving location of your choice.
- `--format <format>` to specify the file format as `csv` (*default*), `json`, or `encrypted_json`.
