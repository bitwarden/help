---
layout: article
title: File Attachments
categories: [account-management]
featured: false
popular: false
tags: [attachments, storage, files]
order: 06
---

Files can be attached to Vault items from any Bitwarden application. An individual file attachment must be 100MB or smaller. By default, paid users have access to 1GB of encrypted storage for file attachments. Additional storage can be purchased in 1GB increments.

{% callout info %}
File Attachments are available for Premium users, including members of Paid Organizations (Families, Teams, or Enterprise).
{% endcallout %}

## Attach a File

To attach a file to a Vault item from a Bitwarden application:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="wvtab" data-bs-toggle="tab" href="#web" role="tab" aria-controls="web" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="betab" data-bs-toggle="tab" href="#browser-extension" role="tab" aria-controls="browser-extension" aria-selected="true">Browser Extension</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="mobtab" data-bs-toggle="tab" href="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="desktab" data-bs-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="clitab" data-bs-toggle="tab" href="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="web" role="tabpanel" aria-labelledby="wvtab" markdown="1">
### Attach from Web Vault

Complete the following steps to attach a file to a Vault item from the Web Vault:

1. Hover-over the Vault item you'd like to attach a file to, and select the {% icon fa-cog %} **Gear** icon.
2. Select {% icon fa-paperclip %} **Attachments** from the dropdown.
3. In the Attachments dialog box, **Browse...** for your file.
4. Select the **Save** button to finish attaching a file.

Once a Vault item has a file attached to it, selecting {% icon fa-paperclip %} **Attachments** from the {% icon fa-cog %} **Gear** dropdown will also display a list of attached files.
  </div>
  <div class="tab-pane" id="browser-extension" role="tabpanel" aria-labelledby="betab" markdown="1">
### Attach from a Browser Extension

Complete the following steps to attach a file to a Vault item from a Bitwarden Browser Extension:

1. Open the item you'd like to attach a file to, and select the **Edit** button.
2. Select {% icon fa-paperclip %} **Attachments**.
3. On the Attachments page/dialog, **Browse...** for your file.
4. Select the **Save** button to finish attaching a file.

Once a Vault item has a file attached to it, selecting {% icon fa-paperclip %} **Attachments** from will also display a list of attached files.
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab" markdown="1">
### Attach from Mobile

Complete the following steps to attach a file to a Vault item from a Bitwarden Mobile App:

1. Open the item you'd like to attach a file to, and select the {% icon fa-ellipsis-v%} **Menu** button.
2. Select {% icon fa-paperclip %} **Attachments**.
3. On the Attachments page, select the **Choose File** button and browse for your file.
4. Select the **Save** button to finish attaching a file.

Once a Vault item has a file attached to it, selecting {% icon fa-paperclip %} **Attachments** from the {% icon fa-ellipsis-v%} **Menu** dropdown will also display a list of attached files.
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab" markdown="1">
### Attach from Desktop

Complete the following steps to attach a file to a Vault item from a Bitwarden Desktop App:

1. Open the item you'd like to attach a file to, and select the **Edit** button.
2. Select {% icon fa-paperclip %} **Attachments**.
3. On the Attachments page/dialog, **Browse...** for your file.
4. Select the **Save** button to finish attaching a file.

Once a Vault item has a file attached to it, selecting {% icon fa-paperclip %} **Attachments** from will also display a list of attached files.
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="clitab" markdown="1">
### Attach from the CLI

Use `bw create attachment` to attach a file to an existing Vault item, for exaple:

```
bw create attachment --file /path/to/myfile.ext --itemid <itemid>
```

For more information, refer to our [CLI documentation]({% link _articles/miscellaneous/cli.md %}).
  </div>
</div>

## View an Attachment

Viewing an attachment mimics the same procedure used to attach a file. Refer to one of the above sections for help.

## Add Storage Space

By default, users with a Premium subscription have access to 1GB of encrypted storage for file attachments. Additional storage can be purchased in 1GB increments. Complete the following steps to purchase additional storage:

1. In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select the **Settings** tab.
2. From the **Settings** menu, select **Premium Membership**.
3. In the Storage section, select the **Add Storage** button.
4. Using the counter, choose the number of **GB of Storage to Add** and select **Submit**.

Adding storage will result in adjustments to your billing totals and immediately charge your payment method on file. The first change will be prorated for the remainder of the current billing cycle.

{% callout info %}
**A note about attachments created prior to December, 2018:**

Prior to December 2018, File Attachments used a different method of encrypting their data. We have since moved to a newer, better way of encrypting File Attachments. Any attachments that use the older encryption method will be labeled with an {% icon fa-exclamation-triangle %} alert icon in your vault listing. You should upgrade these old attachments to the newer method of encryption so that other account-related features can function properly:

1. Open the page for editing your attachments (see above instructions).
2. Click the **Fix** button next to the old attachment. This process will download the attachment, re-encrypt it using the new encryption method, re-upload the attachment back to your vault, and delete the old version of the attachment.

Once an attachment has successfully been upgraded, the {% icon fa-exclamation-triangle %} alert icon and fix button should disappear.
{% endcallout %}
