---
layout: article
title: Import Data from Dashlane
categories: [import-export]
featured: true
popular: false
tags: [import, dashlane]
order: "04"
description: "This article explains how you can export data from Dashlane and import into the Bitwarden password manager."
---

Use this article for help exporting data from Dashlane and importing into Bitwarden. Dashlane data exports are currently available in different formats depending on which application you are using.

{% callout success %}
**If you're using the Dashlane Windows Desktop app or "Legacy" macOS app**, [export your data as a .json file](https://support.dashlane.com/hc/en-us/articles/202625092-How-to-export-or-back-up-your-Dashlane-account) and use the Dashlane importer on the **Tools** &rarr; **Import Data** page in your Bitwarden Web Vault:

{% image importing/dashlane-bw-web-vault.png Import Dashlane .json %}
{% endcallout %}

## Export from Dashlane Web App

If you don't have the option of exporting your Dashlane data as `.json` (see the above **Tip**), you will need to export a `.csv` and edit it to fit the Bitwarden import format:

1. In the Dashlane Web app, select {% icon fa-cog %} **My account** from the navigation and select the **Export Data** option:

   {% image importing/dashlane-export.png Export Data from Dashlane %}

   Depending on how recently you logged in, you may be prompted to enter your Master Password to proceed.
2. From the Export data list, select the **Export to CSV** button.

## Condition your CSV

Dashlane exports a `.zip` archive with 1 `.csv` for each item type (**Passwords**, **Secure Notes**, **Personal Info**, etc.). For this guide, we'll focus on conditioning and importing the `credentials.csv` file to import your Login data:

1. Extract the `.zip` you downloaded from the Dashlane Web App and open the `credentials.csv` file. This file will have the following header:

   ```
   username,username2,username3,title,password,note,url,category,otpSecret
   ```

   The remaining steps will walk you through editing the above **Dashlane** format to following **Bitwarden** format:

   ```
   folder,favorite,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
   ```
2. First, you'll need to move and rename some columns. The following table describes what to do with each existing column in the Dashlane `credentials.csv` file. **We recommend using a spreadsheet program to make these edits.**

   {% callout success %}You'll need to add more columns later on, so take column numbering literally. For example, at the end of this step, you should have `category` in the first column, `name` in the 4th column, and 2 empty columns in between.{% endcallout %}

   |Column Name|What To Do|
   |-----------|----------|
   |`username`|Rename to `login_username` and move to the 9th column.|
   |`username2`|If you have more than 1 username per item, create a `fields` column in the 6th position and change the cell/entry to `"username2: second_username"`.|
   |`username3`|If you have more than 1 username per item, create a `fields` column in the 6th position and change the cell/entry to `"username3: second_username"`.|
   |`title`|Rename to `name` and move to the 4th column.|
   |`password`|Rename to `login_password` and move to 10th column.|
   |`note`|Rename to `notes` and move to the 5th column.|
   |`url`|Remove to `login_uri` and move to the 8th column.|
   |`category`|Rename to `folder` and move to the 1st column.|
   |`otpSecret`|Rename to `login_totp` and move to 11th column.|
3. Next, you'll need to add additional columns to the `.csv`. The following table describes what columns to create and where to place them in the file:

   |Column Name|What To Do|
   |-----------|----------|
   |`favorite`|Create in 2nd column and enter a `1` for any item you want in your Favorites.|
   |`type`|Create in 3rd column and enter `login` for all items.|
   |`fields`|If you didn't already, create in 6th column and leave blank for all items without `username2` or `username3` values.|
   |`reprompt`|Create in the 7th column and enter a `1` for any item you want to be prompted for you Master Password to view. This is similar to Dashlane's **Always require Master Password** option.|

Once you're done, double-check that your `.csv` file matches the following format:

```
folder,favorite,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
```

## Import to Bitwarden

Importing to Bitwarden **can only be done from the Web Vault or CLI**. Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import your data:

1. In the Web Vault, select **Tools** from the top navigation bar.
2. Select **Import Data** from the left-hand Tools menu.
3. From the format dropdown, select **Bitwaden (csv)**.
4. Select the **Choose File** button and aff the file to import or **copy/paste** the contents of your file into the input box.

   {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicates of items in your Vault. This means that **importing multiple files will create duplicate Vault items** if an item is in both the Vault and the file being imported.{% endcallout %}
5. Select the **Import Data** button to complete your import.
6. After successful import, delete the import source file from your computer. This will protect you in the event your computer is compromised.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/).
