---
layout: article
title: Share Items to a Collection
categories: [organizations]
featured: false
popular: false
hidden: false
tags: [sharing, how to]
order: 07
---

Collections are structures used by Organizations to gather together Logins, Notes, Cards, and Identities for sharing. There are a few different ways you can share an item to a Collection:

## Share Existing Items From Your Personal Vault

All users can share items to an assigned Collection from their personal Vault, unless given **Read Only** access to that Collection. For more information, see [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/).

{% image /organizations/share-from-vault-overlay.png %}

Complete the following steps to share an item from your personal Vault:

1. Hover over the item you want to share and select the gear dropdown.
2. From the gear dropdown, select the **Share** option.
3. On the **Share** screen, select the Organization you want to share this item with.
4. Check the checkboxes of each Collection you want to share this item in. You must select *at least* one Collection.

   Users cannot share to Collections for which they are given **Read Only** access.
5. Click **Save** to finishing sharing this item.

Shared items will have a **Shared** icon next to the item name:

{% image /organizations/collection-shared-item.png Shared Item icon %}

{% callout info %}
Sharing an item with an Organization will transfer ownership to the Organization. This means that anyone with permission can alter the item or delete it, thereby removing it from your Vault.
{% endcallout %}

## Create a New Shared Item For Your Organization

All users can create shared items for an assigned Collection, unless given **Read Only** access to that Collection. For more information, see [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/).

You can create a shared item from either your Personal Vault, or from the Organization view:

### From Your Personal Vault

Complete the following steps to create a shared item from your personal Vault:

1. Select the **Add Item** button.
2. Fill in all relevant fields for the shared item.
3. In the **Ownership** section at the bottom of the panel, select the Organization you want to share this item with.
4. Check the checkboxes of each Collection you want to share this item in. You must select *at least* one Collection.

   Users cannot create shared items for Collections for which they are given **Read Only** access.
5. Click **Save** to finishing creating the shared item.

Shared items will have a **Shared** icon next to the item name:

{% image /organizations/collection-shared-item.png Shared Item icon %}

### From the Organization view

Complete the following steps to create a shared item from your Organization view:

1. Open your Organization.
2. Select the **Add Item** button.
3. Fill in all relevant fields for the shared item.
3. In the **Collections** section at the bottom of the panel, check the checkboxes of each collection you want to share this item with. You must select *at least* one Collection.

   Users cannot create shared items for Collections for which they are given **Read Only** access.
4. Click **Save** to finish creating the shared item.

Shared items will have a **Shared** icon next to the item name:

{% image /organizations/collection-shared-item.png Shared Item icon %}
