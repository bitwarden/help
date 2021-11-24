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

You can export your passwords directly from Safari or from the Keychain Access application:


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="certtab" data-bs-toggle="tab" data-target="#cert" role="tab" aria-controls="cert" aria-selected="true">Safari</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="azuretab" data-bs-toggle="tab" data-target="#azure" role="tab" aria-controls="azure" aria-selected="false">Keychain Access</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="cert" role="tabpanel" aria-labelledby="certtab">
{% capture cert_content %}
### Safari

To export your data from Safari:

1. Select **File** &rarr; **Export** &rarr; **Passwords...** from the macOS menu bar:

   {% image importing/safari.png Export from Safari %}
2. You will be prompted with a dialog confirming that your want to export saved passwords. Select **Export Passwords...** to continue.
3. Save your export to any location and use Touch ID or your macOS password to complete the export.

{% endcapture %}
{{ cert_content | markdownify }}
  </div>
  <div class="tab-pane" id="azure" role="tabpanel" aria-labelledby="azuretab">
{% capture key_content %}
### Keychain Access

{% endcapture %}
{{ key_content | markdownify }}
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
