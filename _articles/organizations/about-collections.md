---
layout: article
title: About Collections
categories: [organizations]
featured: true
popular: false
tags: [collections, access control, best practices]
order: 02
redirect_from:
  - /article/collections/
---

## What are Collections?

Collections are structures used by Organizations to gather together Logins, Notes, Cards, and Identities for sharing, similar to the Folders you might use in your Personal Vault. Organizations control access to shared items by assigning users to Collections. Unlike Folders, items in the Organization Vault *must* be placed in one or more Collections.

Users with the User Type **Manager** or higher can create Collections, manage items in each Collection, and manage the users with access to each Collection. For more information, see [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/).

Create a Collection by navigating to your Organization, opening the **Manage** tab, and selecting the **New Collection** button. For help creating a Collection, see [Create a Collection](https://bitwarden.com/help/article/create-collections/).

{% image organizations/collection-list-overlay.png Select New Collection %}

## Collections Best Practices

Collections are designed to associate related Logins, Notes, Cards, and Identities. You can organize your Collections however best fits your needs, but some common methodologies include:
- Collections by Department (*i.e. users from your Marketing Team are assigned to a **Marketing** Collection*)
- Collections by Function (*i.e. users from your Marketing Team are assigned to a **Social Media** Collection*)

{% image /organizations/collections-graphic-1.png Using Collections %}

For Teams and Enterprise Organizations, using **Groups** alongside Collections provides a deeper level of access control and scalability to sharing resources. When you create a Group, you can gather users from common departments and assign access to Collections at the Group-level instead of the individual-level. For more information, see [About Groups](https://bitwarden.com/help/article/about-groups/).

A common Collection-Group methodology is to create **Groups by Department** and **Collections by Function**, for example:

{% image /organizations/collections-graphic-2.png Using Collections with Groups%}

Other common methodologies include:
- Collections by Vendor or System (*i.e. users in an **Engineering** Group are assigned to a **AWS Credentials** Collection*)
- Groups by Locality (*i.e. users are assigned to a **US Employees** Group or **UK Employees** Group*)

### Next Steps

To get started using Collections, we recommend that you:
- [Create a Collection](https://bitwarden.com/help/article/create-collections)
- [Share Items to a Collection](https://bitwarden.com/help/article/share-to-a-collection/)
