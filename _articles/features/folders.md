---
layout: article
title: Folders
categories: [account-management]
featured: false
popular: false
tags: [categories, folders, sub-folders]
order: 06
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
## Delete a folder

You can delete folders from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or any Bitwarden client application.

- To delete a folder from the Web Vault or Desktop Application, hover over the pencil icon and click it. Then select the red trash/bin icon.

- From a Browser Extension or Mobile App, open the {% icon fa-cogs %} **Settings** menu, tap/select the **Folders** option. Choose the folder which you want to delete and click **Delete Folder**. (On Mobile, 'Delete' option is in the three dot menu to the top-right.)

## Create Nested Folders

Folders can be "nested" in order to logically organize them within your Vault. There's no limit to the depth with which you can nest Folders, but creating too many levels may interfere with your Vault's interface.

{% callout info %}
Searching inside a "parent" Folder will not include items in Folders nested inside it as potential search results. For more information, see [Search your Vault]({% link _articles/features/searching-vault.md %}).
{% endcallout %}

{% image /manage-items/subfolders.png Nested folders %}

To create a nested Folder, give a new Folder a **Name** that includes the "parent" Folder following by a forward slash (`/`) delimiter, for example `Personal/Email`.

If there is no Folder with the corresponding "parent" name, the Folder won't nest and its title will be displayed in-full.

## Add Items to a Folder

Once you've created a Folder in your Vault, there are a few ways to add items to it:

- From the **Add Item** or **Edit Item** screen on any Bitwarden application, select your new folder from the **Folder** dropdown and **Save** your item:

   {% image manage-items/add-to-folder.png Add item to a Folder%}
- From the **My Vault** view, select the Vault items you want to move and use the top-level {% icon fa-cog %} gear dropdown to select the {% icon fa-share %} **Move Selected** button. On the Move Selected dialog box, choose the Folder you want to move the item(s) to:

   {% image manage-items/add-to-folder-move.png Move item to a Folder %}
