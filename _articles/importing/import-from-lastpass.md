---
layout: article
title: Import Data from LastPass
categories: [import-export]
featured: true
popular: true
tags: [import, lastpass]
order: 02
---

Use this article for help exporting data from LastPass and importing into Bitwarden.

## Export from LastPass

You can export your data from LastPass from their Web Vault or from a LastPass Browser Extension:

{% callout info %}
A previous version of this article stated that you [needed to use the Browser Extension](https://support.logmeininc.com/lastpass/help/how-do-i-nbsp-export-my-lastpass-form-fill-profiles){:target="\_blank"} to export **Form Fills** (e.g. Addresses and Payment Cards), however testing by Bitwarden's Customer Success team found that using either LastPass application to download a standard **LastPass CSV** will include Form Fills in your export.
{% endcallout %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="webtab" data-bs-toggle="tab" data-target="#web" role="tab" aria-controls="browsertab" aria-selected="true">LastPass Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="browsertab" data-bs-toggle="tab" data-target="#browser" role="tab" aria-controls="browsertab" aria-selected="false">LastPass Browser Extension</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="web" role="tabpanel" aria-labelledby="webtab">
{% capture and_gs %}

#### From the LastPass Web Vault

To export your data from the LastPass Web Vault:

1. Select the {% icon fa-rocket %} **Advanced Options** option on the left sidebar:

   {% image importing/lastpassadvancedoptions.png Export from Web Vault %}
2. From the Manage Your Vault section, select the **Export** option.
3. Enter your Master Password to validate the export attempt.

   Depending on your browser, your Vault data will either be automatically saved as a `.csv` or printed to the screen in a `.csv` format:

   {% image lastpass-copy.png LastPass Export %}
4. If your Vault data was printed to the screen, highlight the text and copy and paste it into a new `export.csv` file.

{% callout warning %}
**Some users have reported a bug** which changes special characters in your passwords (`&`, `<`, `>`, etc.) to their HTML-encoded values (for example, `&amp;`) in the printed export.

If you observe this bug in your exported data, use a text editor to find and replace all altered values before importing into Bitwarden.
{% endcallout %}

{% endcapture %}
{{ and_gs | markdownify }}
  </div>
  <div class="tab-pane" id="browser" role="tabpanel" aria-labelledby="browsertab">
{% capture ios_gs %}

#### From a LastPass Browser Extension

To export your data from a LastPass Browser Extension:

1. In the Browser Extension, navigate to **Account Options** &rarr; **Advanced** &rarr; **Export** &rarr; **LastPass CSV File**:

   {% image importing/lp-be.png Export from Browser Extension %}
2. Enter your Master Password to validate the export attempt.

   Depending on your browser, your Vault data will either be automatically saved as a `.csv` or printed to the screen in a `.csv` format:
   {% image lastpass-copy.png LastPass Export %}
4. If your Vault data was printed to the screen, highlight the text and copy and paste it into a new `export.csv` file.


{% endcapture %}
{{ ios_gs | markdownify }}
  </div>
</div>

## Import to Bitwarden

Importing data to Bitwarden **can only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank"} or [CLI]({{site.baseurl}}/article/cli/#import). Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import your data:

 1. In the Web Vault, select **Tools** from the top navigation bar.
 2. Select **Import Data** from the left-hand Tools menu.
 3. From the format dropdown, choose **LastPass (csv)** from the File Format dropdown.

 4. Select the **Choose File** button and add the file to import or **copy/paste** the contents of your `.csv` into the input box.

    {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
 5. Select the **Import Data** button to complete your import.
 6. After successful import, delete the source `.csv` file from your computer. This will protect you in the event your computer is compromised.

 Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/#attach-a-file).

## Import Troubleshooting

### Length-related Import Errors

The following error messages, typically received when attempting to import a `.csv`, indicate that an item in your import file has a specified value that exceeds the allowed **encrypted** character limit for its field type:

{% image importing/ciphererror_2021.png Cipher errors in the Web Vault%}

To solve this issue, open the `.csv` file in a text editor or spreadsheet program and **remove** or **reduce the character count** of the offending item. Bitwarden won't import your `.csv` file until it is free of offenses. The contents of the error messages contain several pieces of pertinent data to help you identify the offending item. For example, in the above example:

- `[1]` identifies the index number where the offending item is located, adjusted to match row numbering in *most* spreadsheet programs.
- `[Login]` identifies the Vault item `type` of the offending item.
- `"Facebook"` identifies the `name` of the offending item.
- `Notes` indicates the field (column) where the character limit is exceeded.
- `10000` indicates the character limit allowed for that field (column).

   {% callout success %}On import to Bitwarden, the character count of any given field is increased due to encryption, meaning that an 8000-character `Notes` field in your `.csv` will scale to 10,000+ characters when it comes into contact with Bitwarden, triggering this error. As a rule of thumb, character counts will grow between 30-50% when encrypted.{% endcallout %}

If you continue to have trouble locating the offending item using the data provided in the error, it may help to focus first on notes as these are frequently the cause of this error.

### Maximum Collections Error

When importing Lastpass `.csv` exports to a [Free Organization]({% link _articles/plans-and-pricing/about-bitwarden-plans.md %}), you may observe the following error:

{% image importing/lpcollectionserror.png Free Organization Max Collections Error%}

This error occurs when the Lastpass export contains 3 or more `grouping` values. The values in the `grouping` field are interpreted by Bitwarden as [Collections]({% link _articles/organizations/about-collections.md %}), however [Free Organizations]({% link _articles/plans-and-pricing/about-bitwarden-plans.md %}) are limited to only two Collections. The following `.csv`, for example, would cause this error:

```
url,username,password,totp,extra,name,grouping,fav
https://www.facebook.com/login.php,username,password,,,Facebook,Social,0
https://twitter.com/login,username,password,,,Twitter,Social,0
https://asana.com/,login,password,,,Asana,Productivity Tools,0
https://github.com/login,username,password,,,Github,Productivity Tools,0
https://www.paypal.com/login,username,password,,,Paypal,Finance,0
https://www.bankofamerica.com/,username,password,,,Bankofamerica,Finance,0
```

**To solve this issue**, delete the `grouping` column and the `grouping` datum for each item, including the trailing comma, for example edit:

```
https://github.com/login,username,password,,,Github,Productivity Tools,0
```
down to:
```
https://github.com/login,username,password,,,Github,0
```
