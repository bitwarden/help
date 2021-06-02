---
layout: article
title: Import Data from Firefox
categories: [import-export]
featured: true
popular: false
tags: [import, firefox]
order: 05
---

Use this article for help exporting data from Firefox and importing into Bitwarden.

## Export from Firefox

Exporting from Firefox can look a little different depending on which version you're using, or if you're using a Firefox-based browser like Tor Browser or Waterfox:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="latesttab" data-bs-toggle="tab" data-target="#latest" role="tab" aria-controls="latest" aria-selected="true">Latest Version</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="oldertab" data-bs-toggle="tab" data-target="#older" role="tab" aria-controls="older" aria-selected="false">Older Versions</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="basedtab" data-bs-toggle="tab" data-target="#based" role="tab" aria-controls="based" aria-selected="false">Firefox-based</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="latest" role="tabpanel" aria-labelledby="latesttab">
{% capture latest %}

### Export from Latest Version

To export logins from the latest version of Firefox:

1. Using the address bar, navigate to `about:logins`
2. Select the {% icon fa-ellipsis-h %} menu button from the top right and select **Export Logins...** from the dropdown.

   You will be prompted to specify a location to save your login export to.

   Firefox will export your logins as a `.csv`.

{% endcapture %}
{{ latest | markdownify }}
  </div>
  <div class="tab-pane" id="older" role="tabpanel" aria-labelledby="oldertab">
{% capture older %}

### Export from Older Versions

Some older versions of Firefox do not support native export. Complete the following steps to export using an FF Password Exporter.

1. [Download](https://github.com/kspearrin/ff-password-exporter){:target="\_blank"}, install, and open the FF Password Exporter.
2. Select a User Profile from the Detected Firefox User Profiles, or from a specified custom profile directory. If you have set a Master Password for the User Profile, enter it:

   {% image importing/ff-password-exporter.png %}
3. Select the **Export Passwords** button.
4. Choose `.csv` for the file format, and save the file to your device.

{% endcapture %}
{{ older | markdownify }}
  </div>
  <div class="tab-pane" id="based" role="tabpanel" aria-labelledby="basedtab">
{% capture based %}

### Export from Firefox-based Browsers

Some Firefox-based browsers offer login export in a different location than vanilla Firefox. If the steps to import from the **Latest Version** don't work, try the following:

1. Using the address bar, navigate to `about:preferences#privacy`.
2. Click the **Saved Logins** button.
3. Click the {% icon fa-ellipsis-h %} menu button from the top right and select **Export Logins** from the dropdown.

   You will be prompted to specify a location to save your login export.

   Most Firefox-based browsers will export your logins as a `.csv`.

{% endcapture %}
{{ based | markdownify }}
  </div>
</div>

## Import to Bitwarden

Importing data to Bitwarden **can only be done from the** [**Web Vault**](https://vault.bitwarden.com){:target="\_blank"} or [CLI]({{site.baseurl}}/article/cli/#import). Data is [encrypted]({{site.baseurl}}/article/what-encryption-is-used/) locally before being sent to the server for storage. To import your data:

 1. In the Web Vault, select **Tools** from the top navigation bar.
 2. Select **Import Data** from the left-hand Tools menu.
 3. From the format dropdown, choose **Firefox (csv)**.

 5. Select the **Choose File** button and add the file to import or **copy/paste** the contents of your file into the input box.

    {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
 6. Select the **Import Data** button to complete your import.
 7. After successful import, delete the import source file from your computer. This will protect you in the event your computer is compromised.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({{site.baseurl}}/article/attachments/#attach-a-file).
