---
layout: article
title: Import Data from macOS & Safari
categories: [import-export]
featured: true
popular: false
tags: [import, macos, safari]
order: "05"
description: "This article explains how you can export data from macOS Keychain or Safari and import into the Bitwarden password manager."
---

Use this article for help exporting data from Safari or macOS and importing into Bitwarden.

{% callout success %}
Exporting passwords requires **Safari 15.0+** or **macOS Monterey (12.0)+**.
{% endcallout %}

## Export from Safari or macOS

You can export your passwords directly from Safari or from macOS System Preferences:


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="safaritab" data-bs-toggle="tab" data-target="#safari" role="tab" aria-controls="safari" aria-selected="true">Safari</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="mactab" data-bs-toggle="tab" data-target="#mac" role="tab" aria-controls="mac" aria-selected="false">macOS System Preferences</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="safari" role="tabpanel" aria-labelledby="safaritab">
{% capture safari_content %}
### Safari

To export your data from Safari:

1. Select **File** &rarr; **Export** &rarr; **Passwords...** from the macOS menu bar:

   {% image importing/safari.png Export from Safari %}
2. You will be prompted with a dialog confirming that you want to export saved passwords. Select **Export Passwords...** to continue.
3. Save your export to any location and use Touch ID or your macOS password to complete the export.

{% endcapture %}
{{ safari_content | markdownify }}
  </div>
  <div class="tab-pane" id="mac" role="tabpanel" aria-labelledby="mactab">
{% capture macos_content %}
### macOS System Preferences

To export your data from macOS:

1. Open the macOS **System Preferences** app.
2. In System Preferences, select **Passwords**. You'll be prompted to use Touch ID or your password to continue.
3. On the Passwords dialog, select the menu icon ( {% icon fa-ellipsis-h %} ) and select **Export Passwords...**:

   {% image importing/macos.png Export from macOS System preferences %}
4. You will be prompted with a dialog confirming that you want to export saved passwords. Select **Export Passwords...** to continue.
5. Save your export to any location and use Touch ID or your password to complete the export.

{% endcapture %}
{{ macos_content | markdownify }}
  </div>
</div>

## Import to Bitwarden

Importing data to Bitwarden **can only be done from the Web Vault** or CLI. Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used) locally before being sent to the server for storage. To import your data:

1. In the Web Vault, select **Tools** from the top navigation bar.
2. Select **Import Data** from the left-hand Tools menu.
3. From the format dropdown, choose **Safari and macOS (csv)**.
4. Select the **Choose File** button and add the file to import or copy/paste the contents of your file into the input box.

   {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicates** of Vault items if that item is alread in the Vault.{% endcallout %}
5. Select the **Import Data** button to complete your import.
6. After successful import, delete the import source file from your computer. This will protect you in the event your computer is compromised.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/).
