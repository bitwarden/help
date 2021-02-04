---
layout: article
title: Create a Send
categories: [send]
featured: true
popular: false
tags: []
order: 02
---

Sends can be created and edited from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or any Bitwarden client application. Use one of the following tabs to learn how to create a Send:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wvtab" href="#webvault" role="tab" aria-controls="webvault" aria-selected="true">Web Vault</a>
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
    <a class="nav-link" id="clitab" href="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault" role="tabpanel" aria-labelledby="wvtab">
{% capture web_vault %}
### Send from the Web Vault

Complete the following steps to create a new Send from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}:

1. Select **Send** from the top navigation bar.
2. Select the **Create New Send** button:

   {% image /send/send-create-webvault.png Create New Send button%}
3. On the **Create New Send** dialog, specify the following to create the body of your Send:

   - **Name**: Specify an identifiable, meaningful name for this Send.
   - **What type of Send is this?**: Specify whether this Send will be **Text** or a **File**:

     |Text Sends|File Sends|
     |----------|----------|
     |To send text, type or paste the desired text into the input box.<br><br>Checking the **When accessing the Send, hide the text by default** option will require recipients to manually  **Toggle visibility** when they open a Send. For more information, see [INSERT LINK](#).|To send a file, select the **Browse...** button and attach the file to send.<br><br>The maximum file size per Send is 100 MB.|
4. Still on the **Create New Send** dialog, configure the following **Options** as desired:
   - **Deletion Date**: The Send will be permanently deleted on the specified date and time.
   - **Expiration Date**: The Send will expire on the specified date and time.
   - **Maximum Access Count**: The Send will expire after the specified access count is reached.
   - **Password**:
   - **Notes**:
   - **Disable this Send so that no one can access it**:
5. Select the **Save** button.
6. ??
{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}
### Send from a Browser Extension

Complete the following steps to create a new Send from a Bitwarden Browser Extension:
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

Complete the following steps to create a new Send from a Bitwarden Mobile App:
{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}
### Send from the CLI

Complete the following steps to create a new Send from the Bitwarden CLI:
{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>
