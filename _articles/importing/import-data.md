---
layout: article
title: Import Data to your Vault
categories: [import-export]
featured: true
popular: true
tags: [import]
order: 01
---

Bitwarden provides a data import tool for easy migration from any password management solution to your personal Vault or Organization Vault. You can also use the data import tool to import from one Bitwarden Vault to another, or to import a Bitwarden [Encrypted Export]({% link _articles/importing/encrypted-export.md %}).

For a full list of supported import formats, see [What file formats does Bitwarden support for import?]({{site.baseurl}}/article/import-faqs/#q-what-file-formats-does-bitwarden-support-for-import), or use one of these articles for importing from the most popular solutions:

- [Import from LastPass]({% link _articles/importing/import-from-lastpass.md %})
- [Import from 1Password]({% link _articles/importing/import-from-1password.md %})
- [Import from Firefox]({% link _articles/importing/import-from-firefox.md %})
- [Import from Google Chrome]({% link _articles/importing/import-from-chrome.md %})
- [Import from Password Safe]({% link _articles/importing/import-from-passwordsafe.md %})

{% callout success %}
**Not already signed up?** Choose from one of [Bitwarden's plans](https://bitwarden.com/pricing/business/){:target="\_blank"} and get started today:

<a role="button" class="btn btn-primary" href="https://vault.bitwarden.com/#/register" target="blank">Create Your Free Account</a>
{% endcallout %}

## Import to your Personal Vault

Importing data to Bitwarden **can only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank"} or [CLI]({{site.baseurl}}/article/cli/#import). Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import your data:

 1. In the Web Vault, select **Tools** from the top navigation bar.
 2. Select **Import Data** from the left-hand Tools menu.
 3. From the format dropdown, choose a **File Format** (see [What file formats does Bitwarden support for import?]({{site.baseurl}}/article/import-faqs/#q-what-file-formats-does-bitwarden-support-for-import)).

 5. Select the **Choose File** button and add the file to import or **copy/paste** the contents of your file into the input box.

    {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
 6. Select the **Import Data** button to complete your import.
 7. After successful import, delete the import source file from your computer. This will protect you in the event your computer is compromised.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/#attach-a-file).

## Troubleshooting

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
