---
layout: article
title: Create a Collection
categories: [organizations]
featured: true
popular: false
tags: [collections, how to]
order: 05
redirect_from:
  - /article/how-to-manage-collections/
---

This article will guide you through the process of creating a Collection. For more information about Collections, see [About Collections](https://bitwarden.com/help/article/about-collections/).

### In This Article
- [Create a Collection](#create-a-collection)
- [Create Nested Collections](#create-nested-collections)

## Create A Collection

Complete the following steps to create a collection:

1. Login to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Manage** tab and select **Collections** from the left menu.
3. On the **Collections** screen, select the **New Collection** button.

   {% image organizations/collection-list-overlay.png Select New Collection %}
4. On the **Add Collection** screen:
   - Enter a **Name** for your Collection.
   - Enter an **External Id** for your Collection. External ids are used to link resources to external systems, like user directories.
   - (*Teams and Enterprise Organizations*) Set the **Group Access** configuration for your Collection, including which Groups should be allowed to access this Collection. For more information, see [About Groups](https://bitwarden.com/help/article/about-groups/).
5. Select **Save** to finish creating your Collection.



## Create Nested Collections

Collections be "nested" in order to logically organize them within your Vault. There's no limit to the depth with which you can nest Collections, but creating too many levels may interfere with your Vault's interface.

{% note %}
Nested Collections are designed for in-Vault display purposes only. Nested Collections will not not inherit access or permissions from their "parent" Collection.
{% endnote %}

{% image organizations/collection-nested.png Nested Collection %}

To create a nested Collection, give your new Collection a **Name** that includes the "parent" Collection followed by a forward slash (`/`) delimiter, for example `Collection 1/Collection 1a`.

If there is no Collection with the corresponding "parent" name or if you don't have access to the "parent", the Collection won't nest and instead it's title will be displayed in-full.

{% image organizations/collection-nested-create.png Create a nested Collection %}
