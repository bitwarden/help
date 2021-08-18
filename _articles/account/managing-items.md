---
layout: article
title: Vault Items
categories: [account-management]
featured: false
popular: false
tags: [account, items, import, delete, trash, clone]
order: 03
---

Effectively managing the items in your Vault is key to making sure that you secure and have seamless access to your information, and can safely share information with friends, family, teams, and colleagues. There are 4 types of items you can store in your Vault; Logins, Cards, Identities, and Secure Notes:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="logintab" data-bs-toggle="tab" data-target="#logins" role="tab" aria-controls="logins" aria-selected="true">Logins</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="cardtab" data-bs-toggle="tab" data-target="#cards" role="tab" aria-controls="cards" aria-selected="false">Cards</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="identitytab" data-bs-toggle="tab" data-target="#identity" role="tab" aria-controls="identity" aria-selected="false">Identities</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="notetab" data-bs-toggle="tab" data-target="#notes" role="tab" aria-controls="notes" aria-selected="false">Secure Notes</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="logins" role="tabpanel" aria-labelledby="logintab">
{% capture logins %}
### Logins

Login items are most often used to store username and password combinations, and support [TOTP seeds]({{site.baseurl}}/article/authenticator-keys/) for Premium users. Whatever plan you're on, we recommend giving every Login a [URI for easy auto-fill]({{site.baseurl}}/article/uri-match-detection):

{% image manage-items/login-item.png Login Vault Item %}

{% endcapture %}
{{ logins | markdownify }}
  </div>
  <div class="tab-pane" id="cards" role="tabpanel" aria-labelledby="cardtab">
{% capture cards %}
### Cards

Card items can be used to store credit or debit card information:

{% image manage-items/card-item.png Card Vault Item %}

{% endcapture %}
{{ cards | markdownify }}
  </div>
  <div class="tab-pane" id="identity" role="tabpanel" aria-labelledby="identitytab">
{% capture identities %}
### Identities

Identities can be used to store billing info, mailing info, or anything else you might need to have access to when filling out online forms:

{% image manage-items/identity-item.png Identity Vault Item %}

{% endcapture %}
{{ identities | markdownify }}
  </div>
  <div class="tab-pane" id="notes" role="tabpanel" aria-labelledby="notetab">
{% capture notes %}
### Secure Notes

Secure Notes can be used to store encrypted freeform text for anything you want protected:

{% image manage-items/note-item.png Secure Note Vault Item %}

{% endcapture %}
{{ notes | markdownify }}
  </div>
</div>

{% callout success %}
You can import items into your Vault from a variety of password management solutions. For more information, see [Import Data to your Vault]({% link _articles/importing/import-data.md %}).
{% endcallout %}

## Manage Vault Items

You can add, edit, and delete Vault items from any Bitwarden client application:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
  <a class="nav-link active" id="wvtab" data-bs-toggle="tab" data-target="#wv" role="tab" aria-controls="wv" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="betab" data-bs-toggle="tab" data-target="#be" role="tab" aria-controls="be" aria-selected="false">Browser Extensions</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="mobtab" data-bs-toggle="tab" data-target="#mob" role="tab" aria-controls="mob" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="desktab" data-bs-toggle="tab" data-target="#desk" role="tab" aria-controls="desk" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="clitab" data-bs-toggle="tab" data-target="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="wv" role="tabpanel" aria-labelledby="wvtab">
{% capture wv %}
### Web Vault

{% image manage-items/manage-webvault.png Manage an Item %}

{% endcapture %}
{{ wv | markdownify }}
  </div>
  <div class="tab-pane" id="be" role="tabpanel" aria-labelledby="betab">
{% capture be_sync %}
### Browser Extensions

{% image manage-items/manage-be.png Manage an Item %}

{% endcapture %}
{{ be_sync | markdownify }}
  </div>
  <div class="tab-pane" id="mob" role="tabpanel" aria-labelledby="mobtab">
{% capture mob_sync%}
### Mobile Apps

{% image manage-items/manage-mobile-1.png Add or Open an Item %}

{% image manage-items/manage-mobile-2.png Manage an Item %}


{% endcapture %}
{{ mob_sync | markdownify }}
  </div>
  <div class="tab-pane" id="desk" role="tabpanel" aria-labelledby="desktab">
{% capture desk_sync%}
### Desktop Apps

{% image manage-items/manage-desktop.png Manage an Item %}

{% endcapture %}
{{ desk_sync | markdownify }}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="clitab">
{% capture cli_sync%}
### CLI

For more information, refer to our [CLI documentation]({% link _articles/miscellaneous/cli.md %}).

{% endcapture %}
{{ cli_sync | markdownify }}
  </div>
</div>

### Folders and Favorites

Items in your Vault can be organized into Folders, or marked as Favorites. For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

### Items in the Trash

Deleted items are sent to the Trash, where they remain for 30 days after deletion. Once 30 days have lapsed, the item will be permanently deleted and not recoverable.

In the Trash, you can **Restore** an item to your Vault or **Permanently Delete** it prior to the 30-day waiting period:

{% image manage-items/item-trash-restore-delete.png The Trash %}

### Protect Individual Items

For any given Vault item, you can activate the **Master password re-prompt** option from the Add/Edit screen to require verification of your Master Password to access or auto-fill sensitive Vault items:

{% callout warning %}
Master password re-prompt **is not** an encryption mechanism. This feature is an interface-only guardrail that a sophisticated user may find ways to work around. We recommend **never** leaving your Vault unlocked when unattended or on a shared workstation.
{% endcallout %}

{% image manage-items/reprompt.gif Master Password Reprompt %}

## Move Items to an Organization

If you're a member of an [Organization]({{site.baseurl}}/article/about-organizations/), you can move Vault items to your Organization for sharing with other Organization members. Learn more about [Organizations]({{site.baseurl}}/article/about-organizations/), [Collections]({{site.baseurl}}/article/about-collections), and [Sharing]({{site.baseurl}}/article/sharing/).

## Clone Vault Items

You can clone any Vault item that you have **Ownership** of, if you wish to create a duplicate of the item.

- In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Clone** from the hover-over {% icon fa-cog %} **Gear** dropdown.
- On Mobile Applications, open the item and tap **Clone** in the {% icon fa-ellipsis-v %} **Menu**.
- On Desktop Applications and Browser Extensions, open the item and select the {% icon fa-copy %} **Clone Item** option.

{% callout info %}
To clone an item within an Organization, you must clone it from the Organization Vault view, not the Personal Vault view.
{% endcallout %}
