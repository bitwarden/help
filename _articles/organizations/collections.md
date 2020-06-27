---
layout: article
title: Controlling vault access with collections
categories: [organizations]
featured: true
popular: false
tags: [collections, sub-collections, access control]
---

Collections allow you to group related items that are being shared from your organization's vault. A simple personal organization for a family may only want to have one or two collections (ex. Parents and Kids), while a larger organization like a company may have many collections (ex. Servers, Social Media Accounts, Executives, etc).

{% image organizations/collection-listing.png %}

When you add a new user to your organization, you can associate that user to one or more collections within your organization. Once the user has access to your organization, any items that are placed into that user's associated collections will be available in their vault.

When associating a user to a particular collection, you can select options for users and groups that will access the items within the collection.

**Read Only:** Selecting this option will ensure that the user cannot add, edit, or delete any items within that particular collection (they can just view and use them). You can also associate [user groups]({% link _articles/organizations/groups.md %}) to collections in the same way.

**Hide Passwords:** This option will hide all passwords, hidden fields, and TOTP seeds within the collection, from users who are assigned to it. This will also prevent copy and paste actions as well. Credentials in this collection will have to leverage autofill functions for input.

{% note %}
Collections are different than [folders]({% link _articles/features/folders.md %}). Collections are a way to organize items and control user access within an organization’s vault while folders are a way for individual users to organize items within their own personal vault. An individual user may wish to further organize the items being shared with them in their own vault into a personalized folder structure that makes sense just for them.
{% endnote %}

## Nested collections (sub-collections)

Nested collections work by using a naming convention with the forward slash character (`/`) as a delimiter. For example, if I have collections with the names "Servers" and "Servers/Production", "Production" will be nested as a sub-collection underneath the "Servers" collection.

{% note %}
Creating sub-collections is only for display purposes. Collection access and permissions are not inherited by their "child" sub-collections.
{% endnote %}

There is no limit on the depth that you can go with nested collections, though the application interface may begin to "break" if you go too deep.

If a collection's name contains the forward slash delimiter, yet no "parent" collection exists (or the user does not have access to the parent collection), its name will be displayed in its entirety.

{% note %}
Nested-collections work similarly to nested folders. You can refer to the [Folders article]({% link _articles/features/folders.md %}) for more information on creating nested structures in your vault.
{% endnote %}
