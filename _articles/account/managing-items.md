---
layout: article
title: Vault Items
categories: [account-management]
featured: false
popular: false
tags: [account, items, import, delete, trash, clone]
order: 02
---

Bitwarden can store 4 types of items in your Vault:

- [Logins](#logins)
- [Cards](#cards)
- [Identities](#identities)
- [Secure Notes](#secure-notes)

Effectively managing the items in your Vault is key to making sure that you secure and have seamless access to your information, and can safely share information with friends, family, teams, and colleagues.

## Add a Vault Item

You can add items to your Vault from the Bitwarden [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or any client application. Look for a {% icon fa-plus %} **Add** icon to add an item to your Vault. There are 4 types of items you can add to your Vault.

All item types can be given:
- A **Name** that makes them easily identifiable to you inside your Vault.
- **Notes** related to the item in a freeform text input.
- **Custom Fields** for inputs like security questions or PINs (for more information, see [Custom Fields]({% link _articles/features/custom-fields.md %})).

{% callout success %}
You can also import items into your Vault from a variety of password management solutions. For more information, see [Import Data to your Vault]({% link _articles/importing/import-data.md %}).
{% endcallout %}

### Logins

Refer to the following screenshot for help understanding all the values available for Login items:

{% image /manage-items/login-item.png Add a Login%}

### Cards

Refer to the following screenshot for help understanding all the values available for Card items:

{% image /manage-items/card-item.png Add a Card%}

### Identities

Refer to the following screenshot for help understanding all the values available for Identity items:

{% image /manage-items/identity-item.png Add an Identity %}

### Secure Notes

Refer to the following screenshot for help understanding all the values available for Secure Note items:

{% image /manage-items/note-item.png Add a Note%}

### Folders and Favorites

Items in your personal Vault can be organized into Folders, or marked as Favorites. For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

## Delete a Vault Item

You can delete any Vault items directly from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or from any client application:

- In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Delete** from the hover-over {% icon fa-cog %} **Gear** dropdown.
- On Mobile Applications, open the item and tap **Delete** in the {% icon fa-ellipsis-v %} **Menu**.
- On Desktop Applications and Browser Extensions, open the item and select the {% icon fa-trash %} **Delete** icon.

Before an item is deleted, you will be prompted to confirm deletion. Once confirmed, the item will be placed into the Trash.

### Items in the Trash

Deleted items are sent to the Trash, where they remain for 30 days after deletion. Once 30 days have lapsed, the item will be permanently deleted and not recoverable.

In the Trash, you can **Restore** an item to your Vault or **Permanently Delete** it prior to the 30-day waiting period:

{% image /manage-items/item-trash-restore-delete.png The Trash%}

## Share a Vault Item

If you're a member of an Organization, you can share a Vault item with the other members of your Organization. For more information, see [Share Items to a Collection]({% link _articles/organizations/share-to-a-collection.md %}).

## Clone a Vault Item

You can clone any Vault item that you have **Ownership** of, if you wish to create a duplicate of the item.

- In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Clone** from the hover-over {% icon fa-cog %} **Gear** dropdown.
- On Mobile Applications, open the item and tap **Clone** in the {% icon fa-ellipsis-v %} **Menu**.
- On Desktop Applications and Browser Extensions, open the item and select the {% icon fa-copy %} **Clone Item** option.

{% callout info %}
To clone an item within an Organization, you must clone it from the Organization Vault view, not the Personal Vault view.
{% endcallout %}
