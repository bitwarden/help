---
layout: article
title: Folders
categories: [account-management]
featured: false
popular: false
tags: [categories, folders, sub-folders]
order: 06
---

Folders are structures used to organize your Personal Vault by gathering together Logins, Cards, Identities, and Secure Notes. Using Folders is a great way to make all Vault items easy to find. Any Vault item can be added to a Folder, including [items shared with you from an Organization]({{site.baseurl}}/article/sharing/).

{% callout success %}
Items added to a Folder will still appear in your Vault when {% icon fa-th %} **All Items** is selected from the Filter menu, and deleting a Folder **will not** delete the items in that Folder.
{% endcallout %}

## Create a Folder

Folders can be created, renamed, and deleted from any Bitwarden client application:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wvtab" data-target="#webvault" role="tab" aria-controls="webvault" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="clitab" data-target="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault" role="tabpanel" aria-labelledby="wvtab">
{% capture web_vault %}
### Web Vault

To create a Folder, select the {% icon fa-plus %} **Add** icon in the Folders list:

{% image manage-items/folder-add-web.png Add a folder %}

Once created, you can **rename or delete** a folder at any time using the hover-over {% icon fa-pencil %} **Pencil** icon.

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}
### Browser Extension

To create a Folder, select the {% icon fa-cogs %} **Settings** menu, select the **Folders** option, and tap/select the {% icon fa-plus %} **Add** icon:

{% image manage-items/folder-add-extension.gif Add a folder %}

Once created, you can **rename or delete** a folder at any time from the same menu by selecting an existing folder.

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}
### Desktop App

To create a Folder, select the {% icon fa-plus %} **Add** icon in the Folders list:

{% image manage-items/folder-add-desk.png Add a folder %}

Once created, you can **rename or delete** a folder at any time using the hover-over {% icon fa-pencil %} **Pencil** icon.

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}
### Mobile App

To create a Folder, tap the {% icon fa-cogs %} **Settings** menu, tap the **Folders** option, and tap/select the {% icon fa-plus %} **Add** icon:

{% image manage-items/folder-add-mob.jpeg Add a folder %}

Once created, you can **rename or delete** a folder at any time from the same menu by tapping an existing folder.

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}
### CLI

To create a Folder, use the command:

```
bw create folder <foldername>
```

You can edit an existing folder using `bw edit <folderId>` and delete one using `bw delete folder <folderId>`. For more information, refer to our [CLI documentation]({{site.baseurl}}/article/cli).

{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>

{% callout info %}
If you're a member of an Organization, **Collections** will be shown below your Folders in the Filters menu.

There are similarities between Folders and Collections. **Folders organize your Personal Vault** (but can include [shared items]({{site.baseurl}}/article/sharing/)) and are unique to you, where Collections are shared between members of Organizations.
{% endcallout %}

### Nested Folders

Folders can be "nested" in order to logically organize them within your Vault. There's no limit to the depth with which you can nest Folders, but creating too many levels may interfere with your Vault's interface.

{% callout info %}
Searching inside a "parent" Folder will not include items in Folders nested inside it as potential search results. For more information, see [Search your Vault]({% link _articles/features/searching-vault.md %}).
{% endcallout %}

{% image manage-items/subfolders.png Nested folders %}

To create a nested Folder, give a new Folder a **Name** that includes the "parent" Folder following by a forward slash (`/`) delimiter, for example `Personal/Email`.

If there is no Folder with the corresponding "parent" name, the Folder won't nest and its title will be displayed in-full.

## Move Items to a Folder

Once you've created a Folder in your Vault, there are a few ways to move items to it:

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
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="clitab2" data-target="#cli2" role="tab" aria-controls="cli2" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault2" role="tabpanel" aria-labelledby="wvtab2">
{% capture web_vault %}
### Web Vault

From the Web Vault, you can either:

- Navigate to the **Add Item** or **Edit Item** screen, select your new folder from the **Folder** dropdown and **Save** your item:

   {% image manage-items/add-to-folder.png Move item to a Folder%}
- Navigate to the **My Vault** view, select the Vault items you want to move and use the top-level {% icon fa-cog %} gear dropdown to select the {% icon fa-share %} **Move Selected** button. On the Move Selected dialog box, choose the Folder you want to move the item(s) to:

   {% image manage-items/add-to-folder-move.png Move item to a Folder %}

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension2" role="tabpanel" aria-labelledby="betab2">
{% capture browser_extension %}
### Browser Extension

Open the Vault item you want to move, select the **Folders** dropdown, and choose the folder to move the item to:

{% image manage-items/folder-move-be.png Move item to a folder %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop2" role="tabpanel" aria-labelledby="desktab2">
{% capture desktop_info %}
### Desktop App

Open the Vault item you want to move, select the **Folders** dropdown, and choose the folder to move the item to:

{% image manage-items/folder-move-desk.png Move item to a folder %}

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile2" role="tabpanel" aria-labelledby="mobtab2">
{% capture mobile_info %}
### Mobile App

Open the Vault item you want to move, tap the **Folders** dropdown, and choose the folder to move the item to:

{% image manage-items/folder-move-mob.jpeg Move item to a folder %}

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli2" role="tabpanel" aria-labelledby="cliab2">
{% capture cli_info %}
### CLI

Use the `bw edit` command to manipulate the `folderId` attribute of the Vault item JSON object, as in the following example:

```
bw get item 7ac9cae8-5067-4faf-b6ab-acfd00e2c328 | jq '.folderId="3d9cecac-71a2-4637-9341-acf000eedf04"' | bw encode | bw edit item 7ac9cae8-5067-4faf-b6ab-acfd00e2c328
```

{% callout success %}
Using `edit` will require you to:
- Use the `get` command with the exact `id` of the item you want to edit.
- Know the exact `folderId` of the folder you want to move it to.
- Manipulate the JSON object (specifically, the `folderId` attribute) with a [command-line JSON processor like jq](https://stedolan.github.io/jq/){:target="\_blank"}.
- Use the `encode` command to encode changes to the JSON object.

If you're unfamiliar with using any of these parts, refer to our [CLI documentation]({{site.baseurl}}/article/cli).
{% endcallout %}

{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>

{% callout success %}
Items [shared with you from an Organization]({{site.baseurl}}/article/sharing/) can be added to your personal Folders, and doing so will only impact how the item appears in your Personal Vault (i.e. adding an item to a Folder won't give anyone access to that Folder, or change whether it's in a Folder in their Vaults).
{% endcallout %}
