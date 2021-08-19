---
layout: article
title: Collections
categories: [organizations]
featured: true
popular: false
tags: [collections, access control, best practices]
order: 02
redirect_from:
  - /article/collections/
  - /article/create-collections/
---

## What are Collections?

Collections gather together Logins, Notes, Cards, and Identities for [secure sharing]({{site.baseurl}}/article/sharing/) from an Organization. Think of Collections as Organization-equivalents to the [Folders]({{site.baseurl}}/article/folders/) used to organize a Personal Vault, with a few key differences:

- Organizations control access to Organization-owned items by assigning users or [Groups]({{site.baseurl}}/article/about-groups/) to Collections.
- Organization-owned items **must** be included in at least one Collection.

### Using Collections

For many Organizations, using Collections means adding a set of Vault items and individually assigning users to that Collection. Some common methods for constructing scaleable Collections include **Collections by Department** (i.e. users from your Marketing Team are assigned to a **Marketing** Collection), or **Collections by Function** (i.e. users from your Marketing Team are assigned to a **Social Media** Collection):

{% image organizations/collections-graphic-1.png Using Collections %}

Teams and Enterprise Organizations can also designate access to Collections based on user [Groups]({{site.baseurl}}/article/about-groups/), rather than individual users. Group-Collection associations provide a deeper level of access control and scalability to sharing resources. One common Group-Collection methodology is to create **Groups by Department** and **Collections by Function**, for example:

{% image organizations/collections-graphic-2.png Using Collections with Groups%}

Other common methodologies include **Collections by Vendor or System** (i.e. users in an **Engineering** Group are assigned to a **AWS Credentials** Collection) and **Groups by Locality** (i.e. users are assigned to a **US Employees** Group or **UK Employees** Group).

## Create a Collection

Organization [Managers (or higher)]({{site.baseurl}}/article/user-types-access-control/) and [Provider Users]({{site.baseurl}}/article/provider-users/provider-user-types) can create and manage Collections. To create a Collection:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. Open the **Manage** tab and select the {% icon fa-plus %} **New Collection** button:

   {% image organizations/collection-list-overlay.png Select New Collection %}
3. Give your Collection a **Name** and, if you're a Teams or Enterprise Organization, assign **Group Access** to any existing [Group]({{site.baseurl}}/article/about-groups/).

   {% callout success %}The **External Id** field is only relevant if you're using [Directory Connector]({{site.baseurl}}/article/directory-sync/).{% endcallout %}
4. Select **Save** to finish creating your Collection.

### Nested Collections

Collections can be "nested" to logically organize them within your Vault:

{% image organizations/collection-nested.png Nested Collection %}

Nested Collections are **for display-purposes only**. They will not inherit items, access, or permissions from their "parent" Collection.

To create a nested Collection, follow the [steps above](#create-a-collection), but give your Collections a **Name** that includes the "parent" name followed by a forward slash (`/`) delimiter, for example `Collection 1/Collection 1a`. If the "parent" Collection doesn't exist, the title will be displayed in-full.

## Manage a Collection

You may find that you need to add or remove users from a Collection, or delete it entirely. Both of these can be done from the **Manage** &rarr; **Collections** view by hovering over the desired Collection and selecting the {% icon fa-cog %} gear dropdown:

{% image organizations/collection-delete.png Change a Collection %}

{% callout info %}
Deleting a Collection **will not** delete the Vault items included in it. When a Collection is deleted, Vault items will be moved to the {% icon fa-cube %} **Unassigned** filter, accessible from the Organization Vault.
{% endcallout %}
