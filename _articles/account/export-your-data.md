---
layout: article
title: Export Vault Data
categories: [import-export]
featured: false
popular: false
tags: [export, accounts, csv]
order: 07
---

You can export your personal Vault data from any client application, or export an Organization Vault from the Web Vault or CLI. Exports can be downloaded as plaintext `.json` or `.csv` files, or as a `.json` [encrypted export]({% link _articles/importing/encrypted-export.md %}).

We recommend using `.json` for a more complete export, as `.csv` files won't currently export Cards or Identities. For complete information on the format of Bitwarden `.csv` and `.json` files, see [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %}).

Vault Exports **will not include** [file attachments]({% link _articles/features/attachments.md %}) or Items in the Trash.

{% callout warning %}
Unless you're using an [Encrypted Export]({% link _articles/importing/encrypted-export.md %}), do not store or send the exported file over insecure channels, like email, and delete the file immediately after use.
{% endcallout %}

## Export a Personal Vault

Export your personal Vault data from any client application:

{% callout warning %}
Exporting data from your Personal Vault **will not** export any data from Organizations that you belong to. To export Organization Data, follow the instructions to [export an Organization Vault.](#export-an-organization-vault)
{% endcallout %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wvtab" data-target="#webvault" role="tab" aria-controls="webvault" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="clitab" data-target="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault" role="tabpanel" aria-labelledby="wvtab">
{% capture web_vault %}

#### Export from the Web Vault

To export your personal Vault data from the Web Vault:

1. Select **Tools** from the top navigation bar.
2. Select **Export Vault** from the left-hand Tools menu.
3. On the Vault Export page, choose a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
4. Enter your **Master Password** and select the **Export Vault** button.

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

#### Export from a Browser Extension

To export your personal Vault data from a Browser Extension:

1. Open the {% icon fa-cogs %} **Settings** tab.
2. Scroll down to the **Tools** section and select the **Export Vault** option.
3. On the Export Vault view, choose a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
4. Enter your **Master Password** and select **Submit**.

{% callout info %}
If you're exporting from the Vivaldi Browser Extension, you may need to popout the Browser Extension for export to work properly:

{% image importing/browserextension-popout.png Popout a Browser Extension %}
{% endcallout %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

#### Export from Desktop

To export your personal Vault data from a Desktop app:

1. From the menu bar, navigate to **File** &rarr; **Export Vault**.
2. In the Export Vault window, choose a **File Format** (`.json`, `.csv`, or `.json (Encryped)`).
3. Enter your **Master Password** and select the {% icon fa-download %} **Download** button.

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

#### Export from Mobile

To export your personal Vault data from a Mobile app:

1. Tap the {% icon fa-cogs %} **Settings** tab.
2. Scroll down to the **Tools** section and tap the **Export Vault** option.
3. On the Export Vault view, choose a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
4. Enter your **Master Password** and tap the **Export Vault** button.

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}

#### Export from the CLI

To export your personal Vault from the CLI, use the `export` command. By default, `export` will export your Vault as a `.csv` and save the file to the working directory, however this behavior can be altered using options:

```
bw export my-master-password --output /users/me/documents/ --format json
```

For more detail, see our [CLI documentation]({% link _articles/miscellaneous/cli.md %}).

{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>

## Export an Organization Vault

Organization [Admins and Owners]({% link _articles/organizations/user-types-access-control.md %}) can export their Organization Vault (i.e. all items owned by the Organization) from the Web Vault or CLI:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="orgwvtab" data-target="#orgwebvault" role="tab" aria-controls="orgwebvault" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="orgclitab" data-target="#orgcli" role="tab" aria-controls="orgcli" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="orgwebvault" role="tabpanel" aria-labelledby="orgwvtab">
{% capture org_web_vault %}

#### Export Org from the Web Vault

To export your Organization Vault data from the Web Vault:

1. Open your Organization and select the **Tools** tab:

   {% image organizations/org-export.png Export Organization Vault %}
2. Select **Export Vault** from the left-hand Tools menu.
4. On the Vault Export page, choose a **File Format** (`.json`, `.csv`, or `.json (Encrypted)`).
4. Enter your **Master Password** and select the **Export Vault** button.

{% endcapture %}
{{ org_web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="orgcli" role="tabpanel" aria-labelledby="orgclitab">
{% capture org_cli_info %}

#### Export Org from the CLI

To export your Organization Vault from the CLI, use the `export` command with the `--organizationid` option.

By default, `export` will export your Vault as a `.csv` and save the file to the working directory, however this behavior can be altered using options:

```
bw export my-master-password --organizationid 7063feab-4b10-472e-b64c-785e2b870b92 --output /users/me/documents/ --format json
```

{% callout success %}
If you don't know your `organizationid` value off-hand, you can access it at the command-line using `bw list organizations`.
{% endcallout %}

For more detail, see our [CLI documentation]({% link _articles/miscellaneous/cli.md %}).

{% endcapture %}
{{ org_cli_info | markdownify}}
  </div>
</div>
