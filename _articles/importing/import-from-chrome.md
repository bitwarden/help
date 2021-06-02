---
layout: article
title: Import Data from Google Chrome
categories: [import-export]
featured: true
popular: false
tags: [import, chrome, opera, vivaldi, edge]
order: 04
---

Use this article for help exporting data from Google Chrome and importing into Bitwarden.

{% callout success %}
The steps in this article can also be used with any Chromium-based browser, including Opera, Microsoft Edge (Chromium), Brave, and Vivaldi.
{% endcallout %}

## Export from Chrome

You can export Google Chrome data from a Desktop browser or a Mobile browser:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="desktab" data-bs-toggle="tab" data-target="#desk" role="tab" aria-controls="desk" aria-selected="true">Chrome on Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobiletab" data-bs-toggle="tab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Chrome on Mobile</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="desk" role="tabpanel" aria-labelledby="desktab">
{% capture desktop %}

### Chrome on Desktop

To export passwords from Chrome on your Desktop:

1. Using the address bar, navigate to `chrome://settings/passwords`.
2. Select the {% icon fa-ellipsis-v %} menu button in the Saved Passwords section, and select **Export passwords...** from the dropdown.

   You may be prompted to enter your computer's password for authorization.
3. Specify a location to save your export to, and select **comma-separated values** from the **Format:** field.
4. Select **Save** to finish exporting from Chrome.

{% endcapture %}
{{ desktop | markdownify }}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobiletab">
{% capture mobile %}

### Chrome on Mobile

To export passwords from Chrome on your Mobile Device:

1. Tap the {% icon fa-ellipsis-h %} menu button and tap **Settings**.
2. Tap **Passwords**.
3. Tap **Export Passwords**.

   You may be prompted to enter your device PIN or a biometric for authorization.
4. Specify a location to save your export to.

{% endcapture %}
{{ mobile | markdownify }}
  </div>
</div>

## Import to Bitwarden

Importing data to Bitwarden **can only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank"} or [CLI]({{site.baseurl}}/article/cli/#import). Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import your data:

 1. In the Web Vault, select **Tools** from the top navigation bar.
 2. Select **Import Data** from the left-hand Tools menu.
 3. From the format dropdown, choose a **Chrome (csv)** (see [What file formats does Bitwarden support for import?]({{site.baseurl}}/article/import-faqs/#q-what-file-formats-does-bitwarden-support-for-import)).

 5. Select the **Choose File** button and add the file to import or **copy/paste** the contents of your file into the input box.

    {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
 6. Select the **Import Data** button to complete your import.
 7. After successful import, delete the import source file from your computer. This will protect you in the event your computer is compromised.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/#attach-a-file).
