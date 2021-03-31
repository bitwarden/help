---
layout: article
title: Encrypted Exports
categories: [import-export]
featured: true
popular: false
tags: [import]
order: 08
---

Vault data can be [exported]({% link _articles/account/export-your-data.md %}) in an encrypted JSON file. These exports are encrypted using your [account's encryption key]({% link _articles/account/account-encryption-key.md %}), which are generated on account creation and unique to each Bitwarden user account.

{% callout warning %}
[Rotating your account's encryption key]({% link _articles/account/account-encryption-key.md %}) will render an Encrypted Export impossible to decrypt. **If you rotate your account encryption key, replace any old files with new one that use the new encryption key.**

Account Encryption Keys are unique to each Bitwarden user account, so you won't be able to import an Encrypted Export into a different account.
{% endcallout %}

An Encrypted Export of the following plaintext login item:
```
{
      ...
      "login": {
        "username": "mylogin",
        "password": "mypassword",
        "totp": "otpauth://totp/my-secret-key"
      },
      ...
```

Will look something like:
```
{
      ...
      "login": {
        "username": "9.dZwQ+b9Zasp98dnfp[g|dHZZ1p19783bn1KzkEsA=l52bcWB/w9unvCt2zE/kCwdpiubAOf104os}",
        "password": "1o8y3oqsp8n8986HmW7qA=oiCZo872b3dbp0nzT/Pw=|A2lgso87bfDBCys049ano278ebdmTe4:",
        "totp": "2CIUxtpo870B)*^GW2ta/xb0IYyepO(*&G(&BB84LZ5ByZxu0E9hTTs6PHg0=8q5DHEPU&bp9&*bns3EYgETXpiu9898sxO78l"
      },
      ...
```

## Create an Encrypted Export

Creating an Encrypted Export follows the [normal export procedure]({% link _articles/account/export-your-data.md %}):

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

To create an encrypted export of your personal Vault data from the Web Vault:

1. Select **Tools** from the top navigation bar.
2. Select **Export Vault** from the left-hand Tools menu.
3. On the Vault Export page, choose `.json (Encrypted)` for the **File Format**.
4. Enter your **Master Password** and select the **Export Vault** button.

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

#### Export from a Browser Extension

To create an encrypted export of your personal Vault data from a Browser Extension:

1. Open the {% icon fa-cogs %} **Settings** tab.
2. Scroll down to the **Tools** section and select the **Export Vault** option.
3. On the Export Vault view, choose `.json (Encrypted)` for the **File Format**.
4. Enter your **Master Password** and select **Submit**.

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

#### Export from Desktop

To create an encrypted export of your personal Vault data from a Desktop app:

1. From the menu bar, navigate to **File** &rarr; **Export Vault**.
2. In the Export Vault window, choose `.json (Encrypted)` for the **File Format**.
3. Enter your **Master Password** and select the {% icon fa-download %} **Download** button.

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

#### Export from Mobile

To create an encrypted export of your personal Vault data from a Mobile app:

1. Tap the {% icon fa-cogs %} **Settings** tab.
2. Scroll down to the **Tools** section and tap the **Export Vault** option.
3. On the Export Vault view, choose `.json (Encrypted)` for the **File Format**.
4. Enter your **Master Password** and tap the **Export Vault** button.

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}

#### Export from the CLI

To create an encrypted export of your personal Vault data from the CLI, use the `export` command with the specified option `--format encrypted_json`, for example:

```
bw export my-master-password --output /users/me/documents/ --format encrypted_json
```

For more detail, see our [CLI documentation]({% link _articles/miscellaneous/cli.md %}).

{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>

## Import an Encrypted Export

Importing an Encrypted Export follows the [normal import procedure]({% link _articles/importing/import-data.md %}), which can **only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank"}:

1. In the Web Vault, select **Tools** from the top navigation bar.
2. Select **Import Data** from the left-hand Tools menu.
3. From the format dropdown, choose  **Bitwarden (json)**.

   {% callout success %}There is no import option specifically for Encrypted Exports. A handler will determine that the `.json` file is encrypted and attempt to decrypt the file using your [account's encryption key]({% link _articles/account/account-encryption-key.md %}).{% endcallout %}
5. Select the **Choose File** button and add the file to import.

   {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
6. Select the **Import Data** button to complete your import.
