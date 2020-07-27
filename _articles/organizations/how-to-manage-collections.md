---
layout: article
title: How to Effectively Manage Bitwarden Collections
categories: [organizations]
featured: true
popular: false
tags: [collections, groups, access control]
---

As your organization’s use of Bitwarden grows, it helps to have users who can manage collections independently, without requiring access to everything within the organizational vault.

Managing collections and groups is a simple way to separate, grant, or limit access to vault items in Bitwarden, thereby controlling user visibility of resources.

A complete list of roles and access control can be seen in the help note  [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/), and a table is at the end of this post.

We will review the **Manager** use case and the capabilities that role has in creating and managing collections.

Before addressing collection management, let’s review **Collections**, **Groups**, and **Folders** within Bitwarden:

- A **Collection** within Bitwarden is a set of related items, such as login credentials, shared within an organization’s vault.  The items are grouped together according to whatever classification structure the organization administrator chooses -- for example by department such as sales or operations, or type of account such as shipping, ecommerce, or social media. You can think of a collection as analogous to a folder, but for organizational items
- A **Group** within Bitwarden is a set of authorized Bitwarden users -- in a business this could be Marketing, Sales, or Operations. Groups are available in Bitwarden Enterprise
- For reference, a **Folder** is a set of items within a personal vault the same way that a **Collection** is a set of items in an organization vault. Folders are not part of this article on **Collections**

## The Manager Role within Bitwarden
When a user is granted a Manager role by an organization Admin or Owner, they are given access to manage the collections of which they are a part.  The Manager role has fewer permissions than that Owner or Admin roles.

In this example, our user is a manager of the following collections. Each of these collections represents numerous shared items. 

- Customer Success
- Employees
- IT
- Marketing
- Sales

And this user can create a **New Collection** via the button on the top right

{% image collections/bitwarden-collections-manage.png %}

##  Adding New Collections and Groups
After clicking **New Collection**, the user is prompted to enter the Name and External ID.

From there the Manager of the collection can assign groups to the newly created collection.

{% note %}
Groups are available in Bitwarden Enterprise
{% endnote % }

{% image collections/bitwarden-collections-add-new.png %}

For each Group added, additional options such as Hide Passwords and Read Only are available.

**Read Only**
Selecting this option will prevent users assigned to this collection from adding new items, and editing or deleting existing items.

**Hide Passwords**
This option hides passwords, TOTP seeds, and any custom fields of type hidden in this collection. This also disables the ability for an end-user to copy a password. In this configuration, an item may only be used with auto-fill.

{% warning %}
Enabling hidden passwords prevents the easy copy and paste of hidden items, however it does not completely prevent user access to this information. Please treat hidden passwords as you would any shared credential.
{% endwarning %}

### Adding items to a Collection
When residing within the view of a collection in the web vault, new items will be saved within the collection.

Items within a personal vault can be shared with a collection as well. Simply click on the **Settings** icon in the web vault, or edit the item in the browser extension to share it with the appropriate collection.

**Unsharing items from a Collection**

Once an item has been shared with an organizational vault, it cannot be unshared back to a personal vault in a single step. This is an intentional design. Users must consider any item shared as being available for all authorized users until that item is both unshared AND the password is changed.

The recommended procedure to unshare an item is:

- Clone the item in the organization vault
	- Collection Owners or Admins can share back to their personal vaults
	- Collection Managers can share within a private collection
- Delete the original organizational item
- Change the password on the cloned item now in a private collection

## Adding Individuals to a Collection
Managers can also add individual users to collections via the **Settings** icon next to a created collection.


{% image collections/bitwarden-collections-settings-add-users.png %}

After selecting the Users option, a list of individuals within the organization will appear.

{% image collections/bitwarden-collections-add-users.png %}

With these capabilities in place, individual employees empowered as Managers will be able to create their own new collections, and add groups and users to those collections. They also have the ability to manage collections created by another manager.

{% note %}
Managers do not have access to change the composition of Groups. For that access, Admin or Owner roles are required. For example, if a Manager creates a collection of **Design Services** and adds the **Marketing** group to have access, and a user is removed from the Marketing group by the Admin, then that user will no longer have access to the Design Services collection.
{% endnote %}

### Table of User Roles and Access

{% image collections/user-roles-access-control-table.png %}