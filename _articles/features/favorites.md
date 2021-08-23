---
layout: article
title: Favorites
categories: [account-management]
featured: true
popular: false
tags: [favorites, features, tutorial]
order: 07
---

Any item can be designated as a **Favorite** allow quick access to your most used items.

Even items [shared with you from an Organization]({% link _articles/organizations/sharing.md %}) can be designated a Favorite, but this will only impact how they appear in your Personal Vault (i.e. you won't make that item a Favorite for other users with access to the Organization or Collection).

{% callout success %}
Items marked as a **Favorite** will appear at the top of your {% icon fa-lock %} **My Vault** view in Browser Extensions and Mobile Apps, and in the {% icon fa-star %} **Favorites** filter in your Web Vault and Desktop Apps.
{% endcallout %}

## Designating Favorites

Designate any Vault item as a **Favorite** when you initially create it, or at any time by editing the item:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wvtab2" data-target="#webvault2" role="tab" aria-controls="webvault2" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab2" data-target="#browserextension2" role="tab" aria-controls="browserextension2" aria-selected="false">Browser Extension</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab2" data-target="#desktop2" role="tab" aria-controls="desktop2" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab2" data-target="#mobile2" role="tab" aria-controls="mobile2" aria-selected="false">Mobile</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault2" role="tabpanel" aria-labelledby="wvtab2">
{% capture web_vault %}
### Web Vault

On the Add Item or Edit Item screen, select the {% icon fa-star %} **Star** icon in the bottom-right corner and **Save** the item:

{% image favorites/favorite_webvault_cropped.gif %}

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension2" role="tabpanel" aria-labelledby="betab2">
{% capture browser_extension %}
### Browser Extension

On the Add Item or Edit Item screen, check the **Favorite** checkbox and **Save** the item:

{% image favorites/favorite_extension_cropped.gif %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop2" role="tabpanel" aria-labelledby="desktab2">
{% capture desktop_info %}
### Desktop App

On the Add Item or Edit Item screen, check the **Favorite** checkbox and **Save** the item:

{% image favorites/favorite_desktop_cropped.gif %}

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile2" role="tabpanel" aria-labelledby="mobtab2">
{% capture mobile_info %}
### Mobile App

On the Add Item or Edit Item screen, toggle the **Favorite** switch and **Save** the item:

{% image favorites/favorite_mobile.gif %}

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
</div>
