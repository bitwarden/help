---
layout: article
title: Folders
categories: [account-management]
featured: false
popular: false
tags: [categories, folders, sub-folders]
order: 05
---

Folders are structures used to organize your Personal Vault by gathering together Logins, Cards, Identities, and Secure Notes. Using Folders is a great way to make all Vault items easy to find.

{% callout success %}
Items added to a Folder will still appear in your Vault when {% icon fa-th %} **All Items** is selected from the Filter menu, and deleting a Folder **will not** delete the items in that Folder.
{% endcallout %}

## Create a Folder

Folders can be created from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or any Bitwarden client application.
- From the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or Desktop Application, select the {% icon fa-plus %} **Add** icon in your **Folders** list.

  Once created, you can rename a folder at any time using the hover-over {% icon fa-pencil %} **Pencil** icon.
- From a Mobile App or Browser Extension, open the {% icon fa-cogs %} **Settings** menu, tap/select the **Folders** option, and tap/select the {% icon fa-plus %} **Add** icon.

  Once created, you can rename a folder at any time from the same menu by tapping/selecting an existing folder.
- From the CLI, use the command `bw create folder <foldername>`.

{% image /manage-items/folder-add-all.png Add a folder%}

{% callout info %}
If you're a member of an Organization, **Collections** will be shown below your Folders in the Filters menu.

There are similarities between Folders and Collections. **Folders are only for your Personal Vault and unique to you**, where Collections are shared between members of Organizations.
{% endcallout %}

## Create Nested Folders

Folders can be "nested" in order to logically organize them within your Vault. There's no limit to the depth with which you can nest Folders, but creating too many levels may interfere with your Vault's interface.

{% callout info %}
Searching inside a "parent" Folder will not include items in Folders nested inside it as potential search results. For more information, see [Search your Vault]({% link _articles/features/searching-vault.md %}).
{% endcallout %}

{% image /manage-items/subfolders.png Nested folders %}

To create a nested Folder, give a new Folder a **Name** that includes the "parent" Folder following by a forward slash (`/`) delimiter, for example `Personal/Email`.

If there is no Folder with the corresponding "parent" name, the Folder won't nest and its title will be displayed in-full.
