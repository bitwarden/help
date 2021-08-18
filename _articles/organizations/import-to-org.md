---
layout: article
title: Import Data to an Organization
categories: [organizations]
featured: true
popular: false
tags: [organizations, import]
order: 08
---

Bitwarden provides a data import tool for easy migration from any password management solution to your Organization Vault. You can also use the data import tool to import from one Bitwarden Organization to another, or to import a Bitwarden [Encrypted Export]({% link _articles/importing/encrypted-export.md %}).

For a full list of supported import formats, see [What file formats does Bitwarden support for import?]({{site.baseurl}}/article/import-faqs/#q-what-file-formats-does-bitwarden-support-for-import), or refer to one of these articles for guidance on the most popular solutions:

- [Import from LastPass]({% link _articles/importing/import-from-lastpass.md %})
- [Import from 1Password]({% link _articles/importing/import-from-1password.md %})
- [Import from Firefox]({% link _articles/importing/import-from-firefox.md %})
- [Import from Google Chrome]({% link _articles/importing/import-from-chrome.md %})

{% callout info %}
**The above listed articles** describe importing to a Personal Bitwarden Vault. While the guidance for exporting from each solution will be appropriate, it's important to know that importing to an Organization is a slightly different procedure and is [documented below](#import-to-your-organization).
{% endcallout %}

## Import to your Organization

Importing data to Bitwarden **can only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank".} or [CLI]({{site.baseurl}}/article/cli/#import). Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import data to an Organization Vault:

1. Open your Organization and navigate to the **Tools** tab:

   {% image importing/org-tools.png Organization Tools %}
3. Select **Import Data** from the left-hand Tools menu.
3. From the format dropdown, choose a **File Format** (see [What file formats does Bitwarden support for import?]({{site.baseurl}}/article/send-faqs/#q-what-file-formats-does-bitwarden-support-for-import)).
4. Select the **Choose File** button and add the file to import.

   {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
5. Select the **Import Data** button to complete your import.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({% link _articles/features/attachments.md %}).

## Length-related Import Errors

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
