---
layout: article
title: Managing Items
categories: [account-management]
featured: false
popular: false
tags: [account, items, import, delete, trash, clone]
---

## Table of Contents
- [About Managing Items](#about-managing-items)
- [Adding items](#adding-items)
- [Importing items](#importing-items)
- [Troubleshooting Imports](#troubleshooting-imports)
- [Import FAQs](#import-faqs)
- [Cloning an item](#cloning-an-item)
- [Deleting an item](#deleting-an-item)
- [Items in the trash](#items-in-the-trash)

## About Managing Items

Managing the items in your vault is key to making sure that you secure, have access to, and can share the correct information with friends, family, teams, and colleagues.

## Adding items

Adding items to your Bitwarden vault can be done manually or via import.

To manually add an item, once you’re in your vault - simply click or touch the “+” icon or “Add item” button.

You’ll then be asked to provide details about the item.

{% image /manage-items/add-item.png %}

The type of item can be:
- Login: A username/password combination usually, with support for custom fields, notes, and TOTP generation for premium and enterprise accounts.
- Card: Saves payment card data that can be automatically filled.
- Identity: Personal/Business information such as name and addresses, date of birth, and even notes.
- Secure Note: Freeform text that will be stored completely encrypted in your vault.

## Importing items

If you’re coming from another password manager or **just happen** to have your usernames and passwords in a spreadsheet, you can import them into Bitwarden

You can find more details about importing items and supported import formats [here.](https://bitwarden.com/help/article/import-data/)

### Import FAQs

### **Q:Why is my import file invalid?**
**A:** Check to make sure the file has content. Most of the time the exported file does not contain any data.
### **Q:Why do I have duplicate entries?**
**A:** The Bitwarden import tool does not perform duplicate entry detection on import. If you run an import on an existing vault, or import multiple times, your data may be duplicated.
### **Q:How do I clean up duplicates?**
**A:** We recommend exporting the data from your vault into a CSV/JSON file and performing a vault purge to delete your data.
  {% warning %} Performing a vault purge is permanent and cannot be undone. Once the vault has been emptied and the CSV/JSON file has been pruned of any duplicates, simply re-import your data.{% endwarning %}

## Troubleshooting Import Errors

<u>Ciphers[<b>X</b>].Login: The field <b>yyyy</b> exceeds the maximum encrypted value length of <b>zzzz</b> characters.</u>

This error occurs whenever an item in your exported file has a large amount of data associated with it, which exceeds the limits allowed for items stored in your Bitwarden vault. You will need to correct this data by removing it, or reducing its size so that the Bitwarden importer will succeed.

You can open the exported file in a text editor or spreadsheet program (such as Excel) to locate it. The offending item can be found at index **X** (as referenced in the error message) in the file. Once you have located the offending item, remove it or update its data, then resave and try the import operation with Bitwarden again.

## Cloning an item

If you wish to recreate an item (either to share with an organization or to simply make a copy of an item, you can now do so - provided you are the owner of the item - with a one-click operation. This copies the item completely and maintains all data.

Simply select clone under the item’s action menu:

{% image /manage-items/item-clone.png %}

{%note%}Note - when cloning an item in an organization vault, the user must view the vault from the organization, not the user’s personal vault {%endnote%}

## Deleting an item

Deleting an item can also be performed in the item’s action menu.

{% image /manage-items/item-delete.png %}

Once the delete button is selected, you will be prompted to confirm the deletion.

{% image /manage-items/item-trash-confirm.png %}

Once confirmed, the item will be placed into the trash.

## Items in the trash

Once an item has been deleted and is in the trash, it will remain there for 30 days. You can alternatively navigate to the trash view in your vault and restore, or permanently delete the item immediately.

{% image /manage-items/item-trash-restore-delete.png %}
