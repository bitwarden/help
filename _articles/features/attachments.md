---
layout: article
title: Using file attachments
categories: [features]
featured: false
popular: false
tags: [attachments, storage, files]
---

{% callout info %}Using file attachments requires a premium membership or paid organization account.{% endcallout %}

Attaching and managing files can be done from any Bitwarden client application. Any file  100MB or smaller can be attached to an item in your vault.

All **premium membership** and **paid organization** accounts include 1GB of encrypted file storage. Additional storage can be purchased in 1GB increments if needed.

## Web Vault

Select the {% icon fa-cog %} options button next to the item in your vault and then select the **Attachments** option. You will then be presented with a list of all attached files for that item as well as options for uploading new attachments.

## Other Applications

After viewing an item in your vault you will see existing attachments listed at the bottom of the page. To upload a new attachment, or to delete existing attachments, edit the item and then select the **Attachments** option.

## Fixing "Old" Attachments

Prior to December 2018 file attachments used a different method of encrypting their data. We have since moved to a newer, better way of encrypting file attachments. Any attachments that use the older encryption method will be labeled with an {% icon fa-exclamation-triangle %} alert icon in your vault listing. You should upgrade these old attachments to the newer method of encryption so that other account-related features can function properly.

1. Open the page for editing your attachments (see above).
2. Click the **Fix** button next to the old attachment. This process will download the attachment, re-encrypt it using the new encryption method, re-upload the attachment back to your vault, and delete the old version of the attachment.

Once an attachment has successfully been upgraded, the {% icon fa-exclamation-triangle %} alert icon and fix button should disappear.
