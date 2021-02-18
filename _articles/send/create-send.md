---
layout: article
title: Create a Send
categories: [send]
featured: true
popular: false
tags: []
order: 02
---

Sends are

Sends can be created and edited from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or any Bitwarden client application. Choose the Bitwarden application you want to Send from to get started:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="wvtab" href="#webvault" role="tab" aria-controls="webvault" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" href="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extensions</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop Apps</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" href="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile Apps</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="clitab" href="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane" id="webvault" role="tabpanel" aria-labelledby="wvtab">
{% capture web_vault %}
### Send from the Web Vault

Complete the following steps to create a new Send from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}:

1. Select **Send** from the top navigation bar.
2. Select the **Create New Send** button:

   {% image /send/send-create-webvault.png Create New Send button%}
3. On the **Create New Send** dialog, specify the following to create the body of your Send:

   - **Name**: Specify an identifiable, meaningful name for this Send.
   - **What type of Send is this?**: Specify whether this Send will be **Text** or a **File**:

     |**Text** | Type or paste the desired text into the input box. Toggle the **When accessing the Send, hide the text by default** option to require recipients to [toggle visibility]({% link _articles/send/send-privacy.md %}) when they open a Send.|
     |**File** | Select the **Choose File** button and browse the file to send. The maximum file size per Send is 100 MB.|

4. Still on the **Create New Send** dialog, configure the following **Options** as desired:
   - **Deletion Date**: The Send will be permanently deleted on the specified date and time (see [Send Ephemerality]({% link _articles/send/terminate-send.md %}) for details).
   - **Expiration Date**: The Send will expire on the specified date and time (see [Send Ephemerality]({% link _articles/send/terminate-send.md %}) for details).
   - **Maximum Access Count**: The Send will expire after the specified access count is reached (see [Send Ephemerality]({% link _articles/send/terminate-send.md %}) for details).
   - **Password**: Optionally require a password for users to access this Send.
   - **Notes**: Enter any private notes for this Send, which will only be visible to you.
   - **Disable this Send so that no one can access it**: Check this box to prevent this Send from be accessible through the generated link.
5. Select the **Save** button.
6. Once your Send is created, use the hover-over {% icon fa-cog %} gear dropdown and select the {% icon fa-copy %} **Copy Send Link** button to copy the generated link to your clipboard:

   {% image /send/send-from-webvault.png %}

   You can then paste it in an email or text

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}
### Send from a Browser Extension

Complete the following steps to create a new Send from a Bitwarden Browser Extension:

1. Tap the {% icon fa-paper-plane %} **Send** tab located at the bottom of your screen.

   This view will list all Sends that haven't reached their [deletion date]({% link _articles/send/terminate-send.md %}). Like the {% icon fa-lock %} **My Vault** view, you can filter through your Sends by tapping one of the available **Types**.
2. To start creating a new Send, tap the {% icon fa-plus %} **Add** icon:

   {% image /send/send-browserext.png Send View in a Browser Extension %}

3. On the Add Send view, specify the following to create the contents of your Send:
   - **Name**: Specify an identifiable, meaningful name for this Send.
   - **Type**: Specify whether this Send will be **Text** or a **File**:

     |**Text** | Type or paste the desired text into the input box. Toggle the **When accessing the Send, hide the text by default** option to require recipients to [toggle visibility]({% link _articles/send/send-privacy.md %}) when they open a Send.|
     |**File** | Select the **Choose File** button and browse the file to send. The maximum file size per Send is 100 MB.|

4. (*Required*) Set a **Deletion Date** for the Send. The Send will be [permanently deleted]({% link _articles/send/terminate-send.md %}) on the specified date and time. Deleted Sends will not be accessible to any old or new recipients, and will be removed from your Send view.
5. (*Optional*) Configure the following options as desired:

    - **Expiration Date**: The Send will [expire]({% link _articles/send/terminate-send.md %}) on the specified date and time.
    - **Maximum Access Count**: The Send will [expire]({% link _articles/send/terminate-send.md %}) after the specified access count is reached.
    - **Password**: Optionally require a [password for users to access]({% link _articles/send/send-privacy.md %}) this Send.
    - **Notes**: Enter any private notes for this Send, which will only be visible to you.
    - **Disable this Send so that no one can access it**: Toggle this option to prevent this Send from be accessible through the generated link.

6. Select the **Save** button to finish creating your Send.

Share your Send by tapping the {% icon fa-copy %} **Copy Link** icon and sending the link through email, text, or whichever communication program you prefer.

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}
### Send from a Desktop App

Complete the following steps to create a new Send from a Bitwarden Desktop App:
{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}
### Send from a Mobile App

Complete the following steps to Send from Bitwarden on your Android or iOS device:

1. Tap the {% icon fa-paper-plane %} **Send** tab located at the bottom of your screen.

   This view will list all Sends that haven't reached their [deletion date]({% link _articles/send/terminate-send.md %}). Like the {% icon fa-lock %} **My Vault** view, you can filter through your Sends by tapping one of the available **Types**.
2. To start creating a new Send, tap the {% icon fa-plus %} **Add** icon:

   {% image /send/send-mobile.png Send View on iOS and Android%}

3. On the Add Send view, specify the following to create the contents of your Send:

   - **Name**: Specify an identifiable, meaningful name for this Send.
   - **Type**: Specify whether this Send will be **Text** or a **File**:

     |**Text** | Type or paste the desired text into the input box. Toggle the **When accessing the Send, hide the text by default** option to require recipients to [toggle visibility]({% link _articles/send/send-privacy.md %}) when they open a Send.|
     |**File** | Tap the **Choose File** button and browse the file to send. The maximum file size per Send is 100 MB.|

4. (*Required*) Set a **Deletion Date** for the Send. The Send will be [permanently deleted]({% link _articles/send/terminate-send.md %}) on the specified date and time. Deleted Sends will not be accessible to any old or new recipients, and will be removed from your Send view.
5. (*Optional*) Configure the following options as desired:

   - **Expiration Date**: The Send will [expire]({% link _articles/send/terminate-send.md %}) on the specified date and time.
   - **Maximum Access Count**: The Send will [expire]({% link _articles/send/terminate-send.md %}) after the specified access count is reached.
   - **Password**: Optionally require a [password for users to access]({% link _articles/send/send-privacy.md %}) this Send.
   - **Notes**: Enter any private notes for this Send, which will only be visible to you.
   - **Disable this Send so that no one can access it**: Toggle this option to prevent this Send from be accessible through the generated link.
   - **Share this Send upon Save**: Toggle this option to automatically open your device's Share menu when you save the Send.

6. Tap the **Save** button to finish creating your Send.

If you didn't toggle the **Share this Send upon Save** option, share your Send by tapping the menu icon ( {% icon fa-ellipsis-v %} or {% icon fa-ellipsis-h%} ) and selecting **Share Link** to open your device's Share menu or **Copy Link** to copy the generated link to your clipboard.

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane show active" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}
### Send from the CLI

Bitwarden Send from the CLI is built around two commands: `send` and `receive`.





{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>
