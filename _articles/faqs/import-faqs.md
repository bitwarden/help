---
layout: article
title: Import & Export FAQs
categories: [import-export]
featured: true
popular: false
hidden: false
tags: []
order: 09
---

This article contains Frequently Asked Questions (FAQs) regarding **Import &amp; Export**.

#### Q: How do I import my data if I don’t see my service on the import options list?

**A:** If we don't have official support for the service you are using, manually condition a `.csv` or `.json` for import into Bitwarden. For more information about how to do this, see [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %}).

#### Q: Can I import to Bitwarden from iCloud/Mac Keychain?

**A:** Currently, Apple does not provide an official way to export data from iCloud, Mac Keychain, or Safari.

Here are some third-party programs available to export this data:
- <https://gist.github.com/rmondello/b933231b1fcc83a7db0b>
- <https://github.com/lifepillar/CSVKeychain>

{% callout warning %}
**Disclaimer**: These 3rd party scripts/programs are unsupported by Bitwarden or Apple, and should be used at your own risk.
{% endcallout %}

Once exported from iCloud, Mac Keychain, or Safari, see [Import Data to your Vault]({% link _articles/importing/import-data.md %}).

#### Q: How do I import items directly to Collections?

**A:** To import items directly to Collections, format your import as a Bitwarden `.csv` (for more information, see [Condition a Bitwarden .csv or .json]({% link _articles/importing/condition-bitwarden-import.md %})) and specify Collections to import each item to within the file.


#### Q: Why did importing create duplicate Vault items?

**A:** Every import operation creates every new record as an item in your Vault, regardless of whether matching Vault items already exist in your Vault. Prior to import, we recommend either:

- Editing your import file to only include net-new Vault Items.
- Purging your Vault before an import operation.

  Personal Vaults can be purged from the **Settings** &rarr; **My Account** page. Organization Vaults can be purged from the **Organization Settings** &rarr; **My Organization** page.
