---
layout: article
title: Sharing
categories: [organizations]
featured: false
popular: false
hidden: false
tags: [sharing, how to]
order: 04
redirect_from:
  - /article/share-to-a-collection/
---

{% callout info %}
In order to share items you need to be a member of an Organization. Learn more about [Organizations]({% link _articles/organizations/about-organizations.md %}) or learn how to [start your own two-person Organization]({{site.baseurl}}/article/getting-started-organizations/).
{% endcallout %}

Sharing items with Bitwarden means moving them into an Organization and Collection, a structure used to gather together Logins, Notes, Cards, and Identities for access by multiple users. There are a few different ways you can create Organization items for sharing:

## Move an Item to an Organization

Organization members can move items to any assigned Collection(s) unless they're given [**Read Only** access]({% link _articles/organizations/user-types-access-control.md %}) to that Collection. Items can only be moved to Organizations **from the Web Vault**:

1. Hover over the item you want to share and select the {% icon fa-cog %} gear dropdown:

   {% image /organizations/share-from-vault-overlay.png Select the gear dropdown %}

2. From the dropdown, select the {% icon fa-arrow-circle-o-right %} **Move to Organization** option.
3. On the **Move to Organization** screen:

   - Choose the **Organization** to share this item with.
   - Select one or more **Collections** to share this item into. You must select _at least_ one Collection.

4. Click **Save** to finishing moving this item for sharing.

Moving an item to an Organization **will transfer ownership to the Organization**. This means that anyone with permission can alter the item or delete it, which would remove it from your Vault as well. You can tell that an item is shared when it has the {% icon fa-cube %} **Shared** icon next to its name:

{% image /organizations/collection-shared-item.png Shared Item icon %}

## Create an Organization Item

Organization members can create new items directly for any assigned Collection(s) unless they're given [**Read Only** access](https://bitwarden.com/help/article/user-types-access-control/) to that Collection. Shared items can only be created **from the Web Vault**, either in your My Vault view or in the Organization view:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pertab" data-bs-toggle="tab" data-target="#personal" role="tab" aria-controls="pertab" aria-selected="true">My Vault View</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="orgtab" data-bs-toggle="tab" data-target="#organization" role="tab" aria-controls="orgtab" aria-selected="false">Organization View</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="personal" role="tabpanel" aria-labelledby="pertab">
{% capture personal %}

#### From the My Vault view

To create a new shared item:

1. On the {% icon fa-lock %} **My Vault** page, select the {% icon fa-plus %} **Add Item** button.
2. Fill in all the relevant information for the new Vault item.
3. In the **Ownership** section at the bottom of the Add Item panel, choose the Organization you want to share this item with.
4. Select one or more **Collections** to share this item into. You must select _at least_ one Collection.
5. Select the **Save** button to finishing creating the shared item.

Creating a shared item **will set ownership to the Organization**. This means that anyone with permission can alter the item or delete it, which would remove it from your Vault as well. You can tell that an item is shared when it has the {% icon fa-cube %} **Shared** icon next to its name:

{% image /organizations/collection-shared-item.png Shared Item icon %}

{% endcapture %}
{{ personal | markdownify }}

  </div>
  <div class="tab-pane" id="organization" role="tabpanel" aria-labelledby="orgtab">
{% capture organization %}

#### From the Organization view

To create a new shared item:

1. On your Organization's {% icon fa-lock %} **Vault** tab, select the {% icon fa-plus %} **Add Item** button.
2. Fill in all the relevant information for the new Vault item.
3. The Ownership of the item is automatically set to the Organization when you use this method, so all you need to do is select one or more **Collections** to share this item into. You must select _at least_ one Collection.
4. Select the **Save** button to finishing creating the shared item.

Creating a shared item or sharing an item **will set ownership to the Organization**. This means that anyone with permission can alter the item or delete it, which would remove it from your Vault as well. You can tell that an item is shared when it has the {% icon fa-cube %} **Shared** icon next to its name:

{% image /organizations/collection-shared-item.png Shared Item icon %}

{% endcapture %}
{{ organization | markdownify }}

  </div>
</div>
