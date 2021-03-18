---
layout: article
title: Favorites
categories: [account-management]
featured: true
popular: false
tags: [favorites, features, tutorial]
order: 04
---

Any item can be designated as a **Favorite** allow quick access to your most used items.

Even items [shared from an Organization]({% link _articles/organizations/share-to-a-collection.md %}) can be designated a Favorite, but this will only impact how they appear in your Personal Vault (i.e. you won't make that item a Favorite for other users with access to the Organization or Collection).

{% callout success %}
Items marked as a **Favorite** will appear at the top of your {% icon fa-lock %} **My Vault** view in Browser Extensions and Mobile Apps, and in the {% icon fa-star %} **Favorites** filter in your Web Vault and Desktop Apps.
{% endcallout %}

## Designating Favorites

Designate any Vault item as a **Favorite** when you initially create it or by editing the item from any Bitwarden application:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wvtab" href="#webvault" role="tab" aria-controls="webvault" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" href="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" href="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault" role="tabpanel" aria-labelledby="wvtab">
{% capture web_vault %}

#### Favorites in the Web Vault

On the Add Item or Edit Item screen, select the {% icon fa-star %} **Star** icon in the bottom-right corner and **Save** the item:

{% image /favorites/favorite_webvault_cropped.gif %}

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

#### Favorites in Browser Extensions

On the Add Item or Edit Item screen, check the **Favorite** checkbox and **Save** the item:

{% image /favorites/favorite_extension_cropped.gif %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

#### Favorites in Desktop

On the Add Item or Edit Item screen, check the **Favorite** checkbox and **Save** the item:

{% image /favorites/favorite_desktop_cropped.gif %}

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

#### Favorites in Mobile

On the Add Item or Edit Item screen, toggle the **Favorite** switch and **Save** the item:

{% image /favorites/favorite_mobile.gif %}

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
</div>
